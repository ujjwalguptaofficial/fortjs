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
        return userSchema.find();
    }

    async removeUserById(id: string) {
        return userSchema.deleteOne({ _id: id });
    }

    async updateUser(user: IUser) {
        return userSchema.updateOne({ _id: user.id }, user);
    }
}