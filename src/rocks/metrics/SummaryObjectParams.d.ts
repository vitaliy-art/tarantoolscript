export interface SummaryObjectParams {
  /**
   * Sets the duration of each bucket’s lifetime – that is, how many seconds the observations are kept before they are discarded.
   */
  max_age_time: number;

  /**
   * Sets the number of buckets in the sliding time window.
   * This variable determines the number of buckets used to exclude observations older than `max_age_time` from the summary.
   */
  age_buckets_count: number;
}
