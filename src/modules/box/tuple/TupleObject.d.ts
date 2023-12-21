import { IteratorType } from '../idx';


export interface TupleObject {
  [key: number | string]: any;


  /** The same as `pairs(...)` */
  ipairs(key?: unknown, options?: { iterator?: IteratorType, after?: number | AnyTable }): LuaIterator<number, unknown>;

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
}
