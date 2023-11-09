import { RouteHandler } from "../handlers";
import { getClassName } from "../helpers";
import { ValidateBodyGuard } from "../extra/validate_body_guard";
import { ValidateQueryShield } from "../extra/expect_query_shield";

export const validate = {
    body: function validateBody(value: any): MethodDecorator {
        return (target: any, methodName: string) => {
            const className: string = getClassName(target);
            RouteHandler.addExpected("body", className, methodName, value);
            RouteHandler.addGuards([ValidateBodyGuard], className, methodName);
        };
    },
    query: function validateQuery(value: any): MethodDecorator {
        return (target: any, methodName: string) => {
            const className: string = getClassName(target);
            RouteHandler.addExpected("query", className, methodName, value);
            RouteHandler.addShields([ValidateQueryShield], className);
        }
    }
}