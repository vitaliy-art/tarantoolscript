
/** See result of [datetime_object:totable](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#lua-function.datetime_object.totable) */
export interface DateTimeTable {
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
   * Days since the beginning of the week.
   */
  wday: number;

  /**
   * Days since the beginning of the year.
   */
  yday: number;

  /**
   * Timestamp, in seconds.
   */
  timestamp: number;

  /**
   * Is the DST(Daylight saving time) applicable for the date.
   */
  isdst: boolean;

  /**
   * Time zone offset from UTC.
   */
  tzoffset: number;

  /**
   * A time zone name according to the Time Zone Database. See the [Time zones](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#timezone) section.
   */
  tz: string;
}
