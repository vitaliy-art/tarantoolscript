import { LogLevel } from 'builtin/log/LogConfig';

export interface ConfigLogging {
  /**
   * Since version 1.6.2. Specifies the level of detail the log has. There are seven levels:
   *
   * - 1 – SYSERROR
   * - 2 – ERROR
   * - 3 – CRITICAL
   * - 4 – WARNING
   * - 5 – INFO
   * - 6 – VERBOSE
   * - 7 – DEBUG
   *
   * By setting `log_level`, you can enable logging of all events with severities above or equal to the given level.
   * Tarantool prints logs to the standard error stream by default. This can be changed with the log configuration parameter.
   */
  log_level?: LogLevel;

  /**
   * Configure the specified log levels (`log_level`) for different modules.
   */
  log_modules?: { [key: string]: LogLevel };

  /**
   * Since version 1.7.4. By default, Tarantool sends the log to the standard error stream (stderr).
   * If log is specified, Tarantool can send the log to a:
   *
   * - file
   * - pipe
   * - system logger
   */
  log?: string,

  /**
   * Since version 1.7.4. If `log_nonblock` equals true, Tarantool does not block during logging when the system is not ready for writing,
   * and drops the message instead. If log_level is high, and many messages go to the log, setting `log_nonblock` to
   * true may improve logging performance at the cost of some log messages getting lost.
   *
   * This parameter has effect only if log is configured to send logs to a pipe or system logger.
   * The default `log_nonblock` value is nil, which means that blocking behavior corresponds to the logger type:
   *
   * - `false` for `stderr` and file loggers.
   * - `true` for a pipe and system logger.
   *
   * This is a behavior change: in earlier versions of the Tarantool server, the default value was true.
   */
  log_nonblock?: boolean,

  /**
   * Since version 1.6.2. If processing a request takes longer than the given value (in seconds),
   * warn about it in the log. Has effect only if log_level is greater than or equal to 4 (WARNING).
   */
  too_long_threshold?: number,

  /**
   * Since version 1.7.6. Log entries have two possible formats:
   * - `plain` (the default), or
   * - `json` (with more detail and with JSON labels).
   */
  log_format?: 'plain' | 'json',

  /**
   * Since version 2.11.0. Configure the specified log levels (log_level) for different modules.
   *
   * You can specify a logging level for the following module types:
   * - Modules (files) that use the default logger. Example: Set log levels for files that use the default logger.
   * - Modules that use custom loggers created using the log.new() function. Example: Set log levels for modules that use custom loggers.
   * - The `tarantool` module that enables you to configure the logging level for Tarantool core messages.
   * Specifically, it configures the logging level for messages logged from non-Lua code, including C modules. Example: Set a log level for C modules.
   */
  log_modules?: object,
}
