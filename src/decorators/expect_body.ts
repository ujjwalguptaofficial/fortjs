import { RouteHandler } from "../handlers";
import { getDataType, getClassName, removeMethodAndNullFromObject } from "../helpers";
import { DATA_TYPE } from "../enums/data_type";
import { ExpectBodyGuard } from "../extra/expect_body_guard";

export function expectBody(value: any): MethodDecorator {
    return (target: any, methodName: string) => {
        const className: string = getClassName(target);
        const type = getDataType(value);
        switch (type) {
            case DATA_TYPE.Function:
                // eslint-disable-next-line
                const valueClassName = getClassName(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case DATA_TYPE.Object:
                value = removeMethodAndNullFromObject(value);
                RouteHandler.addExpected("body", className, methodName, value);
                RouteHandler.addGuards([ExpectBodyGuard], className, methodName);
                break;
            default:
                throw new Error(`expected body should be always an object but found ${type}`);
        }

    };
}