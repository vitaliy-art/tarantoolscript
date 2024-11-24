export declare type FunIterator<
  TState,
  TReturn extends unknown[]
> = LuaIterable<LuaMultiReturn<[TState, ...TReturn]>> & {
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
  take_while(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): FunIterator<TState, TReturn>;

  /**
   * Return an iterator on the subsequence of first `n` elements.
   * @param n A number of elements to take.
   * @returns An iterator on the subsequence of first `n` elements.
   * @see {@link https://luafun.github.io/slicing.html#fun.take}
   */
  take(n: number): FunIterator<TState, TReturn>;

  /**
   * Returns an iterator on the longest prefix  elements that satisfy predicate.
   * @param predicate Function that accepts elements of iteration
   * and returns `true` if that elements should be included into result iterator.
   * @returns An iterator on the longest prefix elements that satisfy predicate.
   * @see {@link https://luafun.github.io/slicing.html#fun.take}
   */
  take(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): FunIterator<TState, TReturn>;

  /**
   * Return an iterator after skipping first `n` elements.
   * @param n A number of elements to take.
   * @returns An iterator after skipping first `n` elements.
   * @see {@link https://luafun.github.io/slicing.html#fun.drop_n}
   */
  drop_n(n: number): FunIterator<TState, TReturn>;

  /**
   * Returns an iterator after skipping the longest prefix of elements that satisfy predicate.
   * @param predicate Function that accepts elements of iteration
   * and returns `true` if that elements should be skipped.
   * @returns An iterator after skipping the longest prefix of elements that satisfy predicate.
   * @see {@link https://luafun.github.io/slicing.html#fun.drop_while}
   */
  drop_while(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): FunIterator<TState, TReturn>;

  /**
   * Return an iterator after skipping first `n` elements.
   * @param n A number of elements to skip.
   * @returns An iterator after skipping first `n` elements.
   * @see {@link https://luafun.github.io/slicing.html#fun.drop}
   */
  drop(n: number): FunIterator<TState, TReturn>;

  /**
   * Returns an iterator after skipping the longest prefix of elements that satisfy predicate.
   * @param predicate Function that accepts elements of iteration
   * and returns `true` if that elements should be skipped.
   * @returns An iterator after skipping the longest prefix of elements that satisfy predicate.
   * @see {@link https://luafun.github.io/slicing.html#fun.drop}
   */
  drop(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): FunIterator<TState, TReturn>;

  /**
   * Return an iterator pair where the first operates on the subsequence of first `n` elements (possibly empty)
   * of original iterator and second operates the remainder of original iterator.
   * @param n A number of elements to span.
   * @returns An iterator pair (first `n` elements and remainder).
   * @see {@link https://luafun.github.io/slicing.html#fun.span}
   */
  span(
    n: number
  ): LuaMultiReturn<
    [FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]
  >;

  /**
   * Return an iterator pair where the first operates on the longest prefix (possibly empty) of original iterator
   * of elements that satisfy predicate and second operates the remainder of original iterator.
   * @param predicate Function that accepts an element of iteration and returns `true` if it satisfy the condition.
   * @returns An iterator pair.
   * @see {@link https://luafun.github.io/slicing.html#fun.span}
   */
  span(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): LuaMultiReturn<
    [FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]
  >;

  /**
   * Return an iterator pair where the first operates on the subsequence of first `n` elements (possibly empty)
   * of original iterator and second operates the remainder of original iterator.
   * @param n A number of elements to span.
   * @returns An iterator pair (first `n` elements and remainder).
   * @see {@link https://luafun.github.io/slicing.html#fun.split}
   */
  split(
    n: number
  ): LuaMultiReturn<
    [FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]
  >;

  /**
   * Return an iterator pair where the first operates on the longest prefix (possibly empty) of original iterator
   * of elements that satisfy predicate and second operates the remainder of original iterator.
   * @param predicate Function that accepts an element of iteration and returns `true` if it satisfy the condition.
   * @returns An iterator pair.
   * @see {@link https://luafun.github.io/slicing.html#fun.split}
   */
  split(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): LuaMultiReturn<
    [FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]
  >;

  /**
   * Return an iterator pair where the first operates on the subsequence of first `n` elements (possibly empty)
   * of original iterator and second operates the remainder of original iterator.
   * @param n A number of elements to span.
   * @returns An iterator pair (first `n` elements and remainder).
   * @see {@link https://luafun.github.io/slicing.html#fun.split_at}
   */
  split_at(
    n: number
  ): LuaMultiReturn<
    [FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]
  >;

  /**
   * The function returns the position of the first element in the given iterator which is equal (using `==`) to the query element,
   * or `nil` if there is no such element.
   * @param x A value to find.
   * @returns The position of element or nil.
   * @see {@link https://luafun.github.io/indexing.html#fun.index}
   */
  index(x: TReturn[0]): number?;

  /**
   * The function returns the position of the first element in the given iterator which is equal (using `==`) to the query element,
   * or `nil` if there is no such element.
   * @param x A value to find.
   * @returns The position of element or nil.
   * @see {@link https://luafun.github.io/indexing.html#fun.index_of}
   */
  index_of(x: unknown): number?;

  /**
   * The function returns the position of the first element in the given iterator which is equal (using `==`) to the query element,
   * or `nil` if there is no such element.
   * @param x A value to find.
   * @returns The position of element or nil.
   * @see {@link https://luafun.github.io/indexing.html#fun.elem_index}
   */
  elem_index(x: unknown): number?;

  /**
   * The function returns an iterator to positions of elements which equals to the query element.
   * @param x A value to find.
   * @return An iterator.
   * @see {@link https://luafun.github.io/indexing.html#fun.indexes}
   */
  indexes(x: unknown): FunIterator<number, [number]>;

  /**
   * The function returns an iterator to positions of elements which equals to the query element.
   * @param x A value to find.
   * @return An iterator.
   * @see {@link https://luafun.github.io/indexing.html#fun.indices}
   */
  indices(x: unknown): FunIterator<number, [number]>;

  /**
   * The function returns an iterator to positions of elements which equals to the query element.
   * @param x A value to find.
   * @return An iterator.
   * @see {@link https://luafun.github.io/indexing.html#fun.elem_indexes}
   */
  elem_indexes(x: unknown): FunIterator<number, [number]>;

  /**
   * The function returns an iterator to positions of elements which equals to the query element.
   * @param x A value to find.
   * @return An iterator.
   * @see {@link https://luafun.github.io/indexing.html#fun.elem_indices}
   */
  elem_indices(x: unknown): FunIterator<number, [number]>;

  /**
   * Return a new iterator of those elements that satisfy the `predicate`.
   * @param predicate An predicate to filter the iterator.
   * @returns An iterator.
   * @see {@link https://luafun.github.io/filtering.html#fun.filter}
   */
  filter(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): FunIterator<TState, TReturn>;

  /**
   * Return a new iterator of those elements that satisfy the `predicate`.
   * @param predicate An predicate to filter the iterator.
   * @returns An iterator.
   * @see {@link https://luafun.github.io/filtering.html#fun.remove_if}
   */
  remove_if(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): FunIterator<TState, TReturn>;

  /**
   * If `regexp_or_predicate` is string then the parameter is used as a regular expression to build filtering predicate.
   * Otherwise the function is just an alias for `filter()`.
   * @param regexpOrPredicate String regular expression or predicate to filter the iterator.
   * @returns An iterator.
   * @see {@link https://luafun.github.io/filtering.html#fun.grep}
   */
  grep(
    regexpOrPredicate: GrepPredicateOrRegexp<TReturn>
  ): FunIterator<TState, TReturn>;

  /**
   * Return two iterators where elements do and do not satisfy the `predicate`.
   * @param predicate Function to filter the iterator.
   * @returns An iterator pair.
   * @see {@link https://luafun.github.io/filtering.html#fun.partition}
   */
  partition(
    predicate: (this: void, ...params: [...TReturn]) => boolean
  ): LuaMultiReturn<
    [FunIterator<TState, TReturn>, FunIterator<TState, TReturn>]
  >;

  /**
   * The function reduces the iterator from left to right using the binary operator `accfun` and the initial value `initval`.
   * @param accfun An accumulating function.
   * @param initval An initial value that passed to `accfun` on the first iteration.
   * @returns Reducing result.
   * @see {@link https://luafun.github.io/reducing.html#fun.foldl}
   */
  foldl<R>(
    accfun: (this: void, acc: R, ...args: [...TReturn]) => R,
    initval: R
  ): R;

  /**
   * The function reduces the iterator from left to right using the binary operator `accfun` and the initial value `initval`.
   * @param accfun An accumulating function.
   * @param initval An initial value that passed to `accfun` on the first iteration.
   * @returns Reducing result.
   * @see {@link https://luafun.github.io/reducing.html#fun.reduce}
   */
  reduce<R>(
    accfun: (this: void, acc: R, ...args: [...TReturn]) => R,
    initval: R
  ): R;

  /**
   * Return a number of remaining elements in iterator.
   * @see {@link https://luafun.github.io/reducing.html#fun.length}
   */
  length(): number;

  /**
   * The function reduces the iterator from left to right using `table.insert`.
   * @returns A table (array) from iterated values.
   * @see {@link https://luafun.github.io/reducing.html#fun.totable}
   */
  totable(): TReturn[];

  /**
   * The function reduces the iterator from left to right using `tab[val1] = val2` expression.
   * @returns A new table (map) from iterated values.
   * @see {@link https://luafun.github.io/reducing.html#fun.tomap}
   */
  tomap(): TReturn extends string | unknown[] ? [] : AnyTable;

  /**
   * Returns `true` if the iterator is a prefix of the `right`.
   * @see {@link https://luafun.github.io/reducing.html#fun.is_prefix_of}
   */
  is_prefix_of(right: FunIterator<unknown, unknown[]>): boolean;

  /**
   * Returns `true` when iterator is empty or finished.
   * @see {@link https://luafun.github.io/reducing.html#fun.is_null}
   */
  is_null(): boolean;

  /**
   * Returns `true` if all return values of iterator satisfy the `predicate`.
   * @see {@link https://luafun.github.io/reducing.html#fun.all}
   */
  all(predicate: (this: void, ...args: [...TReturn]) => boolean): boolean;

  /**
   * Returns `true` if all return values of iterator satisfy the `predicate`.
   * @see {@link https://luafun.github.io/reducing.html#fun.every}
   */
  every(predicate: (this: void, ...args: [...TReturn]) => boolean): boolean;

  /**
   * Returns `true` if at least one return values of iterator satisfy the `predicate`.
   * The iteration stops on the first such value.
   * Therefore, infinite iterators that have at least one satisfying value might work.
   * @see {@link https://luafun.github.io/reducing.html#fun.any}
   */
  any(predicate: (this: void, ...args: [...TReturn]) => boolean): boolean;

  /**
   * Returns `true` if at least one return values of iterator satisfy the `predicate`.
   * The iteration stops on the first such value.
   * Therefore, infinite iterators that have at least one satisfying value might work.
   * @see {@link https://luafun.github.io/reducing.html#fun.some}
   */
  some(predicate: (this: void, ...args: [...TReturn]) => boolean): boolean;

  /**
   * Sum up all iteration values. For an empty iterators `0` is returned.
   * @see {@link https://luafun.github.io/reducing.html#fun.sum}
   */
  sum(): TReturn extends number[] ? number : never;

  /**
   * Multiply all iteration values. For an empty iterators `1` is returned.
   * @see {@link https://luafun.github.io/reducing.html#fun.product}
   */
  product(): TReturn extends number[] ? number : never;

  /**
   * Return a minimum value from the iterator using `operator.min()` or `<` for numbers and other types respectively.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.min}
   */
  min(): TReturn extends [number, ...unknown[]]
    ? number
    : TReturn extends [string, ...unknown[]]
    ? string
    : never;

  /**
   * Return a minimum value from the iterator using `operator.min()` or `<` for numbers and other types respectively.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.minimum}
   */
  minimum(): TReturn extends [number, ...unknown[]]
    ? number
    : TReturn extends [string, ...unknown[]]
    ? string
    : never;

  /**
   * Return a minimum value from the iterator using the `cmp` as a `<` operator.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.min_by}
   */
  min_by(
    cmp: (this: void, a: TFirstReturn, b: TFirstReturn) => TFirstReturn
  ): TReturn extends [infer TFirstReturn, ...unknown[]] ? TFirstReturn : never;

  /**
   * Return a minimum value from the iterator using the `cmp` as a `<` operator.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.minimum_by}
   */
  minimum_by(
    cmp: (this: void, a: TFirstReturn, b: TFirstReturn) => TFirstReturn
  ): TReturn extends [infer TFirstReturn, ...unknown[]] ? TFirstReturn : never;

  /**
   * Return a maximum value from the iterator using `operator.max()` or `>` for numbers and other types respectively.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.max}
   */
  max(): TReturn extends [number, ...unknown[]]
    ? number
    : TReturn extends [string, ...unknown[]]
    ? string
    : never;

  /**
   * Return a maximum value from the iterator using `operator.max()` or `>` for numbers and other types respectively.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.maximum}
   */
  maximum(): TReturn extends [number, ...unknown[]]
    ? number
    : TReturn extends [string, ...unknown[]]
    ? string
    : never;

  /**
   * Return a maximum value from the iterator using the `cmp` as a `>` operator.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.max_by}
   */
  max_by(
    cmp: (this: void, a: TFirstReturn, b: TFirstReturn) => TFirstReturn
  ): TReturn extends [infer TFirstReturn, ...unknown[]] ? TFirstReturn : never;

  /**
   * Return a maximum value from the iterator using the `cmp` as a `>` operator.
   * The iterator must be non-null, otherwise an error is raised.
   * @see {@link https://luafun.github.io/reducing.html#fun.maximum_by}
   */
  maximum_by(
    cmp: (this: void, a: TFirstReturn, b: TFirstReturn) => TFirstReturn
  ): TReturn extends [infer TFirstReturn, ...unknown[]] ? TFirstReturn : never;

  /**
   * Return a new iterator by applying the `fun` to each element of iterator.
   * The mapping is performed on the fly and no values are buffered.
   * @param fun A function to apply.
   * @returns A new iterator.
   * @see {@link https://luafun.github.io/transformations.html#fun.map}
   */
  map<TResult>(
    fun: (this: void, ...args: TReturn) => TResult
  ): FunIterator<number, [TResult]>;

  /**
   * Return a new iterator by enumerating all elements of the iterator starting from `1`.
   * The mapping is performed on the fly and no values are buffered.
   * @returns A new iterator.
   * @see {@link https://luafun.github.io/transformations.html#fun.enumerate}
   */
  enumerate(): FunIterator<TState, [number, ...TReturn]>;

  /**
   * Return a new iterator where the `x` value is interspersed between the elements of the source iterator.
   * The `x` value can also be added as a last element of returning iterator if the source iterator contains the odd number of elements.
   * @see {@link https://luafun.github.io/transformations.html#fun.intersperse}
   */
  intersperse(x: unknown): FunIterator<number, unknown[]>;

  /**
   * Return a new iterator where i-th return value contains the i-th element from each of the iterators.
   * The returned iterator is truncated in length to the length of the shortest iterator.
   * For multi-return iterators only the first variable is used.
   * @returns A new iterator.
   * @see {@link https://luafun.github.io/compositions.html#fun.zip}
   */
  zip<TResultState, TResultReturn extends unknown[]>(
    ...iterators: (
      | string
      | FunIterator<unknown, unknown[]>
      | AnyTable
      | unknown[]
    )[]
  ): FunIterator<TResultState, TResultReturn>;

  /**
   * Make a new iterator that returns elements from iterator until the end
   * and then “restart” iteration using a saved clone of iterator.
   * The returned iterator is constant space and no return values are buffered.
   * Instead of that the function make a clone of the source iterator.
   * Therefore, the source iterator must be pure functional to make an identical clone.
   * Infinity iterators are supported, but are not recommended.
   * @see {@link https://luafun.github.io/compositions.html#fun.cycle}
   */
  cycle(): FunIterator<TState, TReturn>;

  /**
   * Make an iterator that returns elements from the first iterator until it is exhausted,
   * then proceeds to the next iterator, until all of the iterators are exhausted.
   * Used for treating consecutive iterators as a single iterator. Infinity iterators are supported, but are not recommended.
   * @returns A consecutive iterator from sources (left from right).
   * @see {@link https://luafun.github.io/compositions.html#fun.chain}
   */
  chain<TResultState, TResultReturn extends unknown[]>(
    ...iterators: (
      | string
      | FunIterator<unknown, unknown[]>
      | AnyTable
      | unknown[]
    )[]
  ): FunIterator<TResultState, TResultReturn>;
};

type EachIterator<TReturn = any[]> = (
  fun: (this: void, ...args: [...TReturn]) => unknown
) => void;

type GrepPredicateOrRegexp<TReturn = any[]> = TReturn extends string[]
  ? string | ((this: void, element: string) => boolean)
  : (this: void, ...params: [...TReturn]) => boolean;
