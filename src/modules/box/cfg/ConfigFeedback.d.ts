export interface ConfigFeedback {
  /**
   * Since version 1.10.1. Whether to send feedback.
   *
   * If this is set to true, feedback will be sent as described above. If this is set to false, no feedback will be sent.
   */
  feedback_enabled?: boolean,

  /**
   * Since version 1.10.1. The address to which the packet is sent. Usually the recipient is Tarantool, but it can be any URL.
   */
  feedback_host?: string,

  /**
   * Since version 1.10.1. The number of seconds between sendings, usually 3600 (1 hour).
   */
  feedback_interval?: number,
}
