export interface FiberInfo {
  /**
   * Number of context switches.
   */
  csw: number;

  /**
   * Each fiber’s stack trace, showing where it originated and what functions were called.
   */
  backtrace: { [key in 'C' | 'L']: string }[];

  memory: {
    /**
     * Total memory occupied by the fiber as a C structure, its stack, etc.
     */
    total: number;

    /**
     * Actual memory used by the fiber.
     */
    user: number;
  };

  max_slice?: {
    err: number;
    warn: number;
  };

  /**
   * duplicates the “time” entry from `fiber.top().cpu` for each fiber.
   *
   * Only shown if `fiber.top` is enabled.
   */
  time?: number;

  name: string;

  fid: number;
}
