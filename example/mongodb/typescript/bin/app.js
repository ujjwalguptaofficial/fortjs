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
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./routes.ts");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
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



var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super.call(this) || this;
        _this.routes = _routes__WEBPACK_IMPORTED_MODULE_1__["routes"];
        _this.viewEngine = fortjs__WEBPACK_IMPORTED_MODULE_0__["MustacheViewEngine"];
        return _this;
    }
    App.prototype.initDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mongoose__WEBPACK_IMPORTED_MODULE_2__["connect"]("mongodb://127.0.0.1:27017/mydb", { useNewUrlParser: true })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return App;
}(fortjs__WEBPACK_IMPORTED_MODULE_0__["Fort"]));



/***/ }),

/***/ "./controllers/default_controller.ts":
/*!*******************************************!*\
  !*** ./controllers/default_controller.ts ***!
  \*******************************************/
/*! exports provided: DefaultController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultController", function() { return DefaultController; });
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_0__);
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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

var DefaultController = /** @class */ (function (_super) {
    __extends(DefaultController, _super);
    function DefaultController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultController.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var model, result, ex_1, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        model = {
                            title: 'FortJs'
                        };
                        return [4 /*yield*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["viewResult"])('default/index.html', model)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 2:
                        ex_1 = _a.sent();
                        console.log(ex_1);
                        return [4 /*yield*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["textResult"])("Our server is busy right now. Please try later.")];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["DefaultWorker"])()
    ], DefaultController.prototype, "index", null);
    return DefaultController;
}(fortjs__WEBPACK_IMPORTED_MODULE_0__["Controller"]));



/***/ }),

/***/ "./controllers/user_controller.ts":
/*!****************************************!*\
  !*** ./controllers/user_controller.ts ***!
  \****************************************/
/*! exports provided: UserController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserController", function() { return UserController; });
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user_service */ "./services/user_service.ts");
/* harmony import */ var _guards_user_validation_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/user_validation_guard */ "./guards/user_validation_guard.ts");
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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



var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserController.prototype.getUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var service, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        service = new _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]();
                        _a = fortjs__WEBPACK_IMPORTED_MODULE_0__["jsonResult"];
                        return [4 /*yield*/, service.getAllUsers()];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                }
            });
        });
    };
    UserController.prototype.addUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, service, newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.data.user;
                        service = new _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]();
                        return [4 /*yield*/, service.addUser(user)];
                    case 1:
                        newUser = _a.sent();
                        return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["jsonResult"])(newUser, fortjs__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].Created)];
                }
            });
        });
    };
    UserController.prototype.updateUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.data.user;
                        return [4 /*yield*/, new _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]().updateUser(user)];
                    case 1:
                        result = _a.sent();
                        if (result.n > 0) {
                            return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["textResult"])("user updated")];
                        }
                        else {
                            return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["textResult"])("user not updated")];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.getUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.param.id;
                        return [4 /*yield*/, new _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]().getUserById(userId)];
                    case 1:
                        user = _a.sent();
                        if (user == null) {
                            return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["textResult"])("invalid id")];
                        }
                        return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["jsonResult"])(user)];
                }
            });
        });
    };
    UserController.prototype.removeUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userId, service, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = this.param.id;
                        service = new _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]();
                        return [4 /*yield*/, service.removeUserById(userId)];
                    case 1:
                        user = _a.sent();
                        console.log(user);
                        if (user.n > 0) {
                            return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["textResult"])("user deleted")];
                        }
                        else {
                            return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["textResult"])("invalid user")];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["DefaultWorker"])()
    ], UserController.prototype, "getUsers", null);
    __decorate([
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Worker"])([fortjs__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Post]),
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Route"])("/"),
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Guards"])([_guards_user_validation_guard__WEBPACK_IMPORTED_MODULE_2__["UserValidationGuard"]])
    ], UserController.prototype, "addUser", null);
    __decorate([
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Worker"])([fortjs__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Put]),
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Guards"])([_guards_user_validation_guard__WEBPACK_IMPORTED_MODULE_2__["UserValidationGuard"]]),
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Route"])("/")
    ], UserController.prototype, "updateUser", null);
    __decorate([
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Worker"])([fortjs__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Get]),
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Route"])("/{id}")
    ], UserController.prototype, "getUser", null);
    __decorate([
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Worker"])([fortjs__WEBPACK_IMPORTED_MODULE_0__["HTTP_METHOD"].Delete]),
        Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["Route"])("/{id}")
    ], UserController.prototype, "removeUser", null);
    return UserController;
}(fortjs__WEBPACK_IMPORTED_MODULE_0__["Controller"]));



/***/ }),

/***/ "./db_schemas/user.ts":
/*!****************************!*\
  !*** ./db_schemas/user.ts ***!
  \****************************/
/*! exports provided: userSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSchema", function() { return userSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

var schemaObj = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    // id: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String },
    gender: { type: String },
});
// to replace _id with id
schemaObj.method('toClient', function () {
    var obj = this.toObject();
    //Rename fields
    obj.id = obj._id.toString();
    delete obj._id;
    return obj;
});
var userSchema = Object(mongoose__WEBPACK_IMPORTED_MODULE_0__["model"])('User', schemaObj);


/***/ }),

/***/ "./guards/user_validation_guard.ts":
/*!*****************************************!*\
  !*** ./guards/user_validation_guard.ts ***!
  \*****************************************/
/*! exports provided: UserValidationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserValidationGuard", function() { return UserValidationGuard; });
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fortjs */ "fortjs");
/* harmony import */ var fortjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fortjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./models/user.ts");
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



var UserValidationGuard = /** @class */ (function (_super) {
    __extends(UserValidationGuard, _super);
    function UserValidationGuard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserValidationGuard.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, errors, error, constraint, errMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](this.body);
                        return [4 /*yield*/, Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["validate"])('User', user)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length === 0) {
                            // pass this to method, so that they dont need to parse again
                            this.data.user = user;
                            return [2 /*return*/, null];
                        }
                        else {
                            error = errors[0];
                            constraint = Object.keys(error.constraints)[0];
                            errMessage = error.constraints[constraint];
                            return [2 /*return*/, Object(fortjs__WEBPACK_IMPORTED_MODULE_0__["textResult"])(errMessage, fortjs__WEBPACK_IMPORTED_MODULE_0__["HTTP_STATUS_CODE"].BadRequest)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return UserValidationGuard;
}(fortjs__WEBPACK_IMPORTED_MODULE_0__["Guard"]));



/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
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


var app = new _app__WEBPACK_IMPORTED_MODULE_0__["App"]();
app.create({
    folders: [{
            alias: "/",
            path: path__WEBPACK_IMPORTED_MODULE_1__["join"](__dirname, "../static")
        }]
}).then(function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Your fort is located at address - localhost:4000");
                // connect with mongodb 
                return [4 /*yield*/, app.initDatabase()];
            case 1:
                // connect with mongodb 
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }).catch(function (err) {
    console.error(err);
});


/***/ }),

/***/ "./models/user.ts":
/*!************************!*\
  !*** ./models/user.ts ***!
  \************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var User = /** @class */ (function () {
    function User(user) {
        this.id = user.id;
        this.name = user.name;
        this.gender = user.gender;
        this.address = user.address;
        this.emailId = user.emailId;
        this.password = user.password;
    }
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Length"])(5)
    ], User.prototype, "password", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Length"])(5)
    ], User.prototype, "name", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsIn"])(["male", "female"])
    ], User.prototype, "gender", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["Length"])(10, 100)
    ], User.prototype, "address", void 0);
    __decorate([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_0__["IsEmail"])()
    ], User.prototype, "emailId", void 0);
    return User;
}());



/***/ }),

/***/ "./routes.ts":
/*!*******************!*\
  !*** ./routes.ts ***!
  \*******************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _controllers_default_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/default_controller */ "./controllers/default_controller.ts");
/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/user_controller */ "./controllers/user_controller.ts");


var routes = [{
        path: "/*",
        controller: _controllers_default_controller__WEBPACK_IMPORTED_MODULE_0__["DefaultController"]
    }, {
        path: "/user",
        controller: _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__["UserController"]
    }];


/***/ }),

/***/ "./services/user_service.ts":
/*!**********************************!*\
  !*** ./services/user_service.ts ***!
  \**********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _db_schemas_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db_schemas/user */ "./db_schemas/user.ts");
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

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.addUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var userObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userObj = new _db_schemas_user__WEBPACK_IMPORTED_MODULE_0__["userSchema"](user);
                        return [4 /*yield*/, userObj.save()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.getUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _db_schemas_user__WEBPACK_IMPORTED_MODULE_0__["userSchema"].findById(id)];
                    case 1:
                        user = _a.sent();
                        if (user != null) {
                            return [2 /*return*/, user.toClient()];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    UserService.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _db_schemas_user__WEBPACK_IMPORTED_MODULE_0__["userSchema"].find()];
                    case 1:
                        users = _a.sent();
                        users = users.map(function (user) {
                            return user.toClient();
                        });
                        console.log('users', users);
                        return [2 /*return*/, users];
                }
            });
        });
    };
    UserService.prototype.removeUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _db_schemas_user__WEBPACK_IMPORTED_MODULE_0__["userSchema"].deleteOne({ _id: id })];
            });
        });
    };
    UserService.prototype.updateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _db_schemas_user__WEBPACK_IMPORTED_MODULE_0__["userSchema"].updateOne({ _id: user.id }, user)];
            });
        });
    };
    return UserService;
}());



/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ujjwal/projects/opensource/fortjs/example/mongodb/typescript/index.ts */"./index.ts");


/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "fortjs":
/*!*************************!*\
  !*** external "fortjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fortjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map