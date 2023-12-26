import { Backup } from './backup';
import { Config } from './cfg';
import { Schema } from './schema';
import { Space } from './space';
import { Tuple } from './tuple/Tuple';

/**
 * @todo ctl https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_ctl/
 * @todo error https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_error/
 * @todo index https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_index/
 * @todo info https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_info/
 * @todo read_view https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_read_view/
 * @todo sequence https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_schema_sequence/
 * @todo session https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_session/
 * @todo slab https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_slab/
 * @todo stat https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_stat/
 * @todo transactions https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_txn_management/
 * @todo sql https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_sql/
 * @todo event_watchers https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_events/
 * @todo snapshot https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_snapshot/
 * @todo null https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_null/
 */
export interface Box {
  [key: string]: unknown;
  NULL: void;
  cfg: Config;
  backup: Backup;
  once: { (this: void, key: string, fn: { (...args: any[]): unknown }, ...args: unknown[]): void };
  schema: Schema;
  space: Space;
  tuple: Tuple;
}
