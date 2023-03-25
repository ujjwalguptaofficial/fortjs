/*!
 * @license :fortjs - V2.1.1 - 25/03/2023
 * https://github.com/ujjwalguptaofficial/fortjs
 * Copyright (c) 2023 @Ujjwal Gupta; Licensed MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ MIME_TYPE; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ HTTP_METHOD; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ http_status_code["a" /* HTTP_STATUS_CODE */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ ETag_Type; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ error_type["a" /* ERROR_TYPE */]; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ data_type["a" /* DATA_TYPE */]; });

// CONCATENATED MODULE: ./src/enums/mime_type.ts
var MIME_TYPE;
(function (MIME_TYPE) {
    MIME_TYPE["Text"] = "text/plain";
    MIME_TYPE["Json"] = "application/json";
    MIME_TYPE["Html"] = "text/html";
    MIME_TYPE["FormUrlEncoded"] = "application/x-www-form-urlencoded";
    MIME_TYPE["Css"] = "text/css";
    MIME_TYPE["Csv"] = "text/csv";
    MIME_TYPE["Js"] = "application/javascript";
    MIME_TYPE["Bmp"] = "image/bmp";
    MIME_TYPE["Jpeg"] = "image/jpeg";
    MIME_TYPE["Gif"] = "image/gif";
    MIME_TYPE["Ico"] = "image/x-icon";
    MIME_TYPE["Png"] = "image/png";
    MIME_TYPE["Pdf"] = "application/pdf";
    MIME_TYPE["Svg"] = "image/svg+xml";
    MIME_TYPE["Rtf"] = "application/rtf";
    MIME_TYPE["Xml"] = "application/xml";
    MIME_TYPE["Xls"] = "application/vnd.ms-excel";
    MIME_TYPE["Xlsx"] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    MIME_TYPE["Ttf"] = "font/ttf";
    MIME_TYPE["Woff"] = "font/woff";
    MIME_TYPE["Woff2"] = "font/woff2";
    MIME_TYPE["Eot"] = "application/vnd.ms-fontobject";
    MIME_TYPE["Otf"] = "font/otf";
    MIME_TYPE["Swf"] = "application/x-shockwave-flash";
    MIME_TYPE["Avi"] = "video/avi";
    MIME_TYPE["FormMultiPart"] = "multipart/form-data";
})(MIME_TYPE || (MIME_TYPE = {}));

// CONCATENATED MODULE: ./src/enums/http_method.ts
var HTTP_METHOD;
(function (HTTP_METHOD) {
    HTTP_METHOD["Get"] = "GET";
    HTTP_METHOD["Post"] = "POST";
    HTTP_METHOD["Put"] = "PUT";
    HTTP_METHOD["Patch"] = "PATCH";
    HTTP_METHOD["Delete"] = "DELETE";
    HTTP_METHOD["Options"] = "OPTIONS";
    HTTP_METHOD["Head"] = "HEAD";
})(HTTP_METHOD || (HTTP_METHOD = {}));

// EXTERNAL MODULE: ./src/enums/http_status_code.ts
var http_status_code = __webpack_require__(7);

// CONCATENATED MODULE: ./src/enums/etag_type.ts
var ETag_Type;
(function (ETag_Type) {
    ETag_Type["Strong"] = "strong";
    ETag_Type["Weak"] = "weak";
})(ETag_Type || (ETag_Type = {}));

// EXTERNAL MODULE: ./src/enums/error_type.ts
var error_type = __webpack_require__(11);

// EXTERNAL MODULE: ./src/enums/data_type.ts
var data_type = __webpack_require__(8);

// CONCATENATED MODULE: ./src/enums/index.ts








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FortGlobal; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _abstracts_component_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);







const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === "production";
class FortGlobal {
    static get isDevelopment() {
        return isDevelopment;
    }
    static get isProduction() {
        return isProduction;
    }
    static setDefault() {
        if (FortGlobal.viewPath == null) {
            FortGlobal.viewPath = path__WEBPACK_IMPORTED_MODULE_5__["join"](_constant__WEBPACK_IMPORTED_MODULE_4__[/* __CurrentPath */ "e"], "views");
        }
        if (FortGlobal.logger == null) {
            FortGlobal.logger = FortGlobal.logger || new _models__WEBPACK_IMPORTED_MODULE_0__[/* Logger */ "h"]();
        }
        if (FortGlobal.sessionProvider == null) {
            FortGlobal.sessionProvider = _extra__WEBPACK_IMPORTED_MODULE_3__[/* MemorySessionProvider */ "a"];
        }
        if (FortGlobal.xmlParser == null) {
            FortGlobal.xmlParser = _generics__WEBPACK_IMPORTED_MODULE_1__[/* GenericXmlParser */ "b"];
        }
        if (FortGlobal.viewEngine == null) {
            FortGlobal.viewEngine = new _extra__WEBPACK_IMPORTED_MODULE_3__[/* MustacheViewEngine */ "b"]();
        }
        if (FortGlobal.appName == null) {
            FortGlobal.appName = _constant__WEBPACK_IMPORTED_MODULE_4__[/* __AppName */ "a"];
        }
        if (FortGlobal.eTag == null) {
            FortGlobal.eTag = {
                type: _enums__WEBPACK_IMPORTED_MODULE_6__[/* ETag_Type */ "c"].Weak
            };
        }
        if (FortGlobal.errorHandler == null) {
            FortGlobal.errorHandler = _models__WEBPACK_IMPORTED_MODULE_0__[/* ErrorHandler */ "c"];
        }
        FortGlobal.appSessionIdentifier = `${FortGlobal.appName}_session_id`;
    }
}
FortGlobal.port = 4000;
FortGlobal.shouldParseCookie = true;
FortGlobal.shouldParsePost = true;
FortGlobal.sessionTimeOut = 60;
FortGlobal.walls = [];
FortGlobal.folders = [];
FortGlobal.componentOption = new _abstracts_component_option__WEBPACK_IMPORTED_MODULE_2__[/* ComponentOption */ "a"]();


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ jsonResult; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ textResult; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ htmlResult; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ renderView; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ downloadResult; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ fileResult; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ redirectResult; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ viewResult; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ getViewFromFile; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ promise; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ log_helper_LogHelper; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ getMimeTypeFromExtension; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ parseAndMatchRoute; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ parseCookie; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ JsonHelper; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ removeLastSlash; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ removeFirstSlash; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ reverseLoop; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ compareExpectedAndRemoveUnnecessary; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ getDataType; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ getClassName; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ removeMethodAndNullFromObject; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ getResultBasedOnMiMe; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ setResultMapper; });

// EXTERNAL MODULE: ./src/enums/index.ts + 3 modules
var enums = __webpack_require__(0);

// EXTERNAL MODULE: ./src/enums/http_status_code.ts
var http_status_code = __webpack_require__(7);

// CONCATENATED MODULE: ./src/helpers/json_result.ts


const jsonResult = (value, statusCode) => {
    return {
        contentType: enums["f" /* MIME_TYPE */].Json,
        responseData: value,
        statusCode: statusCode || http_status_code["a" /* HTTP_STATUS_CODE */].Ok
    };
};

// CONCATENATED MODULE: ./src/helpers/text_result.ts


const textResult = (text, statusCode) => {
    return {
        contentType: enums["f" /* MIME_TYPE */].Text,
        responseData: text,
        statusCode: statusCode || http_status_code["a" /* HTTP_STATUS_CODE */].Ok
    };
};

// CONCATENATED MODULE: ./src/helpers/html_result.ts


const htmlResult = (html, statusCode) => {
    return {
        contentType: enums["f" /* MIME_TYPE */].Html,
        responseData: html,
        statusCode: statusCode || http_status_code["a" /* HTTP_STATUS_CODE */].Ok
    };
};

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

// EXTERNAL MODULE: ./src/enums/error_type.ts
var error_type = __webpack_require__(11);

// CONCATENATED MODULE: ./src/helpers/log_helper.ts

class log_helper_LogHelper {
    constructor(type, info) {
        this.type = type;
        this.info_ = info;
        this.message = this.getMsg_();
    }
    throw() {
        const errMsg = this.get();
        throw JSON.stringify(errMsg);
    }
    static log(msg) {
        console.log(msg);
    }
    logError() {
        console.error(this.get());
    }
    logWarning() {
        console.warn(this.get());
    }
    get() {
        return {
            message: this.message,
            type: this.type
        };
    }
    getMsg_() {
        let errMsg;
        switch (this.type) {
            case error_type["a" /* ERROR_TYPE */].InvalidControllerName:
                errMsg = `Invalid controller name - '${this.info_}'. Controller name must contain 'controller'.`;
                break;
            case error_type["a" /* ERROR_TYPE */].InvalidContentType:
                errMsg = `Content type - '${this.info_}' is not valid. Please create an issue if you think this is valid type.`;
                break;
            case error_type["a" /* ERROR_TYPE */].PortInUse:
                errMsg = `Port ${this.info_} is being used by another process.`;
                break;
            case error_type["a" /* ERROR_TYPE */].UndefinedViewEngine:
                errMsg = `View engine is not initiated.Initiate the view engine where fort is created.`;
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    }
}

// CONCATENATED MODULE: ./src/helpers/render_view.ts



let renderView;
if (fort_global["a" /* FortGlobal */].isProduction === true) {
    renderView = (viewName, model) => {
        return fort_global["a" /* FortGlobal */].viewEngine.render({
            view: viewName,
            model
        });
    };
}
else {
    renderView = (viewName, model) => {
        if (fort_global["a" /* FortGlobal */].viewEngine == null) {
            new log_helper_LogHelper(error_type["a" /* ERROR_TYPE */].UndefinedViewEngine).throw();
        }
        return fort_global["a" /* FortGlobal */].viewEngine.render({
            view: viewName,
            model
        });
    };
}

// CONCATENATED MODULE: ./src/helpers/download_result.ts

const downloadResult = (filePath, downloadFileName) => {
    return {
        statusCode: http_status_code["a" /* HTTP_STATUS_CODE */].Ok,
        file: {
            filePath: filePath,
            shouldDownload: true,
            alias: downloadFileName
        }
    };
};

// CONCATENATED MODULE: ./src/helpers/file_result.ts

const fileResult = (filePath) => {
    return {
        statusCode: http_status_code["a" /* HTTP_STATUS_CODE */].Ok,
        file: {
            filePath: filePath
        }
    };
};

// CONCATENATED MODULE: ./src/helpers/redirect_result.ts


const redirectResult = (url) => {
    return {
        contentType: enums["f" /* MIME_TYPE */].Text,
        responseData: url,
        statusCode: http_status_code["a" /* HTTP_STATUS_CODE */].Redirect,
        shouldRedirect: true
    };
};

// CONCATENATED MODULE: ./src/helpers/view_result.ts


const viewResult = (viewName, model) => {
    return renderView(viewName, model).then(viewData => {
        return {
            contentType: enums["f" /* MIME_TYPE */].Html,
            responseData: viewData,
            statusCode: enums["e" /* HTTP_STATUS_CODE */].Ok
        };
    });
};

// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(17);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(10);

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/helpers/get_view_from_file.ts




const viewCache = {};
let getViewFromFile;
const readView = (option) => {
    const pathOfView = external_path_["join"](fort_global["a" /* FortGlobal */].viewPath, option.fileLocation);
    // eslint-disable-next-line
    return Object(external_fs_extra_["readFile"])(pathOfView, {
        encoding: 'utf8'
    }).then(result => {
        if (option.mapView != null) {
            return option.mapView(result);
        }
        return result;
    });
};
if (fort_global["a" /* FortGlobal */].isProduction === true) {
    getViewFromFile = function (option) {
        if (viewCache[option.fileLocation] == null) {
            return readView(option).then(result => {
                viewCache[option.fileLocation] = result;
                return result;
            });
        }
        return Object(utils["d" /* promiseResolve */])(viewCache[option.fileLocation]);
    };
}
else {
    getViewFromFile = function (option) {
        return readView(option);
    };
}

// CONCATENATED MODULE: ./src/helpers/promise.ts
const promise = (callBack) => {
    return new Promise(callBack);
};

// CONCATENATED MODULE: ./src/helpers/get_mime_type_from_extension.ts

const getMimeTypeFromExtension = (ext) => {
    switch (ext) {
        case ".htm":
        case ".html":
            return enums["f" /* MIME_TYPE */].Html;
        case ".css":
            return enums["f" /* MIME_TYPE */].Css;
        case ".js":
            return enums["f" /* MIME_TYPE */].Js;
        case ".png":
            return enums["f" /* MIME_TYPE */].Png;
        case ".woff":
            return enums["f" /* MIME_TYPE */].Woff;
        case ".woff2":
            return enums["f" /* MIME_TYPE */].Woff2;
        case ".json":
            return enums["f" /* MIME_TYPE */].Json;
        case ".txt":
            return enums["f" /* MIME_TYPE */].Text;
        case ".jpg":
        case ".jpeg":
            return enums["f" /* MIME_TYPE */].Jpeg;
        case ".rtf":
            return enums["f" /* MIME_TYPE */].Rtf;
        case ".ttf":
            return enums["f" /* MIME_TYPE */].Ttf;
        case ".eot":
            return enums["f" /* MIME_TYPE */].Eot;
        case '.otf':
            return enums["f" /* MIME_TYPE */].Otf;
        case ".swf":
            return enums["f" /* MIME_TYPE */].Swf;
        case ".avi":
            return enums["f" /* MIME_TYPE */].Avi;
        case ".svg":
            return enums["f" /* MIME_TYPE */].Svg;
        case ".pdf":
            return enums["f" /* MIME_TYPE */].Pdf;
        case ".xml":
            return enums["f" /* MIME_TYPE */].Xml;
        case ".csv":
            return enums["f" /* MIME_TYPE */].Csv;
        case ".xls":
            return enums["f" /* MIME_TYPE */].Xls;
        case ".xlsx":
            return enums["f" /* MIME_TYPE */].Xlsx;
        case ".bmp":
            return enums["f" /* MIME_TYPE */].Bmp;
        case ".gif":
            return enums["f" /* MIME_TYPE */].Gif;
        default:
            return "application/octet-stream";
    }
};

// EXTERNAL MODULE: ./src/handlers/route_handler.ts
var route_handler = __webpack_require__(12);

// CONCATENATED MODULE: ./src/helpers/parse_match_route.ts


const regex1 = /{(.*)}(?!.)/;
// for extension - e.g - {{file}}.js
const regex2 = /{(.*)}\.(\w+)(?!.)/;
const checkRouteInWorker = (route, httpMethod, urlParts) => {
    const matchedRoute = {
        allowedHttpMethod: [],
        controller: route.controller,
        controllerName: route.controllerName
    };
    const urlPartLength = urlParts.length;
    for (const workerName in route.workers) {
        const worker = route.workers[workerName];
        const patternSplit = worker.pattern.split("/");
        if (urlPartLength === patternSplit.length) {
            let isMatched = true;
            const params = {};
            urlParts.every((urlPart, i) => {
                // if not equal then check for regex match
                if (urlPart !== patternSplit[i]) {
                    const regMatch1 = patternSplit[i].match(regex1);
                    const regMatch2 = patternSplit[i].match(regex2);
                    if (regMatch1 != null) {
                        params[regMatch1[1]] = urlPart;
                    }
                    else if (regMatch2 != null) {
                        const splitByDot = urlPart.split(".");
                        if (splitByDot[1] === regMatch2[2]) {
                            params[regMatch2[1]] = splitByDot[0];
                        }
                        else {
                            isMatched = false;
                        }
                    }
                    else {
                        isMatched = false;
                    }
                }
                // means its direct match
                return isMatched;
            });
            if (isMatched === true) {
                if (worker.methodsAllowed.indexOf(httpMethod) >= 0) {
                    matchedRoute.workerInfo = worker;
                    matchedRoute.params = params;
                    matchedRoute.shields = route.shields;
                    break;
                }
                else {
                    matchedRoute.allowedHttpMethod = [...matchedRoute.allowedHttpMethod, ...worker.methodsAllowed];
                }
            }
        }
    }
    if (matchedRoute.workerInfo == null && matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    return matchedRoute;
};
function parseAndMatchRoute(url, httpMethod) {
    url = removeLastSlash(url);
    const urlParts = url.split("/");
    const route = route_handler["a" /* RouteHandler */].findControllerFromPath(urlParts);
    return route == null ? checkRouteInWorker(route_handler["a" /* RouteHandler */].defaultRoute, httpMethod, urlParts) :
        checkRouteInWorker(route, httpMethod, urlParts);
}

// CONCATENATED MODULE: ./src/helpers/parse_cookie.ts

const parseCookie = (cookie) => {
    const value = {};
    if (!Object(utils["c" /* isNullOrEmpty */])(cookie)) {
        cookie.split(';').forEach((val) => {
            const parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
};

// CONCATENATED MODULE: ./src/helpers/json_helper.ts
class JsonHelper {
    static parse(value) {
        try {
            return JSON.parse(value);
        }
        catch (ex) {
            // tslint:disable-next-line
            throw {
                message: "Post data is invalid"
            };
        }
    }
    static stringify(value) {
        return JSON.stringify(value);
    }
}

// CONCATENATED MODULE: ./src/helpers/remove_last_slash.ts
const removeLastSlash = (url) => {
    const urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        return url.substr(0, urlLength - 1);
    }
    return url;
};

// CONCATENATED MODULE: ./src/helpers/remove_first_slash.ts
const removeFirstSlash = function (value) {
    // remove / from string at 0th index
    if (value[0] === "/") {
        return value.substr(1);
    }
    return value;
};

// CONCATENATED MODULE: ./src/helpers/reverse_loop.ts
const reverseLoop = function (values, cb) {
    for (let length = values.length, i = length - 1; i >= 0; i--) {
        cb(values[i], i);
    }
};

// EXTERNAL MODULE: ./src/enums/data_type.ts
var data_type = __webpack_require__(8);

// CONCATENATED MODULE: ./src/helpers/get_data_type.ts

const getDataType = (value) => {
    const type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return data_type["a" /* DATA_TYPE */].Array;
            }
        default:
            return type;
    }
};

// CONCATENATED MODULE: ./src/helpers/compar_expected_and_remove_unnecessary.ts


const compareExpectedAndRemoveUnnecessary = (expected, actual, isQuery) => {
    const result = {};
    for (const prop in expected) {
        if (isQuery === true && expected[prop] === data_type["a" /* DATA_TYPE */].Number) {
            result[prop] = Number(actual[prop]);
            if (isNaN(result[prop]) === true) {
                return null;
            }
        }
        else {
            result[prop] = actual[prop];
        }
        if (expected[prop] !== getDataType(result[prop])) {
            return null;
        }
    }
    return result;
};

// CONCATENATED MODULE: ./src/helpers/get_class_name.ts
const getClassName = (target) => {
    return target.name || (target.constructor && target.constructor.name);
};

// CONCATENATED MODULE: ./src/helpers/remove_method_and_null_from_object.ts


const removeMethodAndNullFromObject = (value) => {
    const outputValue = {};
    for (const prop in value) {
        const type = getDataType(value[prop]);
        if (!(value[prop] == null || type === data_type["a" /* DATA_TYPE */].Function)) {
            outputValue[prop] = value[prop];
        }
    }
    return outputValue;
};

// CONCATENATED MODULE: ./src/helpers/get_result_based_on_mime.ts

let getResultBasedOnMiMe = (type, result, setMimeType) => {
    switch (type) {
        case enums["f" /* MIME_TYPE */].Json:
        case enums["f" /* MIME_TYPE */].Text:
        case enums["f" /* MIME_TYPE */].Html:
        case enums["f" /* MIME_TYPE */].Xml:
            if (typeof result === 'object' === true) {
                setMimeType(enums["f" /* MIME_TYPE */].Json);
                return JSON.stringify(result);
            }
    }
    return result;
};
function setResultMapper(mapper) {
    getResultBasedOnMiMe = (type, result, callBack) => {
        return new mapper().map(type, result, callBack);
    };
}

// CONCATENATED MODULE: ./src/helpers/index.ts

























/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ isNullOrEmpty; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ isNull; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ isArray; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ promiseResolve; });

// CONCATENATED MODULE: ./src/utils/is_null_or_empty.ts
const isNullOrEmpty = (value) => {
    return value == null || value.length === 0;
};

// CONCATENATED MODULE: ./src/utils/is_null.ts
const isNull = (value) => {
    return value == null;
};

// CONCATENATED MODULE: ./src/utils/is_array.ts
const isArray = (value) => {
    return Array.isArray(value);
};

// CONCATENATED MODULE: ./src/utils/promise_resolve.ts
const promiseResolve = (value) => {
    return Promise.resolve(value);
};

// CONCATENATED MODULE: ./src/utils/index.ts






/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ route_handler["a" /* RouteHandler */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ request_handler_RequestHandler; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ injector_handler_InjectorHandler; });

// UNUSED EXPORTS: FileHandler, RequestHandlerHelper, ControllerResultHandler, PostHandler

// EXTERNAL MODULE: ./src/handlers/route_handler.ts
var route_handler = __webpack_require__(12);

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(44);

// EXTERNAL MODULE: ./src/constant.ts
var constant = __webpack_require__(5);

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

// EXTERNAL MODULE: ./src/helpers/index.ts + 23 modules
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./src/models/index.ts + 10 modules
var models = __webpack_require__(6);

// EXTERNAL MODULE: ./src/enums/index.ts + 3 modules
var enums = __webpack_require__(0);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(10);

// EXTERNAL MODULE: external "negotiator"
var external_negotiator_ = __webpack_require__(18);

// CONCATENATED MODULE: ./src/handlers/injector_handler.ts

// this stores information of injector values that are available per class & worker
const injectorStoreInfos = [];
// this stores injector values
const injectorValues = [];
// this stores the singletons name & their respective index in injector values
const singletons = {};
class injector_handler_InjectorHandler {
    static addWorkerValue(className, methodName, paramIndex, paramValue, shouldFindIndex = true) {
        if (shouldFindIndex === true) {
            const paramValueIndex = injectorValues.indexOf(paramValue);
            if (paramValueIndex < 0) {
                paramValue = injectorValues.push(paramValue) - 1;
            }
            else {
                paramValue = paramValueIndex;
            }
        }
        const savedValue = injectorStoreInfos.find(x => x.className === className);
        const value = {
            className: className,
            methods: {
                [methodName]: []
            }
        };
        if (savedValue == null) {
            value.methods[methodName][paramIndex] = paramValue;
            injectorStoreInfos.push(value);
        }
        else {
            // const savedMethod = savedValue.methods[methodName];
            if (savedValue.methods[methodName] == null) {
                savedValue.methods[methodName] = [];
            }
            savedValue.methods[methodName][paramIndex] = paramValue;
        }
        return paramValue;
    }
    static getConstructorValues(className) {
        return this.getMethodValues(className, constant["b" /* __Constructor */]);
    }
    static getMethodValues(className, methodName) {
        const savedValue = injectorStoreInfos.find(qry => qry.className === className);
        if (savedValue != null) {
            const methodArgs = savedValue.methods[methodName];
            if (methodArgs != null) {
                return methodArgs.map(injectorValueIndex => {
                    return injectorValues[injectorValueIndex];
                });
            }
        }
        return [];
    }
    static addSingleton(className, methodName, paramIndex, paramValue) {
        const singletonClassName = paramValue.name;
        if (singletonClassName) {
            if (singletons[singletonClassName] == null) {
                singletons[singletonClassName] = injector_handler_InjectorHandler.addWorkerValue(className, methodName, paramIndex, new paramValue());
            }
            else {
                injector_handler_InjectorHandler.addWorkerValue(className, methodName, paramIndex, singletons[singletonClassName], false);
            }
        }
    }
}

// CONCATENATED MODULE: ./src/handlers/request_handler_helper.ts






class request_handler_helper_RequestHandlerHelper {
    constructor() {
        this.wallInstances = [];
        this.controllerResult = {};
    }
    runWallOutgoing() {
        const outgoingResults = [];
        Object(helpers["u" /* reverseLoop */])(this.wallInstances, (value) => {
            const methodArgsValues = injector_handler_InjectorHandler.getMethodValues(value.constructor.name, 'onOutgoing');
            methodArgsValues.shift();
            outgoingResults.push(value.onOutgoing(this.controllerResult, ...methodArgsValues));
        });
        return Promise.all(outgoingResults);
    }
    getContentTypeFromNegotiation(type) {
        const negotiator = new external_negotiator_(this.request);
        let availableTypes = this.getAvailableTypes_(type);
        if (availableTypes == null) {
            availableTypes = [type];
        }
        return negotiator.mediaType(availableTypes);
    }
    getContentTypeFromNegotiationHavingMultipleTypes(types) {
        const negotiator = new external_negotiator_(this.request);
        return negotiator.mediaType(types);
    }
    getAvailableTypes_(type) {
        switch (type) {
            case enums["f" /* MIME_TYPE */].Json:
            case enums["f" /* MIME_TYPE */].Xml:
                return [enums["f" /* MIME_TYPE */].Json, enums["f" /* MIME_TYPE */].Xml];
            case enums["f" /* MIME_TYPE */].Html:
            case enums["f" /* MIME_TYPE */].Css:
            case enums["f" /* MIME_TYPE */].Csv:
            case enums["f" /* MIME_TYPE */].Js:
            case enums["f" /* MIME_TYPE */].Rtf:
            case enums["f" /* MIME_TYPE */].Text:
                return [enums["f" /* MIME_TYPE */].Text, enums["f" /* MIME_TYPE */].Html, enums["f" /* MIME_TYPE */].Js,
                    enums["f" /* MIME_TYPE */].Css, enums["f" /* MIME_TYPE */].Rtf, enums["f" /* MIME_TYPE */].Csv];
        }
        return null;
    }
    onBadRequest(error) {
        return new fort_global["a" /* FortGlobal */].errorHandler().onBadRequest(error).then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onForbiddenRequest() {
        return new fort_global["a" /* FortGlobal */].errorHandler().onForbiddenRequest().then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onNotAcceptableRequest() {
        return new fort_global["a" /* FortGlobal */].errorHandler().onNotAcceptableRequest().then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onNotFound() {
        return new fort_global["a" /* FortGlobal */].errorHandler().onNotFound(this.request.url).then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onMethodNotAllowed(allowedMethods) {
        return new fort_global["a" /* FortGlobal */].errorHandler().onMethodNotAllowed().then(data => {
            this.response.setHeader("Allow", allowedMethods.join(","));
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    // it won't execute wallOutgoing as if there is some issue in wallOutgoing
    // then it would become an infinite loop
    // treat it as someone comes to your fort & they start doing things 
    // which was not supposed to be done
    // then you don't follow regular rules but just throw them from anywhere
    onErrorOccured(error) {
        if (typeof error === 'string') {
            error = {
                message: error
            };
        }
        return new fort_global["a" /* FortGlobal */].errorHandler().onServerError(error).then(data => {
            this.controllerResult = data;
            return this.returnResultFromError_();
        }).catch(ex => {
            const response = {
                message: ex.message,
                stack: ex.stack,
                type: ex.type
            };
            this.controllerResult = JSON.stringify(response);
            return this.returnResultFromError_();
        });
    }
    onRequestOptions(allowedMethods) {
        this.response.setHeader("Allow", allowedMethods.join(","));
        return this.onResultFromError_(Object(helpers["w" /* textResult */])(""));
    }
    onResultFromError_(result) {
        this.controllerResult = result;
        return this.runWallOutgoing().then(_ => {
            return this.returnResultFromError_();
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    returnResultFromError_() {
        const result = this.controllerResult;
        this.cookieManager.responseCookie_.forEach(value => {
            this.response.setHeader(constant["f" /* __SetCookie */], value);
        });
        if (result.responseFormat == null) {
            const contentType = result.contentType || enums["f" /* MIME_TYPE */].Text;
            const negotiateMimeType = this.getContentTypeFromNegotiation(contentType);
            if (negotiateMimeType != null) {
                this.endResponse_(negotiateMimeType);
            }
            else {
                this.endResponse_(contentType);
            }
        }
        else {
            this.handleFormatResult_(true);
        }
    }
    handleFormatResult_(shouldSendFirstMatch = false) {
        const negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys(this.controllerResult.responseFormat));
        let key = Object.keys(this.controllerResult.responseFormat).find(qry => qry === negotiateMimeType);
        if (key != null) {
            this.controllerResult.responseData = this.controllerResult.responseFormat[key]();
            this.endResponse_(negotiateMimeType);
        }
        else if (shouldSendFirstMatch === true) {
            key = Object.keys(this.controllerResult.responseFormat)[0];
            this.controllerResult.responseData = this.controllerResult.responseFormat[key]();
            this.endResponse_(negotiateMimeType);
        }
        else {
            this.onNotAcceptableRequest();
        }
    }
    endResponse_(negotiateMimeType) {
        const data = Object(helpers["i" /* getResultBasedOnMiMe */])(negotiateMimeType, this.controllerResult.responseData, (type) => {
            negotiateMimeType = type;
        });
        if (this.response.headersSent) {
            console.trace("Request is finished, but triggered again");
            return;
        }
        this.response.writeHead(this.controllerResult.statusCode || enums["e" /* HTTP_STATUS_CODE */].Ok, { [constant["c" /* __ContentType */]]: negotiateMimeType });
        this.response.end(data);
    }
}

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(19);

// EXTERNAL MODULE: external "etag"
var external_etag_ = __webpack_require__(45);

// EXTERNAL MODULE: external "fresh"
var external_fresh_ = __webpack_require__(46);

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/handlers/file_handler.ts










class file_handler_FileHandler extends request_handler_helper_RequestHandlerHelper {
    getFileInfoFromUrl_(urlPath) {
        const splittedValue = urlPath.split("/");
        const fileInfo = {
            file: ""
        };
        if (splittedValue.length > 2 || !Object(utils["c" /* isNullOrEmpty */])(external_path_["parse"](urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
            return fileInfo;
        }
        fileInfo.folder = splittedValue[1];
        return fileInfo;
    }
    getFileStats_(filePath) {
        return Object(helpers["o" /* promise */])((res, rej) => {
            // eslint-disable-next-line
            external_fs_["lstat"](filePath, (err, status) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        res(null);
                    }
                    else {
                        rej(err);
                    }
                }
                else {
                    res(status);
                }
            });
        });
    }
    handleFileRequestFromAbsolutePath(absolutePath, fileType) {
        this.getFileStats_(absolutePath).then(fileInfo => {
            if (fileInfo != null) {
                if (fileInfo.isDirectory() === true) {
                    this.handleFileRequestForFolderPath_(absolutePath);
                }
                else {
                    this.sendFile_(absolutePath, fileType, fileInfo);
                }
            }
            else {
                this.onNotFound();
            }
        }).catch(ex => {
            this.onErrorOccured(ex);
        });
    }
    checkForFolderAllowAndReturnPath_(urlPath) {
        const fileInfo = this.getFileInfoFromUrl_(urlPath);
        const getAbsPath = function () {
            const folder = fort_global["a" /* FortGlobal */].folders.find(qry => qry.alias === fileInfo.folder);
            if (folder != null) {
                return external_path_["join"](folder.path, fileInfo.file);
            }
            return null;
        };
        let absPath = getAbsPath();
        if (absPath == null) {
            fileInfo.folder = "/";
            fileInfo.file = urlPath;
            absPath = getAbsPath();
        }
        return absPath;
    }
    handleFileRequest(urlPath) {
        const extension = external_path_["parse"](urlPath).ext;
        const absFilePath = this.checkForFolderAllowAndReturnPath_(urlPath);
        if (absFilePath != null) {
            this.handleFileRequestFromAbsolutePath(absFilePath, extension);
        }
        else {
            this.onNotFound();
        }
    }
    /**
     * process folders handling asuuming path is folder.
     * Please check whether the file is folder before calling this function
     *
     * @private
     * @param {string} filePath
     * @param {Fs.Stats} fileInfo
     * @returns
     * @memberof FileHandler
     */
    handleFileRequestForFolderPath_(absolutePath) {
        absolutePath = external_path_["join"](absolutePath, "index.html");
        this.getFileStats_(absolutePath).then(fileInfo => {
            if (fileInfo != null) {
                const fileType = enums["f" /* MIME_TYPE */].Html;
                this.sendFile_(absolutePath, fileType, fileInfo);
            }
            else {
                this.onNotFound();
            }
        }).catch(this.onErrorOccured.bind(this));
    }
    isClientHasFreshFile_(lastModified, etagValue) {
        return external_fresh_(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    }
    sendFileAsResponse_(filePath, mimeType) {
        this.response.writeHead(enums["e" /* HTTP_STATUS_CODE */].Ok, {
            [constant["c" /* __ContentType */]]: mimeType
        });
        const readStream = external_fs_["createReadStream"](filePath);
        // Handle non-existent file
        readStream.on('error', this.onErrorOccured.bind(this));
        readStream.on('open', () => {
            readStream.pipe(this.response);
        });
    }
    getMimeTypeFromFileType_(fileType) {
        return fileType[0] === '.' ? Object(helpers["h" /* getMimeTypeFromExtension */])(fileType) :
            fileType;
    }
}
if (fort_global["a" /* FortGlobal */].isProduction) {
    file_handler_FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        this.runWallOutgoing().then(() => {
            const lastModified = fileInfo.mtime.toUTCString();
            const eTagValue = external_etag_(fileInfo, {
                weak: fort_global["a" /* FortGlobal */].eTag.type === enums["c" /* ETag_Type */].Weak
            });
            if (this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                this.response.statusCode = enums["e" /* HTTP_STATUS_CODE */].NotModified;
                this.response.end();
            }
            else {
                this.response.setHeader('Etag', eTagValue);
                this.response.setHeader('Last-Modified', lastModified);
                this.sendFileAsResponse_(filePath, this.getMimeTypeFromFileType_(fileType));
            }
        }).catch(this.onErrorOccured.bind(this));
    };
}
else {
    file_handler_FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        this.runWallOutgoing().then(() => {
            this.sendFileAsResponse_(filePath, this.getMimeTypeFromFileType_(fileType));
        }).catch(this.onErrorOccured.bind(this));
    };
}

// CONCATENATED MODULE: ./src/handlers/controller_result_handler.ts





class controller_result_handler_ControllerResultHandler extends file_handler_FileHandler {
    handleRedirectResult_() {
        this.response.writeHead(this.controllerResult.statusCode || enums["e" /* HTTP_STATUS_CODE */].Ok, { 'Location': this.controllerResult.responseData });
        this.response.end();
    }
    handleFileResult_() {
        const result = this.controllerResult;
        const parsedPath = external_path_["parse"](result.file.filePath);
        if (result.file.shouldDownload === true) {
            const fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
            this.response.setHeader("content-disposition", `attachment;filename=${fileName}${parsedPath.ext}`);
        }
        this.handleFileRequestFromAbsolutePath(result.file.filePath, parsedPath.ext);
    }
    onTerminationFromWall(result) {
        this.controllerResult = result;
        this.handleFinalResult_();
    }
    handleFinalResult_() {
        const result = this.controllerResult;
        this.cookieManager.responseCookie_.forEach(value => {
            this.response.setHeader(constant["f" /* __SetCookie */], value);
        });
        if (result.shouldRedirect === true) {
            return this.handleRedirectResult_();
        }
        if (result.responseFormat == null) {
            if (result.file == null) {
                const contentType = result.contentType || enums["f" /* MIME_TYPE */].Text;
                const negotiateMimeType = this.getContentTypeFromNegotiation(contentType);
                if (negotiateMimeType != null) {
                    this.endResponse_(negotiateMimeType);
                }
                else {
                    this.onNotAcceptableRequest();
                }
            }
            else {
                this.handleFileResult_();
            }
        }
        else {
            this.handleFormatResult_();
        }
    }
    onResultFromController(result) {
        this.controllerResult = result || Object(helpers["w" /* textResult */])("");
        return this.runWallOutgoing().then(_ => {
            this.handleFinalResult_();
        }).catch(ex => {
            this.onErrorOccured(ex);
        });
    }
}

// EXTERNAL MODULE: external "content-type"
var external_content_type_ = __webpack_require__(47);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(48);

// EXTERNAL MODULE: external "multiparty"
var external_multiparty_ = __webpack_require__(49);

// CONCATENATED MODULE: ./src/handlers/post_handler.ts









class post_handler_PostHandler extends controller_result_handler_ControllerResultHandler {
    getPostRawData_() {
        const body = [];
        return Object(helpers["o" /* promise */])((res, rej) => {
            this.request.on('data', (chunk) => {
                body.push(chunk);
            }).on('end', () => {
                const bodyBuffer = Buffer.concat(body);
                res(bodyBuffer.toString());
            }).on("error", function (err) {
                rej(err);
            });
        });
    }
    parseMultiPartData_() {
        return Object(helpers["o" /* promise */])((res, rej) => {
            new external_multiparty_["Form"]().parse(this.request, (err, fields, files) => {
                if (err) {
                    rej(err);
                }
                else {
                    const result = {
                        field: {},
                        file: {}
                    };
                    for (const field in fields) {
                        result.field[field] = fields[field].length === 1 ? fields[field][0] : fields[field];
                    }
                    for (const file in files) {
                        result.file[file] = files[file].length === 1 ? files[file][0] : files[file];
                    }
                    res(result);
                }
            });
        });
    }
    parsePostData() {
        let contentType = this.request.headers[constant["c" /* __ContentType */]] || this.request.headers["content-type"];
        if (contentType != null) {
            contentType = external_content_type_["parse"](contentType).type;
        }
        if (contentType === enums["f" /* MIME_TYPE */].FormMultiPart) {
            return this.parseMultiPartData_().then(result => {
                this.file = new models["d" /* FileManager */](result.file);
                return (result.field);
            });
        }
        else {
            let postData;
            this.file = new models["d" /* FileManager */]({});
            return this.getPostRawData_().then(bodyDataAsString => {
                switch (contentType) {
                    case enums["f" /* MIME_TYPE */].Json:
                        postData = helpers["a" /* JsonHelper */].parse(bodyDataAsString);
                        break;
                    case enums["f" /* MIME_TYPE */].Text:
                    case enums["f" /* MIME_TYPE */].Html:
                        postData = bodyDataAsString;
                        break;
                    case enums["f" /* MIME_TYPE */].FormUrlEncoded:
                        postData = external_querystring_["parse"](bodyDataAsString);
                        break;
                    case enums["f" /* MIME_TYPE */].Xml:
                        postData = new fort_global["a" /* FortGlobal */].xmlParser().parse(bodyDataAsString);
                        break;
                    default:
                        postData = {};
                }
                return postData;
            });
        }
    }
}

// CONCATENATED MODULE: ./src/handlers/request_handler.ts










class request_handler_RequestHandler extends post_handler_PostHandler {
    constructor(request, response) {
        super();
        this.data_ = {};
        this.request = request;
        this.response = response;
        this.registerEvents_();
    }
    registerEvents_() {
        this.request.on('error', this.onBadRequest.bind(this));
        this.response.on('error', this.onErrorOccured.bind(this));
    }
    executeWallIncoming_() {
        return Object(helpers["o" /* promise */])((res) => {
            let index = 0;
            const wallLength = fort_global["a" /* FortGlobal */].walls.length;
            const executeWallIncomingByIndex = () => {
                if (wallLength > index) {
                    const wall = fort_global["a" /* FortGlobal */].walls[index++];
                    const constructorArgsValues = injector_handler_InjectorHandler.getConstructorValues(wall.name);
                    const wallObj = new wall(...constructorArgsValues);
                    wallObj.cookie = this.cookieManager;
                    wallObj.session = this.session_;
                    wallObj.request = this.request;
                    wallObj.response = this.response;
                    wallObj.data = this.data_;
                    wallObj.query = this.query_;
                    this.wallInstances.push(wallObj);
                    const methodArgsValues = injector_handler_InjectorHandler.getMethodValues(wall.name, 'onIncoming');
                    wallObj.onIncoming(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeWallIncomingByIndex();
                        }
                        else {
                            res(false);
                            this.onTerminationFromWall(result);
                        }
                    }).catch(ex => {
                        this.onErrorOccured(ex);
                        res(false);
                    });
                }
                else {
                    res(true);
                }
            };
            executeWallIncomingByIndex();
        });
    }
    executeShieldsProtection_() {
        return Object(helpers["o" /* promise */])((res) => {
            let index = 0;
            const shieldLength = this.routeMatchInfo_.shields.length;
            const executeShieldByIndex = () => {
                if (shieldLength > index) {
                    const shield = this.routeMatchInfo_.shields[index++];
                    const constructorArgsValues = injector_handler_InjectorHandler.getConstructorValues(shield.name);
                    const shieldObj = new shield(...constructorArgsValues);
                    shieldObj.cookie = this.cookieManager;
                    shieldObj.query = this.query_;
                    shieldObj.session = this.session_;
                    shieldObj.request = this.request;
                    shieldObj.response = this.response;
                    shieldObj.data = this.data_;
                    shieldObj.workerName = this.routeMatchInfo_.workerInfo.workerName;
                    const methodArgsValues = injector_handler_InjectorHandler.getMethodValues(shield.name, 'protect');
                    shieldObj.protect(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeShieldByIndex();
                        }
                        else {
                            res(false);
                            this.onResultFromController(result);
                        }
                    }).catch(ex => {
                        this.onErrorOccured(ex);
                        res(false);
                    });
                }
                else {
                    res(true);
                }
            };
            executeShieldByIndex();
        });
    }
    executeGuardsCheck_(guards) {
        return Object(helpers["o" /* promise */])((res) => {
            let index = 0;
            const shieldLength = guards.length;
            const executeGuardByIndex = () => {
                if (shieldLength > index) {
                    const guard = guards[index++];
                    const constructorArgsValues = injector_handler_InjectorHandler.getConstructorValues(guard.name);
                    const guardObj = new guard(...constructorArgsValues);
                    guardObj.body = this.body;
                    guardObj.cookie = this.cookieManager;
                    guardObj.query = this.query_;
                    guardObj.session = this.session_;
                    guardObj.request = this.request;
                    guardObj.response = this.response;
                    guardObj.data = this.data_;
                    guardObj.file = this.file;
                    guardObj.param = this.routeMatchInfo_.params;
                    const methodArgsValues = injector_handler_InjectorHandler.getMethodValues(guard.name, 'check');
                    guardObj.check(...methodArgsValues).then(result => {
                        if (result == null) {
                            executeGuardByIndex();
                        }
                        else {
                            res(false);
                            this.onResultFromController(result);
                        }
                    }).catch(ex => {
                        this.onErrorOccured(ex);
                        res(false);
                    });
                }
                else {
                    res(true);
                }
            };
            executeGuardByIndex();
        });
    }
    parseCookieFromRequest_() {
        if (fort_global["a" /* FortGlobal */].shouldParseCookie === true) {
            const rawCookie = (this.request.headers[constant["d" /* __Cookie */]] || this.request.headers["cookie"]);
            let parsedCookies;
            try {
                parsedCookies = Object(helpers["n" /* parseCookie */])(rawCookie);
            }
            catch (ex) {
                this.onErrorOccured(ex);
                return false;
            }
            this.session_ = new fort_global["a" /* FortGlobal */].sessionProvider();
            this.session_.cookie = this.cookieManager = new models["b" /* CookieManager */](parsedCookies);
            this.session_.sessionId = parsedCookies[fort_global["a" /* FortGlobal */].appSessionIdentifier];
        }
        else {
            this.cookieManager = new models["b" /* CookieManager */]({});
        }
        return true;
    }
    setPreHeader_() {
        this.response.setHeader('X-Powered-By', fort_global["a" /* FortGlobal */].appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    }
    checkExpectedQuery_() {
        const expectedQuery = route_handler["a" /* RouteHandler */].getExpectedQuery(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedQuery != null) {
            this.query_ = Object(helpers["c" /* compareExpectedAndRemoveUnnecessary */])(expectedQuery, this.query_, true);
        }
    }
    checkExpectedBody_() {
        const expectedBody = route_handler["a" /* RouteHandler */].getExpectedBody(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedBody != null) {
            this.body = Object(helpers["c" /* compareExpectedAndRemoveUnnecessary */])(expectedBody, this.body, false);
        }
    }
    onRouteMatched_() {
        const actionInfo = this.routeMatchInfo_.workerInfo;
        if (actionInfo == null) {
            if (this.request.method === enums["d" /* HTTP_METHOD */].Options) {
                this.onRequestOptions(this.routeMatchInfo_.allowedHttpMethod);
            }
            else {
                this.onMethodNotAllowed(this.routeMatchInfo_.allowedHttpMethod);
            }
        }
        else {
            this.checkExpectedQuery_();
            if (this.query_ == null) {
                this.onBadRequest({
                    message: "Bad query string data - query string data does not match with expected value"
                });
                return;
            }
            this.executeShieldsProtection_().then(isAllowedByShield => {
                if (isAllowedByShield === false)
                    return;
                return this.handlePostData().then(isPostDataValid => {
                    if (isPostDataValid === false)
                        return;
                    this.checkExpectedBody_();
                    if (this.body == null) {
                        this.onBadRequest({
                            message: "Bad body data - body data does not match with expected value"
                        });
                        return;
                    }
                    return this.executeGuardsCheck_(actionInfo.guards).then(shouldExecuteController => {
                        if (shouldExecuteController === true) {
                            this.runController_();
                        }
                    });
                });
            });
        }
    }
    execute_() {
        const urlDetail = external_url_["parse"](this.request.url, true);
        this.query_ = urlDetail.query;
        const isCookieValid = this.parseCookieFromRequest_();
        if (isCookieValid === false)
            return;
        this.executeWallIncoming_().then(isAllowedByWalls => {
            if (isAllowedByWalls === false)
                return;
            const pathUrl = urlDetail.pathname;
            const requestMethod = this.request.method;
            this.routeMatchInfo_ = Object(helpers["m" /* parseAndMatchRoute */])(pathUrl.toLowerCase(), requestMethod);
            if (this.routeMatchInfo_ == null) { // no route matched
                // it may be a file or folder then
                this.handleFileRequest(pathUrl);
            }
            else {
                this.onRouteMatched_();
            }
        }).catch(ex => {
            this.onErrorOccured(ex);
        });
    }
    handlePostData() {
        if (this.request.method === enums["d" /* HTTP_METHOD */].Get) {
            this.body = {};
            this.file = new models["d" /* FileManager */]({});
            return Object(utils["d" /* promiseResolve */])(true);
        }
        if (fort_global["a" /* FortGlobal */].shouldParsePost === true) {
            return this.parsePostData().then(body => {
                this.body = body;
                return true;
            }).catch(ex => {
                this.onBadRequest(ex);
                return false;
            });
        }
    }
    handle() {
        this.setPreHeader_();
        this.execute_();
    }
    setControllerProps_() {
        const constructorValues = injector_handler_InjectorHandler.getConstructorValues(this.routeMatchInfo_.controller.name);
        const controllerObj = new this.routeMatchInfo_.controller(...constructorValues);
        controllerObj.request = this.request;
        controllerObj.response = this.response;
        controllerObj.query = this.query_;
        controllerObj.body = this.body;
        controllerObj.session = this.session_;
        controllerObj.cookie = this.cookieManager;
        controllerObj.param = this.routeMatchInfo_.params;
        controllerObj.data = this.data_;
        controllerObj.file = this.file;
        const methodArgsValues = injector_handler_InjectorHandler.getMethodValues(this.routeMatchInfo_.controller.name, this.routeMatchInfo_.workerInfo.workerName);
        return controllerObj[this.routeMatchInfo_.workerInfo.workerName](...methodArgsValues);
    }
}
if (fort_global["a" /* FortGlobal */].isProduction) {
    request_handler_RequestHandler.prototype.runController_ = function () {
        this.setControllerProps_().then(this.onResultFromController.bind(this)).catch(this.onErrorOccured.bind(this));
    };
}
else {
    request_handler_RequestHandler.prototype.runController_ = function () {
        const result = this.setControllerProps_();
        if (Promise.resolve(result) !== result) {
            this.onErrorOccured({
                message: "Wrong implementation - worker does not return promise"
            });
        }
        else {
            result.then(this.onResultFromController.bind(this)).catch(this.onErrorOccured.bind(this));
        }
    };
}

// CONCATENATED MODULE: ./src/handlers/index.ts









/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __AppName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __Cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __SetCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __CurrentPath; });
/* unused harmony export __ContentLength */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __Constructor; });
/* tslint:disable */
const __ContentType = "Content-Type";
const __AppName = "fort";
const __Cookie = "Cookie";
const __SetCookie = 'Set-Cookie';
const __CurrentPath = process.cwd();
const __ContentLength = "Content-Length";
const __Constructor = "const_constructor";


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ error_handler_ErrorHandler; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ HttpCookie; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ fort_Fort; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ router_Router; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ CookieManager; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ file_manager_FileManager; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ HttpFile; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Logger; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ RouteInfo; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Components; });

// EXTERNAL MODULE: ./src/helpers/index.ts + 23 modules
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./src/enums/index.ts + 3 modules
var enums = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/models/error_handler.ts



class error_handler_ErrorHandler {
    onServerError(ex) {
        let errMessage = `<h1>internal server error</h1>
            <h3>message : ${ex.message}</h3>`;
        if (ex.stack) {
            errMessage += `<p><b>stacktrace:</b> ${ex.stack}</p>`;
        }
        if (ex.type) {
            errMessage += `<p><b>type:</b> ${ex.type}</p>`;
        }
        return Object(utils["d" /* promiseResolve */])(Object(helpers["k" /* htmlResult */])(errMessage, enums["e" /* HTTP_STATUS_CODE */].InternalServerError));
    }
    onBadRequest(ex) {
        let errMessage = `<h1>Bad Request</h1>`;
        if (ex.message) {
            errMessage += ` <h3>message : ${ex.message} </h3>`;
        }
        if (ex.stack) {
            errMessage += `<p><b>stacktrace:</b> ${ex.stack}</p>`;
        }
        if (ex.type) {
            errMessage += `<p><b>type:</b> ${ex.type}</p>`;
        }
        return Object(utils["d" /* promiseResolve */])(Object(helpers["k" /* htmlResult */])(errMessage, enums["e" /* HTTP_STATUS_CODE */].BadRequest));
    }
    onForbiddenRequest() {
        return Object(utils["d" /* promiseResolve */])(Object(helpers["k" /* htmlResult */])(`<h1>Forbidden</h1>`, enums["e" /* HTTP_STATUS_CODE */].Forbidden));
    }
    onNotAcceptableRequest() {
        return Object(utils["d" /* promiseResolve */])(Object(helpers["k" /* htmlResult */])(`<h1>Not Acceptable</h1>`, enums["e" /* HTTP_STATUS_CODE */].NotAcceptable));
    }
    onMethodNotAllowed() {
        return Object(utils["d" /* promiseResolve */])(Object(helpers["k" /* htmlResult */])(`<h1>Method Not allowed.</h1>`, enums["e" /* HTTP_STATUS_CODE */].MethodNotAllowed));
    }
    onNotFound(url) {
        return Object(utils["d" /* promiseResolve */])(Object(helpers["k" /* htmlResult */])(`<h1>The requested resource ${url} was not found.</h1>`, enums["e" /* HTTP_STATUS_CODE */].NotFound));
    }
}

// CONCATENATED MODULE: ./src/models/http_cookie.ts
class HttpCookie {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

// EXTERNAL MODULE: ./src/handlers/index.ts + 6 modules
var handlers = __webpack_require__(4);

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(50);

// EXTERNAL MODULE: ./src/generics/index.ts + 6 modules
var generics = __webpack_require__(14);

// CONCATENATED MODULE: ./src/models/fort.ts







class fort_Fort {
    // eslint-disable-next-line
    constructor() {
    }
    static set logger(value) {
        fort_global["a" /* FortGlobal */].logger = typeof value === 'function' ? new this.value() :
            value;
    }
    static get logger() {
        return fort_global["a" /* FortGlobal */].logger;
    }
    static set walls(walls) {
        fort_global["a" /* FortGlobal */].walls = walls;
    }
    /**
     * port at which app will listen, default - 4000
     *
     * @static
     * @memberof Fort
     */
    static set port(value) {
        fort_global["a" /* FortGlobal */].port = value;
    }
    static get port() {
        return fort_global["a" /* FortGlobal */].port;
    }
    /**
     * typeof ErrorHandler
     *
     * @static
     * @memberof Fort
     */
    static set errorHandler(value) {
        fort_global["a" /* FortGlobal */].errorHandler = value;
    }
    static set routes(value) {
        if (value == null) {
            value = [];
        }
        let isDefaultRouteExist = false;
        // removing / from routes
        value.forEach(route => {
            // route.path = removeFirstSlash(route.path);
            route.path = Object(helpers["r" /* removeLastSlash */])(route.path);
            handlers["c" /* RouteHandler */].addToRouterCollection(route);
            if (route.path === "/*") {
                handlers["c" /* RouteHandler */].defaultRouteControllerName = route.controller.name;
                isDefaultRouteExist = true;
            }
        });
        if (isDefaultRouteExist === false) {
            handlers["c" /* RouteHandler */].defaultRouteControllerName = generics["a" /* GenericController */].name;
            handlers["c" /* RouteHandler */].addToRouterCollection({
                controller: generics["a" /* GenericController */],
                path: "/*"
            });
        }
    }
    /**
     * view engine use to render the view
     *
     * @static
     * @memberof Fort
     */
    static set viewEngine(value) {
        fort_global["a" /* FortGlobal */].viewEngine = new value();
    }
    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @static
     * @memberof Fort
     */
    static set sessionProvider(value) {
        fort_global["a" /* FortGlobal */].sessionProvider = value;
    }
    static set resultMapper(value) {
        Object(helpers["v" /* setResultMapper */])(value);
    }
    /**
     * XmlParser class - used to parse the xml
     *
     * @static
     * @memberof Fort
     */
    static set xmlParser(xmlParser) {
        fort_global["a" /* FortGlobal */].xmlParser = xmlParser;
    }
    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @static
     * @memberof Fort
     */
    static set shouldParseCookie(value) {
        fort_global["a" /* FortGlobal */].shouldParseCookie = value;
    }
    /**
     * Whether to parse the post data, default - true
     *
     * @static
     * @memberof Fort
     */
    static set shouldParsePost(value) {
        fort_global["a" /* FortGlobal */].shouldParsePost = value;
    }
    /**
     * session timeout in minute - default is 60 minute
     *
     * @static
     * @memberof Fort
     */
    static set sessionTimeOut(value) {
        fort_global["a" /* FortGlobal */].sessionTimeOut = value;
    }
    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @static
     * @memberof Fort
     */
    static set appName(value) {
        fort_global["a" /* FortGlobal */].appName = value;
    }
    /**
     * Views folder location. By default it is - views.
     *
     * @static
     * @memberof Fort
     */
    static set viewPath(value) {
        fort_global["a" /* FortGlobal */].viewPath = value;
    }
    static set componentOption(value) {
        fort_global["a" /* FortGlobal */].componentOption = new value();
    }
    static get httpServer() {
        return fort_Fort.instance.httpServer;
    }
    static set httpServer(value) {
        fort_Fort.instance.httpServer = value;
    }
    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @static
     * @memberof Fort
     */
    static set folders(value) {
        value = value || [];
        if (Object(utils["a" /* isArray */])(value) === false) {
            throw new Error(`folders should be an array`);
        }
        // remove / from files routes
        value.forEach(folder => {
            const length = folder.alias.length;
            if (length > 1) {
                folder.alias = Object(helpers["q" /* removeFirstSlash */])(folder.alias);
                folder.alias = Object(helpers["r" /* removeLastSlash */])(folder.alias);
            }
        });
        fort_global["a" /* FortGlobal */].folders = value;
    }
    /**
     * eTag Settings
     *
     * @static
     * @memberof Fort
     */
    static set eTag(value) {
        fort_global["a" /* FortGlobal */].eTag = value;
    }
    static create() {
        fort_global["a" /* FortGlobal */].setDefault();
        if (this.instance.httpServer != null) {
            return;
        }
        return Object(helpers["o" /* promise */])((res, rej) => {
            this.instance.httpServer = external_http_["createServer"](fort_Fort.onNewRequest).once("error", (err) => {
                if (err.code === 'EADDRINUSE') {
                    const error = new helpers["b" /* LogHelper */](enums["b" /* ERROR_TYPE */].PortInUse, fort_global["a" /* FortGlobal */].port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', () => {
                // set default route
                // RouteHandler.defaultRouteControllerName = RouteHandler.getDefaultRoute();
                res();
            }).listen(fort_global["a" /* FortGlobal */].port);
        });
    }
    static onNewRequest(request, response) {
        new handlers["b" /* RequestHandler */](request, response).handle();
    }
    static destroy() {
        return Object(helpers["o" /* promise */])((res) => {
            this.instance.httpServer.close(res);
        });
    }
}
fort_Fort.instance = new fort_Fort();

// CONCATENATED MODULE: ./src/models/router.ts

class router_Router {
    get routes() {
        return handlers["c" /* RouteHandler */].routerCollection;
    }
    get routesAsArray() {
        return handlers["c" /* RouteHandler */].routesAsArray;
    }
}

// CONCATENATED MODULE: ./src/models/cookie_manager.ts
class CookieManager {
    constructor(parsedValue) {
        this.responseCookie_ = [];
        this.cookieCollection_ = parsedValue;
    }
    /**
     * return cookie by name
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    getCookie(name) {
        return {
            name: name,
            value: this.cookieCollection_[name]
        };
    }
    /**
     * add cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    addCookie(cookie) {
        this.cookieCollection_[cookie.name] = cookie.value;
        this.responseCookie_.push(this.getCookieStringFromCookie_(cookie));
    }
    /**
     * remove cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    removeCookie(cookie) {
        this.cookieCollection_[cookie.name] = null;
        cookie.expires = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
        cookie.maxAge = -1;
        this.responseCookie_.push(this.getCookieStringFromCookie_(cookie));
    }
    /**
     * collection of http cookie
     *
     * @readonly
     * @memberof CookieManager
     */
    get cookieCollection() {
        return this.cookieCollection_;
    }
    /**
     * determine whether value exist or not
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    isExist(name) {
        return this.cookieCollection_[name] != null;
    }
    getCookieStringFromCookie_(cookie) {
        const cookies = [];
        cookies.push(`${cookie.name}=${cookie.value}`);
        if (cookie.expires) {
            cookies.push(`Expires=${cookie.expires.toUTCString()}`);
        }
        if (cookie.httpOnly === true) {
            cookies.push("HttpOnly");
        }
        if (cookie.maxAge != null) {
            cookies.push(`Max-Age=${cookie.maxAge}`);
        }
        if (cookie.path) {
            cookies.push(`Path=${cookie.path}`);
        }
        if (cookie.domain) {
            cookies.push(`Domain=${cookie.domain}`);
        }
        return cookies.join('; ');
    }
}

// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(17);

// CONCATENATED MODULE: ./src/models/file_manager.ts

class file_manager_FileManager {
    constructor(value) {
        this.files_ = value;
    }
    /**
     * get total no of files
     *
     * @returns - number
     * @memberof FileManager
     */
    get count() {
        return Object.keys(this.files_).length;
    }
    get files() {
        return Object.keys(this.files_).map(fileId => {
            return this.files_[fileId];
        });
    }
    /**
     * check for existance of file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    isExist(fieldName) {
        return this.files_[fieldName] != null;
    }
    /**
     * return the file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    getFile(fieldName) {
        return this.files_[fieldName];
    }
    /**
     * saves file to supplied path
     *
     * @param {string} fieldName
     * @param {string} pathToSave
     * @returns
     * @memberof FileManager
     */
    saveTo(fieldName, pathToSave) {
        return external_fs_extra_["copy"](this.files_[fieldName].path, pathToSave);
    }
}

// CONCATENATED MODULE: ./src/models/http_file.ts
class HttpFile {
}

// CONCATENATED MODULE: ./src/models/logger.ts
class Logger {
    info(...args) {
        this.debug(args);
    }
    error(...args) {
        this.debug(args);
    }
    log(...args) {
        this.debug(args);
    }
    debug(...args) {
        console.log(...args);
    }
}

// CONCATENATED MODULE: ./src/models/route_info.ts
class RouteInfo {
    get workersAsArray() {
        return Object.keys(this.workers).map(workerName => {
            return this.workers[workerName];
        });
    }
    init(value) {
        this.controllerName = value.controllerName;
        this.controller = value.controller;
        this.path = value.path;
        this.shields = value.shields;
        this.values = value.values;
        this.workers = value.workers;
    }
}

// CONCATENATED MODULE: ./src/models/components.ts

class components_ControllerListRef {
    static getInstance(name, data) {
        const routeInfo = handlers["c" /* RouteHandler */].getControllerFromName(name);
        if (routeInfo) {
            const controller = new routeInfo.controller(...handlers["a" /* InjectorHandler */].getConstructorValues(name));
            controller.initialize(data);
            return controller;
        }
    }
    static getMethod(className, methodName) {
        const controller = components_ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName];
        }
    }
    static executeMethod(className, methodName) {
        const controller = components_ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName](...handlers["a" /* InjectorHandler */].getMethodValues(className, methodName));
        }
    }
}
class Components {
}
Components.controllers = components_ControllerListRef;

// CONCATENATED MODULE: ./src/models/index.ts












/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP_STATUS_CODE; });
var HTTP_STATUS_CODE;
(function (HTTP_STATUS_CODE) {
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["BadRequest"] = 400] = "BadRequest";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Unauthorized"] = 401] = "Unauthorized";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Forbidden"] = 403] = "Forbidden";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NotFound"] = 404] = "NotFound";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Ok"] = 200] = "Ok";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Created"] = 201] = "Created";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NoContent"] = 204] = "NoContent";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Redirect"] = 302] = "Redirect";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NotModified"] = 304] = "NotModified";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["NotAcceptable"] = 406] = "NotAcceptable";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["InternalServerError"] = 500] = "InternalServerError";
})(HTTP_STATUS_CODE || (HTTP_STATUS_CODE = {}));


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA_TYPE; });
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Function"] = "function";
})(DATA_TYPE || (DATA_TYPE = {}));


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ controller_Controller; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ shield_Shield; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ session_provider["a" /* SessionProvider */]; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ guard_Guard; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ ViewEngine; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ wall_Wall; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ XmlParser; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ ResultMapper; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ component_option["a" /* ComponentOption */]; });

// EXTERNAL MODULE: ./src/models/index.ts + 10 modules
var models = __webpack_require__(6);

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

// CONCATENATED MODULE: ./src/test_helpers/http_response_stub.ts
class HttpResponseStub {
    constructor(headers) {
        this.headers_ = headers;
    }
    getHeader(name) {
        return this.headers_[name];
    }
    hasHeader(name) {
        return this.headers_[name] != null;
    }
    setHeader(name, value) {
        this.headers_[name] = value;
    }
    getHeaders() {
        return this.headers_;
    }
    getHeaderNames() {
        return Object.keys[this.headers_];
    }
    removeHeader(name) {
        delete this.headers_[name];
    }
}

// CONCATENATED MODULE: ./src/test_helpers/http_request_stub.ts
class HttpRequestStub {
    constructor(headers) {
        this.headers = headers;
    }
}

// CONCATENATED MODULE: ./src/test_helpers/init_controller.ts




const initController = (controllerInstance, data) => {
    data = data || {};
    const parsedCookies = data.cookieValue || {};
    const headers = (data.request && data.request.headers) || {};
    controllerInstance.request = new HttpRequestStub(headers);
    controllerInstance.response = new HttpResponseStub(headers);
    controllerInstance.query = data.query || {};
    controllerInstance.body = data.body || {};
    controllerInstance.cookie = new models["b" /* CookieManager */](parsedCookies);
    const session = new fort_global["a" /* FortGlobal */].sessionProvider();
    session.cookie = controllerInstance.cookie;
    session.sessionId = parsedCookies[fort_global["a" /* FortGlobal */].appSessionIdentifier];
    controllerInstance.session = session;
    controllerInstance.param = data.param || {};
    controllerInstance.data = data.data || {};
    controllerInstance.file = new models["d" /* FileManager */](data.file || {});
    return controllerInstance;
};

// CONCATENATED MODULE: ./src/test_helpers/init_guard.ts

const initGuard = (guardInstance, data) => {
    return initController(guardInstance, data);
};

// CONCATENATED MODULE: ./src/test_helpers/init_shield.ts

const initShield = (shieldInstance, data) => {
    const value = initController(shieldInstance, data);
    value.workerName = data && data.workerName;
    return value;
};

// CONCATENATED MODULE: ./src/test_helpers/init_wall.ts

const initWall = (wallInstance, data) => {
    return initController(wallInstance, data);
};

// CONCATENATED MODULE: ./src/test_helpers/index.ts





// CONCATENATED MODULE: ./src/abstracts/controller.ts


class controller_Controller {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get option() {
        return fort_global["a" /* FortGlobal */].componentOption;
    }
    get logger() {
        return fort_global["a" /* FortGlobal */].logger;
    }
    initialize(data) {
        initController(this, data);
    }
}

// CONCATENATED MODULE: ./src/abstracts/shield.ts


class shield_Shield {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get logger() {
        return fort_global["a" /* FortGlobal */].logger;
    }
    get option() {
        return fort_global["a" /* FortGlobal */].componentOption;
    }
    initialize(data) {
        return initShield(this, data);
    }
}

// EXTERNAL MODULE: ./src/abstracts/session_provider.ts
var session_provider = __webpack_require__(15);

// CONCATENATED MODULE: ./src/abstracts/guard.ts


class guard_Guard {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get logger() {
        return fort_global["a" /* FortGlobal */].logger;
    }
    get option() {
        return fort_global["a" /* FortGlobal */].componentOption;
    }
    initialize(data) {
        return initGuard(this, data);
    }
}

// CONCATENATED MODULE: ./src/abstracts/view_engine.ts
class ViewEngine {
}

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/abstracts/wall.ts



class wall_Wall {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get logger() {
        return fort_global["a" /* FortGlobal */].logger;
    }
    get option() {
        return fort_global["a" /* FortGlobal */].componentOption;
    }
    onOutgoing(finalResult, ...args) {
        return Object(utils["d" /* promiseResolve */])(null);
    }
    initialize(data) {
        return initWall(this, data);
    }
}

// CONCATENATED MODULE: ./src/abstracts/xml_parser.ts
class XmlParser {
}

// CONCATENATED MODULE: ./src/abstracts/result_mapper.ts
class ResultMapper {
}

// EXTERNAL MODULE: ./src/abstracts/component_option.ts
var component_option = __webpack_require__(16);

// CONCATENATED MODULE: ./src/abstracts/index.ts











/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ERROR_TYPE; });
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["InvalidControllerName"] = "invalid_controller_name";
    ERROR_TYPE["InvalidContentType"] = "invalid_content_type";
    ERROR_TYPE["PortInUse"] = "port_in_use";
    ERROR_TYPE["UndefinedViewEngine"] = "undefined_view_engine";
})(ERROR_TYPE || (ERROR_TYPE = {}));


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteHandler; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



const routerCollection = {};
const pushRouterIntoCollection = (route) => {
    const routeObj = new _models__WEBPACK_IMPORTED_MODULE_1__[/* RouteInfo */ "i"]();
    routeObj.init(route);
    routerCollection[route.controllerName] = routeObj;
};
const getActionPattern = (parentRoute, pattern) => {
    return (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* isNull */ "b"])(parentRoute.path) || parentRoute.path === "/*") ? pattern : `${parentRoute.path}${pattern}`;
};
class RouteHandler {
    static get routerCollection() {
        return routerCollection;
    }
    static get routesAsArray() {
        return Object.keys(routerCollection).map(workerName => {
            return routerCollection[workerName];
        });
    }
    static findControllerFromPath(urlParts) {
        for (const controllerName in routerCollection) {
            let isMatched = false;
            const controller = routerCollection[controllerName];
            const patternSplit = controller.path.split("/");
            patternSplit.every((patternPart, i) => {
                isMatched = patternPart === urlParts[i];
                return isMatched;
            });
            if (isMatched === true) {
                return controller;
            }
        }
    }
    static getControllerFromName(name) {
        return routerCollection[name];
    }
    static get defaultRoute() {
        return routerCollection[RouteHandler.defaultRouteControllerName];
    }
    static addToRouterCollection(value) {
        const route = routerCollection[value.controller.name];
        if (route == null) {
            pushRouterIntoCollection({
                workers: {},
                controller: value.controller,
                controllerName: value.controller.name,
                path: value.path,
                shields: [],
                values: []
            });
        }
        else {
            route.controller = value.controller;
            route.path = value.path;
            // change pattern value since we have controller name now.
            for (const workerName in route.workers) {
                const actionInfo = route.workers[workerName];
                actionInfo.pattern = getActionPattern(value, actionInfo.pattern);
            }
        }
    }
    static addShields(shields, className) {
        const route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
                workers: {},
                controller: null,
                controllerName: className,
                shields: shields,
                path: null,
                values: []
            });
        }
        else {
            route.shields = shields;
        }
    }
    static addWorker(newWorker, className) {
        const workerName = newWorker.workerName;
        const route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: newWorker
                },
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers[workerName];
            if (savedAction == null) {
                newWorker.pattern = getActionPattern(route, newWorker.pattern);
                route.workers[workerName] = newWorker;
            }
            else {
                savedAction.methodsAllowed = newWorker.methodsAllowed;
                savedAction.pattern = getActionPattern(route, savedAction.pattern);
                // route.path == null ? savedAction.pattern : `/${route.path}${savedAction.pattern}`;
            }
        }
    }
    static addGuards(guards, className, workerName) {
        const route = routerCollection[className];
        const pattern = workerName.toLowerCase();
        if (route == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: {
                        workerName: workerName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    }
                },
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers[workerName];
            if (savedAction == null) {
                route.workers[workerName] = {
                    workerName: workerName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                };
            }
            else {
                savedAction.guards = guards;
            }
        }
    }
    static addPattern(pattern, className, workerName) {
        const route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: {
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    }
                },
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = route.workers[workerName];
            pattern = getActionPattern(route, pattern);
            if (savedAction == null) {
                route.workers[workerName] = {
                    workerName: workerName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
                };
            }
            else {
                savedAction.pattern = pattern;
            }
        }
    }
    static addExpected(type, className, workerName, expectedValue) {
        for (const prop in expectedValue) {
            const propValue = expectedValue[prop];
            expectedValue[prop] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getDataType */ "g"])(propValue);
        }
        const isQuery = type === 'query';
        const pattern = workerName.toLowerCase();
        const router = routerCollection[className];
        const worker = {
            workerName: workerName,
            guards: [],
            methodsAllowed: null,
            pattern: pattern,
            values: [],
            expectedQuery: isQuery ? expectedValue : null,
            expectedBody: isQuery ? null : expectedValue
        };
        if (router == null) {
            pushRouterIntoCollection({
                workers: {
                    [workerName]: worker
                },
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            const savedAction = router.workers[workerName];
            if (savedAction == null) {
                router.workers[workerName] = worker;
            }
            else {
                savedAction.expectedQuery = worker.expectedQuery;
                savedAction.expectedBody = worker.expectedBody;
            }
        }
    }
    static getExpectedQuery(controllerName, workerName) {
        return routerCollection[controllerName].workers[workerName].expectedQuery;
    }
    static getExpectedBody(controllerName, workerName) {
        return routerCollection[controllerName].workers[workerName].expectedBody;
    }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ mustache_view_engine_MustacheViewEngine; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ memory_session_provider_MemorySessionProvider; });

// EXTERNAL MODULE: external "mustache"
var external_mustache_ = __webpack_require__(43);

// EXTERNAL MODULE: ./src/helpers/index.ts + 23 modules
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./src/extra/mustache_view_engine.ts


class mustache_view_engine_MustacheViewEngine {
    render(value) {
        return Object(helpers["j" /* getViewFromFile */])({
            fileLocation: value.view
        }).then(viewData => {
            return external_mustache_["render"](viewData, value.model);
        });
    }
}

// EXTERNAL MODULE: ./src/abstracts/session_provider.ts
var session_provider = __webpack_require__(15);

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/extra/memory_session_provider.ts


const sessionValues = {};
class memory_session_provider_MemorySessionProvider extends session_provider["a" /* SessionProvider */] {
    get(key) {
        const savedSession = sessionValues[this.sessionId];
        return Object(utils["d" /* promiseResolve */])(savedSession != null ? savedSession[key] : null);
    }
    isExist(key) {
        const savedValue = sessionValues[this.sessionId];
        return Object(utils["d" /* promiseResolve */])(savedValue == null ? false : savedValue[key] != null);
    }
    getAll() {
        const savedValue = sessionValues[this.sessionId];
        return Object(utils["d" /* promiseResolve */])(savedValue == null ? {} : savedValue);
    }
    set(key, val) {
        const savedValue = sessionValues[this.sessionId];
        if (savedValue == null) {
            this.createSession();
            sessionValues[this.sessionId] = {
                [key]: val
            };
        }
        else {
            savedValue[key] = val;
        }
        return Object(utils["d" /* promiseResolve */])(null);
    }
    setMany(values) {
        return Promise.all(Object.keys(values).map((key) => {
            return this.set(key, values[key]);
        }));
    }
    remove(key) {
        const savedValue = sessionValues[this.sessionId];
        if (savedValue != null) {
            savedValue[key] = null;
        }
        return Object(utils["d" /* promiseResolve */])(null);
    }
    clear() {
        // remove session values
        delete sessionValues[this.sessionId];
        // expire cookie in browser
        this.destroySession();
        return Object(utils["d" /* promiseResolve */])(null);
    }
}

// CONCATENATED MODULE: ./src/extra/index.ts




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ generic_controller_GenericController; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ GenericXmlParser; });

// UNUSED EXPORTS: GenericGuard, GenericShield, GenericSessionProvider, GenericWall

// EXTERNAL MODULE: ./src/abstracts/index.ts + 14 modules
var abstracts = __webpack_require__(9);

// CONCATENATED MODULE: ./src/generics/generic_guard.ts

class generic_guard_GenericGuard extends abstracts["c" /* Guard */] {
    constructor(...args) {
        super();
    }
    check(...args) {
        return null;
    }
}

// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/generics/generic_shield.ts


class generic_shield_GenericShield extends abstracts["f" /* Shield */] {
    constructor(...args) {
        super();
    }
    protect(...args) {
        return Object(utils["d" /* promiseResolve */])(null);
    }
}

// CONCATENATED MODULE: ./src/generics/generic_session_provider.ts

class generic_session_provider_GenericSessionProvider extends abstracts["e" /* SessionProvider */] {
    get() {
        return null;
    }
    getAll() {
        return null;
    }
    set(key, value) {
        return null;
    }
    isExist(key) {
        return null;
    }
    remove(key) {
        return null;
    }
    setMany(values) {
        return null;
    }
    // eslint-disable-next-line
    clear() {
        return null;
    }
}

// CONCATENATED MODULE: ./src/generics/generic_wall.ts

class generic_wall_GenericWall extends abstracts["h" /* Wall */] {
    constructor(...args) {
        super();
    }
    onIncoming(...args) {
        return null;
    }
}

// CONCATENATED MODULE: ./src/generics/generic_controller.ts

class generic_controller_GenericController extends abstracts["b" /* Controller */] {
    constructor(...args) {
        super();
    }
}

// CONCATENATED MODULE: ./src/generics/generic_xml_parser.ts
class GenericXmlParser {
    parse(xml) {
        // tslint:disable-next-line
        throw {
            message: "no xml parser configured"
        };
    }
}

// CONCATENATED MODULE: ./src/generics/index.ts








/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


class SessionProvider {
    createSession(sessionId) {
        const now = new Date();
        this.sessionId = sessionId != null ? sessionId : uniqid__WEBPACK_IMPORTED_MODULE_0__();
        this.cookie.addCookie({
            name: _fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + _fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].sessionTimeOut)),
            maxAge: _fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].sessionTimeOut * 60
        });
    }
    destroySession() {
        const cookie = this.cookie.getCookie(_fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
    }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentOption; });
class ComponentOption {
    toModel(expectedClass, from) {
        const result = new expectedClass();
        for (const prop in result) {
            result[prop] = from[prop];
        }
        return result;
    }
    extractHash(expectedHash, from) {
        for (const prop in expectedHash) {
            expectedHash[prop] = from[prop];
        }
        return expectedHash;
    }
    isNull(value) {
        return value == null;
    }
    isNullOrEmpty(value) {
        return value == null || value.length === 0;
    }
    isEmpty(value) {
        return value.length === 0;
    }
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("negotiator");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _http_result__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_http_result__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_result__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_result__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _http_format_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _http_format_result__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_http_format_result__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_format_result__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_format_result__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _view_engine_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var _view_engine_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_view_engine_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _view_engine_data__WEBPACK_IMPORTED_MODULE_2__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _view_engine_data__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _http_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _http_request__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_http_request__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_request__WEBPACK_IMPORTED_MODULE_3__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_request__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _http_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25);
/* harmony import */ var _http_response__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_http_response__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_response__WEBPACK_IMPORTED_MODULE_4__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_response__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _parent_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var _parent_route__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_parent_route__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _parent_route__WEBPACK_IMPORTED_MODULE_5__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _parent_route__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _session_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _session_value__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_session_value__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _session_value__WEBPACK_IMPORTED_MODULE_6__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _session_value__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _worker_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28);
/* harmony import */ var _worker_info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_worker_info__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _worker_info__WEBPACK_IMPORTED_MODULE_7__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _worker_info__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _etag_option__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29);
/* harmony import */ var _etag_option__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_etag_option__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _etag_option__WEBPACK_IMPORTED_MODULE_8__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _etag_option__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _folder_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30);
/* harmony import */ var _folder_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_folder_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _folder_map__WEBPACK_IMPORTED_MODULE_9__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _folder_map__WEBPACK_IMPORTED_MODULE_9__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _file_result_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32);
/* harmony import */ var _file_result_info__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_file_result_info__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_result_info__WEBPACK_IMPORTED_MODULE_11__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_result_info__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _route_match__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(33);
/* harmony import */ var _route_match__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_route_match__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _route_match__WEBPACK_IMPORTED_MODULE_12__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _route_match__WEBPACK_IMPORTED_MODULE_12__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _controller_test_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34);
/* harmony import */ var _controller_test_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_controller_test_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _controller_test_data__WEBPACK_IMPORTED_MODULE_13__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _controller_test_data__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _view_read_option__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35);
/* harmony import */ var _view_read_option__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_view_read_option__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _view_read_option__WEBPACK_IMPORTED_MODULE_14__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _view_read_option__WEBPACK_IMPORTED_MODULE_14__[key]; }) }(__WEBPACK_IMPORT_KEY__));

















/***/ }),
/* 21 */
/***/ (function(module, exports) {



/***/ }),
/* 22 */
/***/ (function(module, exports) {



/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, exports) {



/***/ }),
/* 28 */
/***/ (function(module, exports) {



/***/ }),
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
/***/ (function(module, exports) {



/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ }),
/* 33 */
/***/ (function(module, exports) {



/***/ }),
/* 34 */
/***/ (function(module, exports) {



/***/ }),
/* 35 */
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _http_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_http_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_cookie__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_cookie__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exception__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _exception__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _exception__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_controller__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _controller__WEBPACK_IMPORTED_MODULE_2__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _controller__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _route_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _route_info__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_route_info__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _route_info__WEBPACK_IMPORTED_MODULE_3__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _route_info__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));






/***/ }),
/* 37 */
/***/ (function(module, exports) {



/***/ }),
/* 38 */
/***/ (function(module, exports) {



/***/ }),
/* 39 */
/***/ (function(module, exports) {



/***/ }),
/* 40 */
/***/ (function(module, exports) {



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ worker; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ shields_shields; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ guards; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ route; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ defaultWorker; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ assign_assign; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ singleton; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ expectBody; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ expectQuery; });

// EXTERNAL MODULE: ./src/enums/index.ts + 3 modules
var enums = __webpack_require__(0);

// EXTERNAL MODULE: ./src/handlers/index.ts + 6 modules
var handlers = __webpack_require__(4);

// CONCATENATED MODULE: ./src/decorators/worker.ts


// tslint:disable-next-line
const worker = (...allowedMethods) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
        const actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods.length === 0 ? [
                enums["d" /* HTTP_METHOD */].Delete,
                enums["d" /* HTTP_METHOD */].Get,
                enums["d" /* HTTP_METHOD */].Post,
                enums["d" /* HTTP_METHOD */].Patch,
                enums["d" /* HTTP_METHOD */].Put
            ] : allowedMethods,
            guards: [],
            pattern: `/${methodName.toLowerCase()}`,
            values: []
        };
        handlers["c" /* RouteHandler */].addWorker(actionInfo, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/shields.ts

// tslint:disable-next-line
const shields_shields = (...shields) => {
    return (target) => {
        const className = target.name;
        handlers["c" /* RouteHandler */].addShields(shields, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/guards.ts

// tslint:disable-next-line
const guards = (...value) => {
    return ((target, methodName, descriptor) => {
        const className = target.constructor.name;
        handlers["c" /* RouteHandler */].addGuards(value, className, methodName);
    });
};

// EXTERNAL MODULE: ./src/helpers/index.ts + 23 modules
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./src/decorators/route.ts


// tslint:disable-next-line
const route = (format) => {
    return ((target, methodName, descriptor) => {
        const className = target.constructor.name;
        // remove / from route
        if (format != null) {
            format = Object(helpers["r" /* removeLastSlash */])(format);
        }
        handlers["c" /* RouteHandler */].addPattern(format, className, methodName);
    });
};

// CONCATENATED MODULE: ./src/decorators/default_worker.ts



// tslint:disable-next-line
const defaultWorker = (...allowedMethods) => {
    return (target, methodName, descriptor) => {
        if (allowedMethods.length === 0) {
            worker(enums["d" /* HTTP_METHOD */].Get)(target, methodName, descriptor);
        }
        else {
            worker(...allowedMethods)(target, methodName, descriptor);
        }
        route("/")(target, methodName, descriptor);
    };
};

// EXTERNAL MODULE: ./src/constant.ts
var constant = __webpack_require__(5);

// CONCATENATED MODULE: ./src/decorators/assign.ts


// tslint:disable-next-line
const assign_assign = (value) => {
    return (target, methodName, paramIndex) => {
        const className = target.name || target.constructor.name;
        if (methodName == null) {
            methodName = constant["b" /* __Constructor */];
        }
        handlers["a" /* InjectorHandler */].addWorkerValue(className, methodName, paramIndex, value);
    };
};

// CONCATENATED MODULE: ./src/decorators/singleton.ts


// tslint:disable-next-line
const singleton = (value) => {
    return (target, methodName, paramIndex) => {
        const className = target.name || target.constructor.name;
        if (methodName == null || methodName === 'constructor') {
            methodName = constant["b" /* __Constructor */];
        }
        handlers["a" /* InjectorHandler */].addSingleton(className, methodName, paramIndex, value);
    };
};

// EXTERNAL MODULE: ./src/enums/data_type.ts
var data_type = __webpack_require__(8);

// CONCATENATED MODULE: ./src/decorators/expect_body.ts



function expectBody(value) {
    return (target, methodName) => {
        const className = Object(helpers["f" /* getClassName */])(target);
        const type = Object(helpers["g" /* getDataType */])(value);
        switch (type) {
            case data_type["a" /* DATA_TYPE */].Function:
                // eslint-disable-next-line
                const valueClassName = Object(helpers["f" /* getClassName */])(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case data_type["a" /* DATA_TYPE */].Object:
                value = Object(helpers["s" /* removeMethodAndNullFromObject */])(value);
                handlers["c" /* RouteHandler */].addExpected("body", className, methodName, value);
                break;
            default:
                throw new Error(`expected body should be always an object but found ${type}`);
        }
    };
}

// CONCATENATED MODULE: ./src/decorators/expect_query.ts



function expectQuery(value) {
    return (target, methodName, descriptor) => {
        const className = Object(helpers["f" /* getClassName */])(target);
        const type = Object(helpers["g" /* getDataType */])(value);
        switch (type) {
            case data_type["a" /* DATA_TYPE */].Function:
                // eslint-disable-next-line
                const valueClassName = Object(helpers["f" /* getClassName */])(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case data_type["a" /* DATA_TYPE */].Object:
                value = Object(helpers["s" /* removeMethodAndNullFromObject */])(value);
                handlers["c" /* RouteHandler */].addExpected("query", className, methodName, value);
                break;
            default:
                throw new Error(`expected query should be always an object but found ${type}`);
        }
    };
}

// CONCATENATED MODULE: ./src/decorators/index.ts











/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("mustache");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("etag");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("fresh");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("content-type");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("multiparty");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fort", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileManager", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpFile", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteInfo", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XmlParser", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultMapper", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentOption", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "route", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWorker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expectBody", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expectQuery", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ETag_Type", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["w"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderView", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["x"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewFromFile", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogHelper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHelper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeLastSlash", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFirstSlash", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseLoop", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareExpectedAndRemoveUnnecessary", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataType", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeMethodAndNullFromObject", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResultBasedOnMiMe", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setResultMapper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["v"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_5__) if(["default","ErrorHandler","HttpCookie","Fort","Router","CookieManager","FileManager","HttpFile","Logger","RouteInfo","Components","Controller","Shield","SessionProvider","Guard","ViewEngine","Wall","XmlParser","ResultMapper","ComponentOption","worker","shields","guards","route","defaultWorker","assign","singleton","expectBody","expectQuery","MIME_TYPE","HTTP_METHOD","HTTP_STATUS_CODE","ETag_Type","ERROR_TYPE","DATA_TYPE","jsonResult","textResult","htmlResult","renderView","downloadResult","fileResult","redirectResult","viewResult","getViewFromFile","promise","LogHelper","getMimeTypeFromExtension","parseAndMatchRoute","parseCookie","JsonHelper","removeLastSlash","removeFirstSlash","reverseLoop","compareExpectedAndRemoveUnnecessary","getDataType","getClassName","removeMethodAndNullFromObject","getResultBasedOnMiMe","setResultMapper"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return _extra__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return _extra__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_7__) if(["default","ErrorHandler","HttpCookie","Fort","Router","CookieManager","FileManager","HttpFile","Logger","RouteInfo","Components","Controller","Shield","SessionProvider","Guard","ViewEngine","Wall","XmlParser","ResultMapper","ComponentOption","worker","shields","guards","route","defaultWorker","assign","singleton","expectBody","expectQuery","MIME_TYPE","HTTP_METHOD","HTTP_STATUS_CODE","ETag_Type","ERROR_TYPE","DATA_TYPE","jsonResult","textResult","htmlResult","renderView","downloadResult","fileResult","redirectResult","viewResult","getViewFromFile","promise","LogHelper","getMimeTypeFromExtension","parseAndMatchRoute","parseCookie","JsonHelper","removeLastSlash","removeFirstSlash","reverseLoop","compareExpectedAndRemoveUnnecessary","getDataType","getClassName","removeMethodAndNullFromObject","getResultBasedOnMiMe","setResultMapper","MustacheViewEngine","MemorySessionProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));










/***/ })
/******/ ]);
//# sourceMappingURL=fort.js.map