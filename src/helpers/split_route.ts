export const splitRoute = (value: string) => {
    return value.split("/");
};

export const joinRoute = (value: string[]) => {
    return value.join("/");
}