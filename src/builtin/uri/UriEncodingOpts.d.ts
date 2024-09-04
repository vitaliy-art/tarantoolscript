import { CData } from '../../builtin';

export interface UriEncodingOpts {
  /**
   * Enable encoding of `+` as the space character. By default, this property is set to `false`.
   */
  plus?: boolean;

  /**
   * Specify a Lua pattern defining unreserved symbols that are not encoded.
   * @example 'a-zA-Z0-9%-._~'
   */
  unreserved?: CData;
}
