export interface ResponseObject {
  /**
   * A response status code.
   */
  status?: number;

  /**
   * A response status text.
   */
  reason?: string;

  /**
   * Response headers.
   */
  headers?: AnyTable;

  /**
   * Response cookies.
   * The value is an array of two elements where the first one is the cookie value and the second one is an array with the cookie’s options.
   */
  cookies?: { [key: string]: string[] };

  /**
   * A response body. Use decode to decode the response body.
   */
  body?: string;

  /**
   * An HTTP protocol version.
   */
  proto?: string;

  /**
   * Since: `2.11.0`.
   *
   * Decode the response body to a Lua object based on the content type.
   * @returns A decoded body.
   */
  decode(): AnyTable?;
}
