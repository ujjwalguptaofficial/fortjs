import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums/data_type";

export const compareExpectedAndRemoveUnnecessary = (expected, actual, isQuery) => {
    const result = {};
    for (const prop in expected) {
        if (isQuery === true && expected[prop] === DATA_TYPE.Number) {
            result[prop] = Number(actual[prop]);
            if (isNaN(result[prop]) === true) {
                return null;
            }
        }
        else {
            result[prop] = actual[prop];
        }
        if (expected[prop] !== getDataType(result[prop])) {
            return null;
        }
    }
    return result;
};