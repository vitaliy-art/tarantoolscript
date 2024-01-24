/** @noSelfInFile */

/**
 * Convert a string or a Lua number to a 64-bit integer.
 * The input value can be expressed in decimal, binary (for example `0b1010`), or hexadecimal (for example `-0xffff`).
 * The result can be used in arithmetic, and the arithmetic will be 64-bit integer arithmetic rather than floating-point arithmetic.
 * (Operations on an unconverted Lua number use floating-point arithmetic.)
 * @param value
 * @noResolution
 */
export type ToNumber64 = (value) => number;

/**
 * Parse and execute an arbitrary chunk of Lua code.
 * This function is mainly useful to define and run Lua code without having to introduce changes to the global Lua environment.
 * @param luaChunk Lua code.
 * @param args Zero or more scalar values which will be appended to, or substitute for, items in the Lua chunk.
 * @returns Whatever is returned by the Lua code chunk.
 */
export type DoString = (luaChunk: string, ...args: string[]) => unknown;


