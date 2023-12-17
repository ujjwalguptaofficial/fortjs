import { ScheduleTask } from "fortjs";

export class CounterScheduler extends ScheduleTask {
    counter = 0;

    async execute(): Promise<any> {
        this.counter++;
    }
}