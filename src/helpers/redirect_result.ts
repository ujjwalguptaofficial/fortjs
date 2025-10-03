import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { customResult } from "../helpers/";

export const redirectResult = (url: string, statusCode: number = HTTP_STATUS_CODE.Redirect) => {
    return customResult((option) => {
        if (option.isResponseFinished()) {
            console.trace("Response is already finished, cannot redirect");
            return;
        }
        option.response.writeHead(statusCode,
            { 'Location': url });
        option.response.end();
    });
};
