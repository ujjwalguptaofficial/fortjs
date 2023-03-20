/*!
 * @license :fortjs - V2.0.1 - 20/03/2023
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abstracts/component_option.ts":
/*!*******************************************!*\
  !*** ./src/abstracts/component_option.ts ***!
  \*******************************************/
/*! exports provided: ComponentOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentOption", function() { return ComponentOption; });
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


class Controller {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get option() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].componentOption;
    }
    get logger() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
    }
    initialize(data) {
        Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initController"])(this, data);
    }
}


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


class Guard {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get logger() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
    }
    get option() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].componentOption;
    }
    initialize(data) {
        return Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initGuard"])(this, data);
    }
}


/***/ }),

/***/ "./src/abstracts/index.ts":
/*!********************************!*\
  !*** ./src/abstracts/index.ts ***!
  \********************************/
/*! exports provided: Controller, Shield, SessionProvider, Guard, ViewEngine, Wall, XmlParser, ResultMapper, ComponentOption */
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

/* harmony import */ var _result_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result_mapper */ "./src/abstracts/result_mapper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultMapper", function() { return _result_mapper__WEBPACK_IMPORTED_MODULE_7__["ResultMapper"]; });

/* harmony import */ var _component_option__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component_option */ "./src/abstracts/component_option.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentOption", function() { return _component_option__WEBPACK_IMPORTED_MODULE_8__["ComponentOption"]; });












/***/ }),

/***/ "./src/abstracts/result_mapper.ts":
/*!****************************************!*\
  !*** ./src/abstracts/result_mapper.ts ***!
  \****************************************/
/*! exports provided: ResultMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultMapper", function() { return ResultMapper; });
class ResultMapper {
}


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


class SessionProvider {
    createSession(sessionId) {
        const now = new Date();
        this.sessionId = sessionId != null ? sessionId : uniqid__WEBPACK_IMPORTED_MODULE_0__();
        this.cookie.addCookie({
            name: _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appSessionIdentifier,
            value: this.sessionId,
            httpOnly: true,
            path: "/",
            expires: new Date(now.setMinutes(now.getMinutes() + _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionTimeOut)),
            maxAge: _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionTimeOut * 60
        });
    }
    destroySession() {
        const cookie = this.cookie.getCookie(_fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appSessionIdentifier);
        cookie.httpOnly = true;
        cookie.path = "/";
        this.cookie.removeCookie(cookie);
    }
}


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


class Shield {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get logger() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
    }
    get option() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].componentOption;
    }
    initialize(data) {
        return Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initShield"])(this, data);
    }
}


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
class ViewEngine {
}


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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");



class Wall {
    // eslint-disable-next-line
    constructor(...args) {
    }
    get logger() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
    }
    get option() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].componentOption;
    }
    onOutgoing(finalResult, ...args) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["promiseResolve"])(null);
    }
    initialize(data) {
        return Object(_test_helpers__WEBPACK_IMPORTED_MODULE_0__["initWall"])(this, data);
    }
}


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
class XmlParser {
}


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
const __ContentType = "Content-Type";
const __AppName = "fort";
const __Cookie = "Cookie";
const __SetCookie = 'Set-Cookie';
const __CurrentPath = process.cwd();
const __ContentLength = "Content-Length";
const __Constructor = "const_constructor";


/***/ }),

/***/ "./src/decorators/assign.ts":
/*!**********************************!*\
  !*** ./src/decorators/assign.ts ***!
  \**********************************/
/*! exports provided: assign */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");


// tslint:disable-next-line
const assign = (value) => {
    return (target, methodName, paramIndex) => {
        const className = target.name || target.constructor.name;
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
/*! exports provided: defaultWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultWorker", function() { return defaultWorker; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route */ "./src/decorators/route.ts");
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worker */ "./src/decorators/worker.ts");



// tslint:disable-next-line
const defaultWorker = (...allowedMethods) => {
    return (target, methodName, descriptor) => {
        if (allowedMethods.length === 0) {
            Object(_worker__WEBPACK_IMPORTED_MODULE_2__["worker"])(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Get)(target, methodName, descriptor);
        }
        else {
            Object(_worker__WEBPACK_IMPORTED_MODULE_2__["worker"])(...allowedMethods)(target, methodName, descriptor);
        }
        Object(_route__WEBPACK_IMPORTED_MODULE_1__["route"])("/")(target, methodName, descriptor);
    };
};


/***/ }),

/***/ "./src/decorators/expect_body.ts":
/*!***************************************!*\
  !*** ./src/decorators/expect_body.ts ***!
  \***************************************/
/*! exports provided: expectBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expectBody", function() { return expectBody; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _enums_data_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/data_type */ "./src/enums/data_type.ts");



function expectBody(value) {
    return (target, methodName) => {
        const className = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getClassName"])(target);
        const type = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getDataType"])(value);
        switch (type) {
            case _enums_data_type__WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"].Function:
                // eslint-disable-next-line
                const valueClassName = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getClassName"])(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case _enums_data_type__WEBPACK_IMPORTED_MODULE_2__["DATA_TYPE"].Object:
                value = Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["removeMethodAndNullFromObject"])(value);
                _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addExpected("body", className, methodName, value);
                break;
            default:
                throw new Error(`expected body should be always an object but found ${type}`);
        }
    };
}


/***/ }),

/***/ "./src/decorators/expect_query.ts":
/*!****************************************!*\
  !*** ./src/decorators/expect_query.ts ***!
  \****************************************/
/*! exports provided: expectQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expectQuery", function() { return expectQuery; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _enums_data_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/data_type */ "./src/enums/data_type.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");



function expectQuery(value) {
    return (target, methodName, descriptor) => {
        const className = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getClassName"])(target);
        const type = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getDataType"])(value);
        switch (type) {
            case _enums_data_type__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function:
                // eslint-disable-next-line
                const valueClassName = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getClassName"])(value);
                if (valueClassName != null) {
                    value = new value();
                }
            case _enums_data_type__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Object:
                value = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["removeMethodAndNullFromObject"])(value);
                _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addExpected("query", className, methodName, value);
                break;
            default:
                throw new Error(`expected query should be always an object but found ${type}`);
        }
    };
}


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
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");

// tslint:disable-next-line
const guards = (...value) => {
    return ((target, methodName, descriptor) => {
        const className = target.constructor.name;
        _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addGuards(value, className, methodName);
    });
};


/***/ }),

/***/ "./src/decorators/index.ts":
/*!*********************************!*\
  !*** ./src/decorators/index.ts ***!
  \*********************************/
/*! exports provided: worker, shields, guards, route, defaultWorker, assign, singleton, expectBody, expectQuery */
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

/* harmony import */ var _assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign */ "./src/decorators/assign.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _assign__WEBPACK_IMPORTED_MODULE_5__["assign"]; });

/* harmony import */ var _singleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./singleton */ "./src/decorators/singleton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return _singleton__WEBPACK_IMPORTED_MODULE_6__["singleton"]; });

/* harmony import */ var _expect_body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./expect_body */ "./src/decorators/expect_body.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expectBody", function() { return _expect_body__WEBPACK_IMPORTED_MODULE_7__["expectBody"]; });

/* harmony import */ var _expect_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expect_query */ "./src/decorators/expect_query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expectQuery", function() { return _expect_query__WEBPACK_IMPORTED_MODULE_8__["expectQuery"]; });












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
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");


// tslint:disable-next-line
const route = (format) => {
    return ((target, methodName, descriptor) => {
        const className = target.constructor.name;
        // remove / from route
        if (format != null) {
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
/*! exports provided: shields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return shields; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");

// tslint:disable-next-line
const shields = (...shields) => {
    return (target) => {
        const className = target.name;
        _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addShields(shields, className);
    };
};


/***/ }),

/***/ "./src/decorators/singleton.ts":
/*!*************************************!*\
  !*** ./src/decorators/singleton.ts ***!
  \*************************************/
/*! exports provided: singleton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant.ts");


// tslint:disable-next-line
const singleton = (value) => {
    return (target, methodName, paramIndex) => {
        const className = target.name || target.constructor.name;
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
/*! exports provided: worker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return worker; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");


// tslint:disable-next-line
const worker = (...allowedMethods) => {
    return (target, methodName, descriptor) => {
        const className = target.constructor.name;
        const actionInfo = {
            workerName: methodName,
            methodsAllowed: allowedMethods.length === 0 ? [
                _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Delete,
                _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Get,
                _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Post,
                _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Patch,
                _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Put
            ] : allowedMethods,
            guards: [],
            pattern: `/${methodName.toLowerCase()}`,
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
/*! exports provided: MIME_TYPE, HTTP_METHOD, HTTP_STATUS_CODE, ETag_Type, ERROR_TYPE, DATA_TYPE */
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

/* harmony import */ var _data_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data_type */ "./src/enums/data_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return _data_type__WEBPACK_IMPORTED_MODULE_5__["DATA_TYPE"]; });









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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");


const sessionValues = {};
class MemorySessionProvider extends _abstracts_session_provider__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"] {
    get(key) {
        const savedSession = sessionValues[this.sessionId];
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["promiseResolve"])(savedSession != null ? savedSession[key] : null);
    }
    isExist(key) {
        const savedValue = sessionValues[this.sessionId];
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["promiseResolve"])(savedValue == null ? false : savedValue[key] != null);
    }
    getAll() {
        const savedValue = sessionValues[this.sessionId];
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["promiseResolve"])(savedValue == null ? {} : savedValue);
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
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["promiseResolve"])(null);
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
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["promiseResolve"])(null);
    }
    clear() {
        // remove session values
        delete sessionValues[this.sessionId];
        // expire cookie in browser
        this.destroySession();
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["promiseResolve"])(null);
    }
}


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


class MustacheViewEngine {
    render(value) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["getViewFromFile"])({
            fileLocation: value.view
        }).then(viewData => {
            return mustache__WEBPACK_IMPORTED_MODULE_0__["render"](viewData, value.model);
        });
    }
}


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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models/index.ts");
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generics */ "./src/generics/index.ts");
/* harmony import */ var _abstracts_component_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstracts/component_option */ "./src/abstracts/component_option.ts");
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra */ "./src/extra/index.ts");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./src/constant.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums */ "./src/enums/index.ts");







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
            FortGlobal.viewPath = path__WEBPACK_IMPORTED_MODULE_5__["join"](_constant__WEBPACK_IMPORTED_MODULE_4__["__CurrentPath"], "views");
        }
        if (FortGlobal.logger == null) {
            FortGlobal.logger = FortGlobal.logger || new _models__WEBPACK_IMPORTED_MODULE_0__["Logger"]();
        }
        if (FortGlobal.sessionProvider == null) {
            FortGlobal.sessionProvider = _extra__WEBPACK_IMPORTED_MODULE_3__["MemorySessionProvider"];
        }
        if (FortGlobal.xmlParser == null) {
            FortGlobal.xmlParser = _generics__WEBPACK_IMPORTED_MODULE_1__["GenericXmlParser"];
        }
        if (FortGlobal.viewEngine == null) {
            FortGlobal.viewEngine = new _extra__WEBPACK_IMPORTED_MODULE_3__["MustacheViewEngine"]();
        }
        if (FortGlobal.appName == null) {
            FortGlobal.appName = _constant__WEBPACK_IMPORTED_MODULE_4__["__AppName"];
        }
        if (FortGlobal.eTag == null) {
            FortGlobal.eTag = {
                type: _enums__WEBPACK_IMPORTED_MODULE_6__["ETag_Type"].Weak
            };
        }
        if (FortGlobal.errorHandler == null) {
            FortGlobal.errorHandler = _models__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"];
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
FortGlobal.componentOption = new _abstracts_component_option__WEBPACK_IMPORTED_MODULE_2__["ComponentOption"]();


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

class GenericController extends _abstracts__WEBPACK_IMPORTED_MODULE_0__["Controller"] {
    constructor(...args) {
        super();
    }
}


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

class GenericGuard extends _abstracts__WEBPACK_IMPORTED_MODULE_0__["Guard"] {
    constructor(...args) {
        super();
    }
    check(...args) {
        return null;
    }
}


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

class GenericSessionProvider extends _abstracts__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"] {
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");


class GenericShield extends _abstracts__WEBPACK_IMPORTED_MODULE_0__["Shield"] {
    constructor(...args) {
        super();
    }
    protect(...args) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["promiseResolve"])(null);
    }
}


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

class GenericWall extends _abstracts__WEBPACK_IMPORTED_MODULE_0__["Wall"] {
    constructor(...args) {
        super();
    }
    onIncoming(...args) {
        return null;
    }
}


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
class GenericXmlParser {
    parse(xml) {
        // tslint:disable-next-line
        throw {
            message: "no xml parser configured"
        };
    }
}


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





class ControllerResultHandler extends _file_handler__WEBPACK_IMPORTED_MODULE_2__["FileHandler"] {
    handleRedirectResult_() {
        this.response.writeHead(this.controllerResult.statusCode || _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok, { 'Location': this.controllerResult.responseData });
        this.response.end();
    }
    handleFileResult_() {
        const result = this.controllerResult;
        const parsedPath = path__WEBPACK_IMPORTED_MODULE_3__["parse"](result.file.filePath);
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
            this.response.setHeader(_constant__WEBPACK_IMPORTED_MODULE_0__["__SetCookie"], value);
        });
        if (result.shouldRedirect === true) {
            this.handleRedirectResult_();
        }
        else {
            if (result.responseFormat == null) {
                if (result.file == null) {
                    const contentType = result.contentType || _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Text;
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
    }
    onResultFromController(result) {
        this.controllerResult = result || Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["textResult"])("");
        return this.runWallOutgoing().then(_ => {
            this.handleFinalResult_();
        }).catch(ex => {
            this.onErrorOccured(ex);
        });
    }
}


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










class FileHandler extends _request_handler_helper__WEBPACK_IMPORTED_MODULE_4__["RequestHandlerHelper"] {
    getFileInfoFromUrl_(urlPath) {
        const splittedValue = urlPath.split("/");
        const fileInfo = {
            file: ""
        };
        if (splittedValue.length > 2 || !Object(_utils__WEBPACK_IMPORTED_MODULE_9__["isNullOrEmpty"])(path__WEBPACK_IMPORTED_MODULE_2__["parse"](urlPath).ext)) {
            fileInfo.folder = splittedValue[1];
            fileInfo.file = splittedValue.splice(2).join("/");
            return fileInfo;
        }
        fileInfo.folder = splittedValue[1];
        return fileInfo;
    }
    getFileStats_(filePath) {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["promise"])((res, rej) => {
            // eslint-disable-next-line
            fs__WEBPACK_IMPORTED_MODULE_5__["lstat"](filePath, (err, status) => {
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
            const folder = _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].folders.find(qry => qry.alias === fileInfo.folder);
            if (folder != null) {
                return path__WEBPACK_IMPORTED_MODULE_2__["join"](folder.path, fileInfo.file);
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
        const extension = path__WEBPACK_IMPORTED_MODULE_2__["parse"](urlPath).ext;
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
        absolutePath = path__WEBPACK_IMPORTED_MODULE_2__["join"](absolutePath, "index.html");
        this.getFileStats_(absolutePath).then(fileInfo => {
            if (fileInfo != null) {
                const fileType = _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html;
                this.sendFile_(absolutePath, fileType, fileInfo);
            }
            else {
                this.onNotFound();
            }
        }).catch(this.onErrorOccured.bind(this));
    }
    isClientHasFreshFile_(lastModified, etagValue) {
        return fresh__WEBPACK_IMPORTED_MODULE_8__(this.request.headers, {
            'etag': etagValue,
            'last-modified': lastModified
        });
    }
    sendFileAsResponse_(filePath, mimeType) {
        this.response.writeHead(_enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok, {
            [_constant__WEBPACK_IMPORTED_MODULE_3__["__ContentType"]]: mimeType
        });
        const readStream = fs__WEBPACK_IMPORTED_MODULE_5__["createReadStream"](filePath);
        // Handle non-existent file
        readStream.on('error', this.onErrorOccured.bind(this));
        readStream.on('open', () => {
            readStream.pipe(this.response);
        });
    }
    getMimeTypeFromFileType_(fileType) {
        return fileType[0] === '.' ? Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getMimeTypeFromExtension"])(fileType) :
            fileType;
    }
}
if (_fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].isProduction) {
    FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        this.runWallOutgoing().then(() => {
            const lastModified = fileInfo.mtime.toUTCString();
            const eTagValue = etag__WEBPACK_IMPORTED_MODULE_7__(fileInfo, {
                weak: _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].eTag.type === _enums__WEBPACK_IMPORTED_MODULE_0__["ETag_Type"].Weak
            });
            if (this.isClientHasFreshFile_(lastModified, eTagValue)) { // client has fresh file
                this.response.statusCode = _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].NotModified;
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
    FileHandler.prototype.sendFile_ = function (filePath, fileType, fileInfo) {
        this.runWallOutgoing().then(() => {
            this.sendFileAsResponse_(filePath, this.getMimeTypeFromFileType_(fileType));
        }).catch(this.onErrorOccured.bind(this));
    };
}


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
const injectorStoreInfos = [];
// this stores injector values
const injectorValues = [];
// this stores the singletons name & their respective index in injector values
const singletons = {};
class InjectorHandler {
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
        return this.getMethodValues(className, _constant__WEBPACK_IMPORTED_MODULE_0__["__Constructor"]);
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
                singletons[singletonClassName] = InjectorHandler.addWorkerValue(className, methodName, paramIndex, new paramValue());
            }
            else {
                InjectorHandler.addWorkerValue(className, methodName, paramIndex, singletons[singletonClassName], false);
            }
        }
    }
}


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









class PostHandler extends _controller_result_handler__WEBPACK_IMPORTED_MODULE_0__["ControllerResultHandler"] {
    getPostRawData_() {
        const body = [];
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["promise"])((res, rej) => {
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["promise"])((res, rej) => {
            new multiparty__WEBPACK_IMPORTED_MODULE_6__["Form"]().parse(this.request, (err, fields, files) => {
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
        let contentType = this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_2__["__ContentType"]] || this.request.headers["content-type"];
        if (contentType != null) {
            contentType = content_type__WEBPACK_IMPORTED_MODULE_4__["parse"](contentType).type;
        }
        if (contentType === _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"].FormMultiPart) {
            return this.parseMultiPartData_().then(result => {
                this.file = new _models__WEBPACK_IMPORTED_MODULE_7__["FileManager"](result.file);
                return (result.field);
            });
        }
        else {
            let postData;
            this.file = new _models__WEBPACK_IMPORTED_MODULE_7__["FileManager"]({});
            return this.getPostRawData_().then(bodyDataAsString => {
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
                return postData;
            });
        }
    }
}


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
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route_handler */ "./src/handlers/route_handler.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");










class RequestHandler extends _post_handler__WEBPACK_IMPORTED_MODULE_6__["PostHandler"] {
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["promise"])((res) => {
            let index = 0;
            const wallLength = _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].walls.length;
            const executeWallIncomingByIndex = () => {
                if (wallLength > index) {
                    const wall = _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].walls[index++];
                    const constructorArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(wall.name);
                    const wallObj = new wall(...constructorArgsValues);
                    wallObj.cookie = this.cookieManager;
                    wallObj.session = this.session_;
                    wallObj.request = this.request;
                    wallObj.response = this.response;
                    wallObj.data = this.data_;
                    wallObj.query = this.query_;
                    this.wallInstances.push(wallObj);
                    const methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(wall.name, 'onIncoming');
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["promise"])((res) => {
            let index = 0;
            const shieldLength = this.routeMatchInfo_.shields.length;
            const executeShieldByIndex = () => {
                if (shieldLength > index) {
                    const shield = this.routeMatchInfo_.shields[index++];
                    const constructorArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(shield.name);
                    const shieldObj = new shield(...constructorArgsValues);
                    shieldObj.cookie = this.cookieManager;
                    shieldObj.query = this.query_;
                    shieldObj.session = this.session_;
                    shieldObj.request = this.request;
                    shieldObj.response = this.response;
                    shieldObj.data = this.data_;
                    shieldObj.workerName = this.routeMatchInfo_.workerInfo.workerName;
                    const methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(shield.name, 'protect');
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
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["promise"])((res) => {
            let index = 0;
            const shieldLength = guards.length;
            const executeGuardByIndex = () => {
                if (shieldLength > index) {
                    const guard = guards[index++];
                    const constructorArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(guard.name);
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
                    const methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(guard.name, 'check');
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
        if (_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].shouldParseCookie === true) {
            const rawCookie = (this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_1__["__Cookie"]] || this.request.headers["cookie"]);
            let parsedCookies;
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
    }
    setPreHeader_() {
        this.response.setHeader('X-Powered-By', _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].appName);
        this.response.setHeader('Vary', 'Accept-Encoding');
        this.response.sendDate = true;
    }
    checkExpectedQuery_() {
        const expectedQuery = _route_handler__WEBPACK_IMPORTED_MODULE_8__["RouteHandler"].getExpectedQuery(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedQuery != null) {
            this.query_ = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["compareExpectedAndRemoveUnnecessary"])(expectedQuery, this.query_, true);
        }
    }
    checkExpectedBody_() {
        const expectedBody = _route_handler__WEBPACK_IMPORTED_MODULE_8__["RouteHandler"].getExpectedBody(this.routeMatchInfo_.controllerName, this.routeMatchInfo_.workerInfo.workerName);
        if (expectedBody != null) {
            this.body = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["compareExpectedAndRemoveUnnecessary"])(expectedBody, this.body, false);
        }
    }
    onRouteMatched_() {
        const actionInfo = this.routeMatchInfo_.workerInfo;
        if (actionInfo == null) {
            if (this.request.method === _enums__WEBPACK_IMPORTED_MODULE_5__["HTTP_METHOD"].Options) {
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
        const urlDetail = url__WEBPACK_IMPORTED_MODULE_0__["parse"](this.request.url, true);
        this.query_ = urlDetail.query;
        const isCookieValid = this.parseCookieFromRequest_();
        if (isCookieValid === false)
            return;
        this.executeWallIncoming_().then(isAllowedByWalls => {
            if (isAllowedByWalls === false)
                return;
            const pathUrl = urlDetail.pathname;
            const requestMethod = this.request.method;
            this.routeMatchInfo_ = Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["parseAndMatchRoute"])(pathUrl.toLowerCase(), requestMethod);
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
        if (this.request.method === _enums__WEBPACK_IMPORTED_MODULE_5__["HTTP_METHOD"].Get) {
            this.body = {};
            this.file = new _models__WEBPACK_IMPORTED_MODULE_4__["FileManager"]({});
            return Object(_utils__WEBPACK_IMPORTED_MODULE_9__["promiseResolve"])(true);
        }
        if (_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].shouldParsePost === true) {
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
        const constructorValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getConstructorValues(this.routeMatchInfo_.controller.name);
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
        const methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_7__["InjectorHandler"].getMethodValues(this.routeMatchInfo_.controller.name, this.routeMatchInfo_.workerInfo.workerName);
        return controllerObj[this.routeMatchInfo_.workerInfo.workerName](...methodArgsValues);
    }
}
if (_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].isProduction) {
    RequestHandler.prototype.runController_ = function () {
        this.setControllerProps_().then(this.onResultFromController.bind(this)).catch(this.onErrorOccured.bind(this));
    };
}
else {
    RequestHandler.prototype.runController_ = function () {
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






class RequestHandlerHelper {
    constructor() {
        this.wallInstances = [];
        this.controllerResult = {};
    }
    runWallOutgoing() {
        const outgoingResults = [];
        Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["reverseLoop"])(this.wallInstances, (value) => {
            const methodArgsValues = _injector_handler__WEBPACK_IMPORTED_MODULE_5__["InjectorHandler"].getMethodValues(value.constructor.name, 'onOutgoing');
            methodArgsValues.shift();
            outgoingResults.push(value.onOutgoing(this.controllerResult, ...methodArgsValues));
        });
        return Promise.all(outgoingResults);
    }
    getContentTypeFromNegotiation(type) {
        const negotiator = new negotiator__WEBPACK_IMPORTED_MODULE_3__(this.request);
        let availableTypes = this.getAvailableTypes_(type);
        if (availableTypes == null) {
            availableTypes = [type];
        }
        return negotiator.mediaType(availableTypes);
    }
    getContentTypeFromNegotiationHavingMultipleTypes(types) {
        const negotiator = new negotiator__WEBPACK_IMPORTED_MODULE_3__(this.request);
        return negotiator.mediaType(types);
    }
    getAvailableTypes_(type) {
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
    }
    onBadRequest(error) {
        return new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onBadRequest(error).then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onForbiddenRequest() {
        return new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onForbiddenRequest().then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onNotAcceptableRequest() {
        return new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onNotAcceptableRequest().then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onNotFound() {
        return new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onNotFound(this.request.url).then(data => {
            return this.onResultFromError_(data);
        }).catch(ex => {
            return this.onErrorOccured(ex);
        });
    }
    onMethodNotAllowed(allowedMethods) {
        return new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onMethodNotAllowed().then(data => {
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
        return new _fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].errorHandler().onServerError(error).then(data => {
            this.controllerResult = data;
            return this.returnResultFromError_();
        }).catch(ex => {
            const response = {
                message: ex.message,
                stack: ex.stack
            };
            this.controllerResult = response;
            return this.returnResultFromError_();
        });
        // if (typeof error === 'string') {
        //     error = {
        //         message: error
        //     } as IException;
        // }
        // let response;
        // try {
        //     response = await new FortGlobal.errorHandler().onServerError(error);
        // }
        // catch (ex) {
        //     response = JsonHelper.stringify(ex);
        // }
        // this.controllerResult = response;
        // this.returnResultFromError_();
    }
    onRequestOptions(allowedMethods) {
        this.response.setHeader("Allow", allowedMethods.join(","));
        return this.onResultFromError_(Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["textResult"])(""));
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
            this.response.setHeader(_constant__WEBPACK_IMPORTED_MODULE_1__["__SetCookie"], value);
        });
        if (result.responseFormat == null) {
            const contentType = result.contentType || _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text;
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
        const data = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["getResultBasedOnMiMe"])(negotiateMimeType, this.controllerResult.responseData, (type) => {
            negotiateMimeType = type;
        });
        this.response.writeHead(this.controllerResult.statusCode || _enums__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok, { [_constant__WEBPACK_IMPORTED_MODULE_1__["__ContentType"]]: negotiateMimeType });
        this.response.end(data);
    }
}


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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models */ "./src/models/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");



const routerCollection = {};
const pushRouterIntoCollection = (route) => {
    const routeObj = new _models__WEBPACK_IMPORTED_MODULE_1__["RouteInfo"]();
    routeObj.init(route);
    routerCollection[route.controllerName] = routeObj;
};
const getActionPattern = (parentRoute, pattern) => {
    return (Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNull"])(parentRoute.path) || parentRoute.path === "/*") ? pattern : `${parentRoute.path}${pattern}`;
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
            expectedValue[prop] = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["getDataType"])(propValue);
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

/***/ "./src/helpers/compar_expected_and_remove_unnecessary.ts":
/*!***************************************************************!*\
  !*** ./src/helpers/compar_expected_and_remove_unnecessary.ts ***!
  \***************************************************************/
/*! exports provided: compareExpectedAndRemoveUnnecessary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareExpectedAndRemoveUnnecessary", function() { return compareExpectedAndRemoveUnnecessary; });
/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var _enums_data_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/data_type */ "./src/enums/data_type.ts");


const compareExpectedAndRemoveUnnecessary = (expected, actual, isQuery) => {
    const result = {};
    for (const prop in expected) {
        if (isQuery === true && expected[prop] === _enums_data_type__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Number) {
            result[prop] = Number(actual[prop]);
            if (isNaN(result[prop]) === true) {
                return null;
            }
        }
        else {
            result[prop] = actual[prop];
        }
        if (expected[prop] !== Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(result[prop])) {
            return null;
        }
    }
    return result;
};


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

const downloadResult = (filePath, downloadFileName) => {
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

const fileResult = (filePath) => {
    return {
        statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Ok,
        file: {
            filePath: filePath
        }
    };
};


/***/ }),

/***/ "./src/helpers/get_class_name.ts":
/*!***************************************!*\
  !*** ./src/helpers/get_class_name.ts ***!
  \***************************************/
/*! exports provided: getClassName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return getClassName; });
const getClassName = (target) => {
    return target.name || (target.constructor && target.constructor.name);
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

const getDataType = (value) => {
    const type = typeof value;
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

const getMimeTypeFromExtension = (ext) => {
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
        case ".svg":
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

/***/ "./src/helpers/get_result_based_on_mime.ts":
/*!*************************************************!*\
  !*** ./src/helpers/get_result_based_on_mime.ts ***!
  \*************************************************/
/*! exports provided: getResultBasedOnMiMe, setResultMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResultBasedOnMiMe", function() { return getResultBasedOnMiMe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResultMapper", function() { return setResultMapper; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");

let getResultBasedOnMiMe = (type, result, setMimeType) => {
    switch (type) {
        case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json:
        case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text:
        case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html:
        case _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Xml:
            if (typeof result === 'object' === true) {
                setMimeType(_enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json);
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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fort_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fort_global */ "./src/fort_global.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");




const viewCache = {};
let getViewFromFile;
const readView = (option) => {
    const pathOfView = path__WEBPACK_IMPORTED_MODULE_1__["join"](_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].viewPath, option.fileLocation);
    // eslint-disable-next-line
    return Object(fs_extra__WEBPACK_IMPORTED_MODULE_0__["readFile"])(pathOfView, {
        encoding: 'utf8'
    }).then(result => {
        if (option.mapView != null) {
            return option.mapView(result);
        }
        return result;
    });
};
if (_fort_global__WEBPACK_IMPORTED_MODULE_2__["FortGlobal"].isProduction === true) {
    getViewFromFile = function (option) {
        if (viewCache[option.fileLocation] == null) {
            return readView(option).then(result => {
                viewCache[option.fileLocation] = result;
                return result;
            });
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["promiseResolve"])(viewCache[option.fileLocation]);
    };
}
else {
    getViewFromFile = function (option) {
        return readView(option);
    };
}


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


const htmlResult = (html, statusCode) => {
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
/*! exports provided: jsonResult, textResult, htmlResult, renderView, downloadResult, fileResult, redirectResult, viewResult, getViewFromFile, promise, LogHelper, getMimeTypeFromExtension, parseAndMatchRoute, parseCookie, JsonHelper, removeLastSlash, removeFirstSlash, reverseLoop, compareExpectedAndRemoveUnnecessary, getDataType, getClassName, removeMethodAndNullFromObject, getResultBasedOnMiMe, setResultMapper */
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

/* harmony import */ var _get_mime_type_from_extension__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./get_mime_type_from_extension */ "./src/helpers/get_mime_type_from_extension.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return _get_mime_type_from_extension__WEBPACK_IMPORTED_MODULE_11__["getMimeTypeFromExtension"]; });

/* harmony import */ var _parse_match_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parse_match_route */ "./src/helpers/parse_match_route.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return _parse_match_route__WEBPACK_IMPORTED_MODULE_12__["parseAndMatchRoute"]; });

/* harmony import */ var _parse_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parse_cookie */ "./src/helpers/parse_cookie.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return _parse_cookie__WEBPACK_IMPORTED_MODULE_13__["parseCookie"]; });

/* harmony import */ var _json_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./json_helper */ "./src/helpers/json_helper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHelper", function() { return _json_helper__WEBPACK_IMPORTED_MODULE_14__["JsonHelper"]; });

/* harmony import */ var _remove_last_slash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./remove_last_slash */ "./src/helpers/remove_last_slash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeLastSlash", function() { return _remove_last_slash__WEBPACK_IMPORTED_MODULE_15__["removeLastSlash"]; });

/* harmony import */ var _remove_first_slash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./remove_first_slash */ "./src/helpers/remove_first_slash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFirstSlash", function() { return _remove_first_slash__WEBPACK_IMPORTED_MODULE_16__["removeFirstSlash"]; });

/* harmony import */ var _reverse_loop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./reverse_loop */ "./src/helpers/reverse_loop.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseLoop", function() { return _reverse_loop__WEBPACK_IMPORTED_MODULE_17__["reverseLoop"]; });

/* harmony import */ var _compar_expected_and_remove_unnecessary__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./compar_expected_and_remove_unnecessary */ "./src/helpers/compar_expected_and_remove_unnecessary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareExpectedAndRemoveUnnecessary", function() { return _compar_expected_and_remove_unnecessary__WEBPACK_IMPORTED_MODULE_18__["compareExpectedAndRemoveUnnecessary"]; });

/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataType", function() { return _get_data_type__WEBPACK_IMPORTED_MODULE_19__["getDataType"]; });

/* harmony import */ var _get_class_name__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./get_class_name */ "./src/helpers/get_class_name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return _get_class_name__WEBPACK_IMPORTED_MODULE_20__["getClassName"]; });

/* harmony import */ var _remove_method_and_null_from_object__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./remove_method_and_null_from_object */ "./src/helpers/remove_method_and_null_from_object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeMethodAndNullFromObject", function() { return _remove_method_and_null_from_object__WEBPACK_IMPORTED_MODULE_21__["removeMethodAndNullFromObject"]; });

/* harmony import */ var _get_result_based_on_mime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./get_result_based_on_mime */ "./src/helpers/get_result_based_on_mime.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResultBasedOnMiMe", function() { return _get_result_based_on_mime__WEBPACK_IMPORTED_MODULE_22__["getResultBasedOnMiMe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setResultMapper", function() { return _get_result_based_on_mime__WEBPACK_IMPORTED_MODULE_22__["setResultMapper"]; });


























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


const jsonResult = (value, statusCode) => {
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

class LogHelper {
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
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidControllerName:
                errMsg = `Invalid controller name - '${this.info_}'. Controller name must contain 'controller'.`;
                break;
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].InvalidContentType:
                errMsg = `Content type - '${this.info_}' is not valid. Please create an issue if you think this is valid type.`;
                break;
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].PortInUse:
                errMsg = `Port ${this.info_} is being used by another process.`;
                break;
            case _enums_error_type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TYPE"].UndefinedViewEngine:
                errMsg = `View engine is not initiated.Initiate the view engine where fort is created.`;
                break;
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    }
}


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

const parseCookie = (cookie) => {
    const value = {};
    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isNullOrEmpty"])(cookie)) {
        cookie.split(';').forEach((val) => {
            const parts = val.split('=');
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
    url = Object(___WEBPACK_IMPORTED_MODULE_1__["removeLastSlash"])(url);
    const urlParts = url.split("/");
    const route = _handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].findControllerFromPath(urlParts);
    return route == null ? checkRouteInWorker(_handlers_route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].defaultRoute, httpMethod, urlParts) :
        checkRouteInWorker(route, httpMethod, urlParts);
}


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
const promise = (callBack) => {
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


const redirectResult = (url) => {
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
const removeFirstSlash = function (value) {
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
const removeLastSlash = (url) => {
    const urlLength = url.length;
    // removing / from url;
    if (url[urlLength - 1] === "/") {
        return url.substr(0, urlLength - 1);
    }
    return url;
};


/***/ }),

/***/ "./src/helpers/remove_method_and_null_from_object.ts":
/*!***********************************************************!*\
  !*** ./src/helpers/remove_method_and_null_from_object.ts ***!
  \***********************************************************/
/*! exports provided: removeMethodAndNullFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMethodAndNullFromObject", function() { return removeMethodAndNullFromObject; });
/* harmony import */ var _get_data_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_data_type */ "./src/helpers/get_data_type.ts");
/* harmony import */ var _enums_data_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/data_type */ "./src/enums/data_type.ts");


const removeMethodAndNullFromObject = (value) => {
    const outputValue = {};
    for (const prop in value) {
        const type = Object(_get_data_type__WEBPACK_IMPORTED_MODULE_0__["getDataType"])(value[prop]);
        if (!(value[prop] == null || type === _enums_data_type__WEBPACK_IMPORTED_MODULE_1__["DATA_TYPE"].Function)) {
            outputValue[prop] = value[prop];
        }
    }
    return outputValue;
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
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log_helper */ "./src/helpers/log_helper.ts");
/* harmony import */ var _enums_error_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/error_type */ "./src/enums/error_type.ts");



let renderView;
if (_fort_global__WEBPACK_IMPORTED_MODULE_0__["FortGlobal"].isProduction === true) {
    renderView = (viewName, model) => {
        return _fort_global__WEBPACK_IMPORTED_MODULE_0__["FortGlobal"].viewEngine.render({
            view: viewName,
            model
        });
    };
}
else {
    renderView = (viewName, model) => {
        if (_fort_global__WEBPACK_IMPORTED_MODULE_0__["FortGlobal"].viewEngine == null) {
            new _log_helper__WEBPACK_IMPORTED_MODULE_1__["LogHelper"](_enums_error_type__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].UndefinedViewEngine).throw();
        }
        return _fort_global__WEBPACK_IMPORTED_MODULE_0__["FortGlobal"].viewEngine.render({
            view: viewName,
            model
        });
    };
}


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
const reverseLoop = function (values, cb) {
    for (let length = values.length, i = length - 1; i >= 0; i--) {
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


const textResult = (text, statusCode) => {
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


const viewResult = (viewName, model) => {
    return Object(_render_view__WEBPACK_IMPORTED_MODULE_0__["renderView"])(viewName, model).then(viewData => {
        return {
            contentType: _enums__WEBPACK_IMPORTED_MODULE_1__["MIME_TYPE"].Html,
            responseData: viewData,
            statusCode: _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
        };
    });
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteInfo", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["RouteInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return _models__WEBPACK_IMPORTED_MODULE_0__["Components"]; });

/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstracts */ "./src/abstracts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Shield"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["SessionProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Guard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["ViewEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wall", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["Wall"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XmlParser", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["XmlParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultMapper", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["ResultMapper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentOption", function() { return _abstracts__WEBPACK_IMPORTED_MODULE_1__["ComponentOption"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators */ "./src/decorators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["worker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["shields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["guards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "route", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["route"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultWorker", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["defaultWorker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["assign"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["singleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expectBody", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["expectBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expectQuery", function() { return _decorators__WEBPACK_IMPORTED_MODULE_2__["expectQuery"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums */ "./src/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["HTTP_METHOD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["HTTP_STATUS_CODE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ETag_Type", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["ETag_Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["DATA_TYPE"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMimeTypeFromExtension", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getMimeTypeFromExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["parseAndMatchRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["parseCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JsonHelper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["JsonHelper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeLastSlash", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["removeLastSlash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFirstSlash", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["removeFirstSlash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverseLoop", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["reverseLoop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareExpectedAndRemoveUnnecessary", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["compareExpectedAndRemoveUnnecessary"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataType", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getDataType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassName", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeMethodAndNullFromObject", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["removeMethodAndNullFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getResultBasedOnMiMe", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["getResultBasedOnMiMe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setResultMapper", function() { return _helpers__WEBPACK_IMPORTED_MODULE_4__["setResultMapper"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/types/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_5__) if(["default","ErrorHandler","HttpCookie","Fort","Router","CookieManager","FileManager","HttpFile","Logger","RouteInfo","Components","Controller","Shield","SessionProvider","Guard","ViewEngine","Wall","XmlParser","ResultMapper","ComponentOption","worker","shields","guards","route","defaultWorker","assign","singleton","expectBody","expectQuery","MIME_TYPE","HTTP_METHOD","HTTP_STATUS_CODE","ETag_Type","ERROR_TYPE","DATA_TYPE","jsonResult","textResult","htmlResult","renderView","downloadResult","fileResult","redirectResult","viewResult","getViewFromFile","promise","LogHelper","getMimeTypeFromExtension","parseAndMatchRoute","parseCookie","JsonHelper","removeLastSlash","removeFirstSlash","reverseLoop","compareExpectedAndRemoveUnnecessary","getDataType","getClassName","removeMethodAndNullFromObject","getResultBasedOnMiMe","setResultMapper"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _extra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extra */ "./src/extra/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MustacheViewEngine", function() { return _extra__WEBPACK_IMPORTED_MODULE_6__["MustacheViewEngine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return _extra__WEBPACK_IMPORTED_MODULE_6__["MemorySessionProvider"]; });

/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interfaces */ "./src/interfaces/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _interfaces__WEBPACK_IMPORTED_MODULE_7__) if(["default","ErrorHandler","HttpCookie","Fort","Router","CookieManager","FileManager","HttpFile","Logger","RouteInfo","Components","Controller","Shield","SessionProvider","Guard","ViewEngine","Wall","XmlParser","ResultMapper","ComponentOption","worker","shields","guards","route","defaultWorker","assign","singleton","expectBody","expectQuery","MIME_TYPE","HTTP_METHOD","HTTP_STATUS_CODE","ETag_Type","ERROR_TYPE","DATA_TYPE","jsonResult","textResult","htmlResult","renderView","downloadResult","fileResult","redirectResult","viewResult","getViewFromFile","promise","LogHelper","getMimeTypeFromExtension","parseAndMatchRoute","parseCookie","JsonHelper","removeLastSlash","removeFirstSlash","reverseLoop","compareExpectedAndRemoveUnnecessary","getDataType","getClassName","removeMethodAndNullFromObject","getResultBasedOnMiMe","setResultMapper","MustacheViewEngine","MemorySessionProvider"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _interfaces__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));










/***/ }),

/***/ "./src/interfaces/controller.ts":
/*!**************************************!*\
  !*** ./src/interfaces/controller.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/interfaces/exception.ts":
/*!*************************************!*\
  !*** ./src/interfaces/exception.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/interfaces/http_cookie.ts":
/*!***************************************!*\
  !*** ./src/interfaces/http_cookie.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/interfaces/index.ts":
/*!*********************************!*\
  !*** ./src/interfaces/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_cookie */ "./src/interfaces/http_cookie.ts");
/* harmony import */ var _http_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_http_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_cookie__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_cookie__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exception */ "./src/interfaces/exception.ts");
/* harmony import */ var _exception__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_exception__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _exception__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _exception__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/interfaces/controller.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_controller__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _controller__WEBPACK_IMPORTED_MODULE_2__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _controller__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _route_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route_info */ "./src/interfaces/route_info.ts");
/* harmony import */ var _route_info__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_route_info__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _route_info__WEBPACK_IMPORTED_MODULE_3__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _route_info__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));






/***/ }),

/***/ "./src/interfaces/route_info.ts":
/*!**************************************!*\
  !*** ./src/interfaces/route_info.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/models/components.ts":
/*!**********************************!*\
  !*** ./src/models/components.ts ***!
  \**********************************/
/*! exports provided: Components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return Components; });
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../handlers */ "./src/handlers/index.ts");

class ControllerListRef {
    static getInstance(name, data) {
        const routeInfo = _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].getControllerFromName(name);
        if (routeInfo) {
            const controller = new routeInfo.controller(..._handlers__WEBPACK_IMPORTED_MODULE_0__["InjectorHandler"].getConstructorValues(name));
            controller.initialize(data);
            return controller;
        }
    }
    static getMethod(className, methodName) {
        const controller = ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName];
        }
    }
    static executeMethod(className, methodName) {
        const controller = ControllerListRef.getInstance(className);
        if (controller) {
            return controller[methodName](..._handlers__WEBPACK_IMPORTED_MODULE_0__["InjectorHandler"].getMethodValues(className, methodName));
        }
    }
}
class Components {
}
Components.controllers = ControllerListRef;


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
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");



class ErrorHandler {
    onServerError(ex) {
        let errMessage = `<h1>internal server error</h1>
            <h3>message : ${ex.message}</h3>`;
        if (ex.stack) {
            errMessage += `<p><b>stacktrace:</b> ${ex.stack}</p>`;
        }
        if (ex.type) {
            errMessage += `<p><b>type:</b> ${ex.type}</p>`;
        }
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["promiseResolve"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["htmlResult"])(errMessage, _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].InternalServerError));
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
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["promiseResolve"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["htmlResult"])(errMessage, _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].BadRequest));
    }
    onForbiddenRequest() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["promiseResolve"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["htmlResult"])(`<h1>Forbidden</h1>`, _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Forbidden));
    }
    onNotAcceptableRequest() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["promiseResolve"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["htmlResult"])(`<h1>Not Acceptable</h1>`, _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].NotAcceptable));
    }
    onMethodNotAllowed() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["promiseResolve"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["htmlResult"])(`<h1>Method Not allowed.</h1>`, _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].MethodNotAllowed));
    }
    onNotFound(url) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["promiseResolve"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["htmlResult"])(`<h1>The requested resource ${url} was not found.</h1>`, _enums__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].NotFound));
    }
}


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

class FileManager {
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
        return fs_extra__WEBPACK_IMPORTED_MODULE_0__["copy"](this.files_[fieldName].path, pathToSave);
    }
}


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
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums */ "./src/enums/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.ts");
/* harmony import */ var _generics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generics */ "./src/generics/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");







class Fort {
    // eslint-disable-next-line
    constructor() {
    }
    static set logger(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger = typeof value === 'function' ? new this.value() :
            value;
    }
    static get logger() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].logger;
    }
    static set walls(walls) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].walls = walls;
    }
    /**
     * port at which app will listen, default - 4000
     *
     * @static
     * @memberof Fort
     */
    static set port(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].port = value;
    }
    static get port() {
        return _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].port;
    }
    /**
     * typeof ErrorHandler
     *
     * @static
     * @memberof Fort
     */
    static set errorHandler(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].errorHandler = value;
    }
    static set routes(value) {
        if (value == null) {
            value = [];
        }
        let isDefaultRouteExist = false;
        // removing / from routes
        value.forEach(route => {
            // route.path = removeFirstSlash(route.path);
            route.path = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["removeLastSlash"])(route.path);
            _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addToRouterCollection(route);
            if (route.path === "/*") {
                _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].defaultRouteControllerName = route.controller.name;
                isDefaultRouteExist = true;
            }
        });
        if (isDefaultRouteExist === false) {
            _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].defaultRouteControllerName = _generics__WEBPACK_IMPORTED_MODULE_5__["GenericController"].name;
            _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addToRouterCollection({
                controller: _generics__WEBPACK_IMPORTED_MODULE_5__["GenericController"],
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
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].viewEngine = new value();
    }
    /**
     * sessionProvider class, default - MemorySessionProvider
     *
     * @static
     * @memberof Fort
     */
    static set sessionProvider(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionProvider = value;
    }
    static set resultMapper(value) {
        Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["setResultMapper"])(value);
    }
    /**
     * XmlParser class - used to parse the xml
     *
     * @static
     * @memberof Fort
     */
    static set xmlParser(xmlParser) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].xmlParser = xmlParser;
    }
    /**
     * Whether to parse cookie or not, default - true
     * If false, then session wont work.
     *
     * @static
     * @memberof Fort
     */
    static set shouldParseCookie(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].shouldParseCookie = value;
    }
    /**
     * Whether to parse the post data, default - true
     *
     * @static
     * @memberof Fort
     */
    static set shouldParsePost(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].shouldParsePost = value;
    }
    /**
     * session timeout in minute - default is 60 minute
     *
     * @static
     * @memberof Fort
     */
    static set sessionTimeOut(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionTimeOut = value;
    }
    /**
     * name of application - default is fort. Visible in header and cookie.
     * Change name if you dont want any one to know the framework name.
     *
     * @static
     * @memberof Fort
     */
    static set appName(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].appName = value;
    }
    /**
     * Views folder location. By default it is - views.
     *
     * @static
     * @memberof Fort
     */
    static set viewPath(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].viewPath = value;
    }
    static set componentOption(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].componentOption = new value();
    }
    static get httpServer() {
        return Fort.instance.httpServer;
    }
    static set httpServer(value) {
        Fort.instance.httpServer = value;
    }
    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @static
     * @memberof Fort
     */
    static set folders(value) {
        value = value || [];
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_6__["isArray"])(value) === false) {
            throw new Error(`folders should be an array`);
        }
        // remove / from files routes
        value.forEach(folder => {
            const length = folder.alias.length;
            if (length > 1) {
                folder.alias = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["removeFirstSlash"])(folder.alias);
                folder.alias = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["removeLastSlash"])(folder.alias);
            }
        });
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].folders = value;
    }
    /**
     * eTag Settings
     *
     * @static
     * @memberof Fort
     */
    static set eTag(value) {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].eTag = value;
    }
    static create() {
        _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].setDefault();
        if (this.instance.httpServer != null) {
            return;
        }
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["promise"])((res, rej) => {
            this.instance.httpServer = http__WEBPACK_IMPORTED_MODULE_2__["createServer"](Fort.onNewRequest).once("error", (err) => {
                if (err.code === 'EADDRINUSE') {
                    const error = new _helpers__WEBPACK_IMPORTED_MODULE_4__["LogHelper"](_enums__WEBPACK_IMPORTED_MODULE_3__["ERROR_TYPE"].PortInUse, _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].port).get();
                    rej(error);
                }
                else {
                    rej(err);
                }
            }).once('listening', () => {
                // set default route
                // RouteHandler.defaultRouteControllerName = RouteHandler.getDefaultRoute();
                res();
            }).listen(_fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].port);
        });
    }
    static onNewRequest(request, response) {
        new _handlers__WEBPACK_IMPORTED_MODULE_0__["RequestHandler"](request, response).handle();
    }
    static destroy() {
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["promise"])((res) => {
            this.instance.httpServer.close(res);
        });
    }
}
Fort.instance = new Fort();


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
class HttpCookie {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}


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
class HttpFile {
}


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! exports provided: ErrorHandler, HttpCookie, Fort, Router, CookieManager, FileManager, HttpFile, Logger, RouteInfo, Components */
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

/* harmony import */ var _route_info__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route_info */ "./src/models/route_info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteInfo", function() { return _route_info__WEBPACK_IMPORTED_MODULE_8__["RouteInfo"]; });

/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/models/components.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Components", function() { return _components__WEBPACK_IMPORTED_MODULE_9__["Components"]; });













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


/***/ }),

/***/ "./src/models/route_info.ts":
/*!**********************************!*\
  !*** ./src/models/route_info.ts ***!
  \**********************************/
/*! exports provided: RouteInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteInfo", function() { return RouteInfo; });
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

class Router {
    get routes() {
        return _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].routerCollection;
    }
    get routesAsArray() {
        return _handlers__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].routesAsArray;
    }
}


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
class HttpRequestStub {
    constructor(headers) {
        this.headers = headers;
    }
}


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




const initController = (controllerInstance, data) => {
    data = data || {};
    const parsedCookies = data.cookieValue || {};
    const headers = (data.request && data.request.headers) || {};
    controllerInstance.request = new _http_request_stub__WEBPACK_IMPORTED_MODULE_3__["HttpRequestStub"](headers);
    controllerInstance.response = new _http_response_stub__WEBPACK_IMPORTED_MODULE_2__["HttpResponseStub"](headers);
    controllerInstance.query = data.query || {};
    controllerInstance.body = data.body || {};
    controllerInstance.cookie = new _models__WEBPACK_IMPORTED_MODULE_0__["CookieManager"](parsedCookies);
    const session = new _fort_global__WEBPACK_IMPORTED_MODULE_1__["FortGlobal"].sessionProvider();
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

const initGuard = (guardInstance, data) => {
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

const initShield = (shieldInstance, data) => {
    const value = Object(_init_controller__WEBPACK_IMPORTED_MODULE_0__["initController"])(shieldInstance, data);
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

const initWall = (wallInstance, data) => {
    return Object(_init_controller__WEBPACK_IMPORTED_MODULE_0__["initController"])(wallInstance, data);
};


/***/ }),

/***/ "./src/types/controller_test_data.ts":
/*!*******************************************!*\
  !*** ./src/types/controller_test_data.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/etag_option.ts":
/*!**********************************!*\
  !*** ./src/types/etag_option.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/file_result_info.ts":
/*!***************************************!*\
  !*** ./src/types/file_result_info.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/folder_map.ts":
/*!*********************************!*\
  !*** ./src/types/folder_map.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/http_format_result.ts":
/*!*****************************************!*\
  !*** ./src/types/http_format_result.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/http_request.ts":
/*!***********************************!*\
  !*** ./src/types/http_request.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/http_response.ts":
/*!************************************!*\
  !*** ./src/types/http_response.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/http_result.ts":
/*!**********************************!*\
  !*** ./src/types/http_result.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_result */ "./src/types/http_result.ts");
/* harmony import */ var _http_result__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_http_result__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_result__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_result__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _http_format_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_format_result */ "./src/types/http_format_result.ts");
/* harmony import */ var _http_format_result__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_http_format_result__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_format_result__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_format_result__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _view_engine_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view_engine_data */ "./src/types/view_engine_data.ts");
/* harmony import */ var _view_engine_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_view_engine_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _view_engine_data__WEBPACK_IMPORTED_MODULE_2__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _view_engine_data__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _http_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http_request */ "./src/types/http_request.ts");
/* harmony import */ var _http_request__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_http_request__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_request__WEBPACK_IMPORTED_MODULE_3__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_request__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _http_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http_response */ "./src/types/http_response.ts");
/* harmony import */ var _http_response__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_http_response__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _http_response__WEBPACK_IMPORTED_MODULE_4__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _http_response__WEBPACK_IMPORTED_MODULE_4__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _parent_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parent_route */ "./src/types/parent_route.ts");
/* harmony import */ var _parent_route__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_parent_route__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _parent_route__WEBPACK_IMPORTED_MODULE_5__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _parent_route__WEBPACK_IMPORTED_MODULE_5__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _session_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session_value */ "./src/types/session_value.ts");
/* harmony import */ var _session_value__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_session_value__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _session_value__WEBPACK_IMPORTED_MODULE_6__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _session_value__WEBPACK_IMPORTED_MODULE_6__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _worker_info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./worker_info */ "./src/types/worker_info.ts");
/* harmony import */ var _worker_info__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_worker_info__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _worker_info__WEBPACK_IMPORTED_MODULE_7__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _worker_info__WEBPACK_IMPORTED_MODULE_7__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _etag_option__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./etag_option */ "./src/types/etag_option.ts");
/* harmony import */ var _etag_option__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_etag_option__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _etag_option__WEBPACK_IMPORTED_MODULE_8__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _etag_option__WEBPACK_IMPORTED_MODULE_8__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _folder_map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./folder_map */ "./src/types/folder_map.ts");
/* harmony import */ var _folder_map__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_folder_map__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _folder_map__WEBPACK_IMPORTED_MODULE_9__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _folder_map__WEBPACK_IMPORTED_MODULE_9__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./multi_part_parse_result */ "./src/types/multi_part_parse_result.ts");
/* harmony import */ var _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _multi_part_parse_result__WEBPACK_IMPORTED_MODULE_10__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _file_result_info__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./file_result_info */ "./src/types/file_result_info.ts");
/* harmony import */ var _file_result_info__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_file_result_info__WEBPACK_IMPORTED_MODULE_11__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_result_info__WEBPACK_IMPORTED_MODULE_11__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_result_info__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _route_match__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./route_match */ "./src/types/route_match.ts");
/* harmony import */ var _route_match__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_route_match__WEBPACK_IMPORTED_MODULE_12__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _route_match__WEBPACK_IMPORTED_MODULE_12__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _route_match__WEBPACK_IMPORTED_MODULE_12__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _controller_test_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controller_test_data */ "./src/types/controller_test_data.ts");
/* harmony import */ var _controller_test_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_controller_test_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _controller_test_data__WEBPACK_IMPORTED_MODULE_13__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _controller_test_data__WEBPACK_IMPORTED_MODULE_13__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _view_read_option__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view_read_option */ "./src/types/view_read_option.ts");
/* harmony import */ var _view_read_option__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_view_read_option__WEBPACK_IMPORTED_MODULE_14__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _view_read_option__WEBPACK_IMPORTED_MODULE_14__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _view_read_option__WEBPACK_IMPORTED_MODULE_14__[key]; }) }(__WEBPACK_IMPORT_KEY__));

















/***/ }),

/***/ "./src/types/multi_part_parse_result.ts":
/*!**********************************************!*\
  !*** ./src/types/multi_part_parse_result.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/parent_route.ts":
/*!***********************************!*\
  !*** ./src/types/parent_route.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/route_match.ts":
/*!**********************************!*\
  !*** ./src/types/route_match.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/session_value.ts":
/*!************************************!*\
  !*** ./src/types/session_value.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/view_engine_data.ts":
/*!***************************************!*\
  !*** ./src/types/view_engine_data.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/view_read_option.ts":
/*!***************************************!*\
  !*** ./src/types/view_read_option.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/types/worker_info.ts":
/*!**********************************!*\
  !*** ./src/types/worker_info.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: isNullOrEmpty, isNull, isArray, promiseResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _is_null_or_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is_null_or_empty */ "./src/utils/is_null_or_empty.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return _is_null_or_empty__WEBPACK_IMPORTED_MODULE_0__["isNullOrEmpty"]; });

/* harmony import */ var _is_null__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is_null */ "./src/utils/is_null.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _is_null__WEBPACK_IMPORTED_MODULE_1__["isNull"]; });

/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is_array */ "./src/utils/is_array.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _is_array__WEBPACK_IMPORTED_MODULE_2__["isArray"]; });

/* harmony import */ var _promise_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./promise_resolve */ "./src/utils/promise_resolve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "promiseResolve", function() { return _promise_resolve__WEBPACK_IMPORTED_MODULE_3__["promiseResolve"]; });







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
const isArray = (value) => {
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
const isNull = (value) => {
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
const isNullOrEmpty = (value) => {
    return value == null || value.length === 0;
};


/***/ }),

/***/ "./src/utils/promise_resolve.ts":
/*!**************************************!*\
  !*** ./src/utils/promise_resolve.ts ***!
  \**************************************/
/*! exports provided: promiseResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promiseResolve", function() { return promiseResolve; });
const promiseResolve = (value) => {
    return Promise.resolve(value);
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