export interface RequestOptions {
  /**
   * The path to an SSL certificate file to verify the peer with.
   */
  ca_file?: string;

  /**
   * The path to a directory holding one or more certificates to verify the peer with.
   */
  ca_path?: string;

  /**
   * Since: `2.11.0`.
   *
   * Specifies whether an HTTP client should return the full response (`response_object`)
   * or an IO object (`io_object`) used for streaming download/upload.
   */
  chunked?: boolean;

  /**
   * A table of HTTP headers passed to a request.
   */
  headers?: AnyTable;

  /**
   * Since: `2.11.0`.
   *
   * A table of parameters passed to a request. The behavior of this option depends on the request type, for example:
   * - For a `GET` request, this option specifies query string parameters.
   * - For a `POST` request, this option specifies form parameters to be sent using the `application/x-www-form-urlencoded` type.
   */
  params?: AnyTable;

  /**
   * A delay (in seconds) the operating system waits while the connection is idle before sending keepalive probes.
   */
  keepalive_idle?: number;

  /**
   * The interval (in seconds) the operating system waits between sending keepalive probes.
   * If both `keepalive_idle` and `keepalive_interval` are set, then Tarantool also sets the HTTP keepalive headers:
   * `Connection:Keep-Alive` and `Keep-Alive:timeout=<keepalive_idle>`. Otherwise, Tarantool sends `Connection:close`.
   */
  keepalive_interval?: number;

  /**
   * The average transfer speed in bytes per second that the transfer should be below during “low speed time” seconds
   * for the library to consider it to be too slow and abort.
   */
  low_speed_limit?: number;

  /**
   * The time that the transfer speed should be below the “low speed limit” for the library to consider it too slow and abort.
   */
  low_speed_time?: number;

  /**
   * The maximum length of a header name. If a header name length exceeds this value, it is truncated to this length. The default value is `32`.
   */
  max_header_name_len?: number;

  /**
   * Specify whether the HTTP client follows redirect URLs provided in the `Location` header for `3xx` responses.
   * When a non-`3xx` response is received, the client returns it as a result.
   * If you set this option to `false`, the client returns the first `3xx` response.
   */
  follow_location?: boolean;

  /**
   * A comma-separated list of hosts that do not require proxies, or *, or ''.   *
   * - Set `no_proxy = host [, host ...]` to specify hosts that can be reached without requiring a proxy,
   * even if `proxy` is set to a non-blank value and/or if a proxy-related environment variable has been set.
   * - Set `no_proxy = '*'` to specify that all hosts can be reached without requiring a proxy, which is equivalent to setting `proxy=''`.
   * - Set `no_proxy = ''` to specify that no hosts can be reached without requiring a proxy,
   * even if a proxy-related environment variable (`HTTP_PROXY`) is used.
   *
   * If `no_proxy` is not set, then a proxy-related environment variable (`HTTP_PROXY`) may be used.
   */
  no_proxy?: string;

  /**
   * A proxy server host or IP address, or `''`.
   * - If `proxy` is a host or IP address, then it may begin with a scheme, for example, `https://` for an HTTPS proxy or `http://` for an HTTP proxy.
   * - If `proxy` is set to `''` an empty string, then proxy use is disabled, and no proxy-related environment variable is used.
   * - If `proxy` is not set, then a proxy-related environment variable may be used,
   * such as `HTTP_PROXY` or `HTTPS_PROXY` or `FTP_PROXY`, or `ALL_PROXY` if the protocol can be any protocol.
   */
  proxy?: string;

  /**
   * A proxy server port. The default is `443` for an HTTPS proxy and `1080` for a non-HTTPS proxy.
   */
  proxy_port?: number;

  /**
   * A proxy server username and password. This option might have one of the following formats:
   * - `proxy_user_pwd = user_name:`;
   * - `proxy_user_pwd = :password`;
   * - `proxy_user_pwd = user_name:password`.
   */
  proxy_user_pwd?: string;

  /**
   * A path to an SSL client certificate file.
   */
  ssl_cert?: string;

  /**
   * A path to a private key file for a TLS and SSL client certificate.
   */
  ssl_key?: string;

  /**
   * The number of seconds to wait for a curl API read request before timing out. The default timeout is set to infinity (`36586400100` seconds).
   */
  timeout?: number;

  /**
   * A socket name to use instead of an Internet address for a local connection.
   * @example `/tmp/unix_domain_socket.sock`
   */
  unix_socket?: string;

  /**
   * Turn on/off a verbose mode.
   */
  verbose?: boolean;

  /**
   * Enable verification of the certificate’s name (CN) against the specified host.
   */
  verify_host?: number;

  /**
   * Set on/off verification of the peer’s SSL certificate.
   */
  verify_peer?: number;

  /**
   * Enable decompression of an HTTP response data based on the specified `Accept-Encoding` request header.
   * You can pass the following values to this option:
   * - `''` – if an empty string is passed, the `Accept-Encoding` contains all the supported encodings (`identity`, `deflate`, `gzip`, and `br`).
   * - `br`, `gzip`, `deflate` – a comma-separated list of encodings passed in Accept-Encoding.
   */
  accept_encoding?: string;
}
