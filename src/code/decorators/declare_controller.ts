import { Global } from "../global";
import { LogHelper } from "../log_helper";
import { ERROR_TYPE } from "../enums";

export function declareController(path?: string): ClassDecorator {
    //path = Util.isNullOrEmpty(path) ? null : path;
    return (target: any) => {
        const className = target.name;
        const classNameLower = className.toLowerCase();
        // console.log(className);
        // console.log(Object.getOwnPropertyNames(target));
        // console.log(target);
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
        Global.ControllerCollection.push({
            controller: target,
            path: path
        })
    };
}