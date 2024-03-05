import { HttpMethod } from '../../builtin/http.client/HttpMethod';
import { HttpResponse } from './HttpResponse';

export interface HttpRequest {
  /**
   * HTTP request type (GET, POST etc).
   */
  method: HttpMethod;

  /**
   * Request path.
   */
  path: string;

  /**
   * Request path without decoding.
   */
  path_raw: string;

  /**
   * Request arguments.
   */
  query: LuaTable<string, unknown>;

  /**
   * HTTP version (for example, { 1, 1 } is HTTP/1.1).
   */
  proto: [number, number];

  /**
   * Normalized request headers. A normalized header is in the lower case, all headers joined together into a single string.
   */
  headers: LuaTable<string, stirng>;

  /**
   * A Lua table with information about the remote peer (`like socket:peer()`).
   */
  peer: { host: string, family: string, type: string, protocol: string, port: number };

  /**
   * Returns a first line of the http request (for example, `PUT /path HTTP/1.1`).
   */
  request_line(): string;

  /**
   * Reads the raw request body as a stream (see `socket:read()`).
   */
  read({ delimiter: string, chunk: number }, timeout: number): void;

  /**
   * @returns A Lua table from a JSON request.
   */
  json(): LuaTable<string, unknown> | unknown[];

  /**
   * @param name Parameter name.
   * @returns A single POST request a parameter value.
   */
  post_param(name: string): unknown;

  /**
   * @returns All parameters as a Lua table.
   */
  post_param(): LuaTable<string, unknown>;

  /**
   * @param name Parameter name.
   * @returns a single GET request parameter value.
   */
  query_param(name: string): unknown;

  /**
   * @returns a Lua table with all arguments.
   */
  query_param(): LuaTable<string, unknown>;

  /**
   * @returns any request parameter, either GET or POST.
   */
  param(name: string): unknown;

  /**
   * To get a cookie in the request. if `raw` option was set then cookie will not be unescaped, otherwise cookie's value will be unescaped.
   */
  cookie(name: string, options?: { raw?: boolean }): string;

  /**
   * Get a variable "stashed" when dispatching a route.
   */
  stash(name: string): unknown;

  /**
   * Set a variable "stashed" when dispatching a route.
   *
   * Special stash names:
   * - `controller` - the controller name.
   * - `action` - the handler name in the controller.
   * - `format` - the current output format (e.g. `html`, `txt`).
   * Is detected automatically based on the request's `path` (for example, `/abc.js` sets `format` to `js`).
   * When producing a response, `format` is used to serve the response's 'Content-type:'.
   */
  stash(name: string, value: unknown): void;

  /**
   * @returns the route's exact URL.
   */
  url_for(name: string, args: unknown, query: unknown): string;

  /**
   * Create a Response object with a rendered template.
   */
  render(renderObject: AnyTable): HttpResponse;

  /**
   * Create a Response object with an HTTP redirect.
   */
  redirect_to(url: string): ResponseObject;
}
