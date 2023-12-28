import { Shield, asQuery, textResult, IHttpResult } from "fortjs";

export class UserProfileShield extends Shield {
    async protect(@asQuery query): Promise<void | IHttpResult> {
        if (!query.isProfile) {
            return textResult("expect profile in query", 401);
        }
    }
}