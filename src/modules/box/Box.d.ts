import { Backup } from './backup';
import { Config } from './cfg';
import { Ctl } from './ctl';
import { Error } from './error';
import { Index } from './idx';
import { Info } from './info';
import { IProto } from './iproto';
import { ReadView } from './read_view';
import { Schema } from './schema';
import { Space } from './space';
import { Tuple } from './tuple';

/**
 * @todo session https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_session/
 * @todo slab https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_slab/
 * @todo stat https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_stat/
 * @todo transactions https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_txn_management/
 * @todo sql https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_sql/
 * @todo event_watchers https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_events/
 * @todo snapshot https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_snapshot/
 */
declare interface Box extends AnyTable {
  NULL: void;
  once: { (this: void, key: string, fn: { (...args: any[]): unknown }, ...args: unknown[]): void };
  backup: Backup;
  cfg: Config;
  ctl: Ctl;
  error: Error;
  index: Index;
  info: Info;
  iproto: IProto;
  read_view: ReadView;
  schema: Schema;
  space: Space;
  tuple: Tuple;
}
