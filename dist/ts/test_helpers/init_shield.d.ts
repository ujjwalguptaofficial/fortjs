import { ControllerTestData } from "../types";
export declare type ShieldTestData = ControllerTestData & {
    workerName?: string;
};
export declare const initShield: (controllerInstance: any, data?: ShieldTestData) => ShieldTestData;
