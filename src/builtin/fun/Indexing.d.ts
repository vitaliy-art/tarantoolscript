/** @noSelfInFile */

import { IterParams } from './Basic';
import { FunIterator } from './FunIterator';

/**
 * The function returns the position of the first element in the array which is equal (using `==`) to the query element,
 * or `nil` if there is no such element.
 * @param x A value to find.
 * @param value An array.
 * @returns The position of element or nil.
 * @see {@link https://luafun.github.io/indexing.html#fun.index}
 */
export declare function index<T>(x: T, value: T[]): number?;

/**
 * The function returns the position of the first element in the map which key value is equal (using `==`) to the query element,
 * or `nil` if there is no such key.
 * @param x A key to find.
 * @param value A map.
 * @returns The position of element or nil.
 * @see {@link https://luafun.github.io/indexing.html#fun.index}
 */
export declare function index(x: string, value: AnyTable): number?;

/**
 * The function returns the position of the first symbol in the string which is equal (using `==`) to the query element,
 * or `nil` if there is no such symbol.
 * @param x A symbol to find.
 * @param value A string.
 * @returns The position of symbol or nil.
 * @see {@link https://luafun.github.io/indexing.html#fun.index}
 */
export declare function index(x: string, value: string): number?;

/**
 * The function returns the position of the first element in the given iterator which is equal (using `==`) to the query element,
 * or `nil` if there is no such element.
 * @param x A value to find.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns The position of element or nil.
 * @see {@link https://luafun.github.io/indexing.html#fun.index}
 */
export declare function index<TParam, TState, TReturn = unknown[]>(
  x: unknown,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): number?;

export declare const index_of: typeof index;

export declare const elem_index: typeof index;

/**
 * The function returns an iterator to positions of elements which equals to the query element.
 * @param x A value to find.
 * @param value An array.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/indexing.html#fun.indexes}
 */
export declare function indexes<T>(x: T, value: T[]): FunIterator<number, [number]>;

/**
 * The function returns an iterator to position of one element which key equals to the query element.
 * @param x A key to find.
 * @param value A map.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/indexing.html#fun.indexes}
 */
export declare function indexes(x: unknown, value: AnyTable): FunIterator<number, [number]>;

/**
 * The function returns an iterator to positions of symbols which equals to the query symbol.
 * @param x A symbol to find.
 * @param value A string.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/indexing.html#fun.indexes}
 */
export declare function indexes(x: string, value: string): FunIterator<number, [number]>;

/**
 * The function returns an iterator to positions of elements which equals to the query element.
 * @param x A value to find
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns An iterator.
 * @see {@link https://luafun.github.io/indexing.html#fun.indexes}
 */
export declare function indexes<TParam, TState, TReturn = unknown[]>(
  x: unknown,
  ...iterParams: [...IterParams<TParam, TState, TReturn>],
): FunIterator<number, [number]>;

export declare const indices: typeof indexes;

export declare const elem_indexes: typeof indexes;

export declare const elem_indices: typeof indexes;
