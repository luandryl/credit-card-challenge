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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isString = (str) => {
    return (typeof str === "string") ? str : -1
}

const removeStringSpaces = (str) => {
    if (isString(str) !== -1) {
        return (str.split(" ").length > 1) ? str.split(" ").join(""): str
    } else {
        throw new Error("The argument of this function must be String")
    }
}

const reverseStr = (str) => {
    if (isString(str) !== -1) {
        let strSplit = str.split("")
        let reverseArray = strSplit.reverse()
        return reverseArray.join("")
    } else {
        throw new Error("The argument of this function must be String")
    }
    
}

const validCardNumber = (number) => {
    let sum = 0;
    for (let index = 0; index < number.length; index++) {
        let intVal = parseInt(number.substr(index, 1))
        if (index % 2 !== 0) {
            intVal *= 2
            if (intVal > 9) {
                intVal -= 9
            }
        }
        sum += intVal 
    }
    return (sum % 10 === 0)
}

const validate = (number) => {
    let invertedNumber = removeStringSpaces(reverseStr(number.toString()))
    return validCardNumber(invertedNumber)
}

const Card = {
    validate,
    isString,
    removeStringSpaces,
    reverseStr
}

/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Card__ = __webpack_require__(0);

const cards = [{
    id: 1,
    number: 4111111111111111
},{
    id: 2,
    number: 4111111111111
},{
    id: 3,
    number: 4012888888881881
},{
    id: 4,
    number: 378282246310005
},{
    id: 5,
    number: 6011111111111117
},{
    id: 6,
    number: 5105105105105100
},{
    id: 7,
    number: "5105 1051 0510 5106"
},{
    id: 8,
    number: 9111111111111111
}]

const validCards = cards.filter(card => {
    return __WEBPACK_IMPORTED_MODULE_0__Card__["a" /* default */].validate(card.number)
})
console.log("Cards List \n")
console.log(cards)
console.log("\n Only Valid Cards \n")
console.log(validCards)

/***/ })
/******/ ]);