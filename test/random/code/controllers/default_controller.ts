import { Controller, shields, declareAsController, action, HTTP_METHOD, guards, route, jsonResult, htmlResult, textResult, defaultAction } from "fortjs";


@declareAsController()
export class DefaultController extends Controller {

    @defaultAction()
    default() {
        return new Promise((res, rej) => {
            res(textResult("default page"));
        })
    }

    @action([HTTP_METHOD.Post])
    login() {
        const userId = this.body.userId;
        const pwd = this.body.password;
        if (userId != null && pwd != null) {
            this.session.set('userId', userId);
            return new Promise((resolve, reject) => {
                resolve(textResult(`Authenticated`));
            });
        }
        else {
            const result = textResult("Invalid credential");
            return new Promise((resolve, reject) => {
                resolve(result);
            });
        }
    }

    @action([HTTP_METHOD.Get])
    @route("text/{userId}") // render url - default/text/{userid}
    text() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.params));
        });
    }

    @action()
    json() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult({ key: 'ass', value: 'ass' }));
        });
    }

    @action()
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