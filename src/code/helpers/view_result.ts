import { IActionResult } from "../interfaces/action_result";
import { MIME_TYPE } from "../enums";
import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { Global } from "../global";
import { promise } from "./promise";

export function viewResult(vieWname: string, model: any) {
    return promise<IActionResult>((resolve, reject) => {
        Global.viewEngine.render({
            view: vieWname,
            model: model
        }).then(result => {
            resolve({
                contentType: MIME_TYPE.Html,
                responseData: result,
                statusCode: HTTP_STATUS_CODE.Ok
            } as IActionResult);
        }).catch(reject);
    });
}