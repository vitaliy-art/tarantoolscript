import { DateTimeTable } from './DateTimeTable';
import { DateTimeUnits } from './DateTimeUnits';
import { IntervalObject } from './IntervalObject';

export interface DateTimeObject extends DateTimeTable {
  /**
   * Convert the information from a datetime object into the table format.
   * @returns Table with the date and time parameters.
   */
  totable(): DateTimeTable;

  /**
   * Convert the standard `datetime` object presentation into a formatted string.
   * The conversion specifications are the same as in the strftime library.
   * Additional specification for nanoseconds is `%f` which also allows a modifier to control the output precision of fractional part:
   * `%5f`. If no arguments are set for the method, the default conversions are used: `'%FT%T.%f%z'`.
   * @param input String consisting of zero or more conversion specifications and ordinary characters.
   * @returns String with the formatted date and time information.
   */
  format(input?: string): string;

  /**
   * Update the field values in the existing `datetime` object.
   * @param units Table of time units. The time units are the same as for the `datetime.new()`.
   * @returns Updated `datetime` object
   */
  set(units?: DateTimeUnits): DateTimeObject;

  /**
   * Modify an existing datetime object by adding values of the input argument.
   * @param input An interval object or an equivalent table.
   * @param opts Operation options:
   * - adjust - Defines how to round days in a month after an arithmetic operation. Possible values: `none`, `last`, `excess`. Defaults to `none`.
   */
  add(input: Partial<Omit<IntervalObject, 'adjust'>> & { adjust?: string | number }, opts?: { adjust?: 'none' | 'last' | 'excess' }): DateTimeObject;

  /**
   * Modify an existing datetime object by subtracting values of the input argument.
   * @param input An interval object or an equivalent table.
   * @param opts Operation options:
   * - adjust - Defines how to round days in a month after an arithmetic operation. Possible values: `none`, `last`, `excess`. Defaults to `none`.
   */
  sub(input: Partial<Omit<IntervalObject, 'adjust'>> & { adjust?: string | number }, opts?: { adjust?: 'none' | 'last' | 'excess' }): DateTimeObject;
}
