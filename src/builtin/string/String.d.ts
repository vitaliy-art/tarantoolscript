/** @noSelfInFile */

export declare const byte: typeof string.byte;

export declare const char: typeof string.char;

export declare const dump: typeof string.dump;

export declare const find: typeof string.find;

export declare const format: typeof string.format;

export declare const gmatch: typeof string.gmatch;

export declare const gsub: typeof string.gsub;

export declare const len: typeof string.len;

export declare const lower: typeof string.lower;

export declare const match: typeof string.match;

export declare const rep: typeof string.rep;

export declare const reverse: typeof string.reverse;

export declare const sub: typeof string.sub;

export declare const upper: typeof string.upper;

/**
 * Return the string left-justified in a string of length `width`.
 * @param input The string to left-justify.
 * @param width The width of the string after left-justifying.
 * @param padCharacter A single character, default = 1 space.
 * @returns Left-justified string (unchanged if width <= string length).
 */
export declare function ljust(input: string, width: number, padCharacter?: string): string;

/**
 * Return the string right-justified in a string of length `width`.
 * @param input The string to right-justify.
 * @param width The width of the string after right-justifying.
 * @param padCharacter A single character, default = 1 space.
 * @returns Right-justified string (unchanged if width <= string length).
 */
export declare function rjust(input: string, width: number, padCharacter?: string): string;

/**
 * Return the hexadecimal value of the input string.
 * @param input The string to process.
 * @returns Hexadecimal, 2 hex-digit characters for each input character.
 */
export declare function hex(input: string): string;

/**
 * Given a string containing pairs of hexadecimal digits, return a string with one byte for each pair.
 * This is the reverse of `string.hex()`. The hexadecimal-input-string must contain an even number of hexadecimal digits.
 * @param hexInput String with pairs of hexadecimal digits.
 * @returns String with one byte for each pair of hexadecimal digits.
 */
export declare function fromhex(hexInput: string): string;

/**
 * Return True if `input-string` starts with `start-string`, otherwise return False.
 *
 * Note: `start-pos` and `end-pos` may be negative, meaning the position should be calculated from the end of the string.
 * @param input The string where `start-string` should be looked for.
 * @param start The string to look for.
 * @param startPos Position: where to start looking within `input-string`.
 * @param endPos Position: where to end looking within `input-string`.
 */
export declare function startswith(input: string, start: string, startPos?: number, endPos?: number): boolean;

/**
 * Return True if `input-string` ends with `end-string`, otherwise return False.
 *
 * Note: `start-pos` and `end-pos` may be negative, meaning the position should be calculated from the end of the string.
 * @param input The string where `end-string` should be looked for.
 * @param end The string to look for.
 * @param startPos Position: where to start looking within `input-string`.
 * @param endPos Position: where to end looking within `input-string`.
 */
export declare function endswith(input: string, end: string, startPos?: number, endPos?: number): boolean;

/**
 * Return the value of the input string, after removing characters on the left.
 * The optional `list-of-characters` parameter is a set not a sequence,
 * so `string.lstrip(...,'ABC')` does not mean strip 'ABC', it means strip 'A' or 'B' or 'C'.
 * @param input The string to process.
 * @param charList What characters can be stripped. Default = space.
 * @returns Result after stripping characters from input string.
 */
export declare function lstrip(input: string, charList?: string): string;

/**
 * Return the value of the input string, after removing characters on the right.
 * The optional `list-of-characters` parameter is a set not a sequence,
 * so `string.rstrip(...,'ABC')` does not mean strip 'ABC', it means strip 'A' or 'B' or 'C'.
 * @param input The string to process.
 * @param charList What characters can be stripped. Default = space.
 * @return Result after stripping characters from input string.
 */
export declare function rstrip(input: string, charList?: string): string;

/**
 * Split `input-string` into one or more output strings in a table. The places to split are the places where `split-string` occurs.
 * @param input The string to split.
 * @param split The string to find within `input-string`. Default = space.
 * @param max Maximum number of delimiters to process counting from the beginning of the input string.
 * Result will contain `max + 1` parts maximum.
 * @returns Table of strings that were split from `input-string`.
 */
export declare function split(input: string, split?: string, max?: number): string[];

/**
 * Return the value of the input string, after removing characters on the left and the right.
 * The optional `list-of-characters` parameter is a set not a sequence,
 * so `string.strip(...,'ABC')` does not mean strip 'ABC', it means strip 'A' or 'B' or 'C'.
 * @param input The string to process.
 * @param charList What characters can be stripped. Default = space.
 * @returns Result after stripping characters from input string.
 */
export declare function strip(input: string, charList?: string): string;
