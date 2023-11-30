import { FORT_GLOBAL } from "../constants";
import { ISchedule } from "../interfaces";

export class TaskSchedulerManager {
    start(name: string) {
        const cron = FORT_GLOBAL.crons.find(q => q.name === name);
        if (!cron) {
            throw new Error(`Cron task ${name} does not exist`);
        }
    }

    startAll() {

    }

    static add(...values: ISchedule[]) {
        FORT_GLOBAL.crons = [...FORT_GLOBAL.crons, ...values];
    }
}