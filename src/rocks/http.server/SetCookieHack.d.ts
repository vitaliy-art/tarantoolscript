export interface SetCookieHack {
  response_mt: {
    __index: {
      /**
       * Sets cookie for `request`.
       * @param request Object to which setting cookie.
       * @param cookie Cookie to set.
       * @param options Cookie options.
       */
      setcookie(
        this: void,
        request: AnyTable,
        cookie: { name: string, value: string, path?: string, expires?: string, domain?: string },
        options?: { raw?: boolean }
      ): void;
    },
  },
}
