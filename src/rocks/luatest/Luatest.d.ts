/** @noSelfInFile */

import { Group } from './Group';
import * as Helpers from './Helpers';
import * as replica_set from './ReplicaSet';
import * as server from './Server';

export function configure(cfg: { shuffle: 'group' | 'all' | 'none' }): void;

/** Check that value is truthy. */
export function assert(value: unknown, message?: string): void;

/** Check that two floats are close by margin. */
export function assert_almost_equals(actual: number, expected: number, margin: number, message?: string): void;

/** Checks that actual map includes expected one. */
export function assert_covers(actual: AnyTable, expected: AnyTable, message?: string): void;

/** Compare numbers. */
export function assert_lt(left: number, right: number, message?: string): void;

/** Compare numbers. */
export function assert_le(left: number, right: number, message?: string): void;

/** Compare numbers. */
export function assert_gt(left: number, right: number, message?: string): void;

/** Compare numbers. */
export function assert_ge(left: number, right: number, message?: string): void;

/** Check that two values are equal. */
export function assert_equals(actual: unknown, expected: unknown, message?: string, deep_analysis?: boolean): void;

/** Check that calling fn raises an error. */
export function assert_error(fn: (this: void, ...args: any[]) => unknown, ...args: unknown[]): void;

/** Check that calling fn raises an error. */
export function assert_error_msg_contains(expected_partial: string, fn: (this: void, ...args: any[]) => unknown, ...args: unknown[]): void;

/** Strips location info from message text. */
export function assert_error_msg_content_equals(expected: string, fn: (this: void, ...args: any[]) => unknown, ...args: unknown[]): void;

/** Checks full error: location and text. */
export function assert_error_msg_equals(expected: string, fn: (this: void, ...args: any[]) => unknown, ...args: unknown[]): void;

/** Checks full error: location and text. */
export function assert_error_msg_matches(pattern: string, fn: (this: void, ...args: any[]) => unknown, ...args: unknown[]): void;

/** Alias for `assert_not`. */
export function assert_eval_to_false(value: unknown, message?: string): void;

/** Alias for `assert`. */
export function assert_eval_to_true(value: unknown, message?: string, ...params: unknown[]): LuaMultiReturn<unknown[]>;

/** Checks that one table includes all items of another, irrespective of their keys. */
export function assert_items_include(actual: AnyTable, expected: AnyTable, message?: string): void;

/** Check that values are the same. */
export function assert_is(actual: unknown, expected: unknown, message?: string): void;

/** Check that values are not the same. */
export function assert_is_not(actual: unknown, expected: unknown, message?: string): void;

/** Checks that two tables contain the same items, irrespective of their keys. */
export function assert_items_equals(actual: AnyTable, expected: AnyTable, message?: string): void;

export function assert_nan(value: unknown, message?: string): void;

/** Check that value is falsy. */
export function assert_not(value: unknown, message?: string): void;

/** Check that two floats are not close by margin. */
export function assert_not_almost_equals(actual: number, expected: number, margin: number, message?: string): void;

/** Checks that map does not contain the other one. */
export function assert_not_covers(actual: AnyTable, expected: AnyTable, message?: string): void;

/** Check that two values are not equal.
 * Tables are compared by value.
   */
export function assert_not_equals(actual: unknown, expected: unknown, message?: string): void;

export function assert_not_nan(value: unknown, message?: string): void;

/** Case-sensitive strings comparison. */
export function assert_not_str_contains(actual: string, expected: string, is_pattern?: boolean, message?: string): void;

/** Case-insensitive strings comparison. */
export function assert_not_str_icontains(value: string, expected: string, message?: string): void;

/** Case-sensitive strings comparison. */
export function assert_str_contains(value: string, expected: string, is_pattern?: boolean, message?: string): void;

/** Case-insensitive strings comparison. */
export function assert_str_icontains(value: string, expected: string, message?: string): void;

/** Verify a full match for the string. */
export function assert_str_matches(value: string, pattern: string, start?: number, final?: number, message?: string): void;

/** Check value's type. */
export function assert_type(value: unknown, expected_type: string, message?: string, level?: number): void;

/** Stops a test due to a failure. */
export function fail(message: string): void;

/** Stops a test due to a failure if condition is met. */
export function fail_if(condition: unknown, message: string): void;

/** Mark a test as xfail. */
export function xfail(message: string): void;

/** Mark a test as xfail if condition is met */
export function xfail_if(condition: unknown, message: string): void;

/** Skip a running test. */
export function skip(message: string): void;

/** Skip a running test if condition is met. */
export function skip_if(condition: unknown, message: string): void;

/** Stops a test with a success. */
export function success(): void;

/** Stops a test with a success if condition is met. */
export function success_if(condition: unknown): void;

/** Add after suite hook. */
export function after_suite(fn: (this: void, ...args: any[]) => unknown): void;

/** Add before suite hook. */
export function before_suite(fn: (this: void, ...args: any[]) => unknown): void;

export function group(name?: string, params?: AnyTable[]): Group;

/** Collection of test helpers. */
export const helpers: typeof Helpers;

export const groups: LuaTable<string, Group>;

/** Class to manage Tarantool instances. */
export const Server: typeof server;

/** Class to manage groups of Tarantool instances with the same data set. */
export const ReplicaSet: typeof replica_set;
