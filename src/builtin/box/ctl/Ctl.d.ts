/** @noSelf */
export interface Ctl {
  /**
   * Wait until `box.info.ro` is true.
   * @param timeout Maximum number of seconds to wait.
   */
  wait_ro(timeout?: number): void;

  /**
   * Wait until box.info.ro is false.
   * @param timeout Maximum number of seconds to wait.
   */
  wait_rw(timeout?: number): void;

  /**
   * Create a “schema_init trigger”. The` trigger-function` will be executed when `box.cfg{}` happens for the first time.
   * That is, the `schema_init` trigger is called before the server’s configuration and recovery begins,
   * and therefore `box.ctl.on_schema_init` must be called before `box.cfg` is called.
   *
   * If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   * @param triggerFunction Function which will become the trigger function.
   * @param oldTriggerFunction Existing trigger function which will be replaced by trigger-function.
   * @returns Nil or function pointer.
   */
  on_schema_init(
    triggerFunction: (this: void, ...args: any[]) => unknown,
    oldTriggerFunction?: (this: void, ...args: any[]) => unknown,
  ): ((...args: any[]) => unknown) | void;

  /**
   * Create a “shutdown trigger”. The `trigger-function` will be executed whenever `os.exit()` happens,
   * or when the server is shut down after receiving a `SIGTERM` or `SIGINT` or `SIGHUP` signal
   * (but not after `SIGSEGV` or `SIGABORT` or any signal that causes immediate program termination).
   * @param triggerFunction Function which will become the trigger function.
   * @param oldTriggerFunction Existing trigger function which will be replaced by trigger-function.
   * @returns Nil or function pointer.
   */
  on_shutdown(
    triggerFunction: (this: void, ...args: any[]) => unknown,
    oldTriggerFunction?: (this: void, ...args: any[]) => unknown,
  ): ((...args: any[]) => unknown) | void;

  /**
   * Create a trigger executed on different stages of a node recovery or initial configuration.
   * Note that you need to set the `box.ctl.on_recovery_state` trigger before the initial box.cfg call.
   *
   * A registered trigger function is run on each of the supported recovery state and receives the state name as a parameter:
   * - `snapshot_recovered`: the node has recovered the snapshot files.
   * - `wal_recovered`: the node has recovered the WAL files.
   * - `indexes_built`: the node has built secondary indexes for memtx spaces. This stage might come before any actual data is recovered.
   * This means that the indexes are available right after the first tuple is recovered.
   * - `synced`: the node has synced with enough remote peers. This means that the node changes the state from orphan to running.
   * @param triggerFunction A trigger function.
   * @returns Nil or function pointer.
   */
  on_recovery_state(triggerFunction: (this: void, ...args: any[]) => unknown): ((...args: any[]) => unknown) | void;

  /**
   *  Since: `2.10.0`
   *
   * Create a trigger executed every time the current state of a replica set node in regard to leader election changes.
   * The current state is available in the box.info.election table.
   *
   * The trigger doesn’t accept any parameters. You can see the changes in `box.info.election` and `box.info.synchro`.
   * @param triggerFunction A trigger function.
   * @returns Nil or function pointer.
   */
  on_election(triggerFunction: (this: void) => unknown): (() => unknown) | void;

  /**
   * Set a timeout for the `on_shutdown` trigger.
   * If the timeout has expired, the server stops immediately regardless of whether any `on_shutdown` triggers are left unexecuted.
   * @param timeout Time to wait for the trigger to be completed. The default value is 3 seconds.
   */
  set_on_shutdown_timeout(timeout?: number): void;

  /**
   * Since version `2.5.3`.
   *
   * Check whether the recovery process has finished. Until it has finished, space changes such as `insert` or `update` are not possible.
   * @returns `true` if recovery has finished, otherwise `false`.
   */
  is_recovery_finished(): boolean;

  /**
   * Since version `2.6.2`. Renamed in release `2.6.3`.
   *
   * Wait, then choose new replication leader.
   *
   * For synchronous transactions it is possible that a new leader will be chosen but the transactions of the old leader have not been completed.
   * Therefore to finalize the transaction, the function `box.ctl.promote()` should be called, as mentioned in the notes for leader election.
   * The old name for this function is `box.ctl.clear_synchro_queue()`.
   *
   * The election state should change to `leader`.
   * @returns Nil or function pointer.
   */
  promote(): ((...args: unknown[]) => unknown) | void;

  /**
   * Since version `2.10.0`.
   *
   * Revoke the leader role from the instance.
   *
   * On synchronous transaction queue owner, the function works in the following way:   *
   * - If `box.cfg.election_mode` is `off`, the function writes a `DEMOTE` request to WAL. The `DEMOTE` request
   * clears the ownership of the synchronous transaction queue, while the `PROMOTE` request assigns it to a new instance.
   * - If `box.cfg.election_mode` is enabled in any mode, then the function makes the instance start a new term and give up the leader role.
   *
   * On instances that are not queue owners, the function does nothing and returns immediately.
   */
  demote(): void;
}
