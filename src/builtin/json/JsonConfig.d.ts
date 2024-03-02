export interface JsonConfig {
  /**
   * Max recursion depth for encoding.
   * @default 128
   */
  encode_max_depth?:	number;

  /**
   * A flag saying whether to crop tables with nesting level deeper than `cfg.encode_max_depth`.
   * Not-encoded fields are replaced with one null. If not set, too deep nesting is considered an error.
   * @default false
   */
  encode_deep_as_nil?: boolean;

  /**
   * A flag saying whether to enable encoding of `NaN` and Inf numbers.
   * @default true
   */
  encode_invalid_numbers?: boolean;

  /**
   * Precision of floating point numbers.
   * @default 14
   */
  encode_number_precision?:	number;

  /**
   * A flag saying whether the serializer will follow `__serialize` metatable field.
   * @default true
   */
  encode_load_metatables?: boolean;

  /**
   * A flag saying whether to use `tostring()` for unknown types.
   * @default false
   */
  encode_use_tostring?:	boolean;

  /**
   * A flag saying whether use `NULL` for non-recognized types.
   * @default false
   */
  encode_invalid_as_nil?:	boolean;

  /**
   * A flag saying whether to handle excessively sparse arrays as maps. See detailed description below.
   * @default true
   */
  encode_sparse_convert?: boolean;

  /**
   * `1/encode_sparse_ratio` is the permissible percentage of missing values in a sparse array.
   * @default 2
   */
  encode_sparse_ratio?:	number;

  /**
   * A limit ensuring that small Lua arrays are always encoded as sparse arrays (instead of generating an error or encoding as a map).
   * @default 10
   */
  encode_sparse_safe?: number;

  /**
   * A flag saying whether to enable decoding of `NaN` and `Inf` numbers.
   * @default true
   */
  decode_invalid_numbers?: boolean;

  /**
   * A flag saying whether to set metatables for all arrays and maps.
   * @default true
   */
  decode_save_metatables?: boolean;

  /**
   * Max recursion depth for decoding.
   * @default 128
   */
  decode_max_depth?: number;
}
