import { HTTP_METHOD } from "../enums";
import { joinRoute, splitRoute } from "../helpers";
import { TFileProcessor, TGuard } from "../types";
import { ICacheOptionStored, IWorkerInfo } from "../interfaces";

export class WorkerInfo implements IWorkerInfo {
    workerName: string;
    methodsAllowed: HTTP_METHOD[];
    guards: Array<TGuard>;
    // pattern: string[];
    values: any[];
    expectedQuery?: any;
    expectedBody?: any;
    expectedParam?: any;
    patternSplitted: string[];
    cache: ICacheOptionStored;
    fileProcessor: TFileProcessor;

    constructor(value: IWorkerInfo) {
        this.workerName = value.workerName;
        this.methodsAllowed = value.methodsAllowed;
        this.guards = value.guards;
        this.values = value.values;
        this.expectedQuery = value.expectedQuery;
        this.expectedBody = value.expectedBody;
        this.expectedParam = value.expectedParam;
        this.pattern = value.pattern;
        this.cache = value.cache;
        this.fileProcessor = value.fileProcessor;
    }

    set pattern(value: string) {
        this.patternSplitted = splitRoute(value || "");
    }

    get pattern() {
        return joinRoute(this.patternSplitted);
    }
}
