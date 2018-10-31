import { IActionResult, ActionResult } from "./action_result";
import { HTTP_STATUS_CODE } from "../enums";

export class HtmlResult implements ActionResult {

    html: string;
    constructor(html: string) {
        this.html = html;
    }

    execute(): Promise<IActionResult> {
        return new Promise((resolve, reject) => {
            const result: IActionResult = {
                contentType: 'text/html',
                responseData: this.html,
                statusCode: HTTP_STATUS_CODE.Ok,
            };
            resolve(result);
        });
    }
}