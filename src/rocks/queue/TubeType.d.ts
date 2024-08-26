export type TubeType =
  | 'fifo' // a simple queue
  | 'fifottl' // a simple priority queue with support for task time to live
  | 'limfifottl' // a simple size-limited priority queue with support for task
  | 'utube' // a queue with sub-queues inside
  | 'utubettl' // extension of utube to support ttl
