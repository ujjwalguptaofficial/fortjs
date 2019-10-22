import { Controller, DefaultWorker, textResult, viewResult, Worker, Assign, Singleton, HTTP_STATUS_CODE, HTTP_METHOD, Route, Shields } from "fortjs";
import { UserService } from "../services/user_service";

export class DefaultController extends Controller {

    @DefaultWorker()
    async index(@Assign('FortJs') title: string) {

        const data = {
            title: title
        };
        const result = await viewResult('default/index.html', data);
        return result;

    }

    @Worker([HTTP_METHOD.Get])
    @Route("/login")
    async getLoginForm() {
        return viewResult("/default/login.html");
    }

    @Worker([HTTP_METHOD.Post])
    @Route("/login")
    async doLogin(@Singleton(UserService) service) {
        const email = this.body.email;
        const password = this.body.password;
        const userFromService = service.getUserByEmailAndPassword(email, password);
        if (userFromService != null) {
            this.session.set('email', email);
            return textResult(`Welcome ${userFromService.name}`);
        }
        else {
            return textResult("invalid Login Data", HTTP_STATUS_CODE.BadRequest);
        }
    }
}