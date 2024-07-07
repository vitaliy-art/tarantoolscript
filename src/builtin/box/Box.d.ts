import { Backup } from './backup';
import { Config } from './cfg';
import { Ctl } from './ctl';
import { Error } from './error';
import { Index } from './idx';
import { Info } from './info';
import { IProto } from './iproto';
import { ReadView } from './read_view';
import { Runtime, Slab } from './slab';
import { Schema } from './schema';
import { Session } from './session';
import { Space } from './space';
import { Stat } from './stat';
import { Tuple } from './tuple';
import { EventWatcher } from './EventWatcher';
import { TransactionsCommander } from './TransactionsCommander';
import { SqlCommander } from './SqlCommander';

/**
 * @noSelf
 */
declare interface Box extends AnyTable, TransactionsCommander, SqlCommander, EventWatcher {
  /**
   * There are some major problems with using Lua nil values in tables.
   * For example: you can’t correctly assess the length of a table that is not a sequence.
   *
   * To avoid this problem, use Tarantool’s `box.NULL` constant instead of `nil`.
   * `box.NULL` is a placeholder for a `nil` value in tables to preserve a key without a value.
   */
  NULL: undefined;

  /**
   * Execute a function, provided it has not been executed before.
   * A passed value is checked to see whether the function has already been executed.
   * If it has been executed before, nothing happens. If it has not been executed before, the function is invoked.
   *
   * Warning:
   *
   * If an error occurs inside `box.once()` when initializing a database, you can re-execute the failed `box.once()` block without stopping the database.
   * The solution is to delete the once object from the system space `_schema`.
   * Say `box.space._schema:select{}`, find your once object there and delete it.
   *
   * When `box.once()` is used for initialization, it may be useful to wait until the database is in an appropriate state (read-only or read-write).
   * In that case, see the functions in the Submodule `box.ctl`.
   * @param key A value that will be checked.
   * @param fn A function.
   * @param args Arguments that must be passed to function.
   */
  once(key: string, fn: (this: void, ...args: any[]) => unknown, ...args: unknown[]): void;

  /**
   * The `box.backup` submodule contains two functions that are helpful for backup in certain situations.
   */
  backup: Backup;

  /**
   * The `box.cfg` submodule is used for specifying server configuration parameters.
   *
   * To view the current configuration, say `box.cfg` without braces.
   */
  cfg: Config;

  /**
   * The `wait_ro` (wait until read-only) and `wait_rw` (wait until read-write) functions are useful during server initialization.
   * To see whether a function is already in read-only or read-write mode, check `box.info.ro`.
   *
   * A particular use is for `box.once()`. For example, when a replica is initializing,
   * it may call a `box.once()` function while the server is still in read-only mode,
   * and fail to make changes that are necessary only once before the replica is fully initialized.
   * This could cause conflicts between a master and a replica if the master is in read-write mode and the replica is in read-only mode.
   * Waiting until “read only mode = false” solves this problem.
   */
  ctl: Ctl;

  /**
   * The `box.error` submodule can be used to work with errors in your application.
   * For example, you can get the information about the last error raised by Tarantool or raise custom errors manually.
   *
   * The difference between raising an error using `box.error` and a Lua’s built-in error function is that when the error reaches the client,
   * its error code is preserved. In contrast, a Lua error would always be presented to the client as `ER_PROC_LUA`.
   */
  error: Error;

  /**
   * The `box.index` submodule provides read-only access for index definitions and index keys.
   * Indexes are contained in `box.space.space-name.index` array within each space object.
   * They provide an API for ordered iteration over tuples.
   * This API is a direct binding to corresponding methods of index objects of type `box.index` in the storage engine.
   */
  index: Index;

  /**
   * The `box.info` submodule provides access to information about server instance variables.
   */
  info: Info;

  /**
   * Since `2.11.0`.
   *
   * The `box.iproto` submodule provides the ability to work with the network subsystem of Tarantool.
   * It allows you to extend the IPROTO functionality from Lua. With this submodule, you can:
   * - parse unknown IPROTO request types;
   * - send arbitrary IPROTO packets;
   * - override the behavior of the existing and unknown request types in the binary protocol.
   *
   * The submodule exports all IPROTO constants and features to Lua.
   */
  iproto: IProto;

  /**
   * The `box.read_view` submodule contains functions related to read views.
   */
  read_view: ReadView;

  runtime: Runtime;

  /**
   * The `box.slab` submodule provides access to slab allocator statistics.
   * The slab allocator is the main allocator used to store tuples.
   * This can be used to monitor the total memory usage and memory fragmentation.
   */
  slab: Slab;

  /**
   * The `box.schema` submodule has data-definition functions for spaces, users, roles, function tuples, and sequences.
   */
  schema: Schema;

  /**
   * The `box.session` submodule allows querying the session state, writing to a session-specific temporary Lua table,
   * or sending out-of-band messages, or setting up triggers which will fire when a session starts or ends.
   *
   * A session is an object associated with each client connection.
   */
  session: Session;

  /**
   * CRUD operations in Tarantool are implemented by the `box.space` submodule.
   * It has the data-manipulation functions `select`, `insert`, `replace`, `update`, `upsert`, `delete`, `get`, `put`.
   * It also has members, such as id, and whether or not a space is enabled.
   */
  space: Space;

  /**
   * The `box.stat` submodule provides access to request and network statistics.
   */
  stat: Stat;

  /**
   * The `box.tuple` submodule provides read-only access for the `tuple` userdata type.
   * It allows, for a single tuple: selective retrieval of the field contents, retrieval of information about size,
   * iteration over all the fields, and conversion to a Lua table.
   */
  tuple: Tuple;

  snapshot();

  func: LuaTable<string, { call(this, args: unknown[]): unknown }>;

  /**
   * @todo Fix documentation.
   *
   * Not documented yet (see {@link https://github.com/tarantool/doc/issues/2063})
   */
  lib: unknown;

  /**
   * @todo Fix documentation.
   */
  feedback: unknown;
}
