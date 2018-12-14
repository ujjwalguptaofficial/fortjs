import { Shield } from "../abstracts/shield";
import { HttpResult } from "../types";

export class GenericShield extends Shield {
    protect(): Promise<HttpResult> {
        return null;
    }
}