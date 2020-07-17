import { Controller, Components, Worker, Router, textResult, jsonResult, DefaultWorker } from "fortjs";

export class Routes extends Router {

}
export class RouteController extends Controller {

    // @Worker()
    @DefaultWorker()
    async index() {
        return jsonResult(new Routes().routesAsArray);
    }


    @Worker()
    async someMethod() {
        return textResult("some method");
    }

    @Worker()
    async sendNotification() {
        // console.log(Components.controllers.)
        return Components.controllers.executeMethod('WebPushController', 'sendNotification');
    }
}