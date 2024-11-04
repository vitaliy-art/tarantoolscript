/** @noSelfInFile */

import { FunIterator } from "./FunIterator";

/**
 * Return a new iterator of those elements that satisfy the `predicate`.
 * @param predicate An predicate to filter the array.
 * @param value An array.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/filtering.html#fun.filter}
 */
export declare function filter<T>(predicate: (this: void, element: T) => boolean, value: T[]): FunIterator<number, [T]>;

/**
 * Return a new iterator of those elements that satisfy the `predicate`.
 * @param predicate An predicate to filter the map.
 * @param value A map.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/filtering.html#fun.filter}
 */
export declare function filter(
  predicate: (this: void, key: string, value: any) => boolean,
  value: AnyTable,
): FunIterator<string, [string, unknown]>;

/**
 * Return a new iterator of those elements that satisfy the `predicate`.
 * @param predicate An predicate to filter the string.
 * @param value A string.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/filtering.html#fun.filter}
 */
export declare function filter(
  predicate: (this: void, element: string) => boolean,
  value: string,
): FuncIterator<number, [string]>;

/**
 * Return a new iterator of those elements that satisfy the `predicate`.
 * @param predicate An predicate to filter the iterator.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/filtering.html#fun.filter}
 */
export declare function filter<TParam, TState, TReturn = unknown[]>(
  predicate: (this: void, ...params: [...TReturn]) => boolean,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): FunIterator<TState, TReturn>;

export declare const remove_if: typeof filter;

/**
 * Return a new iterator of those elements that satisfy the regular expression.
 * @regexp A string regular expression to filter the array.
 * @value An array of strings.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/filtering.html#fun.grep}
 */
declare function grepStrings(regexp: string, value: string[]): FunIterator<number, [string]>

export declare const grep: typeof filter & typeof grepStrings

/**
 * Return two iterators where elements do and do not satisfy the `predicate`.
 * @param predicate Function to filter the array.
 * @param value An array.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/filtering.html#fun.partition}
 */
export declare function partition<T>(
  predicate: (this: void, element: T) => boolean,
  value: T[],
): LuaMultiReturn<[FunIterator<number, [T]>, FunIterator<number, [T]>]>;

/**
 * Return two iterators where elements do and do not satisfy the `predicate`.
 * @param predicate Function to filter the map.
 * @param value A map.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/filtering.html#fun.partition}
 */
export declare function partition(
  predicate: (this: void, key: string, value: any) => boolean,
  value: AnyTable,
): LuaMultiReturn<[FunIterator<string, [string, unknown]>, FunIterator<string, [string, unknown]>]>;

/**
 * Return two iterators where elements do and do not satisfy the `predicate`.
 * @param predicate Function to filter the string.
 * @param value A string.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/filtering.html#fun.partition}
 */
export declare function partition(
  predicate: (this: void, element: string) => boolean,
  value: string,
): LuaMultiReturn<[FuncIterator<number, [string]>, FuncIterator<number, [string]>]>;

/**
 * Return two iterators where elements do and do not satisfy the `predicate`.
 * @param predicate Function to filter the iterator.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator pair.
 * @see {@link https://luafun.github.io/filtering.html#fun.partition}
 */
export declare function partition<TParam, TState, TReturn = unknown[]>(
  predicate: (this: void, ...params: [...TReturn]) => boolean,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): LuaMultiReturn<[FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]>;