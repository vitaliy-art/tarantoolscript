/** @noSelfInFile */

import { UuidByteOrder } from './UuidByteOrder';
import { UuidObject } from './UuidObject';

/**
 * A nil UUID object. Contains the all-zero UUID value – `00000000-0000-0000-0000-000000000000`.
 */
export declare const NULL: UuidObject;

/**
 * Since version `2.4.1`. Create a UUID sequence. You can use it in an index over a UUID field.
 * @customName new
 */
export declare function new_(): UuidObject;

export declare function __call(): UuidObject;

/**
 * @param byteOrder Byte order of the resulting UUID:
 * - `l` – little-endian,
 * - `b` – big-endian,
 * - `h`, `host` – endianness depends on host (default),
 * - `n`, `network` – endianness depends on network.
 * @returns A UUID (16-byte string).
 */
export declare function bin(byteOrder?: UuidByteOrder): string;

/**
 * @returns A UUID (36-byte binary string).
 */
export declare function str(): string;

/**
 * @param uuidStr UUID in 36-byte hexadecimal string
 */
export declare function fromstr(uuidStr: string): UuidObject;

/**
 * @param uuidBin UUID in 16-byte binary string.
 * @param byteOrder Byte order of the given string:
 * - `l` – little-endian,
 * - `b` – big-endian,
 * - `h`, `host` – endianness depends on host (default),
 * - `n`, `network` – endianness depends on network.
 */
export declare function frombin(uuidBin: string, byteOrder?: UuidByteOrder): UuidObject;

/**
 * Since version `2.6.1`.
 * @param value A value to check.
 * @returns `true` if the specified value is a UUID, and `false` otherwise.
 */
export declare function is_uuid(value: unknown): boolean;

/**
 * The all-zero UUID value can be expressed as `uuid.NULL`, or as `uuid.fromstr('00000000-0000-0000-0000-000000000000')`.
 * The comparison with an all-zero value can also be expressed as `uuid_with_type_cdata == uuid.NULL`.
 * @returns `true` if the value is all zero, otherwise `false`.
 */
export declare function isnil(): boolean;
