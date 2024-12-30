/** @noSelfInFile */

export declare const version: string;

export declare namespace build {
  export const target: string;
  export const options: string;
  export const linking: string;
  export const mod_format: string;
  export const flags: string;
  export const compiler: string;
  export const test_build: boolean;
  export const asan: boolean;
}

export declare const package: string;

export function pid(): number;

export function uptime(): number;

export declare namespace debug {
  export function getsources(moduleName: string): string | undefined;
}
