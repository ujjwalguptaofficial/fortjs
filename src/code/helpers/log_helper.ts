import { IError } from "../interfaces/error";
import { ERROR_TYPE } from "../enums";


export class LogHelper implements IError {
    type: ERROR_TYPE;
    message: string;
    private info_: any;

    constructor(type: ERROR_TYPE, info?: any) {
        this.type = type;
        this.info_ = info;
        this.message = this.getMsg_();
    }

    throw() {
        const errMsg = this.get();
        throw JSON.stringify(errMsg);

    }

    static log(msg) {
        console.log(msg);
    }

    logError() {
        console.error(this.get());
    }

    logWarning() {
        console.warn(this.get());
    }

    get() {
        return {
            message: this.message,
            type: this.type
        } as IError;
    }

    private getMsg_() {
        let errMsg: string;
        switch (this.type) {
            case ERROR_TYPE.InvalidControllerName:
                errMsg = `Invalid controller name - '${this.info_}'. Controller name must contain 'controller'.`
                break;
            case ERROR_TYPE.InvalidContentType:
                errMsg = `Content type - '${this.info_}' is not valid. Please create an issue if you think this is valid type.`
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    }
}