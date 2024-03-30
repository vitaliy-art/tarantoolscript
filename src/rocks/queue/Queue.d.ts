/** @noSelfInFile */

import { QueueState } from './QueueState';
import { TaskOptions } from './TaskOptions';
import { TubeObject } from './TubeObject';
import { TubeOptions } from './TubeOptions';
import { TubeStatistic } from './TubeStatistic';
import { TubeType } from './TubeType';

export declare function create_tube<T extends TubeType>(tubeName: string, type: T, options: TubeOptions<T>): TubeObject<TaskOptions<T>>;

export declare const tube: LuaTable<string, TubeObject>;

/**
 * Show the number of tasks in a queue broken down by `task_state`, and the number of requests broken down by the type of request.
 * If the queue name is not specified, show these numbers for all queues.
 * Statistics are temporary, they are reset whenever the Tarantool server restarts.
 */
export declare function statistics(tubeName: string): TubeStatistic;

export declare function statistics(): LuaTable<string, TubeStatistic>;

export declare function state(): QueueState;

export declare function cfg(cfg?: { ttr?: number, in_replicaset?: boolean }): void;

/**
 * Register a custom driver.
 * @param driverName Unique driver name. Must be different from the core drivers names.
 * @param tubeCtr Implementation of tube control methods.
 * [Driver API](https://github.com/tarantool/queue?tab=readme-ov-file#driver-api)
 */
export declare function register_driver(driverName: string, tubeCtr: unknown): void;
