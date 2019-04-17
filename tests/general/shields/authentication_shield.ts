import { Shield, HttpResult, redirectResult } from "fortjs";

let counter = 0;
export class AuthenticationShield extends Shield {
    protect(): Promise<HttpResult> {
        return new Promise((resolve, reject) => {
            this.data.authenticationShieldCounter = ++counter;
            // console.log('data', this.data);
            const query = this.query;
            const data = this.data;
            if (this.request.headers['throwexceptionbyshield'] != null) {
                throw new Error("thrown by shield");
            }
            this.session.isExist('userId').then(exist => {
                if (exist) {
                    resolve(null);
                }
                else {
                    resolve(redirectResult("/default/login"))
                }
            });
        });
    }
}