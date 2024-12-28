/** @noSelfInFile */

import { CData } from '../box';

type DecimalNumber = CData;

/**
 * Returns absolute value of a decimal number. For example if `a` is `-1` then `decimal.abs(a)` returns `1`.
 */
export declare function abs(source: string | number | DecimalNumber): DecimalNumber;

/**
 * Returns `e` raised to the power of a decimal number.
 * For example if `a` is `1` then `decimal.exp(a)` returns `2.7182818284590452353602874713526624978`.
 * Compare `math.exp(1)` from the Lua math library, which returns `2.718281828459`.
 */
export declare function exp(source: string | number | DecimalNumber): DecimalNumber;

/**
 * Returns `true` if the specified value is a decimal, and `false` otherwise.
 * For example if a is `123` then `decimal.is_decimal(a)` returns `false`.
 * If `a` is `decimal.new(123)` then `decimal.is_decimal(a)` returns `true`.
 */
export declare function is_decimal(source: string | number | DecimalNumber): boolean;

/**
 * Returns natural logarithm of a decimal number. For example if `a` is `1` then `decimal.ln(a)` returns `0`.
 */
export declare function ln(source: string | number | DecimalNumber): DecimalNumber;

/**
 * Returns base-10 logarithm of a decimal number. For example if `a` is `100` then `decimal.log10(a)` returns `2`.
 */
export declare function log10(source: string | number | DecimalNumber): DecimalNumber;

/**
 * Returns the value of the input as a decimal number. For example if `a` is `1E-1` then `decimal.new(a)` returns `0.1`.
 * @customName new
 */
export declare function new_(source: string | number | DecimalNumber): DecimalNumber;

/**
 * Returns the number of digits in a decimal number. For example if `a` is `123.4560` then `decimal.precision(a)` returns `7`.
 */
export declare function precision(source: DecimalNumber): number;

/**
 * Returns the number after possible rounding or padding.
 * If the number of post-decimal digits is greater than new-scale, then rounding occurs.
 * The rounding rule is: round half away from zero.
 * If the number of post-decimal digits is less than new-scale, then padding of zeros occurs.
 * For example if `a` is `-123.4550` then `decimal.rescale(a, 2)` returns `-123.46`, and `decimal.rescale(a, 5)` returns `-123.45500`.
 */
export declare function rescale(source: DecimalNumber, newScale: number): DecimalNumber;

/**
 * Returns the number of post-decimal digits in a decimal number. For example if `a` is `123.4560` then `decimal.scale(a)` returns `4`.
 */
export declare function scale(source: DecimalNumber): number;

/**
 * Returns the square root of a decimal number. For example if `a` is `2` then `decimal.sqrt(a)` returns `1.4142135623730950488016887242096980786`.
 */
export declare function sqrt(source: string | number | DecimalNumber): DecimalNumber;

/**
 * Returns a decimal number after possible removing of trailing post-decimal zeros.
 * For example if `a` is `2.20200` then `decimal.trim(a)` returns `2.202`.
 */
export declare function trim(source: DecimalNumber): DecimalNumber;
