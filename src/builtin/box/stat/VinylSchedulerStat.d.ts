export interface VinylSchedulerStat {
  dump_time: number;
  tasks_inprogress: number;
  dump_output: number;
  compaction_queue: number;
  compaction_output: number;
  compaction_time: number;
  dump_count: number;
  tasks_failed: number;
  tasks_completed: number;
  dump_input: number;
  compaction_input: number;
}
