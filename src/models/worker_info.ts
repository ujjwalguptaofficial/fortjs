import { HTTP_METHOD } from "../enums";
import { GenericGuard } from "../generics";
import { joinRoute, splitRoute } from "../helpers";
import { IWorkerInfo } from "../types";

export class WorkerInfo implements IWorkerInfo {
    workerName: string;
    methodsAllowed: HTTP_METHOD[];
    guards: Array<typeof GenericGuard>;
    // pattern: string[];
    values: any[];
    expectedQuery?: any;
    expectedBody?: any;
    expectedParam?: any;
    patternSplitted: string[];

    constructor(value: IWorkerInfo) {
        this.workerName = value.workerName;
        this.methodsAllowed = value.methodsAllowed;
        this.guards = value.guards;
        this.values = value.values;
        this.expectedQuery = value.expectedQuery;
        this.expectedBody = value.expectedBody;
        this.pattern = value.pattern;
    }

    set pattern(value: string) {
        this.patternSplitted = splitRoute(value || "");
    }

    get pattern() {
        return joinRoute(this.patternSplitted);
    }
}