import { IndexOptionsParts, TupleObject } from '../box';

export interface KeyDefObject {
  /**
   * Return a tuple containing only the fields of the `key_def` object.
   * @param tuple Tuple or Lua table with field contents.
   * @returns The fields defined for the `key_def` object.
   * @customName extract_key
   */
  extractKey(tuple: TupleObject | AnyTable): TupleObject;

  /**
   * Compare the key fields of `tuple_1` with the key fields of `tuple_2`.
   * It is a tuple-by-tuple comparison so users do not have to write code that compares one field at a time.
   * Each field’s type and collation will be taken into account. In effect it is a comparison of `extract_key(tuple_1)` with.
   * @param tuple1 Tuple or Lua table with field contents.
   * @param tuple2 Tuple or Lua table with field contents.
   * @returns
   * - `> 0` if `tuple_1` key fields `> tuple_2` key fields,
   * - `= 0` if `tuple_1` key fields `= tuple_2` key fields,
   * - `< 0` if `tuple_1` key fields `< tuple_2` key fields.
   */
  compare(tuple1: TupleObject | AnyTable, tuple2: TupleObject | AnyTable): number;

  /**
   * Compare the key fields of `tuple_1` with all the fields of `tuple_2`.
   * This is the same as `key_def_object:compare()` except that `tuple_2` contains only the key fields.
   * In effect it is a comparison of `extract_key(tuple_1)` with `tuple_2`.
   * @param tuple1 Tuple or Lua table with field contents.
   * @param tuple2 Tuple or Lua table with field contents.
   * @returns
   * - `> 0` if `tuple_1` key fields `> tuple_2` key fields,
   * - `= 0` if `tuple_1` key fields `= tuple_2` key fields,
   * - `< 0` if `tuple_1` key fields `< tuple_2` key fields.
   * @customName compare_with_key
   */
  compareWithKey(tuple1: TupleObject | AnyTable, tuple2: TupleObject | AnyTable): number;

  /**
   * Combine the main `key_def_object` with `other_key_def_object`.
   * The return value is a new `key_def_object` containing all the fields of the main `key_def_object`,
   * then all the fields of `other_key_def_object` which are not in the main `key_def_object`.
   * @param other Other key def object.
   */
  merge(other: KeyDefObject): KeyDefObject;

  /**
   * Returns a table containing the fields of the `key_def_object`. This is the reverse of `key_def.new()`:
   * - `key_def.new()` takes a table and returns a `key_def` object,
   * - `key_def_object:totable()` takes a `key_def` object and returns a table.
   *
   * This is useful for input to `_serialize` methods.
   * @customName totable
   */
  toTable(): IndexOptionsParts[];
}
