
export function wrapMethodDecorator(args: any[], executor: (target, propertyName, ...args) => void) {

    // this is executed without param
    if (args.length > 2 && args[2].writable != null) {
        const [target, propertyName] = args;
        executor(target, propertyName);
        return;
    }
    return (target, key: string) => {
        executor(target, key, ...args);
    };
}