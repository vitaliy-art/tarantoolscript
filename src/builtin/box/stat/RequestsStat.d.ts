export interface RequestsStat {
  DELETE: RequestStat;
  COMMIT: RequestStat;
  SELECT: RequestStat;
  ROLLBACK: RequestStat;
  INSERT: RequestStat;
  EVAL: RequestStat;
  /** The count of requests that resulted in an error. */
  ERROR: RequestStat;
  CALL: RequestStat;
  BEGIN: RequestStat;
  PREPARE: RequestStat;
  REPLACE: RequestStat;
  UPSERT: RequestStat;
  AUTH: RequestStat;
  EXECUTE: RequestStat;
  UPDATE: RequestStat;
}

export interface RequestStat {
  /** Total number of requests processed per second since the server started. */
  total: number;
  /** Average number of requests per second in the last 5 seconds. */
  rps: number;
}
