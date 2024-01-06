export interface GarbageCollectorInfo {
  /** A list of users whose requests might affect the garbage collector. */
  consumers: AnyTable;

  /** A list of preserved checkpoints. */
  checkpoints: LuaTable<number, {

    /** A list of references to a checkpoint. */
    references: AnyTable;

    /** A checkpoint’s vclock value. */
    vclock: LuaTable<number, number>;

    /** A sum of a checkpoint’s vclock’s components. */
    signature: number;
  }>;

  /** `True` if a checkpoint is in progress, otherwise `false`. */
  checkpoint_is_in_progress: boolean;

  /** The garbage collector’s vclock. */
  vclock: LuaTable<number, number>;

  /** The sum of the garbage collector’s checkpoint’s components. */
  signature: number;
}
