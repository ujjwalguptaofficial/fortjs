
import { CookieManager, FileManager } from "../models";
import { FortGlobal } from "../fort_global";
import { ControllerTestData } from "../types";
import { HttpResponseStub } from "./http_response_stub";
import { HttpRequestStub } from "./http_request_stub";
import { Controller } from "../abstracts";



export const initController = (controllerInstance: Controller, data?: ControllerTestData) => {
    data = data || {};
    const parsedCookies = data.cookieValue || {};
    const headers = (data.request && data.request.headers) || {};
    controllerInstance.request = new HttpRequestStub(headers);
    controllerInstance.response = new HttpResponseStub(headers);
    controllerInstance.query = data.query || {};
    controllerInstance.body = data.body || {};
    controllerInstance.cookie = new CookieManager(parsedCookies);
    const session = new FortGlobal.sessionProvider();
    session.cookie = controllerInstance.cookie;
    session.sessionId = parsedCookies[FortGlobal.appSessionIdentifier];
    controllerInstance.session = session;
    controllerInstance.param = data.param || {};
    controllerInstance.data = data.data || {};
    controllerInstance.file = new FileManager(data.file || {});
    return controllerInstance;
};