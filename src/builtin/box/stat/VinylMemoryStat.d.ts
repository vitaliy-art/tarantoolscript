export interface VinylMemoryStat {
  /** The number of bytes that are being used for tuples (data). */
  tuple_cache: number;
  /** Transactional memory. This will usually be 0. */
  tx: number;
  /** The “level0” memory area, sometimes abbreviated “L0”, which is the area that vinyl can use for in-memory storage of an LSM tree. */
  level0: number;
  page_index: number;
  bloom_filter: number;
}
