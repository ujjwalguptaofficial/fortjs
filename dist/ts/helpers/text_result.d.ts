import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";
export declare function textResult(text: string, statusCode?: HTTP_STATUS_CODE): HttpResult;
