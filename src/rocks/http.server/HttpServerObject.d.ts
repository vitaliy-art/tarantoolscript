import { HttpRequest } from './HttpRequest';
import { HttpResponse } from './HttpResponse';
import { HttpRouteOptions } from './HttpRouteOptions';

export interface HttpServerObject {
  start(): void;

  stop(): void;

  /**
   * Automatically route requests between different handlers, depending on the request path.
   * The routing API is inspired by [Mojolicious](https://docs.mojolicious.org/Mojolicious/Guides/Routing) API.
   * @param options Lua table.
   * @param handler The route handler to be used to produce a response to the request.
   *
   * The typical usage is to avoid passing file and template arguments, since they take time to evaluate,
   * but these arguments are useful for writing tests or defining HTTP servers with just one "route".
   *
   * The handler can also be passed as a string of the form `filename#functionname`.
   * In that case, the handler body is taken from a file in the `{app_dir}/controllers directory`.
   */
  route(options: HttpRouteOptions, handler: string | ((request: HttpRequest) => HttpResponse)): void;

  /**
   * Helpers are special functions that are available in all HTML templates. These functions must be defined when creating an `httpd` object.
   *
   * If `handler` is `undefined`, helper will be deleted.
   */
  helper(name: string, handler: ((controller: unknown, ...args: unknown[]) => unknown) | undefined): void;

  /**
   * Is invoked before a request is routed to a handler. The first argument of the hook is the HTTP request to be handled.
   * The return value of the hook is ignored.
   *
   * This hook could be used to log a request, or modify request headers.
   */
  before_dispatch?: (httpd: HttpServerObject, request: HttpRequest) => unknown;

  /**
   * Is invoked after a handler for a route is executed.
   *
   * The arguments of the hook are the request passed into the handler, and the response produced by the handler.
   *
   * This hook can be used to modify the response. The return value of the hook is ignored.
   */
  after_dispatch?: (request: HttpRequest, response: HttpResponse) => unknown;
}
