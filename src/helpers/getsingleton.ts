import { InjectorHandler } from "../handlers";
export function getSingleton<T>(classValue: new (...args: any[]) => T): T {
    return InjectorHandler.getSingletonValue(classValue);
}
