import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums/data_type";

export const compareExpectedAndRemoveUnnecessary = (expected, actual, isQuery) => {
    const result = {};
    for (const prop in expected) {
        const expectedType = getDataType(expected[prop]);
        if (isQuery === true && expectedType === DATA_TYPE.Number) {
            result[prop] = Number(actual[prop]);
            if (isNaN(result[prop]) === true) {
                return null;
            }
        }
        else {
            result[prop] = actual[prop];
        }
        if (expectedType !== getDataType(result[prop])) {
            return null;
        }
    }
    return result;
};