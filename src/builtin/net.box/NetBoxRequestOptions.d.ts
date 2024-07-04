import { BufferObject } from '../../builtin/buffer/BufferObject';

export interface NetBoxRequestOptions {
  timeout?: number;
  buffer?: BufferObject;
  is_async?: boolean;
  on_push?: (...params: any[]) => unknown;
  on_push_ctx?: unknown;
  return_raw?: boolean;
}
