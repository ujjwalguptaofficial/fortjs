import {
    Guard,
    MIME_TYPE,
    HTTP_STATUS_CODE
} from "fortjs";
import {
    User
} from "../models/user";
import {
    isEmail,
    isNumeric,
    isLength,
    isIn
} from "validator";

export class ModelUserGuard extends Guard {

    validate(user) {
        let errMessage;
        if (!isLength(user.name, 5)) {
            errMessage = "name should be minimum 5 characters"
        } else if (!isLength(user.password, 5)) {
            errMessage = "password should be minimum 5 characters";
        } else if (!isIn(user.gender, ["male", "female"])) {
            errMessage = "gender should be either male or female";
        } else if (!isEmail(user.emailId)) {
            errMessage = "email not valid";
        } else if (!isLength(user.address, 10, 100)) {
            errMessage = "address length should be between 10 & 100";
        }
        return errMessage;
    }

    async check() {
        const user = new User(this.body);
        // here i am using a plugin to validate but you can write your own code too. 
        const errMsg = this.validate(user);
        if (errMsg == null) {
            // pass user to worker method, so that they dont need to parse again
            this.data.user = user;
            return null;
        } else {
            return {
                contentType: MIME_TYPE.Text,
                statusCode: HTTP_STATUS_CODE.BadRequest,
                responseData: errMsg
            };
        }
    }
}