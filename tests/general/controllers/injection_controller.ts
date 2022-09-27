import { Controller, viewResult, worker, route, jsonResult, HTTP_METHOD, defaultWorker, assign, singleton, textResult } from "fortjs";

export class InjectionController extends Controller {

    // do not remove constructor and value
    constructor(@assign('Welcome to fort') title){
        super();
    }

    @worker()
    async getMultipleStringInjection(@assign('Welcome to fort') title, @assign('Hello World') helloWorld, @assign('ujjwal') firstName, @assign('Gupta') lastName) {
        return jsonResult({ value: [title, helloWorld, firstName, lastName] });
    }

}