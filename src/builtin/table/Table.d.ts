/** @noSelfInFile */

export declare const concat: typeof table.concat;

export declare const insert: typeof table.insert;

export declare const move: typeof table.move;

export declare const remove: typeof table.remove;

export declare const sort: typeof table.sort;

/**
 * Get the number of elements in a table.
 * @param t Table.
 * @returns number of elements.
 */
export function getn(t: { [key: string | number]: unknown } | unknown[]): number;

/**
 * Returns the largest positive numerical index of the given table, or zero if the table has no positive numerical indices.
 * (To do its job this function does a linear traversal of the whole table.)
 * @param t Table.
 * @returns largest positive numerical index.
 */
export function maxn(t: { [key: number | string]: unknown } | unknown[]): number;

/**
 * This function isn't documented, so his parameters and return describes here like `unknown`.
 */
export function clear(...params: unknown[]): unknown;

/**
 * Copy any table (only top level).
 * Supports `__copy` metamethod for copying custom tables with metatables.
 * @param orig Original copy.
 * @returns The top level copy of original table.
 */
export function copy<T = { [key: number | string]: unknown } | unknown[]>(orig: T): T;

/**
 * Deepcopy lua table (all levels)
 * Supports `__copy` metamethod for copying custom tables with metatables
 * @param orig Original copy.
 * @returns The deep copy of original table.
 */
export function deepcopy<T = { [key: number | string]: unknown } | unknown[]>(orig: T): T;

/**
 * This function isn't documented, so his parameters and return describes here like `unknown`.
 */
export function foreach(...params: unknown[]): unknown;

/**
 * This function isn't documented, so his parameters and return describes here like `unknown`.
 */
export function foreachi(...params: unknown[]): unknown;

/**
 * This function isn't documented, so his parameters and return describes here like `unknown`.
 * @customName new
 */
export function new_(...params: unknown[]): unknown;

/**
 * Compare two lua tables.
 * Supports `__eq` metamethod for comparing custom tables with metatables.
 * @param a Table.
 * @param b Table.
 * @returns `true` when the two tables are equal (`false` otherwise).
 */
export function equals<
  A = { [key: number | string]: unknown } | unknown[],
  B = { [key: number | string]: unknown } | unknown[]
>(a: A, b: B): boolean;
