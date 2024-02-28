import { IHttpResult } from "../interfaces";
import { IGuardTestData, initGuard } from "../helpers";
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
        return this['componentProp_'].workerInfo.workerName;
    }

    abstract check(...args): Promise<IHttpResult | void>;

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: IGuardTestData) {
        return initGuard(this, data);
    }
}