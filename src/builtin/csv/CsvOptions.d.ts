export interface CsvOptions {
  /**
   * Single-byte character to designate end-of-field.
   */
  delimiter?: string;

  /**
   * Single-byte character to designate encloser of string.
   */
  quote_char?: string;

  /**
   * Number of characters to read at once (usually for file-IO efficiency).
   */
  chunk_size?: number;

  /**
   * Number of lines to skip at the start (usually for a header).
   */
  skip_head_lines?: number;
}
