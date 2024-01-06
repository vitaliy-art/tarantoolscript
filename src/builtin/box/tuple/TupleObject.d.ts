import { IteratorType } from '../idx';
import { UpdateOperator } from '../space';

export interface TupleObject {
  [key: number | string]: any;

  /** Mapping function for Lua `#` operator. */
  length: LuaLengthMethod<number>;

  /** The same as `pairs(...)` */
  ipairs(key?: unknown, options?: { iterator?: IteratorType, after?: number | AnyTable }): LuaIterable<LuaMultiReturn<[number, unknown]>>;

  /**
   * If `t` is a tuple instance, `t:totable()` will return all fields, `t:totable(1)` will return all fields starting with field number 1,
   * `t:totable(1,5)` will return all fields between field number 1 and field number 5.
   *
   * It is preferable to use `t:totable()` rather than `t:unpack()`.
   * @returns Table
   */
  totable(start_field_number?: number, end_field_number?: number): AnyTable;

  /**
   * The `tuple_object:totable()` function only returns a table containing the values.
   * But the `tuple_object:tomap()` function returns a table containing not only the values, but also the key:value pairs.
   *
   * This only works if the tuple comes from a space that has been formatted with a format clause.
   * @param options Table. The only possible option is `names_only`.
   * - If `names_only` is `false` or omitted (default), then all the fields will appear twice, first with numeric headings and second with name headings.
   * - If `names_only` is `true`, then all the fields will appear only once, with name headings.
   * @returns Table
   */
  tomap(options?: { names_only?: boolean }): AnyTable;

  /**
   * If `t` is a tuple instance, `t:bsize()` will return the number of bytes in the tuple.
   *  With both the memtx storage engine and the vinyl storage engine the default maximum is one megabyte
   * (`memtx_max_tuple_size` or `vinyl_max_tuple_size`). Every field has one or more “length” bytes preceding the actual contents,
   * so `bsize()` returns a value which is slightly greater than the sum of the lengths of the contents.
   *
   * The value does not include the size of “struct tuple” (for the current size of this structure look in the tuple.h file in Tarantool’s source code).
   *
   * @returns Number of bytes.
   */
  bsize(): number;

  find: {
    /**
     * @param searchValue Value to search.
     * @returns The number of the first field in `t` that matches the search value.
     */
    (searchValue: unknown): number;

    /**
     * @param fieldNumber Indicates start searching at field number.
     * @param searchValue Value to search.
     * @returns The number of the first field in `t` that matches the search value.
     */
    (fieldNumber: number, searchValue: unknown): number;
  };

  findall: {
    /**
     * @param searchValue Value to search.
     * @returns The array numbers of the fields in `t` that matches the search value.
     */
    (searchValue: unknown): number[];

    /**
     * @param fieldNumber Indicates start searching at field number.
     * @param searchValue Value to search.
     * @returns The array numbers of the fields in `t` that matches the search value.
     */
    (fieldNumber: number, searchValue: unknown): number[];
  };

  /**
   * An analogue of the Lua `next()` function, but for a tuple object.
   * When called without arguments, `tuple:next()` returns the first field from a tuple.
   * Otherwise, it returns the field next to the indicated position.
   *
   * However `tuple:next()` is not really efficient, and it is better to use `tuple:pairs()/ipairs()`.
   * @param pos The number of the field for which you want to find the following value.
   * @returns Field number and field value.
   */
  next(pos?: number): LuaMultiReturn<[number, number]>;

  /**
   * In Lua, lua-table-value:pairs() is a method which returns: `function`, `lua-table-value`, `nil`.
   * Tarantool has extended this so that `tuple-value:pairs()` returns: `function`, `tuple-value`, `nil`.
   * It is useful for Lua iterators, because Lua iterators traverse a value’s components until an end marker is reached.
   */
  pairs(): LuaIterable<LuaMultiReturn<[number, unknown]>>;

  /**
   * If `t` is a tuple instance,` t:transform(start-field-number,fields-to-remove)` will return a tuple where,
   * starting from field `start-field-number`, a number of fields (`fields-to-remove`) are removed.
   * Optionally one can add more arguments after `fields-to-remove` to indicate new values that will replace what was removed.
   *
   * If the original tuple comes from a space that has been formatted with a format clause, the formatting will not be preserved for the result tuple.
   * @param startFieldNumber Field index. Base 1, may be negative.
   * @param fieldsToRemove Number of fields for remove.
   * @param fieldValues New values that will replace what was removed.
   */
  transform(startFieldNumber: number, fieldsToRemove: number, ...fieldValues?: unknown[]): TupleObject;

  /**
   * If `t` is a tuple instance, `t:unpack()` will return all fields, `t:unpack(1)` will return all fields starting with field number 1,
   * `t:unpack(1,5)` will return all fields between field number 1 and field number 5.
   * @param startFieldNumber Field to start.
   */
  unpack(startFieldNumber?: number): LuaMultiReturn<unknown[]>;

  /**
   * If `t` is a tuple instance, `t:unpack()` will return all fields, `t:unpack(1)` will return all fields starting with field number 1,
   * `t:unpack(1,5)` will return all fields between field number 1 and field number 5.
   * @param startFieldNumber Field to start.
   * @param endFieldNumber Field to end.
   */
  unpack(startFieldNumber: number, endFieldNumber?: number): LuaMultiReturn<unknown[]>;

  /**
   * Update a tuple.
   * If the original tuple comes from a space that has been formatted with a format clause, the formatting will be preserved for the result tuple.
   * @param params Array.
   *
   * Parameters array should contain next values by their indexes:
   * - [1] - operator (`string`) – operation type represented in string (e.g. ‘=’ for ‘assign new value’).
   * - [2] - field_no (`number`) – what field the operation will apply to. The field number can be negative, meaning the position from the end of tuple.
   * (`#tuple + negative field number + 1`).
   * - [3] - value (`lua_value`) – what value will be applied.
   */
  update(params: { 1: UpdateOperator, 2: number, 3: unknown }[]): TupleObject;

  /**
   * The same as `tuple_object:update()`, but ignores errors. In case of an error the tuple is left intact, but an error message is printed.
   * Only client errors are ignored, such as a bad field type, or wrong field index/name.
   * System errors, such as OOM, are not ignored and raised just like with a normal `update()`.
   * Note that only bad operations are ignored. All correct operations are applied.
   * @param params Array.
   *
   * Parameters array should contain next values by their indexes:
   * - [1] - operator (`string`) – operation type represented in string (e.g. ‘=’ for ‘assign new value’).
   * - [2] - field_no (`number`) – what field the operation will apply to. The field number can be negative, meaning the position from the end of tuple.
   * (`#tuple + negative field number + 1`).
   * - [3] - value (`lua_value`) – what value will be applied.
   */
  upsert(params: { 1: UpdateOperator, 2: number, 3: unknown }[]): TupleObject;
}
