/** @noSelfInFile */

declare module 'buffer' {
  import { BufferObject } from './BufferObject';

  /** Create a new buffer. */
  export function ibuf(): BufferObject;
}
