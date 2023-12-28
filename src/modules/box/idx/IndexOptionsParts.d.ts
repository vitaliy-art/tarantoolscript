import { FieldType } from '../schema';

export interface IndexOptionsParts {
  /** Specify the field number or name. */
  field: number | string;

  fieldno?: number;

  /** Specify the field type. If the field type is specified in `space_object:format()`, `key_part.type` inherits this value. */
  type?: FieldType;

  /**
   * Specify whether `nil` (or its equivalent such as `msgpack.NULL`) can be used as a field value.
   * If the `is_nullable` option is specified in `space_object:format()`, `key_part.is_nullable` inherits this value.
   *
   * You can set this option to true if:
   * - the index type is `TREE`
   * - the index is not the primary index
   *
   * It is also legal to insert nothing at all when using trailing nullable fields.
   * Within indexes, such `null` values are always treated as equal to other `null` values and are always treated as less than non-null values.
   * Nulls may appear multiple times even in a unique index.
   *
   * Default: `false`.
   */
  is_nullable?: boolean;

  /**
   * Specify the collation used to compare field values.
   * If the field collation is specified in `space_object:format()`, `key_part.collation` inherits this value.
   */
  collation?: string;

  /**
   * Since: `2.8.2`
   *
   * Specify whether an index can skip tuples with `null` at this key part. You can set this option to `true` if:
   * - the index type is `TREE`
   * - the index is not the primary index
   *
   * If `exclude_null` is set to `true`, `is_nullable` is set to `true` automatically.
   * Note that this option can be changed dynamically. In this case, the index is rebuilt.
   *
   * Such indexes do not store filtered tuples at all, so indexing can be done faster.
   *
   * Default: `false`.
   */
  exclude_null?: boolean;

  /** Specify the path string for a map field. */
  path?: string;
}
