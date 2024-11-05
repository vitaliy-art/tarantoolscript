/** @noSelfInFile */

import { IterParams } from "./Basic";
import { FunIterator } from "./FunIterator";

/**
 * Return a new iterator by applying the `fun` to each element of array.
 * The mapping is performed on the fly and no values are buffered.
 * @param fun A function to apply.
 * @param value An array.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.map}
 */
export declare function map<T, TResult>(
  fun: (this: void, element: T) => TResult,
  value: T[]
): FunIterator<number, [TResult]>;

/**
 * Return a new iterator by applying the `fun` to each symbol of string.
 * The mapping is performed on the fly and no values are buffered.
 * @param fun A function to apply.
 * @param value A string.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.map}
 */
export declare function map<TResult>(
  fun: (this: void, element: string) => TResult,
  value: string
): FunIterator<number, [TResult]>;

/**
 * Return a new iterator by applying the `fun` to each element of iterator.
 * The mapping is performed on the fly and no values are buffered.
 * @param fun A function to apply.
 * @param iterator An original iterator.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.map}
 */
export declare function map<TResult, TState, TReturn extends [...unknown[]]>(
  fun: (this: void, ...args: TReturn) => TResult,
  iterator: FunIterator<TState, TReturn>
): FunIterator<number, [TResult]>;

/**
 * Return a new iterator by applying the `fun` to each key-value pair of map.
 * The mapping is performed on the fly and no values are buffered.
 * @param fun A function to apply.
 * @param value A map.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.map}
 */
export declare function map<TResult>(
  fun: (this: void, key: string, value: unknown) => TResult,
  value: AnyTable
): FunIterator<number, [TResult]>;

/**
 * Return a new iterator by applying the `fun` to each element of iteration.
 * The mapping is performed on the fly and no values are buffered.
 * @param fun A function to apply.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.map}
 */
export declare function map<TParam, TState, TReturn extends unknown[], TResult>(
  fun: (this: void, ...args: TReturn) => TResult,
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): FunIterator<number, [TResult]>;

/**
 * Return a new iterator by enumerating all elements of the array starting from `1`.
 * The mapping is performed on the fly and no values are buffered.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.enumerate}
 */
export declare function enumerate<T>(
  value: T[]
): FunIterator<number, [number, T]>;

/**
 * Return a new iterator by enumerating all symbols of the string starting from `1`.
 * The mapping is performed on the fly and no values are buffered.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.enumerate}
 */
export declare function enumerate(
  value: string
): FunIterator<number, [number, string]>;

/**
 * Return a new iterator by enumerating all elements of the iterator starting from `1`.
 * The mapping is performed on the fly and no values are buffered.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.enumerate}
 */
export declare function enumerate<TState, TReturn extends unknown[]>(
  iterator: FunIterator<TState, TReturn>
): FunIterator<number, [number, ...TReturn]>;

/**
 * Return a new iterator by enumerating all key-value pairs of the map starting from `1`.
 * The mapping is performed on the fly and no values are buffered.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.enumerate}
 */
export declare function enumerate(
  value: AnyTable
): FunIterator<number, [number, string, unknown]>;

/**
 * Return a new iterator by enumerating all elements of `gen, param, state` iterator starting from `1`.
 * The mapping is performed on the fly and no values are buffered.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/transformations.html#fun.enumerate}
 */
export declare function enumerate<TParam, TState, TReturn extends unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): FunIterator<number, [number, ...TReturn]>;

/**
 * Return a new iterator where the `x` value is interspersed between the elements of the source iterator.
 * The `x` value can also be added as a last element of returning iterator if the source iterator contains the odd number of elements.
 * @see {@link https://luafun.github.io/transformations.html#fun.intersperse}
 */
export declare function intersperse(
  x: unknown,
  value: unknown[] | string | FunIterator<unknown, unknown[]> | AnyTable
): FunIterator<number, unknown[]>;

/**
 * Return a new iterator where the `x` value is interspersed between the elements of the source iterator.
 * The `x` value can also be added as a last element of returning iterator if the source iterator contains the odd number of elements.
 * @see {@link https://luafun.github.io/transformations.html#fun.intersperse}
 */
export declare function intersperse<TParam, TState, TReturn extends unknown[]>(
  x: unknown,
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): FunIterator<number, unknown[]>;
