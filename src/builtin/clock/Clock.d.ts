/** @noSelfInFile */

import { CData } from 'builtin/box';

/**
 * Get the wall clock time in seconds.
 */
export declare function time(): number;

/**
 * Get the wall clock time in seconds.
 */
export declare function realtime(): number;

/**
 * Get the wall clock time in nanoseconds.
 */
export declare function time64(): CData;

/**
 * Get the wall clock time in nanoseconds.
 */
export declare function realtime64(): CData;

/**
 * Get the monotonic time in seconds.
 */
export declare function monotonic(): number;

/**
 * Get the monotonic time in nanoseconds.
 */
export declare function monotonic64(): CData;

/**
 * Get the processor time in seconds.
 */
export declare function proc(): number;

/**
 * Get the processor time in nanoseconds.
 */
export declare function proc64(): CData;

/**
 * Get the thread time in seconds.
 */
export declare function thread(): number;

/**
 * Get the thread time in nanoseconds.
 */
export declare function thread64(): CData;

/**
 * Measure the time a function takes within a processor.
 * @param func Function or function reference.
 * @param args Whatever values are required by the function.
 * @returns Table. First element – seconds of CPU time, second element – whatever the function returns.
 */
export declare function bench<T, U extends unknown[]>(func: (...args: U) => T, ...args: U): [number, T];
