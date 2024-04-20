import { ObservationObject } from './ObservationObject';

export interface SummaryObject {
  /**
   * Record a new value in a summary.
   * @param num Value to put in the data stream.
   * @param labelPairs A table containing label names as keys, label values as values.
   * All internal counters that have these labels specified observe new counter values.
   *  You can’t add the "quantile" label to a summary. It is added automatically.
   * If `max_age_time` and `age_buckets_count` are set, the observed value is added to each bucket.
   * Note that both label names and values in `label_pairs` are treated as strings.
   */
  observe(num: number, labelPairs: Record<string, string | number>): void;

  /**
   * Return a concatenation of `counter_obj:collect()` across all internal counters of `summary_obj`.
   * If `max_age_time` and `age_buckets_count` are set,
   * quantile observations are collected only from the head bucket in the sliding time window, not from every bucket.
   * If no observations were recorded, the method will return `NaN` in the values.
   */
  collect(): ObservationObject[];

  /**
   * Remove the observation for `label_pairs`.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in label_pairs are treated as strings.
   */
  remove(labelPairs: Record<string, string>): void;
}
