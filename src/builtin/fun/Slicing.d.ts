/** @noSelfInFile */

import { IterParams } from './Basic';
import { FunIterator } from './FunIterator';

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
export declare function nth(n: number, value: AnyTable): LuaMultiReturn<[string, unknown] | [undefined]>;

/**
 * Return the n-th symbol of string.
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
export declare function nth<TParam, TState, TReturn = unknown[]>(
  n: number,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): unknown;

/**
 * Extract the first element of an array.  If value is empty then an error is raised.
 * @param value An array.
 * @returns A first element of an array.
 * @see {@link https://luafun.github.io/slicing.html#fun.head}
 */
export declare function head<T>(value: T[]): T;

/**
 * Extract the first key-value pair of map. If value is empty then an error is raised.
 * @param value A map.
 * @returns A first key-value pair of map.
 * @see {@link https://luafun.github.io/slicing.html#fun.head}
 */
export declare function head(value: AnyTable): LuaMultiReturn<[string, unknown]>;

/**
 * Extract the first symbol of string. If value is empty then an error is raised.
 * @param value A string value.
 * @returns A first symbol of string. *
 * @see {@link https://luafun.github.io/slicing.html#fun.head}
 */
export declare function head(value: string): string;

/**
 * Extract the first element of `gen`, `param`, `state` iterator. If the iterator is empty then an error is raised.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * @returns A first element of `gen`, `param`, `state` iterator.
 * @see {@link https://luafun.github.io/slicing.html#fun.head}
 */
export declare function head<TParam, TState, TReturn = unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): unknown;

export declare const car: typeof head;

/**
 * Return a copy of array without its first element.
 * If the array is empty then an empty iterator is returned.
 * @param value An array.
 * @returns `gen`, `param`, `state` iterator without a first element.
 * @see {@link https://luafun.github.io/slicing.html#fun.tail}
 */
export declare function tail<T>(value: T[]): FunIterator<number, [T]>;

/**
 * Return a copy of map without its first element.
 * If the map is empty then an empty iterator is returned.
 * @param value A map.
 * @returns `gen`, `param`, `state` iterator without a first element.
 * @see {@link https://luafun.github.io/slicing.html#fun.tail}
 */
export declare function tail(value: AnyTable): FunIterator<string, [string, unknown]>;

/**
 * Return a copy of string without its first symbol.
 * If the string is empty then an empty iterator is returned.
 * @param value A string.
 * @returns `gen`, `param`, `state` iterator without a first element.
 * @see {@link https://luafun.github.io/slicing.html#fun.tail}
 */
export declare function tail(value: string): FunIterator<number, [string]>;

/**
 * Return a copy of `gen`, `param`, `state` iterator without its first element.
 * If the iterator is empty then an empty iterator is returned.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns `gen`, `param`, `state` without a first element.
 * @see {@link https://luafun.github.io/slicing.html#fun.tail}
 */
export declare function tail<TParam, TState, TReturn = unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): FunIterator<TState, TReturn>;

export declare const cdr: typeof tail;

/**
 * Return an iterator on the subsequence of first `n` elements of array.
 * @param n A number of elements to take.
 * @param value An array.
 * @returns An iterator on the subsequence of first `n` elements.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_n}
 */
export declare function take_n<T>(n: number, value: T[]): FunIterator<number, [T]>;

/**
 * Return an iterator on the subsequence of first `n` key-value pairs of map.
 * @param n A number of elements to take.
 * @param value A map.
 * @returns An iterator on the subsequence of first `n` key-value paris.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_n}
 */
export declare function take_n(n: number, value: AnyTable): FunIterator<string, [string, unknown]>;

/**
 * Return an iterator on the subsequence of first `n` symbols of string.
 * @param n A number of symbols to take.
 * @param value A string.
 * @returns An iterator on the subsequence of first `n` symbols.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_n}
 */
export declare function take_n(n: number, value: string): FunIterator<string, [string]>;

/**
 * Return an iterator on the subsequence of first `n` elements.
 * @param n A number of elements to take.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator on the subsequence of first `n` elements.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_n}
 */
export declare function take_n<TParam, TState, TReturn = unknown[]>(
  n: number,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): FunIterator<TState, TReturn>;

/**
 * Return an iterator on the subsequence of first elements satisfying the condition.
 * @param predicate Function that accepts an element of iteration
 * and returns `true` if that element should be included into result iterator.
 * @value An array to iterate for.
 * @returns An iterator on the subsequence of first elements satisfying the condition.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_while}
 */
export declare function take_while<T>(predicate: (this: void, element: T) => boolean, value: T[]): FunIterator<number, [T]>;

/**
 * Returns an iterator on the subsequence of first key-value pairs satisfying the condition.
 * @param predicate Function that accepts a key-value pair of iteration
 * and returns `true` if that pair should be included into result iterator.
 * @param value A map to iterate for.
 * @returns An iterator on the subsequence of first key-value pairs satisfying the condition.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_while}
 */
export declare function take_while(
  predicate: (this: void, key: string, value: any) => boolean,
  value: AnyTable,
): FunIterator<string, [string, unknown]>;

/**
 * Returns an iterator on the subsequence of first symbols satisfying the condition.
 * @param predicate Function that accepts a symbol of iteration
 * and returns `true` if that symbol should be included into result iterator.
 * @param value A string to iterate for.
 * @returns An iterator on the subsequence of first symbols satisfying the condition.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_while}
 */
export declare function take_while(
  predicate: (this: void, element: string) => boolean,
  value: string,
): FuncIterator<number, [string]>;

/**
 * Returns an iterator on the longest prefix of `gen`, `param`, `state` elements that satisfy predicate.
 * @param predicate Function that accepts elements of iteration
 * and returns `true` if that elements should be included into result iterator.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator on the longest prefix elements that satisfy predicate.
 * @see {@link https://luafun.github.io/slicing.html#fun.take_while}
 */
export declare function take_while<TParam, TState, TReturn = unknown[]>(
  predicate: (this: void, ...params: [...TReturn]) => boolean,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): FunIterator<TState, TReturn>;

export const take: typeof take_n & typeof take_while;
