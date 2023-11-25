
import { initController } from "./init_controller";
import { IControllerTestData } from "../../interfaces";

// eslint-disable-next-line
export interface IGuardTestData extends IControllerTestData {

}

export const initGuard = (guardInstance, data?: IGuardTestData) => {
    return initController(guardInstance, data);
};