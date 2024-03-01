export interface IoObject {
  /**
   * Since: `2.11.0`.
   *
   * Read request data in chunks of a specified length or up to a specific delimiter.
   *
   * An IO object used to read or write data in chunks.
   * To get an IO object instead of the full response (`response_object`), you need to set the `chunked` request option to `true`.
   * @param chunk The maximum number of bytes to read.
   * @param delimiter The delimiter used to stop reading data.
   * @param timeout The number of seconds to wait. The default is `10`.
   * @returns A chunk of read data. Returns an empty string if there is nothing more to read.
   */
  read: {
    (chunk: number, timeout?: number): string;
    (delimiter: string, timeout?: number): string;
    (chunk: number, delimiter: string, timeout?: number): string;
  }

  /**
   * Write the specified chunk of data.
   * @param data Data to be written.
   * @param timeout The number of seconds to wait. The default is `10`.
   */
  write(data: AnyTable | unknown, timeout?: number): void;

  /**
   * Finish reading or writing data.
   * @param timeout The number of seconds to wait. The default is `10`.
   */
  finish(timeout?: number): void;
}
