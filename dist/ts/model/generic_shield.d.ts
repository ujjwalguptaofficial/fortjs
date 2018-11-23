import { Shield } from "../abstracts/shield";
import { HttpResult } from "../types";
export declare class GenericShield extends Shield {
    protect(): Promise<HttpResult>;
}
