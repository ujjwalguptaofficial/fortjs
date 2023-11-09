import { RouteHandler } from "../handlers";
import { getDataType, getClassName, removeMethodAndNullFromObject } from "../helpers";
import { DATA_TYPE } from "../enums/data_type";
import { ValidateBodyGuard } from "../extra/validate_body_guard";

export function validateBody(value: any): MethodDecorator {
    return (target: any, methodName: string) => {
        const className: string = getClassName(target);
        RouteHandler.addExpected("body", className, methodName, value);
        RouteHandler.addGuards([ValidateBodyGuard], className, methodName);
    };
}