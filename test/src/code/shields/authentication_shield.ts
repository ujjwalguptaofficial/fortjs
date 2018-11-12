import { Shield } from "fort";
export class AuthenticationShield extends Shield {
    protect(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.session.isExist('userId').then(value => {
                resolve(value);
            })
        })
    }
}