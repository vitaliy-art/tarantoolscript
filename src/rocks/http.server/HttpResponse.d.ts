export interface HttpResponse {
  /**
   * HTTP response code.
   */
  status?: number;

  /**
   * A Lua table with normalized headers.
   */
  headers?: LuaTable<string, string>;

  /**
   * Response body (string | table | wrapped_iterator).
   */
  body?: unknown;

  /**
   * Adds Set-Cookie headers to `resp.headers`
   * If raw option was set then cookie will not be escaped, otherwise cookie's value and path will be escaped
   * @param param1
   */
  setcookie?(cookie: { name: string, value: string, path: string, expires: string, domain: string}, options?: { raw?: boolean }): void;
}
