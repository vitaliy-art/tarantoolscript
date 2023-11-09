import { SpaceObject } from '../space';
import { SpaceOptions } from './SpaceOptions';
import { User } from './user';
import { Role } from './role';
import { Func } from './func';

export interface Schema {
  /** @todo Add rest functions for box.schema.space. */
  space: {
    /** Create a space. Same as `box.schema.create_space` */
    create: SpaceCreateCallable;
  };

  /** Create a space. Same as `box.schema.space.create` */
  create_space: SpaceCreateCallable;

  /**
   * If you created a database with an older Tarantool version and have now installed a newer version,
   * make the request box.schema.upgrade().
   * This updates Tarantool system spaces to match the currently installed version of Tarantool.
   */
  upgrade: { (): void };

  /**
   * Allows you to downgrade a database to the specified Tarantool version.
   * This might be useful if you need to run a database on older Tarantool versions. */
  downgrade: { (version: string): void };

  /** Return a list of Tarantool versions available for downgrade. */
  downgrade_versions: { (): string[] };

  /** Return a list of downgrade issues for the specified Tarantool version. */
  downgrade_issues: { (version: string): string[] };

  user: User;
  role: Role;
  func: Func;
}

export interface SpaceCreateCallable {
  (this: void, spaceName: string, options?: SpaceOptions): SpaceObject;
}
