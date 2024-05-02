export interface IntervalTable {
  /**
   * Nanoseconds.
   */
  nsec: number;

  /**
   * Seconds.
   */
  sec: number;

  /**
   * Minutes.
   */
  min: number;

  /**
   * Hours.
   */
  hour: number;

  /**
   * Day number.
   */
  day: number;

  /**
   * Month number.
   */
  month: number;

  /**
   * Year.
   */
  year: number;

  /**
   * Week number.
   */
  week: number;

  /**
   * Defines how to round days in a month after an arithmetic operation.
   */
  adjust: 'none' | 'last' | 'excess';
}
