/** @noSelfInFile */

import { ElectionInfo } from './ElectionInfo';
import { GarbageCollectorInfo } from './GarbageCollectorInfo';
import { MemoryInfo } from './MemoryInfo';
import { ReplicationInfo } from './ReplicationInfo';
import { ReplicationAnonInfo } from './ReplicationAnonInfo';
import { SqlInfo } from './SqlInfo';
import { SynchroInfo } from './SynchroInfo';
import { VinylInfo } from './VinylInfo';

export interface InfoData {
  /** Replication id. */
  id: number;

  /** Is `true` if the instance is in read-only mode (same as `read_only` in `box.cfg{}`), or if status is `orphan`. */
  ro: boolean;

  /** Replication uuid. */
  uuid: string;

  /** Process ID. This value is also shown by tarantool module and by the Linux command `ps -A`. */
  pid: number;

  cluster: {
    /** UUID of the replica set. Every instance in a replica set will have the same `cluster.uuid` value.
     * This value is also stored in `box.space._schema` system space. */
    uuid: string;
  };

  /**
   * Since `2.11.0`.
   *
   * Show the database schema version. A schema version is a number that indicates whether the database schema is changed.
   * For example, the `schema_version` value grows if a space or index is added or deleted, or a space, index, or field name is changed.
   */
  schema_version: number;

  /**
   * Since version `2.4.1`.
   *
   * Return a real address to which an instance was bound.
   * For example, if `box.cfg{listen}` was set with a zero port, `box.info.listen` will show a real port. The address is stored as a string:   *
   * - `unix/:<path>` for UNIX domain sockets.
   * - `<ip>:<port>` for IPv4.
   * - `[ip]:<port>` for IPv6.
   * - If an instance does not listen to anything, box.info.listen is nil.
   */
  listen?: string;

  /**
   * List all the anonymous replicas following the instance.
   *
   * The output is similar to the one produced by `box.info.replication` with an exception that anonymous replicas are indexed by their uuid strings
   * rather than server ids, since server ids have no meaning for anonymous replicas.
   *
   * Notice that when you issue a plain `box.info.replication_anon`, the only info returned is the number of anonymous replicas following the current instance.
   * In order to see the full stats, you have to call `box.info.replication_anon()`. This is done to not overload the `box.info` output with excess info,
   * since there may be lots of anonymous replicas.
   */
  replication_anon: ReplicationAnonInfo;

  /** The replication section of `box.info()` is a table with statistics for all instances in the replica set that the current instance belongs to.  */
  replication: LuaTable<number, ReplicationInfo>;

  /**
   * Since version `2.6.1`.
   *
   * Show the current state of a replica set node in regards to leader election.
   *
   * Note: IDs in `the box.info.election` output are the replica IDs visible in the `box.info.id` output on each node and in the `_cluster` space.
   */
  election: ElectionInfo;

  /** The sum of all `lsn` values from each vector clock (`vclock`) for all instances in the replica set. */
  signature: number;

  /**
   * Since version `2.8.1`.
   *
   * Show the current state of synchronous replication.
   *
   * In synchronous replication, transaction is considered committed only after achieving the required quorum number.
   * While transactions are collecting confirmations from remote nodes, these transactions are waiting in the queue.
   */
  synchro: SynchroInfo;

  /**
   * The current state of the instance. Possible values:
   * - `running` – the instance is loaded,
   * - `loading` – the instance is either recovering xlogs/snapshots or bootstrapping,
   * - `orphan` – the instance has not (yet) succeeded in joining the required number of masters (see orphan status),
   * - `hot_standby` – the instance is standing by another instance.
   */
  status: string;

  /** A table with the vclock values of all instances in a replica set which have made data changes. */
  vclock: LuaTable<number, number>;

  /** The number of seconds since the instance started. This value can also be retrieved with `tarantool.uptime()`. */
  uptime: number;

  /** Log sequence number. */
  lsn: number;

  sql(): SqlInfo;

  /**
   * The `gc` function of `box.info` gives the admin user a picture of the factors that affect the Tarantool garbage collector.
   * The garbage collector compares vclock (vector clock) values of users and checkpoints,
   * so a look at `box.info.gc()` may show why the garbage collector has not removed old WAL files, or show what it may soon remove.
   */
  gc(): GarbageCollectorInfo;

  /**
   * Returns runtime statistics for the `vinyl` storage engine. This function is deprecated, use `box.stat.vinyl()` instead.
   * @deprecated
   */
  vinyl(): VinylInfo;

  /**
   * The `memory` function of `box.info` gives the admin user a picture of the whole Tarantool instance.
   *
   * Note: To get a picture of the `vinyl` subsystem, use `box.stat.vinyl()` instead.
   */
  memory(): MemoryInfo;

  package: string;
}

/** The `box.info` submodule provides access to information about server instance variables. */
export interface Info extends InfoData {
  /**
   * Since `box.info` contents are dynamic, it’s not possible to iterate over keys with the Lua `pairs()` function.
   * For this purpose, `box.info()` builds and returns a Lua table with all keys and values provided in the submodule.
   */
  (): InfoData;
}
