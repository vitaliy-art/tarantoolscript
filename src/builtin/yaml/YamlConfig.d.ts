export interface YamlConfig {
  /**
   * A flag saying whether to enable encoding of `NaN` and `Inf` numbers.
   * @default true
   */
  encode_invalid_numbers?: boolean;

  /**
   * Precision of floating point numbers.
   * @default 14
   */
  encode_number_precision?: number;

  /**
   * A flag saying whether the serializer will follow `__serialize` metatable field.
   * @default true
   */
  encode_load_metatables?: boolean;

  /**
   * A flag saying whether to use `tostring()` for unknown types.
   * @default false
   */
  encode_use_tostring?: boolean;

  /**
   * A flag saying whether to use `NULL` for non-recognized types.
   * @default false
   */
  encode_invalid_as_nil?: boolean;

  /**
   * A flag saying whether to handle excessively sparse arrays as maps. See detailed description below.
   * @true
   */
  encode_sparse_convert?: boolean;

  /**
   * `1/encode_sparse_ratio` is the permissible percentage of missing values in a sparse array.
   * @default 2
   */
  encode_sparse_ratio?: number;

  /**
   * A limit ensuring that small Lua arrays are always encoded as sparse arrays (instead of generating an error or encoding as map).
   * @default 10
   */
  encode_sparse_safe?: number;

  /**
   * A flag saying whether to enable decoding of `NaN` and `Inf` numbers.
   * @true
   */
  decode_invalid_numbers?: boolean;

  /**
   * A flag saying whether to set metatables for all arrays and maps.
   * @default true
   */
  decode_save_metatables?: boolean;
}
