import { TupleObject } from '../../builtin/box/tuple/TupleObject';
import { TaskOptions } from './TaskOptions';

export interface TubeObject<O = TaskOptions<T>> {
  /**
   * Putting a task in a queue.
   * @param taskData The user-defined description of the task, usually a long string.
   * @param options Task options.
   * @returns The value of the new tuple in the queue's associated space, also called the "created task".
   */
  put(taskData: unknown, options?: O): TupleObject;

  /**
   * Taking a task from the queue ("consuming").
   * @param timeout If there is no such task, and timeout was specified, then the job waits until a task becomes ready or the timeout expires.
   * @returns The value of the taken tuple, or nil if none was found.
   */
  take(timeout?: number): TupleObject | undefined;

  /**
   * Increasing TTR and/or TTL for tasks. If queue does not support `ttr`, error will be thrown.
   * @param taskId
   * @param increment If `increment` is lower than zero, error will be thrown. If `increment` is zero or `nil` effect is noop.
   * If current `ttr` of task is 500 years or greater then operation is noop.
   */
  touch(taskId: number, increment?: number): void;

  /**
   * Acknowledging the completion of a task.
   * @param taskId Task ID.
   */
  ack(taskId: number): TupleObject | undefined;

  /**
   * Put the task back in the queue.
   * @param taskId Task ID.
   * @param options Task options.
   */
  release(taskId: number, options?: O): TupleObject;

  /**
   * Look at a task without changing its state.
   * @param taskId Task ID.
   * @returns The tuple of the task.
   */
  peek(taskId: number): TupleObject;

  /**
   * If it becomes clear that a task cannot be executed in the current circumstances, you can "bury" the task --
   * that is, disable it until the circumstances change.
   * @param taskId Task ID.
   */
  bury(taskId: number): TupleObject;

  /**
   * Reverse the effect of a bury request on one or more tasks.
   * @param count Tasks number to kick.
   * @returns Number of tasks actually kicked.
   */
  kick(count: number): number;

  /**
   * Delete the task.
   * @param taskId Task ID.
   * @returns Deleted task.
   */
  delete(taskId: number): TupleObject;

  /**
   * Reverse the effect of a create request.
   *
   * Effect: remove the tuple from the `_queue` space, and drop the space associated with the queue.
   */
  drop(): void;

  /**
   * Forcibly returns all taken tasks to a ready state.
   */
  release_all(): void;

  on_task_change(callback?: (this: void, task: TupleObject, statsData: string) => unknown): ((this: void, task: TupleObject, statsData: string) => unknown) | undefined;
}
