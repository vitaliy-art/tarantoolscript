export interface IProtoRaftKey {
  /** `MP_UINT`	RAFT term on an instance. The key is only used for requests with the `IPROTO_RAFT` type. */
  TERM: number;

  /** `MP_UINT`	Instance vote in the current term (if any) */
  VOTE: number;

  /** `MP_UINT`	RAFT state. Possible values: 1 – `follower`, 2 – `candidate`, 3 – `leader` */
  STATE: number;

  /** `MP_MAP`	Current vclock of the instance */
  VCLOCK: number;

  /** `MP_UINT`	Current leader node ID as seen by the node that issues the request Since version `2.10.0` */
  LEADER_ID: number;

  /** `MP_BOOL`	True if the node has a direct connection to the leader node. Since version `2.10.0` */
  IS_LEADER_SEEN: number;
}
