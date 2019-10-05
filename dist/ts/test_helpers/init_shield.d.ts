import { ControllerTestData } from "../types";
export declare type ShieldTestData = ControllerTestData & {
    workerName?: string;
};
export declare const initShield: (shieldInstance: any, data?: ShieldTestData) => ShieldTestData;
