import { Box, IndexObject, SpaceObject, TupleObject, User } from '../modules';
import { ConfigOptions } from '../modules';
import * as luatest from 'luatest';
import { Error } from '../modules/box/error/Error';

declare const box: Box;
const g = luatest.group('test_cfg');

declare const s: SpaceObject;
const [t, pos] = s.select(2);

const mt = getmetatable(box)! as AnyTable;

mt.a = function(this: Box): void {
  print('');
};

box.a();

box.schema.index_mt.a = function(this: IndexObject): void {
  print(this);
};

declare const idx: IndexObject;
idx.a();


declare const o: TupleObject;
o.findall(1);
o.findall(1, 3);
o.find(1);
o.find(1, 4);

for (const [k, v] of o.pairs()) {
  print(k);
  print(v);
}

const [a, b] = o.unpack();

g['test_cfg'] = () => {
  const options: ConfigOptions = {
    listen: 3301,
    checkpoint_interval: 60 * 60,
    log: '/var/log/tarantool/test.log',
    log_level: 5,
    memtx_dir: '/var/lib/tarantool',
    net_msg_max: 4 * 1024,
    readahead: 64 * 1024,
    vinyl_dir: '/var/lib/tarantool',
    vinyl_memory: 1024 * 1024 * 1024,
    vinyl_cache: 512 * 1024 * 1024,
    vinyl_write_threads: 4,
    vinyl_read_threads: 2,
    wal_dir: '/var/lib/tarantool',
    replication_sync_lag: 60,
    read_only: false,
  };

  box.cfg(options);

  luatest.assert_items_include(box.cfg, options);
};
