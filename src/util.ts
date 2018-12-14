export class Util {
    static isNull(value) {
        return value == null;
    }

    static isNullOrEmpty(value: string) {
        return value == null || value.length === 0;
    }

    static isUnDefined(value) {
        return typeof value === "undefined";
    }

    static isArray(value) {
        return Array.isArray(value);
    }
}