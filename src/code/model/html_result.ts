import { HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { ActionResult } from "./action_result";
import { IActionExecuteResult } from "../interfaces/action_execute_result";

export class HtmlResult extends ActionResult {

    html: string;
    constructor(html: string) {
        super();
        this.html = html;
    }

    execute(): Promise<IActionExecuteResult> {
        return new Promise((resolve, reject) => {
            const result: IActionExecuteResult = {
                contentType: MIME_TYPE.Html,
                responseData: this.html,
                statusCode: HTTP_STATUS_CODE.Ok,
            };
            resolve(result);
        });
    }
}