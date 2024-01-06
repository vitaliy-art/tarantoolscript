import { ForeignKeySingleOptions } from './ForeignKeyOptions';

export type FieldType =
  | 'any'
  | 'unsigned'
  | 'string'
  | 'integer'
  | 'number'
  | 'varbinary'
  | 'boolean'
  | 'double'
  | 'decimal'
  | 'uuid'
  | 'array'
  | 'map'
  | 'scalar'

export interface SpaceFieldFormat {
  name: string;
  type: FieldType;
  is_nullable?: boolean;
  collation?: string;
  constraint?: string;
  foreign_key?: ForeignKeySingleOptions;
}
