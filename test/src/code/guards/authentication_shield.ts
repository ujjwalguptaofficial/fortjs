import { Shield } from "infinity";
export class AuthenticationShield extends Shield {
    protect(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.session.isExist('userId').then(value => {
                console.log("--userid exist from session---");
                console.log(value);
                resolve(value);
            })
        })
    }
}