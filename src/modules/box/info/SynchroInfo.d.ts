export interface SynchroInfo {
  queue: {
    /**
     * Since version `2.10.0`.
     *
     * ID of the replica that owns the synchronous transaction queue.
     * Once an owner instance appears, all other instances become read-only.
     * If the owner field is `0`, then every instance may be writable, but they can’t create any synchronous transactions.
     * To claim or reclaim the queue, use `box.ctl.promote()` on the instance that you want to promote.
     * With elections enabled, an instance runs `box.ctl.promote()` command automatically after winning the elections.
     * To clear the ownership, call `box.ctl.demote()` on the synchronous queue owner.
     */
    owner: number;

    /**
     * Since version `2.10.0`.
     *
     * Current queue term. It contains the term of the last `PROMOTE` request.
     * Usually, it is equal to `box.info.election.term`.
     * However, the queue term value may be less than the election term.
     * It can happen when a new round of elections has started, but no instance has been promoted yet.
     */
    term: number;

    /** The number of entries that are currently waiting in the queue. */
    len: number;

    /**
     * Since version `2.10.0`.
     *
     * The boolean value is `true` when the instance is processing or writing some system request that modifies the queue
     * (for example, `PROMOTE`, `CONFIRM`, or `ROLLBACK`).
     * Until the request is complete, any other incoming synchronous transactions and system requests will be delayed.
     */
    busy: boolean;
  };

  /**
   * The resulting value of the replication_synchro_quorum configuration option.
   * Since version `2.5.3`, the option can be set as a dynamic formula.
   * In this case, the value of the quorum member depends on the current number of replicas.
   */
  quorum: number;
}
