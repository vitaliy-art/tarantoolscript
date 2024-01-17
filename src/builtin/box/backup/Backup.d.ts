/** The `box.backup` submodule contains two functions that are helpful for backup in certain situations. */
export interface Backup {
  /**
   * Ask server to suspend activities before the removal of outdated backups
   * @param n Optional argument starting with Tarantool `1.10.1` that indicates the checkpoint to use relative to the latest checkpoint.
   * For example `n = 0` means “backup will be based on the latest checkpoint”,
   * `n = 1` means “backup will be based on the first checkpoint before the latest checkpoint (counting backwards)”, and so on.
   * The default value for n is zero.
   * @returns A table with the names of snapshot and vinyl files that should be copied
   */
  start(this: void, n?: number): string[];

  /** Inform server that normal operations may resume */
  stop(this: void): void;
}
