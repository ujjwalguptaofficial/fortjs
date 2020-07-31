/*!
 * @license :fortjs - V2.0.0 - 31/07/2020
 * https://github.com/ujjwalguptaofficial/fortjs
 * Copyright (c) 2020 @Ujjwal Gupta; Licensed MIT
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
var http_status_code = __webpack_require__(6);

// CONCATENATED MODULE: ./src/enums/etag_type.ts
var ETag_Type;
(function (ETag_Type) {
    ETag_Type["Strong"] = "strong";
    ETag_Type["Weak"] = "weak";
})(ETag_Type || (ETag_Type = {}));

// EXTERNAL MODULE: ./src/enums/error_type.ts
var error_type = __webpack_require__(10);

// EXTERNAL MODULE: ./src/enums/data_type.ts
var data_type = __webpack_require__(7);

// CONCATENATED MODULE: ./src/enums/index.ts








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FortGlobal; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _abstracts_component_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);







var isDevelopment = process.env.NODE_ENV === 'development';
var isProduction = process.env.NODE_ENV === "production";
var FortGlobal = /** @class */ (function () {
    function FortGlobal() {
    }
    Object.defineProperty(FortGlobal, "isDevelopment", {
        get: function () {
            return isDevelopment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FortGlobal, "isProduction", {
        get: function () {
            return isProduction;
        },
        enumerable: false,
        configurable: true
    });
    FortGlobal.setDefault = function () {
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
        FortGlobal.appSessionIdentifier = FortGlobal.appName + "_session_id";
    };
    FortGlobal.port = 4000;
    FortGlobal.shouldParseCookie = true;
    FortGlobal.shouldParsePost = true;
    FortGlobal.sessionTimeOut = 60;
    FortGlobal.walls = [];
    FortGlobal.folders = [];
    FortGlobal.componentOption = new _abstracts_component_option__WEBPACK_IMPORTED_MODULE_2__[/* ComponentOption */ "a"]();
    return FortGlobal;
}());



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
var http_status_code = __webpack_require__(6);

// CONCATENATED MODULE: ./src/helpers/json_result.ts


var jsonResult = function (value, statusCode) {
    return {
        contentType: enums["f" /* MIME_TYPE */].Json,
        responseData: value,
        statusCode: statusCode || http_status_code["a" /* HTTP_STATUS_CODE */].Ok
    };
};

// CONCATENATED MODULE: ./src/helpers/text_result.ts


var textResult = function (text, statusCode) {
    return {
        contentType: enums["f" /* MIME_TYPE */].Text,
        responseData: text,
        statusCode: statusCode || http_status_code["a" /* HTTP_STATUS_CODE */].Ok
    };
};

// CONCATENATED MODULE: ./src/helpers/html_result.ts


var htmlResult = function (html, statusCode) {
    return {
        contentType: enums["f" /* MIME_TYPE */].Html,
        responseData: html,
        statusCode: statusCode || http_status_code["a" /* HTTP_STATUS_CODE */].Ok
    };
};

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

// EXTERNAL MODULE: ./src/enums/error_type.ts
var error_type = __webpack_require__(10);

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
            case error_type["a" /* ERROR_TYPE */].InvalidControllerName:
                errMsg = "Invalid controller name - '" + this.info_ + "'. Controller name must contain 'controller'.";
                break;
            case error_type["a" /* ERROR_TYPE */].InvalidContentType:
                errMsg = "Content type - '" + this.info_ + "' is not valid. Please create an issue if you think this is valid type.";
                break;
            case error_type["a" /* ERROR_TYPE */].PortInUse:
                errMsg = "Port " + this.info_ + " is being used by another process.";
                break;
            case error_type["a" /* ERROR_TYPE */].UndefinedViewEngine:
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
if (fort_global["a" /* FortGlobal */].isProduction === true) {
    renderView = function (viewName, model) {
        return fort_global["a" /* FortGlobal */].viewEngine.render({
            view: viewName,
            model: model
        });
    };
}
else {
    renderView = function (viewName, model) {
        if (fort_global["a" /* FortGlobal */].viewEngine == null) {
            new log_helper_LogHelper(error_type["a" /* ERROR_TYPE */].UndefinedViewEngine).throw();
        }
        return fort_global["a" /* FortGlobal */].viewEngine.render({
            view: viewName,
            model: model
        });
    };
}

// CONCATENATED MODULE: ./src/helpers/download_result.ts

var downloadResult = function (filePath, downloadFileName) {
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

var fileResult = function (filePath) {
    return {
        statusCode: http_status_code["a" /* HTTP_STATUS_CODE */].Ok,
        file: {
            filePath: filePath
        }
    };
};

// CONCATENATED MODULE: ./src/helpers/redirect_result.ts


var redirectResult = function (url) {
    return {
        contentType: enums["f" /* MIME_TYPE */].Text,
        responseData: url,
        statusCode: http_status_code["a" /* HTTP_STATUS_CODE */].Redirect,
        shouldRedirect: true
    };
};

// CONCATENATED MODULE: ./src/helpers/view_result.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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


var viewResult = function (viewName, model) { return __awaiter(void 0, void 0, void 0, function () {
    var viewData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, renderView(viewName, model)];
            case 1:
                viewData = _a.sent();
                return [2 /*return*/, {
                        contentType: enums["f" /* MIME_TYPE */].Html,
                        responseData: viewData,
                        statusCode: enums["e" /* HTTP_STATUS_CODE */].Ok
                    }];
        }
    });
}); };

// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(17);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(9);

// CONCATENATED MODULE: ./src/helpers/get_view_from_file.ts
var get_view_from_file_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var getViewFromFile;
var readView = function (option) { return get_view_from_file_awaiter(void 0, void 0, void 0, function () {
    var pathOfView, result;
    return get_view_from_file_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pathOfView = external_path_["join"](fort_global["a" /* FortGlobal */].viewPath, option.fileLocation);
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
if (fort_global["a" /* FortGlobal */].isProduction === true) {
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
var route_handler = __webpack_require__(11);

// CONCATENATED MODULE: ./src/helpers/parse_match_route.ts
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


var regex1 = /{(.*)}(?!.)/;
var regex2 = /{(.*)}\.(\w+)(?!.)/;
var checkRouteInWorker = function (route, httpMethod, urlParts) {
    var matchedRoute = {
        allowedHttpMethod: [],
        controller: route.controller,
        controllerName: route.controllerName
    };
    var urlPartLength = urlParts.length;
    var _loop_1 = function (workerName) {
        var worker = route.workers[workerName];
        var patternSplit = worker.pattern.split("/");
        if (urlPartLength === patternSplit.length) {
            var isMatched_1 = true;
            var params_1 = {};
            urlParts.every(function (urlPart, i) {
                // if not equal then check for regex match
                if (urlPart !== patternSplit[i]) {
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
                        }
                    }
                    else {
                        isMatched_1 = false;
                    }
                }
                // means its direct match
                return isMatched_1;
            });
            if (isMatched_1 === true) {
                if (worker.methodsAllowed.indexOf(httpMethod) >= 0) {
                    matchedRoute.workerInfo = worker;
                    matchedRoute.params = params_1;
                    matchedRoute.shields = route.shields;
                    return "break";
                }
                else {
                    matchedRoute.allowedHttpMethod = __spreadArrays(matchedRoute.allowedHttpMethod, worker.methodsAllowed);
                }
            }
        }
    };
    for (var workerName in route.workers) {
        var state_1 = _loop_1(workerName);
        if (state_1 === "break")
            break;
    }
    if (matchedRoute.workerInfo == null && matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    return matchedRoute;
};
function parseAndMatchRoute(url, httpMethod) {
    url = removeLastSlash(url);
    var urlParts = url.split("/");
    var route = route_handler["a" /* RouteHandler */].findControllerFromPath(urlParts);
    return route == null ? checkRouteInWorker(route_handler["a" /* RouteHandler */].defaultRoute, httpMethod, urlParts) :
        checkRouteInWorker(route, httpMethod, urlParts);
}

// EXTERNAL MODULE: ./src/utils/index.ts + 3 modules
var utils = __webpack_require__(12);

// CONCATENATED MODULE: ./src/helpers/parse_cookie.ts

var parseCookie = function (cookie) {
    var value = {};
    if (!Object(utils["c" /* isNullOrEmpty */])(cookie)) {
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

// EXTERNAL MODULE: ./src/enums/data_type.ts
var data_type = __webpack_require__(7);

// CONCATENATED MODULE: ./src/helpers/get_data_type.ts

var getDataType = function (value) {
    var type = typeof value;
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


var compareExpectedAndRemoveUnnecessary = function (expected, actual, isQuery) {
    var result = {};
    for (var prop in expected) {
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
var getClassName = function (target) {
    return target.name || (target.constructor && target.constructor.name);
};

// CONCATENATED MODULE: ./src/helpers/remove_method_and_null_from_object.ts


var removeMethodAndNullFromObject = function (value) {
    var outputValue = {};
    for (var prop in value) {
        var type = getDataType(value[prop]);
        if (!(value[prop] == null || type === data_type["a" /* DATA_TYPE */].Function)) {
            outputValue[prop] = value[prop];
        }
    }
    return outputValue;
};

// CONCATENATED MODULE: ./src/helpers/get_result_based_on_mime.ts

var getResultBasedOnMiMe = function (type, result, setMimeType) {
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
    getResultBasedOnMiMe = function (type, result, callBack) {
        return new mapper().map(type, result, callBack);
    };
}

// CONCATENATED MODULE: ./src/helpers/index.ts

























/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ route_handler["a" /* RouteHandler */]; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ request_handler_RequestHandler; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ injector_handler_InjectorHandler; });

// UNUSED EXPORTS: FileHandler, RequestHandlerHelper, ControllerResultHandler, PostHandler

// EXTERNAL MODULE: ./src/handlers/route_handler.ts
var route_handler = __webpack_require__(11);

// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(44);

// EXTERNAL MODULE: ./src/constant.ts
var constant = __webpack_require__(4);

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

// EXTERNAL MODULE: ./src/helpers/index.ts + 23 modules
var helpers = __webpack_require__(2);

// EXTERNAL MODULE: ./src/models/index.ts + 10 modules
var models = __webpack_require__(5);

// EXTERNAL MODULE: ./src/enums/index.ts + 3 modules
var enums = __webpack_require__(0);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(9);

// EXTERNAL MODULE: external "negotiator"
var external_negotiator_ = __webpack_require__(18);

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
        return this.getMethodValues(className, constant["b" /* __Constructor */]);
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var request_handler_helper_RequestHandlerHelper = /** @class */ (function () {
    function RequestHandlerHelper() {
        this.wallInstances = [];
        this.controllerResult = {};
    }
    RequestHandlerHelper.prototype.runWallOutgoing = function () {
        var _this = this;
        var outgoingResults = [];
        Object(helpers["u" /* reverseLoop */])(this.wallInstances, function (value) {
            var methodArgsValues = injector_handler_InjectorHandler.getMethodValues(value.constructor.name, 'onOutgoing');
            methodArgsValues.shift();
            outgoingResults.push(value.onOutgoing.apply(value, __spreadArrays([_this.controllerResult], methodArgsValues)));
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
    };
    RequestHandlerHelper.prototype.onBadRequest = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var message, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new fort_global["a" /* FortGlobal */].errorHandler().onBadRequest(error)];
                    case 1:
                        message = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_1)];
                    case 3:
                        this.onResultFromError_(message);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onForbiddenRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new fort_global["a" /* FortGlobal */].errorHandler().onForbiddenRequest()];
                    case 1:
                        message = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_2 = _a.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_2)];
                    case 3:
                        this.onResultFromError_(message);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotAcceptableRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var errMessage, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new fort_global["a" /* FortGlobal */].errorHandler().onNotAcceptableRequest()];
                    case 1:
                        errMessage = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_3 = _a.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_3)];
                    case 3:
                        this.onResultFromError_(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotFound = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new fort_global["a" /* FortGlobal */].errorHandler().onNotFound(this.request.url)];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_4 = _a.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_4)];
                    case 3:
                        this.onResultFromError_(response);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onMethodNotAllowed = function (allowedMethods) {
        return __awaiter(this, void 0, void 0, function () {
            var response, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new fort_global["a" /* FortGlobal */].errorHandler().onMethodNotAllowed()];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_5 = _a.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_5)];
                    case 3:
                        this.response.setHeader("Allow", allowedMethods.join(","));
                        this.onResultFromError_(response);
                        return [2 /*return*/];
                }
            });
        });
    };
    // it won't execute wallOutgoing as if there is some issue in wallOutgoing
    // then it would become an infinite loop
    // treat it as someone comes to your fort & they start doing things 
    // which was not supposed to be done
    // then you don't follow regular rules but just throw them from anywhere
    RequestHandlerHelper.prototype.onErrorOccured = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var response, ex_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof error === 'string') {
                            error = {
                                message: error
                            };
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, new fort_global["a" /* FortGlobal */].errorHandler().onServerError(error)];
                    case 2:
                        response = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_6 = _a.sent();
                        response = helpers["a" /* JsonHelper */].stringify(ex_6);
                        return [3 /*break*/, 4];
                    case 4:
                        this.controllerResult = response;
                        this.returnResultFromError_();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onRequestOptions = function (allowedMethods) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.response.setHeader("Allow", allowedMethods.join(","));
                this.onResultFromError_(Object(helpers["w" /* textResult */])(""));
                return [2 /*return*/];
            });
        });
    };
    RequestHandlerHelper.prototype.onResultFromError_ = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.controllerResult = result;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_7 = _a.sent();
                        this.onErrorOccured(ex_7);
                        return [2 /*return*/];
                    case 4:
                        this.returnResultFromError_();
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.returnResultFromError_ = function () {
        var _this = this;
        var result = this.controllerResult;
        this.cookieManager.responseCookie_.forEach(function (value) {
            _this.response.setHeader(constant["f" /* __SetCookie */], value);
        });
        if (result.responseFormat == null) {
            var contentType = result.contentType || enums["f" /* MIME_TYPE */].Text;
            var negotiateMimeType = this.getContentTypeFromNegotiation(contentType);
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
    };
    RequestHandlerHelper.prototype.handleFormatResult_ = function (shouldSendFirstMatch) {
        if (shouldSendFirstMatch === void 0) { shouldSendFirstMatch = false; }
        var negotiateMimeType = this.getContentTypeFromNegotiationHavingMultipleTypes(Object.keys(this.controllerResult.responseFormat));
        var key = Object.keys(this.controllerResult.responseFormat).find(function (qry) { return qry === negotiateMimeType; });
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
    };
    RequestHandlerHelper.prototype.endResponse_ = function (negotiateMimeType) {
        var _a;
        var data = Object(helpers["i" /* getResultBasedOnMiMe */])(negotiateMimeType, this.controllerResult.responseData, function (type) {
            negotiateMimeType = type;
        });
        this.response.writeHead(this.controllerResult.statusCode || enums["e" /* HTTP_STATUS_CODE */].Ok, (_a = {}, _a[constant["c" /* __ContentType */]] = negotiateMimeType, _a));
        this.response.end(data);
    };
    return RequestHandlerHelper;
}());


// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(19);

// EXTERNAL MODULE: external "etag"
var external_etag_ = __webpack_require__(45);

// EXTERNAL MODULE: external "fresh"
var external_fresh_ = __webpack_require__(46);

// EXTERNAL MODULE: ./src/utils/index.ts + 3 modules
var utils = __webpack_require__(12);

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
        if (splittedValue.length > 2 || !Object(utils["c" /* isNullOrEmpty */])(external_path_["parse"](urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
            return fileInfo;
        }
        fileInfo.folder = splittedValue[1];
        return fileInfo;
    };
    FileHandler.prototype.getFileStats_ = function (filePath) {
        return Object(helpers["o" /* promise */])(function (res, rej) {
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
                    _this.handleFileRequestForFolderPath_(absolutePath);
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
            var folder = fort_global["a" /* FortGlobal */].folders.find(function (qry) { return qry.alias === fileInfo.folder; });
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
    FileHandler.prototype.handleFileRequestForFolderPath_ = function (absolutePath) {
        var _this = this;
        absolutePath = external_path_["join"](absolutePath, "index.html");
        this.getFileStats_(absolutePath).then(function (fileInfo) {
            if (fileInfo != null) {
                var fileType = enums["f" /* MIME_TYPE */].Html;
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
        var _this = this;
        this.response.writeHead(enums["e" /* HTTP_STATUS_CODE */].Ok, (_a = {},
            _a[constant["c" /* __ContentType */]] = mimeType,
            _a));
        var readStream = external_fs_["createReadStream"](filePath);
        // Handle non-existent file
        readStream.on('error', this.onErrorOccured.bind(this));
        readStream.on('open', function () {
            readStream.pipe(_this.response);
        });
    };
    FileHandler.prototype.getMimeTypeFromFileType_ = function (fileType) {
        return fileType[0] === '.' ? Object(helpers["h" /* getMimeTypeFromExtension */])(fileType) :
            fileType;
    };
    return FileHandler;
}(request_handler_helper_RequestHandlerHelper));

if (fort_global["a" /* FortGlobal */].isProduction) {
    file_handler_FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        var _this = this;
        this.runWallOutgoing().then(function () {
            var lastModified = fileInfo.mtime.toUTCString();
            var eTagValue = external_etag_(fileInfo, {
                weak: fort_global["a" /* FortGlobal */].eTag.type === enums["c" /* ETag_Type */].Weak
            });
            if (_this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                _this.response.statusCode = enums["e" /* HTTP_STATUS_CODE */].NotModified;
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    ControllerResultHandler.prototype.handleRedirectResult_ = function () {
        this.response.writeHead(this.controllerResult.statusCode || enums["e" /* HTTP_STATUS_CODE */].Ok, { 'Location': this.controllerResult.responseData });
        this.response.end();
    };
    ControllerResultHandler.prototype.handleFileResult_ = function () {
        var result = this.controllerResult;
        var parsedPath = external_path_["parse"](result.file.filePath);
        if (result.file.shouldDownload === true) {
            var fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
            this.response.setHeader("content-disposition", "attachment;filename=" + fileName + parsedPath.ext);
        }
        this.handleFileRequestFromAbsolutePath(result.file.filePath, parsedPath.ext);
    };
    ControllerResultHandler.prototype.onTerminationFromWall = function (result) {
        this.controllerResult = result;
        this.handleFinalResult_();
    };
    ControllerResultHandler.prototype.handleFinalResult_ = function () {
        var _this = this;
        var result = this.controllerResult;
        this.cookieManager.responseCookie_.forEach(function (value) {
            _this.response.setHeader(constant["f" /* __SetCookie */], value);
        });
        if (result.shouldRedirect === true) {
            this.handleRedirectResult_();
        }
        else {
            if (result.responseFormat == null) {
                if (result.file == null) {
                    var contentType = result.contentType || enums["f" /* MIME_TYPE */].Text;
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
                        this.controllerResult = result || Object(helpers["w" /* textResult */])("");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _a.sent();
                        this.onErrorOccured(ex_1);
                        return [2 /*return*/];
                    case 4:
                        this.handleFinalResult_();
                        return [2 /*return*/];
                }
            });
        });
    };
    return ControllerResultHandler;
}(file_handler_FileHandler));


// EXTERNAL MODULE: external "content-type"
var external_content_type_ = __webpack_require__(47);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(48);

// EXTERNAL MODULE: external "multiparty"
var external_multiparty_ = __webpack_require__(49);

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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
        return Object(helpers["o" /* promise */])(function (res, rej) {
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
        return Object(helpers["o" /* promise */])(function (res, rej) {
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
                        contentType = this.request.headers[constant["c" /* __ContentType */]] || this.request.headers["content-type"];
                        if (contentType != null) {
                            contentType = external_content_type_["parse"](contentType).type;
                        }
                        if (!(contentType === enums["f" /* MIME_TYPE */].FormMultiPart)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.parseMultiPartData_()];
                    case 1:
                        result = _a.sent();
                        postData = result.field;
                        this.file = new models["d" /* FileManager */](result.file);
                        return [3 /*break*/, 4];
                    case 2:
                        this.file = new models["d" /* FileManager */]({});
                        return [4 /*yield*/, this.getPostRawData_()];
                    case 3:
                        bodyDataAsString = _a.sent();
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var request_handler_spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
        return Object(helpers["o" /* promise */])(function (res) {
            var index = 0;
            var wallLength = fort_global["a" /* FortGlobal */].walls.length;
            var executeWallIncomingByIndex = function () { return request_handler_awaiter(_this, void 0, void 0, function () {
                var wall, constructorArgsValues, wallObj, methodArgsValues, result, ex_1;
                return request_handler_generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(wallLength > index)) return [3 /*break*/, 5];
                            wall = fort_global["a" /* FortGlobal */].walls[index++];
                            constructorArgsValues = injector_handler_InjectorHandler.getConstructorValues(wall.name);
                            wallObj = new (wall.bind.apply(wall, request_handler_spreadArrays([void 0], constructorArgsValues)))();
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
        return Object(helpers["o" /* promise */])(function (res) {
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
                            shieldObj = new (shield.bind.apply(shield, request_handler_spreadArrays([void 0], constructorArgsValues)))();
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
        return Object(helpers["o" /* promise */])(function (res) {
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
                            guardObj = new (guard.bind.apply(guard, request_handler_spreadArrays([void 0], constructorArgsValues)))();
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
        if (fort_global["a" /* FortGlobal */].shouldParseCookie === true) {
            var rawCookie = (this.request.headers[constant["d" /* __Cookie */]] || this.request.headers["cookie"]);
            var parsedCookies = void 0;
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
    };
    RequestHandler.prototype.setPreHeader_ = function () {
        this.response.setHeader('X-Powered-By', fort_global["a" /* FortGlobal */].appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    };
    RequestHandler.prototype.checkExpectedQuery_ = function () {
        var expectedQuery = route_handler["a" /* RouteHandler */].getExpectedQuery(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedQuery != null) {
            this.query_ = Object(helpers["c" /* compareExpectedAndRemoveUnnecessary */])(expectedQuery, this.query_, true);
        }
    };
    RequestHandler.prototype.checkExpectedBody_ = function () {
        var expectedBody = route_handler["a" /* RouteHandler */].getExpectedBody(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedBody != null) {
            this.body = Object(helpers["c" /* compareExpectedAndRemoveUnnecessary */])(expectedBody, this.body, false);
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
                        if (this.request.method === enums["d" /* HTTP_METHOD */].Options) {
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
                                this.routeMatchInfo_ = Object(helpers["m" /* parseAndMatchRoute */])(pathUrl.toLowerCase(), requestMethod);
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
                        if (!(this.request.method === enums["d" /* HTTP_METHOD */].Get)) return [3 /*break*/, 1];
                        this.body = {};
                        this.file = new models["d" /* FileManager */]({});
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(fort_global["a" /* FortGlobal */].shouldParsePost === true)) return [3 /*break*/, 5];
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
        var controllerObj = new ((_a = this.routeMatchInfo_.controller).bind.apply(_a, request_handler_spreadArrays([void 0], constructorValues)))();
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

if (fort_global["a" /* FortGlobal */].isProduction) {
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









/***/ }),
/* 4 */
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
var __ContentType = "Content-Type";
var __AppName = "fort";
var __Cookie = "Cookie";
var __SetCookie = 'Set-Cookie';
var __CurrentPath = process.cwd();
var __ContentLength = "Content-Length";
var __Constructor = "const_constructor";


/***/ }),
/* 5 */
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

// CONCATENATED MODULE: ./src/models/error_handler.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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


var error_handler_ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.onServerError = function (ex) {
        return __awaiter(this, void 0, void 0, function () {
            var errMessage;
            return __generator(this, function (_a) {
                errMessage = "<h1>internal server error</h1>\n            <h3>message : " + ex.message + "</h3>";
                if (ex.stack) {
                    errMessage += "<p><b>stacktrace:</b> " + ex.stack + "</p>";
                }
                if (ex.type) {
                    errMessage += "<p><b>type:</b> " + ex.type + "</p>";
                }
                return [2 /*return*/, Object(helpers["k" /* htmlResult */])(errMessage, enums["e" /* HTTP_STATUS_CODE */].InternalServerError)];
            });
        });
    };
    ErrorHandler.prototype.onBadRequest = function (ex) {
        return __awaiter(this, void 0, void 0, function () {
            var errMessage;
            return __generator(this, function (_a) {
                errMessage = "<h1>Bad Request</h1>";
                if (ex.message) {
                    errMessage += " <h3>message : " + ex.message + " </h3>";
                }
                if (ex.stack) {
                    errMessage += "<p><b>stacktrace:</b> " + ex.stack + "</p>";
                }
                if (ex.type) {
                    errMessage += "<p><b>type:</b> " + ex.type + "</p>";
                }
                return [2 /*return*/, Object(helpers["k" /* htmlResult */])(errMessage, enums["e" /* HTTP_STATUS_CODE */].BadRequest)];
            });
        });
    };
    ErrorHandler.prototype.onForbiddenRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Object(helpers["k" /* htmlResult */])("<h1>Forbidden</h1>", enums["e" /* HTTP_STATUS_CODE */].Forbidden)];
            });
        });
    };
    ErrorHandler.prototype.onNotAcceptableRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Object(helpers["k" /* htmlResult */])("<h1>Not Acceptable</h1>", enums["e" /* HTTP_STATUS_CODE */].NotAcceptable)];
            });
        });
    };
    ErrorHandler.prototype.onMethodNotAllowed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Object(helpers["k" /* htmlResult */])("<h1>Method Not allowed.</h1>", enums["e" /* HTTP_STATUS_CODE */].MethodNotAllowed)];
            });
        });
    };
    ErrorHandler.prototype.onNotFound = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Object(helpers["k" /* htmlResult */])("<h1>The requested resource " + url + " was not found.</h1>", enums["e" /* HTTP_STATUS_CODE */].NotFound)];
            });
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


// EXTERNAL MODULE: ./src/handlers/index.ts + 6 modules
var handlers = __webpack_require__(3);

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(50);

// EXTERNAL MODULE: ./src/generics/index.ts + 6 modules
var generics = __webpack_require__(14);

// EXTERNAL MODULE: ./src/utils/index.ts + 3 modules
var utils = __webpack_require__(12);

// CONCATENATED MODULE: ./src/models/fort.ts







var fort_Fort = /** @class */ (function () {
    function Fort() {
    }
    Object.defineProperty(Fort, "logger", {
        get: function () {
            return fort_global["a" /* FortGlobal */].logger;
        },
        set: function (value) {
            fort_global["a" /* FortGlobal */].logger = typeof value === 'function' ? new this.value() :
                value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "walls", {
        set: function (walls) {
            fort_global["a" /* FortGlobal */].walls = walls;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "port", {
        get: function () {
            return fort_global["a" /* FortGlobal */].port;
        },
        /**
         * port at which app will listen, default - 4000
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].port = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "errorHandler", {
        /**
         * typeof ErrorHandler
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].errorHandler = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "routes", {
        set: function (value) {
            if (value == null) {
                value = [];
            }
            var isDefaultRouteExist = false;
            // removing / from routes
            value.forEach(function (route) {
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "viewEngine", {
        /**
         * view engine use to render the view
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].viewEngine = new value();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "sessionProvider", {
        /**
         * sessionProvider class, default - MemorySessionProvider
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].sessionProvider = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "resultMapper", {
        set: function (value) {
            Object(helpers["v" /* setResultMapper */])(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "xmlParser", {
        /**
         * XmlParser class - used to parse the xml
         *
         * @static
         * @memberof Fort
         */
        set: function (xmlParser) {
            fort_global["a" /* FortGlobal */].xmlParser = xmlParser;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "shouldParseCookie", {
        /**
         * Whether to parse cookie or not, default - true
         * If false, then session wont work.
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].shouldParseCookie = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "shouldParsePost", {
        /**
         * Whether to parse the post data, default - true
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].shouldParsePost = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "sessionTimeOut", {
        /**
         * session timeout in minute - default is 60 minute
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].sessionTimeOut = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "appName", {
        /**
         * name of application - default is fort. Visible in header and cookie.
         * Change name if you dont want any one to know the framework name.
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].appName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "viewPath", {
        /**
         * Views folder location. By default it is - views.
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].viewPath = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "componentOption", {
        set: function (value) {
            fort_global["a" /* FortGlobal */].componentOption = new value();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "httpServer", {
        get: function () {
            return Fort.instance.httpServer;
        },
        set: function (value) {
            Fort.instance.httpServer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "folders", {
        /**
         * folders which should be visible to requests. By default nothing is allowed.
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            value = value || [];
            if (Object(utils["a" /* isArray */])(value) === false) {
                throw new Error("folders should be an array");
            }
            // remove / from files routes
            value.forEach(function (folder) {
                var length = folder.alias.length;
                if (length > 1) {
                    folder.alias = Object(helpers["q" /* removeFirstSlash */])(folder.alias);
                    folder.alias = Object(helpers["r" /* removeLastSlash */])(folder.alias);
                }
            });
            fort_global["a" /* FortGlobal */].folders = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fort, "eTag", {
        /**
         * eTag Settings
         *
         * @static
         * @memberof Fort
         */
        set: function (value) {
            fort_global["a" /* FortGlobal */].eTag = value;
        },
        enumerable: false,
        configurable: true
    });
    Fort.create = function () {
        var _this = this;
        fort_global["a" /* FortGlobal */].setDefault();
        if (this.instance.httpServer != null) {
            return;
        }
        return Object(helpers["o" /* promise */])(function (res, rej) {
            _this.instance.httpServer = external_http_["createServer"](Fort.onNewRequest).once("error", function (err) {
                if (err.code === 'EADDRINUSE') {
                    var error = new helpers["b" /* LogHelper */](enums["b" /* ERROR_TYPE */].PortInUse, fort_global["a" /* FortGlobal */].port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', function () {
                // set default route
                // RouteHandler.defaultRouteControllerName = RouteHandler.getDefaultRoute();
                res();
            }).listen(fort_global["a" /* FortGlobal */].port);
        });
    };
    Fort.onNewRequest = function (request, response) {
        new handlers["b" /* RequestHandler */](request, response).handle();
    };
    Fort.destroy = function () {
        var _this = this;
        return Object(helpers["o" /* promise */])(function (res) {
            _this.instance.httpServer.close(res);
        });
    };
    Fort.instance = new Fort();
    return Fort;
}());


// CONCATENATED MODULE: ./src/models/router.ts

var router_Router = /** @class */ (function () {
    function Router() {
    }
    Object.defineProperty(Router.prototype, "routes", {
        get: function () {
            return handlers["c" /* RouteHandler */].routerCollection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "routesAsArray", {
        get: function () {
            return handlers["c" /* RouteHandler */].routesAsArray;
        },
        enumerable: false,
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
        enumerable: false,
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


// EXTERNAL MODULE: external "fs-extra"
var external_fs_extra_ = __webpack_require__(17);

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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileManager.prototype, "files", {
        get: function () {
            var _this = this;
            return Object.keys(this.files_).map(function (fileId) {
                return _this.files_[fileId];
            });
        },
        enumerable: false,
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
        enumerable: false,
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


// CONCATENATED MODULE: ./src/models/components.ts
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var components_ControllerListRef = /** @class */ (function () {
    function ControllerListRef() {
    }
    ControllerListRef.getInstance = function (name, data) {
        var _a;
        var routeInfo = handlers["c" /* RouteHandler */].getControllerFromName(name);
        if (routeInfo) {
            var controller = new ((_a = routeInfo.controller).bind.apply(_a, __spreadArrays([void 0], handlers["a" /* InjectorHandler */].getConstructorValues(name))))();
            controller.initialize(data);
            return controller;
        }
    };
    ControllerListRef.getMethod = function (className, methodName, data) {
        var controller = ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName];
        }
    };
    ControllerListRef.executeMethod = function (className, methodName, data) {
        var controller = ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName].apply(controller, handlers["a" /* InjectorHandler */].getMethodValues(className, methodName));
        }
    };
    return ControllerListRef;
}());
var Components = /** @class */ (function () {
    function Components() {
    }
    Components.controllers = components_ControllerListRef;
    return Components;
}());


// CONCATENATED MODULE: ./src/models/index.ts










// exports.default = Fort;


/***/ }),
/* 6 */
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
/* 7 */
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
/* 8 */
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
var models = __webpack_require__(5);

// EXTERNAL MODULE: ./src/fort_global.ts
var fort_global = __webpack_require__(1);

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
    controllerInstance.cookie = new models["b" /* CookieManager */](parsedCookies);
    var session = new fort_global["a" /* FortGlobal */].sessionProvider();
    session.cookie = controllerInstance.cookie;
    session.sessionId = parsedCookies[fort_global["a" /* FortGlobal */].appSessionIdentifier];
    controllerInstance.session = session;
    controllerInstance.param = data.param || {};
    controllerInstance.data = data.data || {};
    controllerInstance.file = new models["d" /* FileManager */](data.file || {});
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
    Object.defineProperty(Controller.prototype, "option", {
        get: function () {
            return fort_global["a" /* FortGlobal */].componentOption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Controller.prototype, "logger", {
        get: function () {
            return fort_global["a" /* FortGlobal */].logger;
        },
        enumerable: false,
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
            return fort_global["a" /* FortGlobal */].logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shield.prototype, "option", {
        get: function () {
            return fort_global["a" /* FortGlobal */].componentOption;
        },
        enumerable: false,
        configurable: true
    });
    Shield.prototype.initialize = function (data) {
        return initShield(this, data);
    };
    return Shield;
}());


// EXTERNAL MODULE: ./src/abstracts/session_provider.ts
var session_provider = __webpack_require__(15);

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
            return fort_global["a" /* FortGlobal */].logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Guard.prototype, "option", {
        get: function () {
            return fort_global["a" /* FortGlobal */].componentOption;
        },
        enumerable: false,
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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


var wall_Wall = /** @class */ (function () {
    function Wall() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Wall.prototype, "logger", {
        get: function () {
            return fort_global["a" /* FortGlobal */].logger;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wall.prototype, "option", {
        get: function () {
            return fort_global["a" /* FortGlobal */].componentOption;
        },
        enumerable: false,
        configurable: true
    });
    Wall.prototype.onOutgoing = function (finalResult) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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


// EXTERNAL MODULE: ./src/abstracts/component_option.ts
var component_option = __webpack_require__(16);

// CONCATENATED MODULE: ./src/abstracts/index.ts











/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteHandler; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



var routerCollection = {};
var pushRouterIntoCollection = function (route) {
    var routeObj = new _models__WEBPACK_IMPORTED_MODULE_1__[/* RouteInfo */ "i"]();
    routeObj.init(route);
    routerCollection[route.controllerName] = routeObj;
};
var getActionPattern = function (parentRoute, pattern) {
    return (Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* isNull */ "b"])(parentRoute.path) || parentRoute.path === "/*") ? pattern : "" + parentRoute.path + pattern;
};
var RouteHandler = /** @class */ (function () {
    function RouteHandler() {
    }
    Object.defineProperty(RouteHandler, "routerCollection", {
        get: function () {
            return routerCollection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteHandler, "routesAsArray", {
        get: function () {
            return Object.keys(routerCollection).map(function (workerName) {
                return routerCollection[workerName];
            });
        },
        enumerable: false,
        configurable: true
    });
    RouteHandler.findControllerFromPath = function (urlParts) {
        var _loop_1 = function (controllerName) {
            var isMatched = false;
            var controller = routerCollection[controllerName];
            var patternSplit = controller.path.split("/");
            patternSplit.every(function (patternPart, i) {
                isMatched = patternPart === urlParts[i];
                return isMatched;
            });
            if (isMatched === true) {
                return { value: controller };
            }
        };
        for (var controllerName in routerCollection) {
            var state_1 = _loop_1(controllerName);
            if (typeof state_1 === "object")
                return state_1.value;
        }
    };
    RouteHandler.getControllerFromName = function (name) {
        return routerCollection[name];
    };
    Object.defineProperty(RouteHandler, "defaultRoute", {
        get: function () {
            return routerCollection[RouteHandler.defaultRouteControllerName];
        },
        enumerable: false,
        configurable: true
    });
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
                savedAction.pattern = getActionPattern(route, savedAction.pattern);
                // route.path == null ? savedAction.pattern : `/${route.path}${savedAction.pattern}`;
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
            expectedValue[prop] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getDataType */ "g"])(propValue);
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



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ isNullOrEmpty; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ isNull; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ isArray; });

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





/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ mustache_view_engine_MustacheViewEngine; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ MemorySessionProvider; });

// EXTERNAL MODULE: external "mustache"
var external_mustache_ = __webpack_require__(43);

// EXTERNAL MODULE: ./src/helpers/index.ts + 23 modules
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./src/extra/mustache_view_engine.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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


var mustache_view_engine_MustacheViewEngine = /** @class */ (function () {
    function MustacheViewEngine() {
    }
    MustacheViewEngine.prototype.render = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var viewData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(helpers["j" /* getViewFromFile */])({
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


// EXTERNAL MODULE: ./src/abstracts/session_provider.ts
var session_provider = __webpack_require__(15);

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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

var sessionValues = {};
var MemorySessionProvider = /** @class */ (function (_super) {
    __extends(MemorySessionProvider, _super);
    function MemorySessionProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemorySessionProvider.prototype.get = function (key) {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedSession;
            return memory_session_provider_generator(this, function (_a) {
                savedSession = sessionValues[this.sessionId];
                return [2 /*return*/, savedSession != null ? savedSession[key] : null];
            });
        });
    };
    MemorySessionProvider.prototype.isExist = function (key) {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedValue;
            return memory_session_provider_generator(this, function (_a) {
                savedValue = sessionValues[this.sessionId];
                return [2 /*return*/, savedValue == null ? false : savedValue[key] != null];
            });
        });
    };
    MemorySessionProvider.prototype.getAll = function () {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedValue;
            return memory_session_provider_generator(this, function (_a) {
                savedValue = sessionValues[this.sessionId];
                return [2 /*return*/, savedValue == null ? {} : savedValue];
            });
        });
    };
    MemorySessionProvider.prototype.set = function (key, val) {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            var savedValue;
            var _a;
            return memory_session_provider_generator(this, function (_b) {
                savedValue = sessionValues[this.sessionId];
                if (savedValue == null) {
                    this.createSession();
                    sessionValues[this.sessionId] = (_a = {},
                        _a[key] = val,
                        _a);
                }
                else {
                    savedValue[key] = val;
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
            var savedValue;
            return memory_session_provider_generator(this, function (_a) {
                savedValue = sessionValues[this.sessionId];
                if (savedValue != null) {
                    savedValue[key] = null;
                }
                return [2 /*return*/];
            });
        });
    };
    MemorySessionProvider.prototype.clear = function () {
        return memory_session_provider_awaiter(this, void 0, void 0, function () {
            return memory_session_provider_generator(this, function (_a) {
                // remove session values
                delete sessionValues[this.sessionId];
                // expire cookie in browser
                this.destroySession();
                return [2 /*return*/];
            });
        });
    };
    return MemorySessionProvider;
}(session_provider["a" /* SessionProvider */]));


// CONCATENATED MODULE: ./src/extra/index.ts




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ GenericController; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ GenericXmlParser; });

// UNUSED EXPORTS: GenericGuard, GenericShield, GenericSessionProvider, GenericWall

// EXTERNAL MODULE: ./src/abstracts/index.ts + 14 modules
var abstracts = __webpack_require__(8);

// CONCATENATED MODULE: ./src/generics/generic_guard.ts
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

var GenericGuard = /** @class */ (function (_super) {
    __extends(GenericGuard, _super);
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
}(abstracts["c" /* Guard */]));


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
}(abstracts["f" /* Shield */]));


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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return GenericSessionProvider;
}(abstracts["e" /* SessionProvider */]));


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
}(abstracts["h" /* Wall */]));


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
}(abstracts["b" /* Controller */]));


// CONCATENATED MODULE: ./src/generics/generic_xml_parser.ts
var generic_xml_parser_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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








/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionProvider; });
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var SessionProvider = /** @class */ (function () {
    function SessionProvider() {
    }
    SessionProvider.prototype.createSession = function (sessionId) {
        var now = new Date();
        this.sessionId = sessionId != null ? sessionId : uniqid__WEBPACK_IMPORTED_MODULE_0__();
        this.cookie.addCookie({
            name: _fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + _fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].sessionTimeOut)),
            maxAge: _fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].sessionTimeOut * 60
        });
    };
    SessionProvider.prototype.destroySession = function () {
        var cookie = this.cookie.getCookie(_fort_global__WEBPACK_IMPORTED_MODULE_1__[/* FortGlobal */ "a"].appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
    };
    return SessionProvider;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentOption; });
var ComponentOption = /** @class */ (function () {
    function ComponentOption() {
    }
    ComponentOption.prototype.toModel = function (expectedClass, from) {
        var result = new expectedClass();
        for (var prop in result) {
            result[prop] = from[prop];
        }
        return result;
    };
    ComponentOption.prototype.extractHash = function (expectedHash, from) {
        for (var prop in expectedHash) {
            expectedHash[prop] = from[prop];
        }
        return expectedHash;
    };
    ComponentOption.prototype.isNull = function (value) {
        return value == null;
    };
    ComponentOption.prototype.isNullOrEmpty = function (value) {
        return value == null || value.length === 0;
    };
    ComponentOption.prototype.isEmpty = function (value) {
        return value.length === 0;
    };
    return ComponentOption;
}());



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
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ Worker; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Shields; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Guards; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Route; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ DefaultWorker; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Assign; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Singleton; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ ExpectBody; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ ExpectQuery; });

// EXTERNAL MODULE: ./src/enums/index.ts + 3 modules
var enums = __webpack_require__(0);

// EXTERNAL MODULE: ./src/handlers/index.ts + 6 modules
var handlers = __webpack_require__(3);

// CONCATENATED MODULE: ./src/decorators/worker.ts


// tslint:disable-next-line
var Worker = function () {
    var allowedMethods = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedMethods[_i] = arguments[_i];
    }
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods.length === 0 ? [
                enums["d" /* HTTP_METHOD */].Delete,
                enums["d" /* HTTP_METHOD */].Get,
                enums["d" /* HTTP_METHOD */].Post,
                enums["d" /* HTTP_METHOD */].Patch,
                enums["d" /* HTTP_METHOD */].Put
            ] : allowedMethods,
            guards: [],
            pattern: "/" + methodName.toLowerCase(),
            values: []
        };
        handlers["c" /* RouteHandler */].addWorker(actionInfo, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/shields.ts

// tslint:disable-next-line
var Shields = function () {
    var shields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        shields[_i] = arguments[_i];
    }
    return function (target) {
        var className = target.name;
        handlers["c" /* RouteHandler */].addShields(shields, className);
    };
};

// CONCATENATED MODULE: ./src/decorators/guards.ts

// tslint:disable-next-line
var Guards = function () {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        handlers["c" /* RouteHandler */].addGuards(value, className, methodName);
    });
};

// EXTERNAL MODULE: ./src/helpers/index.ts + 23 modules
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./src/decorators/route.ts


// tslint:disable-next-line
var Route = function (format) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        // remove / from route
        if (format != null) {
            format = Object(helpers["r" /* removeLastSlash */])(format);
        }
        handlers["c" /* RouteHandler */].addPattern(format, className, methodName);
    });
};

// CONCATENATED MODULE: ./src/decorators/default_worker.ts



// tslint:disable-next-line
var DefaultWorker = function () {
    var allowedMethods = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        allowedMethods[_i] = arguments[_i];
    }
    return function (target, methodName, descriptor) {
        if (allowedMethods.length === 0) {
            Worker(enums["d" /* HTTP_METHOD */].Get)(target, methodName, descriptor);
        }
        else {
            Worker.apply(void 0, allowedMethods)(target, methodName, descriptor);
        }
        Route("/")(target, methodName, descriptor);
    };
};

// EXTERNAL MODULE: ./src/constant.ts
var constant = __webpack_require__(4);

// CONCATENATED MODULE: ./src/decorators/assign.ts


// tslint:disable-next-line
var Assign = function (value) {
    return function (target, methodName, paramIndex) {
        var className = target.name || target.constructor.name;
        if (methodName == null) {
            methodName = constant["b" /* __Constructor */];
        }
        handlers["a" /* InjectorHandler */].addWorkerValue(className, methodName, paramIndex, value);
    };
};

// CONCATENATED MODULE: ./src/decorators/singleton.ts


// tslint:disable-next-line
var Singleton = function (value) {
    return function (target, methodName, paramIndex) {
        var className = target.name || target.constructor.name;
        if (methodName == null || methodName === 'constructor') {
            methodName = constant["b" /* __Constructor */];
        }
        handlers["a" /* InjectorHandler */].addSingleton(className, methodName, paramIndex, value);
    };
};

// EXTERNAL MODULE: ./src/enums/data_type.ts
var data_type = __webpack_require__(7);

// CONCATENATED MODULE: ./src/decorators/expect_body.ts



function ExpectBody(value) {
    return function (target, methodName, descriptor) {
        var className = Object(helpers["f" /* getClassName */])(target);
        var type = Object(helpers["g" /* getDataType */])(value);
        switch (type) {
            case data_type["a" /* DATA_TYPE */].Function:
                var valueClassName = Object(helpers["f" /* getClassName */])(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case data_type["a" /* DATA_TYPE */].Object:
                value = Object(helpers["s" /* removeMethodAndNullFromObject */])(value);
                handlers["c" /* RouteHandler */].addExpected("body", className, methodName, value);
                break;
            default:
                throw new Error("expected body should be always an object but found " + type);
        }
    };
}

// CONCATENATED MODULE: ./src/decorators/expect_query.ts



function ExpectQuery(value) {
    return function (target, methodName, descriptor) {
        var className = Object(helpers["f" /* getClassName */])(target);
        var type = Object(helpers["g" /* getDataType */])(value);
        switch (type) {
            case data_type["a" /* DATA_TYPE */].Function:
                var valueClassName = Object(helpers["f" /* getClassName */])(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case data_type["a" /* DATA_TYPE */].Object:
                value = Object(helpers["s" /* removeMethodAndNullFromObject */])(value);
                handlers["c" /* RouteHandler */].addExpected("query", className, methodName, value);
                break;
            default:
                throw new Error("expected query should be always an object but found " + type);
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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
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

/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shields", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guards", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultWorker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Singleton", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpectBody", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpectQuery", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["d"]; });

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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_5__) if(["default","ErrorHandler","HttpCookie","Fort","Router","CookieManager","FileManager","HttpFile","Logger","RouteInfo","Components","Controller","Shield","SessionProvider","Guard","ViewEngine","Wall","XmlParser","ResultMapper","ComponentOption","Worker","Shields","Guards","Route","DefaultWorker","Assign","Singleton","ExpectBody","ExpectQuery","MIME_TYPE","HTTP_METHOD","HTTP_STATUS_CODE","ETag_Type","ERROR_TYPE","DATA_TYPE","jsonResult","textResult","htmlResult","renderView","downloadResult","fileResult","redirectResult","viewResult","getViewFromFile","promise","LogHelper","getMimeTypeFromExtension","parseAndMatchRoute","parseCookie","JsonHelper","removeLastSlash","removeFirstSlash","reverseLoop","compareExpectedAndRemoveUnnecessary","getDataType","getClassName","removeMethodAndNullFromObject","getResultBasedOnMiMe","setResultMapper"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return _extra__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return _extra__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_7__) if(["default","ErrorHandler","HttpCookie","Fort","Router","CookieManager","FileManager","HttpFile","Logger","RouteInfo","Components","Controller","Shield","SessionProvider","Guard","ViewEngine","Wall","XmlParser","ResultMapper","ComponentOption","Worker","Shields","Guards","Route","DefaultWorker","Assign","Singleton","ExpectBody","ExpectQuery","MIME_TYPE","HTTP_METHOD","HTTP_STATUS_CODE","ETag_Type","ERROR_TYPE","DATA_TYPE","jsonResult","textResult","htmlResult","renderView","downloadResult","fileResult","redirectResult","viewResult","getViewFromFile","promise","LogHelper","getMimeTypeFromExtension","parseAndMatchRoute","parseCookie","JsonHelper","removeLastSlash","removeFirstSlash","reverseLoop","compareExpectedAndRemoveUnnecessary","getDataType","getClassName","removeMethodAndNullFromObject","getResultBasedOnMiMe","setResultMapper","MustacheViewEngine","MemorySessionProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));










/***/ })
/******/ ]);
//# sourceMappingURL=fort.js.map