import { IntervalTable } from './IntervalTable';

export interface IntervalObject extends IntervalTable {
  adjust: number;

  totable(): IntervalTable;
}
