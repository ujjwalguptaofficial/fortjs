import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums/data_type";

export const removeMethodAndNullFromObject = (value: object) => {

    const outputValue = {};
    for (const prop in value) {
        const type = getDataType(value[prop]);
        if (!(value[prop] == null || type === DATA_TYPE.Function)) {
            outputValue[prop] = value[prop];
        }
    }

    return outputValue;
};