/** @noSelfInFile */

import { CounterObject } from './CounterObject';
import { GaugeObject } from './GaugeObject';
import { HistogramObject } from './HistogramObject';
import { SummaryObjectParams } from './SummaryObjectParams';
import { SummaryObject } from './SummaryObject';
import { DefaultMetric, MetricsConfig } from './MetricsConfig';
import { ObservationObject } from './ObservationObject';
import { RegistryObject } from './RegistryObject';

/**
 * Register a new counter.
 * @param name Collector name. Must be unique.
 * @param help Collector description.
 * @param metainfo Collector metainfo.
 * @returns A counter object.
 */
export declare function counter(name: string, help?: string, metainfo?: AnyTable): CounterObject;

/**
 * Register a new gauge.
 * @param name Collector name. Must be unique.
 * @param help Collector description.
 * @param metainfo Collector metainfo.
 * @returns A gauge object.
 */
export declare function gauge(name: string, help?: string, metainfo?: AnyTable): GaugeObject;

/**
 * Register a new histogram.
 * @param name Collector name. Must be unique.
 * @param help Collector description.
 * @param buckets Histogram buckets (an array of sorted positive numbers).
 * The infinity bucket (`INF`) is appended automatically.
 * Default: `{.005, .01, .025, .05, .075, .1, .25, .5, .75, 1.0, 2.5, 5.0, 7.5, 10.0, INF}`.
 * @param mettainfo Collector metainfo.
 * @returns A histogram object.
 */
export declare function histogram(name: string, help?: string, buckets?: number[], metainfo?: AnyTable): HistogramObject;

/**
 * Register a new summary. Quantile computation is based on the “Effective computation of biased quantiles over data streams” algorithm.
 * @param name Collector name. Must be unique.
 * @param help Collector description.
 * @param objectives A list of “targeted” φ-quantiles in the `{quantile = error, ... }` form.
 * Example: `{[0.5]=0.01, [0.9]=0.01, [0.99]=0.01}`. The targeted φ-quantile is specified in the form of a φ-quantile and the tolerated error.
 * For example, `{[0.5] = 0.1}` means that the median (= 50th percentile) is to be returned with a 10-percent error.
 * Note that percentiles and quantiles are the same concept, except that percentiles are expressed as percentages.
 * The φ-quantile must be in the interval `[0, 1]`.
 * A lower tolerated error for a φ-quantile results in higher memory and CPU usage during summary calculation.
 * @param params Table of the summary parameters used to configuring the sliding time window.
 * This window consists of several buckets to store observations. New observations are added to each bucket.
 * After a time period, the head bucket (from which observations are collected) is reset, and the next bucket becomes the new head.
 * This way, each bucket stores observations `for max_age_time * age_buckets_count` seconds before it is reset.
 * `max_age_time` sets the duration of each bucket’s lifetime – that is, how many seconds the observations are kept before they are discarded.
 * `age_buckets_count` sets the number of buckets in the sliding time window.
 * This variable determines the number of buckets used to exclude observations older than `max_age_time` from the summary.
 * The value is a trade-off between resources (memory and CPU for maintaining the bucket) and how smooth the time window moves.
 * Default value: `{max_age_time = math.huge, age_buckets_count = 1}`.
 * @param metainfo Collector metainfo.
 * @returns A summary object.
 */
export declare function summary(
  name: string,
  help?: string,
  objectives?: Record<number, number>,
  params?: SummaryObjectParams,
  metainfo?: AnyTable,
): SummaryObject;

/**
 * Entrypoint to setup the module. Since `0.17.0`.
 * @param config Metrics configuration.
 */
export declare function cfg(config?: MetricsConfig): void;

/**
 * Same as `metrics.cfg{include=include, exclude=exclude}`, but `include={}` is treated as `include='all'` for backward compatibility.
 */
export declare function enable_default_metrics(include?: DefaultMetric | DefaultMetric[] | 'all' | 'none', exclude?: DefaultMetric[]): void;

/**
 * Same as `metrics.cfg{labels=label_pairs}`.
 */
export declare function set_global_labels(labelPairs: Record<string, string | number>): void;

/**
 * Collect observations from each collector.
 * @param opts Table of collect options:
 * - `invoke_callbacks` – if `true`, `invoke_callbacks()` is triggered before actual collect.
 * - `default_only` – if `true`, observations contain only default metrics (`metainfo.default = true`).
 */
export declare function collect(opts?: { invoke_callbacks?: boolean, default_only?: boolean }): ObservationObject[];

export declare const registry: RegistryObject;

/**
 * Register a function named callback, which will be called right before metric collection on plugin export.
 *
 * This method is most often used for gauge metrics updates.
 * @param callback A function that takes no parameters.
 */
export declare function register_callback(callback: (this: void) => unknown): void;

/**
 * Unregister a function named `callback` that is called right before metric collection on plugin export.
 * @param callback A function that takes no parameters.
 */
export declare function unregister_callback(callback: (this: void) => unknown): void;

/**
 * Invoke all registered callbacks. Has to be called before each `collect()`.
 * (Since version `0.16.0`, you may use `collect{invoke_callbacks = true}` instead.)
 * If you’re using one of the default exporters, `invoke_callbacks()` will be called by the exporter.
 */
export declare function invoke_callbacks(): void;

/**
 * Configure the endpoints of the metrics role.
 * @param _export A table containing paths and formats of the exported metrics.
 */
export declare function set_export(_export: { path: string, format: string }[]): void;

/**
 * Add default global labels. Note that both label names and values in `label_pairs` are treated as strings.
 * @param labelPairs Table containing label names as string keys, label values as values.
 */
export declare function set_default_labels(labelPairs: Record<string, string | number>): void;
