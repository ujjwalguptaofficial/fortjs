import { FORT_GLOBAL } from "../constants";

export interface ITaskScheduler {
    start();
    stop();
}

export abstract class CronTask {
    protected scheduler: ITaskScheduler;
    name: string;
    expression: string;

    constructor(expression: string) {
        this.name = this.constructor.name;
        this.expression = expression;
        this.scheduler = new FORT_GLOBAL.cronJobScheduler(
            this
        );
    }

    abstract task();

    start() {
        return this.scheduler.start();
    }

    stop() {
        return this.scheduler.stop();
    }
}

class DailyBalanceCronTask extends CronTask {

    task() {
        // run some tasks
    }
}

const taskInstance = new DailyBalanceCronTask("");