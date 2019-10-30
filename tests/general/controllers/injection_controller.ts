import { Controller, viewResult, Worker, Route, jsonResult, HTTP_METHOD, DefaultWorker, Assign, Singleton, textResult } from "fortjs";

export class InjectionController extends Controller {

    @Worker()
    async getMultipleStringInjection(@Assign('Welcome to fort') title, @Assign('Hello World') helloWorld, @Assign('ujjwal') firstName, @Assign('Gupta') lastName) {
        return jsonResult({ value: [title, helloWorld, firstName, lastName] });
    }

}