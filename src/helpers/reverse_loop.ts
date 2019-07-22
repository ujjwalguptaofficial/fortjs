export const reverseLoop = function (values: any[], cb: (value, index: number) => void) {
    for (let length = values.length, i = length - 1; i >= 0; i--) {
        cb(values[i], i);
    }
};