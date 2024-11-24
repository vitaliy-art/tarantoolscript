import * as luatest from 'luatest';
import { Box } from 'builtin';

declare const box: Box;
box.cfg({});
const g = luatest.group('box');
type BoxEnum = { [P in keyof Required<Box>]: boolean };
const boxKeys: BoxEnum = {
  atomic: true,
  backup: true,
  begin: true,
  broadcast: true,
  cfg: true,
  commit: true,
  ctl: true,
  error: true,
  execute: true,
  feedback: true,
  func: true,
  index: true,
  info: true,
  iproto: true,
  is_in_txn: true,
  lib: true,
  NULL: true,
  on_commit: true,
  on_rollback: true,
  once: true,
  prepare: true,
  read_view: true,
  rollback_to_savepoint: true,
  rollback: true,
  runtime: true,
  savepoint: true,
  schema: true,
  session: true,
  slab: true,
  snapshot: true,
  space: true,
  stat: true,
  tuple: true,
  txn_id: true,
  txn_isolation_level: true,
  unprepare: true,
  watch_once: true,
  watch: true,
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
