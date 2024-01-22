import { FieldType, SpaceFieldFormat, SpaceOptions } from '../schema';
import { IndexObject } from '../idx';
import { IndexOptions } from '../idx';
import { TriggerFunction } from './TriggerFunction';
import { IteratorType } from '../idx';
import { SelectOptions, TuplePos } from './SelectOptions';
import { TupleObject } from '../tuple';
import { UpdateOperation } from './UpdateOperation';
import { CheckConstraint } from './CheckConstraint';

export interface SpaceObject {
  /**
   * Since version 2.5.2. Alter an existing space. This method changes certain space parameters.
   *
   * @params options The space options such as field_count, user, format, name, and other. The full list of these options with descriptions parameters is provided in box.schema.space.create()
   */
  alter(options: SpaceOptions): void;

  /**
   * Insert a new tuple using an auto-increment primary key.
   * The space specified by space_object must have an ‘unsigned’ or ‘integer’ or ‘number’ primary key index of type TREE.
   * The primary-key field will be incremented before the insert.
   *
   * Since version 1.7.5 this method is deprecated – it is better to use a `sequence`.
   *
   * Complexity factors: Index size, Index type, Number of indexes accessed, WAL settings.
   *
   * Possible errors:
   * - index has wrong type;
   * - primary-key indexed field is not a number.
   *
   * @param tuple Tuple’s fields, other than the primary-key field.
   * @returns The inserted tuple.
   */
  auto_increment(tuple: any[]): unknown[];

  /**
   * @returns Number of bytes in the space. This number, which is stored in Tarantool’s internal memory,
   * represents the total number of bytes in all tuples, not including index keys.
   * For a measure of index size, see index_object:bsize().
   */
  bsize(): number;

  /**
   * Return the number of tuples. If compared with len(), this method works slower because count() scans the entire space to count the tuples.
   *
   * @param key Primary-key field values, must be passed as a Lua table if key is multi-part.
   * @param iterator - Comparison method.
   */
  count(key?: unknown, iterator?: { iterator: IteratorType }): number;

  /**
   * Create an index.
   *
   * It is mandatory to create an index for a space before trying to insert tuples into it or select tuples from it.
   * The first created index will be used as the primary-key index, so it must be unique.
   *
   * @param name Name of index, which should conform to the rules for object names.
   * @param options Index options.
   * @returns Created index object.
   */
  create_index(name: string, options?: IndexOptions): IndexObject;

  /**
   * Delete a tuple identified by the primary key.
   *
   * Note regarding storage engine: vinyl will return `nil`, rather than the deleted tuple.
   *
   * @param key Primary-key field values, must be passed as a Lua table if key is multi-part.
   */
  delete(key: unknown): TupleObject?;

  /** Drop a space. The method is performed in background and doesn’t block consequent requests. */
  drop(): void;

  /**
   * Declare field names and types.
   * @param format A list of field names and types.
   */
  format(format?: SpaceFieldFormat[] | [string, FieldType?][]): SpaceFieldFormat[]?;

  /**
   * Convert a map to a tuple instance or to a table.
   * The map must consist of “field name = value” pairs.
   * The field names and the value types must match names and types stated previously for the space, via `space_object:format()`.
   * @param map A series of “field = value” pairs, in any order.
   * @param options The only legal option is `{table = true|false}`; if the option is omitted or if `{table = false}`, then return type will be ‘cdata’ (i.e. tuple); if `{table = true}`, then return type will be ‘table’.
   * @returns A tuple instance or table.
   */
  frommap(map: { [key: string]: unknown }, options?: { table?: boolean }): TupleObject;

  /**
   * Search for a tuple in the given space.
   * @param key Value to be matched against the index key, which may be multi-part.
   * @returns The tuple whose index key matches key, or nil.
   */
  get(key: unknown): TupleObject?;

  /**
   * Insert a tuple into a space.
   * @param tuple Tuple to be inserted.
   * @returns The inserted tuple.
   */
  insert(tuple: TupleObject | unknown[]): TupleObject;

  /**
   * Return the number of tuples in the space.
   * If compared with `count()`, this method works faster because `len()` does not scan the entire space to count the tuples.
   * @returns Number of tuples in the space.
   */
  len(): number;

  /**
   * Create a “replace trigger”.
   * The trigger-function will be executed whenever a `replace()` or `insert()` or `update()` or `upsert()` or `delete()`
   * happens to a tuple in <space-name>.
   *
   * If the parameters are (nil, old-trigger-function), then the old trigger is deleted.
   *
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   *
   * If it is necessary to know whether the trigger activation happened due to replication or on a specific connection type,
   * the function can refer to `box.session.type()`.
   *
   * @param trigger Function which will become the trigger function.
   * @param old_trigger Existing trigger function which will be replaced by `trigger`.
   * @returns `nil` or function pointer
   */
  on_replace(trigger?: TriggerFunction, old_trigger?: TriggerFunction): (TriggerFunction | TriggerFunction[])?;

  /**
   * Create a “replace trigger”.
   * The trigger-function will be executed whenever a `replace()` or `insert()` or `update()` or `upsert()` or `delete()`
   * happens to a tuple in <space-name>.
   *
   * If the parameters are (nil, old-trigger-function), then the old trigger is deleted.
   *
   * If both parameters are omitted, then the response is a list of existing trigger functions.
   *
   * If it is necessary to know whether the trigger activation happened due to replication or on a specific connection type,
   * the function can refer to `box.session.type()`.
   *
   * The value that a before_replace trigger function can return affects what will happen after the return. Specifically:
   * - if there is no return value, then execution proceeds, inserting|replacing the new value;
   * - if the value is `nil`, then the tuple will be deleted;
   * - if the value is the same as the old parameter, then no `on_replace` function will be called and the data change will be skipped.
   * The return value will be absent.
   * - if the value is the same as the new parameter, then it’s as if the `before_replace` function wasn’t called;
   * - if the value is some other tuple, then it is used for insert/replace.
   *
   * @param trigger Function which will become the trigger function.
   * @param old_trigger Existing trigger function which will be replaced by `trigger`.
   * @returns `nil` or function pointer.
   */
  before_replace(trigger?: TriggerFunction, old_trigger?: TriggerFunction): (TriggerFunction | TriggerFunction[])?;

  /**
   * Search for a tuple or a set of tuples in the given space, and allow iterating over one tuple at a time.
   * To search by the specific index, use the `index_object:pairs()` method.
   * @param key Value to be matched against the index key, which may be multi-part
   * @param iterator The iterator type. The default iterator type is ‘EQ’
   * @param after A tuple or the position of a tuple (`tuple_pos`) after which pairs starts the search. You can pass an empty string or `box.NULL` to this option to start the search from the first tuple.
   * @returns The `iterator`, which can be used in a for/end loop or with `totable()`.
   */
  pairs(key?: unknown, options?: { iterator?: IteratorType, after?: number | AnyTable }): LuaIterable<LuaMultiReturn<[number, TupleObject]>>;

  /**
   * Rename a space.
   * @param name New name for space.
   */
  rename(name: string): void;

  /**
   * Insert a tuple into a space.
   * If a tuple with the same primary key already exists, `box.space...:replace()` replaces the existing tuple with a new one.
   * @param tuple Tuple to be inserted.
   * @returns The inserted tuple.
   */
  replace(tuple: TupleObject | unknown[]): TupleObject;

  /**
   * Insert a tuple into a space.
   * If a tuple with the same primary key already exists, `box.space...:replace()` replaces the existing tuple with a new one.
   * The syntax variants `box.space...:replace()` and `box.space...:put()` have the same effect;
   * the latter is sometimes used to show that the effect is the converse of `box.space...:get()`.
   * @param tuple Tuple to be inserted.
   * @returns The inserted tuple.
   */
  put(tuple: TupleObject | unknown[]): TupleObject;

  /**
   * At the time that a trigger is defined, it is automatically enabled - that is, it will be executed.
   * Replace triggers can be disabled with `box.space.space-name:run_triggers(false)` and re-enabled with `box.space.space-name:run_triggers(true)`.
   */
  run_triggers(enable: boolean): void;

  /**
   * Search for a tuple or a set of tuples in the given space by the primary key.
   * To search by the specific index, use the `index_object:select()` method.
   * @param key A value to be matched against the index key, which may be multi-part.
   * @param options None, any, or all of the same options that index_object:select() allows.
   * @returns The tuples whose primary-key fields are equal to the fields of the passed key.
   * If the number of passed fields is less than the number of fields in the primary key,
   * then only the passed fields are compared, so `select{1,2}` matches a tuple whose primary key is `{1,2,3}`.
   * If `options.fetch_pos` is set to `true`, returns a base64-encoded string representing the position of the last selected tuple as the second value.
   * If no tuples are fetched, returns `nil`.7
   */
  select(key?: unknown, options?: SelectOptions): LuaMultiReturn<[TupleObject[]?, TuplePos?]>;

  /**
   * Deletes all tuples. The method is performed in background and doesn’t block consequent requests.
   *
   * Do not call this method within a transaction in Tarantool older than `v. 2.10.0`. See `gh-6123` for details.
   */
  truncate(): void;

  /**
   * Update a tuple.
   *
   * The `update` function supports operations on fields — assignment, arithmetic (if the field is numeric),
   * cutting and pasting fragments of a field, deleting or inserting a field.
   * Multiple operations can be combined in a single update request, and in this case they are performed atomically and sequentially.
   * Each operation requires specification of a field identifier, which is usually a number.
   * When multiple operations are present, the field number for each operation is assumed to be relative to the most recent state of the tuple,
   * that is, as if all previous operations in a multi-operation update have already been applied.
   * In other words, it is always safe to merge multiple `update` invocations into a single invocation, with no change in semantics.
   * @param key Primary-key field values, must be passed as a Lua table if key is multi-part.
   * @param updates Update operations.
   * @returns The updated tuple or `nil` if the key is not found.
   */
  update(key: unknown, updates: UpdateOperation[]): TupleObject?;

  /**
   * Update or insert a tuple.
   *
   * If there is an existing tuple which matches the key fields of `tuple`,
   * then the request has the same effect as `space_object:update()` and the `{{operator, field_identifier, value}, ...}` parameter is used.
   * If there is no existing tuple which matches the key fields of `tuple`, then the request has the same effect as `space_object:insert()`
   * and the `tuple` parameter is used.
   * However, unlike `insert` or `update`, `upsert` will not read a tuple and perform error checks before returning –
   * this is a design feature which enhances throughput but requires more caution on the part of the user.
   * @param tuple Default tuple to be inserted, if analogue isn’t found.
   * @param updates Update operations to update existing tuple.
   */
  upsert(tuple: TupleObject | unknown[], updates: UpdateOperation[]): void;

  /**
   * Create a check constraint. A check constraint is a requirement that must be met when a tuple is inserted or updated in a space.
   * Check constraints created with `space_object:create_check_constraint` have the same effect as check constraints created with
   * an SQL CHECK() clause in a CREATE TABLE statement.
   * @param name Name of check constraint, which should conform to the rules for object names.
   * @param expression SQL code of an expression which must return a boolean result.
   * @returns Check constraint object.
   */
  create_check_constraint(name: string, expression: string): CheckConstraint;

  /** Whether or not this space is enabled. The value is `false` if the space has no index. */
  enabled: boolean;

  /** The required field count for all tuples in this space. */
  field_count: number;

  /**
   * Ordinal space number. Spaces can be referenced by either name or number.
   * Thus, if space `tester` has `id = 800`, then `box.space.tester:insert{0}` and `box.space[800]:insert{0}` are equivalent requests.
   */
  id: number;

  /**
   * A container for all defined indexes. There is a Lua object of type box.index with methods to search tuples and iterate over them in predefined order.
   *
   * To reset, use `box.stat.reset()`.
   */
  index: LuaTable<string | number, IndexObject>;

  is_sync: boolean;

  temporary: boolean;

  is_local: boolean;

  name: string;
}
