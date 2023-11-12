import { IHttpResult } from "../interfaces";
import { WallTestData, initWall } from "../test_helpers";
import { Component } from "./component";

export abstract class Wall extends Component {

    abstract onIncoming(...args): Promise<IHttpResult | void>;

    // eslint-disable-next-line
    onOutgoing(finalResult: IHttpResult, ...args) {
    }

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: WallTestData) {
        return initWall(this, data);
    }

}