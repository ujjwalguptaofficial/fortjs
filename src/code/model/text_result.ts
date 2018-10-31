import { ActionResult, IActionResult } from "./action_result";
import { HTTP_STATUS_CODE } from "../enums";

export class TextResult implements ActionResult {
    textValue: string;
    
    constructor(textValue: string) {
        this.textValue = textValue;
    }

    execute(): Promise<IActionResult> {
        return new Promise((resolve, reject) => {
            resolve({
                contentType: 'text/plain',
                responseData: this.textValue,
                statusCode: HTTP_STATUS_CODE.Ok
            });
        })
    }
}