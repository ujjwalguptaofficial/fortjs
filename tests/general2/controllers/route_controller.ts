import { Controller, Components, worker, Router, textResult, jsonResult, defaultWorker } from "fortjs";

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
}