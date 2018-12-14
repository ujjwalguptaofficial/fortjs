import { Util } from "../util";


export const parseCookie = (cookie: string): object => {
    const value = {};
    if (!Util.isNullOrEmpty(cookie)) {
        cookie.split(';').forEach((val) => {
            const parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
};