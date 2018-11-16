import { Shield } from "fortjs";
export declare class AuthenticationShield extends Shield {
    protect(): Promise<boolean>;
}
