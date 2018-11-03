import { Controller, action, HTTP_METHOD, HtmlResult, TextResult, declareController } from "infinity";

@declareController()
export class UserController extends Controller {
    @action([HTTP_METHOD.POST])
    login() {
        const userId = this.body.userId;
        const pwd = this.body.password;
        if (userId != null && pwd != null) {
            this.session.set('userId', userId);
            return new HtmlResult("authenticated");
        }
        else {
            const result = new TextResult("Invalid credential");
            return result;
        }
    }

    @action()
    authenticate() {
        this.session.set('userId', 123);
        return new HtmlResult("authenticated");
    }
}