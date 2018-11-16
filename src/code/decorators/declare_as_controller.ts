import { LogHelper } from "../helpers/log_helper";
import { RouteHandler } from "../route_handler";
import { GenericController } from "../model/generic_controller";
import { ERROR_TYPE } from "../enums/error_type";

export function declareAsController(path?: string): ClassDecorator {
    return (target: any) => {
        const className = target.name;
        const classNameLower = className.toLowerCase();
        if (path == null) {
            if (classNameLower.endsWith('controller') === true) {
                path = classNameLower.substr(0, classNameLower.length - 10);
            }
            else {
                new LogHelper(ERROR_TYPE.InvalidControllerName, className).throw();
            }
        }
        else {
            path = path.toLowerCase();
        }
        RouteHandler.addToRouterCollection({
            controller: target as typeof GenericController,
            controllerName: className,
            alias: path,
            actions: [],
            shields: []
        })
    };
}