import { BufferObject } from 'builtin/buffer/BufferObject';

export interface NetBoxRequestOptions {
  timeout?: number;
  buffer?: BufferObject;
  /** @customName is_async */
  isAsync?: boolean;
  /** @customName on_push */
  onPush?: (...params: any[]) => unknown;
  /** @customName on_push_ctx */
  onPushCtx?: unknown;
  /** @customName return_raw */
  returnRaw?: boolean;
}
