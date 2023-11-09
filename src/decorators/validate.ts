import { RouteHandler } from "../handlers";
import { ValidateParamGuard, ValidateBodyGuard, ValidateQueryShield, getClassName } from "../helpers";

export const validate = {
    body: function (value: any): MethodDecorator {
        return (target: any, methodName: string) => {
            const className: string = getClassName(target);
            RouteHandler.addExpected("body", className, methodName, value);
            RouteHandler.addGuards([ValidateBodyGuard], className, methodName);
        };
    },
    param: function (value: any): MethodDecorator {
        return (target: any, methodName: string) => {
            const className: string = getClassName(target);
            RouteHandler.addExpected("param", className, methodName, value);
            RouteHandler.addGuards([ValidateParamGuard], className, methodName);
        };
    },
    query: function (value: any): MethodDecorator {
        return (target: any, methodName: string) => {
            const className: string = getClassName(target);
            RouteHandler.addExpected("query", className, methodName, value);
            RouteHandler.addShields([ValidateQueryShield], className);
        }
    }
}