import { IHttpResult } from "../interfaces";
import { IShieldTestData, initShield } from "../helpers";
import { Component } from "./component";

export abstract class Shield extends Component {
    get workerName() {
        return this['componentProp_'].workerInfo.workerName;
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

