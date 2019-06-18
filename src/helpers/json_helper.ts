import { IException } from "../interfaces";

export class JsonHelper {
    static parse(value: string) {
        try {
            return JSON.parse(value);
        }
        catch (ex) {
            // tslint:disable-next-line
            throw {
                message: "Post data is invalid"
            } as IException;
        }
    }

    static stringify(value) {
        return JSON.stringify(value);
    }
}