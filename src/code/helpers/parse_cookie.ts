import { Util } from "../util";


export function parseCookie(cookie: string): object {
    const value = {};
    if (!Util.isNullOrEmpty(cookie)) {
        cookie.split(';').forEach(function (val) {
            var parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
}