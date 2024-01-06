export interface IProtoKey {
  /** `MP_UINT`	Binary protocol version supported by the client */
  VERSION: number;

  /** `MP_ARRAY`	Supported binary protocol features */
  FEATURES: number;

  /** `MP_UINT`	Unique request identifier */
  SYNC: number;

  /** `MP_UINT`	Version of the database schema */
  SCHEMA_VERSION; number;

  /** `MP_DOUBLE`	Time in seconds since the Unix epoch */
  TIMESTAMP: number;

  /** `MP_UINT`	Request type or response type */
  REQUEST_TYPE: number;

  /** `MP_ERROR`	Error response */
  ERROR: number;

  /** `MP_STR`	Error as a string */
  ERROR_24: number;

  /** `MP_OBJECT`	Data passed in the transaction. Can be empty. Used in all requests and responses */
  DATA: number;

  /** `MP_UINT`	Space identifier */
  SPACE_ID: number;

  /** `MP_UINT`	Index identifier */
  INDEX_ID: number;

  /** `MP_ARRAY`	Tuple, arguments, operations, or authentication pair */
  TUPLE: number;

  /** `MP_ARRAY`	Array of index keys in the request. See `space_object:select()` */
  KEY: number;

  /** `MP_UINT`	Maximum number of tuples in the space */
  LIMIT: number;

  /** `MP_UINT`	Number of tuples to skip in the select */
  OFFSET: number;

  /** `MP_UINT`	IteratorType (at example, `box.index.EQ`) */
  ITERATOR: number;

  /** `MP_UINT`	Indicates whether the first field number is 1 or 0 */
  INDEX_BASE: number;

  /** `MP_STR`	Name of the called function. Used in `IPROTO_CALL` */
  FUNCTION_NAME: number;

  /** `MP_STR`	User name. Used in `IPROTO_AUTH` */
  USER_NAME: number;

  /** `MP_ARRAY`	Array of operations. Used in `IPROTO_UPSERT` */
  OPS: number;

  /** `MP_STR`	Command argument. Used in `IPROTO_EVAL` */
  EXPR: number;

  /** `MP_STR`	A protocol used to generate user authentication data */
  AUTH_TYPE: number;

  /** `MP_STR`	The position of a tuple after which `space_object:select()` starts the search */
  AFTER_POSITION: number;

  /** `MP_ARRAY`	A tuple after which `space_object:select()` starts the search */
  AFTER_TUPLE: number;

  /** `MP_BOOL`	If true, `space_object:select()` returns the position of the last selected tuple */
  FETCH_POSITION: number;

  /** `MP_STR`	If `IPROTO_FETCH_POSITION` is true, returns a base64-encoded string representing the position of the last selected tuple */
  POSITION: number;

  /** `MP_UINT`	Unique stream identifier */
  STREAM_ID: number;

  /** `MP_DOUBLE`	Timeout in seconds, after which the transactions are rolled back */
  TIMEOUT: number;

  /** `MP_UINT`	Transaction isolation level */
  TXN_ISOLATION: number;

  /** `MP_INT`	Replica ID */
  REPLICA_ID: number;

  /** `MP_STR`	Instance UUID */
  INSTANCE_UUID: number;

  /** `MP_MAP`	The instance’s vclock */
  VCLOCK: number;

  /** `MP_UINT`	ID of the vclock synchronization request. Since `2.11` */
  VCLOCK_SYNC: number;

  /** `MP_STR`	Before Tarantool version `2.11`, `IPROTO_REPLICASET_UUID` was called `IPROTO_CLUSTER_UUID` */
  REPLICASET_UUID: number;

  /** `MP_UINT`	Log sequence number of the transaction */
  LSN: number;

  /** `MP_UINT`	Transaction sequence number */
  TSN: number;

  /** `MP_UINT`	Auxiliary data to indicate the last transaction message state. Included in the header of any DML request that is recorded in the WAL. */
  FLAGS: number;

  /** `MP_UINT`	Tarantool version of the subscribing node, in a compact representation */
  SERVER_VERSION: number;

  /** `MP_BOOL`	Optional key used in `SUBSCRIBE` request. True if the subscribing replica is anonymous */
  REPLICA_ANON: number;

  /** `MP_ARRAY`	Optional key used in `SUBSCRIBE` request, followed by an array of ids of instances whose rows won’t be relayed to the replica. Since v. `2.10.0` */
  ID_FILTER: number;

  /** `MP_UINT`	RAFT term on an instance */
  TERM: number;

  /** `MP_STR`	Event key name */
  EVENT_KEY: number;

  /** `MP_OBJECT`	Event data sent to a remote watcher */
  EVENT_DATA: number;

  /** `MP_STR`	SQL statement text */
  SQL_TEXT: number;

  /** `MP_INT`	Identifier of the prepared statement */
  STMT_ID: number;

  /** `MP_ARRAY`	SQL transaction options. Usually empty */
  OPTIONS: number;

  /** `MP_ARRAY` of MP_MAP items	SQL transaction metadata */
  METADATA: number;

  /** `MP_ARRAY`	Bind variable names and types */
  BIND_METADATA: number;

  /** `MP_INT`	Number of parameters to bind */
  BIND_COUNT: number;

  /** `MP_ARRAY`	Parameter values to match ? placeholders or :name placeholders */
  SQL_BIND: number;

  /** `MP_MAP`	Additional SQL-related parameters */
  SQL_INFO: number;

  /** `MP_UINT`	Number of changed rows. Is 0 for statements that do not change rows. Nested in `IPROTO_SQL_INFO` */
  INFO_ROW_COUNT: number;

  /** `MP_ARRAY` of `MP_UINT` items.	New primary key value (or values) for an `INSERT` in a table defined with `PRIMARY KEY AUTOINCREMENT`. Nested in `IPROTO_SQL_INFO` */
  INFO_AUTO_INCREMENT_IDS: number;
}
