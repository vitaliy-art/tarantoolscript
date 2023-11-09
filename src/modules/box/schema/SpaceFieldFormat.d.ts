import { ForeignKeySingleOptions } from './ForeignKeyOptions';

export interface SpaceFieldFormat {
  name: string;
  type:
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
    | 'scalar';
  is_nullable?: boolean;
  collation?: string;
  constraint?: string;
  foreign_key?: ForeignKeySingleOptions;
}
