import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { customResult } from "../helpers/";

export const redirectResult = (url: string) => {
    return customResult((option) => {
        option.response.writeHead(HTTP_STATUS_CODE.Redirect,
            { 'Location': url });
        option.response.end();
    });
};
