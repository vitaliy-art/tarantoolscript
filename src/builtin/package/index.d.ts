
/**
 * All the Tarantool modules are, at some level, inside a package which, appropriately, is named package.
 * There are also miscellaneous functions and variables which are outside all modules.
 *
 * @noSelf
 */
export interface Package {
  /**
   * Get file paths used to search for Lua modules. For example, these paths are used to find modules loaded using the `require()` directive.
   */
  path: string;

  /**
   * Get file paths used to search for C modules. For example, these paths are used to find modules loaded using the `require()` directive.
   */
  cpath: string;

  /**
   * Show Lua or C modules loaded by Tarantool, so that their functions and members are available.
   * loaded shows both pre-loaded modules and modules added using the `require()` directive.
   */
  loaded: LuaTable<string, unknown>;

  /**
   * Return the current search root, which defines the path to the root directory from which dependencies are loaded.
   * By default, the search root is the current directory.
   *
   * Note: The current directory is obtained using `debug.sourcedir()`.
   */
  searchroot(): string;

  /**
   * Set the search root, which defines the path to the root directory from which dependencies are loaded.
   * By default, the search root is the current directory (see `package.searchroot()`).
   * @param searchRoot A relative or absolute path to the search root. If search-root is a relative path, it is expanded to an absolute path.
   * You can omit this argument or set it to `box.NULL` to reset the search root to the current directory.
   */
  setsearchroot(searchRoot?: string): void;
}
