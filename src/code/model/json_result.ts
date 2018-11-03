import { HTTP_STATUS_CODE } from "../enums";
import { ActionResult } from "./action_result";
import { IActionExecuteResult } from "../interfaces/action_execute_result";


export class JsonResult extends ActionResult {
    value: object;
    constructor(value: object) {
        super();
        this.value = value;
    }

    execute(): Promise<IActionExecuteResult> {
        return new Promise((resolve, reject) => {
            resolve({
                contentType: 'text/json',
                responseData: JSON.stringify(this.value),
                statusCode: HTTP_STATUS_CODE.Ok
            })
        })
    }
}