import { WorkerInfo } from ".";
import { HTTP_METHOD } from "../enums";
import { GenericController, GenericShield } from "../generics";
export declare type RouteMatch = {
    controller: typeof GenericController;
    workerInfo: WorkerInfo;
    params: any;
    shields: Array<typeof GenericShield>;
    allowedHttpMethod: HTTP_METHOD[];
    controllerName: string;
};
