export interface TubeStatistic {
  tasks: {
    taken: number;
    done: number;
    ready: number;
    total: number;
    delayed: number;
    buried: number;
  };

  calls: {
    ttr: number;
    touch: number;
    bury: number;
    put: number;
    ack: number;
    delay: number;
    take: number;
    kick: number;
    release: number;
    ttl: number;
    delete: number;
  };
}
