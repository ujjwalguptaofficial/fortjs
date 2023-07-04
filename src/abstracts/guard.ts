import { HttpResult } from "../types";
import { Logger } from "../models";
import { GuardTestData, initGuard } from "../test_helpers";
import { FortGlobal } from "../constants/fort_global";
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

    abstract check(...args): Promise<HttpResult | void>;

    get logger(): Logger {
        return FortGlobal.logger;
    }

    get option() {
        return FortGlobal.componentOption;
    }

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: GuardTestData) {
        return initGuard(this, data);
    }
}