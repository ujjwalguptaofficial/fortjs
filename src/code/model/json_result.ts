import { ActionResult, IActionResult } from "./action_result";
import { HTTP_STATUS_CODE } from "../enums";

export class JsonResult implements ActionResult {
    value: object;
    constructor(value: object) {
        this.value = value;
    }

    execute(): Promise<IActionResult> {
        return new Promise((resolve, reject) => {
            resolve({
                contentType: 'text/json',
                responseData: JSON.stringify(this.value),
                statusCode: HTTP_STATUS_CODE.Ok
            })
        })
    }
}