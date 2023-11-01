export interface ConfigCheckpointDaemon {
  /**
   * Since version 1.7.4. The interval between actions by the checkpoint daemon, in seconds.
   * If checkpoint_interval is set to a value greater than zero, and there is activity which causes change to a database,
   * then the checkpoint daemon will call box.snapshot() every checkpoint_interval seconds,
   * creating a new snapshot file each time.
   * If checkpoint_interval is set to zero, then the checkpoint daemon is disabled.
   */
  checkpoint_interval?: number,

  /**
   * Since version 1.7.4. The maximum number of snapshots that may exist on the memtx_dir directory
   * before the checkpoint daemon will delete old snapshots.
   * If checkpoint_count equals zero, then the checkpoint daemon does not delete old snapshots.
   */
  checkpoint_count?: number,

  /**
   * Since version 2.1.2. The threshold for the total size in bytes of all WAL files created since the last checkpoint.
   * Once the configured threshold is exceeded, the WAL thread notifies the checkpoint daemon that it must make a new checkpoint
   * and delete old WAL files.
   *
   * This parameter enables administrators to handle a problem that could occur with calculating how much disk space to allocate
   * for a partition containing WAL files.
   *
   * For example, suppose checkpoint_interval = 2 and checkpoint_count = 5 and the average amount that Tarantool writes
   * between each checkpoint interval = 1 GB. Then one could calculate that the necessary amount is (2*5*1) 10GB.
   * But this calculation would be wrong if, instead of writing 1 GB during one checkpoint interval,
   * Tarantool encounters an unusual spike and tries to write 11 GB, causing an operating-system ENOSPC (“no space”) error.
   * By setting checkpoint_wal_threshold to a lower value, say 9 GB, an administrator could prevent the error.
   */
  checkpoint_wal_threshold?: number,
}
