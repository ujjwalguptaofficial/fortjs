import { Guard } from "infinity";


export class AuthenticationGuard extends Guard {
    check(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.session.isExist('userId').then(value => {
                console.log("--userid exist from session---");
                console.log(value);
                resolve(value);
            })
        })
    }
}