/** @noSelfInFile */

export declare namespace aes256cbc {
  /**
   * Encrypt a string using AES.
   * @returns 256-bit binary string = digest made with AES.
   */
  export function encrypt(value: string, key: string, iv: string): string;

  /**
   * Decrypt a string using AES.
   */
  export function decrypt(value: string, key: string, iv: string): string;
}

/**
* Get a digest made with MD4.
* @returns 128-bit binary string = digest made with MD4.
*/
export declare function md4(value: string): string;

/**
* Get a hexadecimal digest made with MD4.
* @returns 32-byte string = hexadecimal of a digest calculated with md4.
*/
export declare function md4_hex(value: string): string;

/**
* Get a digest made with MD5.
* @returns 128-bit binary string = digest made with MD5.
*/
export declare function md5(value: string): string;

/**
* Get a hexadecimal digest made with MD5.
* @returns 32-byte string = hexadecimal of a digest calculated with md5.
*/
export declare function md5_hex(value: string): string;

/**
* Get a digest made with PBKDF2.
* @returns binary string = digest made with PBKDF2.
*
* For effective encryption the `iterations` value should be at least several thousand.
* The `digest-length` value determines the length of the resulting binary string.
*
* Note: `digest.pbkdf2()` yields and should not be used in a transaction (between `box.begin()` and `box.commit()`/`box.rollback()`).
* PBKDF2 is a time-consuming hash algorithm.
* It runs in a separate coio thread.
* While calculations are performed, the fiber that calls `digest.pbkdf2()` yields and another fiber continues working in the tx thread.
*/
export declare function pbkdf2(value: string, salt: string, iterations?: number, digestLength?: number): string;

/**
* Get a digest made with SHA-1.
* @returns 160-bit binary string = digest made with SHA-1.
*/
export declare function sha1(value: string): string;

/**
* Get a hexadecimal digest made with SHA-1.
* @returns 40-byte string = hexadecimal of a digest calculated with sha1.
*/
export declare function sha1_hex(value: string): string;

/**
* Get a 224-bit digest made with SHA-2.
* @returns 224-bit binary string = digest made with SHA-2.
*/
export declare function sha224(value: string): string;

/**
* Get a 56-byte hexadecimal digest made with SHA-2.
* @returns 56-byte string = hexadecimal of a digest calculated with sha224.
*/
export declare function sha224_hex(value: string): string;

/**
* Get a 256-bit digest made with SHA-2.
* @returns 256-bit binary string = digest made with SHA-2.
*/
export declare function sha256(value: string): string;

/**
* Get a 64-byte hexadecimal digest made with SHA-2.
* @returns 64-byte string = hexadecimal of a digest calculated with sha256.
*/
export declare function sha256_hex(value: string): string;

/**
* Get a 384-bit digest made with SHA-2
* @returns 384-bit binary string = digest made with SHA-2.
*/
export declare function sha384(value: string): string;

/**
* Get a 96-byte hexadecimal digest made with SHA-2.
* @returns 96-byte string = hexadecimal of a digest calculated with sha384.
*/
export declare function sha384_hex(value: string): string;

/**
* Get a 512-bit digest made with SHA-2.
* @returns 512-bit binary string = digest made with SHA-2.
*/
export declare function sha512(value: string): string;

/**
* Get a 128-byte hexadecimal digest made with SHA-2.
* @returns 128-byte string = hexadecimal of a digest calculated with sha512.
*/
export declare function sha512_hex(value: string): string;

/**
* Encode a string to Base64.
* @returns base64 encoding from a regular string.
*
* The possible options are:
* - `nopad` – result must not include ‘=’ for padding at the end,
* - `nowrap` – result must not include line feed for splitting lines after 72 characters,
* - `urlsafe` – result must not include ‘=’ or line feed, and may contain ‘-‘ or ‘_’ instead of ‘+’ or ‘/’
* for positions 62 and 63 in the index table.
*
* Options may be `true` or `false`, the default value is `false`.
*/
export declare function base64_encode(value: string, options?: { nopad?: boolean; nowrap?: boolean; urlsafe?: boolean }): string;

/**
* Decode a Base64-encoded string.
* @returns a regular string from a base64 encoding.
*/
export declare function base64_decode(value: string): string;

/**
* Get an array of random bytes.
* @returns Returns array of random bytes with length = integer.
*/
export declare function urandom(length: number): string;

/**
* Get a 32-bit checksum made with CRC32.
* @returns 32-bit checksum made with CRC32.
*
* The `crc32` and `crc32_update` functions use the Cyclic Redundancy Check polynomial value: `0x1EDC6F41` / `4812730177`.
* (Other settings are: input = reflected, output = reflected, initial value = 0xFFFFFFFF, final xor value = 0x0.)
* If it is necessary to be compatible with other checksum functions in other programming languages,
* ensure that the other functions use the same polynomial value.
*/
export declare function crc32(value: string): number;

export declare namespace crc32 {
  /**
   * Initiate incremental CRC32.
   * @customName new
   */
  export function new_(): {
      update(this, value: string): void;
      result(this): number;
  }
}

/**
* Get a number made with a consistent hash.
* @returns a number made with consistent hash.
*
* The guava function uses the Consistent Hashing algorithm of the Google guava library.
* The first parameter should be a hash code;
* the second parameter should be the number of buckets;
* the returned value will be an integer between 0 and the number of buckets.
*/
export declare function guava(state: number, bucket: number): number;

/**
* Get a digest made with MurmurHash.
* @returns 32-bit binary string = digest made with MurmurHash.
*/
export declare function murmur(value: string): number;

export declare namespace murmur {
  /**
   * Initiate incremental MurmurHash.
   * @customName new
   */
  export function new_(options?: { seed?: number }): {
      update(this, value: string): void;
      result(this): number;
  }
}
