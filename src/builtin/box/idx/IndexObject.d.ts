import { IndexOptionsParts } from './IndexOptionsParts';
import { IndexType } from './IndexType';
import { SelectOptions, TuplePos } from '../space/SelectOptions';
import { IteratorType } from './IteratorType';
import { TupleObject } from '../tuple';
import { UpdateOperation } from '../space';
import { IndexOptions } from './IndexOptions';
import { IndexObjectStat } from './IndexObjectStat';

export interface IndexObject extends AnyTable {
  unique: boolean;
  type: IndexType;
  parts: IndexOptionsParts[];

  /**
   * Search for a tuple or a set of tuples via the given index, and allow iterating over one tuple at a time.
   * To search by the primary index in the specified space, use the `space_object:pairs()` method.
   *
   * Note: `key` is only used to find the first match. Do not assume all matched tuples will contain the `key`.
   * @param iterator The iterator type. The default iterator type is ‘EQ’
   * @param after A tuple or the position of a tuple (`tuple_pos`) after which pairs starts the search. You can pass an empty string or `box.NULL` to this option to start the search from the first tuple.
   * @returns The `iterator`, which can be used in a for/end loop or with `totable()`.
   */
  pairs(key?: unknown, options?: { iterator?: IteratorType, after?: number | AnyTable }): LuaIterable<LuaMultiReturn<[number, TupleObject]>>;

  /**
   * Search for a tuple or a set of tuples by the current index.
   * To search by the primary index in the specified space, use the `space_object:select()` method.
   * @param key A value to be matched against the index key, which may be multi-part.
   * @param options Options for selecting tuples.
   * @returns The tuples whose primary-key fields are equal to the fields of the passed key.
   * If the number of passed fields is less than the number of fields in the primary key,
   * then only the passed fields are compared, so `select{1,2}` matches a tuple whose primary key is `{1,2,3}`.
   * If `options.fetch_pos` is set to `true`, returns a base64-encoded string representing the position of the last selected tuple as the second value.
   * If no tuples are fetched, returns `nil`.7
   */
  select(key: unknown, options?: SelectOptions): LuaMultiReturn<[TupleObject[]?, TuplePos?]>;

  /**
   * Search for a tuple via the given index, as described in the select topic.
   * @param key Values to be matched against the index key.
   * @returns The tuple whose index-key fields are equal to the passed key values.
   */
  get(key: unknown): TupleObject?;

  /**
   * Find the minimum value in the specified index.
   * @param key Values to be matched against the index key.
   * @returns The tuple for the first key in the index.
   * If the optional key value is supplied, returns the first key that is greater than or equal to key.
   * Starting with Tarantool `2.0.4`, `index_object:min(key)` returns nothing if key doesn’t match any value in the index.
   */
  min(key?: unknown): TupleObject?;

  /**
   * Find the maximum value in the specified index.
   * @param key Values to be matched against the index key.
   * @returns The tuple for the last key in the index.
   * If the optional key value is supplied, returns the last key that is less than or equal to key.
   * Starting with Tarantool `2.0.4`, `index_object:max(key)` returns nothing if key doesn’t match any value in the index.
   */
  max(key?: unknown): TupleObject?;

  /**
   * Find a random value in the specified index.
   * This method is useful when it’s important to get insight into data distribution in an index without having to iterate over the entire data set.
   * @param seed An arbitrary non-negative integer.
   * @returns The tuple for the random key in the index.
   *
   * Note regarding storage engine: vinyl does not support `random()`.
   */
  random(seed: number): TupleObject?;

  /**
   * Iterate over an index, counting the number of tuples which match the key-value.
   * @param key Values to be matched against the index key.
   * @param iterator Comparison method.
   * @returns The number of matching tuples.
   */
  count(key?: unknown, iterator?: IteratorType): number;

  /**
   * Update a tuple.
   *
   * Same as `box.space:update()`, but key is searched in this index instead of primary key. This index should be unique.
   * @param key Values to be matched against the index key.
   * @param updates Update operations.
   * @returns The updated tuple or `nil` if the key is not found.
   */
  update(key: unknown, updates: UpdateOperation[]): TupleObject?;

  /**
   * Delete a tuple identified by a key.
   *
   * Same as `box.space:delete()`, but key is searched in this index instead of in the primary-key index. This index ought to be unique.
   *
   * Note regarding storage engine: vinyl will return `nil`, rather than the deleted tuple.
   * @param key Values to be matched against the index key.
   * @returns The deleted tuple.
   */
  delete(key: unknown): TupleObject?;

  /**
   * Alter an index. It is legal in some circumstances to change one or more of the index characteristics,
   * for example its type, its sequence options, its parts, and whether it is unique.
   * Usually this causes rebuilding of the space, except for the simple case where a part’s `is_nullable` flag is changed from `false` to `true`.
   * @param options Index options.
   *
   * Note: Vinyl does not support `alter()` of a primary-key index unless the space is empty.
   */
  alter(options: IndexOptions): void;

  /** Drop an index. Dropping a primary-key index has a side effect: all tuples are deleted. */
  drop(): void;

  /**
   * Rename an index.
   * @param name New name for index.
   */
  rename(name: string): void;

  /**
   * Return the total number of bytes taken by the index.
   * @returns Number of bytes.
   */
  bsize(): number;

  /**
   * Return statistics about actions taken that affect the index.
   *
   * This is for use with the vinyl engine.
   */
  stat(): IndexObjectStat;

  /**
   * Remove unused index space. For the `memtx` storage engine this method does nothing;
   * `index_object:compact()` is only for the `vinyl` storage engine.
   * For example, with `vinyl`, if a tuple is deleted, the space is not immediately reclaimed.
   * There is a scheduler for reclaiming space automatically based on factors such as lsm shape and amplification
   * as discussed in the section Storing data with `vinyl`, so calling `index_object:compact()` manually is not always necessary.
   *
   * Tarantool returns without waiting for compaction to complete.
   */
  compact(): void;

  /**
   * Return a tuple’s position for an index. This value can be passed to the `after` option of the `select` and `pairs` methods:
   * - `index_object:select` and `space_object:select`
   * - `index_object:pairs` and `space_object:pairs`
   *
   * Note that `tuple_pos` does not work with functional and multikey indexes.
   * @param tuple A tuple whose position should be found.
   * @returns A tuple’s position in a space (base64-encoded string).
   */
  tuple_pos(tuple: TupleObject): TuplePos;
}
