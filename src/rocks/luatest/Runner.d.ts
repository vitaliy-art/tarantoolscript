import { Group } from './Group';

/**
 * Check that string matches the name of a test method. Default rule is that is starts with ‘test’
 * @param s Name to check.
 */
export function is_test_name(this: void, s: string): boolean;

/**
 * Main entrypoint to run test suite.
 */
export function run(this: void, args?: LuaTable<string, unknown>, options: {
  /** Optional */
  verbosity?: int;
  /** Default $(def) */
  fail_fast?: bool;
  /** Filename for JUnit report (optional) */
  output_file_name?: string;
  /** Times to repeat each test (optional) */
  exe_repeat?: int;
  /** Times to repeat each group of tests (optional) */
  exe_repeat_group?: int;
  /** Patterns to filter tests (optional) */
  tests_pattern?: LuaTable;
  /** List of test names or groups to run (optional) */
  tests_names?: LuaTable;
  /** List of directories to load tests from (default $(def)) */
  paths?: LuaTable;
  /** Function to load tests.Called once for every item in paths (optional) */
  load_tests?: unknown;
  /** Shuffle method (none, all, group) (default $(def)) */
  shuffle?: 'none' | 'all' | 'group';
  /** Random seed for shuffle (optional) */
  seed?: int;
  /** Output formatter (text, tap, junit, nil) (default $(def)) */
  output?: 'text' | 'tap' | 'junit' | undefined;
}): void;

/**
 * Split `some.group.name.method` into `some.group.name` and method . Returns nil, input if input value does not have a dot.
 */
export function split_test_method_name(this: void, someName: string): (LuaMultiReturn<[string, string]> | string) | undefined;

/**
 * Exrtact all test methods from group.
 */
export function expand_group(group: Group): () => unknown;
