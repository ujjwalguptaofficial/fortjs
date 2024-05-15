import { ResultMapper, MIME_TYPE } from "fortjs";
import { getDataType } from "fortjs";
import { DATA_TYPE } from "fortjs";
import jsontoxml from "jsontoxml";

export class CustomResultMapper extends ResultMapper {
    map(type: MIME_TYPE, result) {
        switch (type) {
            case MIME_TYPE.Json:
            case MIME_TYPE.Text:
            case MIME_TYPE.Html:
                if (typeof result === 'object' === true) {
                    return JSON.stringify(result);
                }
            case MIME_TYPE.Xml:
                if (typeof result === 'object' === true) {
                    return this.xmlConvert(result);
                }
        }
        return result;
    }

    xmlConvert(value) {
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