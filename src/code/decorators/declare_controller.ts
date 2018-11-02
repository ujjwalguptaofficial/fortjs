import { Global } from "../global";
import { ERROR_TYPE } from "../enums";
import { LogHelper } from "../helpers/log_helper";

export function declareController(path?: string): ClassDecorator {
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
        Global.addToRouterCollection({
            controller: target,
            controllerName: className,
            path: path,
            actions: []
        })
    };
}