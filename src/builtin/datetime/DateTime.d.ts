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
