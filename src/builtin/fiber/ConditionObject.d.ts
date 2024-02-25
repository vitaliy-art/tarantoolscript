export interface ConditionObject {
  /**
   * Make the current fiber go to sleep, waiting until another fiber invokes the `signal()` or `broadcast()` method on the cond object.
   * The sleep causes an implicit `fiber.yield()`.
   * @param timeout Number of seconds to wait, default = forever.
   * @returns If timeout is provided, and a signal doesn’t happen for the duration of the timeout, `wait()` returns `false`.
   * If a signal or broadcast happens, `wait()` returns `true`.
   */
  wait(timeout?: number): boolean;

  /**
   * Wake up a single fiber that has executed `wait()` for the same variable. Does not yield.
   */
  signal(): void;

  /**
   * Wake up all fibers that have executed `wait()` for the same variable. Does not yield.
   */
  broadcast(): void;
}
