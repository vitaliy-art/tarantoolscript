/** @noSelfInFile */

export interface Utf8 {
  /**
   * Compare two strings with the Default Unicode Collation Element Table (DUCET) for the Unicode Collation Algorithm.
   * @param str1 A string encoded with UTF-8.
   * @param str2 A string encoded with UTF-8.
   * @returns -1 meaning “less”, 0 meaning “equal”, +1 meaning “greater”.
   */
  casecmp(str1: string, str2: string): -1 | 0 | 1;

  /**
   * The code-point number is the value that corresponds to a character in the Unicode Character Database.
   * This is not the same as the byte values of the encoded character,
   * because the UTF-8 encoding scheme is more complex than a simple copy of the code-point number.
   *
   * Another way to construct a string with Unicode characters is with the `\u{hex-digits}` escape mechanism,
   * for example `\u{41}\u{42}` and `utf8.char(65,66)` both produce the string `AB`.
   * @param codePoints A Unicode code point value, repeatable.
   * @returns A UTF-8 string.
   */
  char(...codePoints: [number, ...number[]]): string;

  /**
   * Compare two strings with the Default Unicode Collation Element Table (DUCET) for the Unicode Collation Algorithm.
   * @param str1 A string encoded with UTF-8.
   * @param str2 A string encoded with UTF-8.
   * @returns -1 meaning “less”, 0 meaning “equal”, +1 meaning “greater”.
   */
  cmp(str1: string, str2: string): -1 | 0 | 1;

  /**
   * Return `true` if the input character is an “alphabetic-like” character, otherwise return `false`.
   * @param char A single UTF8 character, expressed as a one-byte string or a code point value.
   * @returns `true` if the input character is an “alphabetic-like” character, otherwise return `false`.
   */
  isalpha(char: string): boolean;

  /**
   * Return `true` if the input character is a digit, otherwise return `false`.
   * @param char A single UTF8 character, expressed as a one-byte string or a code point value.
   * @returns `true` if the input character is a digit, otherwise return `false`.
   */
  isdigit(char: string): boolean;

  /**
   * Return `true` if the input character is lower case, otherwise return `false`.
   * @param char A single UTF8 character, expressed as a one-byte string or a code point value.
   * @returns `true` if the input character is lower case, otherwise return `false`.
   */
  islower(char: string): boolean;

  /**
   * Return `true` if the input character is upper case, otherwise return `false`.
   * @param char A single UTF8 character, expressed as a one-byte string or a code point value.
   * @returns `true` if the input character is upper case, otherwise return `false`.
   */
  isupper(char: string): boolean;

  /**
   * The number of characters in the string, or between start and end.
   *
   * Byte positions for start and end can be negative, which indicates “calculate from end of string” rather than “calculate from start of string”.
   * @param str A string encoded with UTF-8.
   * @param startByte Byte position of the first character.
   * @param endByte Byte position where to stop.
   * @returns The number of characters in the string, or between start and end.
   */
  len(str: string, startByte?: number, endByte?: number): number;

  /**
   * @param str A string encoded with UTF-8.
   * @returns The same string, lower case.
   */
  lower(str: string): string;

  /**
   * Useful in a loop to get one character at a time from a UTF-8 string.
   * @param str A string encoded with UTF-8.
   * @param startByte Byte position where to start within the string, default is `1`.
   * @returns Byte position of the next character and the code point value of the next character.
   */
  next(str: string, startByte: number): LuaMultiReturn<[number, number]>;

  /**
   * Character positions for start and end can be negative,
   * which indicates “calculate from end of string” rather than “calculate from start of string”.
   *
   * The default value for end-character is the length of the input string.
   * Therefore, saying `utf8.sub(1, 'abc')` will return `abc`, the same as the input string.
   * @param str A string encoded as UTF-8.
   * @param startCharacter The position of the first character.
   * @param endCharacter The position of the last character.
   * @returns A UTF-8 string, the “substring” of the input value.
   */
  sub(str: string, startCharacter: number, endCharacter?: number): string;

  /**
   * @param str A string encoded with UTF-8.
   * @returns The same string, upper case.
   */
  upper(str: string): string;
}
