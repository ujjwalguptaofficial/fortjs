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

/***/ "./src/controller/default_controller.ts":
/*!**********************************************!*\
  !*** ./src/controller/default_controller.ts ***!
  \**********************************************/
/*! exports provided: DefaultController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultController", function() { return DefaultController; });
/* harmony import */ var server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server */ "server");
/* harmony import */ var server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(server__WEBPACK_IMPORTED_MODULE_0__);
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DefaultController = /** @class */ (function (_super) {
    __extends(DefaultController, _super);
    function DefaultController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultController.prototype.default = function () {
        this.response.end("hey there, you got me");
    };
    DefaultController.prototype.text = function () {
        return new server__WEBPACK_IMPORTED_MODULE_0__["TextResult"]("Hey this is text mate");
    };
    DefaultController.prototype.json = function () {
        return new server__WEBPACK_IMPORTED_MODULE_0__["JsonResult"]({ key: 'ass', value: 'ass' });
    };
    DefaultController.prototype.html = function () {
        return new server__WEBPACK_IMPORTED_MODULE_0__["HtmlResult"]('<h1>Hey i am html</h1>');
    };
    DefaultController = __decorate([
        Object(server__WEBPACK_IMPORTED_MODULE_0__["declareController"])()
    ], DefaultController);
    return DefaultController;
}(server__WEBPACK_IMPORTED_MODULE_0__["Controller"]));



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: initApp, DefaultController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ "./src/start.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return _start__WEBPACK_IMPORTED_MODULE_0__["initApp"]; });

/* harmony import */ var _controller_default_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/default_controller */ "./src/controller/default_controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultController", function() { return _controller_default_controller__WEBPACK_IMPORTED_MODULE_1__["DefaultController"]; });





/***/ }),

/***/ "./src/start.ts":
/*!**********************!*\
  !*** ./src/start.ts ***!
  \**********************/
/*! exports provided: initApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initApp", function() { return initApp; });
/* harmony import */ var server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! server */ "server");
/* harmony import */ var server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(server__WEBPACK_IMPORTED_MODULE_0__);

// import { DefaultController } from "./controller/default_controller";
var initApp = function () {
    // console.log(DefaultController.name)
    server__WEBPACK_IMPORTED_MODULE_0__["start"]({
        port: 8080
    });
    console.log("server runing at 8080");
};
initApp();
//console.log(typeof new Server.App);


/***/ }),

/***/ "server":
/*!*************************!*\
  !*** external "server" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("server");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map