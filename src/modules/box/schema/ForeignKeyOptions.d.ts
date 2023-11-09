export interface ForeignKeySingleOptions {
  space: string;
  field: string;
}

export interface ForeignKeyMultipleOptions {
  space: string
  field: {[key: string]: string};
}
