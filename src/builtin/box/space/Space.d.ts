import { SpaceObject } from './SpaceObject';

export interface Space extends LuaTable<string | number, SpaceObject> {
  /** _cluster is a system space for support of the replication feature. */
  _cluster: SpaceObject;

  /**
   * A system space containing functions created using `box.schema.func.create()`.
   * If a function’s definition is specified in the `body` option, this function is persistent.
   * In this case, its definition is stored in a snapshot and can be recovered if the server restarts.
   */
  _func: SpaceObject;

  /** The system space view for `_func`. */
  _vfunc: SpaceObject;

  /**
   * `_index` is a system space.
   *
   * Tuples in this space contain the following fields:
   * - `id` (= id of space),
   * - `iid` (= index number within space),
   * - `name`,
   * - `type`,
   * - `opts` (e.g. unique option), [tuple-field-no, tuple-field-type …].
   */
  _index: SpaceObject;

  /** `_vindex` is the system space view for `_index`. */
  _vindex: SpaceObject;

  /**
   * `_priv` is a system space where privileges are stored.
   *
   * Tuples in this space contain the following fields:
   * - the numeric id of the user who gave the privilege (“grantor_id”),
   * - the numeric id of the user who received the privilege (“grantee_id”),
   * - the type of object: ‘space’, ‘index’, ‘function’, ‘sequence’, ‘user’, ‘role’, or ‘universe’,
   * - the numeric id of the object,
   * - the type of operation: “read” = 1, “write” = 2, “execute” = 4, “create” = 32, “drop” = 64, “alter” = 128, or a combination such as “read,write,execute”.
   */
  _priv: SpaceObject;

  /** `_vpriv` is the system space view for `_priv`. */
  _vpriv: SpaceObject;

  /**
   * `_schema` is a system space.
   *
   * This space contains the following tuples:
   * - `version` tuple with version information for this Tarantool instance,
   * - `cluster` tuple with the instance’s replica set ID,
   * - `max_id` tuple with the maximal space ID,
   * - `once...` tuples that correspond to specific `box.once()` blocks from the instance’s initialization file.
   * The first field in these tuples contains the `key` value from the corresponding `box.once()` block prefixed with ‘once’ (e.g. `oncehello`),
   * so you can easily find a tuple that corresponds to a specific `box.once()` block.
   */
  _schema: SpaceObject;

  /**
   * _sequence is a system space for support of the sequence feature.
   * It contains persistent information that was established by `box.schema.sequence.create()` or `sequence_object:alter()`.
   */
  _sequence: SpaceObject;

  /** The system space view for `_sequence`. */
  _vsequence: SpaceObject;

  /**
   * `_sequence_data` is a system space for support of the sequence feature.
   *
   * Each tuple in `_sequence_data` contains two fields:
   * - the id of the sequence, and
   * - the last value that the sequence generator returned (non-persistent information).
   *
   * There is no guarantee that this space will be updated immediately after every data-change request.
   */
  _sequence_data: SpaceObject;

  /**
   * `_space` is a system space. It contains all spaces hosted on the current Tarantool instance, both system ones and created by users.
   *
   * Tuples in this space contain the following fields:
   * - `id`,
   * - `owner` (= id of user who owns the space),
   * - `name`, `engine`, `field_count`,
   * - `flags` (e.g. temporary),
   * - `format` (as made by a format clause).
   *
   * These fields are established by `box.schema.space.create()`.
   */
  _space: SpaceObject;

  /** `_vspace` is the system space view for `_space`. */
  _vspace: SpaceObject;

  /**
   * `_space_sequence` is a system space. It contains connections between spaces and sequences.
   *
   * Tuples in this space contain the following fields:
   * - `id` (`unsigned`) – space id
   * - `sequence_id` (`unsigned`) – id of the attached sequence
   * - `is_generated` (`boolean`) – true if the sequence was created automatically via a `space:create_index('pk', {sequence = true})` call
   * - `field` (`unsigned`) – id of the space field to which the sequence is attached.
   * - `path` (`string`) – path to the data within the field that is set using the attached sequence.
   */
  _space_sequence: SpaceObject;

  /** `_vspace_sequence` is the system space view for `_space_sequence`. */
  _vspace_sequence: SpaceObject;

  /**
   * `_user` is a system space where user-names and password hashes are stored.
   *
   * Tuples in this space contain the following fields:
   * - a numeric id of the tuple (“id”)
   * - a numeric id of the tuple’s creator
   * - a name
   * - a type: ‘user’ or ‘role’
   * - (optional) a password hash
   * - (optional) an array of previous authentication data
   * - (optional) a timestamp of the last password update
   *
   * Warning:
   *
   * To change tuples in the _user space, do not use ordinary `box.space` functions for insert, update, or delete.
   * The `_user` space is special, so there are special functions that have appropriate error checking.
   * To work with `_user` space use `box.schema.user` functions.
   */
  _user: SpaceObject;

  /** `_vuser` is the system space view for `_user`. */
  _vuser: SpaceObject;

  /**
   * `_ck_constraint` is a system space where check constraints are stored.
   *
   * Tuples in this space contain the following fields:
   * - the numeric id of the space (“space_id”),
   * - the name,
   * - whether the check is deferred (“is_deferred”),
   * - the language of the expression, such as ‘SQL’,
   * - the expression (“code”)
   */
  _ck_constraint: SpaceObject;

  /**
   * `_collation` is a system space with a list of collations. There are over 270 built-in collations and users may add more.
   */
  _collation: SpaceObject;

  /** `_vcollation` is the system space view for `_collation`. */
  _vcollation: SpaceObject;

  /**
   * A temporary system space with settings that affect behavior, particularly SQL behavior, for the current session.
   * It uses a special engine named ‘service’. Every ‘service’ tuple is created on the fly, that is,
   * new tuples are made every time `_session_settings` is accessed. Every settings tuple has two fields: `name` (the primary key) and `value`.
   *
   * The tuples’ names and default values are:
   * - `sql_default_engine`: default storage engine for new SQL tables. Default: `memtx`.
   * - `sql_full_column_names`: use full column names in SQL result set metadata. Default: `false`.
   * - `sql_full_metadata`: whether SQL result set metadata includes more than just name and type. Default:`false`.
   * - `sql_parser_debug`: show parser steps for following statements. Default: `false`.
   * - `sql_recursive_triggers`: whether a triggered statement can activate a trigger. Default: `true`.
   * - `sql_reverse_unordered_selects`: return result rows in reverse order if there is no ORDER BY clause. Default: `false`.
   * - `sql_select_debug`: show execution steps during SELECT. Default:`false`.
   * - `sql_seq_scan`: allow sequential scans in SQL SELECT. Default: `true`.
   * - `sql_vdbe_debug`: for internal use. Default: `false`.
   * - `sql_defer_foreign_keys` (removed in 2.11.0): whether foreign-key checks can wait till commit. Default: `false`.
   * - `error_marshaling_enabled` (removed in 2.10.0): whether error objects have a special structure. Default: `false`.
   *
   * Three requests are possible: `select`, `get` and `update`.
   */
  _session_settings: SpaceObject;
}
