import { SpaceObject } from '../space';
import { SpaceOptions } from './SpaceOptions';
import { User } from './user';
import { Role } from './role';
import { Func } from './func';
import { Sequence } from './sequence';

export interface Schema {
  /** @todo Add rest functions for box.schema.space. */
  space: {
    /** Create a space. Same as `box.schema.create_space` */
    create: SpaceCreateCallable;
  };

  /**
   * You can extend `space_object` with custom functions as follows:
   *
   * 1. Create a Lua function.
   * 2. Add the function name to a predefined global variable `box.schema.space_mt`, which has the table type.
   * Adding to `box.schema.space_mt` makes the function available for all spaces.
   * 3. Call the function on the `space_object`: `space_object:function-name([parameters])`.
   *
   * Alternatively, you can make a user-defined function available for only one space by calling `getmetatable(space_object)`
   * and then adding the function name to the meta table.
   */
  space_mt: AnyTable;

  /** Adding to `box_schema.index_mt` makes the function available for all indexes. */
  index_mt: AnyTable;

  /** Adding to `box_schema.memtx_index_mt` makes the function available for all memtx indexes. */
  memtx_index_mt: AnyTable;

  /** Adding to box_schema.vinyl_index_mt makes the function available for all vinyl indexes. */
  vinyl_index_mt: AnyTable;

  /** Create a space. Same as `box.schema.space.create` */
  create_space: SpaceCreateCallable;

  /**
   * If you created a database with an older Tarantool version and have now installed a newer version,
   * make the request box.schema.upgrade().
   * This updates Tarantool system spaces to match the currently installed version of Tarantool.
   */
  upgrade(this: void): void;

  /**
   * Allows you to downgrade a database to the specified Tarantool version.
   * This might be useful if you need to run a database on older Tarantool versions. */
  downgrade(this: void, version: string): void;

  /** Return a list of Tarantool versions available for downgrade. */
  downgrade_versions(this: void): string[];

  /** Return a list of downgrade issues for the specified Tarantool version. */
  downgrade_issues(this: void, version: string): string[];

  user: User;
  role: Role;
  func: Func;
  sequence: Sequence;
}

export interface SpaceCreateCallable {
  (this: void, spaceName: string, options?: SpaceOptions): SpaceObject;
}
