/** @noSelfInFile */

import { DateTimeObject } from './DateTimeObject';
import { DateTimeUnits } from './DateTimeUnits';
import { IntervalObject } from './IntervalObject';
import { IntervalUnits } from './IntervalUnits';

/** @customName new */
export declare function new_(units?: DateTimeUnits): DateTimeObject;

export declare const interval: {
  /** @customName new */
  new_(this: void, units?: IntervalUnits): IntervalObject;
};

/**
 * Convert an input string with the date and time information into a `datetime` object.
 * The input string should be formatted according to one of the following standards:
 * - ISO 8601
 * - RFC 3339
 * - extended strftime – see description of the `format()` for details.
 * @param input String with the date and time information.
 * @param opts Format options:
 * - format - indicator of the `input` format. Possible values: ‘iso8601’, ‘rfc3339’, or strptime-like format string.
 * If no value is set, the default formatting is used.
 * - tzoffset - Time zone offset from UTC, in minutes.
 * @returns A `datetime` object.
 */
export declare function parse(input?: string, opts?: { format?: string, tzoffset?: number }): DateTimeObject;
