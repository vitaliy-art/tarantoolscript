/** @noSelfInFile */

/**
 * Returns `a <= b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.le}
 */
export declare function le(a: number, b: number): boolean;

/**
 * Returns `a <= b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.le}
 */
export declare function le(a: string, b: string): boolean;

/**
 * Returns `a < b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.lt}
 */
export declare function lt(a: number, b: number): boolean;

/**
 * Returns `a < b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.lt}
 */
export declare function lt(a: string, b: string): boolean;

/**
 * Returns `a == b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.eq}
 */
export declare function eq(a: number, b: number): boolean;

/**
 * Returns `a == b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.eq}
 */
export declare function eq(a: string, b: string): boolean;

/**
 * Returns `a == b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.eq}
 */
export declare function eq(
  a: AnyTable | unknown[],
  b: AnyTable | unknown[]
): boolean;

/**
 * Returns `a ~= b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.ne}
 */
export declare function ne(a: number, b: number): boolean;

/**
 * Returns `a ~= b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.ne}
 */
export declare function ne(a: string, b: string): boolean;

/**
 * Returns `a ~= b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.ne}
 */
export declare function ne(
  a: AnyTable | unknown[],
  b: AnyTable | unknown[]
): boolean;

/**
 * Returns `a >= b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.ge}
 */
export declare function ge(a: number, b: number): boolean;

/**
 * Returns `a >= b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.ge}
 */
export declare function ge(a: string, b: string): boolean;

/**
 * Returns `a > b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.gt}
 */
export declare function gt(a: number, b: number): boolean;

/**
 * Returns `a > b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.gt}
 */
export declare function gt(a: string, b: string): boolean;

/**
 * Returns `a + b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.add}
 */
export declare function add(a: number, b: number): number;

/**
 * Returns `a / b`. Performs “true” float division.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.div}
 */
export declare function div(a: number, b: number): number;

/**
 * Returns `a / b`. Performs “true” float division.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.truediv}
 */
export declare function truediv(a: number, b: number): number;

/**
 * Returns `math.floor(a / b)`.
 * Performs division where a result is rounded down.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.floordiv}
 */
export declare function floordiv(a: number, b: number): number;

/**
 * Performs C-like integer division.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.intdiv}
 */
export declare function intdiv(a: number, b: number): number;

/**
 * Returns `a % b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.mod}
 */
export declare function mod(a: number, b: number): number;

/**
 * Returns `-a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.neq}
 */
export declare function neq(a: number): number;

/**
 * Returns `-a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.unm}
 */
export declare function unm(a: number): number;

/**
 * Returns `math.pow(a, b)`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.pow}
 */
export declare function pow(a: number, b: number): number;

/**
 * Returns `a - b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.sub}
 */
export declare function sub(a: number, b: number): number;

/**
 * Returns `a .. b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.concat}
 */
export declare function concat(a: string, b: string): string;

/**
 * Returns `# a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.len}
 */
export declare function len(a: string): number;

/**
 * Returns `# a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.len}
 */
export declare function len(a: unknown[] | AnyTable): number?;

/**
 * Returns `# a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.length}
 */
export declare function length(a: string): number;

/**
 * Returns `# a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.length}
 */
export declare function length(a: unknown[] | AnyTable): number?;

/**
 * Returns `a and b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.land}
 */
export declare function land<Ta, Tb>(a: Ta, b: Tb): Ta | Tb;

/**
 * Returns `a or b`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.lor}
 */
export declare function lor<Ta, Tb>(a: Ta, b: Tb): Ta | Tb;

/**
 * Returns `not a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.lnot}
 */
export declare function lnot(a: unknown): boolean;

/**
 * Returns `not not a`.
 * @see {@link https://luafun.github.io/operators.html#fun.operator.truth}
 */
export declare function truth(a: unknown): boolean;
