import { Guard } from "fortjs";
import { validate } from "class-validator";
import { User } from "../../models/user";

export class ModelUserGuard extends Guard {
    async check() {
        const user: User = {
            name: this.body.name,
            gender: this.body.gender,
            address: this.body.address,
            emailId: this.body.emailId
        }
        const errors = await validate(user);
        return errors.length === 0;
    }
}