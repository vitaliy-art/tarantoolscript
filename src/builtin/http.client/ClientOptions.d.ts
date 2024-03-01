export interface ClientOptions {
  /**
   * Specifies the maximum number of entries in the cache. This option affects libcurl `CURLMOPT_MAXCONNECTS`. The default is `-1`.
   */
  max_connections?: number;

  /**
   * Specifies the maximum number of active connections. This option affects libcurl `CURLMOPT_MAX_TOTAL_CONNECTIONS`.
   */
  max_total_connections?: number;
}
