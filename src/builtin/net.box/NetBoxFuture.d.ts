export interface NetBoxFuture<T = unknown> {
  /**
   * @returns `true` when the result of the request is available, otherwise `false`.
   */
  is_ready(): boolean;

  /**
   * Get the result of the request.
   * @returns The response or `nil` in case it’s not ready yet or there has been an error.
   */
  result(): T | undefined;

  /**
   * Wait until the result of the request is available and then get it,
   * or throw an error if there is no result after the timeout exceeded
   * @returns The response.
   */
  wait_result(timeout?: number): T extends LuaMultiReturn<infer TReturn> ? TReturn : [T];

  /**
   * Abandon the object.
   */
  discard(): void;
}
