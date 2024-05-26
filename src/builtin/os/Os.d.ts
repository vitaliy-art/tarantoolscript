/** @noSelfInFile */

/**
 * Execute by passing to the shell.
 * @param command What to execute.
 */
export declare function execute(command: string): unknown;

export declare const rename: typeof os.rename;

export declare const getenv: typeof os.getenv;

export declare const remove: typeof os.remove;

export declare const date: typeof os.date;

export declare const exit: typeof os.exit;

export declare const time: typeof os.time;

export declare const clock: typeof os.clock;

export declare const tmpname: typeof os.tmpname;

/**
 * Return a table containing all environment variables.
 */
export declare function environ(): LuaTable<string, string>;

/**
 * Set an environment variable.
 * @param name Environment variable name.
 * @param value Environment variable value. If omitted, value will be set to null.
 */
export declare function setenv(name: string, value?: string): void;

export declare const setlocale: typeof os.setlocale;

export declare const difftime: typeof os.difftime & { (t1: number): number };
