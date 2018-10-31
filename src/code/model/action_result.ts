import { HTTP_STATUS_CODE } from "../enums";

export interface IActionResult {
    statusCode: HTTP_STATUS_CODE;
    responseData: any;
    contentType: string;
}

export abstract class ActionResult {
    abstract execute(): Promise<IActionResult>;
}