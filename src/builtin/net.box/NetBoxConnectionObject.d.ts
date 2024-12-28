import { SpaceObject } from '../../builtin/box/space/SpaceObject';
import { NetBoxRequestOptions } from './NetBoxRequestOptions';
import { MsgPackObject } from '../../builtin/msgpack/MsgPackObject';
import { NetBoxFuture } from './NetBoxFuture';
import { BufferObject } from '../../builtin/buffer/BufferObject';
import { NetBoxStreamObject } from './NetBoxStreamObject';

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

    /**
     * The remote-call equivalent of the local call `box.space.space-name:delete(...)`.
     */
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

  /**
   *
   * @param requestOptions
   */
  new_stream(requestOptions?: NetBoxRequestOptions): NetBoxStreamObject;

  /**
   * Define a trigger for execution when a new connection is established,
   * and authentication and schema fetch are completed due to an event such as `net_box.connect`.
   *
   * Note: If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   * @param triggerFunction The trigger function. Takes the `conn` object as the first argument.
   * @param oldTriggerFunction An existing trigger function to replace with `triggerFunction`.
   * @returns `nil` or function pointer.
   */
  on_connect<TTrig extends (this: void, conn: NetBoxConnectionObject) => unknown>(
    triggerFunction?: TTrig,
    oldTriggerFunction?: TTrig,
  ): (TTrig | TTrig[]) | undefined;

  /**
   * Define a trigger for execution after a connection is closed.
   * If the trigger function causes an error, the error is logged but otherwise is ignored.
   * Execution stops after a connection is explicitly closed, or once the Lua garbage collector removes it.
   *
   * Note: If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   * @param triggerFunction The trigger function. Takes the `conn` object as the first argument.
   * @param oldTriggerFunction An existing trigger function to replace with `triggerFunction`.
   * @returns `nil` or function pointer.
   */
  on_disconnect<TTrig extends (this: void, conn: NetBoxConnectionObject) => unknown>(
    triggerFunction?: TTrig,
    oldTriggerFunction?: TTrig,
  ): (TTrig | TTrig[]) | undefined;

  /**
   * Define a trigger for shutdown when a `box.shutdown` event is received.
   *
   * Note: If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   * @param triggerFunction The trigger function. Takes the `conn` object as the first argument.
   * @param oldTriggerFunction An existing trigger function to replace with `triggerFunction`.
   * @returns `nil` or function pointer.
   */
  on_shutdown<TTrig extends (this: void, conn: NetBoxConnectionObject) => unknown>(
    triggerFunction?: TTrig,
    oldTriggerFunction?: TTrig,
  ): (TTrig | TTrig[]) | undefined;

  /**
   * Define a trigger executed when some operation has been performed on the remote server after schema has been updated.
   * So, if a server request fails due to a schema version mismatch error, schema reload is triggered.
   *
   * Note: If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   * @param triggerFunction The trigger function. Takes the `conn` object as the first argument.
   * @param oldTriggerFunction An existing trigger function to replace with `triggerFunction`.
   * @returns `nil` or function pointer.
   */
  on_schema_reload<TTrig extends (this: void, conn: NetBoxConnectionObject) => unknown>(
    triggerFunction?: TTrig,
    oldTriggerFunction?: TTrig,
  ): (TTrig | TTrig[]) | undefined;
}

type InferSpaceFunctionType<TProp extends keyof SpaceObject> =
  <TOpts extends NetBoxRequestOptions>(...params: [...Parameters<SpaceObject[TProp]>, requestOptions?: TOpts]) =>
    TOpts extends { buffer: BufferObject } ? void :
    TOpts extends { is_async: true } ? (
      TOpts extends { return_raw: true } ? NetBoxFuture<MsgPackObject> :
      NetBoxFuture<ReturnType<SpaceObject[TProp]>>
    ) :
    TOpts extends { return_raw: true } ? MsgPackObject :
    ReturnType<SpaceObject[TProp]>
