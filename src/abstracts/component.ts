import { FortGlobal } from "../fort_global";
import { IComponentProp } from "../interfaces";
import { Logger } from "../models";
import { HttpRequest, HttpResponse } from "../types";

export class Component {
    get request() {
        return this.componentProp_.request as HttpRequest;
    }

    get response() {
        return this.componentProp_.response as HttpResponse;
    }

    get query() {
        return this.componentProp_.query;
    }

    get session() {
        return this.componentProp_.session;
    }

    get cookie() {
        return this.componentProp_.cookie;
    }

    get data() {
        return this.componentProp_.data;
    }

    get logger(): Logger {
        return FortGlobal.logger;
    }

    get option() {
        return FortGlobal.componentOption;
    }

    private componentProp_: IComponentProp;

}