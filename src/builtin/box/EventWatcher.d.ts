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
  watch(key: string, func: (key: string, value: any) => void): EventWatcherHandler;

  /**
   * Update the value of a particular key and notify all key watchers of the update.
   * @param key Key name of the event to subscribe to.
   * @param value Any data that can be encoded in MsgPack.
   */
  broadcast(key: string, value: unknown): void;
}

export interface EventWatcherHandler {
  /** Unregister watcher. */
  unregister(): void;
}
