/** @noSelfInFile */

import { FileHandleObject } from './FileHandleObject';
import { FioStat } from './FioStat';

/**
 * Concatenate partial string, separated by ‘/’ to form a path name.
 * @param partialString One or more strings to be concatenated.
 * @returns Path name.
 */
export declare function pathjoin(...partialString: [string, ...string[]]): string;

/**
 * Given a full path name, remove all but the final part (the file name). Also remove the suffix, if it is passed.
 *
 * Note that the basename of a path with a trailing slash is an empty string. It is different from how the Unix `basename` program interprets such a path.
 * @param pathName Path name.
 * @param suffix Suffix.
 * @returns File name.
 */
export declare function basename(pathName: string, suffix?: string): string;

/**
 * Given a full path name, remove the final part (the file name).
 * @param pathName Path name.
 * @returns Directory name, that is, path name except for file name.
 */
export declare function dirname(pathName: string): string;

/**
 * Given a final part (the file name), return the full path name.
 * @param fileName File name.
 * @returns Directory name, that is, path name including file name.
 */
export declare function abspath(fileName: string): string;

export declare namespace path {
  /**
   * @param pathName Path to directory or file.
   * @returns True if path-name refers to a directory or file that exists and is not a broken symbolic link; otherwise false.
   */
  export declare function exists(pathName: string): boolean;

  /**
   * @param pathName Path to directory or file.
   * @returns True if path-name refers to a directory; otherwise false.
   */
  export declare function is_dir(pathName: string): boolean;

  /**
   * @param pathName Path to directory or file.
   * @returns True if path-name refers to a file; otherwise false.
   */
  export declare function is_file(pathName: string): boolean;

  /**
   * @param pathName Path to directory of file.
   * @returns True if path-name refers to a symbolic link; otherwise false
   */
  export declare function is_link(pathName: string): boolean;

  /**
   * @param pathName Path to directory or file.
   * @returns True if path-name refers to a directory or file that exists or is a broken symbolic link; otherwise false.
   */
  export declare function lexists(pathName: string): boolean;
}

/**
 * Set the mask bits used when creating files or directories. For a detailed description type `man 2 umask`.
 * @param maskBits Mask bits.
 * @returns Previous mask bits.
 */
export declare function umask(maskBits: number): number;

/**
 * Returns information about a file object. For details type` man 2 lstat` or `man 2 stat`.
 * @param pathName Path name of file.
 * @returns
 * - (If no error) table of fields which describe the file’s block size, creation time, size, and other attributes.
 * - (If error) two return values: null, error message.
 */
export declare function lstat(pathName: string): LuaMultiReturn<[FioStat, undefined] | [undefined, string]>;

/**
 * Returns information about a file object. For details type` man 2 lstat` or `man 2 stat`.
 * @param pathName Path name of file.
 * @returns
 * - (If no error) table of fields which describe the file’s block size, creation time, size, and other attributes.
 * - (If error) two return values: null, error message.
 */
export declare function stat(pathName: string): LuaMultiReturn<[FioStat, undefined], [undefined, string]>;

/**
 * Create a directory. For details type man 2 mkdir.
 * @param pathName Path of directory.
 * @param mode Mode bits can be passed as a number or as string constants, for example `S_IWUSR`. Mode bits can be combined by enclosing them in braces.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function mkdir(pathName: string, mode?: number): LuaMultiReturn<[true, undefined], [false, string]>;

/**
 * Delete a directory. For details type man 2 rmdir.
 * @param pathName Path of directory.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function rmdir(pathName: string): LuaMultiReturn<[true, undefined], | [false, string]>;

/**
 * Change working directory. For details type `man 2 chdir`.
 * @param pathName Path of directory.
 * @returns (If success) true. (If failure) false.
 */
export declare function chdir(pathName: string): boolean;

/**
 * List files in directory. The result is similar to the `ls` shell command.
 * @param pathName Path of directory.
 * @returns
 * - (If no error) a list of files.
 * - (If error) two return values: null, error message.
 */
export declare function listdir(pathName: string): LuaMultiReturn<[string[], undefined] | [undefined, string]>

/**
 * Return a list of files that match an input string.
 * The list is constructed with a single flag that controls the behavior of the function: `GLOB_NOESCAPE`. For details type `man 3 glob`.
 * @param pathName Path name, which may contain wildcard characters.
 * @returns List of files whose names match the input string
 */
export declare function glob(pathName: string): string[];

/**
 * Return the name of a directory that can be used to store temporary files.
 *
 * `fio.tempdir()` stores the created temporary directory into /tmp by default.
 * Since version `2.4.1`, this can be changed by setting the `TMPDIR` environment variable.
 * Before starting Tarantool, or at runtime by `os.setenv()`.
 */
export declare function tempdir(): string;

/**
 * Return the name of the current working directory.
 */
export declare function cwd(): string;

/**
 * Copy everything in the from-path, including subdirectory contents, to the to-path. The result is similar to the `cp -r` shell command.
 * The to-path should not be empty.
 * @param fromPath Path name.
 * @param toPath Path name.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function copytree(fromPath: string, toPath: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Create the path, including parent directories, but without file contents. The result is similar to the `mkdir -p` shell command.
 * @param pathName Path name.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function mktree(pathName: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Remove the directory indicated by path-name, including subdirectories. The result is similar to the `rm -rf` shell command.
 * @param pathName Path name.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: null, error message.
 */
export declare function rmtree(pathName: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Create link. For details type `man 2 link`.
 * @param src Existing file name.
 * @param dst Linked name.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function link(src: string, dst: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Create symlink. For details type `man 2 symlink`.
 * @param src Existing file name.
 * @param dst Linked name.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function symlink(src: string, dst: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Read link value. For details type `man 2 readlink`.
 * @param src Existing link.
 * @returns
 * - (If no error) link value.
 * - (If error) two return values: null, error message.
 */
export declare function readlink(src: string): LuaMultiReturn<[string, undefined] | [undefined, string]>;

/**
 * Delete link. For details type `man 2 unlink`.
 * @param src Existing link.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function unlink(src: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Rename a file or directory. For details type `man 2 rename`.
 * @param pathName Original name.
 * @param newPathName New name.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function rename(pathName: string, newPathName: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Change the access time and possibly also change the update time of a file. For details type `man 2 utime`.
 * Times should be expressed as number of seconds since the epoch.
 * @param filaName The name of file.
 * @param accessTime Time of last access. Default current time.
 * @param updateTime Time of last update. Default access time.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function utime(filaName: string, accessTime?: number, updateTime?: number): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Copy a file. The result is similar to the `cp` shell command.
 * @param pathName Path to original file.
 * @param newPathName Path to new file.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function copyfile(pathName: string, newPathName: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Manage ownership of file objects. For details type `man 2 chown`.
 * @param pathName Path name.
 * @param ownerUser New user id.
 * @param ownerGroup New group id.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function chown(pathName: string, ownerUser: string, ownerGroup: string): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Manage the rights to file objects. For details type `man 2 chmod`.
 * @param pathName Path name.
 * @param newRights New permissions.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function chmod(pathName: string, newRights: number): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Reduce file size to a specified value. For details type `man 2 truncate`.
 * @param pathName Path to file.
 * @param newSize New file's size.
 * @returns
 * - (If no error) true.
 * - (If error) two return values: false, error message.
 */
export declare function truncate(pathName: string, newSize: number): LuaMultiReturn<[true, undefined] | [false, string]>;

/**
 * Ensure that changes are written to disk. For details type `man 2 sync`.
 * @returns True if success, false if failure.
 */
export declare function sync(): boolean;

/**
 * Open a file in preparation for reading or writing or seeking.
 * @param pathName Full path to the file to open.
 * @param flags Flags can be passed as a number or as string constants, for example ‘O_RDONLY’, ‘O_WRONLY’, ‘O_RDWR’.
 * Flags can be combined by enclosing them in braces. On Linux the full set of flags as described on the Linux man page is:
 * - `O_APPEND` (start at end of file),
 * - `O_ASYNC` (signal when IO is possible),
 * - `O_CLOEXEC` (enable a flag related to closing),
 * - `O_CREAT` (create file if it doesn’t exist),
 * - `O_DIRECT` (do less caching or no caching),
 * - `O_DIRECTORY` (fail if it’s not a directory),
 * - `O_EXCL` (fail if file cannot be created),
 * - `O_LARGEFILE` (allow 64-bit file offsets),
 * - `O_NOATIME` (no access-time updating),
 * - `O_NOCTTY` (no console tty),
 * - `O_NOFOLLOW` (no following symbolic links),
 * - `O_NONBLOCK` (no blocking),
 * - `O_PATH` (get a path for low-level use),
 * - `O_SYNC` (force writing if it’s possible),
 * - `O_TMPFILE` (the file will be temporary and nameless),
 * - `O_TRUNC` (truncate)
 *
 * … and, always, one of:
 * - `O_RDONLY` (read only),
 * - `O_WRONLY` (write only), or
 * - `O_RDWR` (either read or write).
 * @param mode Mode bits can be passed as a number or as string constants, for example `S_IWUSR`.
 * Mode bits are significant if flags include `O_CREAT` or `O_TMPFILE`. Mode bits can be combined by enclosing them in braces.
 * @returns
 * - (If no error) file handle.
 * - (If error) two return values: null, error message.
 */
export declare function open(pathName: string, flags?: number | string[], mode?: number | string[]): LuaMultiReturn<[FileHandleObject, undefined] | [false, string]>;

export declare namespace c {
  export declare namespace seek {
    export declare const SEEK_SET: 0;
    export declare const SEEK_DATA: 3;
    export declare const SEEK_HOLE: 4;
    export declare const SEEK_END: 2;
    export declare const SEEK_CUR: 1;
  }

  export declare namespace mode {
    export declare const S_IWGRP: 16;
    export declare const S_IXGRP: 8;
    export declare const S_IROTH: 4;
    export declare const S_IXOTH: 1;
    export declare const S_IRUSR: 256;
    export declare const S_IXUSR: 64;
    export declare const S_IRWXU: 448;
    export declare const S_IRWXG: 56;
    export declare const S_IWOTH: 2;
    export declare const S_IRWXO: 7;
    export declare const S_IWUSR: 128;
    export declare const S_IRGRP: 32;
  }

  export declare namespace flag {
    export declare const O_NONBLOCK: 2048;
    export declare const O_RDONLY: 0;
    export declare const O_DIRECTORY: 65536;
    export declare const O_WRONLY: 1;
    export declare const O_ASYNC: 8192;
    export declare const O_DIRECT: 16384;
    export declare const O_TMPFILE: 4259840;
    export declare const O_EXCL: 128;
    export declare const O_PATH: 2097152;
    export declare const O_SYNC: 1052672;
    export declare const O_NOCTTY: 256;
    export declare const O_CLOEXEC: 524288;
    export declare const O_TRUNC: 512;
    export declare const O_NOFOLLOW: 131072;
    export declare const O_RDWR: 2;
    export declare const O_LARGEFILE: 0;
    export declare const O_CREAT: 64;
    export declare const O_APPEND: 1024;
    export declare const O_NOATIME: 262144;
    export declare const O_NDELAY: 2048;
  }
}
