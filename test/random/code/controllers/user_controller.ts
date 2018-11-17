import { Controller, action, HTTP_METHOD, declareAsController, htmlResult, textResult, defaultAction, shields, guards, jsonResult, route } from "fortjs";
import { AuthenticationShield } from "../shields/authentication_shield";
import { ModelUserGuard } from "../guards/user/model_user_guard";
import { User } from "../models/user";
import { UserService } from "../services/user_service";
import { HTTP_STATUS_CODE } from "fortjs";

@shields([AuthenticationShield])
@declareAsController()
export class UserController extends Controller {
    service: UserService;

    constructor() {
        super();
        this.service = new UserService();
    }

    @defaultAction()
    default() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult("user default action"));
        });
    }

    @action([HTTP_METHOD.Get])
    @route("{id}")
    async getUser() {
        console.log("getUser hit");
        try {
            const userId = Number(this.params.id);
            const user = this.service.getUser(userId);
            console.log("user", user);
            if (user == null) {
                return textResult("invalid id");
            }
            return jsonResult(user);
        }
        catch (ex) {
            console.log("exception hit", ex);
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