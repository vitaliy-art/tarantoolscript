import { FunctionOptions } from './FunctionOptions';

export interface Func {
  /**
   * Create a function. The created function can be used in different usage scenarios, for example, in field or tuple constraints or functional indexes.
   *
   * Using the body option, you can make a function persistent.
   * In this case, the function is “persistent” because its definition is stored in a snapshot
   * (the box.space._func system space) and can be recovered if the server restarts.
   *
   * @param name A name of the function, which should conform to the rules for object names.
   * @param options
   */
  create(this: void, name: string, options?: FunctionOptions): void;

  /**
   * Drop a function tuple.
   *
   * @param name The name of the function.
   * @param options Table - `if_exists = true|false` (default = `false`) - `boolean`; `true` means there should be no error if the _func tuple does not exist.
   */
  drop(this: void, name: string, options?: { if_exists?: boolean }): void;

  /**
   * Return true if a function tuple exists; return false if a function tuple does not exist.
   *
   * @param name The name of the function.
   */
  exists(this: void, name: string): boolean;

  /**
   * Reload a C module with all its functions without restarting the server.
   *
   * Under the hood, Tarantool loads a new copy of the module (`*.so` shared library) and starts routing all new request to the new version.
   * The previous version remains active until all started calls are finished.
   * All shared libraries are loaded with `RTLD_LOCAL` (see “man 3 dlopen”), therefore multiple copies can co-exist without any problems.
   *
   * Note: Reload will fail if a module was loaded from Lua script with `ffi.load()`.
   *
   * @param name The name of the module to reload.
   */
  reload(this: void, name?: string): void;
}
