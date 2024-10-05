export declare interface FunIterator<TState, TReturn = any[]> extends LuaIterable<LuaMultiReturn<[TState, ...TReturn]>> {
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
  nth(n: number): LuaMultiReturn<[...TReturn]>?;
}

type EachIterator<TReturn = any[]> = (fun: (this: void, ...args: [...TReturn]) => unknown) => void;
