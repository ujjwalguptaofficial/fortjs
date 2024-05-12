import axios from "axios";
import cookie from 'cookie';

let responseCookie;
export const createRequest = () => {
    const request = axios.create({
        baseURL: process.env.APP_URL,
        timeout: 1000,
        validateStatus: function (status) {
            return true;
        },
    });
    request.interceptors.response.use((response) => {
        responseCookie = response.headers['set-cookie'] ? response.headers['set-cookie'][0] : responseCookie;
        if (responseCookie) {
            const parsedCookie = cookie.parse(responseCookie);
            const expires = parsedCookie['Expires'];
            if (expires && new Date(expires) < new Date()) {
                responseCookie = undefined;
            }
        }
        return response;
    });
    request.interceptors.request.use((config) => {
        if (responseCookie) {
            config.headers['Cookie'] = responseCookie;
        }
        return config;
    });
    return request;
}

export const removeSpaceAndNewLine = function (value) {
    return value.replace(/(\r\n\t|\n|\r\t)/gm, "").replace(/\s+/g, '')
}

export const methodNotAllowedMsg = "<h1>Method Not allowed.</h1>";
export const badRequestMsg = '<h1>Bad Request</h1>';
export const forbiddenText = "<h1>We are sorry, but you are not allowed access to this resource.</h1>";
export const browserAccept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
export const isProduction = process.env.NODE_ENV === "production"
export const isDevelopment = process.env.NODE_ENV === "development"
export const url = process.env.APP_URL;
// 'http://localhost:8080'
