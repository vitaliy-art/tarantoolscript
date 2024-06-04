/** @noSelfInFile */

/**
 * Construct a new iconv instance.
 * @param toEncoding The name of the encoding that we will convert to.
 * @param fromEncoding The name of the encoding that we will convert from.
 * @returns A new iconv instance – in effect, a callable function.
 * @customName new
 */
export declare function new_(toEncoding: string, fromEncoding: string): IConverter;

/**
 * Convert.
 * @param input The string to be converted (the “from” string).
 * @returns The string that results from the conversion (the “to” string).
 */
type IConverter = (this: void, input: string) => string;
