/** @noSelfInFile */

import { CsvOptions } from './CsvOptions';
import { CsvReadable } from './CsvReadable';
import { CsvWritable } from './CsvWritable';

/**
 * Get CSV-formatted input from `readable` and return a table as output.
 * Usually `readable` is either a string or a file opened for reading.
 * Usually `options` is not specified.
 * @param readable A string, or any object which has a `read()` method, formatted according to the CSV rules.
 * @param options An options table.
 * @returns Table - loaded value.
 */
export declare function load(readable: CsvReadable, options?: CsvOptions): unknown[];

/**
 * Get table input from `csv-table` and return a CSV-formatted string as output.
 * Or, get table input from `csv-table` and put the output in `writable`.
 * Usually `options` is not specified.
 * Usually `writable`, if specified, is a file opened for writing.
 * `csv.dump()` is the reverse of `csv.load()`.
 * @param csvTable A table which can be formatted according to the CSV rules.
 * @param options An options table.
 * @param writable Any object which has a `write()` method.
 * @returns String, which is written to `writable` if specified.
 */
export declare function dump(csvTable: unknown[], options?: CsvOptions): string;
export declare function dump(csvTable: unknown[], options?: CsvOptions, writable: CsvWritable): void;

/**
 * Form a Lua iterator function for going through CSV records one field at a time.
 * Use of an iterator is strongly recommended if the amount of data is large (ten or more megabytes).
 * @param input A string, or any object which has a `read()` method, formatted according to che CSV rules.
 * @param options An options table.
 * @returns Lua iterator.
 */
export declare function iterate(input: CsvReadable, options?: CsvOptions): LuaIterable<LuaMultiReturn<[number, unknown[]]>>
