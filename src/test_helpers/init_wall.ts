
import { initController } from "./init_controller";
import { ControllerTestData } from "../types";

export type WallTestData = ControllerTestData;

export const initWall = (controllerInstance, data?: WallTestData) => {
    return initController(controllerInstance, data);
};