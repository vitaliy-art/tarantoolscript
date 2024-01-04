/** @noSelfInFile */

import { BufferObject } from './BufferObject';

declare module 'buffer' {
  /** Create a new buffer. */
  export function ibuf(): BufferObject;
}
