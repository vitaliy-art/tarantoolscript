export interface ElectionInfo {
  /**
   * The election state (mode) of the node.
   * Possible values are `leader`, `follower`, or `candidate`.
   * For more details, refer to description of the leader election process.
   * When `replication.failover` is set to `election`, the node is writable only in the leader state.
   */
  state: string;

  /** The current election term. */
  term: number;

  /** The ID of a node the current node votes for. If the value is `0`, it means the node hasn’t voted in the current term yet. */
  vote: number;
  /** A leader node ID in the current term. If the value is `0`, it means the node doesn’t know which node is the leader in the current term. */
  leader: number;

  /** A leader name. Returns `nil` if there is no leader in a cluster or `box.NULL` if a leader does not have a name. Since version `3.0.0`. */
  leader_name?: string;

  /** Time in seconds since the last interaction with the known leader. Since version `2.10.0`. */
  leader_idle?: number;
}
