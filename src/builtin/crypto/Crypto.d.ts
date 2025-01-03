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
  encrypt: {
    (this: void, s: string, key: string, initializationVector: string): string;
    ['new'](this: void, key?: string): Incremental;
  };
  decrypt: {
    (this: void, s: string, key: string, initializationVector: string): string;
    ['new'](this: void, key?: string): Incremental;
  };
}

declare interface Incremental {
  init(s?: string, initialValue?: string): void;
  update(s: string): void;
  result(): string;
  free(): void;
}

/**
 * Pass or return a digest derived from the string.
 */
export declare namespace digest {
  /**
   * dss (using DSS).
   */
  export const dss: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * dss (using DSS-1).
   */
  export const dss1: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * md4 (with 128-bit binary strings using MD4).
   */
  export const md4: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * md5 (with 128-bit binary strings using MD5).
   */
  export const md5: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * mdc2 (using MDC2).
   */
  export const mdc2: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * ripemd (with 160-bit binary strings using RIPEMD-160).
   */
  export const ripemd160: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * sha-1 (with 160-bit binary strings using SHA-1).
   */
  export const sha1: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * sha-224 (with 224-bit binary strings using SHA-2).
   */
  export const sha224: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * sha-256 (with 256-bit binary strings using SHA-2).
   */
  export const sha256: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * sha-384 (with 384-bit binary strings using SHA-2).
   */
  export const sha384: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };

  /**
   * sha-512(with 512-bit binary strings using SHA-2)..
   */
  export const sha512: {
    (this: void, s: string): string;
    ['new'](this: void, key?: string, initialValue?: string): Incremental;
  };
}

/**
 * Pass a key and a string. The result is an HMAC message authentication code.
 */
export declare namespace hmac {
  /**
   * md4 (with 128-bit binary strings using MD4).
   */
  export const md4: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * md4 (with 128-bit binary strings using MD4).
   */
  export const md4_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * md5 (with 128-bit binary strings using MD5).
   */
  export const md5: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * md5 (with 128-bit binary strings using MD5).
   */
  export const md5_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * ripemd (with 160-bit binary strings using RIPEMD-160).
   */
  export const ripemd160: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * ripemd (with 160-bit binary strings using RIPEMD-160).
   */
  export const ripemd160_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-1 (with 160-bit binary strings using SHA-1).
   */
  export const sha1: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-1 (with 160-bit binary strings using SHA-1).
   */
  export const sha1_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-224 (with 224-bit binary strings using SHA-2).
   */
  export const sha224: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-224 (with 224-bit binary strings using SHA-2).
   */
  export const sha224_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-256 (with 256-bit binary strings using SHA-2).
   */
  export const sha256: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-256 (with 256-bit binary strings using SHA-2).
   */
  export const sha256_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-384 (with 384-bit binary strings using SHA-2).
   */
  export const sha384: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-384 (with 384-bit binary strings using SHA-2).
   */
  export const sha384_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-512(with 512-bit binary strings using SHA-2).
   */
  export const sha512: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };

  /**
   * sha-512(with 512-bit binary strings using SHA-2).
   */
  export const sha512_hex: {
    (this: void, key: string, s: string): string;
    ['new'](this: void, key: string, initialValue?: string): Incremental;
  };
}
