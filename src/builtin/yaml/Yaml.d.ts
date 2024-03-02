/** @noSelfInFile */

import { YamlConfig } from './YamlConfig';

/**
 * Convert a Lua object to a YAML string.
 * @param luaValue Either a scalar value or a Lua table value.
 * @returns The original value reformatted as a YAML string.
 */
export declare function encode(luaValue: unknown): string;

/**
 * Convert a YAML string to a Lua object.
 * @param str A string formatted as YAML.
 * @returns The original contents formatted as a Lua table.
 */
export declare function decode(str: string): AnyTable | unknown[];

export declare function cfg(config: YamlConfig): void;

export declare const NULL: any;
