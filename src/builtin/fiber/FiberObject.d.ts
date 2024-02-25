export interface FiberObject<R> {
  /**
   * @returns ID of the fiber.
   */
  id(): number;

  /**
   * @returns Name of the fiber.
   */
  name(): string;

  /**
   * Change the fiber name. By default a Tarantool server’s interactive-mode fiber is named ‘interactive’
   * and new fibers created due to `fiber.create` are named ‘lua’.
   * Giving fibers distinct names makes it easier to distinguish them when using `fiber.info` and `fiber.top()`. Max length is `255`.
   * @param name The new name of the fiber.
   * @param options `truncate=true` – truncates the name to the max length if it is too long.
   * If this option is `false` (the default), `fiber.name(new_name)` fails with an exception if a new name is too long.
   * The name length limit is `255` (since version `2.4.1`).
   */
  name(name: string, options?: { truncate?: boolean }): void;

  /**
   * @returns The status of the specified fiber.
   */
  status(): 'dead' | 'suspended' | 'running';

  /**
   * Send a cancellation request to the fiber. Running and suspended fibers can be cancelled.
   * After a fiber has been cancelled, attempts to operate on it cause errors, for example, `fiber_object:name()` causes error: the fiber is dead.
   * But a dead fiber can still report its ID and status.
   *
   * Cancellation is asynchronous. Use `fiber_object:join()` to wait for the cancellation to complete.
   * After `fiber_object:cancel()` is called, the fiber may or may not check whether it was cancelled.
   * If the fiber does not check it, it cannot ever be cancelled.
   */
  cancel(): void;

  /**
   * Set a fiber’s maximum slice. A fiber slice limits the time period of executing a fiber without yielding control.
   * @param slice A fiber slice, which can one of the following:
   * - a time period (in seconds) that specifies the error slice. Example: `long_operation_fiber.set_max_slice(3)`.
   * - a table that specifies the warning and error slices (in seconds). Example: `long_operation_fiber.set_max_slice({warn = 1.5, err = 3})`.
   */
  set_max_slice(slice: number | { warn: number, err: number }): void;

  /**
   * A local storage within the fiber. It is a Lua table created when it is first accessed.
   * The storage can contain any number of named values, subject to memory limitations.
   */
  storage: LuaTable<string | number, unknown>;

  /**
   * Make a fiber joinable. A joinable fiber can be waited for using `fiber_object:join()`.
   *
   * The best practice is to call `fiber_object:set_joinable()` before the fiber function begins to execute
   * because otherwise the fiber could become dead before `fiber_object:set_joinable()` takes effect. The usual sequence could be:
   *
   * 1. Call `fiber.new()` instead of `fiber.create()` to create a new `fiber_object`.
   *
   * Do not yield at this point, because that will cause the fiber function to begin.
   *
   * 2. Call `fiber_object:set_joinable(true)` to make the new `fiber_object` joinable.
   *
   * Now it is safe to yield.
   *
   * 3. Call `fiber_object:join()`.
   *
   * Usually `fiber_object:join()` should be called, otherwise the fiber’s status may become ‘suspended’ when the fiber function ends,
   * instead of ‘dead’.
   * @param is_joinable The boolean value that specifies whether the fiber is joinable.
   */
  set_joinable(is_joinable: boolean): void;

  /**
   * Join a fiber. Joining a fiber enables you to get the result returned by the fiber’s function.
   *
   * Joining a fiber runs the fiber’s function and waits until the fiber’s status is dead.
   * Normally a status becomes dead when the function execution finishes.
   * Joining the fiber causes a yield, therefore, if the fiber is currently in the suspended state, execution of its fiber function resumes.
   *
   * Note that joining a fiber works only if the fiber is created using `fiber.new()` and is made joinable using `fiber_object:set_joinable()`.
   * @returns
   * - The boolean value that indicates whether the join is succeeded because the fiber’s function ended normally.
   * - The return value of the fiber’s function.
   *
   * If the first value is `false`, then the join succeeded because the fiber’s function ended abnormally
   * and the second result has the details about the error, which one can unpack in the same way that one unpacks a `pcall` result.
   */
  join(): LuaMultiReturn<[true, R] | [false, string]>;
}
