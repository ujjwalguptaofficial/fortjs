import { Controller, viewResult, declareAsController, action, HTTP_METHOD, guards, route, jsonResult, htmlResult, textResult, defaultAction, redirectResult } from "fortjs";
import { UserService } from "../services/user_service";


@declareAsController()
export class DefaultController extends Controller {

    @defaultAction()
    default() {
        return new Promise((res, rej) => {
            res(viewResult("index", { title: "Welcome to fort" }));
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
    @route("login")
    async getloginForm() {
        const result = textResult("Login form");
        return result;
    }

    @action([HTTP_METHOD.Get])
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
    async redirect() {
        return await redirectResult("html");
    }

    @action()
    async getIp() {
        return this.data.ip;
    }
}