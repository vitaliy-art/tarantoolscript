import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';
import { HttpServerObject } from './HttpServerObject';

export interface HttpServerOptions {
  /**
   * A limit for HTTP request header size.
   * @default 4096 bytes
   */
  max_header_size?: number;

  /**
   * A timeout until the server stops reading HTTP headers sent by the client.
   * The server closes the client connection if the client doesn't send its headers within the given amount of time.
   * @default 100 seconds
   */
  header_timeout?: number;

  /**
   * A path to the directory with HTML templates and controllers.
   * @default .
   */
  app_dir?: string;

  /**
   * A Lua function to handle HTTP requests (this is a handler to use if the module "routing" functionality is not needed).
   */
  handler?: (server: HttpServerObject, request: HttpRequest) => HttpResponse;

  /**
   * The character set for server responses.
   */
  charset?: 'text/html' | 'text/plain' | 'application/json';

  /**
   * Return application errors and backtraces to the client (like PHP). Disabled by default (`since 1.2.0`).
   */
  display_errors?: boolean;

  /**
   * Log incoming requests. This parameter can receive:
   * - function value, supporting C-style formatting: `log_requests(fmt, ...)`, where `fmt` is a format string and ... is Lua Varargs,
   * holding arguments to be replaced in `fmt`.
   * - boolean value, where `true` choose default `log.info` and false disable request logs at all.
   *
   * By default uses `log.info` function for requests logging.
   */
  log_requests?: boolean | ((fmt: string, ...args: any[]) => unknown);

  /**
   * Same as the `log_requests` option but is used for error messages logging. By default uses `log.error()` function.
   */
  log_errors?: boolean | ((fmt: string, ...args: any[]) => unknown);

  /**
   * Disables keep-alive connections with misbehaving clients.
   * Parameter accept a table that contains a user agents names. By default table is empty.
   */
  disable_keepalive?: string[];

  /**
   * Maximum amount of time an idle (keep-alive) connection will remain idle before closing.
   * When the idle timeout is exceeded, HTTP server closes the keepalive connection.
   * @default 0 seconds (disabled)
   */
  idle_timeout?: number;
}
