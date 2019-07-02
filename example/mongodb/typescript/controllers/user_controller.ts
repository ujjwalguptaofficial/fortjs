import { Controller, textResult, DefaultWorker, jsonResult, Worker, Route, HTTP_STATUS_CODE, HTTP_METHOD, Guards } from 'fortjs';
import { UserService } from '../services/user_service';
import { UserValidationGuard } from '../guards/user_validation_guard';
import { IUser } from '../interfaces/user';

export class UserController extends Controller {

    @DefaultWorker()
    async getUsers() {
        const service = new UserService();
        return jsonResult(await service.getAllUsers());
    }

    @Worker([HTTP_METHOD.Post])
    @Route("/")
    @Guards([UserValidationGuard])
    async addUser() {
        const user = this.data.user;
        const service = new UserService();
        const newUser = await service.addUser(user);
        return jsonResult(newUser, HTTP_STATUS_CODE.Created);
    }

    @Worker([HTTP_METHOD.Put])
    @Guards([UserValidationGuard])
    @Route("/")
    async updateUser() {
        const user: IUser = this.data.user;
        const result = await new UserService().updateUser(user);
        if (result.n > 0) {
            return textResult("user updated");
        }
        else {
            return textResult("user not updated");
        }
    }

    @Worker([HTTP_METHOD.Get])
    @Route("/{id}")
    async getUser() {
        const userId = this.param.id;
        const user = await new UserService().getUserById(userId);
        if (user == null) {
            return textResult("invalid id");
        }
        return jsonResult(user);

    }

    @Worker([HTTP_METHOD.Delete])
    @Route("/{id}")
    async removeUser() {
        const userId = this.param.id;
        const service = new UserService();
        const user = await service.removeUserById(userId);
        console.log(user);
        if (user.n > 0) {
            return textResult("user deleted");
        }
        else {
            return textResult("invalid user");
        }
    }
}