import { InjectorHandler } from "../handlers";

export function getSingleton(classValue: any) {
    return InjectorHandler.getSingletonValue(classValue);
}
