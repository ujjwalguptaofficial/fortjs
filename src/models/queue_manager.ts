export class QueueManager {
    get(id: any, options?: any) {
        return new QueueProducer(id, options);
    }
}

export class QueueProducer {

    constructor(name: any, options?: any) {

    }

    add(...args) {

    }

    remove(...args) {

    }
}
