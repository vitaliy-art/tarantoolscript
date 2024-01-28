export interface Group extends LuaTable<string, () => void> {
  /**
   * Add callback to run once after all tests in the group.
   */
  after_all(this: void, func: () => unknown): void;

  /**
   * Add callback to run after each test in the group.
   */
  after_each(this: void, func: () => unknown): void;

  /**
   * Add callback to run once before all tests in the group.
   */
  before_all(this: void, func: () => unknown): void;

  /**
   * Add callback to run before each test in the group.
   */
  before_each(this: void, func: { (cg: ConfigGroup): void }): void;

  before_each(this: void, params: AnyTable, func: { (cg: ConfigGroup): void }): void;

  before_test(name: string, params: AnyTable, func: { (cg: ConfigGroup): void }): void;

  /**
   * @param name Default name is inferred from caller filename when possible. For `test/a/b/c_d_test.lua` it will be `a.b.c_d`. (optional)
   * @returns Group instance.
   */
  initialize(name?: string): Group;
}

export interface ConfigGroup extends AnyTable {
  params: AnyTable;
}
