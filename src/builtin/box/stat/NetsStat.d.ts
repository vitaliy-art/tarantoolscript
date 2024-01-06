export interface NetsStat {
  CONNECTIONS: NetStat;
  REQUESTS: NetStat;
  REQUESTS_IN_PROGRESS: NetStat;
  SENT: NetStat;
  REQUESTS_IN_STREAM_QUEUE: NetStat;
  STREAMS: NetStat;
  RECEIVED: NetStat;
}

export interface NetStat {
  current?: number;
  rps: number;
  total: number;
}
