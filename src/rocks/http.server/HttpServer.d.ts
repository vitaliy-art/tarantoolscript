/** @noSelfInFile */

import { HttpServerOptions } from './HttpServerOptions';
import { HttpServerObject } from './HttpServerObject';
import { SetCookieHack } from './SetCookieHack';

/**
 * host and port must contain:
 * - For tcp socket: the host and port to bind to.
 * - For unix socket: `unix/` and path to socket (for example `/tmp/http-server.sock`) to bind to.
 * @customName new
 */
export declare function new_(host: string, port: number | string, options?: HttpServerOptions): HttpServerObject;

/**
 * Hack for setting cookies.
 */
export declare const internal: SetCookieHack;
