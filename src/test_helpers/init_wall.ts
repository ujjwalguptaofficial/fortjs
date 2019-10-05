
import { initController } from "./init_controller";
import { ControllerTestData } from "../types";

export type WallTestData = ControllerTestData;

export const initWall = (wallInstance, data?: WallTestData) => {
    return initController(wallInstance, data);
};