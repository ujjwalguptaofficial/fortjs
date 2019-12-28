import { Guard, HTTP_STATUS_CODE, textResult } from "fortjs";
import { User } from "../models/user";
import { isEmail, isLength, isIn } from "validator";

export class ModelUserGuard extends Guard {

    validate(user) {
        let errMessage;
        if (user.name == null || !isLength(user.name, 5)) {
            errMessage = "name should be minimum 5 characters"
        } else if (user.password == null || !isLength(user.password, 5)) {
            errMessage = "password should be minimum 5 characters";
        } else if (user.gender == null || !isIn(user.gender, ["male", "female"])) {
            errMessage = "gender should be either male or female";
        } else if (user.emailId == null || !isEmail(user.emailId)) {
            errMessage = "email not valid";
        } else if (user.address == null || !isLength(user.address, 10, 100)) {
            errMessage = "address length should be between 10 & 100";
        }
        return errMessage;
    }

    async check() {
        const user = new User().init(this.body);
        const errMsg = this.validate(user);
        if (errMsg == null) {
            // pass user to worker method, so that they dont need to parse again
            this.data.user = user;
            // returning null means - this guard allows request to pass
            return null;
        } else {
            return textResult(errMsg, HTTP_STATUS_CODE.BadRequest);
        }
    }
}