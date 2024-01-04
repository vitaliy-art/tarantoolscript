import { CData } from '../box';

export interface BufferObject {
  /**
   * A pointer to the beginning of the buffer.
   */
  buf: CData;

  /**
   * A pointer to the beginning of the range; available for reading data (“read position”).
   */
  rpos: CData;

  /**
   * A pointer to the end of the range; available for reading data, and to the beginning of the range for writing new data (“write position”).
   */
  wpos: CData;

  /**
   * A pointer to the end of the range; available for writing new data (“end position”).
   */
  epos: CData;

  /**
   * Allocate `size` bytes for `buffer_object`.
   * @param size Memory in bytes to allocate.
   * @returns `wpos`
   */
  alloc(size: number): CData;

  /**
   * Return the capacity of the `buffer_object`.
   * @returns `epos - buf`
   */
  capacity(): number;

  /**
   * Check if `size` bytes are available for reading in `buffer_object`.
   * @param size Memory in bytes to check.
   * @returns `rpos`
   */
  checksize(size: number): CData;

  /**
   * Return the `size` of the range occupied by data.
   * @returns `rpos - buf`
   */
  pos(): number;

  /** Read `size` bytes from buffer. */
  read(size: number): CData;

  /** Clear the memory slots allocated by `buffer_object`. */
  recycle(): void;

  /**
   * Clear the memory slots used by `buffer_object`.
   * This method allows to keep the buffer but remove data from it.
   * It is useful when you want to use the buffer further.
   */
  reset(): void;

  /**
   * Reserve memory for `buffer_object`.
   * Check if there is enough memory to write size bytes after `wpos`.
   * If not, `epos` shifts until size bytes will be available.
   */
  reserve(size: number): CData;

  /**
   * Return a range, available for reading data.
   * @returns `wpos - rpos`.
   */
  size(): number;

  /**
   * Return a range for writing data.
   * @returns `epos - wpos`.
   */
  unused(): number;
}
