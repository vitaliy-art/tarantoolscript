export interface HTTPResponse {
  getters: {
    [ key: string ]: unknown;

    /**
     * Parse json from body.
     */
    json(this: void): LuaTable<string, unknown> | unknown[];
  }

  mt: {
    /**
     * Check that status code is 2xx.
     */
    is_successful(): boolean;
  }
}
