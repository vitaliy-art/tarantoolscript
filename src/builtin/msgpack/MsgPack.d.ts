import { CData } from '../box';
import { MsgPackCfgCallable } from './MsgPackCfgCallable';
import { MsgPackObject } from './MsgPackObject';

/**
 * Convert a Lua object to a raw MsgPack string.
 * @param value Either a scalar value or a Lua table value.
 * @returns The original contents formatted as a raw MsgPack string.
 */
export declare function encode(value: unknown): string;

/**
 * Convert a raw MsgPack string to a Lua object.
 * @param msgpackString A raw MsgPack string.
 * @param startPosition Where to start, minimum = 1, maximum = string length, default = 1.
 * @returns Lua object and number:
 * - (if `msgpack_string` is a valid raw MsgPack string) the original contents of `msgpack_string`, formatted as a Lua object, usually a Lua table,
 * (otherwise) a scalar value, such as a string or a number;
 * - “next_start_position”. If `decode` stops after parsing as far as byte N in `msgpack_string`, then “next_start_position” will equal N + 1,
 * and `decode(msgpack_string, next_start_position)` will continue parsing from where the previous `decode` stopped, plus 1.
 * Normally `decode` parses all of `msgpack_string`, so “next_start_position” will equal `string.len(msgpack_string) + 1`.
 */
export declare function decode(msgpackString: string, startPosition?: number): LuaMultiReturn<[unknown, number]>;

/**
 * Convert a raw MsgPack string, whose address is supplied as a C-style string pointer such as the `rpos`
 * pointer which is inside an ibuf such as `buffer.ibuf()` creates, to a Lua object.
 * A C-style string pointer may be described as `cdata<char *>` or `cdata<const char *>`.
 * @param pointer A pointer to a raw MsgPack string (`buffer_object`).
 * @param size Number of bytes in the raw MsgPack string.
 * @returns Table and C-style pointer to after what was passed:
 * - (if C_style_string_pointer points to a valid raw MsgPack string) the original contents of `msgpack_string`, formatted as a Lua object,
 * usually a Lua table, (otherwise) a scalar value, such as a string or a number;
 * - returned_pointer = a C-style pointer to the byte after what was passed, so that C_style_string_pointer + size = returned_pointer.
 */
export declare function decode(pointer: CData, size: number): LuaMultiReturn<[unknown, CData]>;

/** Input and output are the same as for `decode(string)`. */
export declare function decode_unchecked(msgpackString: string, startPosition?: number): LuaMultiReturn<[unknown, number]>;

/**
 * Input and output are the same as for `decode(C_style_string_pointer)`, except that `size` is not needed.
 * Some checking is skipped, and `decode_unchecked(C_style_string_pointer)` can operate with string pointers
 * to buffers which `decode(C_style_string_pointer)` cannot handle. For an example see the `buffer` module.
 */
export declare function decode_unchecked(pointer: CData): LuaMultiReturn<[unknown, CData]>;

/**
 * Call the MsgPuck’s `mp_decode_array` function and return the array size and a pointer to the first array component.
 * A subsequent call to `msgpack_decode` can decode the component instead of the whole array.
 * @param byteArray A pointer to a raw MsgPack string.
 * @param size A number greater than or equal to the string’s length.
 * @returns The size of the array and a pointer to after the array header.
 */
export declare function decode_array_header(byteArray: CData, size: number): LuaMultiReturn<[number, CData]>;

/**
 * Call the MsgPuck’s `mp_decode_map` function and return the map size and a pointer to the first map component.
 * A subsequent call to `msgpack_decode` can decode the component instead of the whole map.
 * @param byteArray A pointer to a raw MsgPack string.
 * @param size A number greater than or equal to the raw MsgPack string’s length.
 * @returns The size of the map and a pointer to after the map header.
 */
export declare function decode_map_header(byteArray: CData, size: number): LuaMultiReturn<[number, CData]>;

/**
 * Change MsgPack configuration settings.
 *
 * The values are all either integers or boolean `true`/`false`.
 */
export declare const cfg: MsgPackCfgCallable;

/**
 * A value comparable to Lua “nil” which may be useful as a placeholder in a tuple.
 */
export declare const NULL: void;

/**
 * Since: `2.10.0`.
 *
 * Encode an arbitrary Lua object into the MsgPack format.
 * @param value A Lua object of any type.
 * @returns Encoded MsgPack data encapsulated in a MsgPack object (Type - `userdata`).
 */
export declare function object(value: unknown): MsgPackObject;

/**
 * Since: `2.10.0`.
 *
 * Create a MsgPack object from a raw MsgPack string.
 * @param msgpackString A raw MsgPack string.
 * @returns A MsgPack object (Type - `userdata`).
 */
export declare function object_from_raw(msgpackString: string): MsgPackObject;

/**
 * Since: `2.10.0`.
 *
 * Create a MsgPack object from a raw MsgPack string.
 * The address of the MsgPack string is supplied as a C-style string pointer such as the `rpos` pointer inside an `ibuf` that the `buffer.ibuf()` creates.
 * A C-style string pointer may be described as `cdata<char *>` or `cdata<const char *>`.
 * @param pointer A pointer to a raw MsgPack string.
 * @param size Number of bytes in the raw MsgPack string.
 * @returns A MsgPack object (Type - `userdata`).
 */
export declare function object_from_raw(pointer: CData, size: number): MsgPackObject;

/**
 * Since: `2.10.0`.
 *
 * Check if the given argument is a MsgPack object.
 * @param value Any value.
 * @returns `true` if the argument is a MsgPack object; otherwise, `false`.
 */
export declare function is_object(value: unknown): value is MsgPackObject;
