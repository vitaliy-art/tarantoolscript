export interface ReplicationInfo {
  /** Short numeric identifier of instance `n` within the replica set. This value is stored in the `box.space._cluster` system space. */
  id: number;

  /** Globally unique identifier of instance `n`. This value is stored in the `box.space._cluster` system space. */
  uuid: string;

  /** Log sequence number (LSN) for the latest entry in instance n’s write-ahead log (WAL). */
  lsn: number;

  upstream?: {
    /**
     * The replication status of the connection with the instance n:
     * - `connect`: an instance is connecting to the master.
     * - `auth`: authentication is being performed.
     * - `wait_snapshot`: an instance is receiving metadata from the master.
     * If join fails with a non-critical error at this stage
     * (for example, `ER_READONLY`, `ER_ACCESS_DENIED`, or a network-related issue), an instance tries to find a new master to join.
     * - `fetch_snapshot`: an instance is receiving data from the master’s `.snap` files.
     * - `final_join`: an instance is receiving new data added during `fetch_snapshot`.
     * - `sync`: the master and replica are synchronizing to have the same data.
     * - `follow`: the current instance’s role is replica.
     * This means that the instance is read-only or acts as a replica for this remote peer in master-master configuration.
     * The instance is receiving or able to receive data from the instance n’s (upstream) master.
     * - `stopped`: replication is stopped due to a replication error (for example, duplicate key).
     * - `disconnected`: an instance is not connected to the replica set (for example, due to network issues, not replication errors)
     */
    status: string;
    /** Contains instance n’s URI, for example, 127.0.0.1:3302. */
    peer: string;
    /** The time difference between the local time of instance n, recorded when the event was received, a
     * nd the local time at another master recorded when the event was written to the write-ahead log on that master. */
    lag: number;
    /** The time (in seconds) since the last event was received. This is the primary indicator of replication health. */
    idle: number;
    /** Contains an error message in case of a degraded state; otherwise, it is nil. */
    message?: string;
  }

  downstream?: {
    /**
     * The replication status for downstream replications:
     * - `stopped` means that downstream replication has stopped,
     * - `follow` means that downstream replication is in progress (instance n is ready to accept data from the master or is currently doing so).
     */
    status: string;
    /**
     * Contains the vector clock, which is a table of `id, lsn` pairs, for example, `vclock: {1: 3054773, 4: 8938827, 3: 285902018}`.
     * (Notice that the table may have multiple pairs although `vclock` is a singular name).
     *
     * Even if instance n is removed, its values will still appear here;
     * however, its values will be overridden if an instance joins later with the same UUID. Vector clock pairs will only appear if `lsn > 0`.
     */
    vclock: LuaTable<number, number>;

    /** The time (in seconds) since the last time that instance n sent events through the downstream replication. */
    idle: number;

    /**
     * The time difference between the local time at the master node, recorded when a particular transaction was written to the write-ahead log,
     * and the local time recorded when it receives an acknowledgment for this transaction from a replica. Since version `2.10.0`.
     */
    lag: number;

    /** In case of a problem occurs with the connection. */
    message?: string;

    /** In case of a problem occurs with the connection. */
    system_message?: string;
  }
}
