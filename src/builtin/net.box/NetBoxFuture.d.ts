export interface NetBoxFuture<T = unknown> {
  /**
   * @returns `true` when the result of the request is available, otherwise `false`.
   * @customName is_ready
   */
  isReady(): boolean;

  /**
   * Get the result of the request.
   * @returns The response or `nil` in case it’s not ready yet or there has been an error.
   */
  result(): T?;

  /**
   * Wait until the result of the request is available and then get it,
   * or throw an error if there is no result after the timeout exceeded
   * @returns The response.
   * @customName wait_result
   */
  waitResult(timeout?: number): T;

  /**
   * Abandon the object.
   */
  discard(): void;
}
