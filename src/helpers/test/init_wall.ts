
import { initController } from "./init_controller";
import { IControllerTestData } from "../../interfaces";

// eslint-disable-next-line
export interface IWallTestData extends IControllerTestData {

}

export const initWall = (wallInstance, data?: IWallTestData) => {
    return initController(wallInstance, data);
};