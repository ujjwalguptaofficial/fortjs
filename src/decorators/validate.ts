import { RouteHandler } from "../handlers";
import { getClassName } from "../helpers";
import { ValidateBodyGuard } from "../helpers/validate_body_guard";
import { ValidateQueryShield } from "../helpers/validate_query_shield";

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
            RouteHandler.addGuards([ValidateBodyGuard], className, methodName);
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