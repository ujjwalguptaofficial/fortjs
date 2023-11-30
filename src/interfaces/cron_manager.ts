import { TCronTask } from "../types";

export interface ITaskScheduler {
    start();
    stop();
}

export interface ICron {
    name?: string;
    expression: string;
    task: TCronTask
}