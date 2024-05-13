export interface FioStat {
  inode?: number;
  rdev?: number;
  size?: number;
  atime?: number;
  mode?: number;
  mtime?: number;
  nlink?: number;
  uid?: number;
  blksize?: number;
  gid?: number;
  ctime?: number;
  dev?: number;
  blocks?: number;

  /**
   * POSIX macro S_ISBLK.
   */
  is_blk(): number;
  /**
   * POSIX macro S_ISCHR.
   */
  is_chr(): number;
  /**
   * POSIX macro S_ISDIR.
   */
  is_dir(): number;
  /**
   * POSIX macro S_ISFIFO.
   */
  is_fifo(): number;
  /**
   * POSIX macro S_ISLINK.
   */
  is_link(): number
  /**
   * POSIX macro S_ISREG.
   */;
  is_reg(): number;
  /**
   * POSIX macro S_ISSOCK.
   */
  is_sock(): number;
}
