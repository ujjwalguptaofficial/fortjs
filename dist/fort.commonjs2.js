/*!
 * @license :fortjs - V0.1.0 - 13/11/2018
 * https://github.com/ujjwalguptaofficial/fort
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _abstracts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["Shield"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["Guard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return _abstracts_index__WEBPACK_IMPORTED_MODULE_0__["ViewEngine"]; });

/* harmony import */ var _decorators_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "declareController", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["declareController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "action", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["action"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["shields"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["guards"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "route", function() { return _decorators_index__WEBPACK_IMPORTED_MODULE_1__["route"]; });

/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _start__WEBPACK_IMPORTED_MODULE_2__["start"]; });

/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["MIME_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _enums__WEBPACK_IMPORTED_MODULE_3__["HTTP_METHOD"]; });

/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_4__["jsonResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_4__["textResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_4__["htmlResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return _helpers_index__WEBPACK_IMPORTED_MODULE_4__["viewResult"]; });








/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _controller__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony import */ var _shield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return _shield__WEBPACK_IMPORTED_MODULE_1__["Shield"]; });

/* harmony import */ var _session_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return _session_provider__WEBPACK_IMPORTED_MODULE_2__["SessionProvider"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Guard", function() { return _guard__WEBPACK_IMPORTED_MODULE_3__["Guard"]; });

/* harmony import */ var _view_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewEngine", function() { return _view_engine__WEBPACK_IMPORTED_MODULE_4__["ViewEngine"]; });








/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionProvider", function() { return SessionProvider; });
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);




var SessionProvider = /** @class */ (function () {
    function SessionProvider() {
    }
    SessionProvider.prototype.createSession = function () {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var now = new Date();
            _this.sessionId = uniqid__WEBPACK_IMPORTED_MODULE_2__();
            _this.cookies.addCookie({
                name: _constant__WEBPACK_IMPORTED_MODULE_1__["App__Session__Identifier"],
                value: _this.sessionId,
                httpOnly: true,
                path: "/",
                expires: new Date(now.setMinutes(now.getMinutes() + _global__WEBPACK_IMPORTED_MODULE_3__["Global"].sessionTimeOut))
            });
            resolve();
        });
    };
    return SessionProvider;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return promise; });
function promise(callBack) {
    return new Promise(callBack);
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content__Type", function() { return Content__Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App__Name", function() { return App__Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App__Session__Identifier", function() { return App__Session__Identifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cookie", function() { return Cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set__Cookie", function() { return Set__Cookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current__Directory", function() { return Current__Directory; });
var Content__Type = "content-type";
var App__Name = "infinity";
var App__Session__Identifier = "infinity_session_id";
var Cookie = "cookie";
var Set__Cookie = 'set-cookie';
var Current__Directory = process.cwd();


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("uniqid");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
    }
    return Global;
}());



/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _declare_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "declareController", function() { return _declare_controller__WEBPACK_IMPORTED_MODULE_0__["declareController"]; });

/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "action", function() { return _action__WEBPACK_IMPORTED_MODULE_1__["action"]; });

/* harmony import */ var _shields__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return _shields__WEBPACK_IMPORTED_MODULE_2__["shields"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return _guards__WEBPACK_IMPORTED_MODULE_3__["guards"]; });

/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "route", function() { return _route__WEBPACK_IMPORTED_MODULE_4__["route"]; });








/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declareController", function() { return declareController; });
/* harmony import */ var _helpers_log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _enums_error_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);



function declareController(path) {
    return function (target) {
        var className = target.name;
        var classNameLower = className.toLowerCase();
        if (path == null) {
            if (classNameLower.endsWith('controller') === true) {
                path = classNameLower.substr(0, classNameLower.length - 10);
            }
            else {
                new _helpers_log_helper__WEBPACK_IMPORTED_MODULE_0__["LogHelper"](_enums_error_type__WEBPACK_IMPORTED_MODULE_2__["ERROR_TYPE"].InvalidControllerName, className).throw();
            }
        }
        else {
            path = path.toLowerCase();
        }
        _route_handler__WEBPACK_IMPORTED_MODULE_1__["RouteHandler"].addToRouterCollection({
            controller: target,
            controllerName: className,
            alias: path,
            actions: [],
            shields: []
        });
    };
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogHelper", function() { return LogHelper; });
/* harmony import */ var _enums_error_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);

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
            default:
                errMsg = this.message;
                break;
        }
        return errMsg;
    };
    return LogHelper;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TYPE", function() { return ERROR_TYPE; });
var ERROR_TYPE;
(function (ERROR_TYPE) {
    ERROR_TYPE["InvalidControllerName"] = "invalid_controller_name";
    ERROR_TYPE["InvalidContentType"] = "invalid_content_type";
})(ERROR_TYPE || (ERROR_TYPE = {}));


/***/ }),
/* 15 */
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
        var route = routerCollection.find(function (x) { return x.controllerName === value.controllerName; });
        if (route == null) {
            routerCollection.push(value);
        }
        else {
            route.controller = value.controller;
            route.alias = value.alias;
            route.actions.forEach(function (actionInfo) {
                if (actionInfo.pattern.indexOf(value.alias) < 0) {
                    actionInfo.pattern = "/" + value.alias + "/" + actionInfo.pattern;
                }
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
                alias: null
            });
        }
        else {
            routerCollection[index].shields = shields;
        }
    };
    RouteHandler.addAction = function (newAction, className) {
        var router = routerCollection.find(function (x) { return x.controllerName === className; });
        if (router == null) {
            routerCollection.push({
                actions: [newAction],
                controller: null,
                controllerName: className,
                shields: [],
                alias: null
            });
        }
        else {
            var savedAction = router.actions.find(function (val) { return val.action === newAction.action; });
            if (savedAction == null) {
                newAction.pattern = router.alias == null ? newAction.pattern : "/" + router.alias + "/" + newAction.pattern;
                router.actions.push(newAction);
            }
            else {
                savedAction.methodsAllowed = newAction.methodsAllowed;
                savedAction.pattern = router.alias == null ? savedAction.pattern : "/" + router.alias + "/" + savedAction.pattern;
                ;
            }
        }
    };
    RouteHandler.addGuards = function (guards, className, actionName) {
        var index = routerCollection.findIndex(function (x) { return x.controllerName === className; });
        var pattern = actionName.toLowerCase();
        if (index < 0) {
            routerCollection.push({
                actions: [{
                        action: actionName,
                        guards: guards,
                        methodsAllowed: null,
                        pattern: pattern
                    }],
                controller: null,
                controllerName: className,
                shields: [],
                alias: null
            });
        }
        else {
            var savedAction = routerCollection[index].actions.find(function (val) { return val.action === actionName; });
            if (savedAction == null) {
                routerCollection[index].actions.push({
                    action: actionName,
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
                        action: actionName,
                        guards: [],
                        methodsAllowed: null,
                        pattern: pattern
                    }],
                controller: null,
                controllerName: className,
                shields: [],
                alias: null
            });
        }
        else {
            var savedAction = router.actions.find(function (val) { return val.action === actionName; });
            pattern = router.alias == null ? pattern : "/" + router.alias + "/" + pattern;
            if (savedAction == null) {
                router.actions.push({
                    action: actionName,
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

function action(allowedMethods) {
    return function (target, methodName, descriptor) {
        var className = target.constructor.name;
        var actionInfo = {
            action: methodName,
            methodsAllowed: allowedMethods,
            guards: [],
            pattern: methodName.toLowerCase()
        };
        _route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addAction(actionInfo, className);
    };
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shields", function() { return shields; });
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

function shields(shields) {
    return function (target) {
        var className = target.name;
        _route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addShields(shields, className);
    };
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

function guards(guards) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addGuards(guards, className, methodName);
    });
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);

function route(format) {
    return (function (target, methodName, descriptor) {
        var className = target.constructor.name;
        _route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].addPattern(format, className, methodName);
    });
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var _request_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _memory_session_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);





function start(option) {
    if (!_util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option)) {
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].port = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.port) ? 4000 : option.port;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].viewEngine = new option.viewEngine();
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].shouldParseCookie = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.shouldParseCookie) ? true : option.shouldParseCookie;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].shouldParsePost = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.shouldParsePost) ? true : option.shouldParsePost;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].sessionProvider = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.sessionProvider) ? _memory_session_provider__WEBPACK_IMPORTED_MODULE_4__["MemorySessionProvider"] : option.sessionProvider;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].sessionTimeOut = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.sessionTimeOut) ? 60 : option.sessionTimeOut;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].foldersAllowed = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.foldersAllowed) ? [] : option.foldersAllowed;
        _global__WEBPACK_IMPORTED_MODULE_1__["Global"].walls = _util__WEBPACK_IMPORTED_MODULE_2__["Util"].isNull(option.walls) ? [] : option.walls;
    }
    http__WEBPACK_IMPORTED_MODULE_0__["createServer"](function (req, res) {
        new _request_handler__WEBPACK_IMPORTED_MODULE_3__["RequestHandler"](req, res).handle();
    }).listen(_global__WEBPACK_IMPORTED_MODULE_1__["Global"].port);
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 22 */
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
    return Util;
}());



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHandler", function() { return RequestHandler; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _helpers_parse_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26);
/* harmony import */ var _model_cookie_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27);
/* harmony import */ var _helpers_parse_match_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22);
/* harmony import */ var _file_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31);
/* harmony import */ var _enums_mime_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var _enums_http_method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36);
/* harmony import */ var _request_handler_helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
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













var RequestHandler = /** @class */ (function (_super) {
    __extends(RequestHandler, _super);
    function RequestHandler(request, response) {
        var _this = _super.call(this) || this;
        _this.request = request;
        _this.response = response;
        _this.registerEvents();
        return _this;
    }
    RequestHandler.prototype.registerEvents = function () {
        var _this = this;
        this.request.on('error', this.onBadRequest);
        this.response.on('error', function (err) {
            _this.onErrorOccured(err);
        });
    };
    RequestHandler.prototype.handlePostData_ = function () {
        var _this = this;
        var body = [];
        var postData;
        return new Promise(function (resolve, reject) {
            _this.request.on('data', function (chunk) {
                body.push(chunk);
            }).on('end', function () {
                var bodyBuffer = Buffer.concat(body);
                try {
                    var contentType = _this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]];
                    switch (contentType) {
                        case _enums_mime_type__WEBPACK_IMPORTED_MODULE_10__["MIME_TYPE"].Json:
                            postData = JSON.parse(bodyBuffer.toString());
                            break;
                        case _enums_mime_type__WEBPACK_IMPORTED_MODULE_10__["MIME_TYPE"].Text:
                        case _enums_mime_type__WEBPACK_IMPORTED_MODULE_10__["MIME_TYPE"].Html:
                            postData = bodyBuffer.toString();
                            break;
                        case _enums_mime_type__WEBPACK_IMPORTED_MODULE_10__["MIME_TYPE"].Form_Url_Encoded:
                            postData = querystring__WEBPACK_IMPORTED_MODULE_2__["parse"](bodyBuffer.toString());
                            break;
                    }
                    resolve(postData);
                }
                catch (ex) {
                    reject(ex);
                }
            });
        });
    };
    RequestHandler.prototype.executeWallBlock_ = function () {
        var _this = this;
        var wallsPromise = [];
        _global__WEBPACK_IMPORTED_MODULE_3__["Global"].walls.forEach(function (wall) {
            var wallObj = new wall();
            wallObj.body = _this.body_;
            wallObj.cookies = _this.cookieManager_;
            wallObj.query = _this.query_;
            wallObj.session = _this.session_;
            wallObj.request = _this.request;
            wallObj.response = _this.response;
            wallsPromise.push(wallObj.block());
        });
        return Promise.all(wallsPromise);
    };
    RequestHandler.prototype.runController_ = function () {
        var _this = this;
        var controllerObj = new this.routeMatchInfo_.controller();
        controllerObj.request = this.request;
        controllerObj.response = this.response;
        controllerObj.query = this.query_;
        controllerObj.body = this.body_;
        controllerObj.session = this.session_;
        controllerObj.cookies = this.cookieManager_;
        controllerObj.params = this.routeMatchInfo_.params;
        controllerObj[this.routeMatchInfo_.actionInfo.action]().then(function (result) {
            var _a;
            if (_this.cookieManager_ != null) {
                _this.cookieManager_.responseCookie_.forEach(function (value) {
                    _this.response.setHeader(_constant__WEBPACK_IMPORTED_MODULE_1__["Set__Cookie"], value);
                });
            }
            _this.response.writeHead(result.statusCode, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]] = result.contentType, _a));
            _this.response.end(result.responseData);
        }).catch(this.onErrorOccured.bind(this));
    };
    RequestHandler.prototype.executeShieldsProtection_ = function () {
        var _this = this;
        var shieldsPromise = [];
        this.routeMatchInfo_.shields.forEach(function (shield) {
            var shieldObj = new shield();
            shieldObj.body = _this.body_;
            shieldObj.cookies = _this.cookieManager_;
            shieldObj.query = _this.query_;
            shieldObj.session = _this.session_;
            shieldObj.request = _this.request;
            shieldObj.response = _this.response;
            shieldsPromise.push(shieldObj.protect());
        });
        return Promise.all(shieldsPromise);
    };
    RequestHandler.prototype.executeGuardsCheck_ = function (guards) {
        var _this = this;
        var guardPromise = [];
        guards.forEach(function (guard) {
            var guardObj = new guard();
            guardObj.body = _this.body_;
            guardObj.cookies = _this.cookieManager_;
            guardObj.query = _this.query_;
            guardObj.session = _this.session_;
            guardObj.request = _this.request;
            guardObj.response = _this.response;
            guardPromise.push(guardObj.check());
        });
        return Promise.all(guardPromise);
    };
    RequestHandler.prototype.execute_ = function () {
        var _this = this;
        try {
            this.response.setHeader('X-Powered-By', _constant__WEBPACK_IMPORTED_MODULE_1__["App__Name"]);
            this.executeWallBlock_().then(function (wallProtectionResult) {
                var isRejectedByWall = wallProtectionResult.indexOf(false) >= 0;
                if (isRejectedByWall === false) {
                    var urlDetail = url__WEBPACK_IMPORTED_MODULE_0__["parse"](_this.request.url, true);
                    var pathUrl = urlDetail.pathname.toLowerCase();
                    var extension = path__WEBPACK_IMPORTED_MODULE_7__["parse"](pathUrl).ext;
                    if (!_util__WEBPACK_IMPORTED_MODULE_8__["Util"].isNullOrEmpty(extension)) {
                        var fileHandlerObj = new _file_handler__WEBPACK_IMPORTED_MODULE_9__["FileHandler"](pathUrl, extension);
                        fileHandlerObj.execute().then(function (result) {
                            var _a;
                            _this.response.writeHead(result.statusCode, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]] = result.contentType, _a));
                            _this.response.end(result.responseData);
                        }).catch(_this.onErrorOccured.bind(_this));
                    }
                    else {
                        _this.routeMatchInfo_ = Object(_helpers_parse_match_route__WEBPACK_IMPORTED_MODULE_6__["parseAndMatchRoute"])(pathUrl);
                        if (_this.routeMatchInfo_ == null) {
                            _this.onNotFound();
                        }
                        else {
                            var requestType = _this.request.method;
                            var actionInfo_1 = _this.routeMatchInfo_.actionInfo;
                            if (actionInfo_1.methodsAllowed != null && actionInfo_1.methodsAllowed.indexOf(requestType) < 0) {
                                _this.onMethodNotAllowed(actionInfo_1.methodsAllowed);
                            }
                            else {
                                _this.query_ = urlDetail.query;
                                if (_global__WEBPACK_IMPORTED_MODULE_3__["Global"].shouldParseCookie === true) {
                                    var rawCookie = _this.request.headers[_constant__WEBPACK_IMPORTED_MODULE_1__["Cookie"]];
                                    var parsedCookies = Object(_helpers_parse_cookie__WEBPACK_IMPORTED_MODULE_4__["parseCookie"])(rawCookie);
                                    _this.session_ = new _global__WEBPACK_IMPORTED_MODULE_3__["Global"].sessionProvider();
                                    _this.cookieManager_ = new _model_cookie_manager__WEBPACK_IMPORTED_MODULE_5__["CookieManager"](parsedCookies);
                                    _this.session_.sessionId = parsedCookies[_constant__WEBPACK_IMPORTED_MODULE_1__["App__Session__Identifier"]];
                                    _this.session_.cookies = _this.cookieManager_;
                                }
                                _this.executeShieldsProtection_().then(function (shieldProtectionResult) {
                                    var isRejectedByShield = shieldProtectionResult.indexOf(false) >= 0;
                                    if (isRejectedByShield === false) {
                                        _this.executeGuardsCheck_(actionInfo_1.guards).then(function (guardsCheckResult) {
                                            var isRejectedByGuard = guardsCheckResult.indexOf(false) >= 0;
                                            if (isRejectedByGuard === false) {
                                                _this.runController_();
                                            }
                                            else {
                                                _this.onForbiddenRequest();
                                            }
                                        }).catch(_this.onErrorOccured.bind(_this));
                                    }
                                    else {
                                        _this.onForbiddenRequest();
                                    }
                                }).catch(_this.onErrorOccured.bind(_this));
                            }
                        }
                    }
                }
                else {
                    _this.onForbiddenRequest();
                }
            }).catch(this.onErrorOccured.bind(this));
        }
        catch (ex) {
            this.onErrorOccured(ex);
        }
    };
    RequestHandler.prototype.handle = function () {
        var _this = this;
        if (this.request.method === _enums_http_method__WEBPACK_IMPORTED_MODULE_11__["HTTP_METHOD"].Get) {
            this.execute_();
        }
        else if (_global__WEBPACK_IMPORTED_MODULE_3__["Global"].shouldParsePost === true) {
            this.handlePostData_().then(function (body) {
                _this.body_ = body;
                _this.execute_();
            }).catch(function (err) {
                _this.onBadRequest(err);
            });
        }
    };
    return RequestHandler;
}(_request_handler_helper__WEBPACK_IMPORTED_MODULE_12__["RequestHandlerHelper"]));



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCookie", function() { return parseCookie; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);

function parseCookie(cookie) {
    var value = {};
    if (!_util__WEBPACK_IMPORTED_MODULE_0__["Util"].isNullOrEmpty(cookie)) {
        cookie.split(';').forEach(function (val) {
            var parts = val.split('=');
            value[parts.shift().trim()] = decodeURI(parts.join('='));
        });
    }
    return value;
}


/***/ }),
/* 27 */
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
        var now = new Date();
        this.responseCookie_.push(this.getCookieStringFromCookie_({
            name: name,
            value: null,
            expires: new Date(now.setMinutes(now.getMinutes() - 100))
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAndMatchRoute", function() { return parseAndMatchRoute; });
/* harmony import */ var _route_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _enums_file_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);


function isRequestFileType(urlParts) {
    var splitByDotValues = urlParts[urlParts.length - 1].split(".");
    var fileExtension = splitByDotValues[splitByDotValues.length - 1];
    return _enums_file_extension__WEBPACK_IMPORTED_MODULE_1__["File_Extension"][fileExtension] == null ? false : true;
}
function parseAndMatchRoute(url) {
    var isMatched = false;
    var urlLength = url.length;
    if (url[urlLength - 1] === "/") {
        url = url.substr(0, urlLength - 1);
    }
    var urlParts = url.split("/");
    var routeMatch = {
        isRequestTypeFile: isRequestFileType(urlParts)
    };
    if (routeMatch.isRequestTypeFile === true) {
        return routeMatch;
    }
    else {
        var firstPart_1 = urlParts[1];
        _route_handler__WEBPACK_IMPORTED_MODULE_0__["RouteHandler"].routerCollection.every(function (route) {
            if (route.alias === firstPart_1) {
                var urlPartLength_1 = urlParts.length;
                isMatched = true;
                routeMatch.controller = route.controller;
                route.actions.every(function (routeActionInfo) {
                    var patternSplit = routeActionInfo.pattern.split("/");
                    if (urlPartLength_1 === patternSplit.length) {
                        isMatched = true;
                        var params_1 = {};
                        urlParts.every(function (urlPart, i) {
                            var regMatch = patternSplit[i].match(/{(.*)}/);
                            if (regMatch != null) {
                                params_1[regMatch[1]] = urlPart;
                            }
                            else if (urlPart !== patternSplit[i]) {
                                isMatched = false;
                                return false;
                            }
                            return true;
                        });
                        if (isMatched === true) {
                            routeMatch.actionInfo = routeActionInfo;
                            routeMatch.params = params_1;
                            routeMatch.shields = route.shields;
                            return false;
                        }
                    }
                    else {
                        isMatched = false;
                    }
                    return true;
                });
                return false;
            }
            return true;
        });
        return isMatched ? routeMatch : null;
    }
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File_Extension", function() { return File_Extension; });
var File_Extension;
(function (File_Extension) {
    File_Extension["Ico"] = ".ico";
    File_Extension["Html"] = ".html";
    File_Extension["Js"] = ".js";
    File_Extension["Json"] = ".json";
    File_Extension["Css"] = ".css";
    File_Extension["Png"] = ".png";
    File_Extension["Jpg"] = ".jpg";
    File_Extension["Wav"] = ".wav";
    File_Extension["Mp3"] = ".mp3";
    File_Extension["Svg"] = ".svg";
    File_Extension["Pdf"] = ".pdf";
    File_Extension["Doc"] = ".doc";
    File_Extension["Eot"] = ".eot";
    File_Extension["Ttf"] = ".ttf";
})(File_Extension || (File_Extension = {}));


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHandler", function() { return FileHandler; });
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _helpers_file_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _enums_mime_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(35);







var FileHandler = /** @class */ (function () {
    function FileHandler(filePath, extension) {
        // extract URL path
        // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
        // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
        // by limiting the path to current directory only
        // console.log("dirname", __dirname);
        //console.log("filePath", filePath);
        this.relativeFilePath = filePath;
        // this.folderRequired = this.getRequiredFolder_(filePath);
        // this.path = path.join(Current__Directory, filePath);
        //.normalize(path).replace(/^(\.\.[\/\\])+/, '');
        this.extension = extension.substr(1);
    }
    FileHandler.prototype.getRequiredFolder_ = function (path) {
        var splittedValue = path.split("/");
        if (splittedValue.length > 2) {
            return splittedValue[1];
        }
        return "/";
    };
    FileHandler.prototype.execute = function () {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_0__["promise"])(function (resolve, reject) {
            var folderRequired = _this.getRequiredFolder_(_this.relativeFilePath);
            if (_global__WEBPACK_IMPORTED_MODULE_3__["Global"].foldersAllowed.findIndex(function (qry) { return qry === folderRequired; }) >= 0) {
                var absolutePath_1 = path__WEBPACK_IMPORTED_MODULE_4__["join"](_constant__WEBPACK_IMPORTED_MODULE_5__["Current__Directory"], _this.relativeFilePath);
                _helpers_file_helper__WEBPACK_IMPORTED_MODULE_1__["FileHelper"].isPathExist(absolutePath_1).then(function (isExist) {
                    if (isExist === true) {
                        _helpers_file_helper__WEBPACK_IMPORTED_MODULE_1__["FileHelper"].isDirectory(absolutePath_1).then(function (isDirectory) {
                            if (isDirectory === true) {
                                absolutePath_1 += '/index.html';
                            }
                            _helpers_file_helper__WEBPACK_IMPORTED_MODULE_1__["FileHelper"].readFile(absolutePath_1).then(function (data) {
                                resolve({
                                    statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_2__["HTTP_STATUS_CODE"].Ok,
                                    contentType: _enums_mime_type__WEBPACK_IMPORTED_MODULE_6__["MIME_TYPE"][_this.extension] || _enums_mime_type__WEBPACK_IMPORTED_MODULE_6__["MIME_TYPE"].Text,
                                    responseData: data
                                });
                            }).catch(reject);
                        }).catch(reject);
                    }
                    else {
                        resolve({
                            statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_2__["HTTP_STATUS_CODE"].Not_Found,
                            contentType: _enums_mime_type__WEBPACK_IMPORTED_MODULE_6__["MIME_TYPE"].Text,
                            responseData: "File " + _this.relativeFilePath + " not found"
                        });
                    }
                }).catch(reject);
            }
            else {
                resolve({
                    statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_2__["HTTP_STATUS_CODE"].Not_Found,
                    contentType: _enums_mime_type__WEBPACK_IMPORTED_MODULE_6__["MIME_TYPE"].Text,
                    responseData: "File " + _this.relativeFilePath + " not found"
                });
            }
        });
    };
    return FileHandler;
}());



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHelper", function() { return FileHelper; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


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
    return FileHelper;
}());



/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_STATUS_CODE", function() { return HTTP_STATUS_CODE; });
var HTTP_STATUS_CODE;
(function (HTTP_STATUS_CODE) {
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Not_Found"] = 404] = "Not_Found";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Ok"] = 200] = "Ok";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Internal_Server_Error"] = 500] = "Internal_Server_Error";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Bad_Request"] = 400] = "Bad_Request";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HTTP_STATUS_CODE[HTTP_STATUS_CODE["Forbidden"] = 403] = "Forbidden";
})(HTTP_STATUS_CODE || (HTTP_STATUS_CODE = {}));


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return MIME_TYPE; });
var MIME_TYPE;
(function (MIME_TYPE) {
    MIME_TYPE["Text"] = "text/plain";
    MIME_TYPE["Json"] = "application/json";
    MIME_TYPE["Html"] = "text/html";
    MIME_TYPE["Form_Url_Encoded"] = "application/x-www-form-urlencoded";
})(MIME_TYPE || (MIME_TYPE = {}));


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return HTTP_METHOD; });
var HTTP_METHOD;
(function (HTTP_METHOD) {
    HTTP_METHOD["Get"] = "GET";
    HTTP_METHOD["POST"] = "POST";
    HTTP_METHOD["PUT"] = "PUT";
    HTTP_METHOD["PATCH"] = "PATCH";
})(HTTP_METHOD || (HTTP_METHOD = {}));


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestHandlerHelper", function() { return RequestHandlerHelper; });
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);



var RequestHandlerHelper = /** @class */ (function () {
    function RequestHandlerHelper() {
    }
    RequestHandlerHelper.prototype.onBadRequest = function (error) {
        var _a;
        if (this.response.headersSent === false) {
            this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Bad_Request, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
            var errMessage = "<h1>Bad Request</h1>\n        <h3>message : " + error.message + "</h3>";
            if (error.stack) {
                errMessage += "<p><b>stacktrace:</b> " + error.stack + "</p>";
            }
            else if (error.type) {
                errMessage += "<p><b>type:</b> " + error.type + "</p>";
            }
            this.response.end(errMessage);
        }
    };
    RequestHandlerHelper.prototype.onForbiddenRequest = function () {
        var _a;
        if (this.response.headersSent === false) {
            this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Forbidden, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
            var errMessage = "<h1>Forbidden</h1>";
            this.response.end(errMessage);
        }
    };
    RequestHandlerHelper.prototype.onNotFound = function () {
        var _a;
        if (this.response.headersSent === false) {
            this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Not_Found, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Text, _a));
            this.response.end("The requested resource " + this.request.url + " was not found.");
        }
    };
    RequestHandlerHelper.prototype.onMethodNotAllowed = function (allowedMethods) {
        var _a;
        if (this.response.headersSent === false) {
            this.response.setHeader("Allow", allowedMethods.join(","));
            this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].MethodNotAllowed, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Text, _a));
            this.response.end("Not allowed.");
        }
    };
    RequestHandlerHelper.prototype.onErrorOccured = function (error) {
        var _a;
        if (this.response.headersSent === false) {
            this.response.writeHead(_enums_http_status_code__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Internal_Server_Error, (_a = {}, _a[_constant__WEBPACK_IMPORTED_MODULE_1__["Content__Type"]] = _enums_mime_type__WEBPACK_IMPORTED_MODULE_2__["MIME_TYPE"].Html, _a));
            var errMessage = "<h1>internal server error</h1>\n            <h3>message : " + error.message + "</h3>";
            if (error.stack) {
                errMessage += "<p><b>stacktrace:</b> " + error.stack + "</p>";
            }
            else if (error.type) {
                errMessage += "<p><b>type:</b> " + error.type + "</p>";
            }
            this.response.end(errMessage);
        }
        else {
            console.error(error);
        }
    };
    return RequestHandlerHelper;
}());



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorySessionProvider", function() { return MemorySessionProvider; });
/* harmony import */ var _abstracts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
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


var sessionValues = [];
var MemorySessionProvider = /** @class */ (function (_super) {
    __extends(MemorySessionProvider, _super);
    function MemorySessionProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MemorySessionProvider.prototype.get = function (key) {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            var savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
            if (savedValue == null) {
                resolve(false);
            }
            else {
                var value = savedValue.datas.find(function (qry) { return qry.key === key; });
                resolve(value);
            }
        });
    };
    MemorySessionProvider.prototype.isExist = function (key) {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            var savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
            if (savedValue == null) {
                resolve(false);
            }
            else {
                var index = savedValue.datas.findIndex(function (qry) { return qry.key === key; });
                resolve(index >= 0);
            }
        });
    };
    MemorySessionProvider.prototype.getAll = function () {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            var savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
            resolve(savedValue == null ? [] : savedValue.datas);
        });
    };
    MemorySessionProvider.prototype.set = function (key, val) {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            var savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
            if (savedValue == null) {
                _this.createSession().then(function () {
                    sessionValues.push({
                        identifier: _this.sessionId,
                        datas: [{
                                key: key,
                                value: val
                            }]
                    });
                });
            }
            else {
                savedValue.datas.push({
                    key: key,
                    value: val
                });
            }
            // this.createSession().then(sessionId => {
            //     if (sessionId == null) { // session already created
            //         const index = sessionValues.findIndex(q => q.identifier === this.sessionId);
            //         if (index >= 0) {
            //             const savedValue = sessionValues[index];
            //             savedValue.datas.push({
            //                 key: key,
            //                 value: val
            //             })
            //         }
            //         resolve(null);
            //     }
            //     else { // session created
            //         this.sessionId = sessionId;
            //         sessionValues.push({
            //             identifier: this.sessionId,
            //             datas: [{
            //                 key: key,
            //                 value: val
            //             }]
            //         })
            //     }
            // });
        });
    };
    MemorySessionProvider.prototype.setMany = function (values) {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            var promises = [];
            values.forEach(function (value) {
                promises.push(_this.set(value.key, value.value));
            });
            Promise.all(promises).then(function (results) {
                resolve();
            }).catch(reject);
        });
    };
    MemorySessionProvider.prototype.remove = function (key) {
        var _this = this;
        return Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_1__["promise"])(function (resolve, reject) {
            var savedValue = sessionValues.find(function (q) { return q.identifier === _this.sessionId; });
            if (savedValue != null) {
                var index = savedValue.datas.findIndex(function (q) { return q.key === key; });
                savedValue.datas.splice(index, 1);
            }
            resolve(null);
        });
    };
    return MemorySessionProvider;
}(_abstracts__WEBPACK_IMPORTED_MODULE_0__["SessionProvider"]));



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mime_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIME_TYPE", function() { return _mime_type__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"]; });

/* harmony import */ var _http_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_METHOD", function() { return _http_method__WEBPACK_IMPORTED_MODULE_1__["HTTP_METHOD"]; });





/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _json_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return _json_result__WEBPACK_IMPORTED_MODULE_0__["jsonResult"]; });

/* harmony import */ var _text_result__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return _text_result__WEBPACK_IMPORTED_MODULE_1__["textResult"]; });

/* harmony import */ var _html_result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return _html_result__WEBPACK_IMPORTED_MODULE_2__["htmlResult"]; });

/* harmony import */ var _view_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return _view_result__WEBPACK_IMPORTED_MODULE_3__["viewResult"]; });







/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonResult", function() { return jsonResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);


function jsonResult(value) {
    return {
        contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Json,
        responseData: JSON.stringify(value),
        statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
    };
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textResult", function() { return textResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);


function textResult(text) {
    return {
        contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Text,
        responseData: text,
        statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
    };
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlResult", function() { return htmlResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);


function htmlResult(html) {
    return {
        contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html,
        responseData: html,
        statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
    };
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewResult", function() { return viewResult; });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);




function viewResult(vieWname, model) {
    return Object(_promise__WEBPACK_IMPORTED_MODULE_3__["promise"])(function (resolve, reject) {
        _global__WEBPACK_IMPORTED_MODULE_2__["Global"].viewEngine.render({
            view: vieWname,
            model: model
        }).then(function (result) {
            resolve({
                contentType: _enums__WEBPACK_IMPORTED_MODULE_0__["MIME_TYPE"].Html,
                responseData: result,
                statusCode: _enums_http_status_code__WEBPACK_IMPORTED_MODULE_1__["HTTP_STATUS_CODE"].Ok
            });
        }).catch(reject);
    });
}


/***/ })
/******/ ]);
//# sourceMappingURL=fort.commonjs2.js.map