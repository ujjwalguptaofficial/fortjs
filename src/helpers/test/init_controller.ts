
import { CookieManager, FileManager } from "../../models";
import { FORT_GLOBAL } from "../../constants/fort_global";
import { IControllerTestData } from "../../interfaces";
import { HttpResponseStub } from "./http_response_stub";
import { HttpRequestStub } from "./http_request_stub";
import { Controller } from "../../abstracts";
import { SessionManager, CacheManager } from "../../utils";



export const initController = (controllerInstance: Controller, data?: IControllerTestData) => {
    data = data || {};
    const parsedCookies = data.cookieValue || {};
    const headers = (data.request && data.request.headers) || {};
    const cookie = new CookieManager(parsedCookies);
    const session = new SessionManager(
        cookie,
        FORT_GLOBAL.sessionStore
    );
    const cacheManager = new CacheManager(
        new FORT_GLOBAL.cacheStore()
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
        workerName: (data as any).workerName,
        global: FORT_GLOBAL,
        cache: cacheManager
    };
    return controllerInstance;
};