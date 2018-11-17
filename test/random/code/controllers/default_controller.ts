import { Controller, shields, declareAsController, action, HTTP_METHOD, guards, route, jsonResult, htmlResult, textResult, defaultAction } from "fortjs";
import { UserService } from "../services/user_service";


@declareAsController()
export class DefaultController extends Controller {

    @defaultAction()
    default() {
        return new Promise((res, rej) => {
            res(textResult("default page"));
        })
    }

    @action([HTTP_METHOD.Post])
    async login() {
        const userId = this.body.userId;
        const pwd = this.body.password;
        if (userId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUser(userId);
            if (user != null && user.password === pwd) {
                this.session.set('userId', userId);
                return textResult(`Authenticated`);
            }
            else {
                const result = textResult("Invalid credential");
                return result;
            }
        }
        else {
            const result = textResult("Invalid credential");
            return result;
        }
    }

    @action([HTTP_METHOD.Get])
    // @route("text/{userId}") // render url - default/text/{userid}
    text() {
        return new Promise((resolve, reject) => {
            resolve(textResult("text"));
        });
    }

    @action()
    json() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult({ key: 'hello', value: 'world' }));
        });
    }

    @action()
    html() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(`<h1>hey there i am html</h1>`));
        });
    }

    @action([HTTP_METHOD.Post])
    post() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.body));
        });
    }

    @action()
    async getIp() {
        return this.data.ip;
    }
}