/** @noSelfInFile */

/**
 * Creates a background fiber that periodically sends all metrics to a remote Graphite server.
 * @param options Table with field:
 * - prefix (string): metrics prefix ('tarantool' by default)
 * - host (string): Graphite server host ('127.0.0.1' by default)
 * - port (number): Graphite server port (2003 by default)
 * - send_interval (number): metrics collection interval in seconds (2 by default)
 */
export declare function init(options: {
  prefix: string;
  host: string;
  port: number;
  send_interval: number;
}): void;
