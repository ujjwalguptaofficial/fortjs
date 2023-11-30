import { TScheduleTask } from "../types";

export interface ITaskScheduler {
    start();
    stop();
}

export interface ISchedule {
    name?: string;
    expression: string;
    task: TScheduleTask
}