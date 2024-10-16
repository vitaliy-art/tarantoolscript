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
export declare function take_n(n: number, value: string): FunIterator<number, [string]>;

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

export declare const take: typeof take_n & typeof take_while;

/**
 * Return an iterator after skipping first `n` elements of array.
 * @param n A number of elements to skip.
 * @param value An array.
 * @returns An iterator after skipping first `n` elements.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_n}
 */
export declare function drop_n<T>(n: number, value: T[]): FunIterator<number, [T]>;

/**
 * Return an iterator after skipping first `n` key-value pairs of map.
 * @param n A number of elements to skip.
 * @param value A map.
 * @returns An iterator after skipping first `n` key-value paris.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_n}
 */
export declare function drop_n(n: number, value: AnyTable): FunIterator<string, [string, unknown]>;

/**
 * Return an iterator after skipping first `n` symbols of string.
 * @param n A number of symbols to skip.
 * @param value A string.
 * @returns An iterator after skipping first `n` symbols.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_n}
 */
export declare function drop_n(n: number, value: string): FunIterator<string, [string]>;

/**
 * Return an iterator after skipping first `n` elements.
 * @param n A number of elements to skip.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator after skipping first `n` elements.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_n}
 */
export declare function drop_n<TParam, TState, TReturn = unknown[]>(
  n: number,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): FunIterator<TState, TReturn>;

/**
 * Return an iterator after skipping the longest prefix of elements satisfying the condition.
 * @param predicate Function that accepts an element of iteration
 * and returns `true` if that element should be skipped.
 * @value An array to iterate for.
 * @returns An iterator after skipping the longest prefix of elements satisfying the condition.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_while}
 */
export declare function drop_while<T>(predicate: (this: void, element: T) => boolean, value: T[]): FunIterator<number, [T]>;

/**
 * Returns an iterator after skipping the longest prefix of first key-value pairs satisfying the condition.
 * @param predicate Function that accepts a key-value pair of iteration
 * and returns `true` if that pair should be skipped.
 * @param value A map to iterate for.
 * @returns An iterator after skipping the longest prefix of first key-value pairs satisfying the condition.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_while}
 */
export declare function drop_while(
  predicate: (this: void, key: string, value: any) => boolean,
  value: AnyTable,
): FunIterator<string, [string, unknown]>;

/**
 * Returns an iterator after skipping the longest prefix of first symbols satisfying the condition.
 * @param predicate Function that accepts a symbol of iteration
 * and returns `true` if that symbol should be skipped.
 * @param value A string to iterate for.
 * @returns An iterator after skipping the longest prefix of first symbols satisfying the condition.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_while}
 */
export declare function drop_while(
  predicate: (this: void, element: string) => boolean,
  value: string,
): FuncIterator<number, [string]>;

/**
 * Returns an iterator after skipping the longest prefix of `gen`, `param`, `state` elements that satisfy predicate.
 * @param predicate Function that accepts elements of iteration
 * and returns `true` if that elements should be skipped.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator after skipping the longest prefix of elements that satisfy predicate.
 * @see {@link https://luafun.github.io/slicing.html#fun.drop_while}
 */
export declare function drop_while<TParam, TState, TReturn = unknown[]>(
  predicate: (this: void, ...params: [...TReturn]) => boolean,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): FunIterator<TState, TReturn>;

export declare const drop: typeof drop_n & typeof drop_while;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` elements (possibly empty)
 * of array and second operates the remainder of array.
 * @param n A number of elements to span.
 * @param value An array.
 * @returns An iterator pair (first `n` elements and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span<T>(
  n: number,
  value: T[],
): LuaMultiReturn<[FunIterator<number, [T]>, FunIterator<number, [T]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` key-value pairs (possibly empty)
 * of map and second operates the remainder of map.
 * @param n A number of elements to span.
 * @param value A map.
 * @returns An iterator pair (first `n` key-value pairs and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span(
  n: number,
  value: AnyTable,
): LuaMultiReturn<[FunIterator<string, [string, unknown]>, FunIterator<string, [string, unknown]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` symbols (possibly empty)
 * of string and second operates the remainder of string.
 * @param n A number of elements to span.
 * @param value A string.
 * @returns An iterator pair (first `n` symbols and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span(
  n: number,
  value: string,
): LuaMultiReturn<[FunIterator<string, [string]>, FunIterator<string, [string]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` elements (possibly empty)
 * of `gen`, `param`, `state` iterator and second operates the remainder of gen, param, state iterator.
 * @param n A number of elements to span.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator pair (first `n` elements and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span<TParam, TState, TReturn = unknown[]>(
  n: number,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): LuaMultiReturn<[FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of the longest prefix of elements (possibly empty)
 * of array that satisfy predicate and second operates the remainder of array.
 * @param predicate Function that accepts an element of iteration
 * and returns `true` if that element satisfy the condition.
 * @param value An array.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span<T>(
  predicate: (this: void, element: T) => boolean,
  value: T[],
): LuaMultiReturn<[FunIterator<number, [T]>, FunIterator<number, [T]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of the longest prefix of key-value pairs (possibly empty)
 * of map that satisfy predicate and second operates the remainder of map.
 * @param predicate Function that accepts an key and value of key-value pair
 * and returns `true` if their values satisfy the condition.
 * @param value A map.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span(
  predicate: (this: void, key: string, value: any) => boolean,
  value: AnyTable,
): LuaMultiReturn<[FunIterator<string, [string, unknown]>, FunIterator<string, [string, unknown]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of the longest prefix of symbols (possibly empty)
 * of string that satisfy predicate and second operates the remainder of string.
 * @param predicate Function that accepts a symbol and returns `true` if it satisfy the condition.
 * @param value A string.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span(
  predicate: (this: void, element: string) => boolean,
  value: string,
): LuaMultiReturn<[FuncIterator<number, [string]>, FuncIterator<number, [string]>]>;

/**
 * Return an iterator pair where the first operates on the longest prefix (possibly empty)
 * of `gen`, `param`, `state` iterator of elements that satisfy predicate
 * and second operates the remainder of `gen`, `param`, `state` iterator.
 * @param predicate Function that accepts an element of iteration and returns `true` if it satisfy the condition.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/slicing.html#fun.span}
 */
export declare function span<TParam, TState, TReturn = unknown[]>(
  predicate: (this: void, ...params: [...TReturn]) => boolean,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): LuaMultiReturn<[FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]>;

export declare const split: typeof span;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` elements (possibly empty)
 * of array and second operates the remainder of array.
 * @param n A number of elements to span.
 * @param value An array.
 * @returns An iterator pair (first `n` elements and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.split_at}
 */
export declare function split_at<T>(
  n: number,
  value: T[],
): LuaMultiReturn<[FunIterator<number, [T]>, FunIterator<number, [T]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` key-value pairs (possibly empty)
 * of map and second operates the remainder of map.
 * @param n A number of elements to span.
 * @param value A map.
 * @returns An iterator pair (first `n` key-value pairs and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.split_at}
 */
export declare function split_at(
  n: number,
  value: AnyTable,
): LuaMultiReturn<[FunIterator<string, [string, unknown]>, FunIterator<string, [string, unknown]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` symbols (possibly empty)
 * of string and second operates the remainder of string.
 * @param n A number of elements to span.
 * @param value A string.
 * @returns An iterator pair (first `n` symbols and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.split_at}
 */
export declare function split_at(
  n: number,
  value: string,
): LuaMultiReturn<[FunIterator<string, [string]>, FunIterator<string, [string]>]>;

/**
 * Return an iterator pair where the first operates on the subsequence of first `n` elements (possibly empty)
 * of `gen`, `param`, `state` iterator and second operates the remainder of gen, param, state iterator.
 * @param n A number of elements to span.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator pair (first `n` elements and remainder).
 * @see {@link https://luafun.github.io/slicing.html#fun.split_at}
 */
export declare function split_at<TParam, TState, TReturn = unknown[]>(
  n: number,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): LuaMultiReturn<[FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]>;
