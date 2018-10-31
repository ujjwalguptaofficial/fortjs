import { IActionResult, ActionResult } from "./action_result";
import { HTTP_STATUS_CODE } from "../enums";
import { Global } from "../global";
import { IViewOption } from "../interfaces/view_option";

export class ViewResult implements ActionResult {

    option: IViewOption;
    constructor(option: IViewOption) {
        this.option = option;
    }

    execute(): Promise<IActionResult> {
        return new Promise((resolve, reject) => {
            Global.viewEngine.render(this.option).then(viewData => {
                const result: IActionResult = {
                    contentType: 'text/html',
                    responseData: viewData,
                    statusCode: HTTP_STATUS_CODE.Ok,
                };
                resolve(result);
            })
        });
    }
}