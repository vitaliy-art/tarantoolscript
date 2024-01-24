import { TupleObject } from './TupleObject';

/**
 * The `box.tuple` submodule provides read-only access for the `tuple` userdata type.
 * It allows, for a single tuple: selective retrieval of the field contents, retrieval of information about size,
 * iteration over all the fields, and conversion to a Lua table.
 */
export interface Tuple {
  /**
   * Construct a new tuple from either a scalar or a Lua table.
   * Alternatively, one can get new tuples from Tarantool’s select or insert or replace or update requests,
   * which can be regarded as statements that do `new()` implicitly.
   *
   * @param value The value that will become the tuple contents.
   * @returns A new tuple
   */
  ['new'](this: void, ...value: unknown[]): TupleObject;

  /**
   * Since versions `2.2.3`, `2.3.2`, and `2.4.1`. A function to check whether a given object is a tuple cdata object.
   * Never raises nor returns an error.
   */
  is(this: void, object: unknown): boolean;
}
