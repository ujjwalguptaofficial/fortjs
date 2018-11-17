import { HTTP_STATUS_CODE } from "../enums/http_status_code";
import { HttpResult } from "../types/http_result";
export declare function jsonResult(value: any, statusCode?: HTTP_STATUS_CODE): HttpResult;
