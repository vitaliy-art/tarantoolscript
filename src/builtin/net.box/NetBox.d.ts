/** @noSelfInFile */

import { NetBoxConnectOptions } from './NetBoxConnectOptions';
import { NetBoxConnectionObject } from './NetBoxConnectionObject';

/**
 * Create a new connection. The connection is established on demand, at the time of the first request.
 * It can be re-established automatically after a disconnect (`reconnect_after` option).
 * The returned `conn` object supports methods for making remote requests, such as select, update or delete.
 * @param uri The URI of the target for the connection.
 * @param options Connection options.
 * @returns Connection object.
 */
export declare function connect(uri: string, options?: NetBoxConnectOptions): NetBoxConnectionObject;

/**
 * A synonym for `connect()`. It is retained for backward compatibility.
 * For more information, see the description of `net_box.connect()`.
 * @customName new
 */
export declare const new_: typeof connect;

/**
 * For a local Tarantool server, there is a pre-created always-established connection object named `net_box.self`.
 * Its purpose is to make polymorphic use of the `net_box` API easier.
 * Therefore `conn = net_box.connect('localhost:3301')` can be replaced by `conn = net_box.self`.
 *
 * However, there is an important difference between the embedded connection and a remote one:
 * - With the embedded connection, requests which do not modify data do not yield.
 * When using a remote connection, due to the implicit rules any request can yield,
 * and the database state may have changed by the time it regains control.
 * - All the options passed to a request (as `is_async`, `on_push`, `timeout`) will be ignored.
 */
export declare const self: NetBoxConnectionObject;
