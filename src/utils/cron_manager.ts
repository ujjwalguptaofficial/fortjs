import { ScheduleTask } from "../abstracts";
import { IScheduleTaskInput } from "../interfaces";
import { App } from "../models";

interface IScheduleTaskStarted {
    task: ScheduleTask
}

const tasks = new Map<string, IScheduleTaskStarted>;

export class TaskSchedulerManager {

    constructor(private app_: App) {

    }

    start(name: string) {
        const cron = this.getTaskInputByName(name);
        this.startTask_(cron);
    }

    private startTask_(cron: IScheduleTaskInput) {
        const task = new cron.task(cron.name, cron.expression, this.app_);
        task.start();
        tasks.set(cron.name, {
            task: task
        });
    }

    startAll() {
        this.app_.crons.forEach(cron => {
            this.startTask_(cron);
        });
    }

    add(...values: IScheduleTaskInput[]) {
        this.app_.crons = [...this.app_.crons, ...values];
    }

    execute(name: string) {
        const cron = this.getTaskInputByName(name);
        return new cron.task(cron.name, cron.expression).execute();
    }

    getTaskInputByName(name: string) {
        const cron = this.app_.crons.find(q => q.name === name);
        if (!cron) {
            throw new Error(`Cron task ${name} is not registered.`);
        }
        return cron;
    }

    getTask<T = ScheduleTask>(name: string) {
        const cron = tasks.get(name);
        if (!cron) {
            throw new Error(`Cron task ${name} does not exist`);
        }
        return cron.task as T;
    }

    private stopTask_(task: ScheduleTask) {
        task.stop();
        tasks.delete(task.name);
    }

    stop(name: string) {
        const cron = this.getTask(name);
        this.stopTask_(cron);
    }

    stopAll() {
        tasks.forEach(cron => {
            this.stopTask_(cron.task);
        });
    }
}