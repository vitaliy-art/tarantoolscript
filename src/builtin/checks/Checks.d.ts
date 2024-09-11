/** @noSelfInFile */

export declare function checks(type: Types | NullableTypes | TableTypes, ...other: (Types | NullableTypes | TableTypes)[]): void;
export declare function checks(type: string | TableTypes, ...other: (string | TableTypes)[]): void;

type Types =
| 'nil'
| 'boolean'
| 'number'
| 'string'
| 'userdata'
| 'function'
| 'thread'
| 'table'
| 'datetime'
| 'decimal'
| 'error'
| 'int64'
| 'interval'
| 'tuple'
| 'uint64'
| 'uuid'
| 'uuid_bin'
| 'uuid_str'

type NullableTypes = `?${Types}` | '?' // Placeholder '?' exactly mean an any type.

type TableTypes =
| { [key: string]: Types | NullableTypes }
| { [key: string]: string }
| (Types | NullableTypes)[]
| string[]
