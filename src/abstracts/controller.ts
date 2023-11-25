import { IControllerTestData } from "../interfaces";
import { initController } from "../test_helpers";
import { Component } from "./component";

export abstract class Controller extends Component {

    get body() {
        return this['componentProp_'].body;
    }

    get param() {
        return this['componentProp_'].param;
    }

    get file() {
        return this['componentProp_'].file;
    }

    // eslint-disable-next-line
    constructor(...args) {
        super();
    }

    initialize(data?: IControllerTestData) {
        initController(this, data);
    }

}