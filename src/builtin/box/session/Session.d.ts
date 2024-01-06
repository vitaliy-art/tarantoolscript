import { ErrorObject } from '../error';

/** @noSelf */
export interface Session {
  /**
   * Return the unique identifier (ID) for the current session.
   * @returns The session identifier; 0 or -1 if there is no session.
   */
  id(): number;

  /**
   * @returns `true` if the session exists, `false` if the session does not exist.
   */
  exists(): boolean;

  /**
   * This function works only if there is a peer, that is, if a connection has been made to a separate Tarantool instance.
   * @param id Session id.
   * @returns The host address and port of the session peer, for example “127.0.0.1:55457”.
   * If the session exists but there is no connection to a separate instance, the return is null.
   * The command is executed on the server instance, so the “local name” is the server instance’s host and port,
   * and the “peer name” is the client’s host and port.
   */
  peer(id: number): string?;

  /**
   * This function is local for the request, i.e. not global for the session.
   * If the connection behind the session is multiplexed, this function can be safely used inside the request processor.
   * @returns The value of the `sync` integer constant used in the binary protocol. This value becomes invalid when the session is disconnected.
   */
  sync(): number?;

  /**
   * @returns The name of the current user.
   */
  user(): string;

  /**
   * Possible return values are:
   * - `binary` if the connection was done via the binary protocol, for example to a target made with `box.cfg{listen=…}`;
   * - `console` if the connection was done via the administrative console, for example to a target made with `console.listen`;
   * - `repl` if the connection was done directly, for example when using Tarantool as a client;
   * - `applier` if the action is due to replication, regardless of how the connection was done;
   * - `background` if the action is in a background fiber, regardless of whether the Tarantool server was started in the background.
   *
   * `box.session.type()` is useful for an `on_replace()` trigger on a replica – the value will be ‘applier’
   * if and only if the trigger was activated because of a request that was done on the master.
   * @returns The type of connection or cause of action.
   */
  type(): string;

  /**
   * Change Tarantool’s current user – this is analogous to the Unix command `su`.
   *
   * Or, if function-to-execute is specified, change Tarantool’s current user temporarily while executing the function –
   * this is analogous to the Unix command `sudo`.
   * @param user Name of a target user.
   * @param functionToExecute Name of a function, or definition of a function. Additional parameters may be passed to `box.session.su`,
   * they will be interpreted as parameters of `function-to-execute`.
   * @param args Additional parameters for `function-to-execute`.
   * @returns Result of `function-to-execute` execution.
   */
  su<TResult = unknown>(user: string, functionToExecute?: (...args: any[]) => TResult, ...args: unknown[]): TResult;

  /**
   * The user ID of the current user.
   *
   * Every user has a unique name (seen with `box.session.user()`) and a unique ID (seen with `box.session.uid()`).
   * The values are stored together in the `_user` space.
   */
  uid(): number;

  /**
   * This is the same as `box.session.uid()`, except in two cases:
   * - The first case: if the call to `box.session.euid()` is within a function invoked by `box.session.su(user-name, function-to-execute)` –
   * in that case, `box.session.euid()` returns the ID of the changed user (the user who is specified by the `user-name` parameter of the `su` function)
   * but `box.session.uid()` returns the ID of the original user (the user who is calling the `su` function).
   * - The second case: if the call to `box.session.euid()` is within a function specified with `box.schema.func.create(function-name, {setuid= true})`
   * and the binary protocol is in use – in that case, `box.session.euid()` returns the ID of the user who created “function-name”
   * but `box.session.uid()` returns the ID of the the user who is calling “function-name”.
   * @returns The effective user ID of the current user.
   */
  euid(): number;

  /**
   * A Lua table that can hold arbitrary unordered session-specific names and values, which will last until the session ends.
   * For example, this table could be useful to store current tasks when working with a Tarantool queue manager.
   */
  storage_memorandum: LuaTable<string, unknown>;

  /**
   * Define a trigger for execution when a new session is created due to an event such as `console.connect`.
   * The trigger function will be the first thing executed after a new session is created.
   * If the trigger execution fails and raises an error, the error is sent to the client and the connection is closed.
   *
   * If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   *
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   *
   * Warning:
   *
   * If a trigger always results in an error, it may become impossible to connect to a server to reset it.
   * @param triggerFunction Function which will become the trigger function.
   * @param oldTriggerFunction Existing trigger function which will be replaced by trigger-function.
   * @returns Nil or function pointer.
   */
  on_connect(triggerFunction?: EmptyParamsTrigger, oldTriggerFunction?: EmptyParamsTrigger): (EmptyParamsTrigger | EmptyParamsTrigger[])?;

  /**
   * Define a trigger for execution after a client has disconnected. If the trigger function causes an error, the error is logged but otherwise is ignored.
   * The trigger is invoked while the session associated with the client still exists and can access session properties, such as `box.session.id()`.
   *
   * Since version `1.10`, the trigger function is invoked immediately after the disconnect,
   * even if requests that were made during the session have not finished.
   *
   * If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   *
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   * @param triggerFunction Function which will become the trigger function.
   * @param oldTriggerFunction Existing trigger function which will be replaced by trigger-function.
   * @returns Nil or function pointer.
   */
  on_disconnect(triggerFunction?: EmptyParamsTrigger, oldTriggerFunction?: EmptyParamsTrigger): (EmptyParamsTrigger | EmptyParamsTrigger[])?;

  /**
   * Define a trigger for execution during authentication.
   *
   * The `on_auth` trigger function is invoked in these circumstances:
   * - The `console.connect` function includes an authentication check for all users except ‘guest’.
   * For this case, the `on_auth` trigger function is invoked after the `on_connect` trigger function, if and only if the connection has succeeded so far.
   * - The binary protocol has a separate authentication packet. For this case, connection and authentication are considered to be separate steps.
   *
   * Unlike other trigger types, `on_auth` trigger functions are invoked before the event.
   * Therefore a trigger function like `function auth_function () v = box.session.user(); end` will set v to “guest”,
   * the user name before the authentication is done. To get the user name after the authentication is done,
   * use the special syntax: `function auth_function (user_name) v = user_name; end`
   *
   * If the trigger fails by raising an error, the error is sent to the client and the connection is closed.
   *
   * If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   *
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   * @param triggerFunction Function which will become the trigger function.
   * @param oldTriggerFunction Existing trigger function which will be replaced by trigger-function.
   * @returns Nil or function pointer.
   */
  on_auth(triggerFunction?: OnAuthTrigger, oldTriggerFunction?: OnAuthTrigger): (OnAuthTrigger | OnAuthTrigger[])?;

  /**
   * Define a trigger for reacting to user’s attempts to execute actions that are not within the user’s privileges.
   *
   * If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   *
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   * @param triggerFunction Function which will become the trigger function.
   * @param oldTriggerFunction Existing trigger function which will be replaced by trigger-function.
   * @returns Nil or function pointer.
   */
  on_access_denied(triggerFunction?: OnAccessDeniedTrigger, oldTriggerFunction?: OnAccessDeniedTrigger): (OnAccessDeniedTrigger | OnAccessDeniedTrigger[])?;

  /**
   * Generate an out-of-band message. By “out-of-band” we mean an extra message which supplements what is passed in a network via the usual channels.
   * Although `box.session.push()` can be called at any time, in practice it is used with networks that are set up with module `net.box`,
   * and it is invoked by the server (on the “remote database system” to use our terminology for `net.box`),
   * and the client has options for getting such messages.
   *
   * This function returns an error if the session is disconnected.
   * @param message What to send (any Lua type).
   * @param sync `Int`, an optional argument to indicate what the session is, as taken from an earlier call to `box.session.sync()`.
   * If it is omitted, the default is the current `box.session.sync()` value. In Tarantool version `2.4.2`,
   * sync is deprecated and its use will cause a warning. Since version `2.5.1`, its use will cause an error.
   * @returns [`nil`, `error`] or `true`:
   * - If the result is an error, then the first part of the return is nil and the second part is the error object.
   * - If the result is not an error, then the return is the boolean value `true`.
   * - When the return is `true`, the message has gone to the network buffer as a packet with a different header code
   * so the client can distinguish from an ordinary Okay response.
   */
  push(message: unknown, sync?: number): LuaMultiReturn<[boolean?, ErrorObject?]>
}

export type EmptyParamsTrigger = () => void;
export type OnAccessDeniedTrigger = (op: string, type: string, name: string) => void;
export type OnAuthOneParamTrigger = (userName: string) => void;
export type OnAuthTwoParamsTrigger = (userName: string, status: boolean) => void;

export type OnAuthTrigger =
  | EmptyParamsTrigger
  | OnAuthOneParamTrigger
  | OnAuthTwoParamsTrigger
