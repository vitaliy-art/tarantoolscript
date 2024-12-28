/** @noSelfInFile */

/**
 * Pass or return a cipher derived from the string, key, and (optionally, sometimes) initialization vector.
 */
export declare namespace cipher {
  /**
   * aes-128 (with 192-bit binary strings using AES).
   */
  export const aes128: CipherAlgorithm;

  /**
   * aes-192 (with 192-bit binary strings using AES).
   */
  export const aes192: CipherAlgorithm;

  /**
   * aes-256 (with 256-bit binary strings using AES).
   */
  export const aes256: CipherAlgorithm;

  /**
   * des (with 56-bit binary strings using DES, though DES is not recommended).
   */
  export const des: CipherAlgorithm;
}

declare interface CipherAlgorithm {
  /**
   * Cipher Block Chaining.
   */
  cbc: CipherMode;

  /**
   * Cipher Feedback.
   */
  cfb: CipherMode;

  /**
   * Electronic Codebook.
   */
  ecb: CipherMode;

  /**
   * Output Feedback.
   */
  ofb: CipherMode;
}

declare interface CipherMode {
  encrypt(s: string, key: string, initializationVector: string): string;
  decrypt(s: string, key: string, initializationVector: string): string;
}

/**
 * Pass or return a digest derived from the string.
 */
export declare namespace digest {
  /**
   * dss (using DSS).
   */
  export function dss(s: string): string;

  /**
   * dss (using DSS-1).
   */
  export function dss1(s: string): string;

  /**
   * md4 (with 128-bit binary strings using MD4).
   */
  export function md4(s: string): string;

  /**
   * md5 (with 128-bit binary strings using MD5).
   */
  export function md5(s: string): string;

  /**
   * mdc2 (using MDC2).
   */
  export function mdc2(s: string): string;

  /**
   * ripemd (with 160-bit binary strings using RIPEMD-160).
   */
  export function ripemd160(s: string): string;

  /**
   * sha-1 (with 160-bit binary strings using SHA-1).
   */
  export function sha1(s: string): string;

  /**
   * sha-224 (with 224-bit binary strings using SHA-2).
   */
  export function sha224(s: string): string;

  /**
   * sha-256 (with 256-bit binary strings using SHA-2).
   */
  export function sha256(s: string): string;

  /**
   * sha-384 (with 384-bit binary strings using SHA-2).
   */
  export function sha384(s: string): string;

  /**
   * sha-512(with 512-bit binary strings using SHA-2)..
   */
  export function sha512(s: string): string;
}

/**
 * Pass a key and a string. The result is an HMAC message authentication code.
 */
export declare namespace hmac {
  /**
   * md4 (with 128-bit binary strings using MD4).
   */
  export function md4(key: string, s: string): string;

  /**
   * md4 (with 128-bit binary strings using MD4).
   */
  export function md4_hex(key: string, s: string): string;

  /**
   * md5 (with 128-bit binary strings using MD5).
   */
  export function md5(key: string, s: string): string;

  /**
   * md5 (with 128-bit binary strings using MD5).
   */
  export function md5_hex(key: string, s: string): string;

  /**
   * ripemd (with 160-bit binary strings using RIPEMD-160).
   */
  export function ripemd160(key: string, s: string): string;

  /**
   * ripemd (with 160-bit binary strings using RIPEMD-160).
   */
  export function ripemd160_hex(key: string, s: string): string;

  /**
   * sha-1 (with 160-bit binary strings using SHA-1).
   */
  export function sha1(key: string, s: string): string;

  /**
   * sha-1 (with 160-bit binary strings using SHA-1).
   */
  export function sha1_hex(key: string, s: string): string;

  /**
   * sha-224 (with 224-bit binary strings using SHA-2).
   */
  export function sha224(key: string, s: string): string;

  /**
   * sha-224 (with 224-bit binary strings using SHA-2).
   */
  export function sha224_hex(key: string, s: string): string;

  /**
   * sha-256 (with 256-bit binary strings using SHA-2).
   */
  export function sha256(key: string, s: string): string;

  /**
   * sha-256 (with 256-bit binary strings using SHA-2).
   */
  export function sha256_hex(key: string, s: string): string;

  /**
   * sha-384 (with 384-bit binary strings using SHA-2).
   */
  export function sha384(key: string, s: string): string;

  /**
   * sha-384 (with 384-bit binary strings using SHA-2).
   */
  export function sha384_hex(key: string, s: string): string;

  /**
   * sha-512(with 512-bit binary strings using SHA-2).
   */
  export function sha512(key: string, s: string): string;

  /**
   * sha-512(with 512-bit binary strings using SHA-2).
   */
  export function sha512_hex(key: string, s: string): string;
}
