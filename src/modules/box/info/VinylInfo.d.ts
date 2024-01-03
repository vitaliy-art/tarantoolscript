export interface VinylInfo {
  tx: {
    conflict: number;
    commit: number;
    rollback: number;
    statements: number;
    transactions: number;
    gap_locks: number;
    read_views: number;
  };

  regulator: {
    dump_bandwidth: number;
    rate_limit: number;
    write_rate: number;
    blocked_writers: number;
    dump_watermark: number;
  };

  memory: {
    tuple_cache: number;
    tx: number;
    level0: number;
    page_index: number;
    bloom_filter: number;
  };

  disk: {
    data_compacted: number;
    data: number;
    index: number;
  };

  scheduler: {
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
}
