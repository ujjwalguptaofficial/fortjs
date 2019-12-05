export function expectQuery(value: any): ParameterDecorator {
    return (target: any, methodName: string, paramIndex: number) => {
        const className: string = target.name || target.constructor.name;

    };
}