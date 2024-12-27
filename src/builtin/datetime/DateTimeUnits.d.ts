
/** [Possible input time units for datetime.new()](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#datetime-new-args) */
export interface DateTimeUnits {
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
  usec?: number;

  /**
   * Fractional part of the last second.
   * You can specify either nanoseconds (`nsec`), or microseconds (`usec`), or milliseconds (`msec`).
   * Specifying two of these units simultaneously or all three ones lead to an error.
   * @default 0
   */
  msec?: number;

  /**
   * Seconds. Value range: 0 - 60.
   * A leap second is supported, see a section [leap second](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#leap-second).
   * @default 0
   */
  sec?: number;

  /**
   * Minutes. Value range: 0 - 59.
   * @default 0
   */
  min?: number;

  /**
   * Hours. Value range: 0 - 23.
   * @default 0
   */
  hour?: number;

  /**
   * Day number. Value range: 1 - 31.
   * The special value `-1` generates the last day of a particular month (see [example below](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#datetime-new-example)).
   * @default 1
   */
  day?: number;

  /**
   * Month number. Value range: 1 - 12.
   * @default 1
   */
  month?: number;

  /**
   * Year.
   * @default 1970
   */
  year?: number;

  /**
   * Timestamp, in seconds.
   * Similar to the Unix timestamp, but can have a fractional part which is converted in nanoseconds in the resulting `datetime` object.
   * If the fractional part for the last second is set via the `nsec`, `usec`, or `msec` units,
   * the timestamp value should be integer otherwise an error occurs.
   * Timestamp is not allowed if you already set time and/or date via specific units, namely, `sec`, `min`, `hour`, `day`, `month`, and `year`.
   * @default 0
   */
  timestamp?: number;

  /**
   * Time zone offset from UTC, in minutes. If both `tzoffset` and `tz` are specified, `tz` has the preference and the `tzoffset` value is ignored.
   * See a section [timezone](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#timezone).
   * @default 0
   */
  tzoffset?: number;

  /**
   * Time zone name according to the tz database.
   * See the [Time zones](https://www.tarantool.io/en/doc/latest/reference/reference_lua/datetime/#timezone) section.
   */
  tz?: string;
}
