import { ITaskScheduler } from "../interfaces";
import { App } from "../models";

export abstract class ScheduleTask {
    private taskScheduler_: ITaskScheduler;
    name: string;
    expression: string;

    constructor(name: string, expression: string, private appGlobal_: App) {
        this.name = name || this.constructor.name;
        this.expression = expression;
        this.taskScheduler_ = new appGlobal_.cronJobScheduler(
            this
        );
    }

    abstract execute(): Promise<any>;

    protected scheduleTask() {
        return this.taskScheduler_.start();
    }

    protected haltTask() {
        return this.taskScheduler_.stop();
    }

    start() {
        this.scheduleTask();
    }

    stop() {
        return this.haltTask();
    }

    // eslint-disable-next-line
    onComplete() {

    }
}