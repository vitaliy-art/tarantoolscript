export type CsvReadable =
  | string
  | { read(): unknown }
