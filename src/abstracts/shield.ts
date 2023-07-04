import { HttpResult } from "../types";
import { Logger } from "../models";
import { ShieldTestData, initShield } from "../test_helpers";
import { FortGlobal } from "../constants/fort_global";
import { Component } from "./component";

export abstract class Shield extends Component {
    get workerName() {
        return this['componentProp_'].workerName;
    }

    get logger(): Logger {
        return FortGlobal.logger;
    }

    get option() {
        return FortGlobal.componentOption;
    }

    abstract protect(...args): Promise<HttpResult | void>;

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: ShieldTestData) {
        return initShield(this, data);
    }
}

