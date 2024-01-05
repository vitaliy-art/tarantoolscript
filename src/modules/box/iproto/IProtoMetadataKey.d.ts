export interface IProtoMetadataKey {
  /** `MP_STR`	Field name. Nested in `IPROTO_METADATA` */
  NAME: number;

  /** `MP_STR`	Field type. Nested in `IPROTO_METADATA` */
  TYPE: number;

  /** `MP_STR`	Field collation. Nested in `IPROTO_METADATA` */
  COLL: number;

  /** `MP_BOOL`	True if the field is nullable. Nested in `IPROTO_METADATA` */
  IS_NULLABLE: number;

  /** `MP_BOOL`	True if the field is auto-incremented. Nested in `IPROTO_METADATA` */
  IS_AUTOINCREMENT: number;

  /** `MP_STR` or `MP_NIL`	Original expression under `SELECT`. Nested in `IPROTO_METADATA`. See `box.execute()` */
  SPAN: number;
}
