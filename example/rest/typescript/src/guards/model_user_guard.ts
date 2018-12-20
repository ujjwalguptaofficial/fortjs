import { Guard, HttpResult, MIME_TYPE, HTTP_STATUS_CODE } from "fortjs";
import { User } from "../models/user";
import { validate } from "class-validator";

export class ModelUserGuard extends Guard {
    async check() {
        const user: User = new User(this.body);
        // here i am using a plugin to validate but you can write your own code too. 
        const errors = await validate('User', user);
        if (errors.length === 0) {
            // pass this to method, so that they dont need to parse again
            this.data.user = user;
            return null;
        }
        else {
            const error = errors[0];
            const constraint = Object.keys(error.constraints)[0];
            const errMessage = error.constraints[constraint];
            return {
                contentType: MIME_TYPE.Text,
                statusCode: HTTP_STATUS_CODE.BadRequest,
                responseData: errMessage
            } as HttpResult;
        }
    }
}