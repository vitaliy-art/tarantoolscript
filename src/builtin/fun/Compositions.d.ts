/** @noSelfInFile */

import { IterParams } from "./Basic";
import { FunIterator } from "./FunIterator";

/**
 * Return a new iterator where i-th return value contains the i-th element from each of the iterators.
 * The returned iterator is truncated in length to the length of the shortest iterator.
 * For multi-return iterators only the first variable is used.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/compositions.html#fun.zip}
 */
export declare function zip<TState, TReturn extends unknown[]>(
  ...iterators: (
    | string
    | FunIterator<unknown, unknown[]>
    | AnyTable
    | unknown[]
  )[]
): FunIterator<TState, TReturn>;

/**
 * Make an iterator that returns elements from the first iterator until it is exhausted,
 * then proceeds to the next iterator, until all of the iterators are exhausted.
 * Used for treating consecutive iterators as a single iterator. Infinity iterators are supported, but are not recommended.
 * @returns A consecutive iterator from sources (left from right).
 * @see {@link https://luafun.github.io/compositions.html#fun.chain}
 */
export declare function chain<TState, TReturn extends unknown[]>(
  ...iterators: (
    | string
    | FunIterator<unknown, unknown[]>
    | AnyTable
    | unknown[]
  )[]
): FunIterator<TState, TReturn>;

/**
 * Make a new iterator that returns symbols from string until the end and then “restart” iteration.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/compositions.html#fun.cycle}
 */
export declare function cycle(value: string): FunIterator<number, [string]>;

/**
 * Make a new iterator that returns elements from array until the end and then “restart” iteration.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/compositions.html#fun.cycle}
 */
export declare function cycle<T>(value: T[]): FunIterator<number, [T]>;

/**
 * Make a new iterator that returns elements from iterator until the end
 * and then “restart” iteration using a saved clone of iterator.
 * The returned iterator is constant space and no return values are buffered.
 * Instead of that the function make a clone of the source iterator.
 * Therefore, the source iterator must be pure functional to make an identical clone.
 * @returns A new iterator.
 * Infinity iterators are supported, but are not recommended.
 * @see {@link https://luafun.github.io/compositions.html#fun.cycle}
 */
export declare function cycle<TState, TReturn extends unknown[]>(
  iterator: FunIterator<TState, TReturn>
): FunIterator<TState, TReturn>;

/**
 * Make a new iterator that returns key-value pairs from map until the end and then “restart” iteration.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/compositions.html#fun.cycle}
 */
export declare function cycle<TValue>(
  value: Record<string, TValue>
): FunIterator<number, [string, TValue]>;

/**
 * Make a new iterator that returns elements from `{gen, param, state}` iterator until the end
 * and then “restart” iteration using a saved clone of `{gen, param, state}`.
 * The returned iterator is constant space and no return values are buffered.
 * Instead of that the function make a clone of the source `{gen, param, state}` iterator.
 * Therefore, the source iterator must be pure functional to make an identical clone.
 * Infinity iterators are supported, but are not recommended.
 * @returns A new iterator.
 * @see {@link https://luafun.github.io/compositions.html#fun.cycle}
 */
export declare function cycle<TParam, TState, TReturn extends unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): FunIterator<TState, TReturn>;
