import { Controller, worker, assign, HTTP_METHOD, htmlResult, textResult, body, param, shields, guards, jsonResult, route, singleton } from "fortjs";
import { AuthenticationShield } from "../shields/authentication_shield";
import { ModelUserGuard } from "../guards/user/model_user_guard";
import { User } from "../models/user";
import { UserService } from "../services/user_service";
import { HTTP_STATUS_CODE } from "fortjs";

class ParamDto {
    id: string;
}

@shields(AuthenticationShield)
export class UserController extends Controller {
    service: UserService;

    constructor(@singleton(UserService) service: UserService) {
        super();
        this.service = service;
    }

    @worker(HTTP_METHOD.Get)
    @route("/")
    default(@assign('user default action') message: string) {
        return new Promise((resolve, reject) => {
            resolve(htmlResult(message));
        });
    }

    @worker(HTTP_METHOD.Get)
    @route("/{id}")
    async getUser(@param() paramDto: ParamDto) {
        console.log("paramDto", paramDto);
        if (this.query.throwException) {
            throw "Exception thrown";
        }
        try {
            const userId = Number(paramDto.id);
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
                if (this.option.isNull(user)) {
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

    @worker(HTTP_METHOD.Post)
    @guards(ModelUserGuard)
    @route("/")
    async addUser(@body() user: User) {
        if (this.query.throwException) {
            throw "Exception thrown";
        }
        // const user: User = this.data.user;
        return jsonResult(this.service.addUser(user), HTTP_STATUS_CODE.Created);
    }

    @worker(HTTP_METHOD.Delete)
    @route("/{id}")
    async removeUser(@param() paramDto: ParamDto) {
        try {
            const userId = Number(paramDto.id);
            // const userId = Number(this.param.id);
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

    @worker(HTTP_METHOD.Put)
    @guards(ModelUserGuard)
    @route("/")
    async updateUser(@body() user: User) {
        try {
            // const user: User = this.data.user;
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
    @route('/counter/shield/')
    async getCounter() {
        return jsonResult(this.data);
    }

    @worker()
    @route('/allow/me')
    async allowMe() {
        return textResult("i am allowed");
    }
}