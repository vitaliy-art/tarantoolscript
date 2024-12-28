import { TupleObject } from '../../builtin/box/tuple/TupleObject';
import { TubeType } from './TubeType';

interface BaseOptions {
  /**
   * If `true`, the contents do not persist on disk (the queue is in-memory only).
   */
  temporary?: boolean;

  /**
   * If `true`, no error will be returned if the tube already exists.
   */
  if_not_exists?: boolean;

  /**
   * A callback to be executed on every operation;
   * the expected function syntax is `function(task, stats_data)`, where stats_data is the operation type, and task is normalized task data.
   *
   * NOTE: It's better to use `:on_task_change()` function.
   */
  on_task_change?: (this: void, task: TupleObject, statsData: string) => unknown;
}

interface LimfifottlOptions extends BaseOptions {
  /**
   * Limit size of the queue.
   */
  capacity?: number;
}

export type TubeOptions<T extends TubeType> =
  T extends 'limfifottl' ? LimfifottlOptions | undefined :
  T extends TubeType ? BaseOptions | undefined :
  never;
