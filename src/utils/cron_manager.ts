import { FORT_GLOBAL } from "../constants";
import { IScheduleTaskInput } from "../interfaces";

export class TaskSchedulerManager {
    start(name: string) {
        const cron = FORT_GLOBAL.crons.find(q => q.name === name);
        if (!cron) {
            throw new Error(`Cron task ${name} does not exist`);
        }
        this.startTask_(cron);
    }

    private startTask_(cron: IScheduleTaskInput) {
        const task = new cron.task(cron.name, cron.expression);
        task.start();
    }

    startAll() {
        FORT_GLOBAL.crons.forEach(cron => {
            this.startTask_(cron);
        });
    }

    static add(...values: IScheduleTaskInput[]) {
        FORT_GLOBAL.crons = [...FORT_GLOBAL.crons, ...values];
    }
}