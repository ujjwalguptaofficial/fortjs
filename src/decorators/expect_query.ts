import { RouteHandler } from "../handlers";
import { DATA_TYPE } from "../enums/data_type";
import { getClassName, removeMethodAndNullFromObject, getDataType } from "../helpers";
import { ValidateQueryShield } from "../extra/expect_query_shield";

export function validateQuery(value: any): MethodDecorator {
    return (target: any, methodName: string) => {
        const className: string = getClassName(target);
        RouteHandler.addExpected("query", className, methodName, value);
        RouteHandler.addShields([ValidateQueryShield], className);
    }
}