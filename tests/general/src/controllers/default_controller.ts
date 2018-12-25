import { Controller, viewResult, worker, HTTP_METHOD, route, jsonResult, htmlResult, textResult, defaultWorker, redirectResult } from "fortjs";
import { UserService } from "../services/user_service";

export class DefaultController extends Controller {

    @defaultWorker()
    default() {
        // just for making sure these fields has been initiated
        const params = this.params;
        const query = this.query;
        const data = this.data;
        return new Promise((res, rej) => {
            res(viewResult("index", { title: "Welcome to fort" }));
        })
    }

    @worker([HTTP_METHOD.Post])
    async login() {
        const emailId = this.body.emailId;
        const pwd = this.body.password;
        if (emailId != null && pwd != null) {
            const userService = new UserService();
            const user = userService.getUserByEmail(emailId);
            if (user != null && user.password === pwd) {
                this.session.set('userId', user.id);
                this.session.set('emailId', emailId);
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
        const result = viewResult("login_form");
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
    async getData() {
        return jsonResult(this.data);
    }
}