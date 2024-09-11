/** @noSelfInFile */

export interface Checkers extends LuaTable<string, (this: void, value: unknown) => boolean> {
  /**
   * Check whether the specified value is `datetime_object`.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is `datetime_object`; otherwise, `false`
   */
  datetime(value: unknown): boolean;

  /**
   * Check whether the specified value has the `decimal` type.
   * @param value the value to check the type for.
   * @returns `true` if the specified value has the `decimal` type; otherwise, `false`.
   */
  decimal(value: unknown): boolean;

  /**
   * Check whether the specified value is `error_object`.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is `error_object`; otherwise, `false`.
   */
  error(value: unknown): boolean;

  /**
   * Check whether the specified value is one of the following `int64` values:
   * - a Lua number in a range from -2^53+1 to 2^53-1 (inclusive);
   * - Lua cdata `ctype<uint64_t>` in a range from 0 to `LLONG_MAX`;
   * - Lua cdata `ctype<int64_t>`.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is an `int64` value; otherwise, `false`.
   */
  int64(value: unknown): boolean;

  /**
   * Check whether the specified value is `interval_object`.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is `interval_object`; otherwise, `false`.
   */
  interval(value: unknown): boolean;

  /**
   * Check whether the specified value is a `tuple`.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is a `tuple`; otherwise, `false`.
   */
  tuple(value: unknown): boolean;

  /**
   * Check whether the specified value is one of the following `uint64` values:
   * - a Lua number in a range from 0 to 2^53-1 (inclusive);
   * - Lua cdata `ctype<uint64_t>`;
   * - Lua cdata `ctype<int64_t>` in range from 0 to `LLONG_MAX`.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is an `uint64` value; otherwise, `false`.
   */
  uint64(value: unknown): boolean;

  /**
   * Check whether the specified value is `uuid_object`.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is `uuid_object`; otherwise, `false`.
   */
  uuid(value: unknown): boolean;

  /**
   * Check whether the specified value is `uuid` represented by a 16-byte binary string.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is `uuid` represented by a 16-byte binary string; otherwise, `false`.
   */
  uuid_bin(value: unknown): boolean;

  /**
   * Check whether the specified value is `uuid` represented by a 36-byte hexadecimal string.
   * @param value the value to check the type for.
   * @returns `true` if the specified value is `uuid` represented by a 36-byte hexadecimal string; otherwise, `false`.
   */
  uuid_str(value: unknown): boolean;
}
