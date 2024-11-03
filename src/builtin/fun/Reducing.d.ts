/** @noSelfInFile */

import { IterParams } from "./Basic";
import { FunIterator } from "./FunIterator";

/**
 * The function reduces the array from left to right using the binary operator `accfun` and the initial value `initval`.
 * @param accfun An accumulating function.
 * @param initval An initial value that passed to `accfun` on the first iteration.
 * @param value An array.
 * @returns Reducing result.
 * @see {@link https://luafun.github.io/reducing.html#fun.foldl}
 */
export declare function foldl<T, R>(
  accfun: (this: void, acc: R, element: T) => R,
  initval: R,
  value: T[]
): R;

/**
 * The function reduces the map from left to right using the binary operator `accfun` and the initial value `initval`.
 * @param accfun An accumulating function.
 * @param initval An initial value that passed to `accfun` on the first iteration.
 * @param value A map.
 * @returns Reducing result.
 * @see {@link https://luafun.github.io/reducing.html#fun.foldl}
 */
export declare function foldl<R>(
  accfun: (this: void, acc: R, key: string, value: unknown) => R,
  initval: R,
  value: AnyTable
): R;

/**
 * The function reduces the string from left to right using the binary operator `accfun` and the initial value `initval`.
 * @param accfun An accumulating function.
 * @param initval An initial value that passed to `accfun` on the first iteration.
 * @param value A string.
 * @returns Reducing result.
 * @see {@link https://luafun.github.io/reducing.html#fun.foldl}
 */
export declare function foldl<R>(
  accfun: (this: void, acc: R, symbol: string) => R,
  initval: R,
  value: string
): R;

/**
 * The function reduces the iterator from left to right using the binary operator `accfun` and the initial value `initval`.
 * @param accfun An accumulating function.
 * @param initval An initial value that passed to `accfun` on the first iteration.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * @returns Reducing result.
 * @see {@link https://luafun.github.io/reducing.html#fun.foldl}
 */
export declare function foldl<TParam, TState, TReturn = unknown[], R>(
  accfun: (this: void, acc: R, ...args: [...TReturn]) => R,
  initval: R,
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): R;

export declare const reduct: typeof foldl;

/**
 * Return a number of remaining elements in `value`.
 * @param value An array or a map or a string.
 * @returns A number of remaining elements.
 * @see {@link https://luafun.github.io/reducing.html#fun.length}
 */
export declare function length(value: unknown[] | AnyTable | string): number;

/**
 * Return a number of remaining elements in `gen, param, state` iterator.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * @returns A number of remaining elements.
 * @see {@link https://luafun.github.io/reducing.html#fun.length}
 */
export declare function length<TParam, TState, TReturn = unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): number;

/**
 * The function reduces the array from left to right using `table.insert`.
 * @param value An array.
 * @returns New table (array) from iterated values (literally the same array).
 * @see {@link https://luafun.github.io/reducing.html#fun.totable}
 */
export declare function totable<T>(value: T[]): T[];

/**
 * The function reduces the map from left to right using `table.insert`.
 * @param value A map.
 * @returns A table (array) which contains `value` keys.
 * @see {@link https://luafun.github.io/reducing.html#fun.totable}
 */
export declare function totable<T extends AnyTable>(value: T): (keyof T)[];

/**
 * The function reduces the string from left to right using `table.insert`.
 * @param value A string.
 * @returns A table (array) which contains `value` symbols.
 * @see {@link https://luafun.github.io/reducing.html#fun.totable}
 */
export declare function totable(value: string): string[];

/**
 * The function reduces the iterator from left to right using `table.insert`.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * @returns A table (array) from iterated values.
 * @see {@link https://luafun.github.io/reducing.html#fun.totable}
 */
export declare function totable<TParam, TState, TReturn = unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): TReturn[];

/**
 * @param value A string or an array or a map.
 * @returns Literally an empty array.
 * @see {@link https://luafun.github.io/reducing.html#fun.tomap}
 */
export declare function tomap(value: string | unknown[] | AnyTable): [];

/**
 * The function reduces the iterator from left to right using `tab[val1] = val2` expression.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * @returns A new table (map) from iterated values.
 * @see {@link https://luafun.github.io/reducing.html#fun.tomap}
 */
export declare function tomap<TParam, TState, TReturn = unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): AnyTable;

/**
 * Returns `true` if the `left` array is a prefix of the `right`.
 * @see {@link https://luafun.github.io/reducing.html#fun.is_prefix_of}
 */
export declare function is_prefix_of<T>(left: T[], right: T[]): boolean;

/**
 * Returns `true` if the `left` map is a prefix of the `right`.
 * @see {@link https://luafun.github.io/reducing.html#fun.is_prefix_of}
 */
export declare function is_prefix_of(left: AnyTable, right: AnyTable): boolean;

/**
 * Returns `true` if the `left` string is a prefix of the `right`.
 * @see {@link https://luafun.github.io/reducing.html#fun.is_prefix_of}
 */
export declare function is_prefix_of(left: string, right: string): boolean;

/**
 * Returns `true` if the `left` iterator is a prefix of the `right`.
 * @see {@link https://luafun.github.io/reducing.html#fun.is_prefix_of}
 */
export declare function is_prefix_of(
  left: FunIterator,
  right: FunIterator
): boolean;

/**
 * Returns `true` when string or table or iterator is empty or if iterator is finished.
 * @param value A string or a table.
 * @see {@link https://luafun.github.io/reducing.html#fun.is_null}
 */
export declare function is_null(
  value: string | unknown[] | AnyTable | FunIterator
): boolean;

/**
 * Returns `true` when `gen`, `param`, `state` iterator is empty or finished.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * @see {@link https://luafun.github.io/reducing.html#fun.is_null}
 */
export declare function is_null<TParam, TState, TReturn = unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): boolean;

/**
 * Returns `true` if all elements of array satisfy the `predicate`.
 * @see {@link https://luafun.github.io/reducing.html#fun.all}
 */
export declare function all<T>(
  predicate: (this: void, arg: T) => boolean,
  value: T[]
): boolean;

/**
 * Returns `true` if all key-value pairs of map satisfy the `predicate`.
 * @see {@link https://luafun.github.io/reducing.html#fun.all}
 */
export declare function all(
  predicate: (this: void, key: string, value: unknown) => boolean,
  value: AnyTable
): boolean;

/**
 * Returns `true` if all symbols of string satisfy the `predicate`.
 * @see {@link https://luafun.github.io/reducing.html#fun.all}
 */
export declare function all(
  predicate: (this: void, symbol: string) => boolean,
  value: string
): boolean;

/**
 * Returns `true` if all return values of iterator satisfy the `predicate`.
 * @see {@link https://luafun.github.io/reducing.html#fun.all}
 */
export declare function all<TParam, TState, TReturn = unknown[]>(
  predicate: (this: void, ...args: [...TReturn]) => boolean,
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): boolean;

export declare const every: typeof all;

/**
 * Returns `true` if at least one element of array satisfy the `predicate`.
 * The iteration stops on the first such value.
 * @see {@link https://luafun.github.io/reducing.html#fun.any}
 */
export declare function any<T>(
  predicate: (this: void, arg: T) => boolean,
  value: T[]
): boolean;

/**
 * Returns `true` if at least one key-value pair of map satisfy the `predicate`.
 * The iteration stops on the first such value.
 * @see {@link https://luafun.github.io/reducing.html#fun.any}
 */
export declare function any(
  predicate: (this: void, key: string, value: unknown) => boolean,
  value: AnyTable
): boolean;

/**
 * Returns `true` if at least one symbol of string satisfy the `predicate`.
 * The iteration stops on the first such value.
 * @see {@link https://luafun.github.io/reducing.html#fun.any}
 */
export declare function any(
  predicate: (this: void, symbol: string) => boolean,
  value: string
): boolean;

/**
 * Return `true` if at least one return values of iterator satisfy the `predicate`.
 * The iteration stops on the first such value.
 * Therefore, infinite iterators that have at least one satisfying value might work.
 * @see {@link https://luafun.github.io/reducing.html#fun.any}
 */
export declare function any<TState, TReturn = unknown[]>(
  predicate: (this: void, ...args: [...TReturn]) => boolean,
  iterator: FunIterator<TState, TReturn>
): boolean;

/**
 * Returns `true` if at least one return values of iterator satisfy the `predicate`.
 * The iteration stops on the first such value.
 * Therefore, infinite iterators that have at least one satisfying value might work.
 * @see {@link https://luafun.github.io/reducing.html#fun.any}
 */
export declare function any<TParam, TState, TReturn = unknown[]>(
  predicate: (this: void, ...args: [...TReturn]) => boolean,
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): boolean;

export declare const some: typeof any;

/**
 * Sum up all array values. For an empty arrays `0` is returned.
 * @see {@link https://luafun.github.io/reducing.html#fun.sum}
 */
export declare function sum(value: number[]): number;

/**
 * Sum up all iteration values. For an empty iterators `0` is returned.
 * @see {@link https://luafun.github.io/reducing.html#fun.sum}
 */
export declare function sum<TState, TReturn extends number[]>(
  iterator: FunIterator<TState, TReturn>
): number;

/**
 * Sum up all iteration values. For an empty iterators `0` is returned.
 * @see {@link https://luafun.github.io/reducing.html#fun.sum}
 */
export declare function sum<TParam, TState, TReturn extends number[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): boolean;
