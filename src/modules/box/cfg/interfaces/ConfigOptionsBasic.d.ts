export interface ConfigOptionsBasic {
  /**
   * Since version 1.6.2. Run the server as a background task. The log and pid_file parameters must be non-null for this to work.
   */
  background?: boolean,

  /**
   * Since version 1.6.7. Add the given string to the server’s process title (what’s shown in the COMMAND column for ps -ef and top -c commands).
   */
  custom_proc_title?: string,

  /**
   * The read/write data port number or URI (Universal Resource Identifier) string.
   * Has no default value, so must be specified if connections occur from the remote clients that don’t use the “admin port”.
   * Connections made with listen = URI are called “binary port” or “binary protocol” connections.
   * A typical value is 3301.
   */
  listen: string | number,

  /**
   * Since version 1.7.4. A directory where memtx stores snapshot (.snap) files.
   * Can be relative to work_dir. If not specified, defaults to work_dir. See also wal_dir.
   */
  memtx_dir?: string,

  /**
   * Since version 1.4.9. Store the process id in this file. Can be relative to work_dir. A typical value is “tarantool.pid”.
   */
  pid_file?: string,

  /**
   * Since version 1.7.1. Say box.cfg{read_only=true...} to put the server instance in read-only mode. After this,
   * any requests that try to change persistent data will fail with error ER_READONLY.
   * Read-only mode should be used for master-replica replication.
   * Read-only mode does not affect data-change requests for spaces defined as temporary.
   * Although read-only mode prevents the server from writing to the WAL, it does not prevent writing diagnostics with the log module.
   */
  read_only?: boolean,

  /**
   * Since version 2.3.1. The maximum number of bytes in the cache for SQL prepared statements.
   * (The number of bytes that are actually used can be seen with box.info.sql().cache.size.)
   */
  sql_cache_size?: number,

  /**
   * Since version 1.7.1. A directory where vinyl files or subdirectories will be stored. Can be relative to work_dir.
   * If not specified, defaults to work_dir.
   */
  vinyl_dir?: string,

  /**
   * Since version 1.7.5. The vinyl storage engine has a scheduler which does compaction.
   * When vinyl is low on available memory, the compaction scheduler may be unable to keep up with incoming update requests.
   * In that situation, queries may time out after vinyl_timeout seconds. This should rarely occur,
   * since normally vinyl would throttle inserts when it is running low on compaction bandwidth.
   * Compaction can also be ordered manually with index_object:compact().
   */
  vinyl_timeout?: number,

  /**
   * Since version 1.4.9. UNIX user name to switch to after start.
   */
  username?: string,

  /**
   * Since version 1.6.2. A directory where write-ahead log (.xlog) files are stored.
   * Can be relative to work_dir. Sometimes wal_dir and memtx_dir are specified with different values,
   * so that write-ahead log files and snapshot files can be stored on different disks.
   * If not specified, defaults to work_dir.
   */
  wal_dir?: string,

  /**
   * Since version 1.4.9. A directory where database working files will be stored.
   * The server instance switches to work_dir with chdir(2) after start.
   * Can be relative to the current directory. If not specified, defaults to the current directory.
   * Other directory parameters may be relative to work_dir.
   */
  work_dir?: string,

  /**
   * Since version 1.7.5. The maximum number of threads to use during execution of certain internal processes
   * (currently socket.getaddrinfo() and coio_call()).
   */
  worker_pool_threads?: number,

  /**
   * Since version 2.2.2. Whether coredump files should include memory allocated for tuples.
   * (This can be large if Tarantool runs under heavy load.) Setting to true means “do not include”.
   * In an older version of Tarantool the default value of this parameter was false.
   */
  strip_core?: boolean,

  /**
   * Since version 2.6.1. Enables transactional manager if set to true.
   */
  memtx_use_mvcc_engine?: boolean,
}
