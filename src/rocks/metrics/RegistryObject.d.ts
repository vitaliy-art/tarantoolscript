import { CounterObject } from './CounterObject';
import { GaugeObject } from './GaugeObject';
import { HistogramObject } from './HistogramObject';
import { SummaryObject } from './SummaryObject';

export interface RegistryObject {
  /**
   * Remove a collector from the registry.
   * @param collector The collector to be removed.
   */
  unregister(collector: Collector): void;

  /**
   * Find a collector in the registry.
   * @param kind Collector kind (counter, gauge, histogram, or summary).
   * @param name Collector name.
   * @returns A collector object or nil.
   */
  find<K extends CollectorKind>(kind: K, name: string): CollectorByKind<K>;
}

export type Collector =
  | CounterObject
  | GaugeObject
  | HistogramObject
  | SummaryObject

export type CollectorKind =
  | 'counter'
  | 'gauge'
  | 'histogram'
  | 'summary'

type CollectorByKind<T = CollectorKind> =
  T extends 'counter' ? CounterObject | undefined :
  T extends 'gauge' ? GaugeObject | undefined :
  T extends 'histogram' ? HistogramObject | undefined :
  T extends 'summary' ? SummaryObject | undefined :
  never
