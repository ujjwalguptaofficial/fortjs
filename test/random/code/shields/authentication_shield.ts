import { Shield, HttpResult, redirectResult } from "fortjs";
export class AuthenticationShield extends Shield {
    protect(): Promise<HttpResult> {
        return new Promise((resolve, reject) => {
            this.session.isExist('userId').then(exist => {
                if (exist) {
                    resolve(null);
                }
                else{
                    resolve(redirectResult("/default/login"))
                }
            })
        })
    }
}