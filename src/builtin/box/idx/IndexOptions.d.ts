import { FieldType } from '../schema';
import { IndexOptionsParts } from './IndexOptionsParts';
import { IndexSequenceOptions } from './IndexSequenceOptions';
import { IndexType } from './IndexType';

/**
 * Index options that include the index name, type, identifiers of key fields, and so on.
 * These options are passed to the `space_object.create_index()` method.
 */
export interface IndexOptions {
  /**
   * The index type.
   *
   * Default: `TREE`.
   */
  type?: IndexType;

  /**
   * A unique numeric identifier of the index, which is generated automatically.
   *
   * Default: last index’s ID + 1.
   */
  id?: number;

  /**
   * Specify whether an index may be unique. When `true`, the index cannot contain the same key value twice.
   *
   * Default: `true`.
   */
  unique?: boolean;

  /**
   * Specify whether to swallow an error on an attempt to create an index with a duplicated name.
   *
   * Default: `false`.
   */
  if_not_exists?: boolean;

  /**
   *
   */
  parts?: IndexOptionsParts;

  /**
   * The `RTREE` index dimension.
   *
   * Default: `2`.
   */
  dimension?: number;

  /**
   * The `RTREE` index distance type.
   *
   * Default: `euclid`.
   */
  distance?: 'euclid' | 'manhattan';

  /** Create a generator for indexes using a sequence object. */
  sequence?: string | number;

  /** Specify the identifier of the functional index function. */
  func?: string;

  /**
   * Since: `2.6.1`
   *
   * Specify whether hint optimization is enabled for the `TREE` index:
   *
   * - If `true`, the index works faster.
   * - If `false`, the index size is reduced by half.
   *
   * Default: `true`.
   */
  hint?: boolean;

  /**
   * Vinyl only
   *
   * Specify the bloom filter’s false positive rate.
   */
  bloom_fpr?: number;

  /**
   * Vinyl only
   *
   * Specify the size of a page used for read and write disk operations.
   */
  page_size?: number;

  /**
   * Vinyl only
   *
   * Specify the default maximum range size (in bytes) for a vinyl index.
   */
  range_size?: number;

  /**
   * Vinyl only
   *
   * Specify the maximum number of runs per level in the `LSM` tree.
   */
  run_count_per_level?: number;

  /**
   * Vinyl only
   *
   * Specify the ratio between the sizes of different levels in the `LSM` tree.
   */
  run_size_ratio?: number;

  /**
   * The sequence becomes associated with the index, so that the next `insert()` will put the next generated number into the primary-key field,
   * if the field would otherwise be nil.
   */
  sequence?: IndexSequenceOptions;
}

export type IndexOptionsParts =
  | string[]
  | string[][]
  | number[]
  | number[][]
  | [number, FieldType]
  | IndexOptionsParts
  | IndexOptionsParts[]
