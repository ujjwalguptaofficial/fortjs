import { getDataType } from "./get_data_type";
import { DATA_TYPE } from "../enums/data_type";
import * as jsontoxml from "jsontoxml";

export class XmlHelper {

    static fromJsToXml(value) {
        const addKeyToObjectIfNeeded = (key: string, obj) => {
            const type = getDataType(obj);
            if (type === DATA_TYPE.Object) {
                const keys = Object.keys(obj);
                if (keys.length !== 1) {
                    obj = {
                        [key]: obj
                    };
                }
            }
            return obj;
        };
        const dataType = getDataType(value);
        switch (dataType) {
            case DATA_TYPE.Array:
                (value as []).forEach((val, index) => {
                    value[index] = addKeyToObjectIfNeeded("item", val);
                });
                value = {
                    root: value
                };
                break;
            case DATA_TYPE.Object:
                value = addKeyToObjectIfNeeded("root", value);

        }
        return jsontoxml(value, {
            xmlHeader: true
        });
    }
}