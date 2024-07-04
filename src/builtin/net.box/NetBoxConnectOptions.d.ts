import { ProtocolFeatures } from 'builtin/box/iproto/ProtocolFeatures';

export interface NetBoxConnectOptions {
  /**
   * Option to connect to a remote host other than through URI.
   */
  user?: string;

  /**
   * Option to connect to a remote host other than through URI.
   */
  password?: string;

  /**
   * A connection timeout.
   * By default, the connection is blocked until the connection is established,
   * but if you specify `wait_connected=false`, the connection returns immediately.
   * If you specify this timeout, it will wait before returning (`wait_connected=1.5` makes it wait at most 1.5 seconds).
   *
   * Note: If `reconnect_after` is greater than zero, then `wait_connected` ignores transient failures.
   * The wait completes once the connection is established or is closed explicitly.
   * @customName wait_connected
   */
  waitConnected?: number | false;

  /**
   * A number of seconds to wait before reconnecting. The default value, as with the other `connect` options, is `nil`.
   * If `reconnect_after` is greater than zero,
   * then a `net.box` instance will attempt to reconnect if a connection is lost or a connection attempt fails.
   * This makes transient network failures transparent to the application.
   * Reconnection happens automatically in the background,
   * so requests that initially fail due to connection drops fail, are transparently retried.
   * The number of retries is unlimited, connection retries are made after any specified interval
   * (for example, `reconnect_after=5` means that reconnect attempts are made every 5 seconds).
   * When a connection is explicitly closed or when the Lua garbage collector removes it, then reconnect attempts stop.
   * @customName reconnect_after
   */
  reconnectAfter?: number;

  /**
   * Since 1.7.2.
   * A new binary protocol command for CALL in `net.box` connections by default.
   * The new CALL is not backward compatible with previous versions.
   * It no longer restricts a function to returning an array of tuples and allows returning an arbitrary MsgPack/JSON result,
   * including scalars, nil and void (nothing). The old CALL is left intact for backward compatibility.
   * It will not be present in the next major release.
   * All programming language drivers will gradually be switched to the new CALL.
   * To connect to a Tarantool instance that uses the old CALL, specify `call_16=true`.
   * @customName call_16
   */
  call16?: boolean;

  /**
   * A number of seconds to wait before returning “error: Connection timed out”.
   * @customName connect_timeout
   */
  connectTimeout?: number;

  /**
   * A boolean option that controls fetching schema changes from the server. Default: `true`.
   * If you don’t operate with remote spaces, for example, run only `call` or `eval`,
   * set `fetch_schema` to `false` to avoid fetching schema changes which is not needed in this case.
   *
   * Important: In connections with `fetch_schema == false`, remote spaces are unavailable and the `on_schema_reload` triggers don’t work.
   * @customName fetch_schema
   */
  fetchSchema?: boolean;

  /**
   * A minimum version of the IPROTO protocol supported by the server.
   * If the version of the IPROTO protocol supported by the server is lower than specified,
   * the connection will fail with an error message. With `required_protocol_version = 1`,
   * all connections fail where the IPROTO protocol version is lower than `1`.
   * @customName required_protocol_version
   */
  requiredProtocolVersion?: number;

  /**
   * Specified IPROTO protocol features supported by the server.
   * If the server does not support the specified features, the connection will fail with an error message.
   * With `required_protocol_features = {'transactions'}`, all connections fail where the server has `transactions: false`.
   * @customName required_protocol_features
   */
  requiredProtocolFeatures?: (keyof ProtocolFeatures)[]
}
