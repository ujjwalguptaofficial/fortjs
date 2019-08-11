import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards, Singleton } from 'fortjs';
import { UserService } from '../services/user_service';
import { ModelUserGuard } from '../guards/model_user_guard';
import { User } from '../models/user';

export class UserController extends Controller {

    service: UserService;
    constructor(@Singleton(UserService) service: UserService) {
        super();
        this.service = service;
    }

    @DefaultWorker()
    async getUsers() {
        return jsonResult(this.service.getUsers());
    }

    @Worker([HTTP_METHOD.Post])
    @Route("/")
    @Guards([ModelUserGuard])
    async addUser() {
        const user = this.data.user;
        const newUser = this.service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Worker([HTTP_METHOD.Put])
    @Guards([ModelUserGuard])
    @Route("/")
    async updateUser() {
        const user: User = this.data.user;
        const userUpdated = this.service.updateUser(user);
        if (userUpdated === true) {
            return textResult("user updated");
        }
        else {
            return textResult("invalid user");
        }

    }

    @Worker([HTTP_METHOD.Get])
    @Route("/{id}")
    async getUser() {

        const userId = Number(this.param.id);
        const user = new UserService().getUser(userId);
        if (user == null) {
            return textResult("invalid user id", HTTP_STATUS_CODE.NotFound);
        }
        return jsonResult(user);

    }

    @Worker([HTTP_METHOD.Delete])
    @Route("/{id}")
    async removeUser() {

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

}