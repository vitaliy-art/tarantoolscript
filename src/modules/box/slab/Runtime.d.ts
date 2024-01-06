/** @noSelf */
export interface Runtime {
  /**
   * Show runtime memory usage report in bytes.
   *
   * The runtime memory encompasses internal Lua memory as well as the runtime arena. The Lua memory stores Lua objects.
   * The runtime arena stores Tarantool-specific objects – for example, runtime tuples, network buffers and other objects
   * associated with the application server subsystem.
   * @returns Table
   */
  info(): RuntimeInfo;
}

export interface RuntimeInfo {
  /** The size of the Lua heap that is controlled by the Lua garbage collector. */
  lua: number;
  /** The maximum size of the runtime memory. */
  maxalloc: number;
  /** The current number of bytes used by the runtime memory. */
  used: number;
}
