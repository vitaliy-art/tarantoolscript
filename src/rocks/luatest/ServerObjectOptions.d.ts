export interface ServerObjectOptions {
  /**
   * Executable path to run a server process with.Defaults to the internal `server_instance.lua` script.
   * If a custom path is provided, it should correctly process all env variables listed below to make constructor parameters work.
   */
  command?: string;

  /**
   * Arbitrary args to run `object.command` with.
   */
  args?: AnyTable | string[];

  /**
   * Pass the given env variables into the server process.
   */
  env?: AnyTable;

  /**
   * Change to the given directory before running the server process.
   */
  chdir?: string;

  /**
   * Alias for the new server and the value of the.. code-block:: lua `TARANTOOL_ALIAS` env variable which is passed into the server process.
   * Defaults to ‘server’.
   */
  alias?: string;

  /**
   * Working directory for the new server and the value of the `TARANTOOL_WORKDIR` env variable which is passed into the server process.
   * The directory path will be created on the server start.Defaults to `<vardir>/<alias>-<random id>`.
   */
  workdir?: string;

  /**
   * Directory path whose contents will be recursively copied into `object.workdir` on the server start.
   */
  datadir?: string;

  /**
   * Port for HTTP connection to the new server and the value of the `TARANTOOL_HTTP_PORT` env variable which is passed into the server process.
   * Not supported in the default `server_instance.lua` script.
   */
  http_port?: number;

  /**
   * Port for the `net.box` connection to the new server and the value of the `TARANTOOL_LISTEN` env variable which is passed into the server process.
   */
  net_box_port?: number;

  /**
   * URI for the `net.box` connection to the new server and the value of the `TARANTOOL_LISTEN` env variable which is passed into the server process.
   * If it is a Unix socket, the corresponding socket directory path will be created on the server start.
   */
  net_box_uri?: string;

  /**
   * Override the default credentials for the `net.box` connection to the new server.
   */
  net_box_credentials?: { user: string, password: string };

  /**
   * Extra options for `box.cfg()` and the value of the `TARANTOOL_BOX_CFG` env variable which is passed into the server process.
   */
  box_cfg?: ConfigBasic;
}
