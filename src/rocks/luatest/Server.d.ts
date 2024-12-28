import { ConfigBasic } from '../../builtin';
import { HTTPResponse } from './HTTPResponse';
import { ServerObjectOptions } from './ServerObjectOptions';
import { Server } from './ServerType';

/**
 * Build a listen URI based on the given server alias and extra path. The resulting URI: `<Server.vardir>/[<extra_path>/]<server_alias>.sock`.
 * Provide a unique alias or extra path to avoid collisions with other sockets. For now, only UNIX sockets are supported.
 * @param server_alias Server alias.
 * @param extra_path Extra path relative to the `Server.vardir` directory.
 */
export function build_listen_uri(this: void, server_alias: string, extra_path?: string): string;

/**
 * Assert that the server follows the source node with the given ID.
 * Meaning that it replicates from the remote node normally, and has already joined and subscribed.
 * @param server_id Server ID.
 */
export function assert_follows_upstream(server_id: number): void;

/**
 * Call remote function on the server by name.
 *
 * This is a shortcut for `server.net_box:call()`.
 */
export function call(fn_name: string, args?: unknown[], options?: AnyTable): void;

/**
 * Establish `net.box` connection. It’s available in `net_box` field.
 */
export function connect_net_box(): void;

/**
 * Copy contents of the data directory into the server’s working directory. Invoked on the server’s start.
 */
export function copy_datadir(): void;

/**
 * Stop the server and save its artifacts if the test fails.
 * This function should be used only at the end of the test (`after_test`, `after_each`, `after_all` hooks) to terminate the server process.
 * Besides process termination, it saves the contents of the server working directory to the `<vardir>/artifacts` directory
 * for further analysis if the test fails.
 */
export function drop(): void;

/**
 * Evaluate Lua code on the server.
 *
 * This is a shortcut for `server.net_box:eval()`.
 */
export function eval(code: string, args?: unknown[], options?: AnyTable): unknown;

/**
 * Run given function on the server.
 *
 * Much like `Server:eval`, but takes a function instead of a string. The executed function must have no up values (closures).
 * Though it may use global functions and modules (like `box` , `os` , etc.)
 */
export function exec<TResult = unknown>(fn: (this: void, ...args: any[]) => TResult, args?: unknown[], options?: AnyTable): TResult;

/**
 * A simple wrapper around the `Server:exec()` method to get the `box.cfg` value from the server.
 */
export function get_box_cfg(): ConfigBasic;

/**
 * Get vclock acknowledged by another node to the current server.
 * @param server_id Server ID.
 */
export function get_downstream_vclock(server_id: number): LuaTable<string, unknown>;

/**
 * Get the election term as seen by the server.
 */
export function get_election_term(): number;

/**
 * Get ID of the server instance.
 */
export function get_instance_id(): number;

/**
 * Get UUID of the server instance.
 */
export function get_instance_uuid(): string;

/**
 * Get the synchro term as seen by the server.
 */
export function get_synchro_queue_term(): number;

/**
 * Get the server’s own vclock, including the local component.
 */
export function get_vclock(): LuaTable<string, unknown>;

/**
 * Search a string pattern in the server’s log file. If the server has crashed, `opts.filename` is required.
 * @param pattern String pattern to search in the server’s log file.
 * @param bytes_num Number of bytes to read from the server’s log file.
 * @param opts
 * - reset: Reset the result when `Tarantool %d+.%d+.%d+-.*%d+-g.*` pattern is found, which means that the server was restarted. Defaults to `true`.
 * - filename: Path to the server’s log file. Defaults to `box.cfg.log`.
 */
export function grep_log(pattern: string, bytes_num?: number, opts?: { reset?: boolean, filename?: string }): string | undefined;

/**
 * Perform HTTP request.
 * @param method
 * @param path
 * @param options Lua table with following keys:
 * - body (optional): request body.
 * - json (optional): data to encode as JSON into request body.
 * - http (optional): other options for HTTP-client.
 * - raise (optional): raise error when status is not in 200..299. Default to `true`.
 * @returns Response object from HTTP client with helper methods.
 */
export function http_request(method: string, path: string, options?: {
  body?: string,
  json?: AnyTable | unknown[],
  http?: AnyTable,
  raise?: boolean,
}): HTTPResponse;

/**
 * Make directory for the server’s Unix socket. Invoked on the server’s start.
 */
export function make_socketdir(): void;

/**
 * Make the server’s working directory. Invoked on the server’s start.
 */
export function make_workdir(): void;

/**
 * Build a server object.
 * @customName new
 */
export function new_(object?: ServerObjectOptions, extra?: AnyTable): typeof Server;

/**
 * Play WAL until the synchro queue becomes busy. WAL records go one by one.
 * The function is needed, because during `box.ctl.promote()` it is not known for sure which WAL record is PROMOTE - first, second, third?
 * Even if known, it might change in the future. WAL delay should already be started before the function is called.
 */
export function play_wal_until_synchro_queue_is_busy(): void;

/**
 * Restart the server with the given parameters. Optionally waits until the server is ready.
 * @param params Parameters to restart the server with.
 * @param opts Table:
 * - wait_until_ready: Wait until the server is ready. Defaults to `true` unless a custom executable path was provided while building the server object.
 */
export function restart(params?: ServerObjectOptions, opts?: { wait_until_ready?: boolean }): void;

/**
 * Start a server. Optionally waits until the server is ready.
 * @param opts Table:
 * - wait_until_ready: Wait until the server is ready. Defaults to `true` unless a custom executable was provided while building the server object.
 */
export function start(opts?: { wait_until_ready?: boolean }): void;

/**
 * Stop the server. Waits until the server process is terminated.
 */
export function stop(): void;

/**
 * A simple wrapper around the `Server:exec()` method to update the `box.cfg` value on the server.
 * @param cfg Box configuration settings.
 */
export function update_box_cfg(cfg: ConfigBasic): void;

/**
 * Wait for the given server to reach at least the same vclock as the local server. Not including the local component, of course.
 * @param server Server’s object.
 */
export function wait_for_downstream_to(server: Server): void;

/**
 * Wait for the server to become a writable election leader.
 */
export function wait_for_election_leader(): void;

/**
 * Wait for the server to enter the given election state. Note that if it becomes a leader, it does not mean it is already writable.
 * @param state Election state to wait for.
 */
export function wait_for_election_state(state: string): void;

/**
 * Wait for the server to reach at least the given election term.
 * @param term Election term to wait for.
 */
export function wait_for_election_term(term: string): void;

/**
 * Wait for the server to reach at least the given synchro term.
 * @param term Synchro queue term to wait for.
 */
export function wait_for_synchro_queue_term(term: number): void;

/**
 * Wait until the server’s own vclock reaches at least the given value. Including the local component.
 * @param vclock Server’s own vclock to reach.
 */
export function wait_for_vclock(vclock: LuaTable<string, unknown>): void;

/**
 * Wait for the server to reach at least the same vclock as the other server. Not including the local component, of course.
 * @param other_server Other server’s object.
 */
export function wait_for_vclock_of(other_server: Server): void;

/**
 * Wait for the server to discover an election leader.
 */
export function wait_until_election_leader_found(): void;

/**
 * Wait until the server is ready after the start. A server is considered ready when its` _G.ready` variable becomes `true`.
 */
export function wait_until_ready(): void;
