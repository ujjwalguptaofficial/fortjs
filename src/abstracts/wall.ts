import { HttpResult, HttpFormatResult } from "../types";
import { WallTestData, initWall } from "../test_helpers";
import { Component } from "./component";

export abstract class Wall extends Component {

    abstract onIncoming(...args): Promise<HttpResult | void>;

    // eslint-disable-next-line
    onOutgoing(finalResult: HttpResult | HttpFormatResult, ...args) {
    }

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: WallTestData) {
        return initWall(this, data);
    }

}