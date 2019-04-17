import { Controller, viewResult, Worker, HTTP_METHOD, Route, jsonResult, htmlResult, textResult, DefaultWorker, redirectResult } from "fortjs";
import { UserService } from "../services/user_service";

export class DefaultController extends Controller {

    @DefaultWorker()
    default() {
        // just for making sure these fields has been initiated
        const params = this.param;
        const query = this.query;
        const data = this.data;
        return new Promise((res, rej) => {
            res(viewResult("default/index.html", { title: "Welcome to fort" }));
        });
    }

    @Worker([HTTP_METHOD.Post])
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

    @Worker([HTTP_METHOD.Get])
    @Route("/login")
    async getloginForm() {
        const result = viewResult("default/login_form.html");
        return result;
    }

    @Worker([HTTP_METHOD.Get])
    text() {
        return new Promise((resolve, reject) => {
            resolve(textResult("text"));
        });
    }

    @Worker()
    json() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult({ key: 'hello', value: 'world' }));
        });
    }

    @Worker()
    html() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(`<h1>hey there i am html</h1>`));
        });
    }

    @Worker([HTTP_METHOD.Post])
    post() {
        return new Promise((resolve, reject) => {
            resolve(jsonResult(this.body));
        });
    }


    @Worker()
    async redirect() {
        return await redirectResult("html");
    }

    @Worker()
    async getData() {
        return jsonResult(this.data);
    }

    @Worker()
    async logOut() {
        await this.session.clear();
        return textResult("Logged out");
    }

    @Worker()
    async getEnv() {
        return jsonResult(process.env);
    }
}