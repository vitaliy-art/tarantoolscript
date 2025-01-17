/** @noSelfInFile */

import {
  AIFlag,
  DomainFamily,
  Protocol,
  SendFlag,
  SocketType,
} from './Constants';
import { SocketInfo } from './SocketInfo';
import { SocketObject } from './SocketObject';
import { SocketOptionList } from './SocketOptionList';

/**
 * Create a new TCP or UDP socket. The argument values are the same as in the Linux socket(2) man page.
 * @param domain Specifies a communication domain; this selects the protocol family which will be used for communication.
 * @param type Specifies the communication semantics.
 * @param protocol Specifies a particular protocol to be used with the socket.
 * @returns An unconnected socket, or nil.
 * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket.__call
 */
export declare function __call(
  domain: DomainFamily,
  type: SocketType,
  protocol: Protocol,
): SocketObject | undefined;

/**
 * Connect a socket to a remote host.
 * @param host URL or IP address.
 * @param port Port number.
 * @param timeout Number of seconds to wait.
 * @returns (if error) {nil, error-message-string}. (if no error) a new socket object.
 * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket.tcp_connect
 */
export declare function tcp_connect(
  host: string,
  port?: number,
  timeout?: number,
):
  | LuaMultiReturn<[SocketObject, undefined]>
  | LuaMultiReturn<[undefined, string]>;

/**
 * Useful for finding information about a remote site so that the correct arguments for `sock:sysconnect()` can be passed.
 * This function may use the `worker_pool_threads` configuration parameter.
 * @param host URL or IP address.
 * @param port Port number as a numeric or string.
 * @param timeout Maximum number of seconds to wait.
 * @param optionList A table.
 * @returns (if error) `{nil, error-message-string}`.
 * (if no error) A table containing these fields: `host`, `family`, `type`, `protocol`, `port`.
 * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket.getaddrinfo
 */
export declare function getaddrinfo(
  host: string,
  port: number | string,
  timeout?: number,
  optionList?: SocketOptionList,
):
  | LuaMultiReturn<
      [
        {
          host: string;
          family: string;
          type: string;
          protocol: string;
          port: number;
        },
        undefined,
      ]
    >
  | LuaMultiReturn<[undefined, string]>;

/**
 * Useful for finding information about a remote site so that the correct arguments for `sock:sysconnect()` can be passed.
 * This function may use the `worker_pool_threads` configuration parameter.
 * @param host URL or IP address.
 * @param port Port number as a numeric or string.
 * @param optionList A table.
 * @returns (if error) `{nil, error-message-string}`.
 * (if no error) A table containing these fields: `host`, `family`, `type`, `protocol`, `port`.
 * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket.getaddrinfo
 */
export declare function getaddrinfo(
  host: string,
  port: number | string,
  optionList?: SocketOptionList,
):
  | LuaMultiReturn<
      [
        {
          host: string;
          family: string;
          type: string;
          protocol: string;
          port: number;
        },
        undefined,
      ]
    >
  | LuaMultiReturn<[undefined, string]>;

/**
 * Makes Tarantool act as a server that can accept connections. Usually the same objective is accomplished with `box.cfg{listen=…}`.
 * @param host Host name or IP.
 * @param port Host port, may be `0`.
 * @param handler What to execute when a connection occurs.
 * @param timeout Host resolving timeout in seconds.
 * @returns (if error) `{nil, error-message-string}`. (if no error) a new socket object.
 * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket.tcp_server
 */
export declare function tcp_server(
  host: string,
  port: number,
  handler:
    | {
        prepare?: (this: void, sock: SocketObject) => unknown;
        handler?: (this: void, sock: SocketObject, from: SocketInfo) => unknown;
        name?: string;
      }
    | ((this: void, ...args: any[]) => unknown),
  timeout?: number,
):
  | LuaMultiReturn<[SocketObject, undefined]>
  | LuaMultiReturn<[undefined, string]>;

/**
 * Bind a socket to the given host/port. This is equivalent to `socket_object:bind()`,
 * but is done on the result of `require('socket')`, rather than on the socket object.
 * @param host URL or IP address.
 * @param port Port number.
 * @returns (if error) `{nil, error-message-string}`. (if no error) A table which may have information about the bind result.
 * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket.bind
 */
export declare function bind(
  host: string,
  port: number,
): LuaMultiReturn<[LuaTable, undefined]> | LuaMultiReturn<[undefined, string]>;

/**
 * The `socket.iowait()` function is used to wait until read-or-write activity occurs for a file descriptor.
 * @param fd File descriptor.
 * @param readOrWriteFlags
 * - `R` or 1 = read;
 * - `W` or 2 = write;
 * - `RW` or 3 = read|write;
 * @param timeout Number of seconds to wait.
 *
 * If the `fd` parameter is `nil`, then there will be a sleep until the timeout.
 * If the timeout parameter is `nil` or unspecified, then timeout is infinite.
 * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket.iowait
 */
export declare function iowait(
  fd: number | null,
  readOrWriteFlags: 'R' | 1 | 'W' | 2 | 'RW' | 3,
  timeout?: number,
): 'R' | 1 | 'W' | 2 | 'RW' | 3 | '';

export declare const internal: {
  SO_TYPE: { [key in SocketType]: number };
  protocols: { [key in Protocol]: number };
  SEND_FLAGS: { [key in SendFlag]: number };
  DOMAIN: { [key in DomainFamily]: number };
  AI_FLAGS: { [key in AIFlag]: number };
};
