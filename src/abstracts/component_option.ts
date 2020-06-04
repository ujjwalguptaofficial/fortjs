export class ComponentOption {
    toModel(expectedClass, from) {
        const result = new expectedClass();
        for (const prop in result) {
            result[prop] = from[prop];
        }
        return result;
    }

    extractHash(expectedHash, from) {
        for (const prop in expectedHash) {
            expectedHash[prop] = from[prop];
        }
        return expectedHash;
    }

    isNull(value) {
        return value == null;
    }

    isNullOrEmpty(value: string) {
        return value == null || value.length === 0;
    }

    isEmpty(value: string) {
        return value.length === 0;
    }
}