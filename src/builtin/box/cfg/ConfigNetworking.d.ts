export interface ConfigNetworking {
  /**
   * Since version 1.4.9. The instance will sleep for io_collect_interval seconds between iterations of the event loop.
   * Can be used to reduce CPU load in deployments in which the number of client connections is large,
   * but requests are not so frequent (for example, each connection issues just a handful of requests per second).
   */
  io_collect_interval?: number,

  /**
   * Since version 1.10.1. To handle messages, Tarantool allocates fibers.
   * To prevent fiber overhead from affecting the whole system, Tarantool restricts how many messages the fibers handle,
   * so that some pending requests are blocked.
   *
   * On powerful systems, increase `net_msg_max` and the scheduler will immediately start processing pending requests.
   *
   * On weaker systems, decrease `net_msg_max` and the overhead may decrease although this may take some time
   * because the scheduler must wait until already-running requests finish.
   *
   * When `net_msg_max` is reached, Tarantool suspends processing of incoming packages until it has processed earlier messages.
   * This is not a direct restriction of the number of fibers that handle network messages,
   * rather it is a system-wide restriction of channel bandwidth.
   * This in turn causes restriction of the number of incoming network messages that the transaction processor thread handles,
   * and therefore indirectly affects the fibers that handle network messages.
   * (The number of fibers is smaller than the number of messages because messages can be released as soon as they are delivered,
   * while incoming requests might not be processed until some time after delivery.)
   *
   * On typical systems, the default value (768) is correct.
   */
  net_msg_max?: number,

  /**
   * Since version 1.6.2. The size of the read-ahead buffer associated with a client connection.
   * The larger the buffer, the more memory an active connection consumes and the more requests
   * can be read from the operating system buffer in a single system call.
   * The rule of thumb is to make sure the buffer can contain at least a few dozen requests.
   * Therefore, if a typical tuple in a request is large, e.g. a few kilobytes or even megabytes,
   * the read-ahead buffer size should be increased.
   * If batched request processing is not used, it’s prudent to leave this setting at its default.
   */
  readahead?: number,

  /**
   * Since version 2.8.1. The number of network threads.
   * There can be unusual workloads where the network thread is 100% loaded and the transaction processor thread is not,
   * so the network thread is a bottleneck. In that case set `iproto_threads` to 2 or more.
   * The operating system kernel will determine which connection goes to which thread.
   *
   * On typical systems, the default value (1) is correct.
   */
  iproto_threads?: number,
}
