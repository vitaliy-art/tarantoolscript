/** @noSelfInFile */

/**
 * Open a file, and allow iterating over one file entry at a time.
 *
 * Useful to read Tarantool’s snapshot files or write-ahead-log (WAL) files.
 * A description of the file format is in section Data persistence and the WAL file format.
 * @param fileName Name of file.
 * @returns Iterator which can be used in a for/end loop.
 */
export declare function pairs(fileName?: string): LuaIterable<LuaMultiReturn<[number, unknown]>>;
