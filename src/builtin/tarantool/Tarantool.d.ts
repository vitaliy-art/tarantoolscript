/** @noSelfInFile */

export declare const version: string;

export declare namespace build {
  export declare const target: string;
  export declare const options: string;
  export declare const linking: string;
  export declare const mod_format: string;
  export declare const flags: string;
  export declare const compiler: string;
  export declare const test_build: boolean;
  export declare const asan: boolean;
}

export declare const package: string;

export function pid(): number;

export function uptime(): number;

export declare namespace debug {
  export function getsources(moduleName: string): string | undefined;
}
