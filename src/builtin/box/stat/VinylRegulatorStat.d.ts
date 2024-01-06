export interface VinylRegulatorStat {
  /**
   * The estimated average rate at which dumps are done. Initially this will appear as 10485760 (10 megabytes per second).
   * Only significant dumps (larger than one megabyte) are used for estimating.
   */
  dump_bandwidth: number;

  /**
   * The point when dumping must occur.
   * The value is slightly smaller than the amount of memory that is allocated for vinyl trees, which is the `vinyl_memory` parameter.
   */
  dump_watermark: number;

  /**
   * The actual average rate at which recent writes to disk are done.
   * Averaging is done over a 5-second time window, so if there has been no activity for 5 seconds then `regulator.write_rate = 0`.
   * The `write_rate` may be slowed when a dump is in progress or when the user has set `snap_io_rate_limit`.
   */
  write_rate: number;

  /** The write rate limit, in bytes per second, imposed on transactions by the regulator based on the observed dump/compaction performance. */
  rate_limit: number;

  /** The number of fibers currently blocked waiting for vinyl L0 memory quota. */
  blocked_writers: number;
}
