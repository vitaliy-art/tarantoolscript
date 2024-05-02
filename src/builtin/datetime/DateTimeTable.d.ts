export interface DateTimeTable {
  /**
   * Nanosecods.
   */
  nsec: number;

  /**
   * Seconds
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
   * Month number;
   */
  month: number;

  /**
   * Year.
   */
  year: number;

  /**
   * Days since the beginning of the week.
   */
  wday: number;

  /**
   * Days since the beginning of the year.
   */
  yday: number;

  /**
   * Is the DST(Daylight saving time) applicable for the date.
   */
  isdst: boolean;

  /**
   * Time zone offset from UTC.
   */
  tzoffset: number;
}
