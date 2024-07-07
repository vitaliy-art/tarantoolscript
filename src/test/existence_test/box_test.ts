import * as luatest from 'luatest';
import { Box } from 'builtin';

declare const box: Box;
box.cfg({});
const g = luatest.group('box');
type BoxEnum = { [P in keyof Required<Box>]: boolean };
const boxKeys: BoxEnum = {
  NULL: true,
  once: true,
  backup: true,
  cfg: true,
  ctl: true,
  error: true,
  index: true,
  info: true,
  iproto: true,
  read_view: true,
  runtime: true,
  slab: true,
  schema: true,
  session: true,
  space: true,
  stat: true,
  tuple: true,
  snapshot: true,
  func: true,
  begin: true,
  commit: true,
  rollback: true,
  savepoint: true,
  rollback_to_savepoint: true,
  atomic: true,
  on_commit: true,
  on_rollback: true,
  is_in_txn: true,
  execute: true,
  prepare: true,
  unprepare: true,
  watch: true,
  broadcast: true,
  watch_once: true,
  lib: true,
  txn_id: true,
  feedback: true,
  txn_isolation_level: true,
};

g.set('test_box_declared_keys_exists', () => {
  for (const key in boxKeys) {
    luatest.assert_is_not(box[key], undefined, `key ${key} not present in 'box'`);
  }
});

g.set('test_box_fact_keys_declared', () => {
  const skipKeys = [
    'internal',
    'sequence',
    'priv',
    'malloc',
  ];

  for (const key in box) {
    if (!skipKeys.includes(key)) {
      luatest.assert_is(boxKeys[key], true, `key ${key} not present in interface Box`);
    }
  }
});
