import { RouteHandler, InjectorHandler } from "../handlers";
import { IControllerTestData } from "../interfaces";

class ControllerListRef {
    static getInstance(name: string, data?: IControllerTestData) {
        const routeInfo = RouteHandler.getControllerFromName(name);
        if (routeInfo) {
            const controller = new routeInfo.controller(...InjectorHandler.getConstructorValues(name));
            if (data) {
                controller.initialize(data);
            }
            return controller;
        }
    }

    static getMethod(className: string, methodName: string) {
        const controller = ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName];
        }
    }

    static executeMethod(className: string, methodName: string) {
        const controller = ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName](...InjectorHandler.getMethodValues(className, methodName, null));
        }
    }
}

export class Components {
    static controller = ControllerListRef;
}

