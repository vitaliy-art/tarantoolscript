export interface LogConfig {
  /**
   * Specifies the level of detail the log has.
   */
  level?: LogLevel;

  /**
   * Specifies where to send the log’s output, for example, to a file, pipe, or system logger.
   */
  log?: string;

  /**
   * If true, Tarantool does not block during logging when the system is not ready for writing, and drops the message instead.
   */
  nonblock?: boolean;

  /**
   * Specifies the log format: `plain` or `json`.
   */
  format?: 'plain' | 'json';

  /**
   * Configures the specified log levels for different modules.
   */
  modules?: { [key: string]: LogLevel };
}

export type LogLevel =
  | 1 | 'syserror'
  | 2 | 'error'
  | 3 | 'crit'
  | 4 | 'warn'
  | 5 | 'info'
  | 6 | 'verbose'
  | 7 | 'debug';
