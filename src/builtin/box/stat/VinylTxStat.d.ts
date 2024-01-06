export interface VinylTxStat {
  /** Counts conflicts that caused a transaction to roll back. */
  conflict: number;

  /**
   * he count of commits (successful transaction ends).
   * It includes implicit commits, for example any insert causes a commit unless it is within a begin-end block.
   */
  commit: number;

  /**
   * The count of rollbacks (unsuccessful transaction ends).
   * This is not merely a count of explicit `box.rollback()` requests – it includes requests that ended in errors.
   * For example, after an attempted insert request that causes a “Duplicate key exists in unique index” error, `tx.rollback` is incremented.
   */
  rollback: number;

  /** Will usually be 0. */
  statements: number;

  /** The number of transactions that are currently running. */
  transactions: number;

  /** The number of gap locks that are outstanding during execution of a request. */
  gap_locks: number;

  /** Shows whether a transaction has entered a read-only state to avoid conflict temporarily. This will usually be 0. */
  read_views: number;
}
