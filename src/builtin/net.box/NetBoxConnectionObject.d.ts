import { SpaceObject } from 'builtin/box/space/SpaceObject';
import { NetBoxRequestOptions } from './NetBoxRequestOptions';

export interface NetBoxConnectionObject {
  /**
   * Execute a PING command.
   * @param options The supported option is `timeout=seconds`.
   * @returns `true` on success, `false` on error.
   */
  ping(options?: { timeout?: number }): boolean;

  /**
   * Wait for connection to be active or closed.
   * @param timeout In seconds.
   * @returns `true` when connected, `false` on failure.
   */
  wait_connected(timeout?: number): boolean;

  /**
   * Show whether connection is active or closed.
   * @returns `true` if connected, `false` on failure.
   */
  is_connected(): boolean;

  /**
   * Since 1.7.2.
   * Wait for a target state.
   * @param state Target state (or states).
   * @param timeout In seconds.
   * @returns `true` when a target state(s) is reached, `false` on timeout or connection closure.
   */
  wait_state(state: string | { [key: string]: boolean }, timeout?: number): boolean;

  /**
   * Close a connection.
   *
   * Connection objects are destroyed by the Lua garbage collector, just like any other objects in Lua,
   * so an explicit destruction is not mandatory. However, since `close()` is a system call,
   * it is good programming practice to close a connection explicitly when it is no longer needed,
   * to avoid lengthy stalls of the garbage collector.
   */
  close(): void;

  space: LuaTable<string, {
    /**
     * The remote-call equivalent of the local call `box.space.space-name:select{...}`.
     *
     * Note: Due to the implicit yield rules a local `box.space.space-name:select{...}` does not yield,
     * but a remote `conn.space.space-name:select{...}` call does yield,
     * so global variables or database tuples data may change when a remote `conn.space.space-name:select{...}` occurs.
     */
    select: InferSpaceFunctionType<'select'>;

    /**
     * The remote-call equivalent of the local call `box.space.space-name:get{...}`.
     */
    get: InferSpaceFunctionType<'get'>;

    /**
     * The remote-call equivalent of the local call `box.space.space-name:insert(...)`.
     */
    insert: InferSpaceFunctionType<'insert'>;

    /**
     * The remote-call equivalent of the local call `box.space.space-name:replace(...)`.
     */
    replace: InferSpaceFunctionType<'replace'>;

    /**
     * The remote-call equivalent of the local call `box.space.space-name:update(...)`.
     */
    update: InferSpaceFunctionType<'update'>;

    /**
     * The remote-call equivalent of the local call `box.space.space-name:delete(...)`.
     */
    upsert: InferSpaceFunctionType<'upsert'>;

    delete: InferSpaceFunctionType<'delete'>;
  }>;

  /**
   * Evaluates and executes the expression in Lua-string `code`, which may be any statement or series of statements.
   * An execute privilege is required;
   * if the user does not have it, an administrator may grant it with `box.schema.user.grant(username, 'execute', 'universe')`.
   *
   * To ensure that the return from `conn:eval` is whatever the Lua expression returns, begin the Lua-string code with the word “return”.
   * @param code Lua code.
   * @param arguments Arguments to pass to code.
   * @param requestOptions Request options.
   * @returns Whatever the evaluated code returns.
   */
  eval(code: string, arguments?: unknown[], requestOptions?: NetBoxRequestOptions): unknown;

  /**
   * `conn:call('func', {'1', '2', '3'})` is the remote-call equivalent of `func('1', '2', '3')`.
   * That is, `conn:call` is a remote stored-procedure call. The return from `conn:call` is whatever the function returns.
   *
   * Limitation: the called function cannot return a function,
   * for example if `func2` is defined as `function func2 () return func end`
   * then `conn:call(func2)` will return “error: unsupported Lua type ‘function’”.
   * @param functionName Remote function name.
   * @param arguments Arguments to pass to remote function.
   * @param requestOptions Request options.
   * @returns Whatever the called remote function returns.
   */
  call(functionName: string, arguments?: unknown[], requestOptions?: NetBoxRequestOptions): unknown;

  /**
   * Subscribe to events broadcast by a remote host.
   *
   * Note: Keep in mind that garbage collection of a watcher handle doesn’t lead to the watcher’s destruction.
   * In this case, the watcher remains registered.
   * It is okay to discard the result of watch function if the watcher will never be unregistered.
   * @param key A key name of an event to subscribe to.
   * @param handler A callback to invoke when the key value is updated.
   * @returns A watcher handle. The handle consists of one method – `unregister()`, which unregisters the watcher.
   */
  watch(key: string, handler: (this: void, key: string, value: unknown) => unknown): { unregister(): void; };
}

type InferSpaceFunctionType<TProp extends keyof SpaceObject> =
  (...params: [...Parameters<SpaceObject[TProp]>, requestOptions?: NetBoxRequestOptions]) => ReturnType<SpaceObject[TProp]>?
