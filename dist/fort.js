/*!
 * @license :fortjs - V1.11.1 - 30/12/2019
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

module.exports = require("url");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("etag");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fresh");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("content-type");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("multiparty");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("mustache");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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

// CONCATENATED MODULE: ./src/enums/data_type.ts
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Function"] = "function";
})(DATA_TYPE || (DATA_TYPE = {}));

// CONCATENATED MODULE: ./src/enums/index.ts







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

// CONCATENATED MODULE: ./src/fort_global.ts
var isDevelopment = process.env.NODE_ENV === 'development';
var isProduction = process.env.NODE_ENV === "production";
var FortGlobal = /** @class */ (function () {
    function FortGlobal() {
    }
    Object.defineProperty(FortGlobal, "isDevelopment", {
        get: function () {
            return isDevelopment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FortGlobal, "isProduction", {
        get: function () {
            return isProduction;
        },
        enumerable: true,
        configurable: true
    });
    FortGlobal.walls = [];
    return FortGlobal;
}());


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



var renderView;
if (FortGlobal.isProduction === true) {
    renderView = function (viewName, model) {
        return FortGlobal.viewEngine.render({
            view: viewName,
            model: model
        });
    };
}
else {
    renderView = function (viewName, model) {
        if (FortGlobal.viewEngine == null) {
            new log_helper_LogHelper(ERROR_TYPE.UndefinedViewEngine).throw();
        }
        return FortGlobal.viewEngine.render({
            view: viewName,
            model: model
        });
    };
}

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
var view_result_this = undefined;


var viewResult = function (viewName, model) { return __awaiter(view_result_this, void 0, void 0, function () {
    var viewData;
    return __generator(this, function (_a) {
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
var get_view_from_file_this = undefined;



var viewCache = {};
var getViewFromFile;
var readView = function (option) { return get_view_from_file_awaiter(get_view_from_file_this, void 0, void 0, function () {
    var pathOfView, result;
    return get_view_from_file_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pathOfView = external_path_["join"](FortGlobal.viewPath, option.fileLocation);
                return [4 /*yield*/, Object(external_fs_extra_["readFile"])(pathOfView, {
                        encoding: 'utf8'
                    })];
            case 1:
                result = _a.sent();
                if (option.mapView != null) {
                    return [2 /*return*/, option.mapView(result)];
                }
                return [2 /*return*/, result];
        }
    });
}); };
if (FortGlobal.isProduction === true) {
    getViewFromFile = function (option) {
        return get_view_from_file_awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return get_view_from_file_generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(viewCache[option.fileLocation] == null)) return [3 /*break*/, 2];
                        _a = viewCache;
                        _b = option.fileLocation;
                        return [4 /*yield*/, readView(option)];
                    case 1:
                        _a[_b] = _c.sent();
                        _c.label = 2;
                    case 2: return [2 /*return*/, viewCache[option.fileLocation]];
                }
            });
        });
    };
}
else {
    getViewFromFile = function (option) {
        return get_view_from_file_awaiter(this, void 0, void 0, function () {
            return get_view_from_file_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, readView(option)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
}

// CONCATENATED MODULE: ./src/helpers/promise.ts
var promise = function (callBack) {
    return new Promise(callBack);
};

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

// CONCATENATED MODULE: ./src/utils/is_null_or_empty.ts
var isNullOrEmpty = function (value) {
    return value == null || value.length === 0;
};

// CONCATENATED MODULE: ./src/utils/is_null.ts
var isNull = function (value) {
    return value == null;
};

// CONCATENATED MODULE: ./src/utils/is_array.ts
var isArray = function (value) {
    return Array.isArray(value);
};

// CONCATENATED MODULE: ./src/utils/index.ts




// CONCATENATED MODULE: ./src/handlers/route_handler.ts



var routerCollection = {};
var pushRouterIntoCollection = function (route) {
    var routeObj = new RouteInfo();
    routeObj.init(route);
    routerCollection[route.controllerName] = routeObj;
};
var getActionPattern = function (parentRoute, pattern) {
    return (isNull(parentRoute.path) || parentRoute.path === "*") ? pattern : "/" + parentRoute.path + pattern;
};
var route_handler_RouteHandler = /** @class */ (function () {
    function RouteHandler() {
    }
    Object.defineProperty(RouteHandler, "routerCollection", {
        get: function () {
            return routerCollection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteHandler, "routesAsArray", {
        get: function () {
            return Object.keys(routerCollection).map(function (workerName) {
                return routerCollection[workerName];
            });
        },
        enumerable: true,
        configurable: true
    });
    RouteHandler.findControllerFromPath = function (path) {
        for (var controllerName in routerCollection) {
            if (routerCollection[controllerName].path === path) {
                return routerCollection[controllerName];
            }
        }
    };
    RouteHandler.addToRouterCollection = function (value) {
        var route = routerCollection[value.controller.name];
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
            for (var workerName in route.workers) {
                var actionInfo = route.workers[workerName];
                actionInfo.pattern = getActionPattern(value, actionInfo.pattern);
            }
        }
    };
    RouteHandler.addShields = function (shields, className) {
        var route = routerCollection[className];
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
    };
    RouteHandler.addWorker = function (newWorker, className) {
        var _a;
        var workerName = newWorker.workerName;
        var route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
                workers: (_a = {},
                    _a[workerName] = newWorker,
                    _a),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            var savedAction = route.workers[workerName];
            if (savedAction == null) {
                newWorker.pattern = getActionPattern(route, newWorker.pattern);
                route.workers[workerName] = newWorker;
            }
            else {
                savedAction.methodsAllowed = newWorker.methodsAllowed;
                savedAction.pattern = route.path == null ? savedAction.pattern : "/" + route.path + savedAction.pattern;
            }
        }
    };
    RouteHandler.addGuards = function (guards, className, workerName) {
        var _a;
        var route = routerCollection[className];
        var pattern = workerName.toLowerCase();
        if (route == null) {
            pushRouterIntoCollection({
                workers: (_a = {},
                    _a[workerName] = {
                        workerName: workerName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    },
                    _a),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            var savedAction = route.workers[workerName];
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
    };
    RouteHandler.addPattern = function (pattern, className, workerName) {
        var _a;
        var route = routerCollection[className];
        if (route == null) {
            pushRouterIntoCollection({
                workers: (_a = {},
                    _a[workerName] = {
                        workerName: workerName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern,
                        values: []
                    },
                    _a),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            var savedAction = route.workers[workerName];
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
    };
    RouteHandler.addExpected = function (type, className, workerName, expectedValue) {
        var _a;
        for (var prop in expectedValue) {
            var propValue = expectedValue[prop];
            expectedValue[prop] = getDataType(propValue);
        }
        var isQuery = type === 'query';
        var pattern = workerName.toLowerCase();
        var router = routerCollection[className];
        var worker = {
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
                workers: (_a = {},
                    _a[workerName] = worker,
                    _a),
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            var savedAction = router.workers[workerName];
            if (savedAction == null) {
                router.workers[workerName] = worker;
            }
            else {
                savedAction.expectedQuery = worker.expectedQuery;
                savedAction.expectedBody = worker.expectedBody;
            }
        }
    };
    RouteHandler.getExpectedQuery = function (controllerName, workerName) {
        return routerCollection[controllerName].workers[workerName].expectedQuery;
    };
    RouteHandler.getExpectedBody = function (controllerName, workerName) {
        return routerCollection[controllerName].workers[workerName].expectedBody;
    };
    return RouteHandler;
}());


// CONCATENATED MODULE: ./src/helpers/parse_match_route.ts


var checkRouteInWorkerForDefaultRoute = function (route, httpMethod, urlParts) {
    var matchedRoute = {
        allowedHttpMethod: []
    };
    matchedRoute.controller = route.controller;
    matchedRoute.controllerName = route.controllerName;
    var urlPartLength = urlParts.length;
    var regex1 = /{(.*)}(?!.)/;
    var regex2 = /{(.*)}\.(\w+)(?!.)/;
    Object.keys(route.workers).every(function (workerName) {
        var routeActionInfo = route.workers[workerName];
        var patternSplit = routeActionInfo.pattern.split("/");
        if (urlPartLength === patternSplit.length) {
            var isMatched_1 = true;
            var params_1 = {};
            urlParts.every(function (urlPart, i) {
                var regMatch1 = patternSplit[i].match(regex1);
                var regMatch2 = patternSplit[i].match(regex2);
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
                if (routeActionInfo.methodsAllowed.indexOf(httpMethod) >= 0) {
                    matchedRoute.workerInfo = routeActionInfo;
                    matchedRoute.params = params_1;
                    matchedRoute.shields = route.shields;
                    return false;
                }
                else {
                    matchedRoute.allowedHttpMethod = matchedRoute.allowedHttpMethod.concat(routeActionInfo.methodsAllowed);
                }
            }
        }
        return true;
    });
    if (matchedRoute.workerInfo == null && matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    return matchedRoute;
};
var checkRouteInWorker = function (route, httpMethod, urlParts) {
    var matchedRoute = {
        allowedHttpMethod: []
    };
    matchedRoute.controller = route.controller;
    matchedRoute.controllerName = route.controllerName;
    var urlPartLength = urlParts.length;
    if (urlPartLength === 2) { // url does not have action path
        var pattern_1 = "/" + route.path + "/";
        Object.keys(route.workers).every(function (workerName) {
            var worker = route.workers[workerName];
            if (worker.pattern === pattern_1) {
                if (worker.methodsAllowed.indexOf(httpMethod) >= 0) {
                    matchedRoute.workerInfo = worker;
                    matchedRoute.params = {};
                    matchedRoute.shields = route.shields;
                    return false;
                }
                else {
                    matchedRoute.allowedHttpMethod = matchedRoute.allowedHttpMethod.concat(worker.methodsAllowed);
                }
            }
            return true;
        });
    }
    else {
        var regex1_1 = /{(.*)}(?!.)/;
        var regex2_1 = /{(.*)}\.(\w+)(?!.)/;
        Object.keys(route.workers).every(function (workerName) {
            var worker = route.workers[workerName];
            var patternSplit = worker.pattern.split("/");
            if (urlPartLength === patternSplit.length) {
                var isMatched_2 = true;
                var params_2 = {};
                urlParts.every(function (urlPart, i) {
                    var regMatch1 = patternSplit[i].match(regex1_1);
                    var regMatch2 = patternSplit[i].match(regex2_1);
                    if (regMatch1 != null) {
                        params_2[regMatch1[1]] = urlPart;
                    }
                    else if (regMatch2 != null) {
                        var splitByDot = urlPart.split(".");
                        if (splitByDot[1] === regMatch2[2]) {
                            params_2[regMatch2[1]] = splitByDot[0];
                        }
                        else {
                            isMatched_2 = false;
                            return false;
                        }
                    }
                    else if (urlPart !== patternSplit[i]) {
                        isMatched_2 = false;
                        return false;
                    }
                    return true;
                });
                if (isMatched_2 === true) {
                    if (worker.methodsAllowed.indexOf(httpMethod) >= 0) {
                        matchedRoute.workerInfo = worker;
                        matchedRoute.params = params_2;
                        matchedRoute.shields = route.shields;
                        return false;
                    }
                    else {
                        matchedRoute.allowedHttpMethod = matchedRoute.allowedHttpMethod.concat(worker.methodsAllowed);
                    }
                }
            }
            return true;
        });
    }
    if (matchedRoute.workerInfo == null && matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    return matchedRoute;
};
var parseAndMatchRoute = function (url, httpMethod) {
    if (url !== "/") {
        url = removeLastSlash(url);
    }
    var urlParts = url.split("/");
    var firstPart = urlParts[1];
    var route = route_handler_RouteHandler.findControllerFromPath(firstPart);
    if (route == null) {
        route = route_handler_RouteHandler.findControllerFromPath("*");
        return checkRouteInWorkerForDefaultRoute(route, httpMethod, urlParts);
    }
    else {
        return checkRouteInWorker(route, httpMethod, urlParts);
    }
};

// CONCATENATED MODULE: ./src/helpers/parse_cookie.ts

var parseCookie = function (cookie) {
    var value = {};
    if (!isNullOrEmpty(cookie)) {
        cookie.split(';').forEach(function (val) {
            var parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
};

// CONCATENATED MODULE: ./src/helpers/json_helper.ts
var JsonHelper = /** @class */ (function () {
    function JsonHelper() {
    }
    JsonHelper.parse = function (value) {
        try {
            return JSON.parse(value);
        }
        catch (ex) {
            // tslint:disable-next-line
            throw {
                message: "Post data is invalid"
            };
        }
    };
    JsonHelper.stringify = function (value) {
        return JSON.stringify(value);
    };
    return JsonHelper;
}());


// CONCATENATED MODULE: ./src/helpers/remove_last_slash.ts
var removeLastSlash = function (url) {
    var urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        return url.substr(0, urlLength - 1);
    }
    return url;
};

// CONCATENATED MODULE: ./src/helpers/remove_first_slash.ts
var removeFirstSlash = function (value) {
    // remove / from string at 0th index
    if (value[0] === "/") {
        return value.substr(1);
    }
    return value;
};

// CONCATENATED MODULE: ./src/helpers/reverse_loop.ts
var reverseLoop = function (values, cb) {
    for (var length_1 = values.length, i = length_1 - 1; i >= 0; i--) {
        cb(values[i], i);
    }
};

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

// CONCATENATED MODULE: ./src/helpers/compar_expected_and_remove_unnecessary.ts


var compareExpectedAndRemoveUnnecessary = function (expected, actual, isQuery) {
    var result = {};
    for (var prop in expected) {
        if (isQuery === true && expected[prop] === DATA_TYPE.Number) {
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
var getClassName = function (target) {
    return target.name || (target.constructor && target.constructor.name);
};

// CONCATENATED MODULE: ./src/helpers/remove_method_and_null_from_object.ts


var removeMethodAndNullFromObject = function (value) {
    var outputValue = {};
    for (var prop in value) {
        var type = getDataType(value[prop]);
        if (!(value[prop] == null || type === DATA_TYPE.Function)) {
            outputValue[prop] = value[prop];
        }
    }
    return outputValue;
};

// CONCATENATED MODULE: ./src/helpers/get_result_based_on_mime.ts

var getResultBasedOnMiMe;
function setResultMapper(mapper) {
    if (mapper) {
        getResultBasedOnMiMe = function (type, result, callBack) {
            return new mapper().map(type, result, callBack);
        };
    }
    else {
        getResultBasedOnMiMe = function (type, result, callBack) {
            switch (type) {
                case MIME_TYPE.Json:
                case MIME_TYPE.Text:
                case MIME_TYPE.Html:
                case MIME_TYPE.Xml:
                    if (typeof result === 'object' === true) {
                        callBack(MIME_TYPE.Json);
                        return JSON.stringify(result);
                    }
            }
            return result;
        };
    }
}

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


// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(4);

// CONCATENATED MODULE: ./src/constant.ts
/* tslint:disable */
var __ContentType = "Content-Type";
var __AppName = "fort";
var __Cookie = "Cookie";
var __SetCookie = 'Set-Cookie';
var __CurrentPath = process.cwd();
var __ContentLength = "Content-Length";
var __Constructor = "const_constructor";

// EXTERNAL MODULE: external "negotiator"
var external_negotiator_ = __webpack_require__(2);

// CONCATENATED MODULE: ./src/handlers/injector_handler.ts

// this stores information of injector values that are available per class & worker
var injectorStoreInfos = [];
// this stores injector values
var injectorValues = [];
// this stores the singletons name & their respective index in injector values
var singletons = {};
var injector_handler_InjectorHandler = /** @class */ (function () {
    function InjectorHandler() {
    }
    InjectorHandler.addWorkerValue = function (className, methodName, paramIndex, paramValue, shouldFindIndex) {
        var _a;
        if (shouldFindIndex === void 0) { shouldFindIndex = true; }
        if (shouldFindIndex === true) {
            var paramValueIndex = injectorValues.indexOf(paramValue);
            if (paramValueIndex < 0) {
                paramValue = injectorValues.push(paramValue) - 1;
            }
            else {
                paramValue = paramValueIndex;
            }
        }
        var savedValue = injectorStoreInfos.find(function (x) { return x.className === className; });
        var value = {
            className: className,
            methods: (_a = {},
                _a[methodName] = [],
                _a)
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
    };
    InjectorHandler.getConstructorValues = function (className) {
        return this.getMethodValues(className, __Constructor);
    };
    InjectorHandler.getMethodValues = function (className, methodName) {
        var savedValue = injectorStoreInfos.find(function (qry) { return qry.className === className; });
        if (savedValue != null) {
            var methodArgs = savedValue.methods[methodName];
            if (methodArgs != null) {
                return methodArgs.map(function (injectorValueIndex) {
                    return injectorValues[injectorValueIndex];
                });
            }
        }
        return [];
    };
    InjectorHandler.addSingleton = function (className, methodName, paramIndex, paramValue) {
        var singletonClassName = paramValue.name;
        if (singletonClassName) {
            if (singletons[singletonClassName] == null) {
                singletons[singletonClassName] = InjectorHandler.addWorkerValue(className, methodName, paramIndex, new paramValue());
            }
            else {
                InjectorHandler.addWorkerValue(className, methodName, paramIndex, singletons[singletonClassName], false);
            }
        }
    };
    return InjectorHandler;
}());


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
    RequestHandlerHelper.prototype.runWallOutgoing = function () {
        var outgoingResults = [];
        reverseLoop(this.wallInstances, function (value) {
            var methodArgsValues = injector_handler_InjectorHandler.getMethodValues(value.constructor.name, 'onOutgoing');
            outgoingResults.push(value.onOutgoing(methodArgsValues));
        });
        return Promise.all(outgoingResults);
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
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new FortGlobal.errorHandler().onBadRequest(error)];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_1)];
                    case 4:
                        this.response.writeHead(HTTP_STATUS_CODE.BadRequest, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onForbiddenRequest = function () {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_2;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new FortGlobal.errorHandler().onForbiddenRequest()];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_2)];
                    case 4:
                        this.response.writeHead(HTTP_STATUS_CODE.Forbidden, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotAcceptableRequest = function () {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_3;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new FortGlobal.errorHandler().onNotAcceptableRequest()];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_3 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_3)];
                    case 4:
                        this.response.writeHead(HTTP_STATUS_CODE.NotAcceptable, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotFound = function () {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_4;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new FortGlobal.errorHandler().onNotFound(this.request.url)];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_4 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_4)];
                    case 4:
                        this.response.writeHead(HTTP_STATUS_CODE.NotFound, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onMethodNotAllowed = function (allowedMethods) {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_5;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new FortGlobal.errorHandler().onMethodNotAllowed()];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_5 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_5)];
                    case 4:
                        this.response.setHeader("Allow", allowedMethods.join(","));
                        this.response.writeHead(HTTP_STATUS_CODE.MethodNotAllowed, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onErrorOccured = function (error) {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, _b, errMessage, ex_6;
            return request_handler_helper_generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (typeof error === 'string') {
                            error = {
                                message: error
                            };
                        }
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, new FortGlobal.errorHandler().onServerError(error)];
                    case 3:
                        errMessage = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        ex_6 = _c.sent();
                        this.response.writeHead(HTTP_STATUS_CODE.InternalServerError, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end(JsonHelper.stringify(ex_6));
                        return [2 /*return*/];
                    case 5:
                        this.response.writeHead(HTTP_STATUS_CODE.InternalServerError, (_b = {}, _b[__ContentType] = MIME_TYPE.Html, _b));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onRequestOptions = function (allowedMethods) {
        return request_handler_helper_awaiter(this, void 0, void 0, function () {
            var _a, ex_7;
            return request_handler_helper_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_7 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_7)];
                    case 3:
                        this.response.setHeader("Allow", allowedMethods.join(","));
                        this.response.writeHead(HTTP_STATUS_CODE.Ok, (_a = {}, _a[__ContentType] = MIME_TYPE.Html, _a));
                        this.response.end("");
                        return [2 /*return*/];
                }
            });
        });
    };
    return RequestHandlerHelper;
}());


// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(3);

// EXTERNAL MODULE: external "etag"
var external_etag_ = __webpack_require__(5);

// EXTERNAL MODULE: external "fresh"
var external_fresh_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/handlers/file_handler.ts
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










var file_handler_FileHandler = /** @class */ (function (_super) {
    __extends(FileHandler, _super);
    function FileHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileHandler.prototype.getFileInfoFromUrl_ = function (urlPath) {
        var splittedValue = urlPath.split("/");
        var fileInfo = {
            file: ""
        };
        if (splittedValue.length > 2 || !isNullOrEmpty(external_path_["parse"](urlPath).ext)) {
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
        var _this = this;
        this.getFileStats_(absolutePath).then(function (fileInfo) {
            if (fileInfo != null) {
                if (fileInfo.isDirectory() === true) {
                    _this.handleFileRequestForPath_(absolutePath);
                }
                else {
                    _this.sendFile_(absolutePath, fileType, fileInfo);
                }
            }
            else {
                _this.onNotFound();
            }
        }).catch(function (ex) {
            _this.onErrorOccured(ex);
        });
    };
    FileHandler.prototype.checkForFolderAllowAndReturnPath_ = function (urlPath) {
        var fileInfo = this.getFileInfoFromUrl_(urlPath);
        var getAbsPath = function () {
            var folder = FortGlobal.folders.find(function (qry) { return qry.alias === fileInfo.folder; });
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
    FileHandler.prototype.handleFileRequestForPath_ = function (absolutePath) {
        var _this = this;
        absolutePath = external_path_["join"](absolutePath, "index.html");
        this.getFileStats_(absolutePath).then(function (fileInfo) {
            if (fileInfo != null) {
                var fileType = MIME_TYPE.Html;
                _this.sendFile_(absolutePath, fileType, fileInfo);
            }
            else {
                _this.onNotFound();
            }
        }).catch(this.onErrorOccured.bind(this));
    };
    FileHandler.prototype.isClientHasFreshFile_ = function (lastModified, etagValue) {
        return external_fresh_(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    };
    FileHandler.prototype.sendFileAsResponse_ = function (filePath, mimeType) {
        var _a;
        this.response.writeHead(HTTP_STATUS_CODE.Ok, (_a = {},
            _a[__ContentType] = mimeType,
            _a));
        var readStream = external_fs_["createReadStream"](filePath);
        // Handle non-existent file
        readStream.on('error', this.onErrorOccured.bind(this));
        readStream.pipe(this.response);
    };
    FileHandler.prototype.getMimeTypeFromFileType_ = function (fileType) {
        return fileType[0] === '.' ? getMimeTypeFromExtension(fileType) :
            fileType;
    };
    return FileHandler;
}(request_handler_helper_RequestHandlerHelper));

if (FortGlobal.isProduction) {
    file_handler_FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        var _this = this;
        this.runWallOutgoing().then(function () {
            var lastModified = fileInfo.mtime.toUTCString();
            var eTagValue = external_etag_(fileInfo, {
                weak: FortGlobal.eTag.type === ETag_Type.Weak
            });
            if (_this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                _this.response.statusCode = HTTP_STATUS_CODE.NotModified;
                _this.response.end();
            }
            else {
                _this.response.setHeader('Etag', eTagValue);
                _this.response.setHeader('Last-Modified', lastModified);
                _this.sendFileAsResponse_(filePath, _this.getMimeTypeFromFileType_(fileType));
            }
        }).catch(this.onErrorOccured.bind(this));
    };
}
else {
    file_handler_FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        var _this = this;
        this.runWallOutgoing().then(function () {
            _this.sendFileAsResponse_(filePath, _this.getMimeTypeFromFileType_(fileType));
        }).catch(this.onErrorOccured.bind(this));
    };
}

// CONCATENATED MODULE: ./src/handlers/controller_result_handler.ts
var controller_result_handler_extends = (undefined && undefined.__extends) || (function () {
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
var controller_result_handler_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var controller_result_handler_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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





var controller_result_handler_ControllerResultHandler = /** @class */ (function (_super) {
    controller_result_handler_extends(ControllerResultHandler, _super);
    function ControllerResultHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerResultHandler.prototype.endResponse_ = function (negotiateMimeType) {
        var _a;
        var data;
        try {
            data = getResultBasedOnMiMe(negotiateMimeType, this.controllerResult_.responseData, function (type) {
                negotiateMimeType = type;
            });
        }
        catch (ex) {
            this.onErrorOccured(ex);
            return;
        }
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok, (_a = {}, _a[__ContentType] = negotiateMimeType, _a));
        this.response.end(data);
    };
    ControllerResultHandler.prototype.handleRedirectResult_ = function () {
        this.response.setHeader('Location', this.controllerResult_.responseData);
        this.response.writeHead(this.controllerResult_.statusCode || HTTP_STATUS_CODE.Ok, { 'Location': this.controllerResult_.responseData });
        this.response.end();
    };
    ControllerResultHandler.prototype.handleFormatResult_ = function () {
        var negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys(this.controllerResult_.responseFormat));
        var key = Object.keys(this.controllerResult_.responseFormat).find(function (qry) { return qry === negotiateMimeType; });
        if (key != null) {
            this.controllerResult_.responseData = this.controllerResult_.responseFormat[key]();
            this.endResponse_(negotiateMimeType);
        }
        else {
            this.onNotAcceptableRequest();
        }
    };
    ControllerResultHandler.prototype.handleFileResult_ = function () {
        var result = this.controllerResult_;
        var parsedPath = external_path_["parse"](result.file.filePath);
        if (result.file.shouldDownload === true) {
            var fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
            this.response.setHeader("Content-Disposition", "attachment;filename=" + fileName + parsedPath.ext);
        }
        this.handleFileRequestFromAbsolutePath(result.file.filePath, parsedPath.ext);
    };
    ControllerResultHandler.prototype.onTerminationFromWall = function (result) {
        this.handleFinalResult_(result);
    };
    ControllerResultHandler.prototype.handleFinalResult_ = function (result) {
        var _this = this;
        result = result || textResult("");
        this.controllerResult_ = result;
        this.cookieManager.responseCookie_.forEach(function (value) {
            _this.response.setHeader(__SetCookie, value);
        });
        if (result.shouldRedirect === true) {
            this.handleRedirectResult_();
        }
        else {
            if (result.responseFormat == null) {
                if (result.file == null) {
                    var contentType = result.contentType || MIME_TYPE.Text;
                    var negotiateMimeType = this.getContentTypeFromNegotiation(contentType);
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
    };
    ControllerResultHandler.prototype.onResultFromController = function (result) {
        return controller_result_handler_awaiter(this, void 0, void 0, function () {
            var ex_1;
            return controller_result_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        this.onErrorOccured(ex_1);
                        return [2 /*return*/];
                    case 3:
                        this.handleFinalResult_(result);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ControllerResultHandler;
}(file_handler_FileHandler));


// EXTERNAL MODULE: external "content-type"
var external_content_type_ = __webpack_require__(7);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(8);

// EXTERNAL MODULE: external "multiparty"
var external_multiparty_ = __webpack_require__(9);

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostHandler.prototype.getPostRawData_ = function () {
        var _this = this;
        var body = [];
        return promise(function (res, rej) {
            _this.request.on('data', function (chunk) {
                body.push(chunk);
            }).on('end', function () {
                var bodyBuffer = Buffer.concat(body);
                res(bodyBuffer.toString());
            }).on("error", function (err) {
                rej(err);
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
            var postData, contentType, result, bodyDataAsString;
            return post_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentType = this.request.headers[__ContentType] || this.request.headers["content-type"];
                        if (contentType != null) {
                            contentType = external_content_type_["parse"](contentType).type;
                        }
                        if (!(contentType === MIME_TYPE.FormMultiPart)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.parseMultiPartData_()];
                    case 1:
                        result = _a.sent();
                        postData = result.field;
                        this.file = new file_manager_FileManager(result.file);
                        return [3 /*break*/, 4];
                    case 2:
                        this.file = new file_manager_FileManager({});
                        return [4 /*yield*/, this.getPostRawData_()];
                    case 3:
                        bodyDataAsString = _a.sent();
                        switch (contentType) {
                            case MIME_TYPE.Json:
                                postData = JsonHelper.parse(bodyDataAsString);
                                break;
                            case MIME_TYPE.Text:
                            case MIME_TYPE.Html:
                                postData = bodyDataAsString;
                                break;
                            case MIME_TYPE.FormUrlEncoded:
                                postData = external_querystring_["parse"](bodyDataAsString);
                                break;
                            case MIME_TYPE.Xml:
                                postData = new FortGlobal.xmlParser().parse(bodyDataAsString);
                                break;
                            default:
                                postData = {};
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, postData];
                }
            });
        });
    };
    return PostHandler;
}(controller_result_handler_ControllerResultHandler));


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
    RequestHandler.prototype.executeWallIncoming_ = function () {
        var _this = this;
        return promise(function (res) {
            var index = 0;
            var wallLength = FortGlobal.walls.length;
            var executeWallIncomingByIndex = function () { return request_handler_awaiter(_this, void 0, void 0, function () {
                var wall, constructorArgsValues, wallObj, methodArgsValues, result, ex_1;
                return request_handler_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(wallLength > index)) return [3 /*break*/, 5];
                            wall = FortGlobal.walls[index++];
                            constructorArgsValues = injector_handler_InjectorHandler.getConstructorValues(wall.name);
                            wallObj = new (wall.bind.apply(wall, [void 0].concat(constructorArgsValues)))();
                            wallObj.cookie = this.cookieManager;
                            wallObj.session = this.session_;
                            wallObj.request = this.request;
                            wallObj.response = this.response;
                            wallObj.data = this.data_;
                            wallObj.query = this.query_;
                            this.wallInstances.push(wallObj);
                            methodArgsValues = injector_handler_InjectorHandler.getMethodValues(wall.name, 'onIncoming');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, wallObj.onIncoming.apply(wallObj, methodArgsValues)];
                        case 2:
                            result = _a.sent();
                            if (result == null) {
                                executeWallIncomingByIndex();
                            }
                            else {
                                res(false);
                                this.onTerminationFromWall(result);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            ex_1 = _a.sent();
                            this.onErrorOccured(ex_1);
                            res(false);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            res(true);
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
            executeWallIncomingByIndex();
        });
    };
    RequestHandler.prototype.executeShieldsProtection_ = function () {
        var _this = this;
        return promise(function (res) {
            var index = 0;
            var shieldLength = _this.routeMatchInfo_.shields.length;
            var executeShieldByIndex = function () { return request_handler_awaiter(_this, void 0, void 0, function () {
                var shield, constructorArgsValues, shieldObj, methodArgsValues, result, ex_2;
                return request_handler_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(shieldLength > index)) return [3 /*break*/, 5];
                            shield = this.routeMatchInfo_.shields[index++];
                            constructorArgsValues = injector_handler_InjectorHandler.getConstructorValues(shield.name);
                            shieldObj = new (shield.bind.apply(shield, [void 0].concat(constructorArgsValues)))();
                            shieldObj.cookie = this.cookieManager;
                            shieldObj.query = this.query_;
                            shieldObj.session = this.session_;
                            shieldObj.request = this.request;
                            shieldObj.response = this.response;
                            shieldObj.data = this.data_;
                            shieldObj.workerName = this.routeMatchInfo_.workerInfo.workerName;
                            methodArgsValues = injector_handler_InjectorHandler.getMethodValues(shield.name, 'protect');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, shieldObj.protect.apply(shieldObj, methodArgsValues)];
                        case 2:
                            result = _a.sent();
                            if (result == null) {
                                executeShieldByIndex();
                            }
                            else {
                                res(false);
                                this.onResultFromController(result);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            ex_2 = _a.sent();
                            this.onErrorOccured(ex_2);
                            res(false);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            res(true);
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
            executeShieldByIndex();
        });
    };
    RequestHandler.prototype.executeGuardsCheck_ = function (guards) {
        var _this = this;
        return promise(function (res) {
            var index = 0;
            var shieldLength = guards.length;
            var executeGuardByIndex = function () { return request_handler_awaiter(_this, void 0, void 0, function () {
                var guard, constructorArgsValues, guardObj, methodArgsValues, result, ex_3;
                return request_handler_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(shieldLength > index)) return [3 /*break*/, 5];
                            guard = guards[index++];
                            constructorArgsValues = injector_handler_InjectorHandler.getConstructorValues(guard.name);
                            guardObj = new (guard.bind.apply(guard, [void 0].concat(constructorArgsValues)))();
                            guardObj.body = this.body;
                            guardObj.cookie = this.cookieManager;
                            guardObj.query = this.query_;
                            guardObj.session = this.session_;
                            guardObj.request = this.request;
                            guardObj.response = this.response;
                            guardObj.data = this.data_;
                            guardObj.file = this.file;
                            guardObj.param = this.routeMatchInfo_.params;
                            methodArgsValues = injector_handler_InjectorHandler.getMethodValues(guard.name, 'check');
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, guardObj.check.apply(guardObj, methodArgsValues)];
                        case 2:
                            result = _a.sent();
                            if (result == null) {
                                executeGuardByIndex();
                            }
                            else {
                                res(false);
                                this.onResultFromController(result);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            ex_3 = _a.sent();
                            this.onErrorOccured(ex_3);
                            res(false);
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 6];
                        case 5:
                            res(true);
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
            executeGuardByIndex();
        });
    };
    RequestHandler.prototype.parseCookieFromRequest_ = function () {
        if (FortGlobal.shouldParseCookie === true) {
            var rawCookie = (this.request.headers[__Cookie] || this.request.headers["cookie"]);
            var parsedCookies = void 0;
            try {
                parsedCookies = parseCookie(rawCookie);
            }
            catch (ex) {
                this.onErrorOccured(ex);
                return false;
            }
            this.session_ = new FortGlobal.sessionProvider();
            this.session_.cookie = this.cookieManager = new CookieManager(parsedCookies);
            this.session_.sessionId = parsedCookies[FortGlobal.appSessionIdentifier];
        }
        else {
            this.cookieManager = new CookieManager({});
        }
        return true;
    };
    RequestHandler.prototype.setPreHeader_ = function () {
        this.response.setHeader('X-Powered-By', FortGlobal.appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    };
    RequestHandler.prototype.checkExpectedQuery_ = function () {
        var expectedQuery = route_handler_RouteHandler.getExpectedQuery(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedQuery != null) {
            this.query_ = compareExpectedAndRemoveUnnecessary(expectedQuery, this.query_, true);
        }
    };
    RequestHandler.prototype.checkExpectedBody_ = function () {
        var expectedBody = route_handler_RouteHandler.getExpectedBody(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedBody != null) {
            this.body = compareExpectedAndRemoveUnnecessary(expectedBody, this.body, false);
        }
    };
    RequestHandler.prototype.onRouteMatched_ = function () {
        return request_handler_awaiter(this, void 0, void 0, function () {
            var actionInfo, shouldExecuteNextComponent;
            return request_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionInfo = this.routeMatchInfo_.workerInfo;
                        if (!(actionInfo == null)) return [3 /*break*/, 1];
                        if (this.request.method === HTTP_METHOD.Options) {
                            this.onRequestOptions(this.routeMatchInfo_.allowedHttpMethod);
                        }
                        else {
                            this.onMethodNotAllowed(this.routeMatchInfo_.allowedHttpMethod);
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        this.checkExpectedQuery_();
                        if (this.query_ == null) {
                            this.onBadRequest({
                                message: "Bad query string data - query string data does not match with expected value"
                            });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.executeShieldsProtection_()];
                    case 2:
                        shouldExecuteNextComponent = _a.sent();
                        if (!(shouldExecuteNextComponent === true)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.handlePostData()];
                    case 3:
                        shouldExecuteNextComponent = _a.sent();
                        if (!(shouldExecuteNextComponent === true)) return [3 /*break*/, 5];
                        this.checkExpectedBody_();
                        if (this.body == null) {
                            this.onBadRequest({
                                message: "Bad body data - body data does not match with expected value"
                            });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.executeGuardsCheck_(actionInfo.guards)];
                    case 4:
                        shouldExecuteNextComponent = _a.sent();
                        if (shouldExecuteNextComponent === true) {
                            this.runController_();
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandler.prototype.execute_ = function () {
        return request_handler_awaiter(this, void 0, void 0, function () {
            var urlDetail, shouldExecuteNextProcess, pathUrl, requestMethod;
            return request_handler_generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlDetail = external_url_["parse"](this.request.url, true);
                        this.query_ = urlDetail.query;
                        shouldExecuteNextProcess = this.parseCookieFromRequest_();
                        if (!(shouldExecuteNextProcess === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.executeWallIncoming_()];
                    case 1:
                        shouldExecuteNextProcess = _a.sent();
                        if (shouldExecuteNextProcess === true) {
                            pathUrl = urlDetail.pathname;
                            requestMethod = this.request.method;
                            try {
                                this.routeMatchInfo_ = parseAndMatchRoute(pathUrl.toLowerCase(), requestMethod);
                            }
                            catch (ex) {
                                this.onErrorOccured(ex);
                                return [2 /*return*/];
                            }
                            if (this.routeMatchInfo_ == null) { // no route matched
                                // it may be a file or folder then
                                this.handleFileRequest(pathUrl);
                            }
                            else {
                                this.onRouteMatched_();
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RequestHandler.prototype.handlePostData = function () {
        return request_handler_awaiter(this, void 0, void 0, function () {
            var _a, ex_4;
            return request_handler_generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.request.method === HTTP_METHOD.Get)) return [3 /*break*/, 1];
                        this.body = {};
                        this.file = new file_manager_FileManager({});
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(FortGlobal.shouldParsePost === true)) return [3 /*break*/, 5];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        _a = this;
                        return [4 /*yield*/, this.parsePostData()];
                    case 3:
                        _a.body = _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        ex_4 = _b.sent();
                        this.onBadRequest(ex_4);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/, true];
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
    RequestHandler.prototype.setControllerProps_ = function () {
        var _a;
        var constructorValues = injector_handler_InjectorHandler.getConstructorValues(this.routeMatchInfo_.controller.name);
        var controllerObj = new ((_a = this.routeMatchInfo_.controller).bind.apply(_a, [void 0].concat(constructorValues)))();
        controllerObj.request = this.request;
        controllerObj.response = this.response;
        controllerObj.query = this.query_;
        controllerObj.body = this.body;
        controllerObj.session = this.session_;
        controllerObj.cookie = this.cookieManager;
        controllerObj.param = this.routeMatchInfo_.params;
        controllerObj.data = this.data_;
        controllerObj.file = this.file;
        var methodArgsValues = injector_handler_InjectorHandler.getMethodValues(this.routeMatchInfo_.controller.name, this.routeMatchInfo_.workerInfo.workerName);
        return controllerObj[this.routeMatchInfo_.workerInfo.workerName].apply(controllerObj, methodArgsValues);
    };
    return RequestHandler;
}(post_handler_PostHandler));

if (FortGlobal.isProduction) {
    request_handler_RequestHandler.prototype.runController_ = function () {
        this.setControllerProps_().then(this.onResultFromController.bind(this)).catch(this.onErrorOccured.bind(this));
    };
}
else {
    request_handler_RequestHandler.prototype.runController_ = function () {
        var result = this.setControllerProps_();
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








// EXTERNAL MODULE: external "mustache"
var external_mustache_ = __webpack_require__(10);

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
                    case 0: return [4 /*yield*/, getViewFromFile({
                            fileLocation: value.view
                        })];
                    case 1:
                        viewData = _a.sent();
                        return [2 /*return*/, external_mustache_["render"](viewData, value.model)];
                }
            });
        });
    };
    return MustacheViewEngine;
}());


// EXTERNAL MODULE: external "uniqid"
var external_uniqid_ = __webpack_require__(11);

// CONCATENATED MODULE: ./src/abstracts/session_provider.ts


var session_provider_SessionProvider = /** @class */ (function () {
    function SessionProvider() {
    }
    SessionProvider.prototype.createSession = function () {
        var now = new Date();
        this.sessionId = external_uniqid_();
        this.cookie.addCookie({
            name: FortGlobal.appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + FortGlobal.sessionTimeOut)),
            maxAge: FortGlobal.sessionTimeOut * 60
        });
    };
    SessionProvider.prototype.destroySession = function () {
        var cookie = this.cookie.getCookie(FortGlobal.appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
    };
    return SessionProvider;
}());


// CONCATENATED MODULE: ./src/extra/memory_session_provider.ts
var memory_session_provider_extends = (undefined && undefined.__extends) || (function () {
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
    memory_session_provider_extends(MemorySessionProvider, _super);
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
                    if (session != null) {
                        return [2 /*return*/, session.value];
                    }
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
        return Promise.all(Object.keys(values).map(function (key) {
            return _this.set(key, values[key]);
        }));
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
                switch (_a.label) {
                    case 0:
                        index = sessionValues.findIndex(function (q) { return q.identifier === _this.sessionId; });
                        if (index >= 0) {
                            sessionValues.splice(index, 1);
                        }
                        // expire cookie in browser
                        return [4 /*yield*/, this.destroySession()];
                    case 1:
                        // expire cookie in browser
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return MemorySessionProvider;
}(session_provider_SessionProvider));


// CONCATENATED MODULE: ./src/extra/index.ts



// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(12);

// CONCATENATED MODULE: ./src/test_helpers/http_response_stub.ts
var HttpResponseStub = /** @class */ (function () {
    function HttpResponseStub(headers) {
        this.headers_ = headers;
    }
    HttpResponseStub.prototype.getHeader = function (name) {
        return this.headers_[name];
    };
    HttpResponseStub.prototype.hasHeader = function (name) {
        return this.headers_[name] != null;
    };
    HttpResponseStub.prototype.setHeader = function (name, value) {
        this.headers_[name] = value;
    };
    HttpResponseStub.prototype.getHeaders = function () {
        return this.headers_;
    };
    HttpResponseStub.prototype.getHeaderNames = function () {
        return Object.keys[this.headers_];
    };
    HttpResponseStub.prototype.removeHeader = function (name) {
        delete this.headers_[name];
    };
    return HttpResponseStub;
}());


// CONCATENATED MODULE: ./src/test_helpers/http_request_stub.ts
var HttpRequestStub = /** @class */ (function () {
    function HttpRequestStub(headers) {
        this.headers = headers;
    }
    return HttpRequestStub;
}());


// CONCATENATED MODULE: ./src/test_helpers/init_controller.ts




var initController = function (controllerInstance, data) {
    data = data || {};
    var parsedCookies = data.cookieValue || {};
    var headers = (data.request && data.request.headers) || {};
    controllerInstance.request = new HttpRequestStub(headers);
    controllerInstance.response = new HttpResponseStub(headers);
    controllerInstance.query = data.query || {};
    controllerInstance.body = data.body || {};
    controllerInstance.cookie = new CookieManager(parsedCookies);
    var session = new FortGlobal.sessionProvider();
    session.cookie = controllerInstance.cookie;
    session.sessionId = parsedCookies[FortGlobal.appSessionIdentifier];
    controllerInstance.session = session;
    controllerInstance.param = data.param || {};
    controllerInstance.data = data.data || {};
    controllerInstance.file = new file_manager_FileManager(data.file || {});
    return controllerInstance;
};

// CONCATENATED MODULE: ./src/test_helpers/init_guard.ts

var initGuard = function (guardInstance, data) {
    return initController(guardInstance, data);
};

// CONCATENATED MODULE: ./src/test_helpers/init_shield.ts

var initShield = function (shieldInstance, data) {
    var value = initController(shieldInstance, data);
    value.workerName = data && data.workerName;
    return value;
};

// CONCATENATED MODULE: ./src/test_helpers/init_wall.ts

var initWall = function (wallInstance, data) {
    return initController(wallInstance, data);
};

// CONCATENATED MODULE: ./src/test_helpers/index.ts





// CONCATENATED MODULE: ./src/abstracts/controller.ts


var controller_Controller = /** @class */ (function () {
    function Controller() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Controller.prototype, "logger", {
        get: function () {
            return FortGlobal.logger;
        },
        enumerable: true,
        configurable: true
    });
    Controller.prototype.initialize = function (data) {
        initController(this, data);
    };
    return Controller;
}());


// CONCATENATED MODULE: ./src/abstracts/shield.ts


var shield_Shield = /** @class */ (function () {
    function Shield() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Shield.prototype, "logger", {
        get: function () {
            return FortGlobal.logger;
        },
        enumerable: true,
        configurable: true
    });
    Shield.prototype.initialize = function (data) {
        return initShield(this, data);
    };
    return Shield;
}());


// CONCATENATED MODULE: ./src/abstracts/guard.ts


var guard_Guard = /** @class */ (function () {
    function Guard() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Guard.prototype, "logger", {
        get: function () {
            return FortGlobal.logger;
        },
        enumerable: true,
        configurable: true
    });
    Guard.prototype.initialize = function (data) {
        return initGuard(this, data);
    };
    return Guard;
}());


// CONCATENATED MODULE: ./src/abstracts/view_engine.ts
var ViewEngine = /** @class */ (function () {
    function ViewEngine() {
    }
    return ViewEngine;
}());


// CONCATENATED MODULE: ./src/abstracts/wall.ts
var wall_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var wall_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


var wall_Wall = /** @class */ (function () {
    function Wall() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Wall.prototype, "logger", {
        get: function () {
            return FortGlobal.logger;
        },
        enumerable: true,
        configurable: true
    });
    Wall.prototype.onOutgoing = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return wall_awaiter(this, void 0, void 0, function () {
            return wall_generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    Wall.prototype.initialize = function (data) {
        return initWall(this, data);
    };
    return Wall;
}());


// CONCATENATED MODULE: ./src/abstracts/xml_parser.ts
var XmlParser = /** @class */ (function () {
    function XmlParser() {
    }
    return XmlParser;
}());


// CONCATENATED MODULE: ./src/abstracts/result_mapper.ts
var ResultMapper = /** @class */ (function () {
    function ResultMapper() {
    }
    return ResultMapper;
}());


// CONCATENATED MODULE: ./src/abstracts/index.ts









// CONCATENATED MODULE: ./src/generics/generic_guard.ts
var generic_guard_extends = (undefined && undefined.__extends) || (function () {
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

var GenericGuard = /** @class */ (function (_super) {
    generic_guard_extends(GenericGuard, _super);
    function GenericGuard() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.call(this) || this;
    }
    GenericGuard.prototype.check = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return null;
    };
    return GenericGuard;
}(guard_Guard));


// CONCATENATED MODULE: ./src/generics/generic_shield.ts
var generic_shield_extends = (undefined && undefined.__extends) || (function () {
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

var GenericShield = /** @class */ (function (_super) {
    generic_shield_extends(GenericShield, _super);
    function GenericShield() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.call(this) || this;
    }
    GenericShield.prototype.protect = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return null;
    };
    return GenericShield;
}(shield_Shield));


// CONCATENATED MODULE: ./src/generics/generic_session_provider.ts
var generic_session_provider_extends = (undefined && undefined.__extends) || (function () {
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
var generic_session_provider_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var generic_session_provider_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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

var GenericSessionProvider = /** @class */ (function (_super) {
    generic_session_provider_extends(GenericSessionProvider, _super);
    function GenericSessionProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericSessionProvider.prototype.get = function () {
        return null;
    };
    GenericSessionProvider.prototype.getAll = function () {
        return null;
    };
    GenericSessionProvider.prototype.set = function (key, value) {
        return null;
    };
    GenericSessionProvider.prototype.isExist = function (key) {
        return null;
    };
    GenericSessionProvider.prototype.remove = function (key) {
        return null;
    };
    GenericSessionProvider.prototype.setMany = function (values) {
        return null;
    };
    GenericSessionProvider.prototype.clear = function () {
        return generic_session_provider_awaiter(this, void 0, void 0, function () {
            return generic_session_provider_generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return GenericSessionProvider;
}(session_provider_SessionProvider));


// CONCATENATED MODULE: ./src/generics/generic_wall.ts
var generic_wall_extends = (undefined && undefined.__extends) || (function () {
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

var GenericWall = /** @class */ (function (_super) {
    generic_wall_extends(GenericWall, _super);
    function GenericWall() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.call(this) || this;
    }
    GenericWall.prototype.onIncoming = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return null;
    };
    return GenericWall;
}(wall_Wall));


// CONCATENATED MODULE: ./src/generics/generic_controller.ts
var generic_controller_extends = (undefined && undefined.__extends) || (function () {
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

var GenericController = /** @class */ (function (_super) {
    generic_controller_extends(GenericController, _super);
    function GenericController() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.call(this) || this;
    }
    return GenericController;
}(controller_Controller));


// CONCATENATED MODULE: ./src/generics/generic_xml_parser.ts
var generic_xml_parser_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var generic_xml_parser_generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var GenericXmlParser = /** @class */ (function () {
    function GenericXmlParser() {
    }
    GenericXmlParser.prototype.parse = function (xml) {
        return generic_xml_parser_awaiter(this, void 0, void 0, function () {
            return generic_xml_parser_generator(this, function (_a) {
                // tslint:disable-next-line
                throw {
                    message: "no xml parser configured"
                };
            });
        });
    };
    return GenericXmlParser;
}());


// CONCATENATED MODULE: ./src/generics/index.ts







// CONCATENATED MODULE: ./src/models/logger.ts
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.debug(args);
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.debug(args);
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.debug(args);
    };
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    return Logger;
}());


// CONCATENATED MODULE: ./src/models/fort.ts












var fort_Fort = /** @class */ (function () {
    function Fort() {
        this.routes = [];
        this.walls = [];
    }
    Fort.prototype.saveAppOption_ = function (option) {
        var defaultEtagConfig = {
            type: ETag_Type.Weak
        };
        FortGlobal.port = option.port == null ? 4000 : option.port;
        FortGlobal.shouldParseCookie = option.shouldParseCookie == null ? true : option.shouldParseCookie;
        FortGlobal.shouldParsePost = isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        FortGlobal.sessionTimeOut = isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        FortGlobal.folders = option.folders == null ? [] : option.folders;
        if (isArray(FortGlobal.folders) === false) {
            throw new Error("Option folders should be an array");
        }
        FortGlobal.appName = isNullOrEmpty(option.appName) === true ? __AppName : option.appName;
        FortGlobal.appSessionIdentifier = FortGlobal.appName + "_session_id";
        FortGlobal.eTag = isNull(option.eTag) ? defaultEtagConfig : option.eTag;
        FortGlobal.walls = this.walls;
        FortGlobal.viewEngine = isNull(this.viewEngine) ? new mustache_view_engine_MustacheViewEngine() : new this.viewEngine();
        FortGlobal.sessionProvider = isNull(this.sessionProvider) ? MemorySessionProvider :
            this.sessionProvider;
        FortGlobal.errorHandler = isNull(this.errorHandler) ? error_handler_ErrorHandler : this.errorHandler;
        FortGlobal.xmlParser = isNull(this.xmlParser) ? GenericXmlParser : this.xmlParser;
        FortGlobal.viewPath = isNull(option.viewPath) ? external_path_["join"](__CurrentPath, "views") : option.viewPath;
        setResultMapper(this.resultMapper);
        if (this.logger) {
            if (typeof this.logger === 'function') {
                this.logger = new this.logger();
            }
        }
        else {
            this.logger = new Logger();
        }
        FortGlobal.logger = this.logger;
    };
    Fort.prototype.create = function (option) {
        var _this = this;
        if (option == null) {
            option = {};
        }
        if (this.routes == null) {
            this.routes = [];
        }
        var isDefaultRouteExist = false;
        // removing / from routes
        this.routes.forEach(function (route) {
            route.path = removeFirstSlash(route.path);
            route.path = removeLastSlash(route.path);
            if (route.path === "*") {
                isDefaultRouteExist = true;
            }
            route_handler_RouteHandler.addToRouterCollection(route);
        });
        if (isDefaultRouteExist === false) {
            route_handler_RouteHandler.addToRouterCollection({
                controller: GenericController,
                path: "*"
            });
        }
        if (option.folders != null) {
            // remove / from files routes
            option.folders.forEach(function (folder) {
                var length = folder.alias.length;
                if (length > 1) {
                    folder.alias = removeFirstSlash(folder.alias);
                    folder.alias = removeLastSlash(folder.alias);
                }
            });
        }
        this.saveAppOption_(option);
        return promise(function (res, rej) {
            _this.httpServer = external_http_["createServer"](function (request, response) {
                new request_handler_RequestHandler(request, response).handle();
            }).once("error", function (err) {
                if (err.code === 'EADDRINUSE') {
                    var error = new log_helper_LogHelper(ERROR_TYPE.PortInUse, FortGlobal.port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', function () {
                res();
            }).listen(FortGlobal.port);
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
    }
    Object.defineProperty(Router.prototype, "routes", {
        get: function () {
            return route_handler_RouteHandler.routerCollection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "routesAsArray", {
        get: function () {
            return route_handler_RouteHandler.routesAsArray;
        },
        enumerable: true,
        configurable: true
    });
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

var file_manager_FileManager = /** @class */ (function () {
    function FileManager(value) {
        this.files_ = value;
    }
    Object.defineProperty(FileManager.prototype, "count", {
        /**
         * get total no of files
         *
         * @returns - number
         * @memberof FileManager
         */
        get: function () {
            return Object.keys(this.files_).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileManager.prototype, "files", {
        get: function () {
            var _this = this;
            return Object.keys(this.files_).map(function (fileId) {
                return _this.files_[fileId];
            });
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
        return this.files_[fieldName] != null;
    };
    /**
     * return the file
     *
     * @param {string} fieldName
     * @returns
     * @memberof FileManager
     */
    FileManager.prototype.getFile = function (fieldName) {
        return this.files_[fieldName];
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
        return external_fs_extra_["copy"](this.files_[fieldName].path, pathToSave);
    };
    return FileManager;
}());


// CONCATENATED MODULE: ./src/models/http_file.ts
var HttpFile = /** @class */ (function () {
    function HttpFile() {
    }
    return HttpFile;
}());


// CONCATENATED MODULE: ./src/models/route_info.ts
var RouteInfo = /** @class */ (function () {
    function RouteInfo() {
    }
    Object.defineProperty(RouteInfo.prototype, "workersAsArray", {
        get: function () {
            var _this = this;
            return Object.keys(this.workers).map(function (workerName) {
                return _this.workers[workerName];
                return _this.workers[workerName];
            });
        },
        enumerable: true,
        configurable: true
    });
    RouteInfo.prototype.init = function (value) {
        this.controllerName = value.controllerName;
        this.controller = value.controller;
        this.path = value.path;
        this.shields = value.shields;
        this.values = value.values;
        this.workers = value.workers;
    };
    return RouteInfo;
}());


// CONCATENATED MODULE: ./src/models/index.ts










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
            pattern: "/" + methodName.toLowerCase(),
            values: []
        };
        route_handler_RouteHandler.addWorker(actionInfo, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/shields.ts

// tslint:disable-next-line
var Shields = function (shieldsValue) {
    return function (target) {
        var className = target.name;
        route_handler_RouteHandler.addShields(shieldsValue, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/guards.ts

// tslint:disable-next-line
var Guards = function (value) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        route_handler_RouteHandler.addGuards(value, className, methodName);
    });
};

// CONCATENATED MODULE: ./src/decorators/route.ts


// tslint:disable-next-line
var Route = function (format) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        // remove / from route
        if (format != null && format !== '/') {
            format = removeLastSlash(format);
        }
        route_handler_RouteHandler.addPattern(format, className, methodName);
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
            pattern: "/",
            values: []
        };
        route_handler_RouteHandler.addWorker(actionInfo, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/assign.ts


// tslint:disable-next-line
var Assign = function (value) {
    return function (target, methodName, paramIndex) {
        var className = target.name || target.constructor.name;
        if (methodName == null) {
            methodName = __Constructor;
        }
        injector_handler_InjectorHandler.addWorkerValue(className, methodName, paramIndex, value);
    };
};

// CONCATENATED MODULE: ./src/decorators/singleton.ts


// tslint:disable-next-line
var Singleton = function (value) {
    return function (target, methodName, paramIndex) {
        var className = target.name || target.constructor.name;
        if (methodName == null || methodName === 'constructor') {
            methodName = __Constructor;
        }
        injector_handler_InjectorHandler.addSingleton(className, methodName, paramIndex, value);
    };
};

// CONCATENATED MODULE: ./src/decorators/expect_body.ts



function ExpectBody(value) {
    return function (target, methodName, descriptor) {
        var className = getClassName(target);
        var type = getDataType(value);
        switch (type) {
            case DATA_TYPE.Function:
                var valueClassName = getClassName(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case DATA_TYPE.Object:
                value = removeMethodAndNullFromObject(value);
                route_handler_RouteHandler.addExpected("body", className, methodName, value);
                break;
            default:
                throw new Error("expected body should be always an object but found " + type);
        }
    };
}

// CONCATENATED MODULE: ./src/decorators/expect_query.ts



function ExpectQuery(value) {
    return function (target, methodName, descriptor) {
        var className = getClassName(target);
        var type = getDataType(value);
        switch (type) {
            case DATA_TYPE.Function:
                var valueClassName = getClassName(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case DATA_TYPE.Object:
                value = removeMethodAndNullFromObject(value);
                route_handler_RouteHandler.addExpected("query", className, methodName, value);
                break;
            default:
                throw new Error("expected query should be always an object but found " + type);
        }
    };
}

// CONCATENATED MODULE: ./src/decorators/index.ts










// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport ErrorHandler */__webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return error_handler_ErrorHandler; });
/* concated harmony reexport HttpCookie */__webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return HttpCookie; });
/* concated harmony reexport Fort */__webpack_require__.d(__webpack_exports__, "Fort", function() { return fort_Fort; });
/* concated harmony reexport Router */__webpack_require__.d(__webpack_exports__, "Router", function() { return router_Router; });
/* concated harmony reexport CookieManager */__webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* concated harmony reexport FileManager */__webpack_require__.d(__webpack_exports__, "FileManager", function() { return file_manager_FileManager; });
/* concated harmony reexport HttpFile */__webpack_require__.d(__webpack_exports__, "HttpFile", function() { return HttpFile; });
/* concated harmony reexport Logger */__webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/* concated harmony reexport RouteInfo */__webpack_require__.d(__webpack_exports__, "RouteInfo", function() { return RouteInfo; });
/* concated harmony reexport Controller */__webpack_require__.d(__webpack_exports__, "Controller", function() { return controller_Controller; });
/* concated harmony reexport Shield */__webpack_require__.d(__webpack_exports__, "Shield", function() { return shield_Shield; });
/* concated harmony reexport SessionProvider */__webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return session_provider_SessionProvider; });
/* concated harmony reexport Guard */__webpack_require__.d(__webpack_exports__, "Guard", function() { return guard_Guard; });
/* concated harmony reexport ViewEngine */__webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return ViewEngine; });
/* concated harmony reexport Wall */__webpack_require__.d(__webpack_exports__, "Wall", function() { return wall_Wall; });
/* concated harmony reexport XmlParser */__webpack_require__.d(__webpack_exports__, "XmlParser", function() { return XmlParser; });
/* concated harmony reexport ResultMapper */__webpack_require__.d(__webpack_exports__, "ResultMapper", function() { return ResultMapper; });
/* concated harmony reexport Worker */__webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker; });
/* concated harmony reexport Shields */__webpack_require__.d(__webpack_exports__, "Shields", function() { return Shields; });
/* concated harmony reexport Guards */__webpack_require__.d(__webpack_exports__, "Guards", function() { return Guards; });
/* concated harmony reexport Route */__webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* concated harmony reexport DefaultWorker */__webpack_require__.d(__webpack_exports__, "DefaultWorker", function() { return DefaultWorker; });
/* concated harmony reexport Assign */__webpack_require__.d(__webpack_exports__, "Assign", function() { return Assign; });
/* concated harmony reexport Singleton */__webpack_require__.d(__webpack_exports__, "Singleton", function() { return Singleton; });
/* concated harmony reexport ExpectBody */__webpack_require__.d(__webpack_exports__, "ExpectBody", function() { return ExpectBody; });
/* concated harmony reexport ExpectQuery */__webpack_require__.d(__webpack_exports__, "ExpectQuery", function() { return ExpectQuery; });
/* concated harmony reexport MIME_TYPE */__webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return MIME_TYPE; });
/* concated harmony reexport HTTP_METHOD */__webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return HTTP_METHOD; });
/* concated harmony reexport HTTP_STATUS_CODE */__webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return HTTP_STATUS_CODE; });
/* concated harmony reexport ETag_Type */__webpack_require__.d(__webpack_exports__, "ETag_Type", function() { return ETag_Type; });
/* concated harmony reexport ERROR_TYPE */__webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
/* concated harmony reexport DATA_TYPE */__webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return DATA_TYPE; });
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
/* concated harmony reexport getMimeTypeFromExtension */__webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return getMimeTypeFromExtension; });
/* concated harmony reexport parseAndMatchRoute */__webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return parseAndMatchRoute; });
/* concated harmony reexport parseCookie */__webpack_require__.d(__webpack_exports__, "parseCookie", function() { return parseCookie; });
/* concated harmony reexport JsonHelper */__webpack_require__.d(__webpack_exports__, "JsonHelper", function() { return JsonHelper; });
/* concated harmony reexport removeLastSlash */__webpack_require__.d(__webpack_exports__, "removeLastSlash", function() { return removeLastSlash; });
/* concated harmony reexport removeFirstSlash */__webpack_require__.d(__webpack_exports__, "removeFirstSlash", function() { return removeFirstSlash; });
/* concated harmony reexport reverseLoop */__webpack_require__.d(__webpack_exports__, "reverseLoop", function() { return reverseLoop; });
/* concated harmony reexport compareExpectedAndRemoveUnnecessary */__webpack_require__.d(__webpack_exports__, "compareExpectedAndRemoveUnnecessary", function() { return compareExpectedAndRemoveUnnecessary; });
/* concated harmony reexport getDataType */__webpack_require__.d(__webpack_exports__, "getDataType", function() { return getDataType; });
/* concated harmony reexport getClassName */__webpack_require__.d(__webpack_exports__, "getClassName", function() { return getClassName; });
/* concated harmony reexport removeMethodAndNullFromObject */__webpack_require__.d(__webpack_exports__, "removeMethodAndNullFromObject", function() { return removeMethodAndNullFromObject; });
/* concated harmony reexport getResultBasedOnMiMe */__webpack_require__.d(__webpack_exports__, "getResultBasedOnMiMe", function() { return getResultBasedOnMiMe; });
/* concated harmony reexport setResultMapper */__webpack_require__.d(__webpack_exports__, "setResultMapper", function() { return setResultMapper; });
/* concated harmony reexport MustacheViewEngine */__webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return mustache_view_engine_MustacheViewEngine; });
/* concated harmony reexport MemorySessionProvider */__webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return MemorySessionProvider; });








/***/ })
/******/ ]);
//# sourceMappingURL=fort.js.map