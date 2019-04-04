import { Shield } from "../abstracts";
import { HttpResult } from "../types";
export declare class GenericShield extends Shield {
    protect(): Promise<HttpResult>;
}
