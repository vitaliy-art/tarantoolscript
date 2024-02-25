/** @noSelfInFile */

import { ChannelObject } from './ChannelObject';
import { ConditionObject } from './ConditionObject';
import { FiberInfo } from './FiberInfo';
import { FiberObject } from './FiberObject';
import { FiberTop } from './FiberTop';

/**
 * Create and start a fiber. The fiber is created and begins to run immediately.
 * @param func The function to be associated with the fiber.
 * @param args Arguments to be passed to the function.
 * @returns Created fiber object.
 */
export declare function create<U extends unknown[], R>(func: (...args: U) => R, ...args: U): FiberObject<R>;

/**
 * Create a fiber but do not start it. The created fiber starts after the fiber creator (that is, the job that is calling `fiber.new()`) yields.
 * The initial fiber state is `ready`.
 *
 * Note that `fiber.status()` returns the `suspended` state for `ready` fibers because the ready state is not observable using the `fiber` module API.
 *
 * You can join fibers created using `fiber.new` by calling the `fiber_object:join()` function and get the result returned by the fiber’s function.
 * To join the fiber, you need to make it joinable using `fiber_object:set_joinable()`.
 * @param func The function to be associated with the fiber.
 * @param args Arguments to be passed to the function.
 * @returns Created fiber object.
 * @customName new
 */
export declare function new_<U extends unknown[], R>(func: (...args: U) => R, ...args: U): FiberObject<R>;

/**
 * @returns Fiber object for the currently scheduled fiber.
 */
export declare function self(): FiberObject<unknown>;

/**
 *
 * @param id Numeric identifier of the fiber.
 * @returns Fiber object for the specified fiber.
 */
export declare function find(id: number): FiberObject<unknown>;

/**
 * Yield control to the scheduler and sleep for the specified number of seconds. Only the current fiber can be made to sleep.
 * @param time Number of seconds to sleep.
 */
export declare function sleep(time: number): void;

/**
 * Yield control to the scheduler. Equivalent to `fiber.sleep(0)`.
 */
export declare function yield(): void;

/**
 * Return the status of the current fiber. If the `fiber_object` is passed, return the status of the specified fiber.
 * @param fiber The fiber object.
 */
export declare function status(fiber?: FiberObject): 'dead' | 'suspended' | 'running';

/**
 * Return information about all fibers.
 * @param options
 * - backtrace - show backtrace. Default: `true`. Set to `false` to show less information (symbol resolving can be expensive).
 * - bt - same as `backtrace`, but with lower priority.
 * @returns Number of context switches (`csw`), backtrace, total memory, used memory, fiber ID (`fid`), fiber name.
 * If `fiber.top` is enabled or Tarantool was built with `ENABLE_FIBER_TOP`, processor time (`time`) is also returned.
 */
export declare function info(options: { backtrace?: boolean, bt?: boolean }): FiberInfo;

/**
 * Show all alive fibers and their CPU consumption.
 * @returns A table with two entries: `cpu` and `cpu_misses`.
 */
export declare function top(): FiberTop;

/**
 * Locate a fiber by its numeric ID and cancel it. In other words, `fiber.kill()` combines `fiber.find()` and `fiber_object:cancel()`.
 * @param id The ID of the fiber to be cancelled.
 */
export declare function kill(id: number): void;

/**
 * Check if the current fiber has been cancelled and throw an exception if this is the case.
 */
export declare function testcancel(): void;

/**
 * Set the default maximum slice for all fibers. A fiber slice limits the time period of executing a fiber without yielding control.
 * @param slice A fiber slice, which can one of the following:
 * - a time period (in seconds) that specifies the error slice. Example: `fiber.set_max_slice(3)`.
 * - a table that specifies the warning and error slices (in seconds). Example: `fiber.set_max_slice({warn = 1.5, err = 3})`.
 */
export declare function set_max_slice(slice: number | { warn: number, err: number }): void;

/**
 * Set a slice for the current fiber execution. A fiber slice limits the time period of executing a fiber without yielding control.
 * @param slice A fiber slice, which can one of the following:
 * - a time period (in seconds) that specifies the error slice. Example: `fiber.set_max_slice(3)`.
 * - a table that specifies the warning and error slices (in seconds). Example: `fiber.set_max_slice({warn = 1.5, err = 3})`.
 */
export declare function set_slice(slice: number | { warn: number, err: number }): void;

/**
 * Extend a slice for the current fiber execution.
 * For example, if the default error slice is set using `fiber.set_max_slice()` to 3 seconds, `extend_slice(1)` extends the error slice to 4 seconds.
 * @param slice A fiber slice, which can one of the following:
 * - a time period (in seconds) that specifies the error slice. Example: `fiber.set_max_slice(3)`.
 * - a table that specifies the warning and error slices (in seconds). Example: `fiber.set_max_slice({warn = 0.5, err = 1})`.
 */
export declare function extend_slice(slice: number | { warn: number, err: number }): void;

/**
 * Check whether a slice for the current fiber is over. A fiber slice limits the time period of executing a fiber without yielding control.
 */
export declare function check_slice(): void;

/**
 * @returns current system time (in seconds since the epoch) as a Lua number.
 * The time is taken from the event loop clock, which makes this call very cheap, but still useful for constructing artificial tuple keys.
 */
export declare function time(): number;

/**
 * Current system time (in microseconds since the epoch) as a 64-bit integer. The time is taken from the event loop clock.
 */
export declare function time64(): number;

/**
 * Get the monotonic time in seconds. It is better to use `fiber.clock()` for calculating timeouts instead of `fiber.time()`
 * because `fiber.time()` reports real time so it is affected by system time changes.
 * @returns A floating-point number of seconds,
 * representing elapsed wall-clock time since some time in the past that is guaranteed not to change during the life of the process.
 */
export declare function clock(): number;

/**
 * Same as `fiber.clock()` but in microseconds.
 * @returns A number of seconds as 64-bit integer,
 * representing elapsed wall-clock time since some time in the past that is guaranteed not to change during the life of the process.
 */
export declare function clock64(): number;

/**
 * Create a new communication channel.
 * @param capacity The maximum number of slots (spaces for `channel:put` messages) that can be in use at once. The default is `0`.
 * @returns New channel object.
 */
export declare function channel(capacity?: number): ChannelObject;

/**
 * Create a new condition variable.
 * @returns New condition variable.
 */
export declare function cond(): ConditionObject;
