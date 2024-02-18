/** @noSelfInFile */

import { LogConfig } from './LogConfig';
import { Log } from './LogType';

/**
 * Configure logging options.
 *
 * Note that calling `log.cfg()` before `box.cfg()` takes into account logging options specified using environment variables,
 * such as `TT_LOG` and `TT_LOG_LEVEL`.
 * @param cfg Logging configuration table.
 */
export declare function cfg(cfg: LogConfig): void;

/**
 * @param message A log message.
 * - A message can be a string.
 * - A message may contain C-style format specifiers `%d` or `%s`.
 * - A message may be a scalar data type or a table.
 * @param args Arguments to pass to message.
 */
export declare function error(message: unknown, ...args: unknown[]): void;

/**
 * @param message A log message.
 * - A message can be a string.
 * - A message may contain C-style format specifiers `%d` or `%s`.
 * - A message may be a scalar data type or a table.
 * @param args Arguments to pass to message.
 */
export declare function warn(message: unknown, ...args: unknown[]): void;

/**
 * @param message A log message.
 * - A message can be a string.
 * - A message may contain C-style format specifiers `%d` or `%s`.
 * - A message may be a scalar data type or a table.
 * @param args Arguments to pass to message.
 */
export declare function info(message: unknown, ...args: unknown[]): void;

/**
 * @param message A log message.
 * - A message can be a string.
 * - A message may contain C-style format specifiers `%d` or `%s`.
 * - A message may be a scalar data type or a table.
 * @param args Arguments to pass to message.
 */
export declare function verbose(message: unknown, ...args: unknown[]): void;

/**
 * @param message A log message.
 * - A message can be a string.
 * - A message may contain C-style format specifiers `%d` or `%s`.
 * - A message may be a scalar data type or a table.
 * @param args Arguments to pass to message.
 */
export declare function debug(message: unknown, ...args: unknown[]): void;

/**
 * @returns A PID of a logger. You can use this PID to send a signal to a log rotation program, so it can rotate logs.
 */
export declare function pid(): number;

/**
 * Rotate the log.
 * For example, you need to call this function to continue logging after a log rotation program renames or moves a file with the latest logs.
 */
export declare function rotate(): void;

/**
 * Create a new logger with the specified name. You can configure a specific log level for a new logger using the log_modules configuration property.
 * @param name A logger name.
 * @returns A logger instance.
 * @customName new
 */
export declare function new_(name: string): typeof Log;
