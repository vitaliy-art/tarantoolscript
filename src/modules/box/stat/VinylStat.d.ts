import { VinylDiskStat } from './VinylDiskStat';
import { VinylMemoryStat } from './VinylMemoryStat';
import { VinylRegulatorStat } from './VinylRegulatorStat';
import { VinylSchedulerStat } from './VinylSchedulerStat';
import { VinylTxStat } from './VinylTxStat';

export interface VinylStat {
  /**
   * The vinyl regulator decides when to take or delay actions for disk IO, grouping activity in batches so that it is consistent and efficient.
   * The regulator is invoked by the vinyl scheduler, once per second, and updates related variables whenever it is invoked.
   */
  regulator: VinylRegulatorStat;

  /**
   * Since vinyl is an on-disk storage engine (unlike memtx which is an in-memory storage engine),
   * it can handle large databases – but if a database is larger than the amount of memory that is allocated for vinyl,
   * then there will be more disk activity.
   */
  disk: VinylDiskStat;

  /**
   * Although the vinyl storage engine is not “in-memory”, Tarantool does need to have memory for write buffers and for caches.
   *
   * Therefore we can say that “L0 is becoming full” when the amount in memory.level0 is close to the maximum,
   * which is `regulator.dump_watermark`. We can expect that “L0 = 0” immediately after a dump.
   * `box.stat.vinyl().memory.page_index` and `box.stat.vinyl().memory.bloom_filter` have the current amount being used for index-related structures.
   * The size is a function of the number and size of keys, plus `vinyl_page_size`, plus `vinyl_bloom_fpr`.
   * This is not a count of bloom filter “hits” (the number of reads that could be avoided because the bloom filter predicts their presence in a run file) –
   * that statistic can be found with `index_object:stat()`.
   */
  memory: VinylMemoryStat;

  /** This is about requests that affect transactional activity (“tx” is used here as an abbreviation for “transaction”). */
  tx: VinylTxStat;

  /**
   * This primarily has counters related to tasks that the scheduler has arranged for dumping or compaction:
   * (most of these items are reset to 0 when the server restarts or when `box.stat.reset()` occurs):
   * - `box.stat.vinyl().scheduler.compaction_*` is the amount of data from recent changes that has been compacted.
   * This is divided into `scheduler.compaction_input` (the amount that is being compacted),
   * `scheduler.compaction_queue` (the amount that is waiting to be compacted),
   * `scheduler.compaction_time` (total time spent by all worker threads performing compaction, in seconds),
   * and `scheduler.compaction_output` (the amount that has been compacted, which is presumably smaller than `scheduler.compaction_input`).
   * - `box.stat.vinyl().scheduler.tasks_*` is about dump/compaction tasks, in three categories,
   * `scheduler.tasks_inprogress` (currently running), `scheduler.tasks_completed` (successfully completed) `scheduler.tasks_failed` (aborted due to errors).
   * - `box.stat.vinyl().scheduler.dump_*` has the amount of data from recent changes that has been dumped,
   * including `dump_time` (total time spent by all worker threads performing dumps, in seconds),
   * and `dump_count` (the count of completed dumps), `dump_input` and `dump_output`.
   */
  scheduler: VinylSchedulerStat;
}
