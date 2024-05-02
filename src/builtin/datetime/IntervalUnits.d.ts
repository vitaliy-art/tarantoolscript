export interface IntervalUnits {
  /**
   * Fractional part of the last second.
   * You can specify either nanoseconds (`nsec`), or microseconds (`usec`), or milliseconds (`msec`).
   * Specifying two of these units simultaneously or all three ones lead to an error.
   * @default 0
   */
  nsec?: number;

  /**
   * Fractional part of the last second.
   * You can specify either nanoseconds (`nsec`), or microseconds (`usec`), or milliseconds (`msec`).
   * Specifying two of these units simultaneously or all three ones lead to an error.
   * @default 0
   */
  user?: number;

  /**
   * Fractional part of the last second.
   * You can specify either nanoseconds (`nsec`), or microseconds (`usec`), or milliseconds (`msec`).
   * Specifying two of these units simultaneously or all three ones lead to an error.
   * @default 0
   */
  msec?: number;

  /**
   * Seconds.
   * @default 0
   */
  sec?: number;

  /**
   * Minutes.
   * @default 0
   */
  min?: number;

  /**
   * Hours.
   * @default 0
   */
  hour?: number;

  /**
   * Day.
   * @default 0
   */
  day?: number;

  /**
   * Week number.
   * @default 0
   */
  week?: number;

  /**
   * Month number.
   * @default 0
   */
  month?: number;

  /**
   * Year.
   * @default 0
   */
  year?: number;

  /**
   * 	Defines how to round days in a month after an arithmetic operation.
   * @default none
   */
  adjust?: 'none' | 'last' | 'excess';
}
