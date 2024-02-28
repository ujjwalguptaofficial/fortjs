import { ScheduleTask } from "../abstracts";
import { ITaskScheduler } from "../interfaces";
import { CronJob } from "cron";

export class DefaultCronJobScheduler implements ITaskScheduler {
    private job_: CronJob;

    constructor(cronTask: ScheduleTask) {
        // Dynamically import the cron package
        // eslint-disable-next-line
        this.job_ = new CronJob(cronTask.expression, async () => {
            try {
                await cronTask.execute();
            }
            catch (ex) {
                cronTask['appGlobal_'].logger.error(ex);
            }
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