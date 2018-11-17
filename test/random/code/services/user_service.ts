import { BaseService } from "./base_service";
import { User } from "../models/user";

export class UserService extends BaseService {
    addUser(user: User) {
        const lastUser = this.users[this.users.length - 1];
        user.id = lastUser == null ? 1 : lastUser.id + 1;
        this.users.push(user);
        return user;
    }

    updateUser(user: User) {
        const existingUser = this.users.find(qry => qry.id === user.id);
        if (existingUser != null) {
            existingUser.name = user.name;
            existingUser.address = user.address;
            existingUser.gender = user.gender;
            existingUser.emailId = user.emailId;
            return true;
        }
        return false;
    }

    getUser(id: number) {
        return this.users.find(user => user.id === id);
    }

    removeUser(id: number) {
        const index = this.users.findIndex(user => user.id === id);
        this.users.splice(index, 1);
    }
}