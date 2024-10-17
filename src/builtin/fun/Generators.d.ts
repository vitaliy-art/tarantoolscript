/** @noSelfInFile */

import { FunIterator } from './FunIterator';

/**
 * The iterator to create arithmetic progressions.
 * Iteration values are generated within closed interval `[start, stop]` (i.e. stop is included).
 * If the `start` argument is omitted, it defaults to `1` (`stop > 0`) or to `-1` (`stop < 0`).
 * If the `step` argument is omitted, it defaults to `1` (`start <= stop`) or to `-1` (`start > stop`).
 * If `step` is positive, the last element is the largest `start + i * step` less than or equal to `stop`;
 * if `step` is negative, the last element is the smallest `start + i * step` greater than or equal to `stop`.
 * `step` must not be zero (or else an error is raised). `range(0)` returns empty iterator.
 * @param stop An endpoint of the interval.
 * @returns Iterator on arithmetic progression.
 * @see {@link https://luafun.github.io/generators.html#fun.range}
 */
export declare function range(stop: number): FunIterator<number, [number]>;

/**
 * The iterator to create arithmetic progressions.
 * Iteration values are generated within closed interval `[start, stop]` (i.e. stop is included).
 * If the `start` argument is omitted, it defaults to `1` (`stop > 0`) or to `-1` (`stop < 0`).
 * If the `step` argument is omitted, it defaults to `1` (`start <= stop`) or to `-1` (`start > stop`).
 * If `step` is positive, the last element is the largest `start + i * step` less than or equal to `stop`;
 * if `step` is negative, the last element is the smallest `start + i * step` greater than or equal to `stop`.
 * `step` must not be zero (or else an error is raised). `range(0)` returns empty iterator.
 * @param start An endpoint of the interval.
 * @param stop An endpoint of the interval.
 * @returns Iterator on arithmetic progression.
 * @see {@link https://luafun.github.io/generators.html#fun.range}
 */
export declare function range(start: number, stop: number): FunIterator<number, [number]>;

/**
 * The iterator to create arithmetic progressions.
 * Iteration values are generated within closed interval `[start, stop]` (i.e. stop is included).
 * If the `start` argument is omitted, it defaults to `1` (`stop > 0`) or to `-1` (`stop < 0`).
 * If the `step` argument is omitted, it defaults to `1` (`start <= stop`) or to `-1` (`start > stop`).
 * If `step` is positive, the last element is the largest `start + i * step` less than or equal to `stop`;
 * if `step` is negative, the last element is the smallest `start + i * step` greater than or equal to `stop`.
 * `step` must not be zero (or else an error is raised). `range(0)` returns empty iterator.
 * @param start An endpoint of the interval.
 * @param stop An endpoint of the interval.
 * @param step A step.
 * @returns Iterator on arithmetic progression.
 * @see {@link https://luafun.github.io/generators.html#fun.range}
 */
export declare function range(start: number, stop: number, step: number): FunIterator<number, [number]>;

/**
 * The iterator returns `values` over and over again indefinitely.
 * All `values` that passed to the iterator are returned as-is during the iteration.
 * @param values Objects to duplicate (non nil).
 * @returns Values over and over again indefinitely.
 * @see {@link https://luafun.github.io/generators.html#fun.duplicate}
 */
export declare function duplicate<TReturn = unknown[]>(...values: [...TReturn]): FunIterator<number, [...TReturn]>;

export declare const xrepeat: typeof duplicate;

export declare const replicate: typeof duplicate;

/**
 * The iterator that returns `fun(0)`, `fun(1)`, `fun(2)`, ... values indefinitely.
 * @param fun An unary generating function.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/generators.html#fun.tabulate}
 */
export declare function tabulate<TReturn = unknown[]>(
  fun: (this: void, n: number) => LuaMultiReturn<[...TReturn]>,
): FunIterator<number, [...TReturn]>;

/**
 * The iterator returns `0` indefinitely.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/generators.html#fun.zeros}
 */
export declare function zeros(): FunIterator<number, [0]>;

/**
 * The iterator that returns `1` indefinitely.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/generators.html#fun.ones}
 */
export declare function ones(): FunIterator<number, [1]>;

/**
 * The iterator returns random values using `math.random()`.
 * If the `n` and `m` are set then the iterator returns pseudo-random integers in the `[n, m)` interval (i.e. `m` is not included).
 * If the `m` is not set then the iterator generates pseudo-random integers in the `[0, n)` interval.
 * When called without arguments returns pseudo-random real numbers with uniform distribution in the interval `[0, 1)`.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/generators.html#fun.rands}
 */
export declare function rands(): FunIterator<number, [number]>;

/**
 * The iterator returns random values using `math.random()`.
 * If the `n` and `m` are set then the iterator returns pseudo-random integers in the `[n, m)` interval (i.e. `m` is not included).
 * If the `m` is not set then the iterator generates pseudo-random integers in the `[0, n)` interval.
 * When called without arguments returns pseudo-random real numbers with uniform distribution in the interval `[0, 1)`.
 * @param n An endpoint of the interval.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/generators.html#fun.rands}
 */
export declare function rands(n: number): FunIterator<number, [number]>;

/**
 * The iterator returns random values using `math.random()`.
 * If the `n` and `m` are set then the iterator returns pseudo-random integers in the `[n, m)` interval (i.e. `m` is not included).
 * If the `m` is not set then the iterator generates pseudo-random integers in the `[0, n)` interval.
 * When called without arguments returns pseudo-random real numbers with uniform distribution in the interval `[0, 1)`.
 * @param n An endpoint of the interval.
 * @param m An endpoint of the interval.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/generators.html#fun.rands}
 */
export declare function rands(n: number, m: number): FunIterator<number, [number]>;
