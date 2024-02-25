export interface FiberTop {
  cpu: LuaTable<string, {
    /**
     * instant (in percent), which indicates the share of time the fiber was executing during the previous event loop iteration.
     */
    instant: number;

    /**
     * time (in seconds), which estimates how much CPU time each fiber spent processing during its lifetime.
     */
    time: number;

    /**
     * average (in percent), which is calculated as an exponential moving average of instant values over all the previous event loop iterations.
     */
    average: number;
  }>;

  /**
   * Indicates the number of times the TX thread detected it was rescheduled on a different CPU core during the last event loop iteration.
   *
   * Note: With `2.11.0`, cpu_misses is deprecated and always returns `0`.
   */
  cpu_misses: number;
}
