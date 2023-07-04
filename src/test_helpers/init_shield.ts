
import { initController } from "./init_controller";
import { ControllerTestData } from "../types";

export type ShieldTestData = ControllerTestData & {
    workerName?: string;
};

export const initShield = (shieldInstance, data?: ShieldTestData) => {
    const value: ShieldTestData = initController(shieldInstance, data) as any;
    return value;
};