/** @noSelf */
export interface MsgPackCfg {
  /**
   * The maximum recursion depth for encoding.
   * @default 128
   */
  encode_max_depth?: number;

  /**
   * Specify whether to crop tables with nesting level deeper than `cfg.encode_max_depth`.
   * Not-encoded fields are replaced with one null. If not set, too high nesting is considered an error.
   * @default false
   */
  encode_deep_as_nil?: boolean;

  /**
   * Specify whether to enable encoding of `NaN` and `Inf` numbers.
   * @default true
   */
  encode_invalid_numbers?: boolean;

  /**
   * Specify whether the serializer will follow `__serialize` metatable field.
   * @default true
   */
  encode_load_metatables?: boolean;

  /**
   * Specify whether to use `tostring()` for unknown types.
   * @default false
   */
  encode_use_tostring?: boolean;

  /**
   * Specify whether to use `NULL` for non-recognized types.
   * @default false
   */
  encode_invalid_as_nil?: boolean;

  /**
   * Specify whether to handle excessively sparse arrays as maps.
   * @default true
   */
  encode_sparse_convert?: boolean;

  /**
   * `1/encode_sparse_ratio` is the permissible percentage of missing values in a sparse array.
   * @default 2
   */
  encode_sparse_ratio?: number;

  /**
   * A limit ensuring that small Lua arrays are always encoded as sparse arrays (instead of generating an error or encoding as a map).
   * @default 10
   */
  encode_sparse_safe?: number;

  /**
   * Specify how error objects (`box.error.new()`) are encoded in the MsgPack format:
   * - if `true`, errors are encoded as the the `MP_ERROR` MsgPack extension.
   * - if `false`, the encoding format depends on other configuration options (`encode_load_metatables`, `encode_use_tostring`, `encode_invalid_as_nil`).
   * @default true
   */
  encode_error_as_ext?: boolean;

  /**
   * Specify whether to enable decoding of `NaN` and `Inf` numbers.
   * @default true
   */
  decode_invalid_numbers?: boolean;

  /**
   * Specify whether to set metatables for all arrays and maps.
   * @default true
   */
  decode_save_metatables?: boolean;
}
