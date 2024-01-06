import { MsgPackObjectIterator } from './MsgPackObjectIterator';

/**
 * A MsgPack object that stores arbitrary MsgPack data. To create a MsgPack object from a Lua object or string, use the following methods:
 * - `msgpack.object`
 * - `msgpack.object_from_raw`
 *
 * If a MsgPack object stores an array, it can be inserted into a database space:
 * - `box.space.bands:insert(msgpack.object({1, 'The Beatles', 1960}))`
 */
export interface MsgPackObject {
  [key: number | string]

  /**
   * Since: `2.10.0`.
   *
   * Decode MsgPack data in the MsgPack object.
   * @returns A Lua object.
   */
  decode(): unknown;

  /**
   * Since: `2.10.0`.
   *
   * Create an iterator over the MsgPack data.
   * @returns An iterator object over the MsgPack data
   */
  iterator(): MsgPackObjectIterator;

  /**
   * Since: `2.11.0`.
   *
   * Get an element of the MsgPack array by the specified index key.
   * @param key Index key.
   *
   * The index key used to get the array element might be one of the following:
   * - if a MsgPack object is an array, the `key` is an integer value (starting with 1) that specifies the element index.
   * - if a MsgPack object is an associative array, `key` is the string value that specifies the element key.
   * In this case, you can also access the array element using dot notation (`msgpack_object.<key>`).
   * - if the specified key is missing in the array, `msgpack.get(key)` (or `msgpack_object[key]`) returns nil.
   */
  get(key: number | string): unknown;
}
