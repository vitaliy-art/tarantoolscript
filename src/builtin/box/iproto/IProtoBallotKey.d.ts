export interface IProtoBallotKey {
  /** `MP_BOOL`	True if the instance is configured as read_only. Since `2.6.1` */
  IS_RO_CFG: number;

  /** `MP_MAP`	Current vclock of the instance */
  VCLOCK: number;

  /** `MP_MAP`	Vclock of the instance’s oldest WAL entry */
  GC_VCLOCK: number;

  /** `MP_BOOL`	True if the instance is not writable: configured as read_only, has orphan status, or is a Raft follower. Since `2.6.1` */
  IS_RO: number;

  /** `MP_BOOL`	True if the replica is anonymous. Corresponds to box.cfg.replication_anon. Since `2.7.1` */
  IS_ANON: number;

  /** `MP_BOOL`	True if the instance has finished its bootstrap or recovery process. Since `2.7.3`, `2.8.2`, `2.10.0` */
  IS_BOOTED: number;

  /** `MP_BOOL`	True if box.cfg.election_mode is candidate or manual. Since v. `2.7.3` and `2.8.2` */
  CAN_LEAD: number;

  /** `MP_STR`	UUID of the bootstrap leader. The UUID is encoded as a 36-byte string. Since v. `2.11` */
  BOOTSTRAP_LEADER_UUID: number;

  /** `MP_ARRAY`	An array of `MP_STR` elements that contains the UUIDs of members registered in the replica set.
   * Each UUID is encoded as a 36-byte string. Since v. `2.11` */
  REGISTERED_REPLICA_UUIDS: number;
}
