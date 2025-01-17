import { DomainFamily, SocketFlag } from './Constants';
import { SocketInfo } from './SocketInfo';

export interface SocketObject {
  /**
   * Connect an existing socket to a remote host. The argument values are the same as in `tcp_connect()`.
   * The host must be an IP address. The socket object value may change if `sysconnect()` succeeds.
   * @param host A string representation of an IPv4 address or an IPv6 address; Or, if `0` (zero), meaning “all local interfaces”;
   * @param port If a port number is 0 (zero), the socket will be bound to a random local port.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.sysconnect
   */
  sysconnect(host: string | 0, port: number): void;

  /**
   * Connect an existing socket to a remote host. The argument values are the same as in `tcp_connect()`.
   * The host must be an IP address. The socket object value may change if `sysconnect()` succeeds.
   * @param host A string containing `unix/`.
   * @param port A string containing a path to a unix socket.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.sysconnect
   */
  sysconnect(host: 'unix/', port: string): void;

  /**
   * Send data over a connected socket.
   * @param data What is to be sent.
   * @returns The number of bytes sent.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.send
   */
  send(data: string): number | undefined;

  /**
   * Send data over a connected socket.
   * @param data What is to be sent.
   * @returns The number of bytes sent.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.send
   */
  write(data: string): void;

  /**
   * Write as much data as possible to the socket buffer if non-blocking. Rarely used.
   * @param size Maximum number of bytes to write.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.syswrite
   */
  syswrite(size: number): void;

  /**
   * Read `size` bytes from a connected socket. An internal read-ahead buffer is used to reduce the cost of this call.
   * @param size Maximum number of bytes to receive.
   * @returns A string of the requested length on success.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.recv
   */
  recv(size: number): string | undefined;

  /**
   * Read from a connected socket until some condition is true, and return the bytes that were read.
   * Reading goes on until `limit` bytes have been read, or a `delimiter` has been read, or a `timeout` has expired.
   * Unlike `socket_object:recv` (which uses an internal read-ahead buffer), `socket_object:read` depends on the socket’s buffer.
   * @param limit Maximum number of bytes to read, for example 50 means “stop after 50 bytes”.
   * @param timeout Maximum number of seconds to wait, for example 50 means “stop after 50 seconds”.
   * @returns An empty string if there is nothing more to read, or a `nil` value if error,
   * or a string up to `limit` bytes long, which may include the bytes that matched the `delimiter` expression.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.read
   */
  read(limit: number, timeout?: number): string | undefined;

  /**
   * Read from a connected socket until some condition is true, and return the bytes that were read.
   * Reading goes on until `limit` bytes have been read, or a `delimiter` has been read, or a `timeout` has expired.
   * Unlike `socket_object:recv` (which uses an internal read-ahead buffer), `socket_object:read` depends on the socket’s buffer.
   * @param delimiter Separator. For example `?` means “stop after a question mark”;
   * this parameter can accept a table of separators, for example, `delimiter = {"\n", "\r"}`
   * @param timeout Maximum number of seconds to wait, for example 50 means “stop after 50 seconds”.
   * @returns An empty string if there is nothing more to read, or a `nil` value if error,
   * or a string up to `limit` bytes long, which may include the bytes that matched the `delimiter` expression.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.read
   */
  read(delimiter: string, timeout?: number): string | undefined;

  /**
   * Read from a connected socket until some condition is true, and return the bytes that were read.
   * Reading goes on until `limit` bytes have been read, or a `delimiter` has been read, or a `timeout` has expired.
   * Unlike `socket_object:recv` (which uses an internal read-ahead buffer), `socket_object:read` depends on the socket’s buffer.
   * @param options `chunk=limit` and/or `delimiter=delimiter`, for example `{chunk=5,delimiter='x'}`.
   * @param timeout Maximum number of seconds to wait, for example 50 means “stop after 50 seconds”.
   * @returns An empty string if there is nothing more to read, or a `nil` value if error,
   * or a string up to `limit` bytes long, which may include the bytes that matched the `delimiter` expression.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.read
   */
  read(
    options: { chunk: number; delimiter: string },
    timeout?: number,
  ): string | undefined;

  /**
   * Return data from the socket buffer if non-blocking. In case the socket is blocking, `sysread()` can block the calling process.
   * Rarely used.
   * @param size Maximum number of bytes to read, for example 50 means “stop after 50 bytes”.
   * @returns An empty string if there is nothing more to read, or a `nil` value if error, or a string up to `size` bytes long.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.sysread
   */
  sysread(size: number): string | undefined;

  /**
   * Bind a socket to the given host/port. A UDP socket after binding can be used to receive data (see `socket_object.recvfrom`).
   * A TCP socket can be used to accept new connections, after it has been put in listen mode.
   * @param host URL or IP address.
   * @param port Port number.
   * @returns `true` for success, `false` for error.
   * If return is `false`, use `socket_object:errno()` or `socket_object:error()` to see details.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.bind
   */
  bind(host: string, port?: number): boolean;

  /**
   * Start listening for incoming connections.
   * @param backlog On Linux the listen `backlog` backlog may be from `/proc/sys/net/core/somaxconn`,
   * on BSD the backlog may be `SOMAXCONN`.
   * @returns `true` for success, `false` for error.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.listen
   */
  listen(backlog: string): boolean;

  /**
   * Accept a new client connection and create a new connected socket.
   * It is good practice to set the socket’s blocking mode explicitly after accepting.
   * @returns New socket if success.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.accept
   */
  accept(): SocketObject | undefined;

  /**
   * Send a message on a UDP socket to a specified host.
   * @param host URL or IP address.
   * @param port Port number.
   * @param data What is to be sent.
   * @returns The number of bytes sent; on error, returns `nil` and may return `status`, `errno`, `errstr`.
   */
  sendto(host: string, port: number, data: string): number | undefined;

  /**
   * Receive a message on a UDP socket.
   * @param size Maximum number of bytes to receive.
   * @returns Message, a table containing “host”, “family” and “port” fields; on error, returns status, errno, errstr.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.recvfrom
   */
  recvfrom(
    size: number,
  ): string | undefined | { host: string; family: DomainFamily; port: number };

  /**
   * Shutdown a reading end, a writing end, or both ends of a socket.
   * @param how  Can be one of the following:
   * - `R` or `READ` or `0` - close the reading end
   * - `W` or `WRITE` or `1` - close the wtiting end
   * - `RW` or `READ_WRITE` or `2` - close both the reading and the writing end.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.shutdown
   */
  shutdown(
    how: 'R' | 'W' | 'RW' | 'READ' | 'WRITE' | 'READ_WRITE' | 0 | 1 | 2,
  ): boolean;

  /**
   * Close (destroy) a socket. A closed socket should not be used any more.
   * A socket is closed automatically when the Lua garbage collector removes its user data.
   * @returns `true` on success, `false` on error. For example, if sock is already closed, `sock:close()` returns `false`.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.close
   */
  close(): boolean;

  /**
   * Retrieve information about the last error that occurred on a socket, if any.
   * Errors do not cause throwing of exceptions so these function are usually necessary.
   * @returns error message.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.error
   */
  error(): string | undefined;

  /**
   * Retrieve information about the last error that occurred on a socket, if any.
   * Errors do not cause throwing of exceptions so these function are usually necessary.
   * @returns error code.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.errno
   */
  errno(): number;

  /**
   * Set socket flags. The argument values are the same as in the Linux getsockopt(2) man page.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.setsockopt
   * @todo FIXME (I don't fully understand API of setsockopt and getsockopt of Standard C library and Tarantool's manual not helps with this at all,
   * so it's very probably this declaration is not corresponding realization).
   */
  setsockopt(level: string, name: SocketFlag, value: unknown): void;

  /**
   * Get socket flags.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.getsockopt
   */
  getsockopt(level: string, name: SocketFlag): unknown;

  /**
   * Set or clear the SO_LINGER flag.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.linger
   */
  linger(active?: boolean): unknown;

  /**
   * This function may be useful before invoking a function which might otherwise block indefinitely.
   * - `sock:nonblock()` returns the current flag value.
   * - `sock:nonblock(false)` sets the flag to `false` and returns `false`.
   * - `sock:nonblock(true)` sets the flag to `true` and returns `true`.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.nonblock
   */
  nonblock(flag?: boolean): boolean;

  /**
   * Wait until something is readable, or until a timeout value expires.
   * @returns `true` if the socket is now readable, `false` if timeout expired.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.readable
   */
  readable(timeout?: number): boolean;

  /**
   * Wait until something is writable, or until a timeout value expires.
   * @returns `true` if the socket is now writable, `false` if timeout expired.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.writable
   */
  writable(timeout?: number): boolean;

  /**
   * Wait until something is either readable or writable, or until a timeout value expires.
   * @returns
   * - `R` if the socket is now readable;
   * - `W` if the socket is now writable;
   * - `RW` if the socket is now both readable and writable;
   * - empty string if timeout expired;
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.wait
   */
  wait(timeout?: number): 'R' | 'W' | 'RW' | '';

  /**
   * The `sock:name()` function is used to get information about the near side of the connection.
   * If a socket was bound to `xyz.com:45`, then `sock:name` will return information about `[host:xyz.com, port:45]`.
   * The equivalent POSIX function is `getsockname()`.
   * @returns A table containing these fields: `host`, `family`, `type`, `protocol`, `port`.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.name
   */
  name(): SocketInfo;

  /**
   * The `sock:peer()` function is used to get information about the far side of a connection.
   * If a TCP connection has been made to a distant host `tarantool.org:80`,
   * `sock:peer()` will return information about` [host:tarantool.org, port:80]`. The equivalent POSIX function is `getpeername()`.
   * @returns A table containing these fields: `host`, `family`, `type`, `protocol`, `port`.
   * @see https://www.tarantool.io/en/doc/latest/reference/reference_lua/socket/#lua-function.socket_object.peer
   */
  peer(): SocketInfo;

  fd(): number;
}
