import { Controller, Components, worker, Router, textResult, jsonResult, defaultWorker, http } from "fortjs";

export class Routes extends Router {

}
export class RouteController extends Controller {

    // @worker()
    @defaultWorker
    async index() {
        return jsonResult(new Routes().routesAsArray);
    }


    @worker()
    async someMethod() {
        return textResult("some method");
    }

    @worker()
    async sendNotification() {
        // console.log(Components.controllers.)
        return Components.controller.executeMethod('WebPushController', 'sendNotification');
    }

    @http.get("/swagger/before")
    async swaggerBefore() {
        return textResult("swagger before");
    }

    @http.get("/swagger/*")
    async swagger() {
        const path = this.param['*'];
        return textResult("swagger path: " + path);
    }

    @http.get("/swagger/after")
    async swaggerAfter() {
        return textResult("swagger after");
    }
}