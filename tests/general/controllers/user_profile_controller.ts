import { Controller, worker, controllerOf, HTTP_METHOD, htmlResult, textResult, shields, guards, jsonResult, route, singleton } from "fortjs";
import { AuthenticationShield } from "../shields/authentication_shield"
import { UserService } from "../services/user_service";

@shields(AuthenticationShield)
@controllerOf('UserController')
export class UserProfileController extends Controller {

    service: UserService;

    constructor(@singleton(UserService) service: UserService) {
        super();
        this.service = service;
    }

    @worker(HTTP_METHOD.Get)
    @route("/")
    async getProfile() {
        const userId = await this.session.get("userId");
        const user = this.service.getUser(userId);
        if (this.option.isNull(user)) {
            return textResult("invalid id");
        }
        return jsonResult(user);
    }
}