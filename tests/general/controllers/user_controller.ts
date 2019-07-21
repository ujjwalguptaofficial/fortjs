import { Controller, Worker, Assign, HTTP_METHOD, htmlResult, textResult, Shields, Guards, jsonResult, Route } from "fortjs";
import { AuthenticationShield } from "../shields/authentication_shield";
import { ModelUserGuard } from "../guards/user/model_user_guard";
import { User } from "../models/user";
import { UserService } from "../services/user_service";
import { HTTP_STATUS_CODE } from "fortjs";


@Shields([AuthenticationShield])
export class UserController extends Controller {
    service: UserService;

    constructor(@Assign(UserService) service) {
        super();
        this.service = new service();
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/")
    default(@Assign('user default action') message: string) {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(message));
        });
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/{id}")
    async getUser() {
        try {
            const userId = Number(this.param.id);
            if (userId === 0) {
                let users = this.service.getUsers();
                let userss = users.map(val => {
                    return {
                        user: val
                    }
                });
                return jsonResult({
                    users: [userss]
                });
            }
            else {
                const user = this.service.getUser(userId);
                if (user == null) {
                    return textResult("invalid id");
                }
                return jsonResult(user);
            }

        }
        catch (ex) {
            console.log("exception hit", ex);
            return jsonResult(ex);
        }
    }

    @Worker([HTTP_METHOD.Post])
    @Guards([ModelUserGuard])
    @Route("/")
    async addUser() {
        try {
            const user: User = this.data.user;
            return jsonResult(this.service.addUser(user), HTTP_STATUS_CODE.Created);
        }
        catch (ex) {
            return jsonResult(ex);
        }
    }

    @Worker([HTTP_METHOD.Delete])
    @Route("/{id}")
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

    @Worker([HTTP_METHOD.Put])
    @Guards([ModelUserGuard])
    @Route("/")
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

    @Worker()
    @Route('/counter/shield/')
    async getCounter() {
        return jsonResult(this.data);
    }
}