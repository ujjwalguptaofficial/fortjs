import { InjectorHandler } from "../handlers";

export function getSingleton<T>(classValue: any) {
    return InjectorHandler.getSingletonValue(classValue) as T | any;
}
