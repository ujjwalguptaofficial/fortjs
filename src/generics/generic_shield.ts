import { Shield } from "../abstracts";
import { HttpResult } from "../types";

export class GenericShield extends Shield {
    protect(): Promise<HttpResult> {
        return null;
    }
}