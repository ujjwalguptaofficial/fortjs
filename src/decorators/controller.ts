export const controllerSectionMap: Map<string, string> = new Map();
export const controllerOf = (controllerClassName: string): ClassDecorator => {
    return (target: any) => {
        const className = target.name;
        controllerSectionMap.set(className, controllerClassName);
    };
}