import { UserService } from "@/services/user_service";
import { Controller, getSingleton, worker, route, jsonResult, HTTP_METHOD, defaultWorker, assign, singleton, textResult } from "fortjs";

class Temp {
    name = 'temp';
}

export class InjectionController extends Controller {

    // do not remove constructor and value
    constructor(@assign('Welcome to fort') title) {
        super();
    }

    @worker()
    async getMultipleStringInjection(@assign('Welcome to fort') title, @assign('Hello World') helloWorld, @assign('ujjwal') firstName, @assign('Gupta') lastName) {
        return jsonResult({ value: [title, helloWorld, firstName, lastName] });
    }

    @worker()
    async manualSingletonCreated() {
        const value = getSingleton(UserService);
        return jsonResult({ result: value.getUsers().map(item => item.name) });
    }

    @worker()
    async manualSingletonNotCreated() {
        const value = getSingleton(Temp);
        return jsonResult({ result: value.name });
    }


}
