/** @noSelf */
export interface EventWatcher {
  /**
   * Subscribe to events broadcast by a local host.
   *
   * Note:
   *
   * Keep in mind that garbage collection of a watcher handle doesn’t lead to the watcher’s destruction.
   * In this case, the watcher remains registered. It is okay to discard the result of watch function if the watcher will never be unregistered.
   * @param key Key name of the event to subscribe to.
   * @param func Callback to invoke when the key value is updated.
   * @returns A watcher handle. The handle consists of one method – `unregister()`, which unregister the watcher.
   */
  watch(key: string, func: (this: void, key: string, value: any) => void): EventWatcherHandler;

  /**
   * @todo Fix documentation.
   *
   * Not documented yet (see {@link https://github.com/tarantool/doc/issues/3510})
   *
   * Takes a notification key and returns the value currently associated with it.
   *
   * Can be used instead of `box.watch()` in case the caller only needs to retrieve
   * the current value without subscribing to future changes.
   * @param key Key name of the event.
   * @returns The value associated with `key`.
   */
  watch_once(key: string): void;

  /**
   * Update the value of a particular key and notify all key watchers of the update.
   * @param key Key name of the event to subscribe to.
   * @param value Any data that can be encoded in MsgPack.
   */
  broadcast(key: string, value: unknown): void;

  /**
   * @todo Fix documentation.
   *
   * Not documented yet.
   */
  txn_isolation_level: {
    READ_CONFIRMED: number;
    BEST_EFFORT: number;
    READ_COMMITTED: number;
    DEFAULT: number;
    ['read-confirmed']: number;
    ['read-committed']: number;
    linearizable: number;
    ['best-effort']: number;
    LINEARIZABLE: number;
    default: number;
  }
}

export interface EventWatcherHandler {
  /** Unregister watcher. */
  unregister(): void;
}
