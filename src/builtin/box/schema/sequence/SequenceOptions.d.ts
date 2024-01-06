export interface SequenceOptions {
  /**
   * The STARTS WITH value.
   * @default 1
   */
  start?: number;

  /**
   * The MINIMUM value.
   * @default 1
   */
  min?: number;

  /**
   * The MAXIMUM value.
   * @default 9223372036854775807
   */
  max?: number;

  /**
   * The CYCLE value.
   * @default false
   */
  cycle?: boolean;

  /**
   * The CACHE value.
   * @default 0
   */
  cache?: number;

  /**
   * The INCREMENT BY value.
   * @default 1
   */
  step?: number;
}
