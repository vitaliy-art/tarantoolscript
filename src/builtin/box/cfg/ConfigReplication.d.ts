export interface ConfigReplication {
  /**
   * Since version 1.7.4. If `replication` is not an empty string, the instance is considered to be a Tarantool replica.
   * The replica will try to connect to the master specified in `replication` with a URI (Universal Resource Identifier), for example:
   *
   * `konstantin:secret_password@tarantool.org:3301`
   *
   * If there is more than one replication source in a replica set, specify an array of URIs,
   * for example (replace ‘uri’ and ‘uri2’ in this example with valid URIs):
   *
   * `box.cfg{ replication = { 'uri1', 'uri2' } }`
   *
   * Note:   *
   * Starting from version 2.10.0, there is a number of other ways for specifying several URIs. See syntax examples.
   *
   * If one of the URIs is “self” – that is, if one of the URIs is for the instance where `box.cfg{}` is being executed –
   * then it is ignored. Thus, it is possible to use the same `replication` specification on multiple server instances, as shown in these examples.
   *
   * The default user name is ‘guest’.
   *
   * A read-only replica does not accept data-change requests on the listen port.
   *
   * The `replication` parameter is dynamic, that is, to enter master mode, simply set `replication` to an empty string and issue:
   *
   * `box.cfg{ replication = new-value }`
   */
  replication?: string | string[],

  /**
   * Since version 2.3.1. A Tarantool replica can be anonymous. This type of replica is read-only
   * (but you still can write to temporary and replica-local spaces), and it isn’t present in the `_cluster` table.
   *
   * Since an anonymous replica isn’t registered in the `_cluster` table, there is no limitation for
   * anonymous replicas count in a replica set: you can have as many of them as you want.
   *
   * In order to make a replica anonymous, pass the option `replication_anon=true` to `box.cfg` and set `read_only` to `true`.
   */
  replication_anon?: boolean,

  /**
   * Since 2.11.0.
   *
   * Specifies a strategy used to bootstrap a replica set. The following strategies are available:
   *
   * - `auto`: a node doesn’t boot if a half or more of other nodes in a replica set are not connected. For example,
   * if the replication parameter contains 2 or 3 nodes, a node requires 2 connected instances. In the case of 4 or 5 nodes,
   * at least 3 connected instances are required. Moreover, a bootstrap leader fails to boot unless every connected node
   * has chosen it as a bootstrap leader.
   * - `legacy` (deprecated since 2.11.0): a node requires the replication_connect_quorum number of other nodes to be connected.
   * This option is added to keep the compatibility with the current versions of Cartridge and might be removed in the future.
   */
  bootstrap_strategy?: 'auto' | 'legacy',

  /**
   * Since version 1.9.0. The number of seconds that a replica will wait when trying to connect to a master in a cluster.
   * See orphan status for details.
   *
   * This parameter is different from replication_timeout, which a master uses to disconnect a replica when the master
   * receives no acknowledgments of heartbeat messages.
   */
  replication_connect_timeout?: number,

  /**
   * Deprecated since 2.11.0. This option is in effect if bootstrap_strategy is set to `legacy`.
   *
   * Specifies the number of nodes to be up and running to start a replica set.
   * This parameter has effect during bootstrap or configuration update.
   * Setting `replication_connect_quorum` to `0` makes Tarantool require no immediate reconnect only in case of recovery.
   * See Orphan status for details.
   */
  replication_connect_quorum?: number,

  /**
   * Since version 1.10.1. By default, if a replica adds a unique key that another replica has added,
   * replication stops with error = ER_TUPLE_FOUND.
   *
   * However, by specifying `replication_skip_conflict = true`, users can state that such errors may be ignored.
   * So instead of saving the broken transaction to the xlog, it will be written there as `NOP` (No operation).
   */
  replication_skip_conflict?: boolean,

  /**
   * Since version 1.9.0. The maximum lag allowed for a replica. When a replica syncs (gets updates from a master),
   * it may not catch up completely. The number of seconds that the replica is behind the master is called the “lag”.
   * Syncing is considered to be complete when the replica’s lag is less than or equal to `replication_sync_lag`.
   *
   * If a user sets `replication_sync_lag` to nil or to 365 * 100 * 86400 (TIMEOUT_INFINITY),
   * then lag does not matter – the replica is always considered to be “synced”.
   * Also, the lag is ignored (assumed to be infinite) in case the master is running Tarantool older than 1.7.7,
   * which does not send heartbeat messages.
   */
  replication_sync_lag?: number,

  /**
   * Since version 1.10.2. The number of seconds that a node waits when trying to sync with other nodes in a replica set
   * (see bootstrap_strategy), after connecting or during configuration update.
   * This could fail indefinitely if `replication_sync_lag` is smaller than network latency,
   * or if the replica cannot keep pace with master updates.
   * If `replication_sync_timeout` expires, the replica enters orphan status.
   */
  replication_sync_timeout?: number,

  /**
   * Since version 1.7.5. If the master has no updates to send to the replicas,
   * it sends heartbeat messages every `replication_timeout` seconds, and each replica sends an ACK packet back.
   *
   * Both master and replicas are programmed to drop the connection if they get no response in four `replication_timeout` periods.
   * If the connection is dropped, a replica tries to reconnect to the master.
   */
  replication_timeout?: number,

  /**
   * Since version 1.9.0. As described in section “Replication architecture”, each replica set is identified
   * by a universally unique identifier called replica set UUID, and each instance is identified by an instance UUID.
   *
   * Ordinarily it is sufficient to let the system generate and format the UUID strings which will be permanently stored.
   *
   * However, some administrators may prefer to store Tarantool configuration information in a central repository,
   * for example Apache ZooKeeper. Such administrators can assign their own UUID values for either – or both – instances (instance_uuid)
   * and replica set (`replicaset_uuid`), when starting up for the first time.
   *
   * General rules:
   * - The values must be true unique identifiers, not shared by other instances or replica sets within the common infrastructure.
   * - The values must be used consistently, not changed after initial setup (the initial values are stored in snapshot files and are checked whenever the system is restarted).
   * - The values must comply with RFC 4122. The nil UUID is not allowed.
   *
   * The UUID format includes sixteen octets represented as 32 hexadecimal (base 16) digits,
   * displayed in five groups separated by hyphens, in the form `8-4-4-4-12` for a total of 36 characters
   * (32 alphanumeric characters and four hyphens).
   */
  replicaset_uuid?: string,

  /**
   * Since version 1.9.0. For replication administration purposes, it is possible to set the universally
   * unique identifiers of the instance (`instance_uuid`) and the replica set (`replicaset_uuid`),
   * instead of having the system generate the values.
   *
   * See the description of `replicaset_uuid` parameter for details.
   */
  instance_uuid?: string,

  /**
   * Since version 2.5.1. For synchronous replication only.
   * This option tells how many replicas should confirm the receipt of a synchronous transaction before it can finish its commit.
   *
   * Since version 2.5.3, the option supports dynamic evaluation of the quorum number.
   * That is, the number of quorum can be specified not as a constant number, but as a function instead.
   * In this case, the option returns the formula evaluated. The result is treated as an integer number.
   * Once any replicas are added or removed, the expression is re-evaluated automatically.
   */
  replication_synchro_quorum?: number,

  /**
   * Since version 2.5.1. For synchronous replication only.
   * Tells how many seconds to wait for a synchronous transaction quorum replication until it is declared failed and is rolled back.
   *
   * It is not used on replicas, so if the master dies, the pending synchronous transactions will be kept waiting
   * on the replicas until a new master is elected.
   */
  replication_synchro_timeout?: number,

  /**
   * Since version 2.10.0. The number of threads spawned to decode the incoming replication data.
   *
   * The default value is 1. It means that a single separate thread handles all the incoming replication streams.
   * In most cases, one thread is enough for all incoming data.
   * Therefore, it is likely that the user will not need to set this configuration option.
   *
   * Possible values range from 1 to 1000.
   * If there are multiple replication threads, connections to serve are distributed evenly between the threads.
   */
  replication_threads?: number,

  /**
   * Since version 2.6.1. Specifies the role of a replica set node in the leader election process.
   *
   * Possible values:   *
   * - `off`
   * - `voter`
   * - `candidate`
   * - `manual`.
   *
   * Participation of a replica set node in the automated leader election can be turned on and off by this option.
   *
   * The default value is `off`. All nodes that have values other than `off` run the Raft state machine internally
   * talking to other nodes according to the Raft leader election protocol. When the option is off, the node accepts
   * Raft messages from other nodes, but it doesn’t participate in the election activities, and this doesn’t affect the node’s state.
   * So, for example, if a node is not a leader but it has `election_mode = 'off'`, it is writable anyway.
   *
   * You can control which nodes can become a leader. If you want a node to participate in the election process
   * but don’t want that it becomes a leaders, set the `election_mode` option to `voter`.
   * In this case, the election works as usual, this particular node will vote for other nodes, but won’t become a leader.
   *
   * If the node should be able to become a leader, use `election_mode = 'candidate'`.
   *
   * Since version 2.8.2, the manual election mode is introduced. It may be used when a user wants to control which instance is the leader explicitly instead of relying on the Raft election algorithm.
   *
   * When an instance is configured with the `election_mode='manual'`, it behaves as follows:   *
   * - By default, the instance acts like a voter – it is read-only and may vote for other instances that are candidates.
   * - Once `box.ctl.promote()` is called, the instance becomes a candidate and starts a new election round. If the instance wins the elections, it becomes a leader, but won’t participate in any new elections.
   */
  election_mode?: 'off' | 'voter' | 'candidate' | 'manual',

  /**
   * Since version 2.6.1. Specifies the timeout between election rounds in the leader election process
   * if the previous round ended up with a split-vote.
   *
   * In the leader election process, there can be an election timeout for the case of a split-vote.
   * The timeout can be configured using this option; the default value is 5 seconds.
   *
   * It is quite big, and for most of the cases it can be freely lowered to 300-400 ms.
   * It can be a floating point value (300 ms would be `box.cfg{election_timeout = 0.3}`).
   *
   * To avoid the split vote repeat, the timeout is randomized on each node during every new election,
   * from 100% to 110% of the original timeout value.
   * For example, if the timeout is 300 ms and there are 3 nodes started the election simultaneously in the same term,
   * they can set their election timeouts to 300, 310, and 320 respectively, or to 305, 302, and 324, and so on.
   * In that way, the votes will never be split because the election on different nodes won’t be restarted simultaneously.
   */
  election_timeout?: number,

  /**
   * Since version 2.11.0. In earlier Tarantool versions, use election_fencing_enabled instead.
   *
   * Specifies the leader fencing mode that affects the leader election process.
   * When the parameter is set to `soft` or `strict`, the leader resigns its leadership
   * if it has less than replication_synchro_quorum of alive connections to the cluster nodes.
   * The resigning leader receives the status of a follower in the current election term and becomes read-only.
   * - In `soft` mode, a connection is considered dead if there are no responses for 4*replication_timeout seconds both on the current leader and the followers.
   * - In `strict` mode, a connection is considered dead if there are no responses for 2*replication_timeout seconds on the current leader and 4*replication_timeout seconds on the followers. This improves chances that there is only one leader at any time.
   *
   * Fencing applies to the instances that have the election_mode set to `candidate` or `manual`.
   * To turn off leader fencing, set `election_fencing_mode` to `off`.
   */
  election_fencing_mode?: 'soft' | 'strict',
}
