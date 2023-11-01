export interface ConfigBinaryLoggingSnapshot {
  /**
   * Since version 1.7.4. If `force_recovery` equals true, Tarantool tries to continue if there is an error
   * while reading a snapshot file (at server instance start) or a write-ahead log file
   * (at server instance start or when applying an update at a replica): skips invalid records,
   * reads as much data as possible and lets the process finish with a warning.
   * Users can prevent the error from recurring by writing to the database and executing
   */
  force_recovery?: boolean,

  /**
   * Since version 1.7.4. The maximum number of bytes in a single write-ahead log file.
   * When a request would cause an .xlog file to become larger than `wal_max_size`, Tarantool creates another WAL file.
   */
  wal_max_size?: number,

  /**
   * Since version 1.4.9. Reduce the throttling effect of box.snapshot() on INSERT/UPDATE/DELETE
   * performance by setting a limit on how many megabytes per second it can write to disk.
   * The same can be achieved by splitting wal_dir and memtx_dir locations and moving snapshots to a separate disk.
   * The limit also affects what box.stat.vinyl().regulator may show for the write rate of dumps to .run and .index files.
   */
  snap_io_rate_limit?: number,

  /**
   * Since version 1.6.2. Specify fiber-WAL-disk synchronization mode as:
   * - `none`: write-ahead log is not maintained. A node with `wal_mode = none` can’t be replication master;
   * - `write`: fibers wait for their data to be written to the write-ahead log (no fsync(2));
   * - `fsync`: fibers wait for their data, fsync(2) follows each write(2);
   */
  wal_mode?: 'none' | 'write' | 'fsync',

  /**
   * Since version 1.6.2. Number of seconds between periodic scans of the write-ahead-log file directory,
   * when checking for changes to write-ahead-log files for the sake of replication or hot standby.
   */
  wal_dir_rescan_delay?: number,

  /**
   * Since version 2.8.1. The size of the queue (in bytes) used by a replica to submit new transactions to a write-ahead log (WAL).
   * This option helps limit the rate at which a replica submits transactions to the WAL.
   * Limiting the queue size might be useful when a replica is trying to sync with a master and reads new transactions faster
   * than writing them to the WAL.
   *
   * Note:
   * You might consider increasing the `wal_queue_max_size` value in case of large tuples (approximately one megabyte or larger).
   */
  wal_queue_max_size?: number,

  /**
   * Since version 2.6.3. The delay (in seconds) used to prevent the Tarantool garbage collector from immediately removing
   * write-ahead log files after a node restart. This delay eliminates possible erroneous situations when the master deletes WALs
   * needed by replicas after restart. As a consequence, replicas sync with the master faster after its restart and don’t need
   * to download all the data again.
   *
   * Once all the nodes in the replica set are up and running, automatic cleanup is started again even if wal_cleanup_delay has not expired.
   *
   * Note:
   * The `wal_cleanup_delay` option has no effect on nodes running as anonymous replicas.
   */
  wal_cleanup_delay?: number,
}
