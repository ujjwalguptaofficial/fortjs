
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
    const session = new FortGlobal.sessionProvider();
    const cookie = new CookieManager(parsedCookies);
    session.cookie = cookie;
    session.sessionId = parsedCookies[FortGlobal.appSessionIdentifier];
    controllerInstance['componentProp_'] = {
        request: new HttpRequestStub(headers) as any,
        response: new HttpResponseStub(headers) as any,
        query: data.query || {},
        body: data.body || {},
        cookie: cookie,
        session: session,
        param: data.param || {},
        data: data.data || {},
        file: new FileManager(data.file || {}),
        workerName: (data as any).workerName
    };
    return controllerInstance;
};