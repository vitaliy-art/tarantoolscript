import { ObservationObject } from './ObservationObject';

export interface GaugeObject {
  /**
   * Increment the observation for `label_pairs`. If `label_pairs` doesn’t exist, the method creates it.
   * @param num Increment value.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in `label_pairs` are treated as strings.
   */
  inc(num: number, labelPairs: Record<string, string | number>): void;

  /**
   * Decrement the observation for `label_pairs`. If `label_pairs` doesn’t exist, the method creates it.
   * @param num Decrement value.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in `label_pairs` are treated as strings.
   */
  dec(num: number, labelPairs: Record<string, string | number>): void;

  /**
   * Set the observation for `label_pairs` to `num`. If `label_pairs` doesn’t exist, the method creates it.
   * @param num Set value.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in `label_pairs` are treated as strings.
   */
  set(num: number, labelPairs: Record<string, string>): void;

  /**
   * @returns Array of `observation` objects for a given gauge.
   */
  collect(): ObservationObject[];

  /**
   * Remove the observation for `label_pairs`.
   * @param labelPairs Table containing label names as keys, label values as values.
   * Note that both label names and values in label_pairs are treated as strings.
   */
  remove(labelPairs: Record<string, string>): void;
}
