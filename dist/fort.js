/*!
 * @license :fortjs - V1.5.5 - 06/04/2019
 * https://github.com/ujjwalguptaofficial/fortjs
 * Copyright (c) 2019 @Ujjwal Gupta; Licensed MIT
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("negotiator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("jsontoxml");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("mustache");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("etag");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fresh");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("content-type");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("multiparty");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/abstracts/controller.ts
var Controller = /** @class */ (function () {
    function Controller() {
    }
    return Controller;
}());


// CONCATENATED MODULE: ./src/abstracts/shield.ts
var Shield = /** @class */ (function () {
    function Shield() {
    }
    return Shield;
}());


// EXTERNAL MODULE: external "uniqid"
var external_uniqid_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/global.ts
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.walls = [];
    return Global;
}());


// CONCATENATED MODULE: ./src/abstracts/session_provider.ts


var session_provider_SessionProvider = /** @class */ (function () {
    function SessionProvider() {
    }
    SessionProvider.prototype.createSession = function () {
        var now = new Date();
        this.sessionId = external_uniqid_();
        this.cookie.addCookie({
            name: Global.appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + Global.sessionTimeOut)),
            maxAge: Global.sessionTimeOut * 60
        });
    };
    SessionProvider.prototype.destroySession = function () {
        var cookie = this.cookie.getCookie(Global.appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
    };
    return SessionProvider;
}());


// CONCATENATED MODULE: ./src/abstracts/guard.ts
var Guard = /** @class */ (function () {
    function Guard() {
    }
    return Guard;
}());


// CONCATENATED MODULE: ./src/abstracts/view_engine.ts
var ViewEngine = /** @class */ (function () {
    function ViewEngine() {
    }
    return ViewEngine;
}());


// CONCATENATED MODULE: ./src/abstracts/wall.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Wall = /** @class */ (function () {
    function Wall() {
    }
    Wall.prototype.onOutgoing = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    return Wall;
}());


// CONCATENATED MODULE: ./src/abstracts/xml_parser.ts
var XmlParser = /** @class */ (function () {
    function XmlParser() {
    }
    return XmlParser;
}());


// CONCATENATED MODULE: ./src/abstracts/index.ts








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
})(HTTP_METHOD || (HTTP_METHOD = {}));

// CONCATENATED MODULE: ./src/enums/http_status_code.ts
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

// CONCATENATED MODULE: ./src/enums/etag_type.ts
var ETag_Type;
(function (ETag_Type) {
    ETag_Type["Strong"] = "strong";
    ETag_Type["Weak"] = "weak";
})(ETag_Type || (ETag_Type = {}));

// CONCATENATED MODULE: ./src/enums/error_type.ts
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["InvalidControllerName"] = "invalid_controller_name";
    ERROR_TYPE["InvalidContentType"] = "invalid_content_type";
    ERROR_TYPE["PortInUse"] = "port_in_use";
    ERROR_TYPE["UndefinedViewEngine"] = "undefined_view_engine";
})(ERROR_TYPE || (ERROR_TYPE = {}));

// CONCATENATED MODULE: ./src/enums/index.ts






// CONCATENATED MODULE: ./src/handlers/route_handler.ts
var routerCollection = [];
var RouteHandler = /** @class */ (function () {
    function RouteHandler() {
    }
    Object.defineProperty(RouteHandler, "routerCollection", {
        get: function () {
            return routerCollection;
        },
        enumerable: true,
        configurable: true
    });
    RouteHandler.addToRouterCollection = function (value) {
        var route = routerCollection.find(function (x) { return x.controllerName === value.controller.name; });
        if (route == null) {
            routerCollection.push({
                workers: [],
                controller: value.controller,
                controllerName: value.controller.name,
                path: value.path,
                shields: []
            });
        }
        else {
            route.controller = value.controller;
            route.path = value.path;
            // change pattern value since we have controller name now.
            route.workers.forEach(function (actionInfo) {
                // check if we are not adding again
                // if (actionInfo.pattern.indexOf(value.path) < 0) {
                actionInfo.pattern = "/" + value.path + actionInfo.pattern;
                //}
            });
        }
    };
    RouteHandler.addShields = function (shields, className) {
        var index = routerCollection.findIndex(function (x) { return x.controllerName === className; });
        if (index < 0) {
            routerCollection.push({
                workers: [],
                controller: null,
                controllerName: className,
                shields: shields,
                path: null
            });
        }
        else {
            routerCollection[index].shields = shields;
        }
    };
    RouteHandler.addWorker = function (newAction, className) {
        var router = routerCollection.find(function (x) { return x.controllerName === className; });
        if (router == null) {
            routerCollection.push({
                workers: [newAction],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            var savedAction = router.workers.find(function (val) { return val.workerName === newAction.workerName; });
            if (savedAction == null) {
                newAction.pattern = router.path == null ? newAction.pattern : "/" + router.path + newAction.pattern;
                router.workers.push(newAction);
            }
            else {
                savedAction.methodsAllowed = newAction.methodsAllowed;
                savedAction.pattern = router.path == null ? savedAction.pattern : "/" + router.path + savedAction.pattern;
            }
        }
    };
    RouteHandler.addGuards = function (guards, className, actionName) {
        var index = routerCollection.findIndex(function (x) { return x.controllerName === className; });
        var pattern = actionName.toLowerCase();
        if (index < 0) {
            routerCollection.push({
                workers: [{
                        workerName: actionName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern
                    }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            var savedAction = routerCollection[index].workers.find(function (val) { return val.workerName === actionName; });
            if (savedAction == null) {
                routerCollection[index].workers.push({
                    workerName: actionName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern
                });
            }
            else {
                savedAction.guards = guards;
            }
        }
    };
    RouteHandler.addPattern = function (pattern, className, actionName) {
        var router = routerCollection.find(function (x) { return x.controllerName === className; });
        if (router == null) {
            routerCollection.push({
                workers: [{
                        workerName: actionName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern
                    }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            var savedAction = router.workers.find(function (val) { return val.workerName === actionName; });
            pattern = router.path == null ? pattern : "/" + router.path + pattern;
            if (savedAction == null) {
                router.workers.push({
                    workerName: actionName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern
                });
            }
            else {
                savedAction.pattern = pattern;
            }
        }
    };
    return RouteHandler;
}());


// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/constant.ts
/* tslint:disable */
var __ContentType = "Content-Type";
var __AppName = "fort";
var __Cookie = "Cookie";
var __SetCookie = 'Set-Cookie';
var __CurrentPath = process.cwd();
var __ContentLength = "Content-Length";

// CONCATENATED MODULE: ./src/helpers/json_result.ts


var jsonResult = function (value, statusCode) {
    return {
        contentType: MIME_TYPE.Json,
        responseData: value,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok
    };
};

// CONCATENATED MODULE: ./src/helpers/text_result.ts


var textResult = function (text, statusCode) {
    return {
        contentType: MIME_TYPE.Text,
        responseData: text,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok
    };
};

// CONCATENATED MODULE: ./src/helpers/html_result.ts


var htmlResult = function (html, statusCode) {
    return {
        contentType: MIME_TYPE.Html,
        responseData: html,
        statusCode: statusCode || HTTP_STATUS_CODE.Ok
    };
};

// CONCATENATED MODULE: ./src/helpers/is_env_dev.ts
var isEnvDev = function () {
    return process.env.NODE_ENV === 'development';
};

// CONCATENATED MODULE: ./src/helpers/log_helper.ts

var log_helper_LogHelper = /** @class */ (function () {
    function LogHelper(type, info) {
        this.type = type;
        this.info_ = info;
        this.message = this.getMsg_();
    }
    LogHelper.prototype.throw = function () {
        var errMsg = this.get();
        throw JSON.stringify(errMsg);
    };
    LogHelper.log = function (msg) {
        console.log(msg);
    };
    LogHelper.prototype.logError = function () {
        console.error(this.get());
    };
    LogHelper.prototype.logWarning = function () {
        console.warn(this.get());
    };
    LogHelper.prototype.get = function () {
        return {
            message: this.message,
            type: this.type
        };
    };
    LogHelper.prototype.getMsg_ = function () {
        var errMsg;
        switch (this.type) {
            case ERROR_TYPE.InvalidControllerName:
                errMsg = "Invalid controller name - '" + this.info_ + "'. Controller name must contain 'controller'.";
                break;
            case ERROR_TYPE.InvalidContentType:
                errMsg = "Content type - '" + this.info_ + "' is not valid. Please create an issue if you think this is valid type.";
                break;
            case ERROR_TYPE.PortInUse:
                errMsg = "Port " + this.info_ + " is being used by another process.";
                break;
            case ERROR_TYPE.UndefinedViewEngine:
                errMsg = "View engine is not initiated.Initiate the view engine where fort is created.";
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    };
    return LogHelper;
}());


// CONCATENATED MODULE: ./src/helpers/render_view.ts




var renderView = function (viewName, model) {
    if (isEnvDev()) {
        if (Global.viewEngine == null) {
            new log_helper_LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
    }
    return Global.viewEngine.render({
        view: viewName,
        model: model
    });
};

// CONCATENATED MODULE: ./src/helpers/download_result.ts

var downloadResult = function (filePath, downloadFileName) {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        file: {
            filePath: filePath,
            shouldDownload: true,
            alias: downloadFileName
        }
    };
};

// CONCATENATED MODULE: ./src/helpers/file_result.ts

var fileResult = function (filePath) {
    return {
        statusCode: HTTP_STATUS_CODE.Ok,
        file: {
            filePath: filePath
        }
    };
};

// CONCATENATED MODULE: ./src/helpers/redirect_result.ts


var redirectResult = function (url) {
    return {
        contentType: MIME_TYPE.Text,
        responseData: url,
        statusCode: HTTP_STATUS_CODE.Redirect,
        shouldRedirect: true
    };
};

// CONCATENATED MODULE: ./src/helpers/view_result.ts
var view_result_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var view_result_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var view_result_this = undefined;


var viewResult = function (viewName, model) { return view_result_awaiter(view_result_this, void 0, void 0, function () {
    var viewData;
    return view_result_generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, renderView(viewName, model)];
            case 1:
                viewData = _a.sent();
                return [2 /*return*/, {
                        contentType: MIME_TYPE.Html,
                        responseData: viewData,
                        statusCode: HTTP_STATUS_CODE.Ok
                    }];
        }
    });
}); };

// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/helpers/is_env_production.ts
var isEnvProduction = function () {
    return process.env.NODE_ENV === "production";
};

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/helpers/get_view_from_file.ts
var get_view_from_file_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var get_view_from_file_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var viewCache = {};
var getViewFromFile = function (fileLocation) {
    return get_view_from_file_awaiter(this, void 0, void 0, function () {
        var readView, _a, _b;
        return get_view_from_file_generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    readView = function () {
                        var pathOfView = external_path_["join"](__CurrentPath, Global.viewPath + "/" + fileLocation);
                        return Object(external_fs_extra_["readFile"])(pathOfView, {
                            encoding: 'utf8'
                        });
                    };
                    if (!isEnvProduction()) return [3 /*break*/, 3];
                    if (!(viewCache[fileLocation] == null)) return [3 /*break*/, 2];
                    _a = viewCache;
                    _b = fileLocation;
                    return [4 /*yield*/, readView()];
                case 1:
                    _a[_b] = _c.sent();
                    _c.label = 2;
                case 2: return [2 /*return*/, viewCache[fileLocation]];
                case 3: return [4 /*yield*/, readView()];
                case 4: return [2 /*return*/, _c.sent()];
            }
        });
    });
};

// CONCATENATED MODULE: ./src/helpers/promise.ts
var promise = function (callBack) {
    return new Promise(callBack);
};

// CONCATENATED MODULE: ./src/enums/data_type.ts
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Function"] = "function";
})(DATA_TYPE || (DATA_TYPE = {}));

// CONCATENATED MODULE: ./src/helpers/get_data_type.ts

var getDataType = function (value) {
    var type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return DATA_TYPE.Array;
            }
        default:
            return type;
    }
};

// EXTERNAL MODULE: external "jsontoxml"
var external_jsontoxml_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/helpers/xml_helper.ts



var xml_helper_XmlHelper = /** @class */ (function () {
    function XmlHelper() {
    }
    XmlHelper.fromJsToXml = function (value) {
        var addKeyToObjectIfNeeded = function (key, obj) {
            var _a;
            var type = getDataType(obj);
            if (type === DATA_TYPE.Object) {
                var keys = Object.keys(obj);
                if (keys.length !== 1) {
                    obj = (_a = {},
                        _a[key] = obj,
                        _a);
                }
            }
            return obj;
        };
        var dataType = getDataType(value);
        switch (dataType) {
            case DATA_TYPE.Array:
                value.forEach(function (val, index) {
                    value[index] = addKeyToObjectIfNeeded("item", val);
                });
                value = {
                    root: value
                };
                break;
            case DATA_TYPE.Object:
                value = addKeyToObjectIfNeeded("root", value);
        }
        return external_jsontoxml_(value, {
            xmlHeader: true
        });
    };
    return XmlHelper;
}());


// CONCATENATED MODULE: ./src/helpers/get_mime_type_from_extension.ts

var getMimeTypeFromExtension = function (ext) {
    switch (ext) {
        case ".htm":
        case ".html":
            return MIME_TYPE.Html;
        case ".css":
            return MIME_TYPE.Css;
        case ".js":
            return MIME_TYPE.Js;
        case ".png":
            return MIME_TYPE.Png;
        case ".woff":
            return MIME_TYPE.Woff;
        case ".woff2":
            return MIME_TYPE.Woff2;
        case ".json":
            return MIME_TYPE.Json;
        case ".txt":
            return MIME_TYPE.Text;
        case ".jpg":
        case ".jpeg":
            return MIME_TYPE.Jpeg;
        case ".rtf":
            return MIME_TYPE.Rtf;
        case ".ttf":
            return MIME_TYPE.Ttf;
        case ".eot":
            return MIME_TYPE.Eot;
        case '.otf':
            return MIME_TYPE.Otf;
        case ".swf":
            return MIME_TYPE.Swf;
        case ".avi":
            return MIME_TYPE.Avi;
        case ".Svg":
            return MIME_TYPE.Svg;
        case ".pdf":
            return MIME_TYPE.Pdf;
        case ".xml":
            return MIME_TYPE.Xml;
        case ".csv":
            return MIME_TYPE.Csv;
        case ".xls":
            return MIME_TYPE.Xls;
        case ".xlsx":
            return MIME_TYPE.Xlsx;
        case ".bmp":
            return MIME_TYPE.Bmp;
        case ".gif":
            return MIME_TYPE.Gif;
        default:
            return "application/octet-stream";
    }
};

// CONCATENATED MODULE: ./src/helpers/parse_match_route.ts


var parseAndMatchRoute = function (url, reqMethod) {
    var urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        url = url.substr(0, urlLength - 1);
    }
    // add default path if url is /
    if (url === "") {
        url += Global.defaultPath;
    }
    var urlParts = url.split("/");
    var matchedRoute = {
        allows: []
    };
    var firstPart = urlParts[1];
    var route = RouteHandler.routerCollection.find(function (qry) { return qry.path === firstPart; });
    if (route != null) {
        matchedRoute.controller = route.controller;
        var urlPartLength_1 = urlParts.length;
        if (urlPartLength_1 === 2) { // url does not have action path
            var pattern_1 = "/" + route.path + "/";
            route.workers.every(function (action) {
                if (action.pattern === pattern_1) {
                    if (action.methodsAllowed.indexOf(reqMethod) >= 0) {
                        matchedRoute.actionInfo = action;
                        matchedRoute.params = {};
                        matchedRoute.shields = route.shields;
                        return false;
                    }
                    else {
                        matchedRoute.allows = matchedRoute.allows.concat(action.methodsAllowed);
                    }
                }
                return true;
            });
        }
        else {
            var regex1_1 = /{(.*)}(?!.)/;
            var regex2_1 = /{(.*)}\.(\w+)(?!.)/;
            route.workers.every(function (routeActionInfo) {
                var patternSplit = routeActionInfo.pattern.split("/");
                if (urlPartLength_1 === patternSplit.length) {
                    var isMatched_1 = true;
                    var params_1 = {};
                    urlParts.every(function (urlPart, i) {
                        var regMatch1 = patternSplit[i].match(regex1_1);
                        var regMatch2 = patternSplit[i].match(regex2_1);
                        if (regMatch1 != null) {
                            params_1[regMatch1[1]] = urlPart;
                        }
                        else if (regMatch2 != null) {
                            var splitByDot = urlPart.split(".");
                            if (splitByDot[1] === regMatch2[2]) {
                                params_1[regMatch2[1]] = splitByDot[0];
                            }
                            else {
                                isMatched_1 = false;
                                return false;
                            }
                        }
                        else if (urlPart !== patternSplit[i]) {
                            isMatched_1 = false;
                            return false;
                        }
                        return true;
                    });
                    if (isMatched_1 === true) {
                        if (routeActionInfo.methodsAllowed.indexOf(reqMethod) >= 0) {
                            matchedRoute.actionInfo = routeActionInfo;
                            matchedRoute.params = params_1;
                            matchedRoute.shields = route.shields;
                            return false;
                        }
                        else {
                            matchedRoute.allows = matchedRoute.allows.concat(routeActionInfo.methodsAllowed);
                        }
                    }
                }
                return true;
            });
        }
        if (matchedRoute.controller == null) {
            return null;
        }
        else if (matchedRoute.actionInfo == null && matchedRoute.allows.length === 0) {
            return null;
        }
        return matchedRoute;
    }
    return null;
};

// CONCATENATED MODULE: ./src/util.ts
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.isNull = function (value) {
        return value == null;
    };
    Util.isNullOrEmpty = function (value) {
        return value == null || value.length === 0;
    };
    Util.isUnDefined = function (value) {
        return typeof value === "undefined";
    };
    Util.isArray = function (value) {
        return Array.isArray(value);
    };
    return Util;
}());


// CONCATENATED MODULE: ./src/helpers/parse_cookie.ts

var parseCookie = function (cookie) {
    var value = {};
    if (!Util.isNullOrEmpty(cookie)) {
        cookie.split(';').forEach(function (val) {
            var parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
};

// CONCATENATED MODULE: ./src/helpers/index.ts
















// CONCATENATED MODULE: ./src/models/error_handler.ts

var error_handler_ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.onServerError = function (ex) {
        return promise(function (resolve, reject) {
            var errMessage = "<h1>internal server error</h1>\n            <h3>message : " + ex.message + "</h3>";
            if (ex.stack) {
                errMessage += "<p><b>stacktrace:</b> " + ex.stack + "</p>";
            }
            if (ex.type) {
                errMessage += "<p><b>type:</b> " + ex.type + "</p>";
            }
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onBadRequest = function (ex) {
        return promise(function (resolve, reject) {
            var errMessage = "<h1>Bad Request</h1>";
            if (ex.message) {
                errMessage += " <h3>message : " + ex.message + " </h3>";
            }
            if (ex.stack) {
                errMessage += "<p><b>stacktrace:</b> " + ex.stack + "</p>";
            }
            if (ex.type) {
                errMessage += "<p><b>type:</b> " + ex.type + "</p>";
            }
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onForbiddenRequest = function () {
        return promise(function (resolve, reject) {
            var errMessage = "<h1>Forbidden</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onNotAcceptableRequest = function () {
        return promise(function (resolve, reject) {
            var errMessage = "<h1>Not Acceptable</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onMethodNotAllowed = function () {
        return promise(function (resolve, reject) {
            var errMessage = "<h1>Method Not allowed.</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onNotFound = function (url) {
        return promise(function (resolve, reject) {
            var errMessage = "<h1>The requested resource " + url + " was not found.</h1>";
            resolve(errMessage);
        });
    };
    return ErrorHandler;
}());


// CONCATENATED MODULE: ./src/models/http_cookie.ts
var HttpCookie = /** @class */ (function () {
    function HttpCookie(name, value) {
        this.name = name;
        this.value = value;
    }
    return HttpCookie;
}());


// EXTERNAL MODULE: external "mustache"
var external_mustache_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/extra/mustache_view_engine.ts
var mustache_view_engine_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var mustache_view_engine_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var mustache_view_engine_MustacheViewEngine = /** @class */ (function () {
    function MustacheViewEngine() {
    }
    MustacheViewEngine.prototype.render = function (value) {
        return mustache_view_engine_awaiter(this, void 0, void 0, function () {
            var viewData;
            return mustache_view_engine_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getViewFromFile(value.view)];
                    case 1:
                        viewData = _a.sent();
                        return [2 /*return*/, external_mustache_["render"](viewData, value.model)];
                }
            });
        });
    };
    return MustacheViewEngine;
}());


// CONCATENATED MODULE: ./src/extra/memory_session_provider.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var memory_session_provider_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var memory_session_provider_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var sessionValues = [];
var MemorySessionProvider = /** @class */ (function (_super) {
    __extends(MemorySessionProvider, _super);
    function MemorySessionProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemorySessionProvider.prototype.get = function (key) {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedSession, session;
            var _this = this;
            return memory_session_provider_generator(this, function (_a) {
                savedSession = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                if (savedSession != null) {
                    session = savedSession.datas.find(function (qry) { return qry.key === key; });
                    return [2 /*return*/, session.value];
                }
                return [2 /*return*/, null];
            });
        });
    };
    MemorySessionProvider.prototype.isExist = function (key) {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedValue, index;
            var _this = this;
            return memory_session_provider_generator(this, function (_a) {
                savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                if (savedValue == null) {
                    return [2 /*return*/, false];
                }
                else {
                    index = savedValue.datas.findIndex(function (qry) { return qry.key === key; });
                    return [2 /*return*/, index >= 0];
                }
                return [2 /*return*/];
            });
        });
    };
    MemorySessionProvider.prototype.getAll = function () {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedValue;
            var _this = this;
            return memory_session_provider_generator(this, function (_a) {
                savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                return [2 /*return*/, savedValue == null ? [] : savedValue.datas];
            });
        });
    };
    MemorySessionProvider.prototype.set = function (key, val) {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedValue, savedSessionData;
            var _this = this;
            return memory_session_provider_generator(this, function (_a) {
                savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                if (savedValue == null) {
                    this.createSession();
                    sessionValues.push({
                        identifier: this.sessionId,
                        datas: [{
                                key: key,
                                value: val
                            }]
                    });
                }
                else {
                    savedSessionData = savedValue.datas.find(function (q) { return q.key === key; });
                    if (savedSessionData == null) {
                        savedValue.datas.push({
                            key: key,
                            value: val
                        });
                    }
                    else {
                        savedSessionData.value = val;
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    MemorySessionProvider.prototype.setMany = function (values) {
        var _this = this;
        return Promise.all(values.map(function (value) { return memory_session_provider_awaiter(_this, void 0, void 0, function () {
            return memory_session_provider_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.set(value.key, value.value)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); }));
    };
    MemorySessionProvider.prototype.remove = function (key) {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedValue, index;
            var _this = this;
            return memory_session_provider_generator(this, function (_a) {
                savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                if (savedValue != null) {
                    index = savedValue.datas.findIndex(function (q) { return q.key === key; });
                    savedValue.datas.splice(index, 1);
                }
                return [2 /*return*/];
            });
        });
    };
    MemorySessionProvider.prototype.clear = function () {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var index;
            var _this = this;
            return memory_session_provider_generator(this, function (_a) {
                index = sessionValues.findIndex(function (q) { return q.identifier === _this.sessionId; });
                if (index >= 0) {
                    sessionValues.splice(index, 1);
                }
                // expire cookie in browser
                this.destroySession();
                return [2 /*return*/];
            });
        });
    };
    return MemorySessionProvider;
}(session_provider_SessionProvider));


// CONCATENATED MODULE: ./src/extra/index.ts



// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(8);

// CONCATENATED MODULE: ./src/models/fort.ts










var fort_Fort = /** @class */ (function () {
    function Fort() {
        this.routes = [];
        this.walls = [];
    }
    Fort.prototype.isArray_ = function (value) {
        return Util.isArray(value);
    };
    Fort.prototype.saveAppOption_ = function (option) {
        var defaultEtagConfig = {
            type: ETag_Type.Weak
        };
        Global.port = option.port == null ? 4000 : option.port;
        Global.shouldParseCookie = option.shouldParseCookie == null ? true : option.shouldParseCookie;
        Global.shouldParsePost = Util.isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        Global.sessionTimeOut = Util.isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        Global.folders = option.folders == null ? [] : option.folders;
        if (this.isArray_(Global.folders) === false) {
            throw new Error("Option folders should be an array");
        }
        Global.defaultPath = Util.isNull(option.defaultPath) === true ? "" : "/" + option.defaultPath.toLowerCase();
        Global.appName = Util.isNullOrEmpty(option.appName) === true ? __AppName : option.appName;
        Global.appSessionIdentifier = Global.appName + "_session_id";
        Global.eTag = option.eTag == null ? defaultEtagConfig : option.eTag;
        Global.walls = this.walls;
        Global.viewEngine = this.viewEngine == null ? new mustache_view_engine_MustacheViewEngine() : new this.viewEngine();
        Global.sessionProvider = this.sessionProvider == null ? MemorySessionProvider :
            this.sessionProvider;
        Global.errorHandler = this.errorHandler == null ? error_handler_ErrorHandler : this.errorHandler;
        Global.xmlParser = this.xmlParser;
        Global.viewPath = option.viewPath == null ? "views" : option.viewPath;
    };
    Fort.prototype.create = function (option) {
        var _this = this;
        if (option == null) {
            option = {};
        }
        if (option.defaultPath != null && option.defaultPath[0] === "/") {
            option.defaultPath = option.defaultPath.substr(1);
        }
        if (this.routes == null) {
            this.routes = [];
        }
        this.routes.forEach(function (route) {
            if (route.path[0] === "/") {
                route.path = route.path.substr(1);
            }
            RouteHandler.addToRouterCollection(route);
        });
        this.saveAppOption_(option);
        return promise(function (res, rej) {
            _this.httpServer = external_http_["createServer"](function (request, response) {
                new request_handler_RequestHandler(request, response).handle();
            }).once("error", function (err) {
                if (err.code === 'EADDRINUSE') {
                    var error = new log_helper_LogHelper(ERROR_TYPE.PortInUse, Global.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', res).listen(Global.port);
        });
    };
    Fort.prototype.destroy = function () {
        var _this = this;
        return promise(function (res, rej) {
            _this.httpServer.close(res);
        });
    };
    return Fort;
}());


// CONCATENATED MODULE: ./src/models/router.ts

var router_Router = /** @class */ (function () {
    function Router() {
        this.routes = RouteHandler.routerCollection;
    }
    return Router;
}());


// CONCATENATED MODULE: ./src/models/cookie_manager.ts
var CookieManager = /** @class */ (function () {
    function CookieManager(parsedValue) {
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
    CookieManager.prototype.getCookie = function (name) {
        return {
            name: name,
            value: this.cookieCollection_[name]
        };
    };
    /**
     * add cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    CookieManager.prototype.addCookie = function (cookie) {
        this.cookieCollection_[cookie.name] = cookie.value;
        this.responseCookie_.push(this.getCookieStringFromCookie_(cookie));
    };
    /**
     * remove cookie
     *
     * @param {HttpCookie} cookie
     * @memberof CookieManager
     */
    CookieManager.prototype.removeCookie = function (cookie) {
        this.cookieCollection_[cookie.name] = null;
        cookie.expires = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
        cookie.maxAge = -1;
        this.responseCookie_.push(this.getCookieStringFromCookie_(cookie));
    };
    Object.defineProperty(CookieManager.prototype, "cookieCollection", {
        /**
         * collection of http cookie
         *
         * @readonly
         * @memberof CookieManager
         */
        get: function () {
            return this.cookieCollection_;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * determine whether value exist or not
     *
     * @param {string} name
     * @returns
     * @memberof CookieManager
     */
    CookieManager.prototype.isExist = function (name) {
        return this.cookieCollection_[name] != null;
    };
    CookieManager.prototype.getCookieStringFromCookie_ = function (cookie) {
        var cookies = [];
        cookies.push(cookie.name + "=" + cookie.value);
        if (cookie.expires) {
            cookies.push("Expires=" + cookie.expires.toUTCString());
        }
        if (cookie.httpOnly === true) {
            cookies.push("HttpOnly");
        }
        if (cookie.maxAge != null) {
            cookies.push("Max-Age=" + cookie.maxAge);
        }
        if (cookie.path) {
            cookies.push("Path=" + cookie.path);
        }
        if (cookie.domain) {
            cookies.push("Domain=" + cookie.domain);
        }
        return cookies.join('; ');
    };
    return CookieManager;
}());


// CONCATENATED MODULE: ./src/models/file_manager.ts

var files = {};
var file_manager_FileManager = /** @class */ (function () {
    function FileManager() {
    }
    Object.defineProperty(FileManager.prototype, "count", {
        /**
         * get total no of files
         *
         * @returns - number
         * @memberof FileManager
         */
        get: function () {
            return Object.keys(files).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileManager.prototype, "files", {
        get: function () {
            var results = [];
            for (var file in files) {
                results.push(files[file]);
            }
            return results;
        },
        set: function (value) {
            files = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * check for existance of file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    FileManager.prototype.isExist = function (fieldName) {
        return files[fieldName] != null;
    };
    /**
     * return the file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    FileManager.prototype.getFile = function (fieldName) {
        return files[fieldName];
    };
    /**
     * saves file to supplied path
     *
     * @param {string} fieldName
     * @param {string} pathToSave
     * @returns
     * @memberof FileManager
     */
    FileManager.prototype.saveTo = function (fieldName, pathToSave) {
        return external_fs_extra_["copy"](files[fieldName].path, pathToSave);
    };
    return FileManager;
}());


// CONCATENATED MODULE: ./src/models/http_file.ts
var HttpFile = /** @class */ (function () {
    function HttpFile() {
    }
    return HttpFile;
}());


// CONCATENATED MODULE: ./src/models/index.ts








// EXTERNAL MODULE: external "negotiator"
var external_negotiator_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/handlers/request_handler_helper.ts
var request_handler_helper_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var request_handler_helper_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var request_handler_helper_RequestHandlerHelper = /** @class */ (function () {
    function RequestHandlerHelper() {
        this.wallInstances = [];
    }
    RequestHandlerHelper.prototype.isNullOrEmpty = function (value) {
        return Util.isNullOrEmpty(value);
    };
    RequestHandlerHelper.prototype.runWallOutgoing = function () {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            return request_handler_helper_generator(this, function (_a) {
                return [2 /*return*/, Promise.all(this.wallInstances.reverse().map(function (wallObj) {
                        if (wallObj.onOutgoing != null) {
                            return wallObj.onOutgoing();
                        }
                    }))];
            });
        });
    };
    RequestHandlerHelper.prototype.getContentTypeFromNegotiation = function (type) {
        var negotiator = new external_negotiator_(this.request);
        var availableTypes = this.getAvailableTypes_(type);
        if (availableTypes == null) {
            availableTypes = [type];
        }
        return negotiator.mediaType(availableTypes);
    };
    RequestHandlerHelper.prototype.getContentTypeFromNegotiationHavingMultipleTypes = function (types) {
        var negotiator = new external_negotiator_(this.request);
        return negotiator.mediaType(types);
    };
    RequestHandlerHelper.prototype.getAvailableTypes_ = function (type) {
        switch (type) {
            case MIME_TYPE.Json:
            case MIME_TYPE.Xml:
                return [MIME_TYPE.Json, MIME_TYPE.Xml];
            case MIME_TYPE.Html:
            case MIME_TYPE.Css:
            case MIME_TYPE.Csv:
            case MIME_TYPE.Js:
            case MIME_TYPE.Rtf:
            case MIME_TYPE.Text:
                return [MIME_TYPE.Text, MIME_TYPE.Html, MIME_TYPE.Js,
                    MIME_TYPE.Css, MIME_TYPE.Rtf, MIME_TYPE.Csv];
        }
        return null;
    };
    RequestHandlerHelper.prototype.onBadRequest = function (error) {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_1;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Global.errorHandler().onBadRequest(error)];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(HTTP_STATUS_CODE.BadRequest, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _b.sent();
                        this.response.end(JSON.stringify(ex_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onForbiddenRequest = function () {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_1;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Global.errorHandler().onForbiddenRequest()];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(HTTP_STATUS_CODE.Forbidden, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        this.response.end(JSON.stringify(err_1));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotAcceptableRequest = function () {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_2;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Global.errorHandler().onNotAcceptableRequest()];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(HTTP_STATUS_CODE.NotAcceptable, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _b.sent();
                        this.response.end(JSON.stringify(err_2));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotFound = function () {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_3;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Global.errorHandler().onNotFound(this.request.url)];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(HTTP_STATUS_CODE.NotFound, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _b.sent();
                        this.response.end(JSON.stringify(err_3));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onMethodNotAllowed = function (allowedMethods) {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_4;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Global.errorHandler().onMethodNotAllowed()];
                    case 1:
                        errMessage = _b.sent();
                        this.response.setHeader("Allow", allowedMethods.join(","));
                        this.response.writeHead(HTTP_STATUS_CODE.MethodNotAllowed, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _b.sent();
                        this.response.end(JSON.stringify(err_4));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onErrorOccured = function (error) {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, result, err_5;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (typeof error === 'string') {
                            error = {
                                message: error
                            };
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, new Global.errorHandler().onServerError(error)];
                    case 2:
                        result = _b.sent();
                        this.response.writeHead(HTTP_STATUS_CODE.InternalServerError, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(result);
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _b.sent();
                        this.response.end(JSON.stringify(err_5));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return RequestHandlerHelper;
}());


// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(3);

// EXTERNAL MODULE: external "etag"
var external_etag_ = __webpack_require__(9);

// EXTERNAL MODULE: external "fresh"
var external_fresh_ = __webpack_require__(10);

// CONCATENATED MODULE: ./src/handlers/file_handler.ts
var file_handler_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var file_handler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var file_handler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var file_handler_FileHandler = /** @class */ (function (_super) {
    file_handler_extends(FileHandler, _super);
    function FileHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileHandler.prototype.getFileInfoFromUrl_ = function (urlPath) {
        var splittedValue = urlPath.split("/");
        var fileInfo = {
            file: ""
        };
        if (splittedValue.length > 2 || !this.isNullOrEmpty(external_path_["parse"](urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
            return fileInfo;
        }
        fileInfo.folder = splittedValue[1];
        return fileInfo;
    };
    FileHandler.prototype.getFileStats_ = function (filePath) {
        return promise(function (res, rej) {
            external_fs_["lstat"](filePath, function (err, status) {
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
    };
    FileHandler.prototype.handleFileRequestFromAbsolutePath = function (absolutePath, fileType) {
        return file_handler_awaiter(this, void 0, void 0, function () {
            var fileInfo, ex_1;
            return file_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getFileStats_(absolutePath)];
                    case 1:
                        fileInfo = _a.sent();
                        if (fileInfo != null) {
                            if (fileInfo.isDirectory() === true) {
                                this.handleFileRequestForFolder_(absolutePath, fileInfo);
                            }
                            else {
                                this.sendFile_(absolutePath, fileType, fileInfo);
                            }
                        }
                        else {
                            this.onNotFound();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        this.onErrorOccured(ex_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    FileHandler.prototype.checkForFolderAllowAndReturnPath_ = function (urlPath) {
        var fileInfo = this.getFileInfoFromUrl_(urlPath);
        var getAbsPath = function () {
            var folder = Global.folders.find(function (qry) { return qry.alias === fileInfo.folder; });
            if (folder != null) {
                return external_path_["join"](folder.path, fileInfo.file);
            }
            return null;
        };
        var absPath = getAbsPath();
        if (absPath == null) {
            fileInfo.folder = "/";
            fileInfo.file = urlPath;
            absPath = getAbsPath();
        }
        return absPath;
    };
    FileHandler.prototype.handleFileRequest = function (urlPath) {
        var extension = external_path_["parse"](urlPath).ext;
        var absFilePath = this.checkForFolderAllowAndReturnPath_(urlPath);
        if (absFilePath != null) {
            this.handleFileRequestFromAbsolutePath(absFilePath, extension);
        }
        else {
            this.onNotFound();
        }
    };
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
    FileHandler.prototype.handleFileRequestForFolder_ = function (absolutePath, fileInfo) {
        return file_handler_awaiter(this, void 0, void 0, function () {
            var fileType, ex_2;
            return file_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        absolutePath = external_path_["join"](absolutePath, "index.html");
                        return [4 /*yield*/, this.getFileStats_(absolutePath)];
                    case 1:
                        fileInfo = _a.sent();
                        if (fileInfo != null) {
                            fileType = MIME_TYPE.Html;
                            this.sendFile_(absolutePath, fileType, fileInfo);
                        }
                        else {
                            this.onNotFound();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_2 = _a.sent();
                        this.onErrorOccured(ex_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    FileHandler.prototype.handleFileRequestForFolder = function (urlPath) {
        return file_handler_awaiter(this, void 0, void 0, function () {
            var absFilePath, fileInfo, ex_3;
            return file_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        absFilePath = this.checkForFolderAllowAndReturnPath_(urlPath);
                        if (!(absFilePath != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getFileStats_(absFilePath)];
                    case 1:
                        fileInfo = _a.sent();
                        if (fileInfo != null && fileInfo.isDirectory() === true) {
                            this.handleFileRequestForFolder_(absFilePath, fileInfo);
                        }
                        else {
                            this.onNotFound();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this.onNotFound();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        ex_3 = _a.sent();
                        this.onErrorOccured(ex_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, null];
                }
            });
        });
    };
    FileHandler.prototype.isClientHasFreshFile_ = function (lastModified, etagValue) {
        return external_fresh_(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    };
    FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        return file_handler_awaiter(this, void 0, void 0, function () {
            var _a, mimeType, negotiateMimeType, lastModified, eTagValue, readStream, ex_4;
            return file_handler_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        mimeType = void 0;
                        if (fileType[0] === '.') { // its extension
                            mimeType = getMimeTypeFromExtension(fileType);
                        }
                        else { // mime type
                            mimeType = fileType;
                        }
                        negotiateMimeType = this.getContentTypeFromNegotiation(mimeType);
                        if (negotiateMimeType != null) {
                            lastModified = fileInfo.mtime.toUTCString();
                            eTagValue = external_etag_(fileInfo, {
                                weak: Global.eTag.type === ETag_Type.Weak
                            });
                            if (this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                                this.response.statusCode = HTTP_STATUS_CODE.NotModified;
                                this.response.end();
                            }
                            else {
                                this.response.writeHead(HTTP_STATUS_CODE.Ok, (_a = {},
                                    _a[__ContentType] = mimeType,
                                    _a['Etag'] = eTagValue,
                                    _a['Last-Modified'] = lastModified,
                                    _a));
                                readStream = external_fs_["createReadStream"](filePath);
                                // Handle non-existent file
                                readStream.on('error', this.onErrorOccured.bind(this));
                                readStream.pipe(this.response);
                            }
                        }
                        else {
                            this.onNotAcceptableRequest();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        ex_4 = _b.sent();
                        this.onErrorOccured(ex_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    return FileHandler;
}(request_handler_helper_RequestHandlerHelper));


// CONCATENATED MODULE: ./src/handlers/controller_handler.ts
var controller_handler_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var controller_handler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var controller_handler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var controller_handler_ControllerHandler = /** @class */ (function (_super) {
    controller_handler_extends(ControllerHandler, _super);
    function ControllerHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerHandler.prototype.getDataBasedOnMimeType_ = function (mimeType) {
        switch (mimeType) {
            case MIME_TYPE.Json:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return JSON.stringify(this.controllerResult_.responseData);
                }
                return this.controllerResult_.responseData;
            case MIME_TYPE.Xml:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return xml_helper_XmlHelper.fromJsToXml(this.controllerResult_.responseData);
                }
                return this.controllerResult_.responseData;
            default:
                return this.controllerResult_.responseData;
        }
    };
    ControllerHandler.prototype.finishResponse_ = function (negotiateMimeType) {
        var _a;
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok, (_a = {}, _a[__ContentType] = negotiateMimeType, _a));
        this.response.end(this.getDataBasedOnMimeType_(negotiateMimeType));
    };
    ControllerHandler.prototype.handleRedirectResult_ = function () {
        this.response.setHeader('Location', this.controllerResult_.responseData);
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok, { 'Location': this.controllerResult_.responseData });
        this.response.end();
    };
    ControllerHandler.prototype.handleFormatResult_ = function () {
        var negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys(this.controllerResult_.responseFormat));
        var key = Object.keys(this.controllerResult_.responseFormat).find(function (qry) { return qry === negotiateMimeType; });
        if (key != null) {
            this.controllerResult_.responseData = this.controllerResult_.responseFormat[key]();
            this.finishResponse_(negotiateMimeType);
        }
        else {
            this.onNotAcceptableRequest();
        }
    };
    ControllerHandler.prototype.handleFileResult_ = function () {
        var result = this.controllerResult_;
        var parsedPath = external_path_["parse"](result.file.filePath);
        if (result.file.shouldDownload === true) {
            var fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
            this.response.setHeader("Content-Disposition", "attachment;filename=" + fileName + parsedPath.ext);
        }
        this.handleFileRequestFromAbsolutePath(result.file.filePath, parsedPath.ext);
    };
    ControllerHandler.prototype.onResultEvaluated = function (result) {
        return controller_handler_awaiter(this, void 0, void 0, function () {
            var contentType, negotiateMimeType;
            var _this = this;
            return controller_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = result || textResult("");
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _a.sent();
                        this.controllerResult_ = result;
                        if (this.cookieManager != null) {
                            this.cookieManager.responseCookie_.forEach(function (value) {
                                _this.response.setHeader(__SetCookie, value);
                            });
                        }
                        if (result.shouldRedirect == null || result.shouldRedirect === false) {
                            if (result.responseFormat == null) {
                                if (result.file == null) {
                                    contentType = result.contentType || MIME_TYPE.Text;
                                    negotiateMimeType = this.getContentTypeFromNegotiation(contentType);
                                    if (negotiateMimeType != null) {
                                        this.finishResponse_(negotiateMimeType);
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
                        else {
                            this.handleRedirectResult_();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return ControllerHandler;
}(file_handler_FileHandler));


// EXTERNAL MODULE: external "content-type"
var external_content_type_ = __webpack_require__(11);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(12);

// EXTERNAL MODULE: external "multiparty"
var external_multiparty_ = __webpack_require__(13);

// CONCATENATED MODULE: ./src/handlers/post_handler.ts
var post_handler_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var post_handler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var post_handler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var post_handler_PostHandler = /** @class */ (function (_super) {
    post_handler_extends(PostHandler, _super);
    function PostHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.file = new file_manager_FileManager();
        return _this;
    }
    PostHandler.prototype.getPostRawData_ = function () {
        var _this = this;
        var body = [];
        return promise(function (res, rej) {
            _this.request.on('data', function (chunk) {
                body.push(chunk);
            }).on('end', function () {
                var bodyBuffer = Buffer.concat(body);
                res(bodyBuffer);
            });
        });
    };
    PostHandler.prototype.parseMultiPartData_ = function () {
        var _this = this;
        return promise(function (res, rej) {
            new external_multiparty_["Form"]().parse(_this.request, function (err, fields, files) {
                if (err) {
                    rej(err);
                }
                else {
                    var result = {
                        field: {},
                        file: {}
                    };
                    for (var field in fields) {
                        result.field[field] = fields[field].length === 1 ? fields[field][0] : fields[field];
                    }
                    for (var file in files) {
                        result.file[file] = files[file].length === 1 ? files[file][0] : files[file];
                    }
                    res(result);
                }
            });
        });
    };
    PostHandler.prototype.parsePostData = function () {
        return post_handler_awaiter(this, void 0, void 0, function () {
            var postData, contentType, result, bodyBuffer, bodyDataAsString, ex_1;
            return post_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        postData = void 0;
                        contentType = this.request.headers[__ContentType] || this.request.headers["content-type"];
                        if (contentType != null) {
                            contentType = external_content_type_["parse"](contentType).type;
                        }
                        if (!(contentType === MIME_TYPE.FormMultiPart)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.parseMultiPartData_()];
                    case 1:
                        result = _a.sent();
                        postData = result.field;
                        this.file.files = result.file;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getPostRawData_()];
                    case 3:
                        bodyBuffer = _a.sent();
                        bodyDataAsString = bodyBuffer.toString();
                        switch (contentType) {
                            case MIME_TYPE.Json:
                                try {
                                    postData = JSON.parse(bodyDataAsString);
                                }
                                catch (ex) {
                                    /* tslint:disable-next-line */
                                    throw "Post data is invalid";
                                }
                                break;
                            case MIME_TYPE.Text:
                            case MIME_TYPE.Html:
                                postData = bodyDataAsString;
                                break;
                            case MIME_TYPE.FormUrlEncoded:
                                postData = external_querystring_["parse"](bodyDataAsString);
                                break;
                            case MIME_TYPE.Xml:
                                postData = new Global.xmlParser().parse(bodyDataAsString);
                                break;
                            default:
                                postData = {};
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, postData];
                    case 5:
                        ex_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(ex_1)];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return PostHandler;
}(controller_handler_ControllerHandler));


// CONCATENATED MODULE: ./src/handlers/request_handler.ts
var request_handler_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var request_handler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var request_handler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var request_handler_RequestHandler = /** @class */ (function (_super) {
    request_handler_extends(RequestHandler, _super);
    function RequestHandler(request, response) {
        var _this = _super.call(this) || this;
        _this.data_ = {};
        _this.request = request;
        _this.response = response;
        _this.registerEvents_();
        return _this;
    }
    RequestHandler.prototype.registerEvents_ = function () {
        this.request.on('error', this.onBadRequest.bind(this));
        this.response.on('error', this.onErrorOccured.bind(this));
    };
    RequestHandler.prototype.runWallIncoming_ = function () {
        var _this = this;
        return Promise.all(Global.walls.map(function (wall) {
            var wallObj = new wall();
            wallObj.cookie = _this.cookieManager;
            wallObj.session = _this.session_;
            wallObj.request = _this.request;
            wallObj.response = _this.response;
            wallObj.data = _this.data_;
            wallObj.query = _this.query_;
            _this.wallInstances.push(wallObj);
            return wallObj.onIncoming();
        }));
    };
    RequestHandler.prototype.runController_ = function () {
        var controllerObj = new this.routeMatchInfo_.controller();
        controllerObj.request = this.request;
        controllerObj.response = this.response;
        controllerObj.query = this.query_;
        controllerObj.body = this.body;
        controllerObj.session = this.session_;
        controllerObj.cookie = this.cookieManager;
        controllerObj.param = this.routeMatchInfo_.params;
        controllerObj.data = this.data_;
        controllerObj.file = this.file;
        controllerObj[this.routeMatchInfo_.actionInfo.workerName]().then(this.onResultEvaluated.bind(this)).catch(this.onErrorOccured.bind(this));
    };
    RequestHandler.prototype.executeShieldsProtection_ = function () {
        var _this = this;
        return Promise.all(this.routeMatchInfo_.shields.map(function (shield) {
            var shieldObj = new shield();
            shieldObj.cookie = _this.cookieManager;
            shieldObj.query = _this.query_;
            shieldObj.session = _this.session_;
            shieldObj.request = _this.request;
            shieldObj.response = _this.response;
            shieldObj.data = _this.data_;
            return shieldObj.protect();
        }));
    };
    RequestHandler.prototype.executeGuardsCheck_ = function (guards) {
        var _this = this;
        return Promise.all(guards.map(function (guard) {
            var guardObj = new guard();
            guardObj.body = _this.body;
            guardObj.cookie = _this.cookieManager;
            guardObj.query = _this.query_;
            guardObj.session = _this.session_;
            guardObj.request = _this.request;
            guardObj.response = _this.response;
            guardObj.data = _this.data_;
            guardObj.file = _this.file;
            guardObj.param = _this.routeMatchInfo_.params;
            return guardObj.check();
        }));
    };
    RequestHandler.prototype.parseCookieFromRequest_ = function () {
        if (Global.shouldParseCookie === true) {
            var rawCookie = (this.request.headers[__Cookie] || this.request.headers["cookie"]);
            var parsedCookies = parseCookie(rawCookie);
            this.session_ = new Global.sessionProvider();
            this.cookieManager = new CookieManager(parsedCookies);
            this.session_.sessionId = parsedCookies[Global.appSessionIdentifier];
            this.session_.cookie = this.cookieManager;
        }
    };
    RequestHandler.prototype.setPreHeader_ = function () {
        this.response.setHeader('X-Powered-By', Global.appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    };
    RequestHandler.prototype.execute_ = function () {
        return request_handler_awaiter(this, void 0, void 0, function () {
            var urlDetail, wallProtectionResult, responseByWall, pathUrl, requestMethod, actionInfo, shieldProtectionResult, responseByShield, guardsCheckResult, responseByGuard, ex_1;
            return request_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 11, , 12]);
                        urlDetail = external_url_["parse"](this.request.url, true);
                        this.query_ = urlDetail.query;
                        this.parseCookieFromRequest_();
                        return [4 /*yield*/, this.runWallIncoming_()];
                    case 1:
                        wallProtectionResult = _a.sent();
                        responseByWall = wallProtectionResult.find(function (qry) { return qry != null; });
                        if (!(responseByWall == null)) return [3 /*break*/, 9];
                        pathUrl = urlDetail.pathname;
                        requestMethod = this.request.method;
                        this.routeMatchInfo_ = parseAndMatchRoute(pathUrl.toLowerCase(), requestMethod);
                        if (!(this.routeMatchInfo_ == null)) return [3 /*break*/, 2];
                        // it may be a file or folder then
                        this.handleFileRequest(pathUrl);
                        return [3 /*break*/, 8];
                    case 2:
                        actionInfo = this.routeMatchInfo_.actionInfo;
                        if (!(actionInfo == null)) return [3 /*break*/, 3];
                        this.onMethodNotAllowed(this.routeMatchInfo_.allows);
                        return [3 /*break*/, 8];
                    case 3: return [4 /*yield*/, this.executeShieldsProtection_()];
                    case 4:
                        shieldProtectionResult = _a.sent();
                        responseByShield = shieldProtectionResult.find(function (qry) { return qry != null; });
                        if (!(responseByShield == null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.handlePostData()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.executeGuardsCheck_(actionInfo.guards)];
                    case 6:
                        guardsCheckResult = _a.sent();
                        responseByGuard = guardsCheckResult.find(function (qry) { return qry != null; });
                        if (responseByGuard == null) {
                            this.runController_();
                        }
                        else {
                            this.onResultEvaluated(responseByGuard);
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        this.onResultEvaluated(responseByShield);
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        this.onResultEvaluated(responseByWall);
                        _a.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        ex_1 = _a.sent();
                        this.onErrorOccured(ex_1);
                        return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandler.prototype.handlePostData = function () {
        return request_handler_awaiter(this, void 0, void 0, function () {
            var body, ex_2;
            return request_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.request.method === HTTP_METHOD.Get)) return [3 /*break*/, 1];
                        this.body = {};
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(Global.shouldParsePost === true)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.parsePostData()];
                    case 3:
                        body = _a.sent();
                        this.body = body;
                        return [3 /*break*/, 5];
                    case 4:
                        ex_2 = _a.sent();
                        this.onBadRequest(ex_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandler.prototype.handle = function () {
        return request_handler_awaiter(this, void 0, void 0, function () {
            return request_handler_generator(this, function (_a) {
                this.setPreHeader_();
                this.execute_();
                return [2 /*return*/];
            });
        });
    };
    return RequestHandler;
}(post_handler_PostHandler));


// CONCATENATED MODULE: ./src/handlers/index.ts







// CONCATENATED MODULE: ./src/decorators/worker.ts


// tslint:disable-next-line
var Worker = function (allowedMethods) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [
                HTTP_METHOD.Delete, HTTP_METHOD.Get, HTTP_METHOD.Post, HTTP_METHOD.Patch, HTTP_METHOD.Put
            ] : allowedMethods,
            guards: [],
            pattern: "/" + methodName.toLowerCase()
        };
        RouteHandler.addWorker(actionInfo, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/shields.ts

// tslint:disable-next-line
var Shields = function (shieldsValue) {
    return function (target) {
        var className = target.name;
        RouteHandler.addShields(shieldsValue, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/guards.ts

// tslint:disable-next-line
var Guards = function (value) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        RouteHandler.addGuards(value, className, methodName);
    });
};

// CONCATENATED MODULE: ./src/decorators/route.ts

// tslint:disable-next-line
var Route = function (format) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        RouteHandler.addPattern(format, className, methodName);
    });
};

// CONCATENATED MODULE: ./src/decorators/default_worker.ts


// tslint:disable-next-line
var DefaultWorker = function (allowedMethods) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [HTTP_METHOD.Get] : allowedMethods,
            guards: [],
            pattern: "/"
        };
        RouteHandler.addWorker(actionInfo, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/index.ts






// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport Controller */__webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* concated harmony reexport Shield */__webpack_require__.d(__webpack_exports__, "Shield", function() { return Shield; });
/* concated harmony reexport SessionProvider */__webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return session_provider_SessionProvider; });
/* concated harmony reexport Guard */__webpack_require__.d(__webpack_exports__, "Guard", function() { return Guard; });
/* concated harmony reexport ViewEngine */__webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return ViewEngine; });
/* concated harmony reexport Wall */__webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
/* concated harmony reexport XmlParser */__webpack_require__.d(__webpack_exports__, "XmlParser", function() { return XmlParser; });
/* concated harmony reexport Worker */__webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker; });
/* concated harmony reexport Shields */__webpack_require__.d(__webpack_exports__, "Shields", function() { return Shields; });
/* concated harmony reexport Guards */__webpack_require__.d(__webpack_exports__, "Guards", function() { return Guards; });
/* concated harmony reexport Route */__webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* concated harmony reexport DefaultWorker */__webpack_require__.d(__webpack_exports__, "DefaultWorker", function() { return DefaultWorker; });
/* concated harmony reexport MIME_TYPE */__webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return MIME_TYPE; });
/* concated harmony reexport HTTP_METHOD */__webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return HTTP_METHOD; });
/* concated harmony reexport HTTP_STATUS_CODE */__webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return HTTP_STATUS_CODE; });
/* concated harmony reexport ETag_Type */__webpack_require__.d(__webpack_exports__, "ETag_Type", function() { return ETag_Type; });
/* concated harmony reexport ERROR_TYPE */__webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
/* concated harmony reexport jsonResult */__webpack_require__.d(__webpack_exports__, "jsonResult", function() { return jsonResult; });
/* concated harmony reexport textResult */__webpack_require__.d(__webpack_exports__, "textResult", function() { return textResult; });
/* concated harmony reexport htmlResult */__webpack_require__.d(__webpack_exports__, "htmlResult", function() { return htmlResult; });
/* concated harmony reexport renderView */__webpack_require__.d(__webpack_exports__, "renderView", function() { return renderView; });
/* concated harmony reexport downloadResult */__webpack_require__.d(__webpack_exports__, "downloadResult", function() { return downloadResult; });
/* concated harmony reexport fileResult */__webpack_require__.d(__webpack_exports__, "fileResult", function() { return fileResult; });
/* concated harmony reexport redirectResult */__webpack_require__.d(__webpack_exports__, "redirectResult", function() { return redirectResult; });
/* concated harmony reexport viewResult */__webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
/* concated harmony reexport getViewFromFile */__webpack_require__.d(__webpack_exports__, "getViewFromFile", function() { return getViewFromFile; });
/* concated harmony reexport promise */__webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
/* concated harmony reexport LogHelper */__webpack_require__.d(__webpack_exports__, "LogHelper", function() { return log_helper_LogHelper; });
/* concated harmony reexport XmlHelper */__webpack_require__.d(__webpack_exports__, "XmlHelper", function() { return xml_helper_XmlHelper; });
/* concated harmony reexport getMimeTypeFromExtension */__webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return getMimeTypeFromExtension; });
/* concated harmony reexport parseAndMatchRoute */__webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return parseAndMatchRoute; });
/* concated harmony reexport parseCookie */__webpack_require__.d(__webpack_exports__, "parseCookie", function() { return parseCookie; });
/* concated harmony reexport ErrorHandler */__webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return error_handler_ErrorHandler; });
/* concated harmony reexport HttpCookie */__webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return HttpCookie; });
/* concated harmony reexport Fort */__webpack_require__.d(__webpack_exports__, "Fort", function() { return fort_Fort; });
/* concated harmony reexport Router */__webpack_require__.d(__webpack_exports__, "Router", function() { return router_Router; });
/* concated harmony reexport CookieManager */__webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* concated harmony reexport FileManager */__webpack_require__.d(__webpack_exports__, "FileManager", function() { return file_manager_FileManager; });
/* concated harmony reexport HttpFile */__webpack_require__.d(__webpack_exports__, "HttpFile", function() { return HttpFile; });
/* concated harmony reexport MustacheViewEngine */__webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return mustache_view_engine_MustacheViewEngine; });
/* concated harmony reexport MemorySessionProvider */__webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return MemorySessionProvider; });








/***/ })
/******/ ]);
//# sourceMappingURL=fort.js.map