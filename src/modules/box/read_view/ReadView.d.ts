/** @noSelfInFile */

import { ReadViewObject } from './ReadViewObject';

export interface ReadView {
  /**
   * Return an array of all active database read views. This array might include the following read view types:
   * - read views created by application code (Enterprise Edition only)
   * - system read views (used, for example, to make a checkpoint or join a new replica)
   *
   * Read views created by application code also have the space field.
   * The field lists all spaces available in a read view, and may be used like a read view object returned by `box.read_view.open()`.
   *
   * Note:
   *
   * `read_view.list()` also contains read views created using the C API (`box_raw_read_view_new()`).
   * Note that you cannot access database spaces included in such views from Lua.
   */
  list(): ReadViewObject[];

  open(): unknown;
}
