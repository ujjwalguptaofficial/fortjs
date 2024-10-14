import { IQueueProvider, QueueConsumer } from "../abstracts/queue_consumer";
import Queue from "bull";

export class BullQueueProvider implements IQueueProvider {
    queue: Queue.Queue;
    constructor(public queueConsumer: QueueConsumer) {

    }

    async init() {
        const queueConsumer = this.queueConsumer;
        const queue = new Queue(queueConsumer.id);
        this.queue = queue;
        queue.process(queueConsumer.onProcess.bind(queueConsumer));
    }

    progress(value: any) {
        this.queue.progress(value);
    }
}
