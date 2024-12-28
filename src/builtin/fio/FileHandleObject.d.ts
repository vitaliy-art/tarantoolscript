import { CData } from '../box';
import { BufferObject } from '../buffer';
import { FioStat } from './FioStat';

export interface FileHandleObject {
  /**
   * Close a file that was opened with fio.open. For details type man 2 close.
   * @returns True if success, false if failure.
   */
  close(): boolean;

  /**
   * Perform random-access read operation on a file, without affecting the current seek position of the file. For details type `man 2 pread`.
   * @param count Number of bytes to read.
   * @param offset Offset within file where reading begins.
   * @returns A string containing the data that was read from the file, or empty string if failure.
   */
  pread(count: number, offset: number): string;

  /**
   * Perform random-access read operation on a file, without affecting the current seek position of the file. For details type `man 2 pread`.
   * @param buffer Where to read into.
   * @param count Offset within file where reading begins.
   * @param offset Offset within file where reading begins.
   */
  pread(buffer: BufferObject | CData, count: number, offset: number): void;

  /**
   * Perform random-access write operation on a file, without affecting the current seek position of the file. For details type `man 2 pwrite`.
   * @param newString Value to write.
   * @param offset Offset within file where writing begins.
   * @returns True if success, false if failure.
   */
  pwrite(newString: string, offset: number): boolean;

  /**
   * Perform random-access write operation on a file, without affecting the current seek position of the file. For details type `man 2 pwrite`.
   * @param buffer Value to write.
   * @param count Number of bytes to write.
   * @param offset Offset within file where writing begins.
   * @returns True if success, false if failure.
   */
  pwrite(buffer: BufferObject, count: number, offset: number): void;

  /**
   * Perform non-random-access read on a file. For details type `man 2 read`.
   * @param count Number of bytes to read. If omitted, read all bytes in the file.
   */
  read(count?: number): LuaMultiReturn<[string, undefined] | [undefined, string]>

  /**
   * Perform non-random-access read on a file. For details type `man 2 read`.
   * @param buffer Where to read into.
   * @param count Number of bytes to read.
   */
  read(buffer: BufferObject | CData, count: number): LuaMultiReturn<[number, undefined] | [undefined, string]>;

  /**
   * Perform non-random-access write on a file. For details type `man 2 write`.
   * @param newString Value to write.
   * @returns True if success, false if failure.
   */
  write(newString: string): boolean;

  /**
   * Perform non-random-access write on a file. For details type `man 2 write`.
   * @param buffer Value to write.
   * @param count Number of bytes to write.
   * @returns True if success, false if failure.
   */
  write(buffer: BufferObject, count: number): boolean;

  /**
   * Change the size of an open file. Differs from `fio.truncate`, which changes the size of a closed file.
   * @param newSize New file size.
   * @returns True if success, false if failure.
   */
  truncate(newSize: number): boolean;

  /**
   * Shift position in the file to the specified position. For details type `man 2 seek`.
   * @param position Position to seek to.
   * @param offsetFrom
   * - `SEEK_END` = end of file,
   * - `SEEK_CUR` = current position,
   * - `SEEK_SET` = start of file.
   * @returns The new position if success.
   */
  seek(position: number, offsetFrom?: 'SEEK_END' | 'SEEK_CUR' | 'SEEK_SET'): number | undefined;

  /**
   * Return statistics about an open file. This differs from fio.stat which return statistics about a closed file. For details type `man 2 stat`.
   * @returns Details about the file.
   */
  stat(): FioStat;

  /**
   * Ensure that file changes are written to disk, for an open file. Compare `fio.sync`, which is for all files. For details type `man 2 fsync`.
   * @returns True if success, false if failure.
   */
  fsync(): boolean;

  /**
   * Ensure that file changes are written to disk, for an open file. Compare `fio.sync`, which is for all files. For details type `man 2 fdatasync`.
   * @returns True if success, false if failure.
   */
  fdatasync(): boolean;
}
