export interface UriComponents {
  /**
   * A URI scheme.
   * @example `https`, `http`
   */
  scheme?: string;

  /**
   * A user name, which is a part of the `userinfo` subcomponent.
   */
  login?: string;

  /**
   * A password, which is a part of the `userinfo` subcomponent.
   */
  password?: string;

  /**
   * A host subcomponent.
   * @example `www.tarantool.io`
   */
  host?: string;

  /**
   * A service subcomponent. This property might return different values depending on the used URI scheme, for example:
   * - If the `https` or `http` scheme is used, `service` returns the port value.
   * - If the Unix domain socket is used, `service` returns the socket path.
   * @example `3301`, `/tmp/unix.sock`
   */
  service?: string;

  /**
   * A path component.
   * @example `/doc/latest/reference/reference_lua/http/`
   */
  path?: string;

  /**
   * A query component.
   * @example `key1=value1&key2=value2`
   */
  query?: string;

  /**
   * A fragment component.
   * @example `api-reference`
   */
  fragment?: string;

  /**
   * An IPv4 address.
   * @example `127.0.0.1`
   */
  ipv4?: string;

  /**
   * An IPv6 address.
   * @example `2a00:1148:b0ba:2016:12bf:48ff:fe78:fd10`
   */
  ipv6?: string;

  /**
   * A Unix domain socket.
   * @example `/tmp/unix.sock`
   */
  unix?: string;
}
