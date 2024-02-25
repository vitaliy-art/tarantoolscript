export interface ChannelObject {
  /**
   * Send a message using a channel. If the channel is full, `channel:put()` waits until there is a free slot in the channel.
   *
   * Note:
   * The default channel capacity is 0. With this default value, `channel:put()` waits infinitely until `channel:get()` is called.
   * @param message What will be sent, usually a string or number or table.
   * @param timeout Maximum number of seconds to wait for a slot to become free. Default: infinity.
   * @returns If timeout is specified, and there is no free slot in the channel for the duration of the timeout,
   * then the return value is `false`. If the channel is closed, then the return value is `false`.
   * Otherwise, the return value is `true`, indicating success.
   */
  put(message: unknown, timeout?: number): boolean;

  /**
   * Close the channel. All waiters in the channel will stop waiting.
   * All following `channel:get()` operations will return `nil`, and all following `channel:put()` operations will return `false`.
   */
  close(): void;

  /**
   * Fetch and remove a message from a channel. If the channel is empty, `channel:get()` waits for a message.
   * @param timeout Maximum number of seconds to wait for a message. Default: infinity.
   * @returns If timeout is specified, and there is no message in the channel for the duration of the timeout, then the return value is `nil`.
   * If the channel is closed, then the return value is `nil`. Otherwise, the return value is the message placed on the channel by `channel:put()`.
   */
  get(timeout?: number): unknown?;

  /**
   * Check whether the channel is empty (has no messages).
   * @returns `true` if the channel is empty. Otherwise `false`.
   */
  is_empty(): boolean;

  /**
   * Find out how many messages are in the channel.
   * @returns The number of messages.
   */
  count(): number;

  /**
   * Check whether the channel is full.
   * @returns `true` if the channel is full (the number of messages in the channel equals the number of slots so there is no room for a new message).
   * Otherwise `false`.
   */
  is_full(): boolean;

  /**
   * Check whether readers are waiting for a message because they have issued `channel:get()` and the channel is empty.
   * @returns `true` if readers are waiting. Otherwise `false`.
   */
  has_readers(): boolean;

  /**
   * Check whether writers are waiting because they have issued `channel:put()` and the channel is full.
   * @returns `true` if writers are waiting. Otherwise `false`.
   */
  has_writers(): boolean;

  /**
   * @returns `true` if the channel is already closed. Otherwise `false`.
   */
  is_closed(): boolean;
}
