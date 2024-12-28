import { TupleObject } from './tuple';

/**
 * Observe the following rules when working with transactions:
 * - Rule #1
 *
 * The requests in a transaction must be sent to a server as a single block. It is not enough to enclose them between begin and commit or rollback.
 * To ensure they are sent as a single block: put them in a function, or put them all on one line,
 * or use a delimiter so that multi-line requests are handled together.
 *
 * - Rule #2
 *
 * All database operations in a transaction should use the same storage engine.
 * It is not safe to access tuple sets that are defined with `{engine='vinyl'}` and also access tuple sets that are defined with `{engine='memtx'}`,
 * in the same transaction.
 *
 * - Rule #3
 *
 * Requests which cause changes to the data definition – create, alter, drop, truncate – are only allowed with Tarantool version `2.1` or later.
 * Data-definition requests which change an index or change a format, such as `space_object:create_index()` and `space_object:format()`,
 * are not allowed inside transactions except as the first request after `box.begin()`.
 *
 * @noSelf
 */
export interface TransactionsCommander {
  /**
   * Begin the transaction. Disable implicit yields until the transaction ends.
   * Signal that writes to the write-ahead log will be deferred until the transaction ends.
   * In effect the fiber which executes `box.begin()` is starting an “active multi-request transaction”, blocking all other fibers.
   * @param opts Transaction options.
   */
  begin(opts?: TransactionOptions): void;

  /** End the transaction, and make all its data-change operations permanent. */
  commit(): void;

  /**
   * End the transaction, but cancel all its data-change operations.
   * An explicit call to functions outside `box.space` that always yield, such as `fiber.sleep()` or `fiber.yield()`, will have the same effect.
   */
  rollback(): void;

  /**
   * Return a descriptor of a savepoint (type = table), which can be used later by `box.rollback_to_savepoint(savepoint)`.
   * Savepoints can only be created while a transaction is active, and they are destroyed when a transaction ends.
   * @returns Savepoint table.
   */
  savepoint(): SavePoint;

  /**
   * Do not end the transaction, but cancel all its data-change and `box.savepoint()` operations that were done after the specified savepoint.
   * @param savePoint Savepoint table.
   */
  rollback_to_savepoint(savePoint: SavePoint): void;

  /**
   * Execute a function, acting as if the function starts with an implicit `box.begin()` and ends with an implicit` box.commit()` if successful,
   * or ends with an implicit `box.rollback()` if there is an error.
   * @param opts Transaction options.
   * @param txFunction Function to execute.
   * @param functionArgs Arguments passed to the function.
   * @returns The result of the function passed to atomic() as an argument.
   */
  atomic<TResult = unknown>(opts: TransactionOptions, txFunction: (this: void, ...args: any[]) => TResult, ...functionArgs: unknown[]): TResult;

  /**
   * Execute a function, acting as if the function starts with an implicit `box.begin()` and ends with an implicit` box.commit()` if successful,
   * or ends with an implicit `box.rollback()` if there is an error.
   * @param txFunction Function to execute.
   * @param functionArgs Arguments passed to the function.
   * @returns The result of the function passed to atomic() as an argument.
   */
  atomic<TResult = unknown>(txFunction: (this: void, ...args: any[]) => TResult, ...functionArgs: unknown[]): TResult;

  /**
   * Define a trigger for execution when a transaction ends due to an event such as `box.commit()`.
   *
   * The function parameter can be an iterator. The iterator goes through the effects of every request that changed a space during the transaction.
   * The iterator has:
   * - an ordinal request number.
   * - the old value of the tuple before the request (`nil` for an insert request).
   * - the new value of the tuple after the request (`nil` for a delete request).
   * - the ID of the space.
   *
   * The trigger function should not access any database spaces.
   *
   * If the trigger execution fails and raises an error, the effect is severe and should be avoided –
   * use Lua’s `pcall()` mechanism around code that might fail.
   *
   * `box.on_commit()` must be invoked within a transaction, and the trigger ceases to exist when the transaction ends.
   *
   * If the parameters are `(nil, old-trigger-function)`, then the old trigger is deleted.
   * @param triggerFunction Function which will become the trigger function.
   * @param oldTriggerFunction Existing trigger function which will be replaced by trigger-function.
   * @returns Nil or function pointer.
   */
  on_commit(triggerFunction?: TransactionTriggerFunction, oldTriggerFunction?: TransactionTriggerFunction): TransactionTriggerFunction | undefined;

  /**
   * Define a trigger for execution when a transaction ends due to an event such as `box.rollback()`.
   *
   * The parameters and warnings are exactly the same as for `box.on_commit()`.
   */
  on_rollback(triggerFunction?: TransactionTriggerFunction, oldTriggerFunction?: TransactionTriggerFunction): TransactionTriggerFunction | undefined;

  /**
   * If a transaction is in progress (for example the user has called `box.begin() `and has not yet called either `box.commit()` or `box.rollback()`),
   * return `true`. Otherwise return `false`.
   */
  is_in_txn(): boolean;

  /**
   * @returns The ID of the current transaction if called within a transaction, nil otherwise.
   */
  txn_id(): number | void;
}

export interface TransactionOptions {
  /** The transaction isolation level. */
  txn_isolation?: TransactionIsolationLevel;
  /** A timeout (in seconds), after which the transaction is rolled back. */
  timeout?: number;
}

export type TransactionIsolationLevel =
  | 'best-effort'
  | 'read-committed'
  | 'read-confirmed'
  | 'linearizable'

export type SavePoint = LuaTable

export type TransactionTriggerFunction =
  | ((this: void) => void)
  | ((this: void, iterator: TransactionIterator) => void)

export type TransactionIterator = (this: void) => LuaIterable<LuaMultiReturn<[number, TupleObject?, TupleObject?, number]>>;
