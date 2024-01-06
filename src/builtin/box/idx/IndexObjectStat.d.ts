export interface IndexObjectStat {
  /** Timings subdivided by percentages. */
  latency: LuaTable<string, number>;

  range_count: number;

  lookup: number;

  cache: {
    invalidate: {
      rows: number;
      bytes: number;
    };
    index_size: number;
    rows: number;
    /** Number of evictions from the cache. */
    evict: {
      rows: number;
      bytes: number;
    };
    put: {
      rows: number;
      bytes: number;
    };
    lookup: number;
    bytes: number;
    get: {
      rows: number;
      bytes: number;
    }
  };

  run_histogram: string;

  /** The number of bytes total. */
  bytes: number;

  disk: {
    /** Size of data in the last LSM tree level. */
    last_level: {
      bytes_compressed: number;
      pages: number;
      rows: number;
      bytes: number;
    };
    rows: number;
    /** Counts of `inserts`|`updates`|`upserts`|`deletes`. */
    statement: {
      inserts: number;
      replaces: number;
      upserts: number;
      deletes: number;
    };
    /** Counts of dumps and their amounts. */
    dump: {
      input: {
        rows: number;
        bytes: number;
      };
      time: number;
      output: {
        bytes_compressed: number;
        pages: number;
        rows: number;
        bytes: number;
      };
      count: number;
    };
    bloom_size: number;
    index_size: number;
    iterator: {
      read: {
        bytes_compressed: number;
        pages: number;
        rows: number;
        bytes: number;
      };
      /** Counts of bloom filter `hits`|`misses`. */
      bloom: {
        hit: number;
        miss: number;
      };
      lookup: number;
      get: {
        rows: number;
        bytes: number;
      };
    };
    /** Counts of compactions and their amounts. */
    compaction: {
      input: {
        bytes_compressed: number;
        pages: number;
        rows: number;
        bytes: number;
      };
      queue: {
        bytes_compressed: number;
        pages: number;
        rows: number;
        bytes: number;
      };
      time: number;
      output: {
        bytes_compressed: number;
        pages: number;
        rows: number;
        bytes: number;
      };
      count: number;
    };
    /** The size in pages. */
    pages: number;
    bytes_compressed: number;
    bytes: number;
  };

  /** Maximum number of bytes in a range. */
  range_size: number;

  rows: number;

  run_avg: number;

  /** Average number of dumps required to trigger. */
  dumps_per_compaction: number;

  upsert: {
    squashed: number;
    applied: number;
  };

  bytes: number;

  put: {
    rows: number;
    bytes: number;
  };

  skip: {
    rows: number;
    bytes: number;
  };

  run_count: number;

  txw: {
    bytes: number;
    rows: number;
    iterator: {
      lookup: number;
      get: {
        rows: number;
        bytes: number;
      };
    };
  };

  memory: {
    bytes: number;
    index_size: number;
    rows: number;
    iterator: {
      lookup: number;
      get: {
        rows: number;
        bytes: number;
      };
    };
  };

  get: {
    rows: number;
    bytes: number;
  }
}
