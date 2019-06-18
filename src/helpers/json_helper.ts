export class JsonHelper {
    static parse(value: string) {
        try {
            return JSON.parse(value);
        }
        catch (ex) {
            // tslint:disable-next-line
            throw "Post data is invalid";
        }
    }

    static stringify(value) {
        return JSON.stringify(value);
    }
}