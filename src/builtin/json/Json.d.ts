/** @noSelfInFile */

import { JsonConfig } from './JsonConfig';

/**
 * Convert a Lua object to a JSON string.
 * @param luaValue Either a scalar value or a Lua table value.
 * @param configuration JSON configuration.
 * @returns The original value reformatted as a JSON string.
 */
export declare function encode(luaValue: unknown, configuration?: JsonConfig): string;

/**
 * Convert a JSON string to a Lua object.
 * @param str A string formatted as JSON.
 * @param configuration JSON configuration.
 * @returns The original contents formatted as a Lua table.
 */
export declare function decode(str: string, configuration?: JsonConfig): unknown;

export declare function cfg(config: JsonConfig): void;

export declare const NULL: any;
