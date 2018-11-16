import { Controller, action, HTTP_METHOD, declareAsController, htmlResult, textResult, renderView, defaultAction, HttpResult, MIME_TYPE } from "fortjs";
import * as fs from "fs";

@declareAsController()
export class UserController extends Controller {

    @defaultAction()
    default() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult("default action"));
        });
    }

    @action([HTTP_METHOD.POST])
    login() {
        const userId = this.body.userId;
        const pwd = this.body.password;
        if (userId != null && pwd != null) {
            this.session.set('userId', userId);
            return new Promise((resolve, reject) => {
                resolve(htmlResult(`<h1>Authenticated</h1>`));
            });
        }
        else {
            const result = textResult("Invalid credential");
            return new Promise((resolve, reject) => {
                resolve(result);
            });
        }
    }

    @action()
    authenticate() {
        this.session.set('userId', 123);
        return new Promise((resolve, reject) => {
            resolve(htmlResult("authenticated"));
        });
    }

    @action()
    file() {
        const filePath = this.query.file;
        console.log(filePath);
        fs.exists(filePath, (isExist) => {
            console.log(isExist);
        });
        return new Promise((resolve, reject) => {
            resolve(textResult("checking file"));
        });
    }

    @action()
    view() {
        return new Promise((resolve, reject) => {
            renderView('index', { title: 'fort' }).then(viewData => {
                resolve(htmlResult(viewData));
            });
        });
    }

    formatter() {
        return new Promise((resolve, reject) => {
            resolve({
                contentType: MIME_TYPE.Text,
                responseData: null,
                statusCode: 400,
                responseFormat: {
                    [MIME_TYPE.Text]: function () {
                        return 'Text';
                    },
                    [MIME_TYPE.Json]: function () {
                        return {
                            result: 'Text'
                        }
                    }
                }
            } as HttpResult)
        });
    }
}