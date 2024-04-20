export interface ObservationObject {
  /**
   * `label_pairs` key-value table.
   */
  label_pairs: Record<string, string | number>;

  /**
   * Current system time (in microseconds).
   */
  timestamp: number;

  /**
   * Current value.
   */
  value: number;

  /**
   * Metric name.
   */
  metric_name: string;
}
