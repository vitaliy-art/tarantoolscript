/** @noSelfInFile */

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
  export function assert_error<T extends CallableFunction>(fn: T, ...args: unknown[]): void;

  /** Check that calling fn raises an error. */
  export function assert_error_msg_contains<T extends CallableFunction>(expected_partial: string, fn: T, ...args: unknown[]): void;

  /** Strips location info from message text. */
  export function assert_error_msg_content_equals<T extends CallableFunction>(expected: string, fn: T, ...args: unknown[]): void;

  /** Checks full error: location and text. */
  export function assert_error_msg_equals<T extends CallableFunction>(expected: string, fn: T, ...args: unknown[]): void;

  /** Checks full error: location and text. */
  export function assert_error_msg_matches<T extends CallableFunction>(pattern: string, fn: T, ...args: unknown[]): void;

  /** Alias for `assert_not`. */
  export function assert_eval_to_false(value: unknown, message?: string): void;

  /** Alias for `assert`. */
  export function assert_eval_to_true(value: unknown, message?: string, ...params: unknown[]): LuaMultiReturn<unknown[]>;
}
