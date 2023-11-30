import { ScheduleTask } from "../abstracts";
import { ITaskScheduler } from "../interfaces";

export class DefaultCronJobScheduler implements ITaskScheduler {
    private job_;

    constructor(name: string, cronTask: ScheduleTask) {
        // Dynamically import the cron package
        const cron = require('cron');
        this.job_ = new cron.CronJob(cronTask.expression, async () => {
            await cronTask.execute();
            cronTask.onComplete();
        });
    }

    start() {
        return this.job_.start();
    }

    stop() {
        return this.job_.stop();
    }
}