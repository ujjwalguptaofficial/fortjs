import { Controller, Worker, Router, textResult, jsonResult, DefaultWorker } from "fortjs";


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



}