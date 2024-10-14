
export interface IQueueProvider {
    progress(value: any);
    process(task: Function): Promise<void>;
}

export abstract class QueueConsumer {

    private queueProvider_: IQueueProvider;
    constructor(public id: any) {
    }

    private init_(provider: IQueueProvider) {
        // this.queueProvider_.progress(this.progress.bind(this));
        this.queueProvider_ = new (provider as any)(this);
    }

    abstract onProcess(job: any): Promise<any>;

    on(eventName: string, callback: Function) {

    }

    progress(value: any) {
        this.queueProvider_.progress(value);
    }
}
