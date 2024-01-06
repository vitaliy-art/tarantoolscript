/** @noSelf */
export interface Slab {
  /** Show an aggregated memory usage report (in bytes) for the slab allocator. This report is useful for assessing out-of-memory risks. */
  info(): SlabInfo;

  /**
   * Show a detailed memory usage report (in bytes) for the slab allocator.
   * The report is broken down into groups by data item size as well as by slab size (64-byte, 136-byte, etc).
   * The report includes the memory allocated for storing both tuples and indexes.
   */
  stats(): SlabStats[];
}

export interface SlabInfo {
  /** Allocated only for tuples. */
  items_size: number;
  /** `items_used / items_size` */
  items_used_ratio: string;
  /** Memory limit for slab allocator (as configured in the `memtx_memory` parameter, the default is `2^28 bytes = 268,435,456` bytes). */
  quota_size: number;
  /** `quota_used / quota_size` */
  quota_used_ratio: string;
  /** `arena_used / arena_size` */
  arena_used_ratio: string;
  /** Used only for tuples. */
  items_used: number;
  /** Used by slab allocator. */
  quota_used: number;
  /** Allocated for both tuples and indexes. */
  arena_size: number;
  /** Used for both tuples and indexes. */
  arena_used: number;
}

export interface SlabStats {
  /** The allocated, but currently unused memory. */
  mem_free: number;
  /** The memory used for storing data items (tuples and indexes). */
  mem_used: number;
  /** The number of stored items. */
  item_count: number;
  /** The size of each data item */
  item_size: number;
  /** The number of slabs allocated */
  slab_count: number;
  /** The size of each allocated slab. */
  slab_size: number;
}
