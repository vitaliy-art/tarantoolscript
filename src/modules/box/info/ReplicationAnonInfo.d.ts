export interface ReplicationAnonInfo {
  /** Number of anonymous replicas following the current instance. */
  count: number;

  (this: void): LuaTable<string, {
    id: number;
    uuid: string;
    lsn: number;
    downstream: {
      status: string;
      idle: number;
      vclock: LuaTable<number, number>;
    }
  }>
}
