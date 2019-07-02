import { IUser } from "../interfaces/user";
import { userSchema } from "../db_schemas/user";
import { User } from "../models/user";

export class UserService {
    async addUser(user: IUser) {
        const userObj = new userSchema(user);
        return await userObj.save();
    }

    async getUserById(id: string) {
        const user = await userSchema.findById(id);
        if (user != null) {
            return user.toClient();
        }
        return null;
    }

    async getAllUsers() {
        let users = await userSchema.find();
        users = users.map((user) => {
            return user.toClient();
        });
        console.log('users', users);
        return users;
    }

    async removeUserById(id: string) {
        return userSchema.deleteOne({ _id: id });
    }

    async updateUser(user: IUser) {
        return userSchema.updateOne({ _id: user.id }, user);
    }
}