import { isNullOrEmpty } from "../utils";

 


export const parseCookie = (cookie: string): { [key: string]: string } => {
    const value = {};
    if (!isNullOrEmpty(cookie)) {
        cookie.split(';').forEach((val) => {
            const parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
};