import { HTTP_STATUS_CODE } from "./enums";
import { Controller } from "./controller";
import * as http from "http";
import { Global } from "./global";
import { IOption, IRouteDetail } from "./interfaces";
import { Util } from "./util";
import { IActionResult, ActionResult } from "./model";
import { error } from "util";

export function start(option: IOption) {
    Global.port = Util.isNull(option.port) ? 4000 : option.port;
    Global.viewPath = Util.isNull(option.viewPath) ? 'view' : option.viewPath;
    http.createServer(onHttpRequest).listen(Global.port);
}

function getPathFromUrl(url) {
    return url.split(/[?#]/)[0];
}

const onHttpRequest = (request: http.IncomingMessage, response: http.ServerResponse) => {
    const url = getPathFromUrl(request.url).toLowerCase();
    console.log(url);
    const routeDetail = getRouteDetail(url);
    //console.log(routeDetail);
    const onNotFound = () => {
        response.writeHead(HTTP_STATUS_CODE.Not_Found, { 'Content-Type': 'text/plain' });
        response.end(`The requested resource ${request.url} was not found.`);
    }

    const onErrorOccured = (error, isException?: boolean) => {
        response.writeHead(HTTP_STATUS_CODE.Internal_Server_Error, { 'Content-Type': 'text/plain' });
        let errorMsg;
        if (isException) {
            errorMsg = `internal server error
            message : ${error.message}
            stacktrace: ${error.stacktrace}
            `;
        }
        else {
            errorMsg = `internal server error /n/n ${JSON.stringify(error)}`;
        }
        response.end(errorMsg);
    }
    try {
        const controller = getController(routeDetail.controllerName);
        if (controller == null) {
            onNotFound();
        }
        else {
            var controllerObj: Controller = new controller();
            // console.log(controllerObj);
            // console.log(controllerObj[routeDetail.actionName]);
            // console.log(routeDetail.actionName);
            if (Util.isUnDefined(controllerObj[routeDetail.actionName])) {
                onNotFound();
            }
            else {
                controllerObj.request = request;
                controllerObj.response = response;
                const result: ActionResult = controllerObj[routeDetail.actionName]();
                result.execute().then((result) => {
                    response.writeHead(result.statusCode, result.contentType);
                    response.end(result.responseData);
                }).catch(onErrorOccured)
                // response.writeHead(HTTP_STATUS_CODE.Ok, { 'Content-Type': 'text/plain' });
                // response.end(`controller & action url found.`);
            }

        }
    }
    catch (ex) {
        onErrorOccured(ex, true);
    }
    // if (Util.isUnDefined(global[routeDetail.controllerName])) {
    //     onNotFound();
    // }
    // else {
    //     var controller: Controller = new global[routeDetail.controllerName]();
    //     controller.request = request;
    //     controller.response = response;
    //     if (Util.isUnDefined(controller[routeDetail.actionName])) {
    //         onNotFound();
    //     }
    //     else {
    //         response.writeHead(HTTP_STATUS_CODE.Ok, { 'Content-Type': 'text/plain' });
    //         response.end(`controller & action url found.`);
    //     }
    // }
}

function getController(controllerName) {
    let controller = null;
    Global.ControllerCollection.every((value) => {
        if (value.path === controllerName) {
            controller = value.controller;
            return false;
        }
        return true;
    })
    return controller;
}

function getRouteDetail(url: string): IRouteDetail {
    const splittedValue = url.split('/');
    splittedValue.splice(0, 1);
    const defaultAction = "default";
    const defaultController = "Default";
    let detail: IRouteDetail = {
        actionName: Util.isNullOrEmpty(splittedValue[1]) ?
            defaultAction : splittedValue[1],
        controllerName: Util.isNullOrEmpty(splittedValue[0]) ?
            defaultController : splittedValue[0]
    }
    return detail;
}