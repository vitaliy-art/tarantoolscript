import { Net } from './Net';
import { RequestsStat } from './RequestsStat';
import { VinylStat } from './VinylStat';

/** @noSelf */
export interface Stat {
  /** Shows the total number of requests since startup and the average number of requests per second, broken down by request type. */
  (this: void): RequestsStat;

  /** Shows network activity: the number of bytes sent and received, the number of connections, streams, and requests (current, average, and total). */
  net: Net;

  /** Shows vinyl-storage-engine activity, for example `box.stat.vinyl().tx` has the number of commits and rollbacks. */
  vinyl(): VinylStat;

  /** Resets the statistics of` box.stat()`, `box.stat.net()`, `box.stat.vinyl()`, and `box.space.index`. */
  reset(): void;
}
