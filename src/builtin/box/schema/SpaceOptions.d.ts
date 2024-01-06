import { ForeignKeyMultipleOptions, ForeignKeySingleOptions } from './ForeignKeyOptions';
import { SpaceFieldFormat } from './SpaceFieldFormat';

/**
 * Space options that include the space id, format, field count, constraints and foreign keys, and so on.
 * These options are passed to the box.schema.space.create() method.
 *
 * Note:
 * These options are also passed to space_object:alter().
 */
export interface SpaceOptions {
  /**
   * Create a space only if a space with the same name does not exist already. Otherwise, do nothing but do not cause an error.
   *
   * Type: `boolean`
   *
   * Default: `false`
   */
  if_not_exists?: boolean;

  /**
   * A storage engine.
   *
   * Type: `string`
   *
   * Default: `memtx`
   *
   * Possible values: `memtx`, `vinyl`
   */
  engine?: 'memtx' | 'vinyl';

  /**
   * A unique numeric identifier of the space: users can refer to spaces with this id instead of the name.
   *
   * Type: `number`
   *
   * Default: last space’s ID + 1
   */
  id?: number;

  /**
   * A fixed count of fields. For example, if `field_count=5`, it is illegal to insert a tuple with fewer than or more than 5 fields.
   *
   * Type: `number`
   *
   * Default: `0` (not fixed)
   */
  field_count?: number;

  /**
   * The name of the user who is considered to be the space’s owner for authorization purposes.
   *
   * Type: `string`
   *
   * Default: current user’s name
   */
  user?: string;

  /**
   * Field names and types. See the illustrations of format clauses in the space_object:format() description and in the box.space._space example.
   * Optional and usually not specified.
   *
   * Type: `table`
   *
   * Default: blank
   */
  format?: SpaceFieldFormat[];

  /**
   * Space contents are replication-local: changes are stored in the write-ahead log of the local node but there is no replication.
   *
   * Type: `boolean`
   *
   * Default: `false`
   */
  is_local?: boolean;

  /**
   * Space contents are temporary: changes are not stored in the write-ahead log and there is no replication.
   *
   * Note:
   * Vinyl does not support temporary spaces.
   *
   * Type: `boolean`
   *
   * Default: `false`
   */
  temporary?: boolean;

  /**
   * Any transaction doing a DML request on this space becomes synchronous.
   *
   * Type: `boolean`
   *
   * Default: `false`
   */
  is_sync?: boolean;

  /**
   * The constraints that space tuples must satisfy.
   *
   * Type: `table` or `string`
   *
   * Default: blank
   */
  constraint?: { [key: string]: string } | string;

  /**
   * The foreign keys for space fields.
   *
   * Type: `table`
   *
   * Default: blank
   */
  foreign_key?: ForeignKeyMultipleOptions | { [key: string]: ForeignKeySingleOptions };

  name?: string;
}
