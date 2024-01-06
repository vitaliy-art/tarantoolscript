/**
 * A table containing options passed to the `box.schema.func.create(func-name [, function_options])` function.
 */
export interface FunctionOptions {
  /**
   * Specify whether there should be no error if the function already exists.
   *
   * Default: `false`
   */
  if_not_exists?: boolean;

  /**
   * Make Tarantool treat the function’s caller as the function’s creator, with full privileges.
   * Note that setuid works only over binary ports. setuid doesn’t work if you invoke a function using the admin console or inside a Lua script.
   *
   * Default: `false`
   */
  setuid?: boolean;

  /**
   * Specify the function language. The possible values are:
   * - `LUA`: define a Lua function in the body attribute.
   * - `SQL_EXPR`: define an SQL expression in the body attribute. An SQL expression can only be used as a field or tuple constraint.
   * - `C`: import a C function using its name from a .so file. Learn how to call C code from Lua in the C tutorial.
   *
   * Default: `LUA`
   *
   * Note: To reload a C module with all its functions without restarting the server, call `box.schema.func.reload()`.
   */
  language?: 'LUA' | 'SQL_EXPR' | 'C';

  /**
   * Whether the function should be executed in an isolated environment.
   * This means that any operation that accesses the world outside the sandbox is forbidden or has no effect.
   * Therefore, a sandboxed function can only use modules and functions that cannot affect isolation:
   * - `assert`
   * - `error`
   * - `ipairs`
   * - `math.*`
   * - `next`
   * - `pairs`
   * - `pcall`
   * - `print`
   * - `select`
   * - `string.*`
   * - `table.*`
   * - `tonumber`
   * - `tostring`
   * - `type`
   * - `unpack`
   * - `xpcall`
   * - `utf8.*`
   *
   * Default: `false`
   */
  is_sandboxed?: boolean;

  /**
   * Specify whether a function should be deterministic.
   *
   * Default: `false`
   */
  is_deterministic?: boolean;

  /**
   * If true is set in the function definition for a functional index, the function returns multiple keys.
   *
   * Default: `false`
   */
  is_multikey?: boolean;

  /**
   * Specify a function body. You can set a function’s language using the language attribute.
   *
   * Default: `nil`
   */
  body?: string;

  /**
   * Since: `2.10.0`
   *
   * If set to true for a Lua function and the function is called via `net.box` (`conn:call()`) or by `box.func.<func-name>:call()`,
   * the function arguments are passed being wrapped in a MsgPack object.
   *
   * If a function forwards most of its arguments to another Tarantool instance or writes them to a database,
   * the usage of this option can improve performance because it skips the MsgPack data decoding in Lua.
   *
   * Default: `false`
   */
  takes_raw_args?: boolean;

  /**
   * Specify the languages that can call the function.
   *
   * Example: `exports = {'LUA', 'SQL'}`
   *
   * Default: `{'LUA'}`
   */
  exports?: string[];

  /**
   * Specify the Lua type names for each parameter of the function.
   *
   * Example: `param_list = {'number', 'number'}`
   */
  param_list?: string[];

  /**
   * Specify the Lua type name for a function’s return value.
   *
   * Example: `returns = 'number'`
   */
  returns?: string;
}
