export const removeFirstSlash = function (value: string) {
    // remove / from string at 0th index
    if (value[0] === "/") {
        return value.substr(1);
    }
    return value;
};