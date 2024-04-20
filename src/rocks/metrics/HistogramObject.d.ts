import { ObservationObject } from './ObservationObject';

export interface HistogramObject {
  /**
   * Record a new value in a histogram. This increments all bucket sizes under the labels `le` >= `num` and the labels that match `label_pairs`.
   * @param num Value to put in the histogram.
   * @param labelPairs Table containing label names as keys, label values as values.
   * All internal counters that have these labels specified observe new counter values.
   * Note that both label names and values in `label_pairs` are treated as strings.
   */
  observe(num: number, labelPairs: Record<string, string | number>): void;

  /**
   * Return a concatenation of `counter_obj:collect()` across all internal counters of `histogram_obj`.
   */
  collect(): ObservationObject[];

  /**
   * Remove the observation for `label_pairs`.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in label_pairs are treated as strings.
   */
  remove(labelPairs: Record<string, string>): void;
}
