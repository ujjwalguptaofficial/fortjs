import { HttpResult, HttpFormatResult } from "../types";
import { WallTestData, initWall } from "../test_helpers";
import { Component } from "./component";

export abstract class Wall extends Component {

    abstract onIncoming(...args): Promise<HttpResult | void>;

    onOutgoing(finalResult: HttpResult | HttpFormatResult, ...args) {
        return null;
    }

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: WallTestData) {
        return initWall(this, data);
    }

}