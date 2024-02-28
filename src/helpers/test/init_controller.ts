
import { CookieManager, FileManager, Fort } from "../../models";
import { IControllerTestData } from "../../interfaces";
import { HttpResponseStub } from "./http_response_stub";
import { HttpRequestStub } from "./http_request_stub";
import { Controller } from "../../abstracts";
import { SessionManager } from "../../utils";

export const initController = (controllerInstance: Controller, data?: IControllerTestData) => {
    data = data || {};
    const parsedCookies = data.cookieValue || {};
    const headers = (data.request && data.request.headers) || {};
    const cookie = new CookieManager(parsedCookies);
    const session = new SessionManager(
        cookie,
        Fort
    );
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
        workerInfo: {
            workerName: (data as any).workerName
        } as any,
        global: Fort,
        cache: Fort['cacheManager_']
    };
    return controllerInstance;
};