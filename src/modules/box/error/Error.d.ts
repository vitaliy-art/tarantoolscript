import { ErrorObject } from './ErrorObject';

/**
 * The `box.error` submodule can be used to work with errors in your application.
 * For example, you can get the information about the last error raised by Tarantool or raise custom errors manually.
 *
 * The difference between raising an error using `box.error` and a Lua’s built-in error function is that when the error reaches the client,
 * its error code is preserved. In contrast, a Lua error would always be presented to the client as `ER_PROC_LUA`.
 *
 * @noSelf
 */
export interface Error {
  /** Raise the last error. */
  (this: void): void;

  /**
   * Raise the error defined by `error_object`.
   * @param error An error object.
   */
  (error: ErrorObject): void;

  /**
   * Raise the error defined by the specified parameters.
   *
   * Parameters:
   * - `reason` (`string`) – an error description.
   * - `code` (`integer`) – (optional) a numeric code for this error.
   * - `type` (`string`) – (optional) an error type.
   */
  (parameters: { reason: string, code?: number, type?: string }): void;

  /**
   * Create an error object with the specified parameters.
   *
   * Parameters:
   * `reason` (`string`) – an error description.
   * `code` (`integer`) – (optional) a numeric code for this error.
   * `type` (`string`) – (optional) an error type.
   *
   * @customName new
   */
  _new(parameters: { reason: string, code?: number, type?: string }): ErrorObject;

  /**
   * Raise the error defined by the specified type and description.
   *
   * @param type An error type.
   * @param reason An error description.
   * @param args Description arguments.
   */
  (type: string, reason: string, ...args: unknown[]): void;

  /**
   * Create an error object with the specified type and description.
   * @param type An error type.
   * @param reason An error description.
   * @param args Description arguments.
   *
   * @customName new
   */
  _new(type: string, reason: string, ...args: unknown[]): ErrorObject;

  /**
   * Raise a predefined Tarantool error specified by its identifier. You can see all Tarantool errors in the errcode.h file.
   *
   * @param code A pre-defined error identifier; Lua constants that correspond to those Tarantool errors are defined as members of `box.error`,
   * for example, `box.error.NO_SUCH_USER == 45`.
   * @param args Description arguments.
   */
  (code: number, ...args: unknown[]): void;

  /**
   * Create a predefined Tarantool error specified by its identifier. You can see all Tarantool errors in the errcode.h file.
   * @param code A pre-defined error identifier; Lua constants that correspond to those Tarantool errors are defined as members of `box.error`,
   * for example, `box.error.NO_SUCH_USER == 45`.
   * @param args Description arguments.
   *
   * @customName new
   */
  _new(code: number, ...args: unknown[]): void;

  /** Get the last raised error. */
  last(): ErrorObject?;

  /** Clear the errors. */
  clear(): void;

  /**
   * Since: `2.4.1`.
   *
   * Set the specified error as the last system error explicitly. This error is returned by `box.error.last()`.
   * @param error An error object.
   */
  set(error: ErrorObject): void;

  ER_UNKNOWN: void;
	ER_ILLEGAL_PARAMS: void;
	ER_MEMORY_ISSUE: void;
	ER_TUPLE_FOUND: void;
	ER_TUPLE_NOT_FOUND: void;
	ER_UNSUPPORTED: void;
	ER_NONMASTER: void;
	ER_READONLY: void;
	ER_INJECTION: void;
	ER_CREATE_SPACE: void;
	ER_SPACE_EXISTS: void;
	ER_DROP_SPACE: void;
	ER_ALTER_SPACE: void;
	ER_INDEX_TYPE: void;
	ER_MODIFY_INDEX: void;
	ER_LAST_DROP: void;
	ER_TUPLE_FORMAT_LIMIT: void;
	ER_DROP_PRIMARY_KEY: void;
	ER_KEY_PART_TYPE: void;
	ER_EXACT_MATCH: void;
	ER_INVALID_MSGPACK: void;
	ER_PROC_RET: void;
	ER_TUPLE_NOT_ARRAY: void;
	ER_FIELD_TYPE: void;
	ER_INDEX_PART_TYPE_MISMATCH: void;
	ER_UPDATE_SPLICE: void;
	ER_UPDATE_ARG_TYPE: void;
	ER_FORMAT_MISMATCH_INDEX_PART: void;
	ER_UNKNOWN_UPDATE_OP: void;
	ER_UPDATE_FIELD: void;
	ER_FUNCTION_TX_ACTIVE: void;
	ER_KEY_PART_COUNT: void;
	ER_PROC_LUA: void;
	ER_NO_SUCH_PROC: void;
	ER_NO_SUCH_TRIGGER: void;
	ER_NO_SUCH_INDEX_ID: void;
	ER_NO_SUCH_SPACE: void;
	ER_NO_SUCH_FIELD_NO: void;
	ER_EXACT_FIELD_COUNT: void;
	ER_FIELD_MISSING: void;
	ER_WAL_IO: void;
	ER_MORE_THAN_ONE_TUPLE: void;
	ER_ACCESS_DENIED: void;
	ER_CREATE_USER: void;
	ER_DROP_USER: void;
	ER_NO_SUCH_USER: void;
	ER_USER_EXISTS: void;
	ER_CREDS_MISMATCH: void;
	ER_UNKNOWN_REQUEST_TYPE: void;
	ER_UNKNOWN_SCHEMA_OBJECT: void;
	ER_CREATE_FUNCTION: void;
	ER_NO_SUCH_FUNCTION: void;
	ER_FUNCTION_EXISTS: void;
	ER_BEFORE_REPLACE_RET: void;
	ER_MULTISTATEMENT_TRANSACTION: void;
	ER_TRIGGER_EXISTS: void;
	ER_USER_MAX: void;
	ER_NO_SUCH_ENGINE: void;
	ER_RELOAD_CFG: void;
	ER_CFG: void;
	ER_SAVEPOINT_EMPTY_TX: void;
	ER_NO_SUCH_SAVEPOINT: void;
	ER_UNKNOWN_REPLICA: void;
	ER_REPLICASET_UUID_MISMATCH: void;
	ER_INVALID_UUID: void;
	ER_REPLICASET_UUID_IS_RO: void;
	ER_INSTANCE_UUID_MISMATCH: void;
	ER_REPLICA_ID_IS_RESERVED: void;
	ER_INVALID_ORDER: void;
	ER_MISSING_REQUEST_FIELD: void;
	ER_IDENTIFIER: void;
	ER_DROP_FUNCTION: void;
	ER_ITERATOR_TYPE: void;
	ER_REPLICA_MAX: void;
	ER_INVALID_XLOG: void;
	ER_INVALID_XLOG_NAME: void;
	ER_INVALID_XLOG_ORDER: void;
	ER_NO_CONNECTION: void;
	ER_TIMEOUT: void;
	ER_ACTIVE_TRANSACTION: void;
	ER_CURSOR_NO_TRANSACTION: void;
	ER_CROSS_ENGINE_TRANSACTION: void;
	ER_NO_SUCH_ROLE: void;
	ER_ROLE_EXISTS: void;
	ER_CREATE_ROLE: void;
	ER_INDEX_EXISTS: void;
	ER_SESSION_CLOSED: void;
	ER_ROLE_LOOP: void;
	ER_GRANT: void;
	ER_PRIV_GRANTED: void;
	ER_ROLE_GRANTED: void;
	ER_PRIV_NOT_GRANTED: void;
	ER_ROLE_NOT_GRANTED: void;
	ER_MISSING_SNAPSHOT: void;
	ER_CANT_UPDATE_PRIMARY_KEY: void;
	ER_UPDATE_INTEGER_OVERFLOW: void;
	ER_GUEST_USER_PASSWORD: void;
	ER_TRANSACTION_CONFLICT: void;
	ER_UNSUPPORTED_PRIV: void;
	ER_LOAD_FUNCTION: void;
	ER_FUNCTION_LANGUAGE: void;
	ER_RTREE_RECT: void;
	ER_PROC_C: void;
	ER_UNKNOWN_RTREE_INDEX_DISTANCE_TYPE: void;
	ER_PROTOCOL: void;
	ER_UPSERT_UNIQUE_SECONDARY_KEY: void;
	ER_WRONG_INDEX_RECORD: void;
	ER_WRONG_INDEX_PARTS: void;
	ER_WRONG_INDEX_OPTIONS: void;
	ER_WRONG_SCHEMA_VERSION: void;
	ER_MEMTX_MAX_TUPLE_SIZE: void;
	ER_WRONG_SPACE_OPTIONS: void;
	ER_UNSUPPORTED_INDEX_FEATURE: void;
	ER_VIEW_IS_RO: void;
	ER_NO_TRANSACTION: void;
	ER_SYSTEM: void;
	ER_LOADING: void;
	ER_CONNECTION_TO_SELF: void;
	ER_KEY_PART_IS_TOO_LONG: void;
	ER_COMPRESSION: void;
	ER_CHECKPOINT_IN_PROGRESS: void;
	ER_SUB_STMT_MAX: void;
	ER_COMMIT_IN_SUB_STMT: void;
	ER_ROLLBACK_IN_SUB_STMT: void;
	ER_DECOMPRESSION: void;
	ER_INVALID_XLOG_TYPE: void;
	ER_ALREADY_RUNNING: void;
	ER_INDEX_FIELD_COUNT_LIMIT: void;
	ER_LOCAL_INSTANCE_ID_IS_READ_ONLY: void;
	ER_BACKUP_IN_PROGRESS: void;
	ER_READ_VIEW_ABORTED: void;
	ER_INVALID_INDEX_FILE: void;
	ER_INVALID_RUN_FILE: void;
	ER_INVALID_VYLOG_FILE: void;
	ER_CASCADE_ROLLBACK: void;
	ER_VY_QUOTA_TIMEOUT: void;
	ER_PARTIAL_KEY: void;
	ER_TRUNCATE_SYSTEM_SPACE: void;
	ER_LOAD_MODULE: void;
	ER_VINYL_MAX_TUPLE_SIZE: void;
	ER_WRONG_DD_VERSION: void;
	ER_WRONG_SPACE_FORMAT: void;
	ER_CREATE_SEQUENCE: void;
	ER_ALTER_SEQUENCE: void;
	ER_DROP_SEQUENCE: void;
	ER_NO_SUCH_SEQUENCE: void;
	ER_SEQUENCE_EXISTS: void;
	ER_SEQUENCE_OVERFLOW: void;
	ER_NO_SUCH_INDEX_NAME: void;
	ER_SPACE_FIELD_IS_DUPLICATE: void;
	ER_CANT_CREATE_COLLATION: void;
	ER_WRONG_COLLATION_OPTIONS: void;
	ER_NULLABLE_PRIMARY: void;
	ER_NO_SUCH_FIELD_NAME_IN_SPACE: void;
	ER_TRANSACTION_YIELD: void;
	ER_NO_SUCH_GROUP: void;
	ER_SQL_BIND_VALUE: void;
	ER_SQL_BIND_TYPE: void;
	ER_SQL_BIND_PARAMETER_MAX: void;
	ER_SQL_EXECUTE: void;
	ER_UPDATE_DECIMAL_OVERFLOW: void;
	ER_SQL_BIND_NOT_FOUND: void;
	ER_ACTION_MISMATCH: void;
	ER_VIEW_MISSING_SQL: void;
	ER_FOREIGN_KEY_CONSTRAINT: void;
	ER_NO_SUCH_MODULE: void;
	ER_NO_SUCH_COLLATION: void;
	ER_CREATE_FK_CONSTRAINT: void;
	ER_DROP_FK_CONSTRAINT: void;
	ER_NO_SUCH_CONSTRAINT: void;
	ER_CONSTRAINT_EXISTS: void;
	ER_SQL_TYPE_MISMATCH: void;
	ER_ROWID_OVERFLOW: void;
	ER_DROP_COLLATION: void;
	ER_ILLEGAL_COLLATION_MIX: void;
	ER_SQL_NO_SUCH_PRAGMA: void;
	ER_SQL_CANT_RESOLVE_FIELD: void;
	ER_INDEX_EXISTS_IN_SPACE: void;
	ER_INCONSISTENT_TYPES: void;
	ER_SQL_SYNTAX_WITH_POS: void;
	ER_SQL_STACK_OVERFLOW: void;
	ER_SQL_SELECT_WILDCARD: void;
	ER_SQL_STATEMENT_EMPTY: void;
	ER_SQL_KEYWORD_IS_RESERVED: void;
	ER_SQL_SYNTAX_NEAR_TOKEN: void;
	ER_SQL_UNKNOWN_TOKEN: void;
	ER_SQL_PARSER_GENERIC: void;
	ER_SQL_ANALYZE_ARGUMENT: void;
	ER_SQL_COLUMN_COUNT_MAX: void;
	ER_HEX_LITERAL_MAX: void;
	ER_INT_LITERAL_MAX: void;
	ER_SQL_PARSER_LIMIT: void;
	ER_INDEX_DEF_UNSUPPORTED: void;
	ER_CK_DEF_UNSUPPORTED: void;
	ER_MULTIKEY_INDEX_MISMATCH: void;
	ER_CREATE_CK_CONSTRAINT: void;
	ER_CK_CONSTRAINT_FAILED: void;
	ER_SQL_COLUMN_COUNT: void;
	ER_FUNC_INDEX_FUNC: void;
	ER_FUNC_INDEX_FORMAT: void;
	ER_FUNC_INDEX_PARTS: void;
	ER_NO_SUCH_FIELD_NAME: void;
	ER_FUNC_WRONG_ARG_COUNT: void;
	ER_BOOTSTRAP_READONLY: void;
	ER_SQL_FUNC_WRONG_RET_COUNT: void;
	ER_FUNC_INVALID_RETURN_TYPE: void;
	ER_SQL_PARSER_GENERIC_WITH_POS: void;
	ER_REPLICA_NOT_ANON: void;
	ER_CANNOT_REGISTER: void;
	ER_SESSION_SETTING_INVALID_VALUE: void;
	ER_SQL_PREPARE: void;
	ER_WRONG_QUERY_ID: void;
	ER_SEQUENCE_NOT_STARTED: void;
	ER_NO_SUCH_SESSION_SETTING: void;
	ER_UNCOMMITTED_FOREIGN_SYNC_TXNS: void;
	ER_SYNC_MASTER_MISMATCH: void;
  ER_SYNC_QUORUM_TIMEOUT: void;
  ER_SYNC_ROLLBACK: void;
	ER_TUPLE_METADATA_IS_TOO_BIG: void;
	ER_XLOG_GAP: void;
	ER_TOO_EARLY_SUBSCRIBE: void;
	ER_SQL_CANT_ADD_AUTOINC: void;
	ER_QUORUM_WAIT: void;
	ER_INTERFERING_PROMOTE: void;
	ER_ELECTION_DISABLED: void;
	ER_TXN_ROLLBACK: void;
	ER_NOT_LEADER: void;
	ER_SYNC_QUEUE_UNCLAIMED: void;
	ER_SYNC_QUEUE_FOREIGN: void;
	ER_UNABLE_TO_PROCESS_IN_STREAM: void;
	ER_UNABLE_TO_PROCESS_OUT_OF_STREAM: void;
	ER_TRANSACTION_TIMEOUT: void;
	ER_ACTIVE_TIMER: void;
	ER_TUPLE_FIELD_COUNT_LIMIT: void;
	ER_CREATE_CONSTRAINT: void;
	ER_FIELD_CONSTRAINT_FAILED: void;
	ER_TUPLE_CONSTRAINT_FAILED: void;
	ER_CREATE_FOREIGN_KEY: void;
	ER_FOREIGN_KEY_INTEGRITY: void;
	ER_FIELD_FOREIGN_KEY_FAILED: void;
	ER_COMPLEX_FOREIGN_KEY_FAILED: void;
	ER_WRONG_SPACE_UPGRADE_OPTIONS: void;
	ER_NO_ELECTION_QUORUM: void;
	ER_SSL: void;
	ER_SPLIT_BRAIN: void;
	ER_OLD_TERM: void;
	ER_INTERFERING_ELECTIONS: void;
	ER_ITERATOR_POSITION: void;
	ER_DEFAULT_VALUE_TYPE: void;
	ER_UNKNOWN_AUTH_METHOD: void;
	ER_INVALID_AUTH_DATA: void;
	ER_INVALID_AUTH_REQUEST: void;
	ER_WEAK_PASSWORD: void;
	ER_OLD_PASSWORD: void;
	ER_NO_SUCH_SESSION: void;
	ER_WRONG_SESSION_TYPE: void;
	ER_PASSWORD_EXPIRED: void;
	ER_AUTH_DELAY: void;
	ER_AUTH_REQUIRED: void;
	ER_SQL_SEQ_SCAN: void;
	ER_NO_SUCH_EVENT: void;
	ER_BOOTSTRAP_NOT_UNANIMOUS: void;
	ER_CANT_CHECK_BOOTSTRAP_LEADER: void;
	ER_BOOTSTRAP_CONNECTION_NOT_TO_ALL: void;
	ER_NIL_UUID: void;
	ER_WRONG_FUNCTION_OPTIONS: void;
	ER_MISSING_SYSTEM_SPACES: void;
	ER_CLUSTER_NAME_MISMATCH: void;
	ER_REPLICASET_NAME_MISMATCH: void;
	ER_INSTANCE_NAME_DUPLICATE: void;
	ER_INSTANCE_NAME_MISMATCH: void;
	ER_SCHEMA_NEEDS_UPGRADE: void;
	ER_SCHEMA_UPGRADE_IN_PROGRESS: void;
	ER_DEPRECATED: void;
	ER_UNCONFIGURED: void;
	ER_CREATE_DEFAULT_FUNC: void;
	ER_DEFAULT_FUNC_FAILED: void;
	ER_INVALID_DEC: void;
	ER_IN_ANOTHER_PROMOTE: void;
	ER_SHUTDOWN: void;
}
