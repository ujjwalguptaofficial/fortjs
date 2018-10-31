import * as http from "http";
import { Global } from "./global";
import { IOption, IRouteDetail } from "./interfaces";
import { Util } from "./util";
import { HTTP_STATUS_CODE } from "./enums";
import { Controller } from "./controller";
export class App {

    constructor(option: IOption) {
        Global.port = this.isNull_(option.port) ? 4000 : option.port;
        Global.viewPath = this.isNull_(option.viewPath) ? 'view' : option.viewPath;
    }

    private isNull_(value) {
        return Util.isNull(value);
    }

    private isNullOrEmpty_(value) {
        return Util.isNullOrEmpty(value);
    }

    private isUndefined_(value) {
        return Util.isUnDefined(value);
    }

    start() {
        const onHttpRequest = (request: http.IncomingMessage, response: http.ServerResponse) => {
            console.log(request.url);
            const routeDetail = this.getRouteDetail_(request.url);
            console.log(routeDetail);
            const onNotFound = () => {
                response.writeHead(HTTP_STATUS_CODE.Not_Found, { 'Content-Type': 'text/plain' });
                response.end(`The requested resource ${request.url} was not found.`);
            }
            // if (routeDetail.controllerName == null) {
            //     response.writeHead(HTTP_STATUS_CODE.ok, { 'Content-Type': 'text/plain' });
            //     response.end(`roo url found.`);
            // }
            // else {
            if (this.isUndefined_(global[routeDetail.controllerName])) {
                onNotFound();
            }
            else {
                var controller: Controller = new global[routeDetail.controllerName]();
                controller.request = request;
                controller.response = response;
                if (this.isUndefined_(controller[routeDetail.actionName])) {
                    onNotFound();
                }
                else {
                    response.writeHead(HTTP_STATUS_CODE.Ok, { 'Content-Type': 'text/plain' });
                    response.end(`controller & action url found.`);
                }
            }
            // }

        }
        http.createServer(onHttpRequest).listen(Global.port);
    }

    private getRouteDetail_(url: string): IRouteDetail {
        const splittedValue = url.split('/');
        splittedValue.splice(0, 1);
        const defaultAction = "default";
        const defaultController = "Default";
        let detail: IRouteDetail = {
            actionName: this.isNullOrEmpty_(splittedValue[1]) ?
                defaultAction : splittedValue[1],
            controllerName: this.isNullOrEmpty_(splittedValue[0]) ?
                defaultController : splittedValue[0]
        }
        // switch (splittedValue.length) {
        //     case 2:
        //         detail = {
        //             actionName: splittedValue[1],
        //             controllerName: splittedValue[0]
        //         }
        //         break;
        //     case 1:
        //         if (splittedValue[0].length !== 0) {
        //             detail.controllerName = splittedValue[0];
        //         }
        //         break;

        // }
        return detail;
    }
}