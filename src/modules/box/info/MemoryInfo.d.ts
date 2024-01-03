export interface MemoryInfo {
  /**
   * Number of bytes used for caching user data.
   * The `memtx` storage engine does not require a cache,
   * so in fact this is the number of bytes in the cache for the tuples stored for the `vinyl` storage engine.
   */
  cache: number;

  /**
   * Number of bytes used for storing user data (the tuples) with the `memtx` engine and with level 0 of the `vinyl` engine,
   * without taking memory fragmentation into account.
   */
  data: number;

  /**
   * Number of bytes in use by active transactions.
   * For the `vinyl` storage engine, this is the total size of all allocated objects
   * (struct `txv`, struct `vy_tx`, struct `vy_read_interval`) and tuples pinned for those objects.
   */
  tx: number;

  /** Number of bytes used for Lua runtime. */
  lua: number;

  /** Number of bytes used for network input/output buffers. */
  net: number;

  /**
   * Number of bytes used for indexing user data,
   * including `memtx` and `vinyl` memory tree extents, the `vinyl` page index, and the `vinyl` bloom filters.
   */
  index: number;
}
