export interface ClientStat {
  /**
   * The number of currently executing requests.
   */
  active_requests: number;

  /**
   * The total number of sockets added into an event loop.
   */
  sockets_added: number;

  /**
   * The total number of sockets deleted from an event loop.
   */
  sockets_deleted: number;

  /**
   * The total number of requests.
   */
  total_requests: number;

  /**
   * The total number of requests that returned HTTP `200 OK` responses.
   */
  http_200_responses: number;

  /**
   * The total number of requests that returned non-`200 OK` responses.
   */
  http_other_responses: number;

  /**
   * The total number of failed requests, including system, curl, and HTTP errors.
   */
  failed_requests: number;
}
