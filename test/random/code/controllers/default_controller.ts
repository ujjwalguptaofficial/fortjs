import { Controller, viewResult, section, worker, HTTP_METHOD, guards, route, jsonResult, htmlResult, textResult, defaultWorker, redirectResult } from "fortjs";
import { UserService } from "../services/user_service";

export class DefaultController extends Controller {

    @defaultWorker()
    default() {
        return new Promise((res, rej) => {
            res(viewResult("index", { title: "Welcome to fort" }));
        })
    }

    @worker([HTTP_METHOD.Post])
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

    @worker([HTTP_METHOD.Get])
    @route("/login")
    async getloginForm() {
        const result = textResult("Login form");
        return result;
    }

    @worker([HTTP_METHOD.Get])
    text() {
        return new Promise((resolve, reject) => {
            resolve(textResult("text"));
        });
    }

    @worker()
    json() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult({ key: 'hello', value: 'world' }));
        });
    }

    @worker()
    html() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(`<h1>hey there i am html</h1>`));
        });
    }

    @worker([HTTP_METHOD.Post])
    post() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.body));
        });
    }


    @worker()
    async redirect() {
        return await redirectResult("html");
    }

    @worker()
    async getIp() {
        return this.data.ip;
    }
}