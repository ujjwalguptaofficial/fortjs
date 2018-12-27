import { Controller, worker, HTTP_METHOD, htmlResult, textResult, shields, guards, jsonResult, route } from "fortjs";
import { AuthenticationShield } from "../shields/authentication_shield";
import { ModelUserGuard } from "../guards/user/model_user_guard";
import { User } from "../models/user";
import { UserService } from "../services/user_service";
import { HTTP_STATUS_CODE } from "fortjs";

@shields([AuthenticationShield])
export class UserController extends Controller {
    service: UserService;

    constructor() {
        super();
        this.service = new UserService();
    }

    @worker([HTTP_METHOD.Get])
    @route("/")
    default() {
        return new Promise((resolve, reject) => {
            resolve(htmlResult("user default action"));
        });
    }

    @worker([HTTP_METHOD.Get])
    @route("/{id}")
    async getUser() {
        try {
            const userId = Number(this.param.id);
            const user = this.service.getUser(userId);
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

    @worker([HTTP_METHOD.Post])
    @guards([ModelUserGuard])
    @route("/")
    async addUser() {
        try {
            const user: User = this.data.user;
            return jsonResult(this.service.addUser(user), HTTP_STATUS_CODE.Created);
        }
        catch (ex) {
            return jsonResult(ex);
        }
    }

    @worker([HTTP_METHOD.Delete])
    @route("/{id}")
    async removeUser() {
        try {
            const userId = Number(this.param.id);
            const user = this.service.getUser(userId);
            if (user != null) {
                this.service.removeUser(userId);
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

    @worker([HTTP_METHOD.Put])
    @guards([ModelUserGuard])
    @route("/")
    async updateUser() {
        try {
            const user: User = this.data.user;
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

    @worker()
    @route('/counter/shield')
    async getCounter() {
        return jsonResult(this.data);
    }
}