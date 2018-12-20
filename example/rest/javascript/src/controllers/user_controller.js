import {
  Controller,
  textResult,
  defaultWorker,
  jsonResult,
  worker,
  route,
  HTTP_STATUS_CODE,
  HTTP_METHOD,
  guards
} from 'fortjs';
import {
  UserService
} from '../service/user_service';
import {
  ModelUserGuard
} from '../guards/model_user_guard';
import {
  User
} from '../models/user';

export class UserController extends Controller {

  @defaultWorker()
  async getUsers() {
    const service = new UserService();
    return jsonResult(service.getUsers());
  }

  @worker([HTTP_METHOD.Post])
  @route("/")
  @guards([ModelUserGuard])
  async addUser() {
    const user = {
      name: this.body.name,
      gender: this.body.gender,
      address: this.body.address,
      emailId: this.body.emailId,
      password: this.body.password
    };
    const service = new UserService();
    const newUser = service.addUser(user);
    return jsonResult(newUser, HTTP_STATUS_CODE.Created);
  }

  @worker([HTTP_METHOD.Put])
  @guards([ModelUserGuard])
  @route("/")
  async updateUser() {

    const user = this.data.user;
    const userUpdated = new UserService().updateUser(user);
    if (userUpdated === true) {
      return textResult("user updated");
    } else {
      return textResult("invalid user");
    }

  }

  @worker([HTTP_METHOD.Get])
  @route("/{id}")
  async getUser() {

    const userId = Number(this.params.id);
    const user = new UserService().getUser(userId);
    if (user == null) {
      return textResult("invalid id");
    }
    return jsonResult(user);

  }

  @worker([HTTP_METHOD.Delete])
  @route("/{id}")
  async removeUser() {

    const userId = Number(this.params.id);
    const service = new UserService();
    const user = service.getUser(userId);
    if (user != null) {
      service.removeUser(userId);
      return textResult("user deleted");
    } else {
      return textResult("invalid user");
    }

  }

}