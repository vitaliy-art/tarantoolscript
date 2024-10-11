export declare interface FunIterator<TState, TReturn = unknown[]> extends LuaIterable<LuaMultiReturn<[TState, ...TReturn]>> {
  /**
   * Execute the `fun` for each iteration value.
   * @see {@link https://luafun.github.io/basic.html#fun.each}
   */
  each: EachIterator<TReturn>;

  /**
   * An alias for `each()`.
   * @see {@link https://luafun.github.io/basic.html#fun.each}
   */
  for_each: EachIterator<TReturn>;

  /**
   * An alias for `each()`.
   * @see {@link https://luafun.github.io/basic.html#fun.each}
   */
  foreach: EachIterator<TReturn>;

  /**
   * Return the n-th element of iteration.
   *
   * This function is optimized for basic array and string iterators and has O(1) complexity for these cases.
   * @param n A sequential number (indexed starting from 1, like Lua tables).
   * @returns The n-th element of iteration.
   * @see {@link https://luafun.github.io/slicing.html#fun.nth}
   */
  nth(n: number): LuaMultiReturn<[...TReturn] | [undefined]>;

  /**
   * Extract the first element of iterator. If the iterator is empty then an error is raised.
   * @returns A first element of iterator.
   * @see {@link https://luafun.github.io/slicing.html#fun.head}
   */
  head(): LuaMultiReturn<[...TReturn]>;

  /**
   * An alias for `head()`.
   * @see {@link https://luafun.github.io/slicing.html#fun.head}
   */
  car(): LuaMultiReturn<[...TReturn]>;

  /**
   * Return a copy of iterator without its first element. If the iterator is empty then an empty iterator is returned.
   * @returns `gen`, `param`, `state` iterator without a first element.
   * @see {@link https://luafun.github.io/slicing.html#fun.tail}
   */
  tail(): FunIterator<TState, TReturn>;

  /**
   * An alias for `tail()`.
   * @see {@link https://luafun.github.io/slicing.html#fun.tail}
   */
  cdr(): FunIterator<TState, TReturn>;

  /**
   * Return an iterator on the subsequence of first `n` elements.
   * @param n A number of elements to take.
   * @returns An iterator on the subsequence of first `n` elements.
   * @see {@link https://luafun.github.io/slicing.html#fun.take_n}
   */
  take_n(n: number): FunIterator<TState, TReturn>;

  /**
   * Returns an iterator on the longest prefix  elements that satisfy predicate.
   * @param predicate Function that accepts elements of iteration
   * and returns `true` if that elements should be included into result iterator.
   * @returns An iterator on the longest prefix elements that satisfy predicate.
   * @see {@link https://luafun.github.io/slicing.html#fun.take_while}
   */
  take_while(predicate: (this: void, ...params: [...TReturn]) => boolean): FunIterator<TState, TReturn>;

  /**
   * Return an iterator on the subsequence of first `n` elements.
   * @param n A number of elements to take.
   * @returns An iterator on the subsequence of first `n` elements.
   * @see {@link https://luafun.github.io/slicing.html#fun.take_n}
   */
  take(n: number): FunIterator<TState, TReturn>;

  /**
   * Returns an iterator on the longest prefix  elements that satisfy predicate.
   * @param predicate Function that accepts elements of iteration
   * and returns `true` if that elements should be included into result iterator.
   * @returns An iterator on the longest prefix elements that satisfy predicate.
   * @see {@link https://luafun.github.io/slicing.html#fun.take_while}
   */
  take(predicate: (this: void, ...params: [...TReturn]) => boolean): FunIterator<TState, TReturn>;
}

type EachIterator<TReturn = any[]> = (fun: (this: void, ...args: [...TReturn]) => unknown) => void;
