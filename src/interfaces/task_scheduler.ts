import { TScheduleTask } from "../types";

export interface ITaskScheduler {
    start();
    stop();
}

export interface IScheduleTaskInput {
    name?: string;
    expression: string;
    task: TScheduleTask
}