import { Guard, HttpResult, MIME_TYPE, HTTP_STATUS_CODE } from "fortjs";
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
        if (errors.length === 0) {
            return null;
        }
        else {
            return {
                contentType: MIME_TYPE.Text,
                statusCode: HTTP_STATUS_CODE.BadRequest,
                responseData: "Invalid Request"
            } as HttpResult;
        }
    }
}