import { Controller, action, HTTP_METHOD, declareAsController, htmlResult, textResult, renderView, defaultAction, HttpResult, MIME_TYPE, shields, guards, jsonResult, route } from "fortjs";
import { AuthenticationShield } from "../shields/authentication_shield";
import { ModelUserGuard } from "../guards/user/model_user_guard";
import { User } from "../models/user";
import { UserService } from "../services/user_service";
import { HTTP_STATUS_CODE } from "fortjs/dist/ts/enums/http_status_code";

@shields([AuthenticationShield])
@declareAsController()
export class UserController extends Controller {
    service: UserService;

    @defaultAction()
    default() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult("default action"));
        });
    }

    @action([HTTP_METHOD.Get])
    @route("user/{id}")
    async getUser() {
        try {
            const userId = Number(this.params.id);
            const user = this.service.getUser(userId);
            if (user == null) {
                return textResult("invalid id");
            }
            return jsonResult(user);
        }
        catch (ex) {
            return jsonResult(ex);
        }
    }

    @action([HTTP_METHOD.Post])
    @guards([ModelUserGuard])
    async addUser() {
        try {
            const user: User = {
                name: this.body.name,
                gender: this.body.gender,
                address: this.body.address,
                emailId: this.body.emailId
            };
            return jsonResult(this.service.addUser(user), HTTP_STATUS_CODE.Created);
        }
        catch (ex) {
            return jsonResult(ex);
        }
    }

    @action([HTTP_METHOD.Delete])
    async removeUser() {
        try {
            const userId = Number(this.params.id);
            const user = this.service.getUser(userId);
            if (user != null) {
                this.service.addUser(user);
                return textResult("user deleted");
            }
            else {
                return textResult("invalid user");
            }

        }
        catch (ex) {
            return jsonResult(ex);
        }
    }

    @action([HTTP_METHOD.Patch])
    @guards([ModelUserGuard])
    @route("user/{id}")
    async updateUser() {
        try {
            const user: User = {
                id: this.body.id,
                name: this.body.name,
                gender: this.body.gender,
                address: this.body.address,
                emailId: this.body.emailId
            };
            const userUpdated = this.service.updateUser(user);
            if (userUpdated === true) {
                return textResult("user updated");
            }
            else {
                return textResult("invalid user");
            }

        }
        catch (ex) {
            return jsonResult(ex);
        }
    }
}