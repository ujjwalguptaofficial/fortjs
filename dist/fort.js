/*!
 * @license :fortjs - V1.4.2 - 24/12/2018
 * https://github.com/ujjwalguptaofficial/fortjs
 * Copyright (c) 2018 @Ujjwal Gupta; Licensed MIT
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abstracts/controller.ts":
/*!*************************************!*\
  !*** ./src/abstracts/controller.ts ***!
  \*************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
var Controller = /** @class */ (function () {
    function Controller() {
    }
    return Controller;
}());



/***/ }),

/***/ "./src/abstracts/guard.ts":
/*!********************************!*\
  !*** ./src/abstracts/guard.ts ***!
  \********************************/
/*! exports provided: Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return Guard; });
var Guard = /** @class */ (function () {
    function Guard() {
    }
    return Guard;
}());



/***/ }),

/***/ "./src/abstracts/index.ts":
/*!********************************!*\
  !*** ./src/abstracts/index.ts ***!
  \********************************/
/*! exports provided: Controller, Shield, SessionProvider, Guard, ViewEngine, Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./src/abstracts/controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _controller__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony import */ var _shield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shield */ "./src/abstracts/shield.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _shield__WEBPACK_IMPORTED_MODULE_1__["Shield"]; });

/* harmony import */ var _session_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_provider */ "./src/abstracts/session_provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return _session_provider__WEBPACK_IMPORTED_MODULE_2__["SessionProvider"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard */ "./src/abstracts/guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return _guard__WEBPACK_IMPORTED_MODULE_3__["Guard"]; });

/* harmony import */ var _view_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view_engine */ "./src/abstracts/view_engine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return _view_engine__WEBPACK_IMPORTED_MODULE_4__["ViewEngine"]; });

/* harmony import */ var _wall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wall */ "./src/abstracts/wall.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return _wall__WEBPACK_IMPORTED_MODULE_5__["Wall"]; });









/***/ }),

/***/ "./src/abstracts/session_provider.ts":
/*!*******************************************!*\
  !*** ./src/abstracts/session_provider.ts ***!
  \*******************************************/
/*! exports provided: SessionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return SessionProvider; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uniqid */ "uniqid");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/global.ts");
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



var SessionProvider = /** @class */ (function () {
    function SessionProvider() {
    }
    SessionProvider.prototype.createSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var now;
            return __generator(this, function (_a) {
                now = new Date();
                this.sessionId = uniqid__WEBPACK_IMPORTED_MODULE_1__();
                this.cookie.addCookie({
                    name: _constant__WEBPACK_IMPORTED_MODULE_0__["__AppSessionIdentifier"],
                    value: this.sessionId,
                    httpOnly: true,
                    path: "/",
                    expires: new Date(now.setMinutes(now.getMinutes() + _global__WEBPACK_IMPORTED_MODULE_2__["Global"].sessionTimeOut)),
                    maxAge: _global__WEBPACK_IMPORTED_MODULE_2__["Global"].sessionTimeOut * 60
                });
                return [2 /*return*/];
            });
        });
    };
    SessionProvider.prototype.destroySession = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.cookie.removeCookie(_constant__WEBPACK_IMPORTED_MODULE_0__["__AppSessionIdentifier"]);
                return [2 /*return*/];
            });
        });
    };
    return SessionProvider;
}());



/***/ }),

/***/ "./src/abstracts/shield.ts":
/*!*********************************!*\
  !*** ./src/abstracts/shield.ts ***!
  \*********************************/
/*! exports provided: Shield */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return Shield; });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    return Shield;
}());



/***/ }),

/***/ "./src/abstracts/view_engine.ts":
/*!**************************************!*\
  !*** ./src/abstracts/view_engine.ts ***!
  \**************************************/
/*! exports provided: ViewEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return ViewEngine; });
var ViewEngine = /** @class */ (function () {
    function ViewEngine() {
    }
    return ViewEngine;
}());



/***/ }),

/***/ "./src/abstracts/wall.ts":
/*!*******************************!*\
  !*** ./src/abstracts/wall.ts ***!
  \*******************************/
/*! exports provided: Wall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return Wall; });
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



/***/ }),

/***/ "./src/constant.ts":
/*!*************************!*\
  !*** ./src/constant.ts ***!
  \*************************/
/*! exports provided: __ContentType, __AppName, __AppSessionIdentifier, __Cookie, __SetCookie, __CurrentPath, __ContentLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ContentType", function() { return __ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__AppName", function() { return __AppName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__AppSessionIdentifier", function() { return __AppSessionIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Cookie", function() { return __Cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SetCookie", function() { return __SetCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__CurrentPath", function() { return __CurrentPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ContentLength", function() { return __ContentLength; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");

/* tslint:disable */
var __ContentType = "Content-Type";
var __AppName = "fort";
var __AppSessionIdentifier = _global__WEBPACK_IMPORTED_MODULE_0__["Global"].appName + "_session_id";
var __Cookie = "Cookie";
var __SetCookie = 'Set-Cookie';
var __CurrentPath = process.cwd();
var __ContentLength = "Content-Length";


/***/ }),

/***/ "./src/decorators/default_worker.ts":
/*!******************************************!*\
  !*** ./src/decorators/default_worker.ts ***!
  \******************************************/
/*! exports provided: defaultWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultWorker", function() { return defaultWorker; });
/* harmony import */ var _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/route_handler */ "./src/handlers/route_handler.ts");
/* harmony import */ var _enums_http_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/http_method */ "./src/enums/http_method.ts");


var defaultWorker = function (allowedMethods) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [_enums_http_method__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHOD"].Get] : allowedMethods,
            guards: [],
            pattern: "/"
        };
        _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addWorker(actionInfo, className);
    };
};


/***/ }),

/***/ "./src/decorators/guards.ts":
/*!**********************************!*\
  !*** ./src/decorators/guards.ts ***!
  \**********************************/
/*! exports provided: guards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/route_handler */ "./src/handlers/route_handler.ts");

var guards = function (value) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addGuards(value, className, methodName);
    });
};


/***/ }),

/***/ "./src/decorators/index.ts":
/*!*********************************!*\
  !*** ./src/decorators/index.ts ***!
  \*********************************/
/*! exports provided: worker, shields, guards, route, defaultWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker */ "./src/decorators/worker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return _worker__WEBPACK_IMPORTED_MODULE_0__["worker"]; });

/* harmony import */ var _shields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shields */ "./src/decorators/shields.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return _shields__WEBPACK_IMPORTED_MODULE_1__["shields"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards */ "./src/decorators/guards.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return _guards__WEBPACK_IMPORTED_MODULE_2__["guards"]; });

/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route */ "./src/decorators/route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "route", function() { return _route__WEBPACK_IMPORTED_MODULE_3__["route"]; });

/* harmony import */ var _default_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default_worker */ "./src/decorators/default_worker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWorker", function() { return _default_worker__WEBPACK_IMPORTED_MODULE_4__["defaultWorker"]; });








/***/ }),

/***/ "./src/decorators/route.ts":
/*!*********************************!*\
  !*** ./src/decorators/route.ts ***!
  \*********************************/
/*! exports provided: route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony import */ var _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/route_handler */ "./src/handlers/route_handler.ts");

var route = function (format) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addPattern(format, className, methodName);
    });
};


/***/ }),

/***/ "./src/decorators/shields.ts":
/*!***********************************!*\
  !*** ./src/decorators/shields.ts ***!
  \***********************************/
/*! exports provided: shields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return shields; });
/* harmony import */ var _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/route_handler */ "./src/handlers/route_handler.ts");

var shields = function (shieldsValue) {
    return function (target) {
        var className = target.name;
        _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addShields(shieldsValue, className);
    };
};


/***/ }),

/***/ "./src/decorators/worker.ts":
/*!**********************************!*\
  !*** ./src/decorators/worker.ts ***!
  \**********************************/
/*! exports provided: worker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return worker; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _handlers_route_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers/route_handler */ "./src/handlers/route_handler.ts");


var worker = function (allowedMethods) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [
                _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Delete, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Get, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Post, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Patch, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Put
            ] : allowedMethods,
            guards: [],
            pattern: "/" + methodName.toLowerCase()
        };
        _handlers_route_handler__WEBPACK_IMPORTED_MODULE_1__["RouteHandler"].addWorker(actionInfo, className);
    };
};


/***/ }),

/***/ "./src/enums/error_type.ts":
/*!*********************************!*\
  !*** ./src/enums/error_type.ts ***!
  \*********************************/
/*! exports provided: ERROR_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["InvalidControllerName"] = "invalid_controller_name";
    ERROR_TYPE["InvalidContentType"] = "invalid_content_type";
    ERROR_TYPE["PortInUse"] = "port_in_use";
    ERROR_TYPE["UndefinedViewEngine"] = "undefined_view_engine";
})(ERROR_TYPE || (ERROR_TYPE = {}));


/***/ }),

/***/ "./src/enums/etag_type.ts":
/*!********************************!*\
  !*** ./src/enums/etag_type.ts ***!
  \********************************/
/*! exports provided: ETag_Type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ETag_Type", function() { return ETag_Type; });
var ETag_Type;
(function (ETag_Type) {
    ETag_Type["Strong"] = "strong";
    ETag_Type["Weak"] = "weak";
})(ETag_Type || (ETag_Type = {}));


/***/ }),

/***/ "./src/enums/http_method.ts":
/*!**********************************!*\
  !*** ./src/enums/http_method.ts ***!
  \**********************************/
/*! exports provided: HTTP_METHOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return HTTP_METHOD; });
var HTTP_METHOD;
(function (HTTP_METHOD) {
    HTTP_METHOD["Get"] = "GET";
    HTTP_METHOD["Post"] = "POST";
    HTTP_METHOD["Put"] = "PUT";
    HTTP_METHOD["Patch"] = "PATCH";
    HTTP_METHOD["Delete"] = "DELETE";
})(HTTP_METHOD || (HTTP_METHOD = {}));


/***/ }),

/***/ "./src/enums/http_status_code.ts":
/*!***************************************!*\
  !*** ./src/enums/http_status_code.ts ***!
  \***************************************/
/*! exports provided: HTTP_STATUS_CODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return HTTP_STATUS_CODE; });
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

/***/ "./src/enums/index.ts":
/*!****************************!*\
  !*** ./src/enums/index.ts ***!
  \****************************/
/*! exports provided: MIME_TYPE, HTTP_METHOD, HTTP_STATUS_CODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mime_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mime_type */ "./src/enums/mime_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _mime_type__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"]; });

/* harmony import */ var _http_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_method */ "./src/enums/http_method.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _http_method__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHOD"]; });

/* harmony import */ var _http_status_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http_status_code */ "./src/enums/http_status_code.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return _http_status_code__WEBPACK_IMPORTED_MODULE_2__["HTTP_STATUS_CODE"]; });






/***/ }),

/***/ "./src/enums/mime_type.ts":
/*!********************************!*\
  !*** ./src/enums/mime_type.ts ***!
  \********************************/
/*! exports provided: MIME_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return MIME_TYPE; });
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


/***/ }),

/***/ "./src/extra/memory_session_provider.ts":
/*!**********************************************!*\
  !*** ./src/extra/memory_session_provider.ts ***!
  \**********************************************/
/*! exports provided: MemorySessionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return MemorySessionProvider; });
/* harmony import */ var _abstracts_session_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts/session_provider */ "./src/abstracts/session_provider.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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

var sessionValues = [];
var MemorySessionProvider = /** @class */ (function (_super) {
    __extends(MemorySessionProvider, _super);
    function MemorySessionProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemorySessionProvider.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var savedValue, value;
            var _this = this;
            return __generator(this, function (_a) {
                savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                if (savedValue != null) {
                    value = savedValue.datas.find(function (qry) { return qry.key === key; });
                    return [2 /*return*/, value];
                }
                return [2 /*return*/, null];
            });
        });
    };
    MemorySessionProvider.prototype.isExist = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var savedValue, index;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var savedValue;
            var _this = this;
            return __generator(this, function (_a) {
                savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                return [2 /*return*/, savedValue == null ? [] : savedValue.datas];
            });
        });
    };
    MemorySessionProvider.prototype.set = function (key, val) {
        return __awaiter(this, void 0, void 0, function () {
            var savedValue;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
                        if (!(savedValue == null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createSession()];
                    case 1:
                        _a.sent();
                        sessionValues.push({
                            identifier: this.sessionId,
                            datas: [{
                                    key: key,
                                    value: val
                                }]
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        savedValue.datas.push({
                            key: key,
                            value: val
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MemorySessionProvider.prototype.setMany = function (values) {
        var _this = this;
        return Promise.all(values.map(function (value) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.set(value.key, value.value)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); }));
    };
    MemorySessionProvider.prototype.remove = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var savedValue, index;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var index;
            var _this = this;
            return __generator(this, function (_a) {
                index = sessionValues.findIndex(function (q) { return q.identifier === _this.sessionId; });
                if (index >= 0) {
                    sessionValues.splice(index, 1);
                }
                this.destroySession();
                return [2 /*return*/];
            });
        });
    };
    return MemorySessionProvider;
}(_abstracts_session_provider__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"]));



/***/ }),

/***/ "./src/fort.ts":
/*!*********************!*\
  !*** ./src/fort.ts ***!
  \*********************/
/*! exports provided: Fort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fort", function() { return Fort; });
/* harmony import */ var _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/route_handler */ "./src/handlers/route_handler.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _extra_memory_session_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra/memory_session_provider */ "./src/extra/memory_session_provider.ts");
/* harmony import */ var _model_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/error_handler */ "./src/model/error_handler.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constant */ "./src/constant.ts");
/* harmony import */ var _handlers_request_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/request_handler */ "./src/handlers/request_handler.ts");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _enums_etag_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./enums/etag_type */ "./src/enums/etag_type.ts");
/* harmony import */ var _helpers_log_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/log_helper */ "./src/helpers/log_helper.ts");
/* harmony import */ var _enums_error_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./enums/error_type */ "./src/enums/error_type.ts");
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/promise */ "./src/helpers/promise.ts");
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












var Fort = /** @class */ (function () {
    function Fort() {
        this.routes = [];
        this.walls = [];
    }
    Fort.prototype.isArray_ = function (value) {
        return _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isArray(value);
    };
    Fort.prototype.saveAppOption_ = function (option) {
        var defaultEtagConfig = {
            type: _enums_etag_type__WEBPACK_IMPORTED_MODULE_8__["ETag_Type"].Weak
        };
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].port = option.port == null ? 4000 : option.port;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].shouldParseCookie = option.shouldParseCookie == null ? true : option.shouldParseCookie;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].shouldParsePost = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].sessionTimeOut = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].folders = option.folders == null ? [] : option.folders;
        if (this.isArray_(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].folders) === false) {
            throw new Error("Option folders should be an array");
        }
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].defaultPath = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.defaultPath) === true ? "" : "/" + option.defaultPath.toLowerCase();
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].appName = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNullOrEmpty(option.appName) === true ? _constant__WEBPACK_IMPORTED_MODULE_5__["__AppName"] : option.appName;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].eTag = option.eTag == null ? defaultEtagConfig : option.eTag;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].walls = this.walls;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].viewEngine = this.viewEngine == null ? null : new this.viewEngine();
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].sessionProvider = this.sessionProvider == null ? _extra_memory_session_provider__WEBPACK_IMPORTED_MODULE_3__["MemorySessionProvider"] :
            this.sessionProvider;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].errorHandler = this.errorHandler == null ? _model_error_handler__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"] : this.errorHandler;
    };
    Fort.prototype.create = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                    _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addToRouterCollection(route);
                });
                this.saveAppOption_(option);
                this.httpServer = http__WEBPACK_IMPORTED_MODULE_7__["createServer"](function (req, res) {
                    new _handlers_request_handler__WEBPACK_IMPORTED_MODULE_6__["RequestHandler"](req, res).handle();
                }).listen(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].port).once("error", function (err) {
                    if (err.code === 'EADDRINUSE') {
                        new _helpers_log_helper__WEBPACK_IMPORTED_MODULE_9__["LogHelper"](_enums_error_type__WEBPACK_IMPORTED_MODULE_10__["ERROR_TYPE"].PortInUse, _global__WEBPACK_IMPORTED_MODULE_1__["Global"].port).throw();
                    }
                    else {
                        throw err;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    Fort.prototype.destroy = function () {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_11__["promise"])(function (res, rej) {
            _this.httpServer.close(res);
        });
    };
    Fort.prototype.mapPath = function (oldPath, newPath) {
    };
    Fort.prototype.mapVirtualPath = function (actualPath, mappedPath) {
    };
    return Fort;
}());



/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.walls = [];
    return Global;
}());



/***/ }),

/***/ "./src/handlers/controller_handler.ts":
/*!********************************************!*\
  !*** ./src/handlers/controller_handler.ts ***!
  \********************************************/
/*! exports provided: ControllerHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerHandler", function() { return ControllerHandler; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _enums_mime_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/mime_type */ "./src/enums/mime_type.ts");
/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsontoxml */ "jsontoxml");
/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsontoxml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");
/* harmony import */ var _file_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file_handler */ "./src/handlers/file_handler.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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






var ControllerHandler = /** @class */ (function (_super) {
    __extends(ControllerHandler, _super);
    function ControllerHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerHandler.prototype.getDataBasedOnMimeType_ = function (mimeType) {
        switch (mimeType) {
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Json:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return JSON.stringify(this.controllerResult_.responseData);
                }
                return this.controllerResult_.responseData;
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Xml:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return jsontoxml__WEBPACK_IMPORTED_MODULE_2__({
                        document: this.controllerResult_.responseData
                    }, {
                        xmlHeader: true
                    });
                }
                return this.controllerResult_.responseData;
            default:
                return this.controllerResult_.responseData;
        }
    };
    ControllerHandler.prototype.finishResponse_ = function (negotiateMimeType) {
        var _a;
        this.response.writeHead(this.controllerResult_.statusCode || _enums_http_status_code__WEBPACK_IMPORTED_MODULE_3__["HTTP_STATUS_CODE"].Ok, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_0__["__ContentType"]] = negotiateMimeType, _a));
        this.response.end(this.getDataBasedOnMimeType_(negotiateMimeType));
    };
    ControllerHandler.prototype.handleRedirectResult_ = function () {
        this.response.setHeader('Location', this.controllerResult_.responseData);
        this.response.writeHead(this.controllerResult_.statusCode || _enums_http_status_code__WEBPACK_IMPORTED_MODULE_3__["HTTP_STATUS_CODE"].Ok, { 'Location': this.controllerResult_.responseData });
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
        var parsedPath = path__WEBPACK_IMPORTED_MODULE_5__["parse"](result.file.filePath);
        if (result.file.shouldDownload === true) {
            var fileName = result.file.alias == null ? parsedPath.name : result.file.alias;
            this.response.setHeader("Content-Disposition", "attachment;filename=" + fileName + parsedPath.ext);
        }
        this.handleFileRequestFromAbsolutePath(result.file.filePath, parsedPath.ext);
    };
    ControllerHandler.prototype.onResultEvaluated = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, negotiateMimeType;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _a.sent();
                        this.controllerResult_ = result;
                        if (this.cookieManager != null) {
                            this.cookieManager.responseCookie_.forEach(function (value) {
                                _this.response.setHeader(_constant__WEBPACK_IMPORTED_MODULE_0__["__SetCookie"], value);
                            });
                        }
                        if (result.shouldRedirect == null || result.shouldRedirect === false) {
                            if (result.responseFormat == null) {
                                if (result.file == null) {
                                    contentType = result.contentType || _enums_mime_type__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Text;
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
}(_file_handler__WEBPACK_IMPORTED_MODULE_4__["FileHandler"]));



/***/ }),

/***/ "./src/handlers/file_handler.ts":
/*!**************************************!*\
  !*** ./src/handlers/file_handler.ts ***!
  \**************************************/
/*! exports provided: FileHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHandler", function() { return FileHandler; });
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _request_handler_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request_handler_helper */ "./src/handlers/request_handler_helper.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_get_mime_type_from_extension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/get_mime_type_from_extension */ "./src/helpers/get_mime_type_from_extension.ts");
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/promise */ "./src/helpers/promise.ts");
/* harmony import */ var etag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! etag */ "etag");
/* harmony import */ var etag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(etag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _enums_etag_type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums/etag_type */ "./src/enums/etag_type.ts");
/* harmony import */ var fresh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! fresh */ "fresh");
/* harmony import */ var fresh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fresh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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












var FileHandler = /** @class */ (function (_super) {
    __extends(FileHandler, _super);
    function FileHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileHandler.prototype.getFileInfoFromUrl_ = function (urlPath) {
        var splittedValue = urlPath.split("/");
        var fileInfo = {
            folder: "/",
            file: ""
        };
        if (splittedValue.length > 2 || !this.isNullOrEmpty(path__WEBPACK_IMPORTED_MODULE_2__["parse"](urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
        }
        return fileInfo;
    };
    FileHandler.prototype.getFileStats_ = function (filePath) {
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_7__["promise"])(function (res, rej) {
            fs__WEBPACK_IMPORTED_MODULE_5__["lstat"](filePath, function (err, status) {
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
        return __awaiter(this, void 0, void 0, function () {
            var fileInfo, ex_1;
            return __generator(this, function (_a) {
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
            var folder = _global__WEBPACK_IMPORTED_MODULE_1__["Global"].folders.find(function (qry) { return qry.alias === fileInfo.folder; });
            if (folder != null) {
                return path__WEBPACK_IMPORTED_MODULE_2__["join"](folder.path, fileInfo.file);
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
        var extension = path__WEBPACK_IMPORTED_MODULE_2__["parse"](urlPath).ext;
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
        return __awaiter(this, void 0, void 0, function () {
            var fileType, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        absolutePath = path__WEBPACK_IMPORTED_MODULE_2__["join"](absolutePath, "index.html");
                        return [4 /*yield*/, this.getFileStats_(absolutePath)];
                    case 1:
                        fileInfo = _a.sent();
                        if (fileInfo != null) {
                            fileType = _enums__WEBPACK_IMPORTED_MODULE_11__["MIME_TYPE"].Html;
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
        return __awaiter(this, void 0, void 0, function () {
            var absFilePath, fileInfo, ex_3;
            return __generator(this, function (_a) {
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
        return fresh__WEBPACK_IMPORTED_MODULE_10__(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    };
    FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mimeType, negotiateMimeType, lastModified, eTagValue, readStream, ex_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        mimeType = void 0;
                        if (fileType[0] === '.') { // its extension
                            mimeType = Object(_helpers_get_mime_type_from_extension__WEBPACK_IMPORTED_MODULE_6__["getMimeTypeFromExtension"])(fileType);
                        }
                        else { // mime type
                            mimeType = fileType;
                        }
                        negotiateMimeType = this.getContentTypeFromNegotiation(mimeType);
                        if (negotiateMimeType != null) {
                            lastModified = fileInfo.mtime.toUTCString();
                            eTagValue = etag__WEBPACK_IMPORTED_MODULE_8__(fileInfo, {
                                weak: _global__WEBPACK_IMPORTED_MODULE_1__["Global"].eTag.type === _enums_etag_type__WEBPACK_IMPORTED_MODULE_9__["ETag_Type"].Weak
                            });
                            if (this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                                this.response.statusCode = _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].NotModified;
                                this.response.end();
                            }
                            else {
                                this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok, (_a = {},
                                    _a[_constant__WEBPACK_IMPORTED_MODULE_3__["__ContentType"]] = mimeType,
                                    _a['Etag'] = eTagValue,
                                    _a['Last-Modified'] = lastModified,
                                    _a));
                                readStream = fs__WEBPACK_IMPORTED_MODULE_5__["createReadStream"](filePath);
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
}(_request_handler_helper__WEBPACK_IMPORTED_MODULE_4__["RequestHandlerHelper"]));



/***/ }),

/***/ "./src/handlers/post_handler.ts":
/*!**************************************!*\
  !*** ./src/handlers/post_handler.ts ***!
  \**************************************/
/*! exports provided: PostHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostHandler", function() { return PostHandler; });
/* harmony import */ var _controller_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller_handler */ "./src/handlers/controller_handler.ts");
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/promise */ "./src/helpers/promise.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _enums_mime_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/mime_type */ "./src/enums/mime_type.ts");
/* harmony import */ var content_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! content-type */ "content-type");
/* harmony import */ var content_type__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(content_type__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! multiparty */ "multiparty");
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _model_file_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/file_manager */ "./src/model/file_manager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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








var PostHandler = /** @class */ (function (_super) {
    __extends(PostHandler, _super);
    function PostHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.file = new _model_file_manager__WEBPACK_IMPORTED_MODULE_7__["FileManager"]();
        return _this;
    }
    PostHandler.prototype.getPostRawData_ = function () {
        var _this = this;
        var body = [];
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (res, rej) {
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
        return new Promise(function (res, rej) {
            new multiparty__WEBPACK_IMPORTED_MODULE_6__["Form"]().parse(_this.request, function (err, fields, files) {
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
        return __awaiter(this, void 0, void 0, function () {
            var postData, contentType, result, bodyBuffer, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        postData = void 0;
                        contentType = this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_2__["__ContentType"]] || this.request.headers["content-type"];
                        if (contentType != null) {
                            contentType = content_type__WEBPACK_IMPORTED_MODULE_4__["parse"](contentType).type;
                        }
                        if (!(contentType === _enums_mime_type__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].FormMultiPart)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.parseMultiPartData_()];
                    case 1:
                        result = _a.sent();
                        postData = result.field;
                        this.file.files = result.file;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getPostRawData_()];
                    case 3:
                        bodyBuffer = _a.sent();
                        switch (contentType) {
                            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].Json:
                                try {
                                    postData = JSON.parse(bodyBuffer.toString());
                                }
                                catch (ex) {
                                    /* tslint:disable-next-line */
                                    throw "Post data is invalid";
                                }
                                break;
                            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].Text:
                            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].Html:
                                postData = bodyBuffer.toString();
                                break;
                            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].FormUrlEncoded:
                                postData = querystring__WEBPACK_IMPORTED_MODULE_5__["parse"](bodyBuffer.toString());
                                break;
                            default:
                                postData = {};
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/, postData];
                    case 5:
                        ex_1 = _a.sent();
                        throw ex_1;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return PostHandler;
}(_controller_handler__WEBPACK_IMPORTED_MODULE_0__["ControllerHandler"]));



/***/ }),

/***/ "./src/handlers/request_handler.ts":
/*!*****************************************!*\
  !*** ./src/handlers/request_handler.ts ***!
  \*****************************************/
/*! exports provided: RequestHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHandler", function() { return RequestHandler; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _helpers_parse_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/parse_cookie */ "./src/helpers/parse_cookie.ts");
/* harmony import */ var _model_cookie_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/cookie_manager */ "./src/model/cookie_manager.ts");
/* harmony import */ var _helpers_parse_match_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/parse_match_route */ "./src/helpers/parse_match_route.ts");
/* harmony import */ var _enums_http_method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums/http_method */ "./src/enums/http_method.ts");
/* harmony import */ var _post_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post_handler */ "./src/handlers/post_handler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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








var RequestHandler = /** @class */ (function (_super) {
    __extends(RequestHandler, _super);
    function RequestHandler(request, response) {
        var _this = _super.call(this) || this;
        _this.data_ = {};
        _this.request = request;
        _this.response = response;
        _this.registerEvents_();
        return _this;
    }
    RequestHandler.prototype.registerEvents_ = function () {
        this.request.on('error', this.onBadRequest);
        this.response.on('error', this.onErrorOccured.bind(this));
    };
    RequestHandler.prototype.runWallIncoming_ = function () {
        var _this = this;
        return Promise.all(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].walls.map(function (wall) { return __awaiter(_this, void 0, void 0, function () {
            var wallObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wallObj = new wall();
                        wallObj.cookie = this.cookieManager;
                        wallObj.session = this.session_;
                        wallObj.request = this.request;
                        wallObj.response = this.response;
                        wallObj.data = this.data_;
                        wallObj.query = this.query_;
                        this.wallInstances.push(wallObj);
                        return [4 /*yield*/, wallObj.onIncoming()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); }));
    };
    RequestHandler.prototype.runController_ = function () {
        var controllerObj = new this.routeMatchInfo_.controller();
        controllerObj.request = this.request;
        controllerObj.response = this.response;
        controllerObj.query = this.query_;
        controllerObj.body = this.body;
        controllerObj.session = this.session_;
        controllerObj.cookie = this.cookieManager;
        controllerObj.params = this.routeMatchInfo_.params;
        controllerObj.data = this.data_;
        controllerObj.file = this.file;
        controllerObj[this.routeMatchInfo_.actionInfo.workerName]().then(this.onResultEvaluated.bind(this)).catch(this.onErrorOccured.bind(this));
    };
    RequestHandler.prototype.executeShieldsProtection_ = function () {
        var _this = this;
        return Promise.all(this.routeMatchInfo_.shields.map(function (shield) { return __awaiter(_this, void 0, void 0, function () {
            var shieldObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        shieldObj = new shield();
                        shieldObj.cookie = this.cookieManager;
                        shieldObj.query = this.query_;
                        shieldObj.session = this.session_;
                        shieldObj.request = this.request;
                        shieldObj.response = this.response;
                        shieldObj.data = this.data_;
                        return [4 /*yield*/, shieldObj.protect()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); }));
    };
    RequestHandler.prototype.executeGuardsCheck_ = function (guards) {
        var _this = this;
        return Promise.all(guards.map(function (guard) { return __awaiter(_this, void 0, void 0, function () {
            var guardObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        guardObj = new guard();
                        guardObj.body = this.body;
                        guardObj.cookie = this.cookieManager;
                        guardObj.query = this.query_;
                        guardObj.session = this.session_;
                        guardObj.request = this.request;
                        guardObj.response = this.response;
                        guardObj.data = this.data_;
                        guardObj.file = this.file;
                        guardObj.params = this.routeMatchInfo_.params;
                        return [4 /*yield*/, guardObj.check()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); }));
    };
    RequestHandler.prototype.parseCookieFromRequest_ = function () {
        if (_global__WEBPACK_IMPORTED_MODULE_2__["Global"].shouldParseCookie === true) {
            var rawCookie = (this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_1__["__Cookie"]] || this.request.headers["cookie"]);
            var parsedCookies = Object(_helpers_parse_cookie__WEBPACK_IMPORTED_MODULE_3__["parseCookie"])(rawCookie);
            this.session_ = new _global__WEBPACK_IMPORTED_MODULE_2__["Global"].sessionProvider();
            this.cookieManager = new _model_cookie_manager__WEBPACK_IMPORTED_MODULE_4__["CookieManager"](parsedCookies);
            this.session_.sessionId = parsedCookies[_constant__WEBPACK_IMPORTED_MODULE_1__["__AppSessionIdentifier"]];
            this.session_.cookie = this.cookieManager;
        }
    };
    RequestHandler.prototype.setPreHeader_ = function () {
        this.response.setHeader('X-Powered-By', _global__WEBPACK_IMPORTED_MODULE_2__["Global"].appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    };
    RequestHandler.prototype.execute_ = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlDetail, wallProtectionResult, responseByWall, pathUrl, requestMethod, actionInfo, shieldProtectionResult, responseByShield, guardsCheckResult, responseByGuard, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 11, , 12]);
                        urlDetail = url__WEBPACK_IMPORTED_MODULE_0__["parse"](this.request.url, true);
                        this.query_ = urlDetail.query;
                        this.parseCookieFromRequest_();
                        return [4 /*yield*/, this.runWallIncoming_()];
                    case 1:
                        wallProtectionResult = _a.sent();
                        responseByWall = wallProtectionResult.find(function (qry) { return qry != null; });
                        if (!(responseByWall == null)) return [3 /*break*/, 9];
                        pathUrl = urlDetail.pathname;
                        requestMethod = this.request.method;
                        this.routeMatchInfo_ = Object(_helpers_parse_match_route__WEBPACK_IMPORTED_MODULE_5__["parseAndMatchRoute"])(pathUrl.toLowerCase(), requestMethod);
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
        return __awaiter(this, void 0, void 0, function () {
            var body, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.request.method === _enums_http_method__WEBPACK_IMPORTED_MODULE_6__["HTTP_METHOD"].Get)) return [3 /*break*/, 1];
                        this.body = {};
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(_global__WEBPACK_IMPORTED_MODULE_2__["Global"].shouldParsePost === true)) return [3 /*break*/, 5];
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setPreHeader_();
                this.execute_();
                return [2 /*return*/];
            });
        });
    };
    return RequestHandler;
}(_post_handler__WEBPACK_IMPORTED_MODULE_7__["PostHandler"]));



/***/ }),

/***/ "./src/handlers/request_handler_helper.ts":
/*!************************************************!*\
  !*** ./src/handlers/request_handler_helper.ts ***!
  \************************************************/
/*! exports provided: RequestHandlerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHandlerHelper", function() { return RequestHandlerHelper; });
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/mime_type */ "./src/enums/mime_type.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var negotiator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! negotiator */ "negotiator");
/* harmony import */ var negotiator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(negotiator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ "./src/util.ts");
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






var RequestHandlerHelper = /** @class */ (function () {
    function RequestHandlerHelper() {
        this.wallInstances = [];
    }
    RequestHandlerHelper.prototype.isNullOrEmpty = function (value) {
        return _util__WEBPACK_IMPORTED_MODULE_5__["Util"].isNullOrEmpty(value);
    };
    RequestHandlerHelper.prototype.runWallOutgoing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.all(this.wallInstances.reverse().map(function (wallObj) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(wallObj.onOutgoing != null)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, wallObj.onOutgoing()];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2: return [2 /*return*/];
                            }
                        });
                    }); }))];
            });
        });
    };
    RequestHandlerHelper.prototype.getContentTypeFromNegotiation = function (type) {
        var negotiator = new negotiator__WEBPACK_IMPORTED_MODULE_4__(this.request);
        var availableTypes = this.getAvailableTypes_(type);
        if (availableTypes == null) {
            availableTypes = [type];
        }
        return negotiator.mediaType(availableTypes);
    };
    RequestHandlerHelper.prototype.getContentTypeFromNegotiationHavingMultipleTypes = function (types) {
        var negotiator = new negotiator__WEBPACK_IMPORTED_MODULE_4__(this.request);
        return negotiator.mediaType(types);
    };
    RequestHandlerHelper.prototype.getAvailableTypes_ = function (type) {
        switch (type) {
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Json:
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Xml:
                return [_enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Json, _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Xml];
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html:
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Css:
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Csv:
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Js:
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Rtf:
            case _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Text:
                return [_enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Text, _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Js,
                    _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Css, _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Rtf, _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Csv];
        }
        return null;
    };
    RequestHandlerHelper.prototype.onBadRequest = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new _global__WEBPACK_IMPORTED_MODULE_3__["Global"].errorHandler().onBadRequest(error)];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].BadRequest, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new _global__WEBPACK_IMPORTED_MODULE_3__["Global"].errorHandler().onForbiddenRequest()];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Forbidden, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new _global__WEBPACK_IMPORTED_MODULE_3__["Global"].errorHandler().onNotAcceptableRequest()];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].NotAcceptable, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new _global__WEBPACK_IMPORTED_MODULE_3__["Global"].errorHandler().onNotFound(this.request.url)];
                    case 1:
                        errMessage = _b.sent();
                        this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].NotFound, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, err_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new _global__WEBPACK_IMPORTED_MODULE_3__["Global"].errorHandler().onMethodNotAllowed()];
                    case 1:
                        errMessage = _b.sent();
                        this.response.setHeader("Allow", allowedMethods.join(","));
                        this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].MethodNotAllowed, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, result, err_5;
            return __generator(this, function (_b) {
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
                        return [4 /*yield*/, new _global__WEBPACK_IMPORTED_MODULE_3__["Global"].errorHandler().onServerError(error)];
                    case 2:
                        result = _b.sent();
                        this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].InternalServerError, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
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



/***/ }),

/***/ "./src/handlers/route_handler.ts":
/*!***************************************!*\
  !*** ./src/handlers/route_handler.ts ***!
  \***************************************/
/*! exports provided: RouteHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHandler", function() { return RouteHandler; });
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
                actions: [],
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
            route.actions.forEach(function (actionInfo) {
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
                actions: [],
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
                actions: [newAction],
                controller: null,
                controllerName: className,
                shields: [],
                path: null
            });
        }
        else {
            var savedAction = router.actions.find(function (val) { return val.workerName === newAction.workerName; });
            if (savedAction == null) {
                newAction.pattern = router.path == null ? newAction.pattern : "/" + router.path + newAction.pattern;
                router.actions.push(newAction);
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
                actions: [{
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
            var savedAction = routerCollection[index].actions.find(function (val) { return val.workerName === actionName; });
            if (savedAction == null) {
                routerCollection[index].actions.push({
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
                actions: [{
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
            var savedAction = router.actions.find(function (val) { return val.workerName === actionName; });
            pattern = router.path == null ? pattern : "/" + router.path + pattern;
            if (savedAction == null) {
                router.actions.push({
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



/***/ }),

/***/ "./src/helpers/download_result.ts":
/*!****************************************!*\
  !*** ./src/helpers/download_result.ts ***!
  \****************************************/
/*! exports provided: downloadResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadResult", function() { return downloadResult; });
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");

var downloadResult = function (filePath, downloadFileName) {
    return {
        statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok,
        file: {
            filePath: filePath,
            shouldDownload: true,
            alias: downloadFileName
        }
    };
};


/***/ }),

/***/ "./src/helpers/file_helper.ts":
/*!************************************!*\
  !*** ./src/helpers/file_helper.ts ***!
  \************************************/
/*! exports provided: FileHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHelper", function() { return FileHelper; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promise */ "./src/helpers/promise.ts");


var FileHelper = /** @class */ (function () {
    function FileHelper() {
    }
    FileHelper.isPathExist = function (path) {
        return Object(_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            try {
                fs__WEBPACK_IMPORTED_MODULE_0__["exists"](path, function (isExist) {
                    resolve(isExist);
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    FileHelper.isDirectory = function (path) {
        return Object(_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            try {
                fs__WEBPACK_IMPORTED_MODULE_0__["lstat"](path, function (err, status) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(status.isDirectory());
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    FileHelper.readFile = function (path) {
        return Object(_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            try {
                fs__WEBPACK_IMPORTED_MODULE_0__["readFile"](path, function (err, data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(data);
                    }
                });
            }
            catch (ex) {
                reject(ex);
            }
        });
    };
    FileHelper.copyFile = function (oldPath, newPath) {
        return new Promise(function (res, rej) {
            fs__WEBPACK_IMPORTED_MODULE_0__["rename"](oldPath, newPath, function (err) {
                if (err) {
                    if (err.code === 'EXDEV') {
                        copy();
                    }
                    else {
                        rej(err);
                    }
                }
                res();
            });
            var copy = function () {
                var readStream = fs__WEBPACK_IMPORTED_MODULE_0__["createReadStream"](oldPath);
                var writeStream = fs__WEBPACK_IMPORTED_MODULE_0__["createWriteStream"](newPath);
                readStream.on('error', rej);
                writeStream.on('error', rej);
                readStream.on('close', function () {
                    fs__WEBPACK_IMPORTED_MODULE_0__["unlink"](oldPath, res);
                });
                readStream.pipe(writeStream);
            };
        });
    };
    return FileHelper;
}());



/***/ }),

/***/ "./src/helpers/file_result.ts":
/*!************************************!*\
  !*** ./src/helpers/file_result.ts ***!
  \************************************/
/*! exports provided: fileResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileResult", function() { return fileResult; });
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");

var fileResult = function (filePath) {
    return {
        statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok,
        file: {
            filePath: filePath
        }
    };
};


/***/ }),

/***/ "./src/helpers/get_mime_type_from_extension.ts":
/*!*****************************************************!*\
  !*** ./src/helpers/get_mime_type_from_extension.ts ***!
  \*****************************************************/
/*! exports provided: getMimeTypeFromExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return getMimeTypeFromExtension; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");

var getMimeTypeFromExtension = function (ext) {
    switch (ext) {
        case ".htm":
        case ".html":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html;
        case ".css":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Css;
        case ".js":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Js;
        case ".png":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Png;
        case ".woff":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Woff;
        case ".woff2":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Woff2;
        case ".json":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json;
        case ".txt":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text;
        case ".jpg":
        case ".jpeg":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Jpeg;
        case ".rtf":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Rtf;
        case ".ttf":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Ttf;
        case ".eot":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Eot;
        case '.otf':
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Otf;
        case ".swf":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Swf;
        case ".avi":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Avi;
        case ".Svg":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Svg;
        case ".pdf":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Pdf;
        case ".xml":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Xml;
        case ".csv":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Csv;
        case ".xls":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Xls;
        case ".xlsx":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Xlsx;
        case ".bmp":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Bmp;
        case ".gif":
            return _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Gif;
        default:
            return "application/octet-stream";
    }
};


/***/ }),

/***/ "./src/helpers/html_result.ts":
/*!************************************!*\
  !*** ./src/helpers/html_result.ts ***!
  \************************************/
/*! exports provided: htmlResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return htmlResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");


var htmlResult = function (html, statusCode) {
    return {
        contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html,
        responseData: html,
        statusCode: statusCode || _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
    };
};


/***/ }),

/***/ "./src/helpers/index.ts":
/*!******************************!*\
  !*** ./src/helpers/index.ts ***!
  \******************************/
/*! exports provided: jsonResult, textResult, htmlResult, renderView, downloadResult, fileResult, redirectResult, viewResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json_result */ "./src/helpers/json_result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return _json_result__WEBPACK_IMPORTED_MODULE_0__["jsonResult"]; });

/* harmony import */ var _text_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_result */ "./src/helpers/text_result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return _text_result__WEBPACK_IMPORTED_MODULE_1__["textResult"]; });

/* harmony import */ var _html_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html_result */ "./src/helpers/html_result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return _html_result__WEBPACK_IMPORTED_MODULE_2__["htmlResult"]; });

/* harmony import */ var _render_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render_view */ "./src/helpers/render_view.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderView", function() { return _render_view__WEBPACK_IMPORTED_MODULE_3__["renderView"]; });

/* harmony import */ var _download_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download_result */ "./src/helpers/download_result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadResult", function() { return _download_result__WEBPACK_IMPORTED_MODULE_4__["downloadResult"]; });

/* harmony import */ var _file_result__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file_result */ "./src/helpers/file_result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileResult", function() { return _file_result__WEBPACK_IMPORTED_MODULE_5__["fileResult"]; });

/* harmony import */ var _redirect_result__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirect_result */ "./src/helpers/redirect_result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectResult", function() { return _redirect_result__WEBPACK_IMPORTED_MODULE_6__["redirectResult"]; });

/* harmony import */ var _view_result__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view_result */ "./src/helpers/view_result.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return _view_result__WEBPACK_IMPORTED_MODULE_7__["viewResult"]; });











/***/ }),

/***/ "./src/helpers/is_env_dev.ts":
/*!***********************************!*\
  !*** ./src/helpers/is_env_dev.ts ***!
  \***********************************/
/*! exports provided: isEnvDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnvDev", function() { return isEnvDev; });
var isEnvDev = function () {
    return "development" === 'development';
};


/***/ }),

/***/ "./src/helpers/json_result.ts":
/*!************************************!*\
  !*** ./src/helpers/json_result.ts ***!
  \************************************/
/*! exports provided: jsonResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return jsonResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");


var jsonResult = function (value, statusCode) {
    return {
        contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json,
        responseData: value,
        statusCode: statusCode || _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
    };
};


/***/ }),

/***/ "./src/helpers/log_helper.ts":
/*!***********************************!*\
  !*** ./src/helpers/log_helper.ts ***!
  \***********************************/
/*! exports provided: LogHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogHelper", function() { return LogHelper; });
/* harmony import */ var _enums_error_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/error_type */ "./src/enums/error_type.ts");

var LogHelper = /** @class */ (function () {
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
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidControllerName:
                errMsg = "Invalid controller name - '" + this.info_ + "'. Controller name must contain 'controller'.";
                break;
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidContentType:
                errMsg = "Content type - '" + this.info_ + "' is not valid. Please create an issue if you think this is valid type.";
                break;
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].PortInUse:
                errMsg = "Port " + this.info_ + " is being used by another process.";
                break;
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].UndefinedViewEngine:
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



/***/ }),

/***/ "./src/helpers/parse_cookie.ts":
/*!*************************************!*\
  !*** ./src/helpers/parse_cookie.ts ***!
  \*************************************/
/*! exports provided: parseCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return parseCookie; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/util.ts");

var parseCookie = function (cookie) {
    var value = {};
    if (!_util__WEBPACK_IMPORTED_MODULE_0__["Util"].isNullOrEmpty(cookie)) {
        cookie.split(';').forEach(function (val) {
            var parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
};


/***/ }),

/***/ "./src/helpers/parse_match_route.ts":
/*!******************************************!*\
  !*** ./src/helpers/parse_match_route.ts ***!
  \******************************************/
/*! exports provided: parseAndMatchRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return parseAndMatchRoute; });
/* harmony import */ var _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers/route_handler */ "./src/handlers/route_handler.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./src/global.ts");


var parseAndMatchRoute = function (url, reqMethod) {
    var urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        url = url.substr(0, urlLength - 1);
    }
    // add default path if url is /
    if (url === "") {
        url += _global__WEBPACK_IMPORTED_MODULE_1__["Global"].defaultPath;
    }
    var urlParts = url.split("/");
    var matchedRoute = {
        allows: []
    };
    var firstPart = urlParts[1];
    var route = _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].routerCollection.find(function (qry) { return qry.path === firstPart; });
    if (route != null) {
        matchedRoute.controller = route.controller;
        var urlPartLength_1 = urlParts.length;
        if (urlPartLength_1 === 2) { // url does not have action path
            var pattern_1 = "/" + route.path + "/";
            route.actions.every(function (action) {
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
            // const regex = /{(.*)}/;
            // const regex = /{(.*)}(?!\.)/;
            var regex1_1 = /{(.*)}(?!.)/;
            var regex2_1 = /{(.*)}\.(\w+)(?!.)/;
            route.actions.every(function (routeActionInfo) {
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


/***/ }),

/***/ "./src/helpers/promise.ts":
/*!********************************!*\
  !*** ./src/helpers/promise.ts ***!
  \********************************/
/*! exports provided: promise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
var promise = function (callBack) {
    return new Promise(callBack);
};


/***/ }),

/***/ "./src/helpers/redirect_result.ts":
/*!****************************************!*\
  !*** ./src/helpers/redirect_result.ts ***!
  \****************************************/
/*! exports provided: redirectResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectResult", function() { return redirectResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");


var redirectResult = function (url) {
    return {
        contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text,
        responseData: url,
        statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Redirect,
        shouldRedirect: true
    };
};


/***/ }),

/***/ "./src/helpers/render_view.ts":
/*!************************************!*\
  !*** ./src/helpers/render_view.ts ***!
  \************************************/
/*! exports provided: renderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderView", function() { return renderView; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./src/global.ts");
/* harmony import */ var _is_env_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_env_dev */ "./src/helpers/is_env_dev.ts");
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log_helper */ "./src/helpers/log_helper.ts");
/* harmony import */ var _enums_error_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/error_type */ "./src/enums/error_type.ts");




var renderView = function (viewName, model) {
    if (Object(_is_env_dev__WEBPACK_IMPORTED_MODULE_1__["isEnvDev"])()) {
        if (_global__WEBPACK_IMPORTED_MODULE_0__["Global"].viewEngine == null) {
            new _log_helper__WEBPACK_IMPORTED_MODULE_2__["LogHelper"](_enums_error_type__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].UndefinedViewEngine).throw();
        }
    }
    return _global__WEBPACK_IMPORTED_MODULE_0__["Global"].viewEngine.render({
        view: viewName,
        model: model
    });
};


/***/ }),

/***/ "./src/helpers/text_result.ts":
/*!************************************!*\
  !*** ./src/helpers/text_result.ts ***!
  \************************************/
/*! exports provided: textResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return textResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/http_status_code */ "./src/enums/http_status_code.ts");


var textResult = function (text, statusCode) {
    return {
        contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text,
        responseData: text,
        statusCode: statusCode || _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
    };
};


/***/ }),

/***/ "./src/helpers/view_result.ts":
/*!************************************!*\
  !*** ./src/helpers/view_result.ts ***!
  \************************************/
/*! exports provided: viewResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
/* harmony import */ var _render_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render_view */ "./src/helpers/render_view.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
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
var _this = undefined;


var viewResult = function (viewName, model) { return __awaiter(_this, void 0, void 0, function () {
    var viewData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Object(_render_view__WEBPACK_IMPORTED_MODULE_0__["renderView"])(viewName, model)];
            case 1:
                viewData = _a.sent();
                return [2 /*return*/, {
                        contentType: _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Html,
                        responseData: viewData,
                        statusCode: _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
                    }];
        }
    });
}); };


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Fort, Controller, Shield, SessionProvider, Guard, ViewEngine, Wall, worker, shields, guards, route, defaultWorker, MIME_TYPE, HTTP_METHOD, HTTP_STATUS_CODE, jsonResult, textResult, htmlResult, renderView, downloadResult, fileResult, redirectResult, viewResult, ErrorHandler, HttpCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstracts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstracts/index */ "./src/abstracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["Shield"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["Guard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["ViewEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["Wall"]; });

/* harmony import */ var _decorators_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/index */ "./src/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["worker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["shields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["guards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "route", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWorker", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["defaultWorker"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ "./src/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _enums__WEBPACK_IMPORTED_MODULE_2__["HTTP_METHOD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return _enums__WEBPACK_IMPORTED_MODULE_2__["HTTP_STATUS_CODE"]; });

/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/index */ "./src/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["jsonResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["textResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["htmlResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderView", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["renderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["downloadResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["fileResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["redirectResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_3__["viewResult"]; });

/* harmony import */ var _model_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/index */ "./src/model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _model_index__WEBPACK_IMPORTED_MODULE_4__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return _model_index__WEBPACK_IMPORTED_MODULE_4__["HttpCookie"]; });

/* harmony import */ var _fort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fort */ "./src/fort.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fort", function() { return _fort__WEBPACK_IMPORTED_MODULE_5__["Fort"]; });



// export * from './interfaces/index';




// export * from './constant';


/***/ }),

/***/ "./src/model/cookie_manager.ts":
/*!*************************************!*\
  !*** ./src/model/cookie_manager.ts ***!
  \*************************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
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
     * @param {string} name
     * @memberof CookieManager
     */
    CookieManager.prototype.removeCookie = function (name) {
        this.cookieCollection_[name] = null;
        this.responseCookie_.push(this.getCookieStringFromCookie_({
            name: name,
            value: null,
            expires: new Date('Thu, 01 Jan 1970 00:00:00 GMT'),
            maxAge: -1
        }));
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
        var cookieString = cookie.name + "=" + cookie.value + ";";
        if (cookie.expires) {
            cookieString += " Expires =" + cookie.expires.toUTCString() + ";";
        }
        if (cookie.httpOnly === true) {
            cookieString += " HttpOnly;";
        }
        if (cookie.maxAge != null) {
            cookieString += " Max-Age=" + cookie.maxAge;
        }
        if (cookie.path) {
            cookieString += " Path=" + cookie.path + ";";
        }
        if (cookie.domain) {
            cookieString += " Domain=" + cookie.path + ";";
        }
        return cookieString;
    };
    return CookieManager;
}());



/***/ }),

/***/ "./src/model/error_handler.ts":
/*!************************************!*\
  !*** ./src/model/error_handler.ts ***!
  \************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/promise */ "./src/helpers/promise.ts");

var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.onServerError = function (ex) {
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
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
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
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
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>Forbidden</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onNotAcceptableRequest = function () {
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>Not Acceptable</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onMethodNotAllowed = function () {
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>Method Not allowed.</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onNotFound = function (url) {
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>The requested resource " + url + " was not found.</h1>";
            resolve(errMessage);
        });
    };
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/model/file_manager.ts":
/*!***********************************!*\
  !*** ./src/model/file_manager.ts ***!
  \***********************************/
/*! exports provided: FileManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManager", function() { return FileManager; });
/* harmony import */ var _helpers_file_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/file_helper */ "./src/helpers/file_helper.ts");

var FileManager = /** @class */ (function () {
    function FileManager() {
        this.files = {};
    }
    FileManager.prototype.isExist = function (fileName) {
        return this.files[fileName] != null;
    };
    FileManager.prototype.getFile = function (fileName) {
        return this.files[fileName];
    };
    /**
     * saves file to supplied path
     *
     * @param {string} fileName
     * @param {string} pathToSave
     * @returns
     * @memberof FileManager
     */
    FileManager.prototype.saveTo = function (fileName, pathToSave) {
        return _helpers_file_helper__WEBPACK_IMPORTED_MODULE_0__["FileHelper"].copyFile(this.files[fileName].path, pathToSave);
    };
    return FileManager;
}());



/***/ }),

/***/ "./src/model/http_cookie.ts":
/*!**********************************!*\
  !*** ./src/model/http_cookie.ts ***!
  \**********************************/
/*! exports provided: HttpCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return HttpCookie; });
var HttpCookie = /** @class */ (function () {
    function HttpCookie(name, value) {
        this.name = name;
        this.value = value;
    }
    return HttpCookie;
}());



/***/ }),

/***/ "./src/model/index.ts":
/*!****************************!*\
  !*** ./src/model/index.ts ***!
  \****************************/
/*! exports provided: ErrorHandler, HttpCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error_handler */ "./src/model/error_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _error_handler__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony import */ var _http_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_cookie */ "./src/model/http_cookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return _http_cookie__WEBPACK_IMPORTED_MODULE_1__["HttpCookie"]; });





/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
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



/***/ }),

/***/ "content-type":
/*!*******************************!*\
  !*** external "content-type" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("content-type");

/***/ }),

/***/ "etag":
/*!***********************!*\
  !*** external "etag" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("etag");

/***/ }),

/***/ "fresh":
/*!************************!*\
  !*** external "fresh" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fresh");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsontoxml":
/*!****************************!*\
  !*** external "jsontoxml" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsontoxml");

/***/ }),

/***/ "multiparty":
/*!*****************************!*\
  !*** external "multiparty" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("multiparty");

/***/ }),

/***/ "negotiator":
/*!*****************************!*\
  !*** external "negotiator" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("negotiator");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "uniqid":
/*!*************************!*\
  !*** external "uniqid" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=fort.js.map