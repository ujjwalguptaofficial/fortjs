import { IHttpResult } from "../interfaces";
import { Logger } from "../models";
import { IShieldTestData, initShield } from "../helpers";
import { FORT_GLOBAL } from "../constants/fort_global";
import { Component } from "./component";

export abstract class Shield extends Component {
    get workerName() {
        return this['componentProp_'].workerInfo.workerName;
    }

    get logger(): Logger {
        return FORT_GLOBAL.logger;
    }

    get option() {
        return FORT_GLOBAL.componentOption;
    }

    abstract protect(...args): Promise<IHttpResult | void>;

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: IShieldTestData) {
        return initShield(this, data);
    }
}

