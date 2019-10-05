 
import { initController } from "./init_controller";
import { ControllerTestData } from "../types";

export type GuardTestData = ControllerTestData;

export const initGuard = (controllerInstance, data?: GuardTestData) => {
    return initController(controllerInstance, data);
};