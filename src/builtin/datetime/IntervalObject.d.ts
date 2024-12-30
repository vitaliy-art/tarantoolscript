import { IntervalTable } from './IntervalTable';

export interface IntervalObject extends IntervalTable {
  totable(): IntervalTable;
}
