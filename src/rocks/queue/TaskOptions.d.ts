import { TubeType } from './TubeType';

interface FifottlTaskOptions {
  /**
   * Task priority (`0` is the highest priority and is the default).
   */
  pri?: number;

  /**
   * Time to live for a task put into the queue, in seconds.
   * If ttl is not specified, it is set to infinity (if a task exists in a queue for longer than `ttl` seconds, it is removed).
   */
  ttl?: number;

  /**
   * Time allotted to the worker to work on a task, in seconds;
   * if `ttr` is not specified, it is set to the same as `ttl` (if a task is being worked on for more than `ttr` seconds,
   * its status is changed to 'ready' so another worker may take it).
   */
  ttr?: number;

  /**
   * Time to wait before starting to execute the task, in seconds.
   */
  delay?: number;
}

interface LimfifottlTaskOptions extends FifottlTaskOptions {
  /**
   * Seconds to wait until queue has free space; if `timeout` is not specified or time is up, and queue has no space, method return Nil.
   */
  timeout?: number;
}

interface UtubeTaskOptions {
  /**
   * The name of the sub-queue.
   * Sub-queues split the task stream according to the sub-queue name: it is not possible to take two tasks out of a sub-queue concurrently,
   * each sub-queue is executed in strict FIFO order, one task at a time.
   */
  utube?: string;
}

interface UtubettlTaskOptions extends UtubeTaskOptions, Omit<FifottlTaskOptions, 'pri'> { }

export type TaskOptions<T extends TubeType> =
  T extends 'fifo' ? null :
  T extends 'fifottl' ? FifottlTaskOptions? :
  T extends 'limfifottl' ? LimfifottlTaskOptions? :
  T extends 'utube' ? UtubeTaskOptions? :
  T extends 'utubettl' ? UtubettlTaskOptions? :
  never
