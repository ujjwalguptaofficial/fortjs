
import { initController } from "./init_controller";
import { ControllerTestData } from "../types";

export type ShieldTestData = ControllerTestData & {
    workerName?: string;
};

export const initShield = (controllerInstance, data?: ShieldTestData) => {
    const value: ShieldTestData = initController(controllerInstance, data) as any;
    value.workerName = data.workerName;
    return value;
};