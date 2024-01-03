import { ErrorObjectTrace } from './ErrorObjectTrace';
import { ErrorObjectUnpacked } from './ErrorObjectUnpacked';

/**
 * An object that defines an error. error_object is returned by the following methods:
 * - `box.error.new()`
 * - `box.error.last()`
 */
export interface ErrorObject {
  /** Get error details that may include an error code, type, message, and trace. */
  unpack(): ErrorObjectUnpacked;

  /** Raise the current error. */
  raise(): void;

  /**
   * Since: `2.4.1`.
   *
   * Set the previous error for the current one.
   * @param error An error object.
   */
  set_prev(error: ErrorObject): void;

  /**
   * Since: `2.4.1`.
   *
   * Get the previous error for the current one.
   */
  prev?: ErrorObject;

  /** The error code. This attribute may return a custom error code or a Tarantool error code. */
  code: number;

  /** The error type. */
  type: string;

  /** The error message. */
  message: string;

  /** The error trace. */
  trace?: ErrorObjectTrace[];

  /** If the error is a system error (for example, a socket or file IO failure), returns a C standard error number. */
  errno?: number;

  /**
   * Since: `2.10.0`.
   *
   * Returns the box.info.ro_reason value at the moment of throwing the `box.error.READONLY` error.
   *
   * The following values may be returned:
   * - `election` if the instance has box.cfg.election_mode set to a value other than `off` and this instance is not a leader.
   * In this case, `error_object` may include the following attributes: `state`, `leader_id`, `leader_uuid`, and `term`.
   * - `synchro` if the synchronous queue has an owner that is not the given instance.
   * This error usually happens if synchronous replication is used and another instance is `called box.ctl.promote()`.
   * In this case, `error_object` may include the `queue_owner_id`, `queue_owner_uuid`, and `term` attributes.
   * - `config` if `the box.cfg.read_only` is set to true.
   * - `orphan` if the instance is in the orphan state.
   *
   * Note: If multiple reasons are true at the same time, then only one is returned in the following order of preference:
   * `election`, `synchro`, `config`, `orphan`.
   */
  reason?: string;

  /**
   * Since: `2.10.0`/
   *
   * For the `box.error.READONLY` error, returns the current state of a replica set node in regards to leader election (see `box.info.election.state`).
   * This attribute presents if the error reason is `election`.
   */
  state?: string;

  /**
   * Since: `2.10.0`.
   *
   * For the `box.error.READONLY` error, returns a numeric identifier (`box.info.id`) of the replica set leader.
   * This attribute may present if the error reason is `election`.
   */
  leader_id?: number;

  /**
   * Since: `2.10.0`.
   *
   * For the `box.error.READONLY` error, returns a globally unique identifier (`box.info.uuid`) of the replica set leader.
   * This attribute may present if the error reason is `election`.
   */
  leader_uuid?: string;

  /**
   * Since: `2.10.0`.
   *
   * For the `box.error.READONLY` error, returns a numeric identifier (`box.info.id`) of the synchronous queue owner.
   * This attribute may present if the error reason is `synchro`.
   */
  queue_owner_id?: number;

  /**
   * Since: `2.10.0`.
   *
   * For the `box.error.READONLY` error, returns a globally unique identifier (`box.info.uuid`) of the synchronous queue owner.
   * This attribute may present if the error reason is `synchro`.
   */
  queue_owner_uuid?: string;

  /**
   * Since: `2.10.0`.
   *
   * For the `box.error.READONLY` error, returns the current election term (see `box.info.election.term`).
   * This attribute may present if the error reason is `election` or `synchro`.
   */
  term?: number;
}
