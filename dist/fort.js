/*!
 * @license :fortjs - V1.9.0 - 10/11/2019
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
/* harmony import */ var _test_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_helpers */ "./src/test_helpers/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");


var Controller = /** @class */ (function () {
    function Controller() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Controller.prototype, "logger", {
        get: function () {
            return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
        },
        enumerable: true,
        configurable: true
    });
    Controller.prototype.initialize = function (data) {
        Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initController"])(this, data);
    };
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
/* harmony import */ var _test_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_helpers */ "./src/test_helpers/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");


var Guard = /** @class */ (function () {
    function Guard() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Guard.prototype, "logger", {
        get: function () {
            return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
        },
        enumerable: true,
        configurable: true
    });
    Guard.prototype.initialize = function (data) {
        return Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initGuard"])(this, data);
    };
    return Guard;
}());



/***/ }),

/***/ "./src/abstracts/index.ts":
/*!********************************!*\
  !*** ./src/abstracts/index.ts ***!
  \********************************/
/*! exports provided: Controller, Shield, SessionProvider, Guard, ViewEngine, Wall, XmlParser */
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

/* harmony import */ var _xml_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./xml_parser */ "./src/abstracts/xml_parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XmlParser", function() { return _xml_parser__WEBPACK_IMPORTED_MODULE_6__["XmlParser"]; });










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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "uniqid");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");


var SessionProvider = /** @class */ (function () {
    function SessionProvider() {
    }
    SessionProvider.prototype.createSession = function () {
        var now = new Date();
        this.sessionId = uniqid__WEBPACK_IMPORTED_MODULE_0__();
        this.cookie.addCookie({
            name: _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionTimeOut)),
            maxAge: _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionTimeOut * 60
        });
    };
    SessionProvider.prototype.destroySession = function () {
        var cookie = this.cookie.getCookie(_fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
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
/* harmony import */ var _test_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_helpers */ "./src/test_helpers/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");


var Shield = /** @class */ (function () {
    function Shield() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Shield.prototype, "logger", {
        get: function () {
            return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
        },
        enumerable: true,
        configurable: true
    });
    Shield.prototype.initialize = function (data) {
        return Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initShield"])(this, data);
    };
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
/* harmony import */ var _test_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test_helpers */ "./src/test_helpers/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
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
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    }
    Object.defineProperty(Wall.prototype, "logger", {
        get: function () {
            return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
        },
        enumerable: true,
        configurable: true
    });
    Wall.prototype.onOutgoing = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    Wall.prototype.initialize = function (data) {
        return Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initWall"])(this, data);
    };
    return Wall;
}());



/***/ }),

/***/ "./src/abstracts/xml_parser.ts":
/*!*************************************!*\
  !*** ./src/abstracts/xml_parser.ts ***!
  \*************************************/
/*! exports provided: XmlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlParser", function() { return XmlParser; });
var XmlParser = /** @class */ (function () {
    function XmlParser() {
    }
    return XmlParser;
}());



/***/ }),

/***/ "./src/constant.ts":
/*!*************************!*\
  !*** ./src/constant.ts ***!
  \*************************/
/*! exports provided: __ContentType, __AppName, __Cookie, __SetCookie, __CurrentPath, __ContentLength, __Constructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ContentType", function() { return __ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__AppName", function() { return __AppName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Cookie", function() { return __Cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SetCookie", function() { return __SetCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__CurrentPath", function() { return __CurrentPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__ContentLength", function() { return __ContentLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Constructor", function() { return __Constructor; });
/* tslint:disable */
var __ContentType = "Content-Type";
var __AppName = "fort";
var __Cookie = "Cookie";
var __SetCookie = 'Set-Cookie';
var __CurrentPath = process.cwd();
var __ContentLength = "Content-Length";
var __Constructor = "const_constructor";


/***/ }),

/***/ "./src/decorators/assign.ts":
/*!**********************************!*\
  !*** ./src/decorators/assign.ts ***!
  \**********************************/
/*! exports provided: Assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return Assign; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");


// tslint:disable-next-line
var Assign = function (value) {
    return function (target, methodName, paramIndex) {
        var className = target.name || target.constructor.name;
        if (methodName == null) {
            methodName = _constant__WEBPACK_IMPORTED_MODULE_1__["__Constructor"];
        }
        _handlers__WEBPACK_IMPORTED_MODULE_0__["InjectorHandler"].addWorkerValue(className, methodName, paramIndex, value);
    };
};


/***/ }),

/***/ "./src/decorators/default_worker.ts":
/*!******************************************!*\
  !*** ./src/decorators/default_worker.ts ***!
  \******************************************/
/*! exports provided: DefaultWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultWorker", function() { return DefaultWorker; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");


// tslint:disable-next-line
var DefaultWorker = function (allowedMethods) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [_enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHOD"].Get] : allowedMethods,
            guards: [],
            pattern: "/",
            values: []
        };
        _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addWorker(actionInfo, className);
    };
};


/***/ }),

/***/ "./src/decorators/guards.ts":
/*!**********************************!*\
  !*** ./src/decorators/guards.ts ***!
  \**********************************/
/*! exports provided: Guards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guards", function() { return Guards; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");

// tslint:disable-next-line
var Guards = function (value) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addGuards(value, className, methodName);
    });
};


/***/ }),

/***/ "./src/decorators/index.ts":
/*!*********************************!*\
  !*** ./src/decorators/index.ts ***!
  \*********************************/
/*! exports provided: Worker, Shields, Guards, Route, DefaultWorker, Assign, Singleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worker */ "./src/decorators/worker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return _worker__WEBPACK_IMPORTED_MODULE_0__["Worker"]; });

/* harmony import */ var _shields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shields */ "./src/decorators/shields.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shields", function() { return _shields__WEBPACK_IMPORTED_MODULE_1__["Shields"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards */ "./src/decorators/guards.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guards", function() { return _guards__WEBPACK_IMPORTED_MODULE_2__["Guards"]; });

/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route */ "./src/decorators/route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _route__WEBPACK_IMPORTED_MODULE_3__["Route"]; });

/* harmony import */ var _default_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default_worker */ "./src/decorators/default_worker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultWorker", function() { return _default_worker__WEBPACK_IMPORTED_MODULE_4__["DefaultWorker"]; });

/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign */ "./src/decorators/assign.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return _assign__WEBPACK_IMPORTED_MODULE_5__["Assign"]; });

/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleton */ "./src/decorators/singleton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Singleton", function() { return _singleton__WEBPACK_IMPORTED_MODULE_6__["Singleton"]; });










/***/ }),

/***/ "./src/decorators/route.ts":
/*!*********************************!*\
  !*** ./src/decorators/route.ts ***!
  \*********************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");


// tslint:disable-next-line
var Route = function (format) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        // remove / from route
        if (format != null && format !== '/') {
            format = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["removeLastSlash"])(format);
        }
        _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addPattern(format, className, methodName);
    });
};


/***/ }),

/***/ "./src/decorators/shields.ts":
/*!***********************************!*\
  !*** ./src/decorators/shields.ts ***!
  \***********************************/
/*! exports provided: Shields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shields", function() { return Shields; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");

// tslint:disable-next-line
var Shields = function (shieldsValue) {
    return function (target) {
        var className = target.name;
        _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addShields(shieldsValue, className);
    };
};


/***/ }),

/***/ "./src/decorators/singleton.ts":
/*!*************************************!*\
  !*** ./src/decorators/singleton.ts ***!
  \*************************************/
/*! exports provided: Singleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Singleton", function() { return Singleton; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");


// tslint:disable-next-line
var Singleton = function (value) {
    return function (target, methodName, paramIndex) {
        var className = target.name || target.constructor.name;
        if (methodName == null || methodName === 'constructor') {
            methodName = _constant__WEBPACK_IMPORTED_MODULE_1__["__Constructor"];
        }
        _handlers__WEBPACK_IMPORTED_MODULE_0__["InjectorHandler"].addSingleton(className, methodName, paramIndex, value);
    };
};


/***/ }),

/***/ "./src/decorators/worker.ts":
/*!**********************************!*\
  !*** ./src/decorators/worker.ts ***!
  \**********************************/
/*! exports provided: Worker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return Worker; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");


// tslint:disable-next-line
var Worker = function (allowedMethods) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods == null ? [
                _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Delete, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Get, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Post, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Patch, _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Put
            ] : allowedMethods,
            guards: [],
            pattern: "/" + methodName.toLowerCase(),
            values: []
        };
        _handlers__WEBPACK_IMPORTED_MODULE_1__["RouteHandler"].addWorker(actionInfo, className);
    };
};


/***/ }),

/***/ "./src/enums/data_type.ts":
/*!********************************!*\
  !*** ./src/enums/data_type.ts ***!
  \********************************/
/*! exports provided: DATA_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return DATA_TYPE; });
var DATA_TYPE;
(function (DATA_TYPE) {
    DATA_TYPE["String"] = "string";
    DATA_TYPE["Number"] = "number";
    DATA_TYPE["Array"] = "array";
    DATA_TYPE["Object"] = "object";
    DATA_TYPE["Function"] = "function";
})(DATA_TYPE || (DATA_TYPE = {}));


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
    HTTP_METHOD["Options"] = "OPTIONS";
    HTTP_METHOD["Head"] = "HEAD";
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
/*! exports provided: MIME_TYPE, HTTP_METHOD, HTTP_STATUS_CODE, ETag_Type, ERROR_TYPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mime_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mime_type */ "./src/enums/mime_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _mime_type__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"]; });

/* harmony import */ var _http_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_method */ "./src/enums/http_method.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _http_method__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHOD"]; });

/* harmony import */ var _http_status_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http_status_code */ "./src/enums/http_status_code.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return _http_status_code__WEBPACK_IMPORTED_MODULE_2__["HTTP_STATUS_CODE"]; });

/* harmony import */ var _etag_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etag_type */ "./src/enums/etag_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ETag_Type", function() { return _etag_type__WEBPACK_IMPORTED_MODULE_3__["ETag_Type"]; });

/* harmony import */ var _error_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error_type */ "./src/enums/error_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return _error_type__WEBPACK_IMPORTED_MODULE_4__["ERROR_TYPE"]; });








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

/***/ "./src/extra/index.ts":
/*!****************************!*\
  !*** ./src/extra/index.ts ***!
  \****************************/
/*! exports provided: MustacheViewEngine, MemorySessionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mustache_view_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mustache_view_engine */ "./src/extra/mustache_view_engine.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return _mustache_view_engine__WEBPACK_IMPORTED_MODULE_0__["MustacheViewEngine"]; });

/* harmony import */ var _memory_session_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./memory_session_provider */ "./src/extra/memory_session_provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return _memory_session_provider__WEBPACK_IMPORTED_MODULE_1__["MemorySessionProvider"]; });





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
    };
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
            var savedSession, session;
            var _this = this;
            return __generator(this, function (_a) {
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
            var savedValue, savedSessionData;
            var _this = this;
            return __generator(this, function (_a) {
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
                // expire cookie in browser
                this.destroySession();
                return [2 /*return*/];
            });
        });
    };
    return MemorySessionProvider;
}(_abstracts_session_provider__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"]));



/***/ }),

/***/ "./src/extra/mustache_view_engine.ts":
/*!*******************************************!*\
  !*** ./src/extra/mustache_view_engine.ts ***!
  \*******************************************/
/*! exports provided: MustacheViewEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return MustacheViewEngine; });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "mustache");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
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


var MustacheViewEngine = /** @class */ (function () {
    function MustacheViewEngine() {
    }
    MustacheViewEngine.prototype.render = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var viewData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getViewFromFile"])(value.view)];
                    case 1:
                        viewData = _a.sent();
                        return [2 /*return*/, mustache__WEBPACK_IMPORTED_MODULE_0__["render"](viewData, value.model)];
                }
            });
        });
    };
    return MustacheViewEngine;
}());



/***/ }),

/***/ "./src/fort_global.ts":
/*!****************************!*\
  !*** ./src/fort_global.ts ***!
  \****************************/
/*! exports provided: FortGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FortGlobal", function() { return FortGlobal; });
var FortGlobal = /** @class */ (function () {
    function FortGlobal() {
    }
    FortGlobal.walls = [];
    return FortGlobal;
}());



/***/ }),

/***/ "./src/generics/generic_controller.ts":
/*!********************************************!*\
  !*** ./src/generics/generic_controller.ts ***!
  \********************************************/
/*! exports provided: GenericController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericController", function() { return GenericController; });
/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts */ "./src/abstracts/index.ts");
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

var GenericController = /** @class */ (function (_super) {
    __extends(GenericController, _super);
    function GenericController() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.call(this) || this;
    }
    return GenericController;
}(_abstracts__WEBPACK_IMPORTED_MODULE_0__["Controller"]));



/***/ }),

/***/ "./src/generics/generic_guard.ts":
/*!***************************************!*\
  !*** ./src/generics/generic_guard.ts ***!
  \***************************************/
/*! exports provided: GenericGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericGuard", function() { return GenericGuard; });
/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts */ "./src/abstracts/index.ts");
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
}(_abstracts__WEBPACK_IMPORTED_MODULE_0__["Guard"]));



/***/ }),

/***/ "./src/generics/generic_session_provider.ts":
/*!**************************************************!*\
  !*** ./src/generics/generic_session_provider.ts ***!
  \**************************************************/
/*! exports provided: GenericSessionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericSessionProvider", function() { return GenericSessionProvider; });
/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts */ "./src/abstracts/index.ts");
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

var GenericSessionProvider = /** @class */ (function (_super) {
    __extends(GenericSessionProvider, _super);
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
}(_abstracts__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"]));



/***/ }),

/***/ "./src/generics/generic_shield.ts":
/*!****************************************!*\
  !*** ./src/generics/generic_shield.ts ***!
  \****************************************/
/*! exports provided: GenericShield */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericShield", function() { return GenericShield; });
/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts */ "./src/abstracts/index.ts");
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

var GenericShield = /** @class */ (function (_super) {
    __extends(GenericShield, _super);
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
}(_abstracts__WEBPACK_IMPORTED_MODULE_0__["Shield"]));



/***/ }),

/***/ "./src/generics/generic_wall.ts":
/*!**************************************!*\
  !*** ./src/generics/generic_wall.ts ***!
  \**************************************/
/*! exports provided: GenericWall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericWall", function() { return GenericWall; });
/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstracts */ "./src/abstracts/index.ts");
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

var GenericWall = /** @class */ (function (_super) {
    __extends(GenericWall, _super);
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
}(_abstracts__WEBPACK_IMPORTED_MODULE_0__["Wall"]));



/***/ }),

/***/ "./src/generics/generic_xml_parser.ts":
/*!********************************************!*\
  !*** ./src/generics/generic_xml_parser.ts ***!
  \********************************************/
/*! exports provided: GenericXmlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericXmlParser", function() { return GenericXmlParser; });
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
var GenericXmlParser = /** @class */ (function () {
    function GenericXmlParser() {
    }
    GenericXmlParser.prototype.parse = function (xml) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // tslint:disable-next-line
                throw {
                    message: "no xml parser configured"
                };
            });
        });
    };
    return GenericXmlParser;
}());



/***/ }),

/***/ "./src/generics/index.ts":
/*!*******************************!*\
  !*** ./src/generics/index.ts ***!
  \*******************************/
/*! exports provided: GenericGuard, GenericShield, GenericSessionProvider, GenericWall, GenericController, GenericXmlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generic_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic_guard */ "./src/generics/generic_guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericGuard", function() { return _generic_guard__WEBPACK_IMPORTED_MODULE_0__["GenericGuard"]; });

/* harmony import */ var _generic_shield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic_shield */ "./src/generics/generic_shield.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericShield", function() { return _generic_shield__WEBPACK_IMPORTED_MODULE_1__["GenericShield"]; });

/* harmony import */ var _generic_session_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic_session_provider */ "./src/generics/generic_session_provider.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericSessionProvider", function() { return _generic_session_provider__WEBPACK_IMPORTED_MODULE_2__["GenericSessionProvider"]; });

/* harmony import */ var _generic_wall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic_wall */ "./src/generics/generic_wall.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericWall", function() { return _generic_wall__WEBPACK_IMPORTED_MODULE_3__["GenericWall"]; });

/* harmony import */ var _generic_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic_controller */ "./src/generics/generic_controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericController", function() { return _generic_controller__WEBPACK_IMPORTED_MODULE_4__["GenericController"]; });

/* harmony import */ var _generic_xml_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./generic_xml_parser */ "./src/generics/generic_xml_parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenericXmlParser", function() { return _generic_xml_parser__WEBPACK_IMPORTED_MODULE_5__["GenericXmlParser"]; });









/***/ }),

/***/ "./src/handlers/controller_result_handler.ts":
/*!***************************************************!*\
  !*** ./src/handlers/controller_result_handler.ts ***!
  \***************************************************/
/*! exports provided: ControllerResultHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerResultHandler", function() { return ControllerResultHandler; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _file_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file_handler */ "./src/handlers/file_handler.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
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





var ControllerResultHandler = /** @class */ (function (_super) {
    __extends(ControllerResultHandler, _super);
    function ControllerResultHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerResultHandler.prototype.getDataBasedOnMimeType_ = function (mimeType) {
        switch (mimeType) {
            case _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Json:
            case _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Text:
            case _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Html:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return JSON.stringify(this.controllerResult_.responseData);
                }
                break;
            case _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Xml:
                if (typeof this.controllerResult_.responseData === 'object') {
                    return _helpers__WEBPACK_IMPORTED_MODULE_4__["XmlHelper"].fromJsToXml(this.controllerResult_.responseData);
                }
                break;
        }
        return this.controllerResult_.responseData;
    };
    ControllerResultHandler.prototype.endResponse_ = function (negotiateMimeType) {
        var _a;
        var data;
        try {
            data = this.getDataBasedOnMimeType_(negotiateMimeType);
        }
        catch (ex) {
            this.onErrorOccured(ex);
            return;
        }
        this.response.writeHead(this.controllerResult_.statusCode || _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_0__["__ContentType"]] = negotiateMimeType, _a));
        this.response.end(data);
    };
    ControllerResultHandler.prototype.handleRedirectResult_ = function () {
        this.response.setHeader('Location', this.controllerResult_.responseData);
        this.response.writeHead(this.controllerResult_.statusCode || _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok, { 'Location': this.controllerResult_.responseData });
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
        var parsedPath = path__WEBPACK_IMPORTED_MODULE_3__["parse"](result.file.filePath);
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
        result = result || Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["textResult"])("");
        this.controllerResult_ = result;
        this.cookieManager.responseCookie_.forEach(function (value) {
            _this.response.setHeader(_constant__WEBPACK_IMPORTED_MODULE_0__["__SetCookie"], value);
        });
        if (result.shouldRedirect == null || result.shouldRedirect === false) {
            if (result.responseFormat == null) {
                if (result.file == null) {
                    var contentType = result.contentType || _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Text;
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
        else {
            this.handleRedirectResult_();
        }
    };
    ControllerResultHandler.prototype.onResultFromController = function (result) {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
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
}(_file_handler__WEBPACK_IMPORTED_MODULE_2__["FileHandler"]));



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
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _request_handler_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request_handler_helper */ "./src/handlers/request_handler_helper.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var etag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! etag */ "etag");
/* harmony import */ var etag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(etag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var fresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! fresh */ "fresh");
/* harmony import */ var fresh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(fresh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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










var FileHandler = /** @class */ (function (_super) {
    __extends(FileHandler, _super);
    function FileHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileHandler.prototype.getFileInfoFromUrl_ = function (urlPath) {
        var splittedValue = urlPath.split("/");
        var fileInfo = {
            file: ""
        };
        if (splittedValue.length > 2 || !Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmpty"])(path__WEBPACK_IMPORTED_MODULE_2__["parse"](urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
            return fileInfo;
        }
        fileInfo.folder = splittedValue[1];
        return fileInfo;
    };
    FileHandler.prototype.getFileStats_ = function (filePath) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["promise"])(function (res, rej) {
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
            var folder = _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].folders.find(function (qry) { return qry.alias === fileInfo.folder; });
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
    FileHandler.prototype.handleFileRequestForPath_ = function (absolutePath) {
        var _this = this;
        absolutePath = path__WEBPACK_IMPORTED_MODULE_2__["join"](absolutePath, "index.html");
        this.getFileStats_(absolutePath).then(function (fileInfo) {
            if (fileInfo != null) {
                var fileType = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html;
                _this.sendFile_(absolutePath, fileType, fileInfo);
            }
            else {
                _this.onNotFound();
            }
        }).catch(function (ex) {
            _this.onErrorOccured(ex);
        });
    };
    FileHandler.prototype.isClientHasFreshFile_ = function (lastModified, etagValue) {
        return fresh__WEBPACK_IMPORTED_MODULE_8__(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    };
    FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        var _this = this;
        this.runWallOutgoing().then(function () {
            var _a;
            var mimeType;
            if (fileType[0] === '.') { // its extension
                mimeType = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getMimeTypeFromExtension"])(fileType);
            }
            else { // mime type
                mimeType = fileType;
            }
            var negotiateMimeType = _this.getContentTypeFromNegotiation(mimeType);
            if (negotiateMimeType != null) {
                var lastModified = fileInfo.mtime.toUTCString();
                var eTagValue = etag__WEBPACK_IMPORTED_MODULE_7__(fileInfo, {
                    weak: _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].eTag.type === _enums__WEBPACK_IMPORTED_MODULE_0__["ETag_Type"].Weak
                });
                if (_this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                    _this.response.statusCode = _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].NotModified;
                    _this.response.end();
                }
                else {
                    _this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok, (_a = {},
                        _a[_constant__WEBPACK_IMPORTED_MODULE_3__["__ContentType"]] = mimeType,
                        _a['Etag'] = eTagValue,
                        _a['Last-Modified'] = lastModified,
                        _a));
                    var readStream = fs__WEBPACK_IMPORTED_MODULE_5__["createReadStream"](filePath);
                    // Handle non-existent file
                    readStream.on('error', _this.onErrorOccured.bind(_this));
                    readStream.pipe(_this.response);
                }
            }
            else {
                _this.onNotAcceptableRequest();
            }
        }).catch(function (ex) {
            _this.onErrorOccured(ex);
        });
    };
    return FileHandler;
}(_request_handler_helper__WEBPACK_IMPORTED_MODULE_4__["RequestHandlerHelper"]));



/***/ }),

/***/ "./src/handlers/index.ts":
/*!*******************************!*\
  !*** ./src/handlers/index.ts ***!
  \*******************************/
/*! exports provided: RouteHandler, RequestHandler, FileHandler, RequestHandlerHelper, ControllerResultHandler, PostHandler, InjectorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route_handler */ "./src/handlers/route_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteHandler", function() { return _route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"]; });

/* harmony import */ var _request_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request_handler */ "./src/handlers/request_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestHandler", function() { return _request_handler__WEBPACK_IMPORTED_MODULE_1__["RequestHandler"]; });

/* harmony import */ var _file_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file_handler */ "./src/handlers/file_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileHandler", function() { return _file_handler__WEBPACK_IMPORTED_MODULE_2__["FileHandler"]; });

/* harmony import */ var _request_handler_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request_handler_helper */ "./src/handlers/request_handler_helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RequestHandlerHelper", function() { return _request_handler_helper__WEBPACK_IMPORTED_MODULE_3__["RequestHandlerHelper"]; });

/* harmony import */ var _controller_result_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller_result_handler */ "./src/handlers/controller_result_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerResultHandler", function() { return _controller_result_handler__WEBPACK_IMPORTED_MODULE_4__["ControllerResultHandler"]; });

/* harmony import */ var _post_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post_handler */ "./src/handlers/post_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostHandler", function() { return _post_handler__WEBPACK_IMPORTED_MODULE_5__["PostHandler"]; });

/* harmony import */ var _injector_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./injector_handler */ "./src/handlers/injector_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectorHandler", function() { return _injector_handler__WEBPACK_IMPORTED_MODULE_6__["InjectorHandler"]; });










/***/ }),

/***/ "./src/handlers/injector_handler.ts":
/*!******************************************!*\
  !*** ./src/handlers/injector_handler.ts ***!
  \******************************************/
/*! exports provided: InjectorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectorHandler", function() { return InjectorHandler; });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");

// this stores information of injector values that are available per class & worker
var injectorStoreInfos = [];
// this stores injector values
var injectorValues = [];
// this stores the singletons name & their respective index in injector values
var singletons = {};
var InjectorHandler = /** @class */ (function () {
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
        return this.getMethodValues(className, _constant__WEBPACK_IMPORTED_MODULE_0__["__Constructor"]);
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
/* harmony import */ var _controller_result_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller_result_handler */ "./src/handlers/controller_result_handler.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var content_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! content-type */ "content-type");
/* harmony import */ var content_type__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(content_type__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! multiparty */ "multiparty");
/* harmony import */ var multiparty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(multiparty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostHandler.prototype.getPostRawData_ = function () {
        var _this = this;
        var body = [];
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (res, rej) {
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (res, rej) {
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
            var postData, contentType, result, bodyDataAsString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentType = this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_2__["__ContentType"]] || this.request.headers["content-type"];
                        if (contentType != null) {
                            contentType = content_type__WEBPACK_IMPORTED_MODULE_4__["parse"](contentType).type;
                        }
                        if (!(contentType === _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].FormMultiPart)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.parseMultiPartData_()];
                    case 1:
                        result = _a.sent();
                        postData = result.field;
                        this.file = new _models__WEBPACK_IMPORTED_MODULE_7__["FileManager"](result.file);
                        return [3 /*break*/, 4];
                    case 2:
                        this.file = new _models__WEBPACK_IMPORTED_MODULE_7__["FileManager"]({});
                        return [4 /*yield*/, this.getPostRawData_()];
                    case 3:
                        bodyDataAsString = _a.sent();
                        switch (contentType) {
                            case _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].Json:
                                postData = _helpers__WEBPACK_IMPORTED_MODULE_1__["JsonHelper"].parse(bodyDataAsString);
                                break;
                            case _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].Text:
                            case _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].Html:
                                postData = bodyDataAsString;
                                break;
                            case _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].FormUrlEncoded:
                                postData = querystring__WEBPACK_IMPORTED_MODULE_5__["parse"](bodyDataAsString);
                                break;
                            case _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].Xml:
                                postData = new _fort_global__WEBPACK_IMPORTED_MODULE_8__["FortGlobal"].xmlParser().parse(bodyDataAsString);
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
}(_controller_result_handler__WEBPACK_IMPORTED_MODULE_0__["ControllerResultHandler"]));



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
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _post_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post_handler */ "./src/handlers/post_handler.ts");
/* harmony import */ var _injector_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./injector_handler */ "./src/handlers/injector_handler.ts");
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
        this.request.on('error', this.onBadRequest.bind(this));
        this.response.on('error', this.onErrorOccured.bind(this));
    };
    RequestHandler.prototype.executeWallIncoming_ = function () {
        var _this = this;
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["promise"])(function (res) {
            var index = 0;
            var wallLength = _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].walls.length;
            var executeWallIncomingByIndex = function () { return __awaiter(_this, void 0, void 0, function () {
                var wall, constructorArgsValues, wallObj, methodArgsValues, result, ex_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(wallLength > index)) return [3 /*break*/, 5];
                            wall = _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].walls[index++];
                            constructorArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(wall.name);
                            wallObj = new (wall.bind.apply(wall, [void 0].concat(constructorArgsValues)))();
                            wallObj.cookie = this.cookieManager;
                            wallObj.session = this.session_;
                            wallObj.request = this.request;
                            wallObj.response = this.response;
                            wallObj.data = this.data_;
                            wallObj.query = this.query_;
                            this.wallInstances.push(wallObj);
                            methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(wall.name, 'onIncoming');
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
    RequestHandler.prototype.runController_ = function () {
        var _a;
        var constructorValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(this.routeMatchInfo_.controller.name);
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
        var methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(this.routeMatchInfo_.controller.name, this.routeMatchInfo_.workerInfo.workerName);
        controllerObj[this.routeMatchInfo_.workerInfo.workerName].apply(controllerObj, methodArgsValues).then(this.onResultFromController.bind(this)).catch(this.onErrorOccured.bind(this));
    };
    RequestHandler.prototype.executeShieldsProtection_ = function () {
        var _this = this;
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["promise"])(function (res) {
            var index = 0;
            var shieldLength = _this.routeMatchInfo_.shields.length;
            var executeShieldByIndex = function () { return __awaiter(_this, void 0, void 0, function () {
                var shield, constructorArgsValues, shieldObj, methodArgsValues, result, ex_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(shieldLength > index)) return [3 /*break*/, 5];
                            shield = this.routeMatchInfo_.shields[index++];
                            constructorArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(shield.name);
                            shieldObj = new (shield.bind.apply(shield, [void 0].concat(constructorArgsValues)))();
                            shieldObj.cookie = this.cookieManager;
                            shieldObj.query = this.query_;
                            shieldObj.session = this.session_;
                            shieldObj.request = this.request;
                            shieldObj.response = this.response;
                            shieldObj.data = this.data_;
                            shieldObj.workerName = this.routeMatchInfo_.workerInfo.workerName;
                            methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(shield.name, 'protect');
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["promise"])(function (res) {
            var index = 0;
            var shieldLength = guards.length;
            var executeGuardByIndex = function () { return __awaiter(_this, void 0, void 0, function () {
                var guard, constructorArgsValues, guardObj, methodArgsValues, result, ex_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(shieldLength > index)) return [3 /*break*/, 5];
                            guard = guards[index++];
                            constructorArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(guard.name);
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
                            methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(guard.name, 'check');
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
        if (_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].shouldParseCookie === true) {
            var rawCookie = (this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_1__["__Cookie"]] || this.request.headers["cookie"]);
            var parsedCookies = void 0;
            try {
                parsedCookies = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["parseCookie"])(rawCookie);
            }
            catch (ex) {
                this.onErrorOccured(ex);
                return false;
            }
            this.session_ = new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].sessionProvider();
            this.session_.cookie = this.cookieManager = new _models__WEBPACK_IMPORTED_MODULE_4__["CookieManager"](parsedCookies);
            this.session_.sessionId = parsedCookies[_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].appSessionIdentifier];
        }
        else {
            this.cookieManager = new _models__WEBPACK_IMPORTED_MODULE_4__["CookieManager"]({});
        }
        return true;
    };
    RequestHandler.prototype.setPreHeader_ = function () {
        this.response.setHeader('X-Powered-By', _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    };
    RequestHandler.prototype.onRouteMatched_ = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionInfo, shouldExecuteNextComponent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        actionInfo = this.routeMatchInfo_.workerInfo;
                        if (!(actionInfo == null)) return [3 /*break*/, 1];
                        if (this.request.method === _enums__WEBPACK_IMPORTED_MODULE_5__["HTTP_METHOD"].Options) {
                            this.onRequestOptions(this.routeMatchInfo_.allowedHttpMethod);
                        }
                        else {
                            this.onMethodNotAllowed(this.routeMatchInfo_.allowedHttpMethod);
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.executeShieldsProtection_()];
                    case 2:
                        shouldExecuteNextComponent = _a.sent();
                        if (!(shouldExecuteNextComponent === true)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.handlePostData()];
                    case 3:
                        shouldExecuteNextComponent = _a.sent();
                        if (!(shouldExecuteNextComponent === true)) return [3 /*break*/, 5];
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
        return __awaiter(this, void 0, void 0, function () {
            var urlDetail, shouldExecuteNextProcess, pathUrl, requestMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        urlDetail = url__WEBPACK_IMPORTED_MODULE_0__["parse"](this.request.url, true);
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
                                this.routeMatchInfo_ = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["parseAndMatchRoute"])(pathUrl.toLowerCase(), requestMethod);
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, ex_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.request.method === _enums__WEBPACK_IMPORTED_MODULE_5__["HTTP_METHOD"].Get)) return [3 /*break*/, 1];
                        this.body = {};
                        this.file = new _models__WEBPACK_IMPORTED_MODULE_4__["FileManager"]({});
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].shouldParsePost === true)) return [3 /*break*/, 5];
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setPreHeader_();
                this.execute_();
                return [2 /*return*/];
            });
        });
    };
    return RequestHandler;
}(_post_handler__WEBPACK_IMPORTED_MODULE_6__["PostHandler"]));



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
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
/* harmony import */ var negotiator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! negotiator */ "negotiator");
/* harmony import */ var negotiator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(negotiator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _injector_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injector_handler */ "./src/handlers/injector_handler.ts");
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
    RequestHandlerHelper.prototype.runWallOutgoing = function () {
        var outgoingResults = [];
        Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["reverseLoop"])(this.wallInstances, function (value) {
            var methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_5__["InjectorHandler"].getMethodValues(value.constructor.name, 'onOutgoing');
            outgoingResults.push(value.onOutgoing(methodArgsValues));
        });
        return Promise.all(outgoingResults);
    };
    RequestHandlerHelper.prototype.getContentTypeFromNegotiation = function (type) {
        var negotiator = new negotiator__WEBPACK_IMPORTED_MODULE_3__(this.request);
        var availableTypes = this.getAvailableTypes_(type);
        if (availableTypes == null) {
            availableTypes = [type];
        }
        return negotiator.mediaType(availableTypes);
    };
    RequestHandlerHelper.prototype.getContentTypeFromNegotiationHavingMultipleTypes = function (types) {
        var negotiator = new negotiator__WEBPACK_IMPORTED_MODULE_3__(this.request);
        return negotiator.mediaType(types);
    };
    RequestHandlerHelper.prototype.getAvailableTypes_ = function (type) {
        switch (type) {
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json:
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Xml:
                return [_enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json, _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Xml];
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html:
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Css:
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Csv:
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Js:
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Rtf:
            case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text:
                return [_enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text, _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Js,
                    _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Css, _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Rtf, _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Csv];
        }
        return null;
    };
    RequestHandlerHelper.prototype.onBadRequest = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onBadRequest(error)];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_1)];
                    case 4:
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].BadRequest, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onForbiddenRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onForbiddenRequest()];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_2)];
                    case 4:
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Forbidden, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotAcceptableRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onNotAcceptableRequest()];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_3 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_3)];
                    case 4:
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].NotAcceptable, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onNotFound = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onNotFound(this.request.url)];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_4 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_4)];
                    case 4:
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].NotFound, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onMethodNotAllowed = function (allowedMethods) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, errMessage, ex_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.runWallOutgoing()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onMethodNotAllowed()];
                    case 2:
                        errMessage = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        ex_5 = _b.sent();
                        return [2 /*return*/, this.onErrorOccured(ex_5)];
                    case 4:
                        this.response.setHeader("Allow", allowedMethods.join(","));
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].MethodNotAllowed, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _a));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onErrorOccured = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, errMessage, ex_6;
            return __generator(this, function (_c) {
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
                        return [4 /*yield*/, new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onServerError(error)];
                    case 3:
                        errMessage = _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        ex_6 = _c.sent();
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].InternalServerError, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _a));
                        this.response.end(_helpers__WEBPACK_IMPORTED_MODULE_4__["JsonHelper"].stringify(ex_6));
                        return [2 /*return*/];
                    case 5:
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].InternalServerError, (_b = {}, _b[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _b));
                        this.response.end(errMessage);
                        return [2 /*return*/];
                }
            });
        });
    };
    RequestHandlerHelper.prototype.onRequestOptions = function (allowedMethods) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, ex_7;
            return __generator(this, function (_b) {
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
                        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]] = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html, _a));
                        this.response.end("");
                        return [2 /*return*/];
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");

var routerCollection = [];
var getActionPattern = function (parentRoute, pattern) {
    return (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNull"])(parentRoute.path) || parentRoute.path === "*") ? pattern : "/" + parentRoute.path + pattern;
};
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
                shields: [],
                values: []
            });
        }
        else {
            route.controller = value.controller;
            route.path = value.path;
            // change pattern value since we have controller name now.
            route.workers.forEach(function (actionInfo) {
                actionInfo.pattern = getActionPattern(value, actionInfo.pattern);
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
                path: null,
                values: []
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
                path: null,
                values: []
            });
        }
        else {
            var savedAction = router.workers.find(function (val) { return val.workerName === newAction.workerName; });
            if (savedAction == null) {
                newAction.pattern = getActionPattern(router, newAction.pattern);
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
                        pattern: pattern,
                        values: []
                    }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            var savedAction = routerCollection[index].workers.find(function (val) { return val.workerName === actionName; });
            if (savedAction == null) {
                routerCollection[index].workers.push({
                    workerName: actionName,
                    guards: guards,
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
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
                        pattern: pattern,
                        values: []
                    }],
                controller: null,
                controllerName: className,
                shields: [],
                path: null,
                values: []
            });
        }
        else {
            var savedAction = router.workers.find(function (val) { return val.workerName === actionName; });
            pattern = getActionPattern(router, pattern);
            if (savedAction == null) {
                router.workers.push({
                    workerName: actionName,
                    guards: [],
                    methodsAllowed: null,
                    pattern: pattern,
                    values: []
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

/***/ "./src/helpers/get_data_type.ts":
/*!**************************************!*\
  !*** ./src/helpers/get_data_type.ts ***!
  \**************************************/
/*! exports provided: getDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataType", function() { return getDataType; });
/* harmony import */ var _enums_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/data_type */ "./src/enums/data_type.ts");

var getDataType = function (value) {
    var type = typeof value;
    switch (type) {
        case 'object':
            if (Array.isArray(value)) {
                return _enums_data_type__WEBPACK_IMPORTED_MODULE_0__["DATA_TYPE"].Array;
            }
        default:
            return type;
    }
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

/***/ "./src/helpers/get_view_from_file.ts":
/*!*******************************************!*\
  !*** ./src/helpers/get_view_from_file.ts ***!
  \*******************************************/
/*! exports provided: getViewFromFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getViewFromFile", function() { return getViewFromFile; });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _is_env_production__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_env_production */ "./src/helpers/is_env_production.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
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




var viewCache = {};
var getViewFromFile = function (fileLocation) {
    return __awaiter(this, void 0, void 0, function () {
        var readView, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    readView = function () {
                        var pathOfView = path__WEBPACK_IMPORTED_MODULE_2__["join"](_fort_global__WEBPACK_IMPORTED_MODULE_3__["FortGlobal"].viewPath, fileLocation);
                        return Object(fs_extra__WEBPACK_IMPORTED_MODULE_0__["readFile"])(pathOfView, {
                            encoding: 'utf8'
                        });
                    };
                    if (!Object(_is_env_production__WEBPACK_IMPORTED_MODULE_1__["isEnvProduction"])()) return [3 /*break*/, 3];
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
/*! exports provided: jsonResult, textResult, htmlResult, renderView, downloadResult, fileResult, redirectResult, viewResult, getViewFromFile, promise, LogHelper, XmlHelper, getMimeTypeFromExtension, parseAndMatchRoute, parseCookie, JsonHelper, removeLastSlash, removeFirstSlash, reverseLoop */
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

/* harmony import */ var _get_view_from_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get_view_from_file */ "./src/helpers/get_view_from_file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewFromFile", function() { return _get_view_from_file__WEBPACK_IMPORTED_MODULE_8__["getViewFromFile"]; });

/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./promise */ "./src/helpers/promise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return _promise__WEBPACK_IMPORTED_MODULE_9__["promise"]; });

/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./log_helper */ "./src/helpers/log_helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogHelper", function() { return _log_helper__WEBPACK_IMPORTED_MODULE_10__["LogHelper"]; });

/* harmony import */ var _xml_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xml_helper */ "./src/helpers/xml_helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XmlHelper", function() { return _xml_helper__WEBPACK_IMPORTED_MODULE_11__["XmlHelper"]; });

/* harmony import */ var _get_mime_type_from_extension__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get_mime_type_from_extension */ "./src/helpers/get_mime_type_from_extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return _get_mime_type_from_extension__WEBPACK_IMPORTED_MODULE_12__["getMimeTypeFromExtension"]; });

/* harmony import */ var _parse_match_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parse_match_route */ "./src/helpers/parse_match_route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return _parse_match_route__WEBPACK_IMPORTED_MODULE_13__["parseAndMatchRoute"]; });

/* harmony import */ var _parse_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parse_cookie */ "./src/helpers/parse_cookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return _parse_cookie__WEBPACK_IMPORTED_MODULE_14__["parseCookie"]; });

/* harmony import */ var _json_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./json_helper */ "./src/helpers/json_helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHelper", function() { return _json_helper__WEBPACK_IMPORTED_MODULE_15__["JsonHelper"]; });

/* harmony import */ var _remove_last_slash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./remove_last_slash */ "./src/helpers/remove_last_slash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeLastSlash", function() { return _remove_last_slash__WEBPACK_IMPORTED_MODULE_16__["removeLastSlash"]; });

/* harmony import */ var _remove_first_slash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./remove_first_slash */ "./src/helpers/remove_first_slash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFirstSlash", function() { return _remove_first_slash__WEBPACK_IMPORTED_MODULE_17__["removeFirstSlash"]; });

/* harmony import */ var _reverse_loop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./reverse_loop */ "./src/helpers/reverse_loop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseLoop", function() { return _reverse_loop__WEBPACK_IMPORTED_MODULE_18__["reverseLoop"]; });






















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
    return process.env.NODE_ENV === 'development';
};


/***/ }),

/***/ "./src/helpers/is_env_production.ts":
/*!******************************************!*\
  !*** ./src/helpers/is_env_production.ts ***!
  \******************************************/
/*! exports provided: isEnvProduction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnvProduction", function() { return isEnvProduction; });
var isEnvProduction = function () {
    return process.env.NODE_ENV === "production";
};


/***/ }),

/***/ "./src/helpers/json_helper.ts":
/*!************************************!*\
  !*** ./src/helpers/json_helper.ts ***!
  \************************************/
/*! exports provided: JsonHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonHelper", function() { return JsonHelper; });
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");

var parseCookie = function (cookie) {
    var value = {};
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNullOrEmpty"])(cookie)) {
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/helpers/index.ts");


var checkRouteInWorkerForDefaultRoute = function (route, httpMethod, urlParts) {
    var matchedRoute = {
        allowedHttpMethod: []
    };
    matchedRoute.controller = route.controller;
    var urlPartLength = urlParts.length;
    var regex1 = /{(.*)}(?!.)/;
    var regex2 = /{(.*)}\.(\w+)(?!.)/;
    route.workers.every(function (routeActionInfo) {
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
    var urlPartLength = urlParts.length;
    if (urlPartLength === 2) { // url does not have action path
        var pattern_1 = "/" + route.path + "/";
        route.workers.every(function (action) {
            if (action.pattern === pattern_1) {
                if (action.methodsAllowed.indexOf(httpMethod) >= 0) {
                    matchedRoute.workerInfo = action;
                    matchedRoute.params = {};
                    matchedRoute.shields = route.shields;
                    return false;
                }
                else {
                    matchedRoute.allowedHttpMethod = matchedRoute.allowedHttpMethod.concat(action.methodsAllowed);
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
                    if (routeActionInfo.methodsAllowed.indexOf(httpMethod) >= 0) {
                        matchedRoute.workerInfo = routeActionInfo;
                        matchedRoute.params = params_2;
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
    }
    if (matchedRoute.workerInfo == null && matchedRoute.allowedHttpMethod.length === 0) {
        return null;
    }
    return matchedRoute;
};
var parseAndMatchRoute = function (url, httpMethod) {
    if (url !== "/") {
        url = Object(___WEBPACK_IMPORTED_MODULE_1__["removeLastSlash"])(url);
    }
    var urlParts = url.split("/");
    var firstPart = urlParts[1];
    var route = _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].routerCollection.find(function (qry) { return qry.path === firstPart; });
    if (route == null) {
        route = _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].routerCollection.find(function (qry) { return qry.path === "*"; });
        return checkRouteInWorkerForDefaultRoute(route, httpMethod, urlParts);
    }
    else {
        return checkRouteInWorker(route, httpMethod, urlParts);
    }
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

/***/ "./src/helpers/remove_first_slash.ts":
/*!*******************************************!*\
  !*** ./src/helpers/remove_first_slash.ts ***!
  \*******************************************/
/*! exports provided: removeFirstSlash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFirstSlash", function() { return removeFirstSlash; });
var removeFirstSlash = function (value) {
    // remove / from string at 0th index
    if (value[0] === "/") {
        return value.substr(1);
    }
    return value;
};


/***/ }),

/***/ "./src/helpers/remove_last_slash.ts":
/*!******************************************!*\
  !*** ./src/helpers/remove_last_slash.ts ***!
  \******************************************/
/*! exports provided: removeLastSlash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLastSlash", function() { return removeLastSlash; });
var removeLastSlash = function (url) {
    var urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        return url.substr(0, urlLength - 1);
    }
    return url;
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
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
/* harmony import */ var _is_env_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_env_dev */ "./src/helpers/is_env_dev.ts");
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log_helper */ "./src/helpers/log_helper.ts");
/* harmony import */ var _enums_error_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/error_type */ "./src/enums/error_type.ts");




var renderView = function (viewName, model) {
    if (Object(_is_env_dev__WEBPACK_IMPORTED_MODULE_1__["isEnvDev"])()) {
        if (_fort_global__WEBPACK_IMPORTED_MODULE_0__["FortGlobal"].viewEngine == null) {
            new _log_helper__WEBPACK_IMPORTED_MODULE_2__["LogHelper"](_enums_error_type__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].UndefinedViewEngine).throw();
        }
    }
    return _fort_global__WEBPACK_IMPORTED_MODULE_0__["FortGlobal"].viewEngine.render({
        view: viewName,
        model: model
    });
};


/***/ }),

/***/ "./src/helpers/reverse_loop.ts":
/*!*************************************!*\
  !*** ./src/helpers/reverse_loop.ts ***!
  \*************************************/
/*! exports provided: reverseLoop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseLoop", function() { return reverseLoop; });
var reverseLoop = function (values, cb) {
    for (var length_1 = values.length, i = length_1 - 1; i >= 0; i--) {
        cb(values[i], i);
    }
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

/***/ "./src/helpers/xml_helper.ts":
/*!***********************************!*\
  !*** ./src/helpers/xml_helper.ts ***!
  \***********************************/
/*! exports provided: XmlHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XmlHelper", function() { return XmlHelper; });
/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var _enums_data_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/data_type */ "./src/enums/data_type.ts");
/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsontoxml */ "jsontoxml");
/* harmony import */ var jsontoxml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsontoxml__WEBPACK_IMPORTED_MODULE_2__);



var XmlHelper = /** @class */ (function () {
    function XmlHelper() {
    }
    XmlHelper.fromJsToXml = function (value) {
        var addKeyToObjectIfNeeded = function (key, obj) {
            var _a;
            var type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(obj);
            if (type === _enums_data_type__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object) {
                var keys = Object.keys(obj);
                if (keys.length !== 1) {
                    obj = (_a = {},
                        _a[key] = obj,
                        _a);
                }
            }
            return obj;
        };
        var dataType = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(value);
        switch (dataType) {
            case _enums_data_type__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Array:
                value.forEach(function (val, index) {
                    value[index] = addKeyToObjectIfNeeded("item", val);
                });
                value = {
                    root: value
                };
                break;
            case _enums_data_type__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object:
                value = addKeyToObjectIfNeeded("root", value);
        }
        return jsontoxml__WEBPACK_IMPORTED_MODULE_2__(value, {
            xmlHeader: true
        });
    };
    return XmlHelper;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: ErrorHandler, HttpCookie, Fort, Router, CookieManager, FileManager, HttpFile, Logger, Controller, Shield, SessionProvider, Guard, ViewEngine, Wall, XmlParser, Worker, Shields, Guards, Route, DefaultWorker, Assign, Singleton, MIME_TYPE, HTTP_METHOD, HTTP_STATUS_CODE, ETag_Type, ERROR_TYPE, jsonResult, textResult, htmlResult, renderView, downloadResult, fileResult, redirectResult, viewResult, getViewFromFile, promise, LogHelper, XmlHelper, getMimeTypeFromExtension, parseAndMatchRoute, parseCookie, JsonHelper, removeLastSlash, removeFirstSlash, reverseLoop, MustacheViewEngine, MemorySessionProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["HttpCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fort", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Fort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["CookieManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileManager", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["FileManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpFile", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["HttpFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Logger"]; });

/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstracts */ "./src/abstracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Shield"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["SessionProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Guard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["ViewEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Wall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XmlParser", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["XmlParser"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "./src/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Worker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Worker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shields", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Shields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guards", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Guards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultWorker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["DefaultWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Assign", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Singleton", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["Singleton"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["HTTP_METHOD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["HTTP_STATUS_CODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ETag_Type", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["ETag_Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"]; });

/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["jsonResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["textResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["htmlResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderView", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["renderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["downloadResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fileResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["fileResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "redirectResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["redirectResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["viewResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getViewFromFile", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getViewFromFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["promise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogHelper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["LogHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XmlHelper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["XmlHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getMimeTypeFromExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["parseAndMatchRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["parseCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHelper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["JsonHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeLastSlash", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["removeLastSlash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFirstSlash", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["removeFirstSlash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseLoop", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["reverseLoop"]; });

/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extra */ "./src/extra/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return _extra__WEBPACK_IMPORTED_MODULE_5__["MustacheViewEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return _extra__WEBPACK_IMPORTED_MODULE_5__["MemorySessionProvider"]; });









/***/ }),

/***/ "./src/models/cookie_manager.ts":
/*!**************************************!*\
  !*** ./src/models/cookie_manager.ts ***!
  \**************************************/
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



/***/ }),

/***/ "./src/models/error_handler.ts":
/*!*************************************!*\
  !*** ./src/models/error_handler.ts ***!
  \*************************************/
/*! exports provided: ErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return ErrorHandler; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");

var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
    }
    ErrorHandler.prototype.onServerError = function (ex) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>Forbidden</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onNotAcceptableRequest = function () {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>Not Acceptable</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onMethodNotAllowed = function () {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>Method Not allowed.</h1>";
            resolve(errMessage);
        });
    };
    ErrorHandler.prototype.onNotFound = function (url) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var errMessage = "<h1>The requested resource " + url + " was not found.</h1>";
            resolve(errMessage);
        });
    };
    return ErrorHandler;
}());



/***/ }),

/***/ "./src/models/file_manager.ts":
/*!************************************!*\
  !*** ./src/models/file_manager.ts ***!
  \************************************/
/*! exports provided: FileManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManager", function() { return FileManager; });
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs-extra */ "fs-extra");
/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_0__);

var FileManager = /** @class */ (function () {
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
        return fs_extra__WEBPACK_IMPORTED_MODULE_0__["copy"](this.files_[fieldName].path, pathToSave);
    };
    return FileManager;
}());



/***/ }),

/***/ "./src/models/fort.ts":
/*!****************************!*\
  !*** ./src/models/fort.ts ***!
  \****************************/
/*! exports provided: Fort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fort", function() { return Fort; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extra */ "./src/extra/index.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/models/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generics */ "./src/generics/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logger */ "./src/models/logger.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_11__);












var Fort = /** @class */ (function () {
    function Fort() {
        this.routes = [];
        this.walls = [];
    }
    Fort.prototype.saveAppOption_ = function (option) {
        var defaultEtagConfig = {
            type: _enums__WEBPACK_IMPORTED_MODULE_6__["ETag_Type"].Weak
        };
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].port = option.port == null ? 4000 : option.port;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].shouldParseCookie = option.shouldParseCookie == null ? true : option.shouldParseCookie;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].shouldParsePost = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(option.shouldParsePost) ? true : option.shouldParsePost;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionTimeOut = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].folders = option.folders == null ? [] : option.folders;
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isArray"])(_fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].folders) === false) {
            throw new Error("Option folders should be an array");
        }
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appName = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmpty"])(option.appName) === true ? _constant__WEBPACK_IMPORTED_MODULE_4__["__AppName"] : option.appName;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appSessionIdentifier = _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appName + "_session_id";
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].eTag = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(option.eTag) ? defaultEtagConfig : option.eTag;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].walls = this.walls;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].viewEngine = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.viewEngine) ? new _extra__WEBPACK_IMPORTED_MODULE_2__["MustacheViewEngine"]() : new this.viewEngine();
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionProvider = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.sessionProvider) ? _extra__WEBPACK_IMPORTED_MODULE_2__["MemorySessionProvider"] :
            this.sessionProvider;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].errorHandler = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.errorHandler) ? ___WEBPACK_IMPORTED_MODULE_3__["ErrorHandler"] : this.errorHandler;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].xmlParser = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.xmlParser) ? _generics__WEBPACK_IMPORTED_MODULE_8__["GenericXmlParser"] : this.xmlParser;
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].viewPath = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNull"])(option.viewPath) ? path__WEBPACK_IMPORTED_MODULE_11__["join"](_constant__WEBPACK_IMPORTED_MODULE_4__["__CurrentPath"], "views") : option.viewPath;
        if (this.logger) {
            if (typeof this.logger === 'function') {
                this.logger = new this.logger();
            }
        }
        else {
            this.logger = new _logger__WEBPACK_IMPORTED_MODULE_10__["Logger"]();
        }
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger = this.logger;
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
            route.path = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeFirstSlash"])(route.path);
            route.path = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeLastSlash"])(route.path);
            if (route.path === "*") {
                isDefaultRouteExist = true;
            }
            _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addToRouterCollection(route);
        });
        if (isDefaultRouteExist === false) {
            _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addToRouterCollection({
                controller: _generics__WEBPACK_IMPORTED_MODULE_8__["GenericController"],
                path: "*"
            });
        }
        if (option.folders != null) {
            // remove / from files routes
            option.folders.forEach(function (folder) {
                var length = folder.alias.length;
                if (length > 1) {
                    folder.alias = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeFirstSlash"])(folder.alias);
                    folder.alias = Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["removeLastSlash"])(folder.alias);
                }
            });
        }
        this.saveAppOption_(option);
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["promise"])(function (res, rej) {
            _this.httpServer = http__WEBPACK_IMPORTED_MODULE_5__["createServer"](function (request, response) {
                new _handlers__WEBPACK_IMPORTED_MODULE_0__["RequestHandler"](request, response).handle();
            }).once("error", function (err) {
                if (err.code === 'EADDRINUSE') {
                    var error = new _helpers__WEBPACK_IMPORTED_MODULE_7__["LogHelper"](_enums__WEBPACK_IMPORTED_MODULE_6__["ERROR_TYPE"].PortInUse, _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', function () {
                res();
            }).listen(_fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].port);
        });
    };
    Fort.prototype.destroy = function () {
        var _this = this;
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["promise"])(function (res, rej) {
            _this.httpServer.close(res);
        });
    };
    return Fort;
}());



/***/ }),

/***/ "./src/models/http_cookie.ts":
/*!***********************************!*\
  !*** ./src/models/http_cookie.ts ***!
  \***********************************/
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

/***/ "./src/models/http_file.ts":
/*!*********************************!*\
  !*** ./src/models/http_file.ts ***!
  \*********************************/
/*! exports provided: HttpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpFile", function() { return HttpFile; });
var HttpFile = /** @class */ (function () {
    function HttpFile() {
    }
    return HttpFile;
}());



/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: ErrorHandler, HttpCookie, Fort, Router, CookieManager, FileManager, HttpFile, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error_handler */ "./src/models/error_handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandler", function() { return _error_handler__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]; });

/* harmony import */ var _http_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_cookie */ "./src/models/http_cookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCookie", function() { return _http_cookie__WEBPACK_IMPORTED_MODULE_1__["HttpCookie"]; });

/* harmony import */ var _fort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fort */ "./src/models/fort.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Fort", function() { return _fort__WEBPACK_IMPORTED_MODULE_2__["Fort"]; });

/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/models/router.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return _router__WEBPACK_IMPORTED_MODULE_3__["Router"]; });

/* harmony import */ var _cookie_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cookie_manager */ "./src/models/cookie_manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return _cookie_manager__WEBPACK_IMPORTED_MODULE_4__["CookieManager"]; });

/* harmony import */ var _file_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file_manager */ "./src/models/file_manager.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileManager", function() { return _file_manager__WEBPACK_IMPORTED_MODULE_5__["FileManager"]; });

/* harmony import */ var _http_file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http_file */ "./src/models/http_file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpFile", function() { return _http_file__WEBPACK_IMPORTED_MODULE_6__["HttpFile"]; });

/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logger */ "./src/models/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger__WEBPACK_IMPORTED_MODULE_7__["Logger"]; });











/***/ }),

/***/ "./src/models/logger.ts":
/*!******************************!*\
  !*** ./src/models/logger.ts ***!
  \******************************/
/*! exports provided: Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
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



/***/ }),

/***/ "./src/models/router.ts":
/*!******************************!*\
  !*** ./src/models/router.ts ***!
  \******************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");

var Router = /** @class */ (function () {
    function Router() {
        this.routes = _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].routerCollection;
    }
    return Router;
}());



/***/ }),

/***/ "./src/test_helpers/http_request_stub.ts":
/*!***********************************************!*\
  !*** ./src/test_helpers/http_request_stub.ts ***!
  \***********************************************/
/*! exports provided: HttpRequestStub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestStub", function() { return HttpRequestStub; });
var HttpRequestStub = /** @class */ (function () {
    function HttpRequestStub(headers) {
        this.headers = headers;
    }
    return HttpRequestStub;
}());



/***/ }),

/***/ "./src/test_helpers/http_response_stub.ts":
/*!************************************************!*\
  !*** ./src/test_helpers/http_response_stub.ts ***!
  \************************************************/
/*! exports provided: HttpResponseStub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseStub", function() { return HttpResponseStub; });
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



/***/ }),

/***/ "./src/test_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/test_helpers/index.ts ***!
  \***********************************/
/*! exports provided: initController, initGuard, initShield, initWall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init_controller */ "./src/test_helpers/init_controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initController", function() { return _init_controller__WEBPACK_IMPORTED_MODULE_0__["initController"]; });

/* harmony import */ var _init_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init_guard */ "./src/test_helpers/init_guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initGuard", function() { return _init_guard__WEBPACK_IMPORTED_MODULE_1__["initGuard"]; });

/* harmony import */ var _init_shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init_shield */ "./src/test_helpers/init_shield.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initShield", function() { return _init_shield__WEBPACK_IMPORTED_MODULE_2__["initShield"]; });

/* harmony import */ var _init_wall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init_wall */ "./src/test_helpers/init_wall.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initWall", function() { return _init_wall__WEBPACK_IMPORTED_MODULE_3__["initWall"]; });







/***/ }),

/***/ "./src/test_helpers/init_controller.ts":
/*!*********************************************!*\
  !*** ./src/test_helpers/init_controller.ts ***!
  \*********************************************/
/*! exports provided: initController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initController", function() { return initController; });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
/* harmony import */ var _http_response_stub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http_response_stub */ "./src/test_helpers/http_response_stub.ts");
/* harmony import */ var _http_request_stub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http_request_stub */ "./src/test_helpers/http_request_stub.ts");




var initController = function (controllerInstance, data) {
    data = data || {};
    var parsedCookies = data.cookieValue || {};
    var headers = (data.request && data.request.headers) || {};
    controllerInstance.request = new _http_request_stub__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStub"](headers);
    controllerInstance.response = new _http_response_stub__WEBPACK_IMPORTED_MODULE_2__["HttpResponseStub"](headers);
    controllerInstance.query = data.query || {};
    controllerInstance.body = data.body || {};
    controllerInstance.cookie = new _models__WEBPACK_IMPORTED_MODULE_0__["CookieManager"](parsedCookies);
    var session = new _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionProvider();
    session.cookie = controllerInstance.cookie;
    session.sessionId = parsedCookies[_fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appSessionIdentifier];
    controllerInstance.session = session;
    controllerInstance.param = data.param || {};
    controllerInstance.data = data.data || {};
    controllerInstance.file = new _models__WEBPACK_IMPORTED_MODULE_0__["FileManager"](data.file || {});
    return controllerInstance;
};


/***/ }),

/***/ "./src/test_helpers/init_guard.ts":
/*!****************************************!*\
  !*** ./src/test_helpers/init_guard.ts ***!
  \****************************************/
/*! exports provided: initGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGuard", function() { return initGuard; });
/* harmony import */ var _init_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init_controller */ "./src/test_helpers/init_controller.ts");

var initGuard = function (guardInstance, data) {
    return Object(_init_controller__WEBPACK_IMPORTED_MODULE_0__["initController"])(guardInstance, data);
};


/***/ }),

/***/ "./src/test_helpers/init_shield.ts":
/*!*****************************************!*\
  !*** ./src/test_helpers/init_shield.ts ***!
  \*****************************************/
/*! exports provided: initShield */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initShield", function() { return initShield; });
/* harmony import */ var _init_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init_controller */ "./src/test_helpers/init_controller.ts");

var initShield = function (shieldInstance, data) {
    var value = Object(_init_controller__WEBPACK_IMPORTED_MODULE_0__["initController"])(shieldInstance, data);
    value.workerName = data && data.workerName;
    return value;
};


/***/ }),

/***/ "./src/test_helpers/init_wall.ts":
/*!***************************************!*\
  !*** ./src/test_helpers/init_wall.ts ***!
  \***************************************/
/*! exports provided: initWall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWall", function() { return initWall; });
/* harmony import */ var _init_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init_controller */ "./src/test_helpers/init_controller.ts");

var initWall = function (wallInstance, data) {
    return Object(_init_controller__WEBPACK_IMPORTED_MODULE_0__["initController"])(wallInstance, data);
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: isNullOrEmpty, isNull, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_null_or_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_null_or_empty */ "./src/utils/is_null_or_empty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return _is_null_or_empty__WEBPACK_IMPORTED_MODULE_0__["isNullOrEmpty"]; });

/* harmony import */ var _is_null__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_null */ "./src/utils/is_null.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _is_null__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is_array */ "./src/utils/is_array.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _is_array__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });






/***/ }),

/***/ "./src/utils/is_array.ts":
/*!*******************************!*\
  !*** ./src/utils/is_array.ts ***!
  \*******************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
var isArray = function (value) {
    return Array.isArray(value);
};


/***/ }),

/***/ "./src/utils/is_null.ts":
/*!******************************!*\
  !*** ./src/utils/is_null.ts ***!
  \******************************/
/*! exports provided: isNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
var isNull = function (value) {
    return value == null;
};


/***/ }),

/***/ "./src/utils/is_null_or_empty.ts":
/*!***************************************!*\
  !*** ./src/utils/is_null_or_empty.ts ***!
  \***************************************/
/*! exports provided: isNullOrEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return isNullOrEmpty; });
var isNullOrEmpty = function (value) {
    return value == null || value.length === 0;
};


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

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

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

/***/ "mustache":
/*!***************************!*\
  !*** external "mustache" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mustache");

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