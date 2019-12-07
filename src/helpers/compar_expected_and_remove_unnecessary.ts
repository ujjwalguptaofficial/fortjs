import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums/data_type";

export const compareExpectedAndRemoveUnnecessary = (expected, actual) => {
    const result = {};
    // if (actual == null) {
    //     return result;
    // }
    for (const prop in expected) {
        const type = getDataType(expected[prop]);
        let value;
        switch (type) {
            case DATA_TYPE.Number:
                value = Number(actual[prop]); break;
            default:
                value = actual[prop];
        }
        result[prop] = value;
    }
    return result;
};