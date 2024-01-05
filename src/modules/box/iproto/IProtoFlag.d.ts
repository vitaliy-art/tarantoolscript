export interface IProtoFlag {
  /** Set if this is the last message for a transaction which cannot be completed immediately. */
  WAIT_SYNC: number;

  /** Set if this is the last message for a transaction. */
  COMMIT: number;

  /** Set if this is the last message for a synchronous transaction. */
  WAIT_ACK: number;
}
