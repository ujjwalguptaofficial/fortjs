import { Shield } from "../abstracts/shield";

export class GenericShield extends Shield {
    protect(): Promise<boolean> {
        return null;
    }
}