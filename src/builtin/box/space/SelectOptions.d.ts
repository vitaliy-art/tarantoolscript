import { IteratorType } from '../idx';

export interface SelectOptions {
  /** The iterator type. The default iterator type is `'EQ'`. */
  iterator?: IteratorType;

  /** The maximum number of tuples. */
  limit?: number;

  /** The number of tuples to skip. */
  offset?: number;

  /**
   * A tuple or the position of a tuple (tuple_pos) after which select starts the search.
   * You can pass an empty string or box.NULL to this option to start the search from the first tuple.
   *
   * Supported for the TREE index only.
   */
  after?: AnyTable | TuplePos | void | number;

  /**
   * If `true`, the select method returns the position of the last selected tuple as the second value.
   *
   * Supported for the TREE index only.
   */
  fetch_pos?: boolean;
}

type TuplePos =
  | AnyTable
  | string
  | void
  | number
