export declare interface FunIterator<TState, TReturn = any[]> extends LuaIterable<LuaMultiReturn<[TState, ...TReturn]>> {
  /**
   * Execute the `fun` for each iteration value.
   */
  each: EachIterator<TReturn>;

  /**
   * An alias for `each()`.
   */
  for_each: EachIterator<TReturn>;

  /**
   * An alias for `each()`.
   */
  foreach: EachIterator<TReturn>;
}

type EachIterator<TReturn = any[]> = (fun: (this: void, ...args: [...TReturn]) => unknown) => void;
