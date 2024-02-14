export interface Group extends LuaTable<string, (this: void, cg?: ConfigGroup) => void> {
  /**
   * Add callback to run once after all tests in the group.
   */
  after_all(this: void, func: (this: void) => unknown): void;

  /**
   * Add callback to run once before all tests in the group.
   */
  before_all(this: void, params: AnyTable, func: (this: void) => unknown): void;

  before_all(this: void, func: (this: void) => unknown): void;

  /**
   * Add callback to run after each test in the group.
   */
  after_each(this: void, func: (this: void) => unknown): void;

  /**
   * Add callback to run before each test in the group.
   */
  before_each(this: void, params: AnyTable, func: (this: void, cg?: ConfigGroup) => void ): void;

  before_each(this: void, func: (this: void, cg?: ConfigGroup) => void): void;

  after_test(this: void, name: string, params: AnyTable, func: (this: void, cg?: ConfigGroup) => void): void;

  after_test(this: void, name: string, func: (this: void, cg?: ConfigGroup) => void): void;

  before_test(this: void, name: string, params: AnyTable, func: (this: void, cg?: ConfigGroup) => void): void;

  before_test(this: void, name: string, func: (this: void, cg?: ConfigGroup) => void): void;

  /**
   * @param name Default name is inferred from caller filename when possible. For `test/a/b/c_d_test.lua` it will be `a.b.c_d`. (optional)
   * @returns Group instance.
   */
  initialize(name?: string): Group;
}

export interface ConfigGroup extends AnyTable {
  params: AnyTable;
}
