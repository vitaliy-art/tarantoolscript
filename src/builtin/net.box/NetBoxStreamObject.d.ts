import { TransactionIsolationLevel } from '../../builtin/box/TransactionsCommander';
import { NetBoxConnectionObject } from './NetBoxConnectionObject';

export interface NetBoxStreamObject extends NetBoxConnectionObject {
  /**
   * Begin a stream transaction.
   * Instead of the direct method, you can also use the `call`, `eval` or execute methods with SQL transaction.
   * @param txnIsolation Transaction isolation level.
   */
  begin(txnIsolation?: TransactionIsolationLevel): void;

  /**
   * Commit a stream transaction.
   * Instead of the direct method, you can also use the `call`, `eval` or execute methods with SQL transaction.
   */
  commit(): void;

  /**
   * Rollback a stream transaction.
   * Instead of the direct method, you can also use the `call`, `eval` or execute methods with SQL transaction.
   */
  rollback(): void;
}
