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
}
