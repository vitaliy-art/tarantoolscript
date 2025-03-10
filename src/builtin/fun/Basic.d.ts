/** @noSelfInFile */

import { FunIterator } from "./FunIterator";

/**
 * Make `gen`, `param`, `state` iterator from the iterable object. The function is a generalized version of pairs() and ipairs().
 * @param value An array to iterate for.
 * @returns `gen`, `param`, `state` – iterator triplet.
 * @see {@link https://luafun.github.io/basic.html#fun.iter}
 */
export declare function iter<T>(value: Array<T>): FunIterator<number, [T]>;

/**
 * Make iterator from the othe iterator. The function is a generalized version of pairs() and ipairs().
 * @param value An iterator.
 * @returns `gen`, `param`, `state` – iterator triplet.
 * @see {@link https://luafun.github.io/basic.html#fun.iter}
 */
export declare function iter<TState, TReturn extends unknown[]>(
  value: FunIterator<TState, TReturn>
): FunIterator<TState, TReturn>;

/**
 * Make `gen`, `param`, `state` iterator from the iterable object. The function is a generalized version of pairs() and ipairs().
 * @param value A map to iterate for.
 * @returns `gen`, `param`, `state` – iterator triplet.
 * @see {@link https://luafun.github.io/basic.html#fun.iter}
 */
export declare function iter<TValue>(
  value: Record<string, TValue>
): FunIterator<string, [string, TValue]>;

/**
 * Make `gen`, `param`, `state` iterator from the iterable object. The function is a generalized version of pairs() and ipairs().
 * @param value A string to iterate for.
 * @returns `gen`, `param`, `state` – iterator triplet.
 * @see {@link https://luafun.github.io/basic.html#fun.iter}
 */
export declare function iter(value: string): FunIterator<number, [string]>;

/**
 * Make `gen`, `param`, `state` iterator from the iterable object. The function is a generalized version of pairs() and ipairs().
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @returns `gen`, `param`, `state` – iterator triplet.
 * @see {@link https://luafun.github.io/basic.html#fun.iter}
 */
export declare function iter<TParam, TState, TReturn extends unknown[]>(
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): FunIterator<TState, TReturn>;

export type IterParams<TParam, TState, TReturn extends unknown[]> = [
  gen: (
    this: void,
    param: TParam,
    state: TState
  ) => LuaMultiReturn<[TState, ...TReturn] | [undefined, undefined]>,
  param: TParam,
  state: TState
];

/**
 * Execute the `fun` for each iteration value.
 * @param fun Function to execute on each value.
 * @param value An array to iterate for.
 * @see {@link https://luafun.github.io/basic.html#fun.each}
 */
export declare function each<T>(
  fun: (this: void, param: T) => unknown,
  value: Array<T>
): void;

/**
 * Execute the `fun` for each iteration value.
 * @param value An iterator.
 * @see {@link https://luafun.github.io/basic.html#fun.each}
 */
export declare function each<TState, TReturn extends unknown[]>(
  fun: (this: void, ...params: TReturn) => unknown,
  value: FunIterator<TState, TReturn>
): void;

/**
 * Execute the `fun` for each iteration value.
 * @param fun Function to execute on each value.
 * @param value A map to iterate for.
 * @see {@link https://luafun.github.io/basic.html#fun.each}
 */
export declare function each<TValue>(
  fun: (this: void, key: string, value: TValue) => unknown,
  value: Record<string, TValue>
): void;

/**
 * Execute the `fun` for each iteration value.
 * @param fun Function to execute on each value.
 * @param value A string to iterate for.
 * @see {@link https://luafun.github.io/basic.html#fun.each}
 */
export declare function each(
  fun: (this: void, param: string) => unknown,
  value: string
): void;

/**
 * Execute the `fun` for each iteration value.
 * @param fun Function to execute on each value.
 * @param gen A generating function that can produce a next value on each iteration.
 * Usually returns a new state and iteration values (multireturn).
 * @param param A permanent (constant) parameter of the generating function.
 * It is used to create a specific instance of the generating function. For example, the table itself in the `ipairs` case.
 * @param state A some transient state of an iterator that is changed after each iteration.
 * For example, the array index in the `ipairs` case.
 * @see {@link https://luafun.github.io/basic.html#fun.each}
 */
export declare function each<TParam, TState, TReturn extends unknown[]>(
  fun: (this: void, ...args: TReturn) => unknown,
  ...iterParams: [...IterParams<TParam, TState, TReturn>]
): void;

export declare const for_each: typeof each;

export declare const foreach: typeof each;
