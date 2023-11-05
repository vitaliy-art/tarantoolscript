/** @noSelfInFile */

/**
 * @todo helpers https://www.tarantool.io/en/doc/latest/reference/reference_rock/luatest/modules/luatest.helpers/
 * @todo group https://www.tarantool.io/en/doc/latest/reference/reference_rock/luatest/classes/luatest.group/
 * @todo http_response https://www.tarantool.io/en/doc/latest/reference/reference_rock/luatest/classes/luatest.http_response/
 * @todo runner https://www.tarantool.io/en/doc/latest/reference/reference_rock/luatest/classes/luatest.http_response/
 * @todo server https://www.tarantool.io/en/doc/latest/reference/reference_rock/luatest/classes/luatest.http_response/
 * @todo replica_set https://www.tarantool.io/en/doc/latest/reference/reference_rock/luatest/classes/luatest.replica_set/
 */
declare module 'luatest' {
  /** Check that value is truthy. */
  export function assert(value: unknown, message?: string): void;

  /** Check that two floats are close by margin. */
  export function assert_almost_equals(actual: number, expected: number, margin: number, message?: string): void;

  /** Checks that actual map includes expected one. */
  export function assert_covers(actual: object, expected: object, message?: string): void;

  /** Compare numbers. */
  export function assert_lt(left: number, right: number, message?: string): void;

  /** Compare numbers. */
  export function assert_le(left: number, right: number, message?: string): void;

  /** Compare numbers. */
  export function assert_gt(left: number, right: number, message?: string): void;

  /** Compare numbers. */
  export function assert_ge(left: number, right: number, message?: string): void;

  /** Check that two values are equal. */
  export function assert_equals(actual: object, expected: object, message?: string, deep_analysis?: boolean): void;

  /** Check that calling fn raises an error. */
  export function assert_error(fn: { (...args: any[]): unknown }, ...args: unknown[]): void;

  /** Check that calling fn raises an error. */
  export function assert_error_msg_contains(expected_partial: string, fn: { (...args: any[]): unknown }, ...args: unknown[]): void;

  /** Strips location info from message text. */
  export function assert_error_msg_content_equals(expected: string, fn: { (...args: any[]): unknown }, ...args: unknown[]): void;

  /** Checks full error: location and text. */
  export function assert_error_msg_equals(expected: string, fn: { (...args: any[]): unknown }, ...args: unknown[]): void;

  /** Checks full error: location and text. */
  export function assert_error_msg_matches(pattern: string, fn: { (...args: any[]): unknown }, ...args: unknown[]): void;

  /** Alias for `assert_not`. */
  export function assert_eval_to_false(value: unknown, message?: string): void;

  /** Alias for `assert`. */
  export function assert_eval_to_true(value: unknown, message?: string, ...params: unknown[]): LuaMultiReturn<unknown[]>;

  /** Checks that one table includes all items of another, irrespective of their keys. */
  export function assert_items_include(actual: AnyTable, expected: AnyTable, message?: string);

  /** Check that values are the same. */
  export function assert_is(actual: unknown, expected: unknown, message?: string);

  /** Check that values are not the same. */
  export function assert_is_not(actual: unknown, expected: unknown, message?: string);

  /** Checks that two tables contain the same items, irrespective of their keys. */
  export function assert_items_equals(actual: AnyTable, expected: AnyTable, message?: string);

  export function assert_nan(value: unknown, message?: string);

  /** Check that value is falsy. */
  export function assert_not(value: unknown, message?: string);

  /** Check that two floats are not close by margin. */
  export function assert_not_almost_equals(actual: number, expected: number, margin: number, message?: string);

  /** Checks that map does not contain the other one. */
  export function assert_not_covers(actual: AnyTable, expected: AnyTable, message?: string);

  /** Check that two values are not equal.
   * Tables are compared by value.
   */
  export function assert_not_equals(actual: unknown, expected: unknown, message?: string);

  export function assert_not_nan(value: unknown, message?: string);

  /** Case-sensitive strings comparison. */
  export function assert_not_str_contains(actual: string, expected: string, is_pattern?: boolean, message?: string);

  /** Case-insensitive strings comparison. */
  export function assert_not_str_icontains(value: string, expected: string, message?: string);

  /** Case-sensitive strings comparison. */
  export function assert_str_contains(value: string, expected: string, is_pattern?: boolean, message?: string);

  /** Case-insensitive strings comparison. */
  export function assert_str_icontains(value: string, expected: string, message?: string);

  /** Verify a full match for the string. */
  export function assert_str_matches(value: string, pattern: string, start?: number, final?: number, message?: string);

  /** Check value's type. */
  export function assert_type(value: unknown, expected_type: string, message?: string, level?: number);

  /** Stops a test due to a failure. */
  export function fail(message: string);

  /** Stops a test due to a failure if condition is met. */
  export function fail_if(condition: unknown, message: string);

  /** Mark a test as xfail. */
  export function xfail(message: string);

  /** Mark a test as xfail if condition is met */
  export function xfail_if(condition: unknown, message: string);

  /** Skip a running test. */
  export function skip(message: string);

  /** Skip a running test if condition is met. */
  export function skip_if(condition: unknown, message: string)

  /** Stops a test with a success. */
  export function success()

  /** Stops a test with a success if condition is met. */
  export function success_if(condition: unknown);

  /** Add after suite hook. */
  export function after_suite(fn: CallableFunction)

  /** Add before suite hook. */
  export function before_suite(fn: CallableFunction)

  export function group(name: string): {[key: string]: { (): void }}
}
