/** @noSelfInFile */

import { CData } from '../../builtin';
import { UriComponents } from './UriComponents';
import { UriEncodingOpts } from './UriEncodingOpts';

/**
 * Parse a URI string into components.
 * @param uri a URI string.
 * @returns a URI components table.
 */
export declare function parse(uri: string): UriComponents;

/**
 * Construct a URI from the specified components.
 * @param uri a URI components table.
 * @param includePassword specify whether the password component is rendered in clear text; otherwise, it is omitted.
 * @returns a URI string.
 */
export declare function format(uri: UriComponents, includePassword?: boolean): string;

/**
 * Since: `2.11.0`.
 * Encode a string using the specified encoding options.
 *
 * By default, `uri.escape()` uses encoding options defined by the `uri.RFC3986` table.
 * If required, you can customize encoding options using the `uri_encoding_opts` optional parameter, for example:
 * - Pass the predefined set of options targeted for encoding a specific URI part (for example, `uri.PATH` or `uri.QUERY`).
 * - Pass custom encoding options using the `uri_encoding_opts` object.
 * @param original a string to encode.
 * @param opts encoding options.
 * @returns an encoded string.
 */
export declare function escape(original: string, opts?: UriEncodingOpts): string;

/**
 * Since: `2.11.0`.
 *
 * Decode a string using the specified encoding options.
 *
 * By default, `uri.escape()` uses encoding options defined by the `uri.RFC3986` table.
 * If required, you can customize encoding options using the `uri_encoding_opts` optional parameter, for example:
 * - Pass the predefined set of options targeted for encoding a specific URI part (for example, `uri.PATH` or `uri.QUERY`).
 * - Pass custom encoding options using the `uri_encoding_opts` object.
 * @param encoded a string to decode.
 * @param opts encoding options.
 * @returns a decoded string.
 */
export declare function unescape(encoded: string, opts?: UriEncodingOpts): string;

/**
 * @todo Fix documentation.
 *
 * Not documented yet.
 */
export declare function unreserved(value: string): CData;

/**
 * @todo Fix documentation.
 *
 * Not documented yet.
 */
export declare function values<TArgs = any[]>(...args: TArgs): [...TArgs];

/**
 * Encoding options that use unreserved symbols defined in RFC 3986.
 * These are default options used to encode and decode using the `uri.escape()` and `uri.unescape()` functions, respectively.
 */
export declare const RFC3986: UriEncodingOpts;

/**
 * Options used to encode the `path` URI component.
 */
export declare const PATH: UriEncodingOpts;

/**
 * Options used to encode specific `path` parts.
 */
export declare const PATH_PART: UriEncodingOpts;

/**
 * Options used to encode the `query` URI component.
 */
export declare const QUERY: UriEncodingOpts;

/**
 * Options used to encode specific `query` parts.
 */
export declare const QUERY_PART: UriEncodingOpts;

/**
 * Options used to encode the `fragment` URI component.
 */
export declare const FRAGMENT: UriEncodingOpts;

/**
 * Options used to encode `application/x-www-form-urlencoded` form parameters.
 */
export declare const FORM_URLENCODED: UriEncodingOpts;
