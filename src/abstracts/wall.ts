import { IHttpResult } from "../interfaces";
import { IWallTestData, initWall } from "../test_helpers";
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

    initialize(data?: IWallTestData) {
        return initWall(this, data);
    }

}