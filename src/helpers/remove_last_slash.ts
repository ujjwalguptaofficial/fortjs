export const removeLastSlash = (url: string) => {
    const urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        return url.substring(0, urlLength - 1);
    }
    return url;
};