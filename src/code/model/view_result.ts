import { HTTP_STATUS_CODE, MIME_TYPE } from "../enums";
import { ActionResult } from "./action_result";
import { IActionExecuteResult } from "../interfaces/action_execute_result";
import { IViewOption } from "../interfaces/view_option";
import { Global } from "../global";


export class ViewResult extends ActionResult {

    option: IViewOption;
    constructor(option: IViewOption) {
        super();
        this.option = option;
    }

    execute(): Promise<IActionExecuteResult> {
        return new Promise((resolve, reject) => {
            Global.viewEngine.render(this.option).then(viewData => {
                const result: IActionExecuteResult = {
                    contentType: MIME_TYPE.Html,
                    responseData: viewData,
                    statusCode: HTTP_STATUS_CODE.Ok,
                };
                resolve(result);
            })
        });
    }
}