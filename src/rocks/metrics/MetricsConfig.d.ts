export interface MetricsConfig {
  /**
   * `all` to enable all supported default metrics, `none` to disable all default metrics,
   * table with names of the default metrics to enable a specific set of metrics.
   * @default 'all'
   */
  include: DefaultMetric | DefaultMetric[] | 'all' | 'none';

  /**
   * Table containing the names of the default metrics that you want to disable. Has higher priority than `include`.
   */
  exclude: DefaultMetric[];

  /**
   * Table containing label names as string keys, label values as values.
   */
  labels: Record<string, string | number>;
}

export type DefaultMetric =
  | 'network'
  | 'operations'
  | 'system'
  | 'replicas'
  | 'info'
  | 'slab'
  | 'runtime'
  | 'memory'
  | 'spaces'
  | 'fibers'
  | 'cpu'
  | 'vinyl'
  | 'memtx'
  | 'luajit'
  | 'cartridge_issues'
  | 'cartridge_failover'
  | 'clock'
  | 'event_loop'
