import { HttpRequest, HttpResponse } from 'rocks/http.server';
import { HistogramObject } from './HistogramObject';
import { SummaryObject } from './SummaryObject';

/** @noSelf */
export interface HttpMiddleware {
  /**
   * Register a collector for the middleware and set it as default.
   * @param typeName Collector type: `histogram` or `summary`. The default is `histogram`.
   * @param name Collector name. The default is `http_server_request_latency`.
   * @param help Collector description. The default is `HTTP Server Request Latency`.
   */
  configure_default_collector(typeName?: 'histogram' | 'summary', name?: string, help?: string): void;

  /**
   * Register and return a collector for the middleware.
   * @param typeName Collector type: `histogram` or `summary`. The default is `histogram`.
   * @param name Collector name. The default is `http_server_request_latency`.
   * @param help Collector description. The default is `HTTP Server Request Latency`.
   * @returns A collector object.
   */
  build_default_collector(typeName?: 'histogram' | 'summary', name?: string, help?: string): HistogramObject | SummaryObject;

  /**
   * Set the default collector.
   * @param collector Middleware collector object.
   */
  set_default_collector(collector: HistogramObject | SummaryObject): void;

  /**
   * Return the default collector.
   * If the default collector hasn’t been set yet, register it (with default `http_middleware.build_default_collector(...)` parameters)
   * and set it as default.
   * @returns A collector object.
   */
  get_default_collector(): HistogramObject | SummaryObject;

  v1(handler: (this: void, request: HttpRequest) => HttpResponse, collector?: HistogramObject | SummaryObject): (this: void, request: HttpRequest) => HttpResponse;
}
