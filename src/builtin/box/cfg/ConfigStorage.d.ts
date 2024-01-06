export interface ConfigStorage {
  /**
   * Since version 1.7.4. How much memory Tarantool allocates to actually store tuples.
   * When the limit is reached, INSERT or UPDATE requests begin failing with error ER_MEMORY_ISSUE.
   * The server does not go beyond the memtx_memory limit to allocate tuples,
   * but there is additional memory used to store indexes and connection information.
   * Depending on actual configuration and workload, Tarantool can consume up to 20% more than the memtx_memory limit.
   */
  memtx_memory?: number,

  /**
   * Since version 1.7.4. Size of the largest allocation unit, for the memtx storage engine.
   * It can be increased if it is necessary to store large tuples. See also: vinyl_max_tuple_size.
   */
  memtx_max_tuple_size?: number,

  /**
   * Since version 1.7.4. Size of the smallest allocation unit. It can be decreased if most of the tuples are very small.
   * The value must be between 8 and 1048280 inclusive.
   */
  memtx_min_tuple_size?: number,

  /**
   * Since version 2.10.0. Specifies the allocator used for memtx tuples. The possible values are system and small:
   * - system is based on the malloc function. This allocator allocates memory as needed, checking that the quota is not exceeded.
   * - small is a special slab allocator. Note that this allocator is prone to unresolvable fragmentation on specific workloads,
   *   so you can switch to system in such cases.
   */
  memtx_allocator?: 'system' | 'small',

  /**
   * The multiplier for computing the sizes of memory chunks that tuples are stored in.
   * A lower value may result in less wasted memory depending on the total amount of memory available and the distribution of item sizes.
   * Allowed values range from 1 to 2.
   */
  slab_alloc_factor?: number,

  /**
   * Since version 2.8.1. Specifies the granularity (in bytes) of memory allocation in the small allocator.
   * The value of slab_alloc_granularity should be a power of two and should be greater than or equal to 4.
   * Below are few recommendations on how to adjust the slab_alloc_granularity value:
   * - To store small tuples of approximately the same size, set slab_alloc_granularity to 4 bytes to save memory.
   * - To store tuples of different sizes, you can increase the slab_alloc_granularity value. This results in allocating tuples from the same mempool.
   */
  slab_alloc_granularity?: number,

  /**
   * Since version 1.7.4. Bloom filter false positive rate – the suitable probability of the bloom filter to give a wrong result.
   * The vinyl_bloom_fpr setting is a default value for one of the options in the Options for space_object:create_index() chart.
   */
  vinyl_bloom_fpr?: number,

  /**
   * Since version 1.7.4. The cache size for the vinyl storage engine. The cache can be resized dynamically.
   */
  vinyl_cache?: number,

  /**
   * Since version 1.7.5. Size of the largest allocation unit, for the vinyl storage engine.
   * It can be increased if it is necessary to store large tuples. See also: memtx_max_tuple_size.
   */
  vinyl_max_tuple_size?: number,

  /**
   * Since version 1.7.4. The maximum number of in-memory bytes that vinyl uses.
   */
  vinyl_memory?: number,

  /**
   * Since version 1.7.4. Page size. Page is a read/write unit for vinyl disk operations.
   * The vinyl_page_size setting is a default value for one of the options in the Options for space_object:create_index() chart.
   */
  vinyl_page_size?: number,

  /**
   * Since version 1.7.4. The default maximum range size for a vinyl index, in bytes.
   * The maximum range size affects the decision whether to split a range.
   *
   * If vinyl_range_size is not nil and not 0, then it is used as the default value
   * for the range_size option in the Options for space_object:create_index() chart.
   *
   * If vinyl_range_size is nil or 0, and range_size is not specified when the index is created,
   * then Tarantool sets a value later depending on performance considerations.
   * To see the actual value, use index_object:stat().range_size.
   *
   * In Tarantool versions prior to 1.10.2, vinyl_range_size default value was 1073741824.
   */
  vinyl_range_size?: number,

  /**
   * Since version 1.7.4. The maximal number of runs per level in vinyl LSM tree. If this number is exceeded, a new level is created.
   * The vinyl_run_count_per_level setting is a default value for one of the options in the Options for space_object:create_index() chart.
   */
  vinyl_run_count_per_level?: number,

  /**
   * Since version 1.7.4. Ratio between the sizes of different levels in the LSM tree.
   * The vinyl_run_size_ratio setting is a default value for one of the options in the Options for space_object:create_index() chart.
   */
  vinyl_run_size_ratio?: number,

  /**
   * Since version 1.7.5. The maximum number of read threads that vinyl can use for some concurrent operations, such as I/O and compression.
   */
  vinyl_read_threads?: number,

  /**
   * Since version 1.7.5. The maximum number of write threads that vinyl can use for some concurrent operations, such as I/O and compression.
   */
  vinyl_write_threads?: number,
}
