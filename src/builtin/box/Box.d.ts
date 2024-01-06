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
 * @todo snapshot https://www.tarantool.io/en/doc/latest/reference/reference_lua/box_snapshot/
 * @noSelf
 */
declare interface Box extends AnyTable, TransactionsCommander, SqlCommander, EventWatcher {
  NULL: void;
  once(key: string, fn: (...args: any[]) => unknown, ...args: unknown[]): void;
  backup: Backup;
  cfg: Config;
  ctl: Ctl;
  error: Error;
  index: Index;
  info: Info;
  iproto: IProto;
  read_view: ReadView;
  runtime: Runtime;
  slab: Slab;
  schema: Schema;
  session: Session;
  space: Space;
  stat: Stat;
  tuple: Tuple;
}
