import { HTTP_STATUS_CODE } from "../enums";
import { IActionExecuteResult } from "../interfaces/action_execute_result";

export abstract class ActionResult {
    abstract execute(): Promise<IActionExecuteResult>;
}