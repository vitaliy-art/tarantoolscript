export interface IProtoRequestType {
  /** `MP_UINT`	Successful response */
  OK: number;

  /** `MP_UINT`	Out-of-band response */
  CHUNK: number;

  /** `MP_INT`	Error response */
  TYPE_ERROR: number;

  /** `MP_UINT`	An unknown request type */
  UNKNOWN: number;

  /** Select request */
  SELECT: number;

  /** Insert request */
  INSERT: number;

  /** Replace request */
  REPLACE: number;

  /** Update request */
  UPDATE: number;

  /** Upsert request */
  UPSERT: number;

  /** Delete request */
  DELETE: number;

  /** Function remote call (`conn:call()`) */
  CALL: number;

  /** Authentication request */
  AUTH: number;

  /** Evaluate a Lua expression (`conn:eval()`) */
  EVAL: number;

  /** Increment the LSN and do nothing else */
  NOP: number;

  /** Ping (`conn:ping()`) */
  PING: number;

  /** Share iproto version and supported features */
  ID: number;
}
