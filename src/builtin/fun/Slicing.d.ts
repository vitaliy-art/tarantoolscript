/** @noSelfInFile */

import { IterParams } from './Basic';

/**
 * Return the n-th element of array.
 * @param n An element number (indexed starting from 1, like Lua tables).
 * @param value An array.
 * @returns The n-th element of array.
 * @see {@link https://luafun.github.io/slicing.html#fun.nth}
 */
export declare function nth<T>(n: number, value: T[]): T?;

/**
 * Return the n-th key-value pair of map.
 * @param n An element number (indexed starting from 1, like Lua tables).
 * @param value A map.
 * @returns The n-th key-value pair of map.
 * @see {@link https://luafun.github.io/slicing.html#fun.nth}
 */
export declare function nth(n: number, value: AnyTable): LuaMultiReturn<[string, unknown]>?;

/**
 * Return th n-th symbol of string.
 * @param n An element number (indexed starting from 1, like Lua tables).
 * @param value A string value.
 * @returns The n-th symbol of string.
 * @see {@link https://luafun.github.io/slicing.html#fun.nth}
 */
export declare function nth(n: number, value: string): string?;

/**
 * This function returns the n-th element of `gen`, `param`, `state` iterator.
 * If the iterator does not have `n` items then `nil` is returned.
 * @param n A sequential number (indexed starting from 1, like Lua tables).
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * @returns The n-th element of iterator.
 * @see {@link https://luafun.github.io/slicing.html#fun.nth}
 */
export declare function nth<TParam, TState, TReturn = any[]>(
  n: number,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): unknown;
