
import { initController } from "./init_controller";
import { IControllerTestData } from "../interfaces";

export interface IShieldTestData extends IControllerTestData {
    workerName?: string;
}

export const initShield = (shieldInstance, data?: IShieldTestData) => {
    const value: IShieldTestData = initController(shieldInstance, data) as any;
    return value;
};