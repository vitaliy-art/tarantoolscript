import { CData } from 'builtin/box';
import { UuidByteOrder } from './UuidByteOrder';

export interface UuidObject extends CData {
  /**
   * @param byteOrder Byte order of the resulting UUID:
   * - `l` – little-endian,
   * - `b` – big-endian,
   * - `h`, `host` – endianness depends on host (default),
   * - `n`, `network` – endianness depends on network.
   * @returns UUID converted from cdata input value (16-byte binary string).
   */
  bin(byteOrder?: UuidByteOrder): string;

  /**
   * @returns UUID converted from cdata input value (36-byte hexadecimal string).
   */
  str(): string;

  /**
   * The all-zero UUID value can be expressed as `uuid.NULL`, or as `uuid.fromstr('00000000-0000-0000-0000-000000000000')`.
   * The comparison with an all-zero value can also be expressed as `uuid_with_type_cdata == uuid.NULL`.
   * @returns `true` if the value is all zero, otherwise `false`.
   */
  isnil(): boolean;
}
