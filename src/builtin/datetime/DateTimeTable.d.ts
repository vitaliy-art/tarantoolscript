
/** Table of [time units](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#datetime-new-args) */
export interface DateTimeTable {
  /**
   * Fractional part of the last second.
   * You can specify either nanoseconds (nsec), or microseconds (usec), or milliseconds (msec). Specifying two of these units simultaneously or all three ones lead to an error.
   */
  nsec: number;

  /** See nsec */
  usec: number;

  /** See nsec */
  msec: number;

  /**
   * Seconds. Value range: 0 - 60.
   * A leap second is supported, see a section [leap second](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#leap-second).
   */
  sec: number;

  /**
   * Minutes. Value range: 0 - 59.
   */
  min: number;

  /**
   * Hours. Value range: 0 - 23.
   */
  hour: number;

  /**
   * Day number. Value range: 1 - 31.
   * The special value -1 generates the last day of a particular month (see [example below](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#datetime-new-example)).
   */
  day: number;

  /**
   * Month number. Value range: 1 - 12.
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

  /**
   * Timestamp, in seconds.
   * Similar to the Unix timestamp, but can have a fractional part that is converted in nanoseconds in the resulting datetime object.
   * If the fractional part for the last second is set via the nsec, usec, or msec units, the timestamp value should be integer otherwise an error occurs.
   * The timestamp is not allowed if you already set time and/or date via specific units, namely, sec, min, hour, day, month, and year.
   */
  timestamp: number;

  /**
   * A time zone name according to the Time Zone Database. See the [Time zones](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#timezone) section.
   */
  tz: string;
}
