export interface Group extends LuaTable<string, () => void> {
  before_each(this: void, func: { (cg: ConfigGroup): void }): void;
  before_each(this: void, params: AnyTable, func: { (cg: ConfigGroup): void }): void;
  before_test(name: string, params: AnyTable, func: { (cg: ConfigGroup): void }): void;
}

export interface ConfigGroup extends AnyTable {
  params: AnyTable;
}
