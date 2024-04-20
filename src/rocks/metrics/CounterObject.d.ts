import { ObservationObject } from './ObservationObject';

export interface CounterObject {
  /**
   * Increment the observation for `label_pairs`. If `label_pairs` doesn’t exist, the method creates it.
   * @param num Increment value.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in `label_pairs` are treated as strings.
   */
  inc(num: number, labelPairs: Record<string, string | number>): void;

  /**
   * @returns Array of `observation` objects for a given counter.
   */
  collect(): ObservationObject[];

  /**
   * Remove the observation for `label_pairs`.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in label_pairs are treated as strings.
   */
  remove(labelPairs: Record<string, string>): void;

  /**
   * Set the observation for `label_pairs` to 0.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in label_pairs are treated as strings.
   */
  reset(labelPairs: Record<string, string>): void;
}
