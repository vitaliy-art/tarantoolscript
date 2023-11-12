declare module 'luatest' {

  export interface Group {
    [key: string]: { (): void };
    before_each:
      | { (this: void, func: { (cg: ConfigGroup): void }): void }
      | { (this: void, params: AnyTable, func: { (cg: ConfigGroup): void }): void };
    before_test: { (name: string, params: AnyTable, func: { (cg: ConfigGroup): void }): void };
  }

  export interface ConfigGroup extends AnyTable {
    params: AnyTable;
  }
}
