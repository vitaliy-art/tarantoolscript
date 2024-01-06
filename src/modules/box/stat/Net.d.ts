import { NetsStat } from './NetsStat';
import { RequestsStat } from './RequestsStat';

/** @noSelf */
export interface Net {
  /** Shows network activity: the number of bytes sent and received, the number of connections, streams, and requests (current, average, and total). */
  (this: void): NetsStat;

  /**
   * Shows network activity per network thread: the number of bytes sent and received,
   * the number of connections, streams, and requests (current, average, and total).
   *
   * When called with an index (`box.stat.net.thread[1]`), shows network statistics for a single network thread.
   */
  thread: {
    [key: number]: RequestsStat;
    (this: void): RequestsStat[];
  }
}
