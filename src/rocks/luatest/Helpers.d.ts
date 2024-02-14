/** @noSelfInFile */

export declare let RETRYING_TIMEOUT: number;
export declare let RETRYING_DELAY: number;

/**
 * Return all combinations of parameters. Accepts params’ names and thier every possible value.
 */
export function matrix(values: AnyTable): LuaTable<string, unknown>[];

/**
 * Keep calling fn until it returns without error. Throws last error if config.timeout is elapsed.
 * Default options are taken from helpers.RETRYING_TIMEOUT and helpers.RETRYING_DELAY.
 * @param config Retrying options.
 * @param fn Function to call.
 * @param fnArgs Arguments to pass to called function.
 */
export function retrying<TResult = unknown>(config: { timeout?: number, delay?: number }, fn: (this: void, ...args: any[]) => TResult, ...fnArgs: unknown[]): TResult;

/**
 * Generates uuids from its 5 parts. Strings are repeated and numbers are padded to match required part length.
 * If number of arguments is less than 5 then first and last arguments are used for corresponding parts, missing parts are set to 0.
 * @param tl time_low.
 * @param other Other parts of UUID.
 */
export function uuid(tl: string | number, ...other: (string | number)[]): string;
