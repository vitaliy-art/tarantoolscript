import { HttpMethod } from './../../builtin/http.client/HttpMethod';

export interface HttpRouteOptions {
  /**
   * A template file name (can be relative to. `{app_dir}/templates`, where `app_dir` is the path set when creating the server).
   * If no template file name extension is provided, the extension is set to "`.html.el`", meaning HTML with embedded Lua.
   */
  file?: string;

  /**
   * Template Lua variable name, in case the template is a Lua variable.
   * If `template` is a function, it's called on every request to get template body. This is useful if template body must be taken from a database.
   */
  template?: string | (() => string);

  /**
   * Route path, as described earlier.
   *
   * @example
   * ```
   * '/'                 -- a simple route
   * '/abc'              -- a simple route
   * '/abc/:cde'         -- a route using a simple regular expression
   * '/abc/:cde/:def'    -- a route using a simple regular expression
   * '/ghi*path'         -- a route using an extended regular expression
   * ```
   */
  path: string;

  /**
   * Route name.
   */
  name?: string;

  /**
   * Method on the route like `POST`, `GET`, `PUT`, `DELETE`
   * @default GET
   */
  method?: HttpMethod;

  /**
   * Option that overrides the server parameter of the same name but only for current route.
   */
  log_requests?: boolean | ((fmt: string, ...args: any[]) => unknown);

  /**
   * Option that overrides the server parameter of the same name but only for current route.
   */
  log_errors?: boolean | ((fmt: string, ...args: any[]) => unknown);
}
