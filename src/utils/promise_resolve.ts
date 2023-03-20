export const promiseResolve = <T>(value: any) => {
    return Promise.resolve(value as T);
};