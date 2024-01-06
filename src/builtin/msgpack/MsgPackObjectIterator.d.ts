import { MsgPackObject } from './MsgPackObject';

export interface MsgPackObjectIterator {
  /**
   * Since: `2.10.0`.
   *
   * Decode a MsgPack array header under the iterator cursor and advance the cursor.
   * After calling this function, the iterator points to the first element of the array or to the value following the array if the array is empty.
   * @returns Number of elements in the array.
   */
  decode_array_header(): number;

  /**
   * Since: `2.10.0`.
   *
   * Decode a MsgPack map header under the iterator cursor and advance the cursor.
   * After calling this function, the iterator points to the first key stored in the map or to the value following the map if the map is empty.
   * @returns Number of key-value pairs in the map.
   */
  decode_map_header(): number;

  /**
   * Since: `2.10.0`.
   *
   * Decode a MsgPack value under the iterator cursor and advance the cursor.
   * @returns A Lua object corresponding to the MsgPack value
   */
  decode(): unknown;

  /**
   * Since: `2.10.0`.
   *
   * Return a MsgPack value under the iterator cursor as a MsgPack object without decoding and advance the cursor.
   * The method doesn’t copy MsgPack data. Instead, it takes a reference to the original object.
   */
  take(): MsgPackObject;

  /**
   * Since: `2.10.0`.
   *
   * Copy the specified number of MsgPack values starting from the iterator’s cursor position to a new MsgPack array object and advance the cursor.
   * @param count The number of MsgPack values to copy.
   * @returns A new MsgPack object.
   */
  take_array(count: number): MsgPackObject;

  /**
   * Since: `2.10.0`.
   *
   * Advance the iterator cursor by skipping one MsgPack value under the cursor. Returns nothing.
   */
  skip(): void;
}
