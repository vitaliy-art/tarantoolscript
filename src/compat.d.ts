export * from './builtin/compat/Compat';
import * as compat from './builtin/compat/Compat';
import { CompatOption } from './builtin/compat';

type CompatType = Partial<typeof compat>;

export interface CallableCompat
  extends CompatType,
    LuaTable<string, CompatOption> {
  (this: void, options: Omit<CompatType, 'dump' | 'add_option'>): void;
  dump: typeof compat.dump;
  add_option: typeof compat.add_option;
}
