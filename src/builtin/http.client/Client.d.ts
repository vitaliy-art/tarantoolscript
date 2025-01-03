import { ClientStat } from './ClientStat';
import { HttpMethod } from './HttpMethod';
import { IoObject } from './IoObject';
import { RequestOptions } from './RequestOptions';
import { ResponseObject } from './ResponseObject';

export interface Client {
  /**
   * Make an HTTP request and receive a response.
   * @param method A request HTTP method. Possible values: `GET`, `POST`, `PUT`, `PATCH`, `OPTIONS`, `HEAD`, `DELETE`, `TRACE`, `CONNECT`.
   * @param url A request URL, for example, `https://httpbin.org/get`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method returns one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  request(method: HttpMethod, url: string, body?: string, opts?: RequestOptions): ResponseObject;

  /**
   * Make an HTTP request and receive a response.
   * @param method A request HTTP method. Possible values: `GET`, `POST`, `PUT`, `PATCH`, `OPTIONS`, `HEAD`, `DELETE`, `TRACE`, `CONNECT`.
   * @param url A request URL, for example, `https://httpbin.org/get`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method returns one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  request(method: HttpMethod, url: string, body?: string, opts?: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `GET` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/get`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  get(url: string, opts: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `GET` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/get`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  get(url: string, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `POST` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/post`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  post(url: string, body?: AnyTable, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `POST` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/post`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  post(url: string, body?: AnyTable, opts?: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `PUT` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/put`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  put(url: string, body?: AnyTable, opts?: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `PUT` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/put`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  put(url: string, body?: AnyTable, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `PATCH` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/patch`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  patch(url: string, body?: AnyTable, opts?: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `PATCH` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/patch`.
   * @param body A request body.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  patch(url: string, body?: AnyTable, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `DELETE` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/delete`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  delete(url: string, opts: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `DELETE` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/delete`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  delete(url: string, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `HEAD` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/head`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  head(url: string, opts: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `HEAD` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/head`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  head(url: string, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `OPTIONS` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/options`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  options(url: string, opts: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `OPTIONS` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/options`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  options(url: string, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `TRACE` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/trace`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  trace(url: string, opts: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `TRACE` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/trace`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  trace(url: string, opts?: RequestOptions): ResponseObject;

  /**
   * Make a `CONNECT` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/connect`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  connect(url: string, opts: RequestOptions & { chunked: true }): IoObject;

  /**
   * Make a `CONNECT` request and receive a response.
   * @param url A request URL, for example, `https://httpbin.org/connect`.
   * @param opts Request options.
   * @returns This method might return one of the following objects:
   * - `response_object`;
   * - `io_object` if `request_options.chunked` is set to `true`.
   */
  connect(url: string, opts?: RequestOptions): ResponseObject;

  /**
   * Get a table with statistics for the HTTP client.
   */
  stat(): ClientStat;

  /**
   * Since: `2.11.0`.
   *
   * Decoders used to deserialize response data based on the `Content-Type` header value.
   */
  decoders: { [ key: string ]: (this: void) => (body: string, _content_type: unknown) => unknown };
}
