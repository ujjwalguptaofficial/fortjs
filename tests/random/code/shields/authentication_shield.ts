import { Shield, HttpResult, redirectResult } from "fortjs";

let counter = 0;
export class AuthenticationShield extends Shield {
    protect(): Promise<HttpResult> {
        return new Promise((resolve, reject) => {
            this.data.authenticationShieldCounter = ++counter;
            console.log('data', this.data);
            this.session.isExist('userId').then(exist => {
                if (exist) {
                    resolve(null);
                }
                else {
                    resolve(redirectResult("/default/login"))
                }
            })
        })
    }
}