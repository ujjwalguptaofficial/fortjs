import { Shield, HttpResult, redirectResult, assign, textResult } from "fortjs";

let counter = 0;
export class AuthenticationShield extends Shield {
    constructorValue: string;
    constructor(@assign('hello in shield') value: string) {
        super();
        this.constructorValue = value;
    }

    async protect(@assign('protect called') value: string) {
        if (this.query.shield_injection_test != null) {
            return textResult(`${this.constructorValue} ${value}`, 200) as any;
        }
        return new Promise((resolve, reject) => {
            this.data.authenticationShieldCounter = ++counter;
            this.logger.debug('data', this.data);
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
                    if (this.workerName === 'allowMe') {
                        resolve(null);
                    }
                    else {
                        resolve(redirectResult("/default/login"));
                    }
                }
            });
        });
    }
}