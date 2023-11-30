import { FORT_GLOBAL } from "../constants";
import { ITaskScheduler } from "../interfaces";

export abstract class CronTask {
    protected scheduler: ITaskScheduler;
    name: string;
    expression: string;

    constructor(name: string, expression: string) {
        this.name = name || this.constructor.name;
        this.expression = expression;
        this.scheduler = new FORT_GLOBAL.cronJobScheduler(
            this
        );
    }

    abstract task(): Promise<any>;

    start() {
        return this.scheduler.start();
    }

    stop() {
        return this.scheduler.stop();
    }

    onComplete() {

    }
}
