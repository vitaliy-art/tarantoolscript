export interface VinylDiskStat {
  /**
   * The amount of data that has gone into files in a subdirectory of `vinyl_dir`, with names like `{lsn}.run` and `{lsn}.index`.
   * The size of the run will be related to the output of `scheduler.dump_*`.
   */
  data: number;

  /**
   * The amount of data that has gone into files in a subdirectory of `vinyl_dir`, with names like `{lsn}.run` and `{lsn}.index`.
   * The size of the run will be related to the output of `scheduler.dump_*`.
   */
  index: number;

  /**
   * Sum size of data stored at the last LSM tree level, in bytes, without taking disk compression into account.
   * It can be thought of as the size of disk space that the user data would occupy if there were no compression, indexing,
   * or space increase caused by the LSM tree design.
   */
  data_compacted: number;
}
