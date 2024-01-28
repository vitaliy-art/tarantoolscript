import { Server, ServerObjectOptions } from './Server';

/**
 * Add the server object to the replica set. The added server object should be built via the `ReplicaSet:build_server` function.
 * @param server Server object to be added to the replica set.
 */
export function add_server(server: Server): void;

/**
 * Build a server object and add it to the replica set.
 * @param config Configuration for the new server.
 */
export function build_and_add_server(config?: ServerObjectOptions): void;

/**
 * Build a server object for the replica set.
 * @param config Configuration for the new server.
 */
export function build_server(config?: ServerObjectOptions): void;

/**
 * Delete the server object from the replica set by the given server alias.
 * @param alias Server alias.
 */
export function delete_server(alias: string): void;

/**
 * Stop all servers in the replica set and save their artifacts if the test fails.
 * This function should be used only at the end of the test (`after_test`, `after_each`, `after_all` hooks) to terminate all server processes
 * in the replica set. Besides process termination, it saves the contents of each server working directory to the `<vardir>/artifacts` directory
 * for further analysis if the test fails.
 */
export function drop(): void;

/**
 * Get a server which is a writable node in the replica set.
 */
export function get_leader(): Server;

/**
 * Get the server object from the replica set by the given server alias.
 * @param alias Server alias.
 */
export function get_server(alias: string): Server;

/**
 * Build a replica set object.
 * @param object Table with the entries listed below:
 * - servers: List of server configurations to build server objects from and add them to the new replica set.
 * @customName new
 */
export declare const new_: (object?: { servers?: ServerObjectOptions[] }) => ReplicaSet;

/**
 * Start all servers in the replica set. Optionally waits until all servers are ready.
 * @param opts Table with the entries listed below:
 * - wait_until_ready: Wait until all servers are ready.Defaults to `true`.
 */
export function start(opts?: { wait_until_ready?: boolean }): void;

/**
 * Stop all servers in the replica set.
 */
export function stop(): void;

/**
 * Wait until every node is connected to every other node in the replica set.
 * @param opts Table with the entries listed below:
 * - timeout: Timeout in seconds to wait for full mesh.Defaults to `60`.
 * - delay: Delay in seconds between attempts to check full mesh.Defaults to `0.1`.
 */
export function wait_for_fullmesh(opts?: { timeout?: number, delay?: number }): void;
