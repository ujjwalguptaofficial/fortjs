import { IHttpResult } from "../interfaces";
import { Logger } from "../models";
import { IGuardTestData, initGuard } from "../helpers";
import { FORT_GLOBAL } from "../constants/fort_global";
import { Component } from "./component";

export abstract class Guard extends Component {
    get body() {
        return this['componentProp_'].body;
    }

    get param() {
        return this['componentProp_'].param;
    }

    get file() {
        return this['componentProp_'].file;
    }

    get workerName() {
        return this['componentProp_'].workerName;
    }

    abstract check(...args): Promise<IHttpResult | void>;

    get logger(): Logger {
        return FORT_GLOBAL.logger;
    }

    get option() {
        return FORT_GLOBAL.componentOption;
    }

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: IGuardTestData) {
        return initGuard(this, data);
    }
}