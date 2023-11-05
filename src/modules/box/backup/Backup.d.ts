/** The `box.backup` submodule contains two functions that are helpful for backup in certain situations. */
export interface Backup {
  /** 	Ask server to suspend activities before the removal of outdated backups */
  start: { (this: void, n?: number): string[] }

  /** Inform server that normal operations may resume */
  stop: {()}
}
