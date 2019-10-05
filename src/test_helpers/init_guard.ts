
import { initController } from "./init_controller";
import { ControllerTestData } from "../types";

export type GuardTestData = ControllerTestData;

export const initGuard = (guardInstance, data?: GuardTestData) => {
    return initController(guardInstance, data);
};