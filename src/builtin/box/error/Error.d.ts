import { ErrorCreator } from './ErrorCreator';
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
  (this: void, error: ErrorObject | number): void;

  /**
   * Raise the error defined by the specified parameters.
   *
   * Parameters:
   * - `reason` (`string`) – an error description.
   * - `code` (`integer`) – (optional) a numeric code for this error.
   * - `type` (`string`) – (optional) an error type.
   */
  (this: void, parameters: { reason: string, code?: number, type?: string }): void;

  /**
   * Raise the error defined by the specified type and description.
   *
   * @param type An error type.
   * @param reason An error description.
   * @param args Description arguments.
   */
  (this: void, type: string, reason: string, ...args: unknown[]): void;

  /**
   * Raise a predefined Tarantool error specified by its identifier. You can see all Tarantool errors in the errcode.h file.
   *
   * @param code A pre-defined error identifier; Lua constants that correspond to those Tarantool errors are defined as members of `box.error`,
   * for example, `box.error.NO_SUCH_USER == 45`.
   * @param args Description arguments.
   */
  (this: void, code: number, ...args: unknown[]): void;

  ['new']: ErrorCreator;

  /** Get the last raised error. */
  last(): ErrorObject | undefined;

  /** Clear the errors. */
  clear(): void;

  /**
   * Since: `2.4.1`.
   *
   * Set the specified error as the last system error explicitly. This error is returned by `box.error.last()`.
   * @param error An error object.
   */
  set(error: ErrorObject): void;

  UNKNOWN: number;
	ILLEGAL_PARAMS: number;
	MEMORY_ISSUE: number;
	TUPLE_FOUND: number;
	TUPLE_NOT_FOUND: number;
	UNSUPPORTED: number;
	NONMASTER: number;
	READONLY: number;
	INJECTION: number;
	CREATE_SPACE: number;
	SPACE_EXISTS: number;
	DROP_SPACE: number;
	ALTER_SPACE: number;
	INDEX_TYPE: number;
	MODIFY_INDEX: number;
	LAST_DROP: number;
	TUPLE_FORMAT_LIMIT: number;
	DROP_PRIMARY_KEY: number;
	KEY_PART_TYPE: number;
	EXACT_MATCH: number;
	INVALID_MSGPACK: number;
	PROC_RET: number;
	TUPLE_NOT_ARRAY: number;
	FIELD_TYPE: number;
	INDEX_PART_TYPE_MISMATCH: number;
	UPDATE_SPLICE: number;
	UPDATE_ARG_TYPE: number;
	FORMAT_MISMATCH_INDEX_PART: number;
	UNKNOWN_UPDATE_OP: number;
	UPDATE_FIELD: number;
	FUNCTION_TX_ACTIVE: number;
	KEY_PART_COUNT: number;
	PROC_LUA: number;
	NO_SUCH_PROC: number;
	NO_SUCH_TRIGGER: number;
	NO_SUCH_INDEX_ID: number;
	NO_SUCH_SPACE: number;
	NO_SUCH_FIELD_NO: number;
	EXACT_FIELD_COUNT: number;
	FIELD_MISSING: number;
	WAL_IO: number;
	MORE_THAN_ONE_TUPLE: number;
	ACCESS_DENIED: number;
	CREATE_USER: number;
	DROP_USER: number;
	NO_SUCH_USER: number;
	USER_EXISTS: number;
	CREDS_MISMATCH: number;
	UNKNOWN_REQUEST_TYPE: number;
	UNKNOWN_SCHEMA_OBJECT: number;
	CREATE_FUNCTION: number;
	NO_SUCH_FUNCTION: number;
	FUNCTION_EXISTS: number;
	BEFORE_REPLACE_RET: number;
	MULTISTATEMENT_TRANSACTION: number;
	TRIGGER_EXISTS: number;
	USER_MAX: number;
	NO_SUCH_ENGINE: number;
	RELOAD_CFG: number;
	CFG: number;
	SAVEPOINT_EMPTY_TX: number;
	NO_SUCH_SAVEPOINT: number;
	UNKNOWN_REPLICA: number;
	REPLICASET_UUID_MISMATCH: number;
	INVALID_UUID: number;
	REPLICASET_UUID_IS_RO: number;
	INSTANCE_UUID_MISMATCH: number;
	REPLICA_ID_IS_RESERVED: number;
	INVALID_ORDER: number;
	MISSING_REQUEST_FIELD: number;
	IDENTIFIER: number;
	DROP_FUNCTION: number;
	ITERATOR_TYPE: number;
	REPLICA_MAX: number;
	INVALID_XLOG: number;
	INVALID_XLOG_NAME: number;
	INVALID_XLOG_ORDER: number;
	NO_CONNECTION: number;
	TIMEOUT: number;
	ACTIVE_TRANSACTION: number;
	CURSOR_NO_TRANSACTION: number;
	CROSS_ENGINE_TRANSACTION: number;
	NO_SUCH_ROLE: number;
	ROLE_EXISTS: number;
	CREATE_ROLE: number;
	INDEX_EXISTS: number;
	SESSION_CLOSED: number;
	ROLE_LOOP: number;
	GRANT: number;
	PRIV_GRANTED: number;
	ROLE_GRANTED: number;
	PRIV_NOT_GRANTED: number;
	ROLE_NOT_GRANTED: number;
	MISSING_SNAPSHOT: number;
	CANT_UPDATE_PRIMARY_KEY: number;
	UPDATE_INTEGER_OVERFLOW: number;
	GUEST_USER_PASSWORD: number;
	TRANSACTION_CONFLICT: number;
	UNSUPPORTED_PRIV: number;
	LOAD_FUNCTION: number;
	FUNCTION_LANGUAGE: number;
	RTREE_RECT: number;
	PROC_C: number;
	UNKNOWN_RTREE_INDEX_DISTANCE_TYPE: number;
	PROTOCOL: number;
	UPSERT_UNIQUE_SECONDARY_KEY: number;
	WRONG_INDEX_RECORD: number;
	WRONG_INDEX_PARTS: number;
	WRONG_INDEX_OPTIONS: number;
	WRONG_SCHEMA_VERSION: number;
	MEMTX_MAX_TUPLE_SIZE: number;
	WRONG_SPACE_OPTIONS: number;
	UNSUPPORTED_INDEX_FEATURE: number;
	VIEW_IS_RO: number;
	NO_TRANSACTION: number;
	SYSTEM: number;
	LOADING: number;
	CONNECTION_TO_SELF: number;
	KEY_PART_IS_TOO_LONG: number;
	COMPRESSION: number;
	CHECKPOINT_IN_PROGRESS: number;
	SUB_STMT_MAX: number;
	COMMIT_IN_SUB_STMT: number;
	ROLLBACK_IN_SUB_STMT: number;
	DECOMPRESSION: number;
	INVALID_XLOG_TYPE: number;
	ALREADY_RUNNING: number;
	INDEX_FIELD_COUNT_LIMIT: number;
	LOCAL_INSTANCE_ID_IS_READ_ONLY: number;
	BACKUP_IN_PROGRESS: number;
	READ_VIEW_ABORTED: number;
	INVALID_INDEX_FILE: number;
	INVALID_RUN_FILE: number;
	INVALID_VYLOG_FILE: number;
	CASCADE_ROLLBACK: number;
	VY_QUOTA_TIMEOUT: number;
	PARTIAL_KEY: number;
	TRUNCATE_SYSTEM_SPACE: number;
	LOAD_MODULE: number;
	VINYL_MAX_TUPLE_SIZE: number;
	WRONG_DD_VERSION: number;
	WRONG_SPACE_FORMAT: number;
	CREATE_SEQUENCE: number;
	ALTER_SEQUENCE: number;
	DROP_SEQUENCE: number;
	NO_SUCH_SEQUENCE: number;
	SEQUENCE_EXISTS: number;
	SEQUENCE_OVERFLOW: number;
	NO_SUCH_INDEX_NAME: number;
	SPACE_FIELD_IS_DUPLICATE: number;
	CANT_CREATE_COLLATION: number;
	WRONG_COLLATION_OPTIONS: number;
	NULLABLE_PRIMARY: number;
	NO_SUCH_FIELD_NAME_IN_SPACE: number;
	TRANSACTION_YIELD: number;
	NO_SUCH_GROUP: number;
	SQL_BIND_VALUE: number;
	SQL_BIND_TYPE: number;
	SQL_BIND_PARAMETER_MAX: number;
	SQL_EXECUTE: number;
	UPDATE_DECIMAL_OVERFLOW: number;
	SQL_BIND_NOT_FOUND: number;
	ACTION_MISMATCH: number;
	VIEW_MISSING_SQL: number;
	FOREIGN_KEY_CONSTRAINT: number;
	NO_SUCH_MODULE: number;
	NO_SUCH_COLLATION: number;
	CREATE_FK_CONSTRAINT: number;
	DROP_FK_CONSTRAINT: number;
	NO_SUCH_CONSTRAINT: number;
	CONSTRAINT_EXISTS: number;
	SQL_TYPE_MISMATCH: number;
	ROWID_OVERFLOW: number;
	DROP_COLLATION: number;
	ILLEGAL_COLLATION_MIX: number;
	SQL_NO_SUCH_PRAGMA: number;
	SQL_CANT_RESOLVE_FIELD: number;
	INDEX_EXISTS_IN_SPACE: number;
	INCONSISTENT_TYPES: number;
	SQL_SYNTAX_WITH_POS: number;
	SQL_STACK_OVERFLOW: number;
	SQL_SELECT_WILDCARD: number;
	SQL_STATEMENT_EMPTY: number;
	SQL_KEYWORD_IS_RESERVED: number;
	SQL_SYNTAX_NEAR_TOKEN: number;
	SQL_UNKNOWN_TOKEN: number;
	SQL_PARSER_GENERIC: number;
	SQL_ANALYZE_ARGUMENT: number;
	SQL_COLUMN_COUNT_MAX: number;
	HEX_LITERAL_MAX: number;
	INT_LITERAL_MAX: number;
	SQL_PARSER_LIMIT: number;
	INDEX_DEF_UNSUPPORTED: number;
	CK_DEF_UNSUPPORTED: number;
	MULTIKEY_INDEX_MISMATCH: number;
	CREATE_CK_CONSTRAINT: number;
	CK_CONSTRAINT_FAILED: number;
	SQL_COLUMN_COUNT: number;
	FUNC_INDEX_FUNC: number;
	FUNC_INDEX_FORMAT: number;
	FUNC_INDEX_PARTS: number;
	NO_SUCH_FIELD_NAME: number;
	FUNC_WRONG_ARG_COUNT: number;
	BOOTSTRAP_READONLY: number;
	SQL_FUNC_WRONG_RET_COUNT: number;
	FUNC_INVALID_RETURN_TYPE: number;
	SQL_PARSER_GENERIC_WITH_POS: number;
	REPLICA_NOT_ANON: number;
	CANNOT_REGISTER: number;
	SESSION_SETTING_INVALID_VALUE: number;
	SQL_PREPARE: number;
	WRONG_QUERY_ID: number;
	SEQUENCE_NOT_STARTED: number;
	NO_SUCH_SESSION_SETTING: number;
	UNCOMMITTED_FOREIGN_SYNC_TXNS: number;
	SYNC_MASTER_MISMATCH: number;
  SYNC_QUORUM_TIMEOUT: number;
  SYNC_ROLLBACK: number;
	TUPLE_METADATA_IS_TOO_BIG: number;
	XLOG_GAP: number;
	TOO_EARLY_SUBSCRIBE: number;
	SQL_CANT_ADD_AUTOINC: number;
	QUORUM_WAIT: number;
	INTERFERING_PROMOTE: number;
	ELECTION_DISABLED: number;
	TXN_ROLLBACK: number;
	NOT_LEADER: number;
	SYNC_QUEUE_UNCLAIMED: number;
	SYNC_QUEUE_FOREIGN: number;
	UNABLE_TO_PROCESS_IN_STREAM: number;
	UNABLE_TO_PROCESS_OUT_OF_STREAM: number;
	TRANSACTION_TIMEOUT: number;
	ACTIVE_TIMER: number;
	TUPLE_FIELD_COUNT_LIMIT: number;
	CREATE_CONSTRAINT: number;
	FIELD_CONSTRAINT_FAILED: number;
	TUPLE_CONSTRAINT_FAILED: number;
	CREATE_FOREIGN_KEY: number;
	FOREIGN_KEY_INTEGRITY: number;
	FIELD_FOREIGN_KEY_FAILED: number;
	COMPLEX_FOREIGN_KEY_FAILED: number;
	WRONG_SPACE_UPGRADE_OPTIONS: number;
	NO_ELECTION_QUORUM: number;
	SSL: number;
	SPLIT_BRAIN: number;
	OLD_TERM: number;
	INTERFERING_ELECTIONS: number;
	ITERATOR_POSITION: number;
	DEFAULT_VALUE_TYPE: number;
	UNKNOWN_AUTH_METHOD: number;
	INVALID_AUTH_DATA: number;
	INVALID_AUTH_REQUEST: number;
	WEAK_PASSWORD: number;
	OLD_PASSWORD: number;
	NO_SUCH_SESSION: number;
	WRONG_SESSION_TYPE: number;
	PASSWORD_EXPIRED: number;
	AUTH_DELAY: number;
	AUTH_REQUIRED: number;
	SQL_SEQ_SCAN: number;
	NO_SUCH_EVENT: number;
	BOOTSTRAP_NOT_UNANIMOUS: number;
	CANT_CHECK_BOOTSTRAP_LEADER: number;
	BOOTSTRAP_CONNECTION_NOT_TO_ALL: number;
	NIL_UUID: number;
	WRONG_FUNCTION_OPTIONS: number;
	MISSING_SYSTEM_SPACES: number;
	CLUSTER_NAME_MISMATCH: number;
	REPLICASET_NAME_MISMATCH: number;
	INSTANCE_NAME_DUPLICATE: number;
	INSTANCE_NAME_MISMATCH: number;
	SCHEMA_NEEDS_UPGRADE: number;
	SCHEMA_UPGRADE_IN_PROGRESS: number;
	DEPRECATED: number;
	UNCONFIGURED: number;
	CREATE_DEFAULT_FUNC: number;
	DEFAULT_FUNC_FAILED: number;
	INVALID_DEC: number;
	IN_ANOTHER_PROMOTE: number;
	SHUTDOWN: number;
}
