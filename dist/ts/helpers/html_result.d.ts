import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";
export declare const htmlResult: (html: string, statusCode?: HTTP_STATUS_CODE) => HttpResult;
