import { Controller, shields, declareAsController, action, HTTP_METHOD, guards, route, jsonResult, htmlResult, textResult } from "fortjs";
import { AuthenticationShield } from "../shields/authentication_shield";
import { JsonGuard } from "../guards/json_guard";

@declareAsController()
@shields([AuthenticationShield])
export class DefaultController extends Controller {
    default() {
        console.log(this.query);
    }

    @action([HTTP_METHOD.Get])
    @route("text/{userId}") // render url - default/text/{userid}
    text() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.params));
        });
    }

    @action()
    @guards([JsonGuard])
    json() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult({ key: 'ass', value: 'ass' }));
        });
    }

    html() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(`<h1>hey there i am html</h1>`));
        });
    }

    @action()
    post() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.body));
        });
    }
}