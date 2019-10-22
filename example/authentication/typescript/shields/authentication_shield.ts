
import { Shield, textResult, redirectResult } from "fortjs";
export class AuthenticationShield extends Shield {
    async protect() {
        if (await this.session.isExist('email')) {
            return null;
        }
        else {
            return redirectResult("/login");
        }
    }

    // The above code can written as
    // async protect() {
    //     if (!await this.session.isExist('email')) {
    //         return redirectResult("/login");
    //     }
    // }
}