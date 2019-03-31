import { Controller, HttpCookie, Worker, HTTP_METHOD, textResult, jsonResult, Route, HttpResult, HTTP_STATUS_CODE } from "fortjs";

export class CookieController extends Controller {
    @Worker([HTTP_METHOD.Post])
    @Route('/{cookieName}')
    async setCookie() {
        const cookieName = this.param.cookieName;
        const cookieValue = this.body.cookieValue;
        const cookie = new HttpCookie(cookieName, cookieValue);
        cookie.maxAge = 5000;
        this.cookie.addCookie(cookie);
        return jsonResult(cookie);
    }

    @Worker([HTTP_METHOD.Get])
    @Route('/{cookieName}')
    async  getCookie() {
        const cookieName = this.param.cookieName;
        if (this.cookie.isExist(cookieName)) {
            const cookie = this.cookie.getCookie(cookieName);
            return jsonResult(cookie);
        }
        else {
            return textResult('cookie not found', HTTP_STATUS_CODE.NotFound);
        }

    }


    @Worker([HTTP_METHOD.Put])
    @Route('/{cookieName}')
    async updateCookie() {
        const cookieName = this.param.cookieName;
        const cookieValue = this.body.cookieValue;
        // const savedCookie = this.cookie.getCookie(cookieName);
        // this.cookie.removeCookie(savedCookie);
        const cookie = new HttpCookie(cookieName, cookieValue);
        this.cookie.addCookie(cookie);
        return jsonResult(cookie);
    }

    @Worker([HTTP_METHOD.Delete])
    @Route('/{cookieName}')
    async removeCookie() {
        const cookieName = this.param.cookieName;
        const cookie = this.cookie.getCookie(cookieName);
        this.cookie.removeCookie(cookie);
        return textResult('deleted');
    }
}