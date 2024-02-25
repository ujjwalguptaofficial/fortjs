import { IHttpRequest, IHttpResponse, IComponentProp } from "../interfaces";
import { Logger } from "../models";

export class Component {
    get request() {
        return this.componentProp_.request as IHttpRequest;
    }

    get response() {
        return this.componentProp_.response as IHttpResponse;
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
        return this.componentProp_.global.logger;
    }

    get option() {
        return this.componentProp_.global.componentOption;
    }

    get cache() {
        return this.componentProp_.cache;
    }

    private componentProp_: IComponentProp;

    middleware(middleware) {
        return {
            execute: () => {
                return new Promise<void>((res, rej) => {
                    middleware(this.request, this.response, (err) => {
                        if (err) {
                            rej(err)
                        }
                        else {
                            res();
                        }
                    });
                });
            }
        }
    }
}