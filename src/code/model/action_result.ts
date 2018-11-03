import { HTTP_STATUS_CODE } from "../enums";
import { IActionExecuteResult } from "../interfaces/action_execute_result";

export abstract class ActionResult {
    statusCode: HTTP_STATUS_CODE = HTTP_STATUS_CODE.Ok;
    abstract execute(): Promise<IActionExecuteResult>;
}