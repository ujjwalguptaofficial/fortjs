import { HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { ActionResult } from "./action_result";
import { IActionExecuteResult } from "../interfaces/action_execute_result";


export class TextResult extends ActionResult {
    textValue: string;
    
    constructor(textValue: string) {
        super();
        this.textValue = textValue;
    }

    execute(): Promise<IActionExecuteResult> {
        return new Promise((resolve, reject) => {
            resolve({
                contentType: MIME_TYPE.Text,
                responseData: this.textValue,
                statusCode: HTTP_STATUS_CODE.Ok
            });
        })
    }
}