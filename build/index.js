(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/kasimir.iphone-x-kit/build/index.js":
/*!****************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/kasimir.iphone-x-kit/build/index.js ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(/*! framer */ "framer"), __webpack_require__(/*! react */ "react"));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-1/build/index.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-1/build/index.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeviceHand {
    constructor() {
        this.image = "hand.png";
        this.width = 2399;
        this.height = 3738;
        this.offset = 0;
    }
}
exports.DeviceHand = DeviceHand;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-2/build/index.js":
/*!***********************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-2/build/index.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeviceHand {
    constructor() {
        this.image = "hand.png";
        this.width = 2399;
        this.height = 3738;
        this.offset = 0;
    }
}
exports.DeviceHand = DeviceHand;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-x-silver/build/index.js":
/*!************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-x-silver/build/index.js ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeviceSkin {
    constructor() {
        this.image = "device.png";
        this.imageWidth = 1405;
        this.imageHeight = 2796;
        this.padding = 40;
        this.background = "black";
    }
}
exports.DeviceSkin = DeviceSkin;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-x-space-gray/build/index.js":
/*!****************************************************************************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-x-space-gray/build/index.js ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeviceSkin {
    constructor() {
        this.image = "device.png";
        this.imageWidth = 1405;
        this.imageHeight = 2796;
        this.padding = 40;
        this.background = "black";
    }
}
exports.DeviceSkin = DeviceSkin;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Examples.tsx": "./code/Examples.tsx",
	"./Home Button (iPhone X)/HomeButton.tsx": "./code/Home Button (iPhone X)/HomeButton.tsx",
	"./Status Bar/Status_Bar.tsx": "./code/Status Bar/Status_Bar.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({ toggle: true, scale: framer_1.Animatable(1), opacity: framer_1.Animatable(1), rotation: framer_1.Animatable(0), rotationY: framer_1.Animatable(0) });\nexports.Scale = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: data.scale,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.scale.set(0.6);\n            framer_1.animate.spring(data.scale, 1);\n        },\n    };\n};\nexports.Rotate = props => {\n    window[\"__checkBudget__\"]();\n    data.rotation.set(props.rotation);\n    return {\n        rotation: data.rotation,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.spring(data.rotation, data.rotation.get() + 90, {\n                tension: 250,\n                friction: 20,\n            });\n        },\n    };\n};\nexports.Fade = props => {\n    window[\"__checkBudget__\"]();\n    data.opacity.set(props.opacity);\n    return {\n        opacity: data.opacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.linear(data.opacity, 0, 0.2);\n        },\n    };\n};\nexports.FlipOutput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        rotationY: data.rotationY,\n    };\n};\nexports.FlipInput = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onTap() {\n            window[\"__checkBudget__\"]();\n            const toggle = data.toggle;\n            framer_1.animate.spring({ rotationY: data.rotationY }, {\n                rotationY: toggle ? 360 : 0,\n            }, { tension: 200, friction: 20 });\n            data.toggle = !toggle;\n        },\n    };\n};\nexports.__info__ = [{ name: \"Scale\", type: \"override\" }, { name: \"Rotate\", type: \"override\" }, { name: \"Fade\", type: \"override\" }, { name: \"FlipOutput\", type: \"override\" }, { name: \"FlipInput\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNEJBQTRCLG9KQUFvSjtBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyw0QkFBNEI7QUFDakU7QUFDQSxhQUFhLEdBQUcsNkJBQTZCO0FBQzdDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDLEdBQUcsbUNBQW1DLEdBQUcsaUNBQWlDLEdBQUcsdUNBQXVDLEdBQUcsc0NBQXNDIiwiZmlsZSI6Ii4vY29kZS9FeGFtcGxlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGEgPSBmcmFtZXJfMS5EYXRhKHsgdG9nZ2xlOiB0cnVlLCBzY2FsZTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgb3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgxKSwgcm90YXRpb246IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksIHJvdGF0aW9uWTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSB9KTtcbmV4cG9ydHMuU2NhbGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGEuc2NhbGUsXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBkYXRhLnNjYWxlLnNldCgwLjYpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5zcHJpbmcoZGF0YS5zY2FsZSwgMSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLlJvdGF0ZSA9IHByb3BzID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBkYXRhLnJvdGF0aW9uLnNldChwcm9wcy5yb3RhdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb246IGRhdGEucm90YXRpb24sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLnNwcmluZyhkYXRhLnJvdGF0aW9uLCBkYXRhLnJvdGF0aW9uLmdldCgpICsgOTAsIHtcbiAgICAgICAgICAgICAgICB0ZW5zaW9uOiAyNTAsXG4gICAgICAgICAgICAgICAgZnJpY3Rpb246IDIwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZhZGUgPSBwcm9wcyA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgZGF0YS5vcGFjaXR5LnNldChwcm9wcy5vcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLm9wYWNpdHksXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBmcmFtZXJfMS5hbmltYXRlLmxpbmVhcihkYXRhLm9wYWNpdHksIDAsIDAuMik7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLkZsaXBPdXRwdXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSxcbiAgICB9O1xufTtcbmV4cG9ydHMuRmxpcElucHV0ID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSBkYXRhLnRvZ2dsZTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuc3ByaW5nKHsgcm90YXRpb25ZOiBkYXRhLnJvdGF0aW9uWSB9LCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25ZOiB0b2dnbGUgPyAzNjAgOiAwLFxuICAgICAgICAgICAgfSwgeyB0ZW5zaW9uOiAyMDAsIGZyaWN0aW9uOiAyMCB9KTtcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gIXRvZ2dsZTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIlNjYWxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiUm90YXRlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiRmFkZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkZsaXBPdXRwdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJGbGlwSW5wdXRcIiwgdHlwZTogXCJvdmVycmlkZVwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Examples.tsx\n");

/***/ }),

/***/ "./code/Home Button (iPhone X)/HomeButton.tsx":
/*!****************************************************!*\
  !*** ./code/Home Button (iPhone X)/HomeButton.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nclass HomeButton extends React.Component {\n    render() {\n        window[\"__checkBudget__\"]();\n        const { appearance, width, height } = this.props;\n        return (React.createElement(framer_1.Frame, { width: width, height: height, background: null, style: {\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                fontSize: 12,\n                color: appearance === \"dark\" ? \"black\" : \"white\",\n            } },\n            React.createElement(\"div\", { style: {\n                    marginTop: \"6px\"\n                }, dangerouslySetInnerHTML: {\n                    __html: homeButtonSVG(appearance, width),\n                } })));\n    }\n}\nHomeButton.defaultProps = {\n    appearance: \"light\",\n    width: 375,\n    height: 34,\n};\nHomeButton.propertyControls = {\n    appearance: {\n        type: framer_1.ControlType.Enum,\n        options: [\"dark\", \"light\"],\n        optionTitles: [\"Dark\", \"Light\"],\n        title: \"Appearance\",\n    }\n};\nexports.HomeButton = HomeButton;\nfunction homeButtonSVG(appearance, width) {\n    window[\"__checkBudget__\"]();\n    const buttonWidth = width >= 800 ? 210 : 134;\n    const color = appearance === \"dark\" ? \"black\" : \"white\";\n    return `<svg width=\"${buttonWidth}px\" height=\"5px\" viewBox=\"0 0 ${buttonWidth} 5\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->\n        <desc>Created with Sketch.</desc>\n        <defs></defs>\n        <g id=\"Symbols\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"Bars-/-Home-Indicator-/-On-Dark\" transform=\"translate(-121.000000, -20.000000)\" fill=\"${color}\">\n                <rect id=\"Home-Indicator\" x=\"121\" y=\"20\" width=\"${buttonWidth}\" height=\"5\" rx=\"2.5\"></rect>\n            </g>\n        </g>\n    </svg>`;\n}\nexports.__info__ = [{ name: \"HomeButton\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0hvbWUgQnV0dG9uIChpUGhvbmUgWCkvSG9tZUJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0QkFBNEI7QUFDM0MscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZix3Q0FBd0M7QUFDeEM7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVksZ0NBQWdDLFlBQVk7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMkcsTUFBTTtBQUNqSCxrRUFBa0UsWUFBWTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBeUQiLCJmaWxlIjoiLi9jb2RlL0hvbWUgQnV0dG9uIChpUGhvbmUgWCkvSG9tZUJ1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgZnJhbWVyXzEgPSByZXF1aXJlKFwiZnJhbWVyXCIpO1xuY2xhc3MgSG9tZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY29uc3QgeyBhcHBlYXJhbmNlLCB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoZnJhbWVyXzEuRnJhbWUsIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCwgYmFja2dyb3VuZDogbnVsbCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwZWFyYW5jZSA9PT0gXCJkYXJrXCIgPyBcImJsYWNrXCIgOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjZweFwiXG4gICAgICAgICAgICAgICAgfSwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBob21lQnV0dG9uU1ZHKGFwcGVhcmFuY2UsIHdpZHRoKSxcbiAgICAgICAgICAgICAgICB9IH0pKSk7XG4gICAgfVxufVxuSG9tZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgYXBwZWFyYW5jZTogXCJsaWdodFwiLFxuICAgIHdpZHRoOiAzNzUsXG4gICAgaGVpZ2h0OiAzNCxcbn07XG5Ib21lQnV0dG9uLnByb3BlcnR5Q29udHJvbHMgPSB7XG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5FbnVtLFxuICAgICAgICBvcHRpb25zOiBbXCJkYXJrXCIsIFwibGlnaHRcIl0sXG4gICAgICAgIG9wdGlvblRpdGxlczogW1wiRGFya1wiLCBcIkxpZ2h0XCJdLFxuICAgICAgICB0aXRsZTogXCJBcHBlYXJhbmNlXCIsXG4gICAgfVxufTtcbmV4cG9ydHMuSG9tZUJ1dHRvbiA9IEhvbWVCdXR0b247XG5mdW5jdGlvbiBob21lQnV0dG9uU1ZHKGFwcGVhcmFuY2UsIHdpZHRoKSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgY29uc3QgYnV0dG9uV2lkdGggPSB3aWR0aCA+PSA4MDAgPyAyMTAgOiAxMzQ7XG4gICAgY29uc3QgY29sb3IgPSBhcHBlYXJhbmNlID09PSBcImRhcmtcIiA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIjtcbiAgICByZXR1cm4gYDxzdmcgd2lkdGg9XCIke2J1dHRvbldpZHRofXB4XCIgaGVpZ2h0PVwiNXB4XCIgdmlld0JveD1cIjAgMCAke2J1dHRvbldpZHRofSA1XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MS4zICg1NzU0NCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+XG4gICAgICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPlxuICAgICAgICA8ZGVmcz48L2RlZnM+XG4gICAgICAgIDxnIGlkPVwiU3ltYm9sc1wiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICA8ZyBpZD1cIkJhcnMtLy1Ib21lLUluZGljYXRvci0vLU9uLURhcmtcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEyMS4wMDAwMDAsIC0yMC4wMDAwMDApXCIgZmlsbD1cIiR7Y29sb3J9XCI+XG4gICAgICAgICAgICAgICAgPHJlY3QgaWQ9XCJIb21lLUluZGljYXRvclwiIHg9XCIxMjFcIiB5PVwiMjBcIiB3aWR0aD1cIiR7YnV0dG9uV2lkdGh9XCIgaGVpZ2h0PVwiNVwiIHJ4PVwiMi41XCI+PC9yZWN0PlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICA8L2c+XG4gICAgPC9zdmc+YDtcbn1cbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIkhvbWVCdXR0b25cIiwgY2hpbGRyZW46IGZhbHNlLCB0eXBlOiBcImNvbXBvbmVudFwiIH1dO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/Home Button (iPhone X)/HomeButton.tsx\n");

/***/ }),

/***/ "./code/Status Bar/Status_Bar.tsx":
/*!****************************************!*\
  !*** ./code/Status Bar/Status_Bar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nclass StatusBar extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.state = {\n            time: '18:00'\n        };\n        this.updateTime = () => {\n            window[\"__checkBudget__\"]();\n            let time = \"\";\n            if (this.props.liveTime) {\n                const date = new Date();\n                var hours = date.getHours();\n                if (this.props.twelveHour) {\n                    hours = hours % 12;\n                    hours = hours ? hours : 12;\n                    time = hours + \":\" + (\"0\" + date.getMinutes()).slice(-2);\n                }\n                else {\n                    time = (\"0\" + hours).slice(-2) + \":\" + (\"0\" + date.getMinutes()).slice(-2);\n                }\n            }\n            else {\n                time = this.props.time;\n            }\n            this.setState({ time });\n        };\n    }\n    componentWillMount() {\n        window[\"__checkBudget__\"]();\n        this.updateTime();\n        this.timer = window.setInterval(() => {\n            window[\"__checkBudget__\"]();\n            this.updateTime();\n        }, 1000);\n    }\n    componentWillUnmount() {\n        window[\"__checkBudget__\"]();\n        window.clearInterval(this.timer);\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const { batteryLevel, signalLevel, wifiLevel, appearance, location, back, mode, width, height } = this.props;\n        if (width >= 800) {\n            return (React.createElement(framer_1.Frame, { background: null, width: width, height: height }));\n        }\n        return (React.createElement(framer_1.Frame, { width: width, height: height, background: null, style: {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                fontSize: 12,\n                color: appearance === \"dark\" ? \"black\" : \"white\",\n            } },\n            React.createElement(framer_1.Frame, { top: 0, left: 0, right: 0, height: 44, background: null },\n                React.createElement(framer_1.Frame, { left: 0, width: 95, height: 44, top: 0, background: null, style: {\n                        display: \"flex\",\n                        flexDirection: \"column\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                    } },\n                    React.createElement(\"div\", { style: {\n                            display: \"flex\",\n                            alignItems: \"center\",\n                            justifyContent: \"center\",\n                            textAlign: \"center\",\n                            fontFamily: \"SF-Pro-Text, system-ui, -apple-system\",\n                            fontSize: \"15px\",\n                            letterSpacing: \"-16\",\n                            width: \"54px\",\n                            lineHeight: \"21px\",\n                            fontWeight: \"600\",\n                            background: mode,\n                            color: mode != \"transparent\" ? \"#ffffff\" : \"inherit\",\n                            borderRadius: \"20px\",\n                        } },\n                        this.state.time !== '' ? this.state.time : '18:00',\n                        React.createElement(\"div\", { style: {\n                                height: \"16px\",\n                                display: mode === \"transparent\" && location !== \"none\" ? \"block\" : \"none\"\n                            }, dangerouslySetInnerHTML: {\n                                __html: locationSVG(appearance, location),\n                            } })),\n                    React.createElement(\"div\", { style: {\n                            alignSelf: \"flex-start\",\n                            display: back != \"\" ? \"flex\" : \"none\",\n                            marginLeft: \"10px\",\n                            fontWeight: \"400\",\n                            fontFamily: \"SF-Pro-Text, system-ui, -apple-system\",\n                            fontSize: \"12px\"\n                        } },\n                        React.createElement(\"div\", { style: {\n                                height: \"12px\",\n                                width: \"12px\"\n                            }, dangerouslySetInnerHTML: {\n                                __html: backSVG(appearance),\n                            } }),\n                        back)),\n                React.createElement(framer_1.Frame, { right: 0, width: 95, height: 44, top: 0, background: null, style: {\n                        display: \"flex\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\"\n                    } },\n                    React.createElement(\"div\", { style: {\n                            width: \"20px\",\n                            textAlign: \"center\"\n                        }, dangerouslySetInnerHTML: {\n                            __html: signalSVG(appearance, signalLevel)\n                        } }),\n                    React.createElement(\"div\", { style: {\n                            width: \"20px\",\n                            textAlign: \"center\"\n                        }, dangerouslySetInnerHTML: {\n                            __html: wifiSVG(appearance, wifiLevel)\n                        } }),\n                    React.createElement(\"div\", { style: {\n                            width: \"27px\",\n                            textAlign: \"right\"\n                        }, dangerouslySetInnerHTML: {\n                            __html: batterySVG(appearance, batteryLevel),\n                        } })))));\n    }\n}\nStatusBar.defaultProps = {\n    appearance: \"light\",\n    mode: \"transparent\",\n    liveTime: true,\n    back: \"\",\n    twelveHour: false,\n    time: \"18.00\",\n    location: \"none\",\n    signalLevel: 100,\n    wifiLevel: 100,\n    batteryLevel: 100,\n    levels: null,\n    width: 375,\n    height: 44,\n};\nStatusBar.propertyControls = {\n    appearance: {\n        type: framer_1.ControlType.Enum,\n        options: [\"dark\", \"light\"],\n        optionTitles: [\"Dark\", \"Light\"],\n        title: \"Appearance\"\n    },\n    mode: {\n        type: framer_1.ControlType.Enum,\n        options: [\"transparent\", \"#4CD964\", \"#007AFF\", \"#FF3B30\"],\n        optionTitles: [\"None\", \"On a call\", \"App actively using your location or Personal Hotspot is on\", \"Recording\"],\n        title: \"Task\"\n    },\n    liveTime: {\n        type: framer_1.ControlType.Boolean,\n        disabledTitle: \"No\",\n        enabledTitle: \"Yes\",\n        title: \"Real time\"\n    },\n    twelveHour: {\n        type: framer_1.ControlType.Boolean,\n        disabledTitle: \"24h\",\n        enabledTitle: \"12h\",\n        title: \"↳ Time format\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            return props.liveTime === false;\n        }\n    },\n    time: {\n        type: framer_1.ControlType.String,\n        placeholder: \"18:00\",\n        title: \"↳ Time\",\n        hidden(props) {\n            window[\"__checkBudget__\"]();\n            return props.liveTime;\n        }\n    },\n    location: {\n        type: framer_1.ControlType.Enum,\n        options: [\"none\", \"background\", \"locating\"],\n        optionTitles: [\"No Location\", \"Background Location\", \"Receiving Location\"],\n        title: \"Location\"\n    },\n    back: {\n        type: framer_1.ControlType.String,\n        placeholder: \"Settings\",\n        title: \"Back to\"\n    },\n    signalLevel: {\n        type: framer_1.ControlType.Number,\n        min: 0,\n        max: 100,\n        title: \"Signal\"\n    },\n    wifiLevel: {\n        type: framer_1.ControlType.Number,\n        min: 0,\n        max: 100,\n        title: \"Wifi\"\n    },\n    batteryLevel: {\n        type: framer_1.ControlType.Number,\n        min: 0,\n        max: 100,\n        title: \"Battery\"\n    }\n};\nexports.StatusBar = StatusBar;\nfunction backSVG(appearance) {\n    window[\"__checkBudget__\"]();\n    const color = appearance === \"dark\" ? \"black\" : \"white\";\n    return `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6px\" height=\"7px\" viewBox=\"0 0 7 8\">\n        <path fill=\"${color}\" class=\"c\" d=\"M0,4,7,0V8Z\"/>\n      </svg>`;\n}\nfunction locationSVG(appearance, location) {\n    window[\"__checkBudget__\"]();\n    const color = appearance === \"dark\" ? \"black\" : \"white\";\n    const fill = location === \"locating\" ? color : \"transparent\";\n    return `<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g class=\"b\" transform=\"translate(2.5 4)\" fill-rule=\"nonzero\" stroke-align=\"inside\" stroke=\"${color}\" fill=\"${fill}\" stroke-dashoffset=\"1\" stroke-width=\"1\">\n            <path class=\"c\" d=\"M5.955,10.5,10.5,0,0,4.545H5.955Z\"/>\n          </g>\n      </svg>`;\n}\nfunction batterySVG(appearance, batteryLevel) {\n    window[\"__checkBudget__\"]();\n    const color = appearance === \"dark\" ? \"black\" : \"white\";\n    const batteryJuiceColor = batteryLevel <= 10 ? \"red\" : batteryLevel <= 20 ? \"#FFCC01\" : color;\n    return `<svg width=\"25px\" height=\"12px\" viewBox=\"0 0 25 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"Symbols\" stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Bars-/-Status-Bar-/-iPhone-X-/-On-Light\" transform=\"translate(-336.000000, -17.000000)\">\n                  <g id=\"Battery\" transform=\"translate(336.000000, 17.000000)\">\n                      <rect id=\"Border\" stroke=\"${color}\" opacity=\"0.35\" x=\"0.5\" y=\"0.833333333\" width=\"21\" height=\"10.3333333\" rx=\"2.66666675\"></rect>\n                      <path d=\"M23,4 L23,8 C23.8047311,7.66122348 24.328038,6.87313328 24.328038,6 C24.328038,5.12686672 23.8047311,4.33877652 23,4\" id=\"Cap\" fill=\"${color}\" fill-rule=\"nonzero\" opacity=\"0.4\"></path>\n                      <rect id=\"Capacity\" fill=\"${batteryJuiceColor}\" fill-rule=\"nonzero\" x=\"2\" y=\"2.33333333\" height=\"7.33333333\" rx=\"1.33333337\" width=\"${Math.round((batteryLevel / 100) * 17 + 1)}\"></rect>\n                  </g>\n              </g>\n          </g>\n      </svg>`;\n}\nfunction signalSVG(appearance, signalLevel) {\n    window[\"__checkBudget__\"]();\n    const color = appearance === \"dark\" ? \"black\" : \"white\";\n    return `<svg width=\"17.5px\" height=\"12px\" viewBox=\"0 0 18 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"Symbols\" stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Bars-/-Status-Bar-/-iPhone-X-/-On-Light\" transform=\"translate(-293.000000, -17.000000)\" fill-rule=\"nonzero\" fill=\"${color}\">\n                <path d=\"M295.666667,24.3333333 C296.218951,24.3333333 296.666667,24.7810486 296.666667,25.3333333 L296.666667,27.3333333 C296.666667,27.8856181 296.218951,28.3333333 295.666667,28.3333333 L294.666667,28.3333333 C294.114382,28.3333333 293.666667,27.8856181 293.666667,27.3333333 L293.666667,25.3333333 C293.666667,24.7810486 294.114382,24.3333333 294.666667,24.3333333 L295.666667,24.3333333 Z\" opacity=\"${signalLevel != 0 ? 1 : 0.4}\"></path>\n                <path d=\"M299.333333,22.3333333 L300.333333,22.3333333 C300.885618,22.3333333 301.333333,22.7810486 301.333333,23.3333333 L301.333333,27.3333333 C301.333333,27.8856181 300.885618,28.3333333 300.333333,28.3333333 L299.333333,28.3333333 C298.781049,28.3333333 298.333333,27.8856181 298.333333,27.3333333 L298.333333,23.3333333 C298.333333,22.7810486 298.781049,22.3333333 299.333333,22.3333333 Z\" opacity=\"${signalLevel >= 25 ? 1 : 0.4}\"></path>\n                <path d=\"M304,20 L305,20 C305.552285,20 306,20.4477153 306,21 L306,27.3333333 C306,27.8856181 305.552285,28.3333333 305,28.3333333 L304,28.3333333 C303.447715,28.3333333 303,27.8856181 303,27.3333333 L303,21 C303,20.4477153 303.447715,20 304,20 Z\" opacity=\"${signalLevel >= 50 ? 1 : 0.4}\"></path>\n                <path d=\"M308.666667,17.6666667 L309.666667,17.6666667 C310.218951,17.6666667 310.666667,18.1143819 310.666667,18.6666667 L310.666667,27.3333333 C310.666667,27.8856181 310.218951,28.3333333 309.666667,28.3333333 L308.666667,28.3333333 C308.114382,28.3333333 307.666667,27.8856181 307.666667,27.3333333 L307.666667,18.6666667 C307.666667,18.1143819 308.114382,17.6666667 308.666667,17.6666667 Z\" opacity=\"${signalLevel >= 75 ? 1 : 0.4}\"></path>\n              </g>\n          </g>\n      </svg>`;\n}\nfunction wifiSVG(appearance, wifiLevel) {\n    window[\"__checkBudget__\"]();\n    const color = appearance === \"dark\" ? \"black\" : \"white\";\n    return `<svg width=\"15px\" viewBox=\"0 0 16 12\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"Symbols\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"Bars-/-Status-Bar-/-iPhone-X-/-On-Light\" transform=\"translate(-315.000000, -17.000000)\" fill=\"${color}\" fill-rule=\"nonzero\">\n                <path d=\"M325.549333,26.188 C325.611087,26.127394 325.645095,26.0439919 325.643328,25.957485 C325.641561,25.8709782 325.604176,25.7890342 325.54,25.731 C324.264428,24.6521162 322.396238,24.6521162 321.120667,25.731 C321.056446,25.7889875 321.019,25.8709057 321.01717,25.957413 C321.01534,26.0439203 321.049289,26.1273487 321.111,26.188 L323.108667,28.2036667 C323.167217,28.2629057 323.247042,28.2962443 323.330333,28.2962443 C323.413624,28.2962443 323.49345,28.2629057 323.552,28.2036667 L325.549333,26.188 Z\" opacity=\"${wifiLevel != 0 ? 1 : 0.4}\"></path>\n                <path d=\"M323.330333,23.4036667 C324.547823,23.4035921 325.721865,23.8561245 326.624333,24.6733333 C326.746397,24.7893139 326.938678,24.7867994 327.057667,24.6676667 L328.212333,23.501 C328.273141,23.439805 328.30688,23.3567887 328.306003,23.2705239 C328.305126,23.1842592 328.269706,23.101946 328.207667,23.042 C325.459468,20.4856177 321.203532,20.4856177 318.455333,23.042 C318.393256,23.1019453 318.357837,23.1842997 318.357023,23.2705923 C318.356208,23.356885 318.390065,23.4398934 318.451,23.501 L319.605333,24.6676667 C319.724322,24.7867994 319.916603,24.7893139 320.038667,24.6733333 C320.940539,23.8566645 322.113649,23.4041708 323.330333,23.4036667 Z\" opacity=\"${wifiLevel >= 33 ? 1 : 0.4}\"></path>\n                <path d=\"M323.330333,19.608 C325.546226,19.6080971 327.677386,20.4595347 329.283333,21.9863333 C329.404265,22.1042079 329.597562,22.102721 329.716667,21.983 L330.872667,20.8163333 C330.932975,20.7556112 330.966599,20.6733595 330.966098,20.5877792 C330.965598,20.5021988 330.931014,20.420346 330.87,20.3603333 C326.654902,16.3207858 320.005098,16.3207858 315.79,20.3603333 C315.728941,20.4203015 315.694297,20.5021294 315.693734,20.5877099 C315.693171,20.6732903 315.726736,20.755567 315.787,20.8163333 L316.943333,21.983 C317.062362,22.1029017 317.255808,22.1043897 317.376667,21.9863333 C318.982819,20.4594344 321.114223,19.6079944 323.330333,19.608 Z\" opacity=\"${wifiLevel >= 66 ? 1 : 0.4}\"></path>\n              </g>\n          </g>\n      </svg>`;\n}\nexports.__info__ = [{ name: \"StatusBar\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1N0YXR1cyBCYXIvU3RhdHVzX0Jhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0ZBQXdGO0FBQ3ZHO0FBQ0EseURBQXlELGlEQUFpRDtBQUMxRztBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsaURBQWlELDBEQUEwRDtBQUMzRyxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRTtBQUN2QixnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNkJBQTZCLEVBQUU7QUFDL0IsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixFQUFFO0FBQzNCLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsNkJBQTZCLEVBQUU7QUFDL0I7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUU7QUFDdkIsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQixnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QixFQUFFO0FBQzNCLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3R0FBd0csTUFBTSxVQUFVLEtBQUs7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQsc0tBQXNLLE1BQU07QUFDNUssa0RBQWtELGtCQUFrQix3RkFBd0YsMENBQTBDO0FBQ3RNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUlBQXlJLE1BQU07QUFDL0ksc2FBQXNhLDJCQUEyQjtBQUNqYyxzYUFBc2EsNEJBQTRCO0FBQ2xjLG1SQUFtUiw0QkFBNEI7QUFDL1Msc2FBQXNhLDRCQUE0QjtBQUNsYztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSEFBcUgsTUFBTTtBQUMzSCwwaEJBQTBoQix5QkFBeUI7QUFDbmpCLGdyQkFBZ3JCLDBCQUEwQjtBQUMxc0IseXFCQUF5cUIsMEJBQTBCO0FBQ25zQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBd0QiLCJmaWxlIjoiLi9jb2RlL1N0YXR1cyBCYXIvU3RhdHVzX0Jhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgZnJhbWVyXzEgPSByZXF1aXJlKFwiZnJhbWVyXCIpO1xuY2xhc3MgU3RhdHVzQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpbWU6ICcxODowMCdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lID0gKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICBsZXQgdGltZSA9IFwiXCI7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5saXZlVGltZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wcy50d2VsdmVIb3VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXJzID0gaG91cnMgJSAxMjtcbiAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7XG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSBob3VycyArIFwiOlwiICsgKFwiMFwiICsgZGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSAoXCIwXCIgKyBob3Vycykuc2xpY2UoLTIpICsgXCI6XCIgKyAoXCIwXCIgKyBkYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRpbWUgPSB0aGlzLnByb3BzLnRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGltZSB9KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lKCk7XG4gICAgICAgIHRoaXMudGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnN0IHsgYmF0dGVyeUxldmVsLCBzaWduYWxMZXZlbCwgd2lmaUxldmVsLCBhcHBlYXJhbmNlLCBsb2NhdGlvbiwgYmFjaywgbW9kZSwgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKHdpZHRoID49IDgwMCkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KGZyYW1lcl8xLkZyYW1lLCB7IGJhY2tncm91bmQ6IG51bGwsIHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChmcmFtZXJfMS5GcmFtZSwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0LCBiYWNrZ3JvdW5kOiBudWxsLCBzdHlsZToge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgICBjb2xvcjogYXBwZWFyYW5jZSA9PT0gXCJkYXJrXCIgPyBcImJsYWNrXCIgOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGZyYW1lcl8xLkZyYW1lLCB7IHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGhlaWdodDogNDQsIGJhY2tncm91bmQ6IG51bGwgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KGZyYW1lcl8xLkZyYW1lLCB7IGxlZnQ6IDAsIHdpZHRoOiA5NSwgaGVpZ2h0OiA0NCwgdG9wOiAwLCBiYWNrZ3JvdW5kOiBudWxsLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU0YtUHJvLVRleHQsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIi0xNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjU0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIxcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IG1vZGUgIT0gXCJ0cmFuc3BhcmVudFwiID8gXCIjZmZmZmZmXCIgOiBcImluaGVyaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS50aW1lICE9PSAnJyA/IHRoaXMuc3RhdGUudGltZSA6ICcxODowMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbW9kZSA9PT0gXCJ0cmFuc3BhcmVudFwiICYmIGxvY2F0aW9uICE9PSBcIm5vbmVcIiA/IFwiYmxvY2tcIiA6IFwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBsb2NhdGlvblNWRyhhcHBlYXJhbmNlLCBsb2NhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmFjayAhPSBcIlwiID8gXCJmbGV4XCIgOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiU0YtUHJvLVRleHQsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogYmFja1NWRyhhcHBlYXJhbmNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFjaykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZnJhbWVyXzEuRnJhbWUsIHsgcmlnaHQ6IDAsIHdpZHRoOiA5NSwgaGVpZ2h0OiA0NCwgdG9wOiAwLCBiYWNrZ3JvdW5kOiBudWxsLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogc2lnbmFsU1ZHKGFwcGVhcmFuY2UsIHNpZ25hbExldmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHdpZmlTVkcoYXBwZWFyYW5jZSwgd2lmaUxldmVsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjdweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogYmF0dGVyeVNWRyhhcHBlYXJhbmNlLCBiYXR0ZXJ5TGV2ZWwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSkpKSk7XG4gICAgfVxufVxuU3RhdHVzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcHBlYXJhbmNlOiBcImxpZ2h0XCIsXG4gICAgbW9kZTogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGxpdmVUaW1lOiB0cnVlLFxuICAgIGJhY2s6IFwiXCIsXG4gICAgdHdlbHZlSG91cjogZmFsc2UsXG4gICAgdGltZTogXCIxOC4wMFwiLFxuICAgIGxvY2F0aW9uOiBcIm5vbmVcIixcbiAgICBzaWduYWxMZXZlbDogMTAwLFxuICAgIHdpZmlMZXZlbDogMTAwLFxuICAgIGJhdHRlcnlMZXZlbDogMTAwLFxuICAgIGxldmVsczogbnVsbCxcbiAgICB3aWR0aDogMzc1LFxuICAgIGhlaWdodDogNDQsXG59O1xuU3RhdHVzQmFyLnByb3BlcnR5Q29udHJvbHMgPSB7XG4gICAgYXBwZWFyYW5jZToge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5FbnVtLFxuICAgICAgICBvcHRpb25zOiBbXCJkYXJrXCIsIFwibGlnaHRcIl0sXG4gICAgICAgIG9wdGlvblRpdGxlczogW1wiRGFya1wiLCBcIkxpZ2h0XCJdLFxuICAgICAgICB0aXRsZTogXCJBcHBlYXJhbmNlXCJcbiAgICB9LFxuICAgIG1vZGU6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuRW51bSxcbiAgICAgICAgb3B0aW9uczogW1widHJhbnNwYXJlbnRcIiwgXCIjNENEOTY0XCIsIFwiIzAwN0FGRlwiLCBcIiNGRjNCMzBcIl0sXG4gICAgICAgIG9wdGlvblRpdGxlczogW1wiTm9uZVwiLCBcIk9uIGEgY2FsbFwiLCBcIkFwcCBhY3RpdmVseSB1c2luZyB5b3VyIGxvY2F0aW9uIG9yIFBlcnNvbmFsIEhvdHNwb3QgaXMgb25cIiwgXCJSZWNvcmRpbmdcIl0sXG4gICAgICAgIHRpdGxlOiBcIlRhc2tcIlxuICAgIH0sXG4gICAgbGl2ZVRpbWU6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWRUaXRsZTogXCJOb1wiLFxuICAgICAgICBlbmFibGVkVGl0bGU6IFwiWWVzXCIsXG4gICAgICAgIHRpdGxlOiBcIlJlYWwgdGltZVwiXG4gICAgfSxcbiAgICB0d2VsdmVIb3VyOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLkJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkVGl0bGU6IFwiMjRoXCIsXG4gICAgICAgIGVuYWJsZWRUaXRsZTogXCIxMmhcIixcbiAgICAgICAgdGl0bGU6IFwi4oazIFRpbWUgZm9ybWF0XCIsXG4gICAgICAgIGhpZGRlbihwcm9wcykge1xuICAgICAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgICAgICByZXR1cm4gcHJvcHMubGl2ZVRpbWUgPT09IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB0aW1lOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiMTg6MDBcIixcbiAgICAgICAgdGl0bGU6IFwi4oazIFRpbWVcIixcbiAgICAgICAgaGlkZGVuKHByb3BzKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9wcy5saXZlVGltZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbG9jYXRpb246IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuRW51bSxcbiAgICAgICAgb3B0aW9uczogW1wibm9uZVwiLCBcImJhY2tncm91bmRcIiwgXCJsb2NhdGluZ1wiXSxcbiAgICAgICAgb3B0aW9uVGl0bGVzOiBbXCJObyBMb2NhdGlvblwiLCBcIkJhY2tncm91bmQgTG9jYXRpb25cIiwgXCJSZWNlaXZpbmcgTG9jYXRpb25cIl0sXG4gICAgICAgIHRpdGxlOiBcIkxvY2F0aW9uXCJcbiAgICB9LFxuICAgIGJhY2s6IHtcbiAgICAgICAgdHlwZTogZnJhbWVyXzEuQ29udHJvbFR5cGUuU3RyaW5nLFxuICAgICAgICBwbGFjZWhvbGRlcjogXCJTZXR0aW5nc1wiLFxuICAgICAgICB0aXRsZTogXCJCYWNrIHRvXCJcbiAgICB9LFxuICAgIHNpZ25hbExldmVsOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlcixcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgdGl0bGU6IFwiU2lnbmFsXCJcbiAgICB9LFxuICAgIHdpZmlMZXZlbDoge1xuICAgICAgICB0eXBlOiBmcmFtZXJfMS5Db250cm9sVHlwZS5OdW1iZXIsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIHRpdGxlOiBcIldpZmlcIlxuICAgIH0sXG4gICAgYmF0dGVyeUxldmVsOiB7XG4gICAgICAgIHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLk51bWJlcixcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgdGl0bGU6IFwiQmF0dGVyeVwiXG4gICAgfVxufTtcbmV4cG9ydHMuU3RhdHVzQmFyID0gU3RhdHVzQmFyO1xuZnVuY3Rpb24gYmFja1NWRyhhcHBlYXJhbmNlKSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgY29uc3QgY29sb3IgPSBhcHBlYXJhbmNlID09PSBcImRhcmtcIiA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIjtcbiAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNnB4XCIgaGVpZ2h0PVwiN3B4XCIgdmlld0JveD1cIjAgMCA3IDhcIj5cbiAgICAgICAgPHBhdGggZmlsbD1cIiR7Y29sb3J9XCIgY2xhc3M9XCJjXCIgZD1cIk0wLDQsNywwVjhaXCIvPlxuICAgICAgPC9zdmc+YDtcbn1cbmZ1bmN0aW9uIGxvY2F0aW9uU1ZHKGFwcGVhcmFuY2UsIGxvY2F0aW9uKSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgY29uc3QgY29sb3IgPSBhcHBlYXJhbmNlID09PSBcImRhcmtcIiA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIjtcbiAgICBjb25zdCBmaWxsID0gbG9jYXRpb24gPT09IFwibG9jYXRpbmdcIiA/IGNvbG9yIDogXCJ0cmFuc3BhcmVudFwiO1xuICAgIHJldHVybiBgPHN2ZyB3aWR0aD1cIjE2cHhcIiBoZWlnaHQ9XCIxNnB4XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPGcgY2xhc3M9XCJiXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuNSA0KVwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBzdHJva2UtYWxpZ249XCJpbnNpZGVcIiBzdHJva2U9XCIke2NvbG9yfVwiIGZpbGw9XCIke2ZpbGx9XCIgc3Ryb2tlLWRhc2hvZmZzZXQ9XCIxXCIgc3Ryb2tlLXdpZHRoPVwiMVwiPlxuICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJjXCIgZD1cIk01Ljk1NSwxMC41LDEwLjUsMCwwLDQuNTQ1SDUuOTU1WlwiLz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5gO1xufVxuZnVuY3Rpb24gYmF0dGVyeVNWRyhhcHBlYXJhbmNlLCBiYXR0ZXJ5TGV2ZWwpIHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBjb25zdCBjb2xvciA9IGFwcGVhcmFuY2UgPT09IFwiZGFya1wiID8gXCJibGFja1wiIDogXCJ3aGl0ZVwiO1xuICAgIGNvbnN0IGJhdHRlcnlKdWljZUNvbG9yID0gYmF0dGVyeUxldmVsIDw9IDEwID8gXCJyZWRcIiA6IGJhdHRlcnlMZXZlbCA8PSAyMCA/IFwiI0ZGQ0MwMVwiIDogY29sb3I7XG4gICAgcmV0dXJuIGA8c3ZnIHdpZHRoPVwiMjVweFwiIGhlaWdodD1cIjEycHhcIiB2aWV3Qm94PVwiMCAwIDI1IDEyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICA8ZyBpZD1cIlN5bWJvbHNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwiQmFycy0vLVN0YXR1cy1CYXItLy1pUGhvbmUtWC0vLU9uLUxpZ2h0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMzYuMDAwMDAwLCAtMTcuMDAwMDAwKVwiPlxuICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJCYXR0ZXJ5XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMzNi4wMDAwMDAsIDE3LjAwMDAwMClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIkJvcmRlclwiIHN0cm9rZT1cIiR7Y29sb3J9XCIgb3BhY2l0eT1cIjAuMzVcIiB4PVwiMC41XCIgeT1cIjAuODMzMzMzMzMzXCIgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjEwLjMzMzMzMzNcIiByeD1cIjIuNjY2NjY2NzVcIj48L3JlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMyw0IEwyMyw4IEMyMy44MDQ3MzExLDcuNjYxMjIzNDggMjQuMzI4MDM4LDYuODczMTMzMjggMjQuMzI4MDM4LDYgQzI0LjMyODAzOCw1LjEyNjg2NjcyIDIzLjgwNDczMTEsNC4zMzg3NzY1MiAyMyw0XCIgaWQ9XCJDYXBcIiBmaWxsPVwiJHtjb2xvcn1cIiBmaWxsLXJ1bGU9XCJub256ZXJvXCIgb3BhY2l0eT1cIjAuNFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD1cIkNhcGFjaXR5XCIgZmlsbD1cIiR7YmF0dGVyeUp1aWNlQ29sb3J9XCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIHg9XCIyXCIgeT1cIjIuMzMzMzMzMzNcIiBoZWlnaHQ9XCI3LjMzMzMzMzMzXCIgcng9XCIxLjMzMzMzMzM3XCIgd2lkdGg9XCIke01hdGgucm91bmQoKGJhdHRlcnlMZXZlbCAvIDEwMCkgKiAxNyArIDEpfVwiPjwvcmVjdD5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPmA7XG59XG5mdW5jdGlvbiBzaWduYWxTVkcoYXBwZWFyYW5jZSwgc2lnbmFsTGV2ZWwpIHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICBjb25zdCBjb2xvciA9IGFwcGVhcmFuY2UgPT09IFwiZGFya1wiID8gXCJibGFja1wiIDogXCJ3aGl0ZVwiO1xuICAgIHJldHVybiBgPHN2ZyB3aWR0aD1cIjE3LjVweFwiIGhlaWdodD1cIjEycHhcIiB2aWV3Qm94PVwiMCAwIDE4IDEyXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICAgICAgICA8ZyBpZD1cIlN5bWJvbHNcIiBzdHJva2U9XCJub25lXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwiQmFycy0vLVN0YXR1cy1CYXItLy1pUGhvbmUtWC0vLU9uLUxpZ2h0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTMuMDAwMDAwLCAtMTcuMDAwMDAwKVwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIiBmaWxsPVwiJHtjb2xvcn1cIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI5NS42NjY2NjcsMjQuMzMzMzMzMyBDMjk2LjIxODk1MSwyNC4zMzMzMzMzIDI5Ni42NjY2NjcsMjQuNzgxMDQ4NiAyOTYuNjY2NjY3LDI1LjMzMzMzMzMgTDI5Ni42NjY2NjcsMjcuMzMzMzMzMyBDMjk2LjY2NjY2NywyNy44ODU2MTgxIDI5Ni4yMTg5NTEsMjguMzMzMzMzMyAyOTUuNjY2NjY3LDI4LjMzMzMzMzMgTDI5NC42NjY2NjcsMjguMzMzMzMzMyBDMjk0LjExNDM4MiwyOC4zMzMzMzMzIDI5My42NjY2NjcsMjcuODg1NjE4MSAyOTMuNjY2NjY3LDI3LjMzMzMzMzMgTDI5My42NjY2NjcsMjUuMzMzMzMzMyBDMjkzLjY2NjY2NywyNC43ODEwNDg2IDI5NC4xMTQzODIsMjQuMzMzMzMzMyAyOTQuNjY2NjY3LDI0LjMzMzMzMzMgTDI5NS42NjY2NjcsMjQuMzMzMzMzMyBaXCIgb3BhY2l0eT1cIiR7c2lnbmFsTGV2ZWwgIT0gMCA/IDEgOiAwLjR9XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjk5LjMzMzMzMywyMi4zMzMzMzMzIEwzMDAuMzMzMzMzLDIyLjMzMzMzMzMgQzMwMC44ODU2MTgsMjIuMzMzMzMzMyAzMDEuMzMzMzMzLDIyLjc4MTA0ODYgMzAxLjMzMzMzMywyMy4zMzMzMzMzIEwzMDEuMzMzMzMzLDI3LjMzMzMzMzMgQzMwMS4zMzMzMzMsMjcuODg1NjE4MSAzMDAuODg1NjE4LDI4LjMzMzMzMzMgMzAwLjMzMzMzMywyOC4zMzMzMzMzIEwyOTkuMzMzMzMzLDI4LjMzMzMzMzMgQzI5OC43ODEwNDksMjguMzMzMzMzMyAyOTguMzMzMzMzLDI3Ljg4NTYxODEgMjk4LjMzMzMzMywyNy4zMzMzMzMzIEwyOTguMzMzMzMzLDIzLjMzMzMzMzMgQzI5OC4zMzMzMzMsMjIuNzgxMDQ4NiAyOTguNzgxMDQ5LDIyLjMzMzMzMzMgMjk5LjMzMzMzMywyMi4zMzMzMzMzIFpcIiBvcGFjaXR5PVwiJHtzaWduYWxMZXZlbCA+PSAyNSA/IDEgOiAwLjR9XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA0LDIwIEwzMDUsMjAgQzMwNS41NTIyODUsMjAgMzA2LDIwLjQ0NzcxNTMgMzA2LDIxIEwzMDYsMjcuMzMzMzMzMyBDMzA2LDI3Ljg4NTYxODEgMzA1LjU1MjI4NSwyOC4zMzMzMzMzIDMwNSwyOC4zMzMzMzMzIEwzMDQsMjguMzMzMzMzMyBDMzAzLjQ0NzcxNSwyOC4zMzMzMzMzIDMwMywyNy44ODU2MTgxIDMwMywyNy4zMzMzMzMzIEwzMDMsMjEgQzMwMywyMC40NDc3MTUzIDMwMy40NDc3MTUsMjAgMzA0LDIwIFpcIiBvcGFjaXR5PVwiJHtzaWduYWxMZXZlbCA+PSA1MCA/IDEgOiAwLjR9XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzA4LjY2NjY2NywxNy42NjY2NjY3IEwzMDkuNjY2NjY3LDE3LjY2NjY2NjcgQzMxMC4yMTg5NTEsMTcuNjY2NjY2NyAzMTAuNjY2NjY3LDE4LjExNDM4MTkgMzEwLjY2NjY2NywxOC42NjY2NjY3IEwzMTAuNjY2NjY3LDI3LjMzMzMzMzMgQzMxMC42NjY2NjcsMjcuODg1NjE4MSAzMTAuMjE4OTUxLDI4LjMzMzMzMzMgMzA5LjY2NjY2NywyOC4zMzMzMzMzIEwzMDguNjY2NjY3LDI4LjMzMzMzMzMgQzMwOC4xMTQzODIsMjguMzMzMzMzMyAzMDcuNjY2NjY3LDI3Ljg4NTYxODEgMzA3LjY2NjY2NywyNy4zMzMzMzMzIEwzMDcuNjY2NjY3LDE4LjY2NjY2NjcgQzMwNy42NjY2NjcsMTguMTE0MzgxOSAzMDguMTE0MzgyLDE3LjY2NjY2NjcgMzA4LjY2NjY2NywxNy42NjY2NjY3IFpcIiBvcGFjaXR5PVwiJHtzaWduYWxMZXZlbCA+PSA3NSA/IDEgOiAwLjR9XCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9nPlxuICAgICAgPC9zdmc+YDtcbn1cbmZ1bmN0aW9uIHdpZmlTVkcoYXBwZWFyYW5jZSwgd2lmaUxldmVsKSB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgY29uc3QgY29sb3IgPSBhcHBlYXJhbmNlID09PSBcImRhcmtcIiA/IFwiYmxhY2tcIiA6IFwid2hpdGVcIjtcbiAgICByZXR1cm4gYDxzdmcgd2lkdGg9XCIxNXB4XCIgdmlld0JveD1cIjAgMCAxNiAxMlwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgICAgICAgPGcgaWQ9XCJTeW1ib2xzXCIgZmlsbD1cIm5vbmVcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCI+XG4gICAgICAgICAgICAgIDxnIGlkPVwiQmFycy0vLVN0YXR1cy1CYXItLy1pUGhvbmUtWC0vLU9uLUxpZ2h0XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMTUuMDAwMDAwLCAtMTcuMDAwMDAwKVwiIGZpbGw9XCIke2NvbG9yfVwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMyNS41NDkzMzMsMjYuMTg4IEMzMjUuNjExMDg3LDI2LjEyNzM5NCAzMjUuNjQ1MDk1LDI2LjA0Mzk5MTkgMzI1LjY0MzMyOCwyNS45NTc0ODUgQzMyNS42NDE1NjEsMjUuODcwOTc4MiAzMjUuNjA0MTc2LDI1Ljc4OTAzNDIgMzI1LjU0LDI1LjczMSBDMzI0LjI2NDQyOCwyNC42NTIxMTYyIDMyMi4zOTYyMzgsMjQuNjUyMTE2MiAzMjEuMTIwNjY3LDI1LjczMSBDMzIxLjA1NjQ0NiwyNS43ODg5ODc1IDMyMS4wMTksMjUuODcwOTA1NyAzMjEuMDE3MTcsMjUuOTU3NDEzIEMzMjEuMDE1MzQsMjYuMDQzOTIwMyAzMjEuMDQ5Mjg5LDI2LjEyNzM0ODcgMzIxLjExMSwyNi4xODggTDMyMy4xMDg2NjcsMjguMjAzNjY2NyBDMzIzLjE2NzIxNywyOC4yNjI5MDU3IDMyMy4yNDcwNDIsMjguMjk2MjQ0MyAzMjMuMzMwMzMzLDI4LjI5NjI0NDMgQzMyMy40MTM2MjQsMjguMjk2MjQ0MyAzMjMuNDkzNDUsMjguMjYyOTA1NyAzMjMuNTUyLDI4LjIwMzY2NjcgTDMyNS41NDkzMzMsMjYuMTg4IFpcIiBvcGFjaXR5PVwiJHt3aWZpTGV2ZWwgIT0gMCA/IDEgOiAwLjR9XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIzLjMzMDMzMywyMy40MDM2NjY3IEMzMjQuNTQ3ODIzLDIzLjQwMzU5MjEgMzI1LjcyMTg2NSwyMy44NTYxMjQ1IDMyNi42MjQzMzMsMjQuNjczMzMzMyBDMzI2Ljc0NjM5NywyNC43ODkzMTM5IDMyNi45Mzg2NzgsMjQuNzg2Nzk5NCAzMjcuMDU3NjY3LDI0LjY2NzY2NjcgTDMyOC4yMTIzMzMsMjMuNTAxIEMzMjguMjczMTQxLDIzLjQzOTgwNSAzMjguMzA2ODgsMjMuMzU2Nzg4NyAzMjguMzA2MDAzLDIzLjI3MDUyMzkgQzMyOC4zMDUxMjYsMjMuMTg0MjU5MiAzMjguMjY5NzA2LDIzLjEwMTk0NiAzMjguMjA3NjY3LDIzLjA0MiBDMzI1LjQ1OTQ2OCwyMC40ODU2MTc3IDMyMS4yMDM1MzIsMjAuNDg1NjE3NyAzMTguNDU1MzMzLDIzLjA0MiBDMzE4LjM5MzI1NiwyMy4xMDE5NDUzIDMxOC4zNTc4MzcsMjMuMTg0Mjk5NyAzMTguMzU3MDIzLDIzLjI3MDU5MjMgQzMxOC4zNTYyMDgsMjMuMzU2ODg1IDMxOC4zOTAwNjUsMjMuNDM5ODkzNCAzMTguNDUxLDIzLjUwMSBMMzE5LjYwNTMzMywyNC42Njc2NjY3IEMzMTkuNzI0MzIyLDI0Ljc4Njc5OTQgMzE5LjkxNjYwMywyNC43ODkzMTM5IDMyMC4wMzg2NjcsMjQuNjczMzMzMyBDMzIwLjk0MDUzOSwyMy44NTY2NjQ1IDMyMi4xMTM2NDksMjMuNDA0MTcwOCAzMjMuMzMwMzMzLDIzLjQwMzY2NjcgWlwiIG9wYWNpdHk9XCIke3dpZmlMZXZlbCA+PSAzMyA/IDEgOiAwLjR9XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIzLjMzMDMzMywxOS42MDggQzMyNS41NDYyMjYsMTkuNjA4MDk3MSAzMjcuNjc3Mzg2LDIwLjQ1OTUzNDcgMzI5LjI4MzMzMywyMS45ODYzMzMzIEMzMjkuNDA0MjY1LDIyLjEwNDIwNzkgMzI5LjU5NzU2MiwyMi4xMDI3MjEgMzI5LjcxNjY2NywyMS45ODMgTDMzMC44NzI2NjcsMjAuODE2MzMzMyBDMzMwLjkzMjk3NSwyMC43NTU2MTEyIDMzMC45NjY1OTksMjAuNjczMzU5NSAzMzAuOTY2MDk4LDIwLjU4Nzc3OTIgQzMzMC45NjU1OTgsMjAuNTAyMTk4OCAzMzAuOTMxMDE0LDIwLjQyMDM0NiAzMzAuODcsMjAuMzYwMzMzMyBDMzI2LjY1NDkwMiwxNi4zMjA3ODU4IDMyMC4wMDUwOTgsMTYuMzIwNzg1OCAzMTUuNzksMjAuMzYwMzMzMyBDMzE1LjcyODk0MSwyMC40MjAzMDE1IDMxNS42OTQyOTcsMjAuNTAyMTI5NCAzMTUuNjkzNzM0LDIwLjU4NzcwOTkgQzMxNS42OTMxNzEsMjAuNjczMjkwMyAzMTUuNzI2NzM2LDIwLjc1NTU2NyAzMTUuNzg3LDIwLjgxNjMzMzMgTDMxNi45NDMzMzMsMjEuOTgzIEMzMTcuMDYyMzYyLDIyLjEwMjkwMTcgMzE3LjI1NTgwOCwyMi4xMDQzODk3IDMxNy4zNzY2NjcsMjEuOTg2MzMzMyBDMzE4Ljk4MjgxOSwyMC40NTk0MzQ0IDMyMS4xMTQyMjMsMTkuNjA3OTk0NCAzMjMuMzMwMzMzLDE5LjYwOCBaXCIgb3BhY2l0eT1cIiR7d2lmaUxldmVsID49IDY2ID8gMSA6IDAuNH1cIj48L3BhdGg+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICA8L3N2Zz5gO1xufVxuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiU3RhdHVzQmFyXCIsIGNoaWxkcmVuOiBmYWxzZSwgdHlwZTogXCJjb21wb25lbnRcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/Status Bar/Status_Bar.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["@framer/framer.device-hand-iphone-1"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-1 */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-1/build/index.js")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-1","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    return package
                }

                packages["@framer/framer.device-hand-iphone-2"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-2 */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-hand-iphone-2/build/index.js")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-2","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    return package
                }

                packages["@framer/framer.device-skin-apple-iphone-x-silver"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-x-silver */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-x-silver/build/index.js")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-x-silver","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    return package
                }

                packages["@framer/framer.device-skin-apple-iphone-x-space-gray"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone-x-space-gray */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone-x-space-gray/build/index.js")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone-x-space-gray","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    return package
                }

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.9.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^6.1.0","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^22.4.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, version, devDependencies, peerDependencies, framer, keywords, author, name, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","version":"1.17.0","devDependencies":{"@framer/framer.device-hand-iphone-1":"1.0.0","@framer/framer.device-hand-iphone-2":"1.0.0","@framer/framer.device-skin-apple-iphone-x-silver":"1.0.0","@framer/framer.device-skin-apple-iphone-x-space-gray":"1.0.0","@types/react":"^16.0.31","framer":"0.9.7"},"peerDependencies":{"framer":"0.9.7","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"2970ec35-535a-4d7f-96d5-57c611da38d0","displayName":"iPhone X Kit"},"keywords":["Apple","iOS","iPhone","Kit","UI"],"author":"Kasimir Hirvikoski","name":"@framer/kasimir.iphone-x-kit"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});


/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.tsx": "./code/App.tsx",
	"./animate/index.js": "./code/animate/index.js",
	"./animate/pageHandle.js": "./code/animate/pageHandle.js",
	"./animate/showNose1.js": "./code/animate/showNose1.js",
	"./animate/showNose2.js": "./code/animate/showNose2.js",
	"./animate/showNose3.js": "./code/animate/showNose3.js",
	"./animate/showSnow.js": "./code/animate/showSnow.js",
	"./canvas.tsx": "./code/canvas.tsx",
	"./datas/index.js": "./code/datas/index.js",
	"./datas/nose1.js": "./code/datas/nose1.js",
	"./datas/nose2.js": "./code/datas/nose2.js",
	"./datas/nose3.js": "./code/datas/nose3.js",
	"./datas/thanks.js": "./code/datas/thanks.js",
	"./utils.js": "./code/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst datas_1 = __webpack_require__(/*! ./datas */ \"./code/datas/index.js\");\nconst animate_1 = __webpack_require__(/*! ./animate */ \"./code/animate/index.js\");\nexports.Pages = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        onChangePage: animate_1.pageHandle,\n    };\n};\n// nose\nexports.NoseWrap01 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: datas_1.nose1.wrapTop,\n        left: datas_1.nose1.wrapLeft,\n        opacity: datas_1.nose1.wrapOpacity,\n    };\n};\nexports.NoseImg = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose1.noseImgOpacity,\n    };\n};\nexports.Nose01 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: datas_1.nose1.scale,\n        top: datas_1.nose1.top,\n        radius: datas_1.nose1.radius,\n        width: datas_1.nose1.width,\n        height: datas_1.nose1.height,\n        shadows: datas_1.nose1.shadow,\n        blur: datas_1.nose1.blur,\n        background: datas_1.nose1.background,\n        style: {\n            transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',\n        },\n        onTap: animate_1.showNose1,\n    };\n};\nexports.CoverImage01 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        // top: nose1.coverImgTop,\n        opacity: datas_1.nose1.coverImgOpacity,\n    };\n};\nexports.TitleOverlay01 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: datas_1.nose1.titleOverlayTop,\n    };\n};\nexports.Title01 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose1.textsTitleOpacity,\n        left: datas_1.nose1.textsTitleLeft,\n        scale: datas_1.nose1.textsTitleScale,\n    };\n};\nexports.Author01 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose1.textsOpacity,\n        left: datas_1.nose1.textsLeft,\n    };\n};\n// nose2\nexports.NoseWrap02 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: datas_1.nose2.wrapTop,\n        left: datas_1.nose2.wrapLeft,\n        opacity: datas_1.nose2.wrapOpacity,\n    };\n};\nexports.Nose02 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: datas_1.nose2.scale,\n        top: datas_1.nose2.top,\n        radius: datas_1.nose2.radius,\n        width: datas_1.nose2.width,\n        height: datas_1.nose2.height,\n        shadows: datas_1.nose2.shadow,\n        blur: datas_1.nose2.blur,\n        background: datas_1.nose2.background,\n        style: {\n            transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',\n        },\n        onTap: animate_1.showNose1,\n    };\n};\nexports.CoverImage02 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        // top: nose2.coverImgTop,\n        opacity: datas_1.nose2.coverImgOpacity,\n    };\n};\nexports.TitleOverlay02 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: datas_1.nose2.titleOverlayTop,\n    };\n};\nexports.Title02 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose2.textsTitleOpacity,\n        left: datas_1.nose2.textsTitleLeft,\n        scale: datas_1.nose2.textsTitleScale,\n    };\n};\nexports.Author02 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose2.textsOpacity,\n        left: datas_1.nose2.textsLeft,\n    };\n};\n// nose3\nexports.NoseWrap03 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: datas_1.nose3.wrapTop,\n        left: datas_1.nose3.wrapLeft,\n        opacity: datas_1.nose3.wrapOpacity,\n    };\n};\nexports.Nose03 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: datas_1.nose3.scale,\n        top: datas_1.nose3.top,\n        radius: datas_1.nose3.radius,\n        width: datas_1.nose3.width,\n        height: datas_1.nose3.height,\n        shadows: datas_1.nose3.shadow,\n        blur: datas_1.nose3.blur,\n        background: datas_1.nose3.background,\n        style: {\n            transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',\n        },\n        onTap: animate_1.showNose1,\n    };\n};\nexports.CoverImage03 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose3.coverImgOpacity,\n    };\n};\nexports.TitleOverlay03 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: datas_1.nose3.titleOverlayTop,\n    };\n};\nexports.Title03 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose3.textsTitleOpacity,\n        left: datas_1.nose3.textsTitleLeft,\n        scale: datas_1.nose3.textsTitleScale,\n    };\n};\nexports.Author03 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose3.textsOpacity,\n        left: datas_1.nose3.textsLeft,\n    };\n};\nexports.__info__ = [{ name: \"Pages\", type: \"override\" }, { name: \"NoseWrap01\", type: \"override\" }, { name: \"NoseImg\", type: \"override\" }, { name: \"Nose01\", type: \"override\" }, { name: \"CoverImage01\", type: \"override\" }, { name: \"TitleOverlay01\", type: \"override\" }, { name: \"Title01\", type: \"override\" }, { name: \"Author01\", type: \"override\" }, { name: \"NoseWrap02\", type: \"override\" }, { name: \"Nose02\", type: \"override\" }, { name: \"CoverImage02\", type: \"override\" }, { name: \"TitleOverlay02\", type: \"override\" }, { name: \"Title02\", type: \"override\" }, { name: \"Author02\", type: \"override\" }, { name: \"NoseWrap03\", type: \"override\" }, { name: \"Nose03\", type: \"override\" }, { name: \"CoverImage03\", type: \"override\" }, { name: \"TitleOverlay03\", type: \"override\" }, { name: \"Title03\", type: \"override\" }, { name: \"Author03\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrQ0FBa0MsR0FBRyx1Q0FBdUMsR0FBRyxvQ0FBb0MsR0FBRyxtQ0FBbUMsR0FBRyx5Q0FBeUMsR0FBRywyQ0FBMkMsR0FBRyxvQ0FBb0MsR0FBRyxxQ0FBcUMsR0FBRyx1Q0FBdUMsR0FBRyxtQ0FBbUMsR0FBRyx5Q0FBeUMsR0FBRywyQ0FBMkMsR0FBRyxvQ0FBb0MsR0FBRyxxQ0FBcUMsR0FBRyx1Q0FBdUMsR0FBRyxtQ0FBbUMsR0FBRyx5Q0FBeUMsR0FBRywyQ0FBMkMsR0FBRyxvQ0FBb0MsR0FBRyxxQ0FBcUMiLCJmaWxlIjoiLi9jb2RlL0FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGRhdGFzXzEgPSByZXF1aXJlKFwiLi9kYXRhc1wiKTtcbmNvbnN0IGFuaW1hdGVfMSA9IHJlcXVpcmUoXCIuL2FuaW1hdGVcIik7XG5leHBvcnRzLlBhZ2VzID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uQ2hhbmdlUGFnZTogYW5pbWF0ZV8xLnBhZ2VIYW5kbGUsXG4gICAgfTtcbn07XG4vLyBub3NlXG5leHBvcnRzLk5vc2VXcmFwMDEgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBkYXRhc18xLm5vc2UxLndyYXBUb3AsXG4gICAgICAgIGxlZnQ6IGRhdGFzXzEubm9zZTEud3JhcExlZnQsXG4gICAgICAgIG9wYWNpdHk6IGRhdGFzXzEubm9zZTEud3JhcE9wYWNpdHksXG4gICAgfTtcbn07XG5leHBvcnRzLk5vc2VJbWcgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlMS5ub3NlSW1nT3BhY2l0eSxcbiAgICB9O1xufTtcbmV4cG9ydHMuTm9zZTAxID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjYWxlOiBkYXRhc18xLm5vc2UxLnNjYWxlLFxuICAgICAgICB0b3A6IGRhdGFzXzEubm9zZTEudG9wLFxuICAgICAgICByYWRpdXM6IGRhdGFzXzEubm9zZTEucmFkaXVzLFxuICAgICAgICB3aWR0aDogZGF0YXNfMS5ub3NlMS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkYXRhc18xLm5vc2UxLmhlaWdodCxcbiAgICAgICAgc2hhZG93czogZGF0YXNfMS5ub3NlMS5zaGFkb3csXG4gICAgICAgIGJsdXI6IGRhdGFzXzEubm9zZTEuYmx1cixcbiAgICAgICAgYmFja2dyb3VuZDogZGF0YXNfMS5ub3NlMS5iYWNrZ3JvdW5kLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2JvcmRlci1yYWRpdXMgMS4ycyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAxcyBlYXNlLW91dCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9uVGFwOiBhbmltYXRlXzEuc2hvd05vc2UxLFxuICAgIH07XG59O1xuZXhwb3J0cy5Db3ZlckltYWdlMDEgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gdG9wOiBub3NlMS5jb3ZlckltZ1RvcCxcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlMS5jb3ZlckltZ09wYWNpdHksXG4gICAgfTtcbn07XG5leHBvcnRzLlRpdGxlT3ZlcmxheTAxID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogZGF0YXNfMS5ub3NlMS50aXRsZU92ZXJsYXlUb3AsXG4gICAgfTtcbn07XG5leHBvcnRzLlRpdGxlMDEgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlMS50ZXh0c1RpdGxlT3BhY2l0eSxcbiAgICAgICAgbGVmdDogZGF0YXNfMS5ub3NlMS50ZXh0c1RpdGxlTGVmdCxcbiAgICAgICAgc2NhbGU6IGRhdGFzXzEubm9zZTEudGV4dHNUaXRsZVNjYWxlLFxuICAgIH07XG59O1xuZXhwb3J0cy5BdXRob3IwMSA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhc18xLm5vc2UxLnRleHRzT3BhY2l0eSxcbiAgICAgICAgbGVmdDogZGF0YXNfMS5ub3NlMS50ZXh0c0xlZnQsXG4gICAgfTtcbn07XG4vLyBub3NlMlxuZXhwb3J0cy5Ob3NlV3JhcDAyID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogZGF0YXNfMS5ub3NlMi53cmFwVG9wLFxuICAgICAgICBsZWZ0OiBkYXRhc18xLm5vc2UyLndyYXBMZWZ0LFxuICAgICAgICBvcGFjaXR5OiBkYXRhc18xLm5vc2UyLndyYXBPcGFjaXR5LFxuICAgIH07XG59O1xuZXhwb3J0cy5Ob3NlMDIgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGFzXzEubm9zZTIuc2NhbGUsXG4gICAgICAgIHRvcDogZGF0YXNfMS5ub3NlMi50b3AsXG4gICAgICAgIHJhZGl1czogZGF0YXNfMS5ub3NlMi5yYWRpdXMsXG4gICAgICAgIHdpZHRoOiBkYXRhc18xLm5vc2UyLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRhdGFzXzEubm9zZTIuaGVpZ2h0LFxuICAgICAgICBzaGFkb3dzOiBkYXRhc18xLm5vc2UyLnNoYWRvdyxcbiAgICAgICAgYmx1cjogZGF0YXNfMS5ub3NlMi5ibHVyLFxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXRhc18xLm5vc2UyLmJhY2tncm91bmQsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnYm9yZGVyLXJhZGl1cyAxLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDFzIGVhc2Utb3V0JyxcbiAgICAgICAgfSxcbiAgICAgICAgb25UYXA6IGFuaW1hdGVfMS5zaG93Tm9zZTEsXG4gICAgfTtcbn07XG5leHBvcnRzLkNvdmVySW1hZ2UwMiA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICAvLyB0b3A6IG5vc2UyLmNvdmVySW1nVG9wLFxuICAgICAgICBvcGFjaXR5OiBkYXRhc18xLm5vc2UyLmNvdmVySW1nT3BhY2l0eSxcbiAgICB9O1xufTtcbmV4cG9ydHMuVGl0bGVPdmVybGF5MDIgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBkYXRhc18xLm5vc2UyLnRpdGxlT3ZlcmxheVRvcCxcbiAgICB9O1xufTtcbmV4cG9ydHMuVGl0bGUwMiA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhc18xLm5vc2UyLnRleHRzVGl0bGVPcGFjaXR5LFxuICAgICAgICBsZWZ0OiBkYXRhc18xLm5vc2UyLnRleHRzVGl0bGVMZWZ0LFxuICAgICAgICBzY2FsZTogZGF0YXNfMS5ub3NlMi50ZXh0c1RpdGxlU2NhbGUsXG4gICAgfTtcbn07XG5leHBvcnRzLkF1dGhvcjAyID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGRhdGFzXzEubm9zZTIudGV4dHNPcGFjaXR5LFxuICAgICAgICBsZWZ0OiBkYXRhc18xLm5vc2UyLnRleHRzTGVmdCxcbiAgICB9O1xufTtcbi8vIG5vc2UzXG5leHBvcnRzLk5vc2VXcmFwMDMgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9wOiBkYXRhc18xLm5vc2UzLndyYXBUb3AsXG4gICAgICAgIGxlZnQ6IGRhdGFzXzEubm9zZTMud3JhcExlZnQsXG4gICAgICAgIG9wYWNpdHk6IGRhdGFzXzEubm9zZTMud3JhcE9wYWNpdHksXG4gICAgfTtcbn07XG5leHBvcnRzLk5vc2UwMyA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2FsZTogZGF0YXNfMS5ub3NlMy5zY2FsZSxcbiAgICAgICAgdG9wOiBkYXRhc18xLm5vc2UzLnRvcCxcbiAgICAgICAgcmFkaXVzOiBkYXRhc18xLm5vc2UzLnJhZGl1cyxcbiAgICAgICAgd2lkdGg6IGRhdGFzXzEubm9zZTMud2lkdGgsXG4gICAgICAgIGhlaWdodDogZGF0YXNfMS5ub3NlMy5oZWlnaHQsXG4gICAgICAgIHNoYWRvd3M6IGRhdGFzXzEubm9zZTMuc2hhZG93LFxuICAgICAgICBibHVyOiBkYXRhc18xLm5vc2UzLmJsdXIsXG4gICAgICAgIGJhY2tncm91bmQ6IGRhdGFzXzEubm9zZTMuYmFja2dyb3VuZCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItcmFkaXVzIDEuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMXMgZWFzZS1vdXQnLFxuICAgICAgICB9LFxuICAgICAgICBvblRhcDogYW5pbWF0ZV8xLnNob3dOb3NlMSxcbiAgICB9O1xufTtcbmV4cG9ydHMuQ292ZXJJbWFnZTAzID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGRhdGFzXzEubm9zZTMuY292ZXJJbWdPcGFjaXR5LFxuICAgIH07XG59O1xuZXhwb3J0cy5UaXRsZU92ZXJsYXkwMyA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IGRhdGFzXzEubm9zZTMudGl0bGVPdmVybGF5VG9wLFxuICAgIH07XG59O1xuZXhwb3J0cy5UaXRsZTAzID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGRhdGFzXzEubm9zZTMudGV4dHNUaXRsZU9wYWNpdHksXG4gICAgICAgIGxlZnQ6IGRhdGFzXzEubm9zZTMudGV4dHNUaXRsZUxlZnQsXG4gICAgICAgIHNjYWxlOiBkYXRhc18xLm5vc2UzLnRleHRzVGl0bGVTY2FsZSxcbiAgICB9O1xufTtcbmV4cG9ydHMuQXV0aG9yMDMgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlMy50ZXh0c09wYWNpdHksXG4gICAgICAgIGxlZnQ6IGRhdGFzXzEubm9zZTMudGV4dHNMZWZ0LFxuICAgIH07XG59O1xuZXhwb3J0cy5fX2luZm9fXyA9IFt7IG5hbWU6IFwiUGFnZXNcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJOb3NlV3JhcDAxXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiTm9zZUltZ1wiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIk5vc2UwMVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkNvdmVySW1hZ2UwMVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlRpdGxlT3ZlcmxheTAxXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiVGl0bGUwMVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkF1dGhvcjAxXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiTm9zZVdyYXAwMlwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIk5vc2UwMlwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkNvdmVySW1hZ2UwMlwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlRpdGxlT3ZlcmxheTAyXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiVGl0bGUwMlwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkF1dGhvcjAyXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiTm9zZVdyYXAwM1wiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIk5vc2UwM1wiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkNvdmVySW1hZ2UwM1wiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlRpdGxlT3ZlcmxheTAzXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiVGl0bGUwM1wiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIkF1dGhvcjAzXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/App.tsx\n");

/***/ }),

/***/ "./code/animate/index.js":
/*!*******************************!*\
  !*** ./code/animate/index.js ***!
  \*******************************/
/*! exports provided: showNose1, showNose2, showNose3, showSnow, pageHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showNose1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showNose1 */ \"./code/animate/showNose1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showNose1\", function() { return _showNose1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _showNose2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showNose2 */ \"./code/animate/showNose2.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showNose2\", function() { return _showNose2__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _showNose3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showNose3 */ \"./code/animate/showNose3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showNose3\", function() { return _showNose3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _showSnow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showSnow */ \"./code/animate/showSnow.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showSnow\", function() { return _showSnow__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _pageHandle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pageHandle */ \"./code/animate/pageHandle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pageHandle\", function() { return _pageHandle__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVEiLCJmaWxlIjoiLi9jb2RlL2FuaW1hdGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvd05vc2UxIGZyb20gJy4vc2hvd05vc2UxJ1xuaW1wb3J0IHNob3dOb3NlMiBmcm9tICcuL3Nob3dOb3NlMidcbmltcG9ydCBzaG93Tm9zZTMgZnJvbSAnLi9zaG93Tm9zZTMnXG5pbXBvcnQgc2hvd1Nub3cgZnJvbSAnLi9zaG93U25vdydcbmltcG9ydCBwYWdlSGFuZGxlIGZyb20gJy4vcGFnZUhhbmRsZSdcblxuZXhwb3J0IHsgc2hvd05vc2UxLCBzaG93Tm9zZTIsIHNob3dOb3NlMywgc2hvd1Nub3csIHBhZ2VIYW5kbGUgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/animate/index.js\n");

/***/ }),

/***/ "./code/animate/pageHandle.js":
/*!************************************!*\
  !*** ./code/animate/pageHandle.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animate */ \"./code/animate/index.js\");\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datas */ \"./code/datas/index.js\");\n\n\n\n\n\nconst noses = [_datas__WEBPACK_IMPORTED_MODULE_2__[\"nose1\"], _datas__WEBPACK_IMPORTED_MODULE_2__[\"nose2\"], _datas__WEBPACK_IMPORTED_MODULE_2__[\"nose3\"]]\nconst animations = [_animate__WEBPACK_IMPORTED_MODULE_1__[\"showNose1\"], _animate__WEBPACK_IMPORTED_MODULE_1__[\"showNose2\"], _animate__WEBPACK_IMPORTED_MODULE_1__[\"showNose3\"]]\nconst lock = [false, false, false]\n\nconst fadeOthers = index => {\n  for (let i = 0; i < noses.length; i++) {\n    if (i == index)\n      framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(noses[i].wrapOpacity, 0.99, { duration: 0.3 })\n    else framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(noses[i].wrapOpacity, 0.55, { duration: 0.3 })\n  }\n}\n\nconst pageHandle = index => {\n  if (!lock[index]) {\n    console.log('animate! - ', index)\n    animations[index]()\n    lock[index] = true\n  }\n  fadeOthers(index)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pageHandle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvcGFnZUhhbmRsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFrQjtBQUN3Qjs7QUFFWjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBLDRGQUFxRCxnQkFBZ0I7QUFDckUsK0ZBQXdELGdCQUFnQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9jb2RlL2FuaW1hdGUvcGFnZUhhbmRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdmcmFtZXInXG5pbXBvcnQgeyBzaG93Tm9zZTEsIHNob3dOb3NlMiwgc2hvd05vc2UzIH0gZnJvbSAnLi4vYW5pbWF0ZSdcblxuaW1wb3J0IHsgbm9zZTEsIG5vc2UyLCBub3NlMyB9IGZyb20gJy4uL2RhdGFzJ1xuXG5jb25zdCBub3NlcyA9IFtub3NlMSwgbm9zZTIsIG5vc2UzXVxuY29uc3QgYW5pbWF0aW9ucyA9IFtzaG93Tm9zZTEsIHNob3dOb3NlMiwgc2hvd05vc2UzXVxuY29uc3QgbG9jayA9IFtmYWxzZSwgZmFsc2UsIGZhbHNlXVxuXG5jb25zdCBmYWRlT3RoZXJzID0gaW5kZXggPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG5vc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGkgPT0gaW5kZXgpXG4gICAgICBhbmltYXRlLmVhc2VJbk91dChub3Nlc1tpXS53cmFwT3BhY2l0eSwgMC45OSwgeyBkdXJhdGlvbjogMC4zIH0pXG4gICAgZWxzZSBhbmltYXRlLmVhc2VJbk91dChub3Nlc1tpXS53cmFwT3BhY2l0eSwgMC41NSwgeyBkdXJhdGlvbjogMC4zIH0pXG4gIH1cbn1cblxuY29uc3QgcGFnZUhhbmRsZSA9IGluZGV4ID0+IHtcbiAgaWYgKCFsb2NrW2luZGV4XSkge1xuICAgIGNvbnNvbGUubG9nKCdhbmltYXRlISAtICcsIGluZGV4KVxuICAgIGFuaW1hdGlvbnNbaW5kZXhdKClcbiAgICBsb2NrW2luZGV4XSA9IHRydWVcbiAgfVxuICBmYWRlT3RoZXJzKGluZGV4KVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlSGFuZGxlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/animate/pageHandle.js\n");

/***/ }),

/***/ "./code/animate/showNose1.js":
/*!***********************************!*\
  !*** ./code/animate/showNose1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datas */ \"./code/datas/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./code/utils.js\");\n\n\n\n\n\nvar lock01 = false\n\nconst showNose1 = async () => {\n  // nose shirink\n  if (!lock01) {\n    _datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].scale.set(0.6)\n    framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].spring(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].scale, 1)\n    lock01 = true\n  }\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(100)\n\n  // animate nose\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: 5,\n      y: 30,\n      blur: 20,\n      spread: 0,\n    },\n  ])\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].noseImgOpacity, 0)\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(1000)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].top, -104)\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(700)\n\n  _datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].radius.set('20px')\n\n  // animate.easeInOut(nose1.radius, '20px')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(700)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].width, 300)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].height, 350)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: -15,\n      y: 4,\n      blur: 20,\n      spread: 0,\n    },\n  ])\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].background, 'white')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(300)\n\n  // animate coverImg\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].coverImgOpacity, 0.99, { duration: 0.3 })\n\n  // animate title\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(800)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose1\"].titleOverlayTop, -54, { duration: 0.6 })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showNose1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvc2hvd05vc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWtCOztBQUVGO0FBQ0E7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhIQUFnRCxnQkFBZ0I7O0FBRWhFO0FBQ0E7QUFDQSwwSEFBNEMsZ0JBQWdCO0FBQzVEOztBQUVBIiwiZmlsZSI6Ii4vY29kZS9hbmltYXRlL3Nob3dOb3NlMS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdmcmFtZXInXG5cbmltcG9ydCB7IG5vc2UxIH0gZnJvbSAnLi4vZGF0YXMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuXG52YXIgbG9jazAxID0gZmFsc2VcblxuY29uc3Qgc2hvd05vc2UxID0gYXN5bmMgKCkgPT4ge1xuICAvLyBub3NlIHNoaXJpbmtcbiAgaWYgKCFsb2NrMDEpIHtcbiAgICBub3NlMS5zY2FsZS5zZXQoMC42KVxuICAgIGFuaW1hdGUuc3ByaW5nKG5vc2UxLnNjYWxlLCAxKVxuICAgIGxvY2swMSA9IHRydWVcbiAgfVxuXG4gIGF3YWl0IHNsZWVwKDEwMClcblxuICAvLyBhbmltYXRlIG5vc2VcbiAgYW5pbWF0ZS5lYXNlT3V0KG5vc2UxLnNoYWRvdywgW1xuICAgIHtcbiAgICAgIGluc2V0OiBmYWxzZSxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgICB4OiA1LFxuICAgICAgeTogMzAsXG4gICAgICBibHVyOiAyMCxcbiAgICAgIHNwcmVhZDogMCxcbiAgICB9LFxuICBdKVxuICBhbmltYXRlLmVhc2VPdXQobm9zZTEubm9zZUltZ09wYWNpdHksIDApXG5cbiAgYXdhaXQgc2xlZXAoMTAwMClcbiAgYW5pbWF0ZS5lYXNlT3V0KG5vc2UxLnRvcCwgLTEwNClcblxuICBhd2FpdCBzbGVlcCg3MDApXG5cbiAgbm9zZTEucmFkaXVzLnNldCgnMjBweCcpXG5cbiAgLy8gYW5pbWF0ZS5lYXNlSW5PdXQobm9zZTEucmFkaXVzLCAnMjBweCcpXG5cbiAgYXdhaXQgc2xlZXAoNzAwKVxuXG4gIGFuaW1hdGUuZWFzZUluT3V0KG5vc2UxLndpZHRoLCAzMDApXG4gIGFuaW1hdGUuZWFzZUluT3V0KG5vc2UxLmhlaWdodCwgMzUwKVxuICBhbmltYXRlLmVhc2VPdXQobm9zZTEuc2hhZG93LCBbXG4gICAge1xuICAgICAgaW5zZXQ6IGZhbHNlLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICAgIHg6IC0xNSxcbiAgICAgIHk6IDQsXG4gICAgICBibHVyOiAyMCxcbiAgICAgIHNwcmVhZDogMCxcbiAgICB9LFxuICBdKVxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMS5iYWNrZ3JvdW5kLCAnd2hpdGUnKVxuXG4gIGF3YWl0IHNsZWVwKDMwMClcblxuICAvLyBhbmltYXRlIGNvdmVySW1nXG4gIGFuaW1hdGUuZWFzZU91dChub3NlMS5jb3ZlckltZ09wYWNpdHksIDAuOTksIHsgZHVyYXRpb246IDAuMyB9KVxuXG4gIC8vIGFuaW1hdGUgdGl0bGVcbiAgYXdhaXQgc2xlZXAoODAwKVxuICBhbmltYXRlLmVhc2Uobm9zZTEudGl0bGVPdmVybGF5VG9wLCAtNTQsIHsgZHVyYXRpb246IDAuNiB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93Tm9zZTFcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/animate/showNose1.js\n");

/***/ }),

/***/ "./code/animate/showNose2.js":
/*!***********************************!*\
  !*** ./code/animate/showNose2.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datas */ \"./code/datas/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./code/utils.js\");\n\n\n\n\n\nconst showNose2 = async () => {\n  // animate nose\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: 5,\n      y: 30,\n      blur: 20,\n      spread: 0,\n    },\n  ])\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].noseImgOpacity, 0)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].top, -104)\n\n  _datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].radius.set('20px')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(700)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].width, 300)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].height, 350)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: -15,\n      y: 4,\n      blur: 20,\n      spread: 0,\n    },\n  ])\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].background, 'white')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(300)\n\n  // animate coverImg\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].coverImgOpacity, 0.99, { duration: 0.3 })\n\n  // animate title\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(800)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].titleOverlayTop, -54, { duration: 0.6 })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showNose2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvc2hvd05vc2UyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWtCOztBQUVGO0FBQ0E7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhIQUFnRCxnQkFBZ0I7O0FBRWhFO0FBQ0E7QUFDQSwwSEFBNEMsZ0JBQWdCO0FBQzVEOztBQUVBIiwiZmlsZSI6Ii4vY29kZS9hbmltYXRlL3Nob3dOb3NlMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdmcmFtZXInXG5cbmltcG9ydCB7IG5vc2UyIH0gZnJvbSAnLi4vZGF0YXMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBzaG93Tm9zZTIgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGFuaW1hdGUgbm9zZVxuICBhbmltYXRlLmVhc2VPdXQobm9zZTIuc2hhZG93LCBbXG4gICAge1xuICAgICAgaW5zZXQ6IGZhbHNlLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICAgIHg6IDUsXG4gICAgICB5OiAzMCxcbiAgICAgIGJsdXI6IDIwLFxuICAgICAgc3ByZWFkOiAwLFxuICAgIH0sXG4gIF0pXG4gIGFuaW1hdGUuZWFzZU91dChub3NlMi5ub3NlSW1nT3BhY2l0eSwgMClcblxuICBhbmltYXRlLmVhc2VPdXQobm9zZTIudG9wLCAtMTA0KVxuXG4gIG5vc2UyLnJhZGl1cy5zZXQoJzIwcHgnKVxuXG4gIGF3YWl0IHNsZWVwKDcwMClcblxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMi53aWR0aCwgMzAwKVxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMi5oZWlnaHQsIDM1MClcbiAgYW5pbWF0ZS5lYXNlT3V0KG5vc2UyLnNoYWRvdywgW1xuICAgIHtcbiAgICAgIGluc2V0OiBmYWxzZSxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgICB4OiAtMTUsXG4gICAgICB5OiA0LFxuICAgICAgYmx1cjogMjAsXG4gICAgICBzcHJlYWQ6IDAsXG4gICAgfSxcbiAgXSlcbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZTIuYmFja2dyb3VuZCwgJ3doaXRlJylcblxuICBhd2FpdCBzbGVlcCgzMDApXG5cbiAgLy8gYW5pbWF0ZSBjb3ZlckltZ1xuICBhbmltYXRlLmVhc2VPdXQobm9zZTIuY292ZXJJbWdPcGFjaXR5LCAwLjk5LCB7IGR1cmF0aW9uOiAwLjMgfSlcblxuICAvLyBhbmltYXRlIHRpdGxlXG4gIGF3YWl0IHNsZWVwKDgwMClcbiAgYW5pbWF0ZS5lYXNlKG5vc2UyLnRpdGxlT3ZlcmxheVRvcCwgLTU0LCB7IGR1cmF0aW9uOiAwLjYgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd05vc2UyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/animate/showNose2.js\n");

/***/ }),

/***/ "./code/animate/showNose3.js":
/*!***********************************!*\
  !*** ./code/animate/showNose3.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datas */ \"./code/datas/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./code/utils.js\");\n\n\n\n\n\nconst showNose3 = async () => {\n  // animate nose\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: 5,\n      y: 30,\n      blur: 20,\n      spread: 0,\n    },\n  ])\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].noseImgOpacity, 0)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].top, -104)\n\n  _datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].radius.set('20px')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(700)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].width, 300)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].height, 350)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: -15,\n      y: 4,\n      blur: 20,\n      spread: 0,\n    },\n  ])\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].background, 'white')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(300)\n\n  // animate coverImg\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].coverImgOpacity, 0.99, { duration: 0.3 })\n\n  // animate title\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(800)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].titleOverlayTop, -54, { duration: 0.6 })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showNose3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvc2hvd05vc2UzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWtCOztBQUVGO0FBQ0E7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhIQUFnRCxnQkFBZ0I7O0FBRWhFO0FBQ0E7QUFDQSwwSEFBNEMsZ0JBQWdCO0FBQzVEOztBQUVBIiwiZmlsZSI6Ii4vY29kZS9hbmltYXRlL3Nob3dOb3NlMy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdmcmFtZXInXG5cbmltcG9ydCB7IG5vc2UzIH0gZnJvbSAnLi4vZGF0YXMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBzaG93Tm9zZTMgPSBhc3luYyAoKSA9PiB7XG4gIC8vIGFuaW1hdGUgbm9zZVxuICBhbmltYXRlLmVhc2VPdXQobm9zZTMuc2hhZG93LCBbXG4gICAge1xuICAgICAgaW5zZXQ6IGZhbHNlLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICAgIHg6IDUsXG4gICAgICB5OiAzMCxcbiAgICAgIGJsdXI6IDIwLFxuICAgICAgc3ByZWFkOiAwLFxuICAgIH0sXG4gIF0pXG4gIGFuaW1hdGUuZWFzZU91dChub3NlMy5ub3NlSW1nT3BhY2l0eSwgMClcblxuICBhbmltYXRlLmVhc2VPdXQobm9zZTMudG9wLCAtMTA0KVxuXG4gIG5vc2UzLnJhZGl1cy5zZXQoJzIwcHgnKVxuXG4gIGF3YWl0IHNsZWVwKDcwMClcblxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMy53aWR0aCwgMzAwKVxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMy5oZWlnaHQsIDM1MClcbiAgYW5pbWF0ZS5lYXNlT3V0KG5vc2UzLnNoYWRvdywgW1xuICAgIHtcbiAgICAgIGluc2V0OiBmYWxzZSxcbiAgICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgICB4OiAtMTUsXG4gICAgICB5OiA0LFxuICAgICAgYmx1cjogMjAsXG4gICAgICBzcHJlYWQ6IDAsXG4gICAgfSxcbiAgXSlcbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZTMuYmFja2dyb3VuZCwgJ3doaXRlJylcblxuICBhd2FpdCBzbGVlcCgzMDApXG5cbiAgLy8gYW5pbWF0ZSBjb3ZlckltZ1xuICBhbmltYXRlLmVhc2VPdXQobm9zZTMuY292ZXJJbWdPcGFjaXR5LCAwLjk5LCB7IGR1cmF0aW9uOiAwLjMgfSlcblxuICAvLyBhbmltYXRlIHRpdGxlXG4gIGF3YWl0IHNsZWVwKDgwMClcbiAgYW5pbWF0ZS5lYXNlKG5vc2UzLnRpdGxlT3ZlcmxheVRvcCwgLTU0LCB7IGR1cmF0aW9uOiAwLjYgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd05vc2UzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/animate/showNose3.js\n");

/***/ }),

/***/ "./code/animate/showSnow.js":
/*!**********************************!*\
  !*** ./code/animate/showSnow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datas */ \"./code/datas/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./code/utils.js\");\n\n\n\n\n\nconst showSnow = async () => {\n  _datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].nextBtnScale.set(0.6)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].nextBtnScale, 60, {\n    duration: 2,\n  })\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].nextBtnOpacity, 0.2)\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(200)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].nextBtnOpacity, 1)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose3\"].nextBtnBackground, '#004ED8')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(1000)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"thanks\"].top, 0)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"thanks\"].opacity, 1)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showSnow);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvc2hvd1Nub3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0I7O0FBRW1CO0FBQ3JCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vY29kZS9hbmltYXRlL3Nob3dTbm93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSB9IGZyb20gJ2ZyYW1lcidcblxuaW1wb3J0IHsgbm9zZSwgbm9zZTIsIG5vc2UzLCB0aGFua3MgfSBmcm9tICcuLi9kYXRhcydcbmltcG9ydCB7IHNsZWVwIH0gZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IHNob3dTbm93ID0gYXN5bmMgKCkgPT4ge1xuICBub3NlMy5uZXh0QnRuU2NhbGUuc2V0KDAuNilcbiAgYW5pbWF0ZS5lYXNlKG5vc2UzLm5leHRCdG5TY2FsZSwgNjAsIHtcbiAgICBkdXJhdGlvbjogMixcbiAgfSlcblxuICBhbmltYXRlLmVhc2Uobm9zZTMubmV4dEJ0bk9wYWNpdHksIDAuMilcbiAgYXdhaXQgc2xlZXAoMjAwKVxuICBhbmltYXRlLmVhc2Uobm9zZTMubmV4dEJ0bk9wYWNpdHksIDEpXG4gIGFuaW1hdGUuZWFzZShub3NlMy5uZXh0QnRuQmFja2dyb3VuZCwgJyMwMDRFRDgnKVxuXG4gIGF3YWl0IHNsZWVwKDEwMDApXG5cbiAgYW5pbWF0ZS5lYXNlKHRoYW5rcy50b3AsIDApXG4gIGFuaW1hdGUuZWFzZSh0aGFua3Mub3BhY2l0eSwgMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hvd1Nub3dcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/animate/showSnow.js\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./code/datas/index.js":
/*!*****************************!*\
  !*** ./code/datas/index.js ***!
  \*****************************/
/*! exports provided: nose1, nose2, nose3, thanks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nose1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nose1 */ \"./code/datas/nose1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nose1\", function() { return _nose1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _nose2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nose2 */ \"./code/datas/nose2.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nose2\", function() { return _nose2__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _nose3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nose3 */ \"./code/datas/nose3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nose3\", function() { return _nose3__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _thanks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thanks */ \"./code/datas/thanks.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"thanks\", function() { return _thanks__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUSIsImZpbGUiOiIuL2NvZGUvZGF0YXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9zZTEgZnJvbSAnLi9ub3NlMSdcbmltcG9ydCBub3NlMiBmcm9tICcuL25vc2UyJ1xuaW1wb3J0IG5vc2UzIGZyb20gJy4vbm9zZTMnXG5pbXBvcnQgdGhhbmtzIGZyb20gJy4vdGhhbmtzJ1xuXG5leHBvcnQgeyBub3NlMSwgbm9zZTIsIG5vc2UzLCB0aGFua3MgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/datas/index.js\n");

/***/ }),

/***/ "./code/datas/nose1.js":
/*!*****************************!*\
  !*** ./code/datas/nose1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst wrapTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(356)\n\n// const wrapLeft = Animatable(138)\nconst wrapLeft = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst wrapOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst scale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\nconst top = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst radius = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('100px')\nconst width = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(100)\nconst height = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(100)\nconst shadow = [\n  {\n    inset: false,\n    color: 'rgba(0, 0, 0, 0.25)',\n    x: 0,\n    y: 0,\n    blur: 0,\n    spread: 0,\n  },\n]\nconst blur = 0\nconst background = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('#DD3137')\n\nconst noseImgOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst coverImgTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(-400)\nconst coverImgOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst overlayOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst trackNumTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst trackNumOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst titleOverlayTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst titleTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst titleOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst authorTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst authorOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  wrapTop,\n  wrapLeft,\n  wrapOpacity,\n  scale,\n  top,\n  radius,\n  width,\n  height,\n  shadow,\n  blur,\n  background,\n  noseImgOpacity,\n  coverImgTop,\n  coverImgOpacity,\n  overlayOpacity,\n  trackNumTop,\n  trackNumOpacity,\n  titleOverlayTop,\n  titleTop,\n  titleOpacity,\n  authorTop,\n  authorOpacity,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL25vc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29kZS9kYXRhcy9ub3NlMS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGFibGUgfSBmcm9tICdmcmFtZXInXG5cbmNvbnN0IHdyYXBUb3AgPSBBbmltYXRhYmxlKDM1NilcblxuLy8gY29uc3Qgd3JhcExlZnQgPSBBbmltYXRhYmxlKDEzOClcbmNvbnN0IHdyYXBMZWZ0ID0gQW5pbWF0YWJsZSgwKVxuY29uc3Qgd3JhcE9wYWNpdHkgPSBBbmltYXRhYmxlKDEpXG5cbmNvbnN0IHNjYWxlID0gQW5pbWF0YWJsZSgxKVxuY29uc3QgdG9wID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgcmFkaXVzID0gQW5pbWF0YWJsZSgnMTAwcHgnKVxuY29uc3Qgd2lkdGggPSBBbmltYXRhYmxlKDEwMClcbmNvbnN0IGhlaWdodCA9IEFuaW1hdGFibGUoMTAwKVxuY29uc3Qgc2hhZG93ID0gW1xuICB7XG4gICAgaW5zZXQ6IGZhbHNlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGJsdXI6IDAsXG4gICAgc3ByZWFkOiAwLFxuICB9LFxuXVxuY29uc3QgYmx1ciA9IDBcbmNvbnN0IGJhY2tncm91bmQgPSBBbmltYXRhYmxlKCcjREQzMTM3JylcblxuY29uc3Qgbm9zZUltZ09wYWNpdHkgPSBBbmltYXRhYmxlKDEpXG5cbmNvbnN0IGNvdmVySW1nVG9wID0gQW5pbWF0YWJsZSgtNDAwKVxuY29uc3QgY292ZXJJbWdPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5jb25zdCBvdmVybGF5T3BhY2l0eSA9IEFuaW1hdGFibGUoMClcblxuY29uc3QgdHJhY2tOdW1Ub3AgPSBBbmltYXRhYmxlKDApXG5jb25zdCB0cmFja051bU9wYWNpdHkgPSBBbmltYXRhYmxlKDApXG5cbmNvbnN0IHRpdGxlT3ZlcmxheVRvcCA9IEFuaW1hdGFibGUoMClcbmNvbnN0IHRpdGxlVG9wID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgdGl0bGVPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5jb25zdCBhdXRob3JUb3AgPSBBbmltYXRhYmxlKDApXG5jb25zdCBhdXRob3JPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHdyYXBUb3AsXG4gIHdyYXBMZWZ0LFxuICB3cmFwT3BhY2l0eSxcbiAgc2NhbGUsXG4gIHRvcCxcbiAgcmFkaXVzLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBzaGFkb3csXG4gIGJsdXIsXG4gIGJhY2tncm91bmQsXG4gIG5vc2VJbWdPcGFjaXR5LFxuICBjb3ZlckltZ1RvcCxcbiAgY292ZXJJbWdPcGFjaXR5LFxuICBvdmVybGF5T3BhY2l0eSxcbiAgdHJhY2tOdW1Ub3AsXG4gIHRyYWNrTnVtT3BhY2l0eSxcbiAgdGl0bGVPdmVybGF5VG9wLFxuICB0aXRsZVRvcCxcbiAgdGl0bGVPcGFjaXR5LFxuICBhdXRob3JUb3AsXG4gIGF1dGhvck9wYWNpdHksXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/datas/nose1.js\n");

/***/ }),

/***/ "./code/datas/nose2.js":
/*!*****************************!*\
  !*** ./code/datas/nose2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst wrapTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(356)\n\n// const wrapLeft = Animatable(138)\nconst wrapLeft = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst wrapOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst scale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\nconst top = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst radius = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('100px')\nconst width = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(100)\nconst height = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(100)\nconst shadow = [\n  {\n    inset: false,\n    color: 'rgba(0, 0, 0, 0.25)',\n    x: 0,\n    y: 0,\n    blur: 0,\n    spread: 0,\n  },\n]\nconst blur = 0\nconst background = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('#DD3137')\n\nconst noseImgOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst coverImgTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(-400)\nconst coverImgOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst overlayOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst trackNumTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst trackNumOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst titleOverlayTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst titleTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst titleOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst authorTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst authorOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  wrapTop,\n  wrapLeft,\n  wrapOpacity,\n  scale,\n  top,\n  radius,\n  width,\n  height,\n  shadow,\n  blur,\n  background,\n  noseImgOpacity,\n  coverImgTop,\n  coverImgOpacity,\n  overlayOpacity,\n  trackNumTop,\n  trackNumOpacity,\n  titleOverlayTop,\n  titleTop,\n  titleOpacity,\n  authorTop,\n  authorOpacity,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL25vc2UyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29kZS9kYXRhcy9ub3NlMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGFibGUgfSBmcm9tICdmcmFtZXInXG5cbmNvbnN0IHdyYXBUb3AgPSBBbmltYXRhYmxlKDM1NilcblxuLy8gY29uc3Qgd3JhcExlZnQgPSBBbmltYXRhYmxlKDEzOClcbmNvbnN0IHdyYXBMZWZ0ID0gQW5pbWF0YWJsZSgwKVxuY29uc3Qgd3JhcE9wYWNpdHkgPSBBbmltYXRhYmxlKDEpXG5cbmNvbnN0IHNjYWxlID0gQW5pbWF0YWJsZSgxKVxuY29uc3QgdG9wID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgcmFkaXVzID0gQW5pbWF0YWJsZSgnMTAwcHgnKVxuY29uc3Qgd2lkdGggPSBBbmltYXRhYmxlKDEwMClcbmNvbnN0IGhlaWdodCA9IEFuaW1hdGFibGUoMTAwKVxuY29uc3Qgc2hhZG93ID0gW1xuICB7XG4gICAgaW5zZXQ6IGZhbHNlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGJsdXI6IDAsXG4gICAgc3ByZWFkOiAwLFxuICB9LFxuXVxuY29uc3QgYmx1ciA9IDBcbmNvbnN0IGJhY2tncm91bmQgPSBBbmltYXRhYmxlKCcjREQzMTM3JylcblxuY29uc3Qgbm9zZUltZ09wYWNpdHkgPSBBbmltYXRhYmxlKDEpXG5cbmNvbnN0IGNvdmVySW1nVG9wID0gQW5pbWF0YWJsZSgtNDAwKVxuY29uc3QgY292ZXJJbWdPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5jb25zdCBvdmVybGF5T3BhY2l0eSA9IEFuaW1hdGFibGUoMClcblxuY29uc3QgdHJhY2tOdW1Ub3AgPSBBbmltYXRhYmxlKDApXG5jb25zdCB0cmFja051bU9wYWNpdHkgPSBBbmltYXRhYmxlKDApXG5cbmNvbnN0IHRpdGxlT3ZlcmxheVRvcCA9IEFuaW1hdGFibGUoMClcbmNvbnN0IHRpdGxlVG9wID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgdGl0bGVPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5jb25zdCBhdXRob3JUb3AgPSBBbmltYXRhYmxlKDApXG5jb25zdCBhdXRob3JPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHdyYXBUb3AsXG4gIHdyYXBMZWZ0LFxuICB3cmFwT3BhY2l0eSxcbiAgc2NhbGUsXG4gIHRvcCxcbiAgcmFkaXVzLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBzaGFkb3csXG4gIGJsdXIsXG4gIGJhY2tncm91bmQsXG4gIG5vc2VJbWdPcGFjaXR5LFxuICBjb3ZlckltZ1RvcCxcbiAgY292ZXJJbWdPcGFjaXR5LFxuICBvdmVybGF5T3BhY2l0eSxcbiAgdHJhY2tOdW1Ub3AsXG4gIHRyYWNrTnVtT3BhY2l0eSxcbiAgdGl0bGVPdmVybGF5VG9wLFxuICB0aXRsZVRvcCxcbiAgdGl0bGVPcGFjaXR5LFxuICBhdXRob3JUb3AsXG4gIGF1dGhvck9wYWNpdHksXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/datas/nose2.js\n");

/***/ }),

/***/ "./code/datas/nose3.js":
/*!*****************************!*\
  !*** ./code/datas/nose3.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst wrapTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(356)\n\n// const wrapLeft = Animatable(138)\nconst wrapLeft = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst wrapOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst scale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\nconst top = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst radius = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('100px')\nconst width = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(100)\nconst height = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(100)\nconst shadow = [\n  {\n    inset: false,\n    color: 'rgba(0, 0, 0, 0.25)',\n    x: 0,\n    y: 0,\n    blur: 0,\n    spread: 0,\n  },\n]\nconst blur = 0\nconst background = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('#DD3137')\n\nconst noseImgOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst coverImgTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(-400)\nconst coverImgOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst overlayOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst trackNumTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst trackNumOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst titleOverlayTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst titleTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst titleOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst authorTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst authorOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  wrapTop,\n  wrapLeft,\n  wrapOpacity,\n  scale,\n  top,\n  radius,\n  width,\n  height,\n  shadow,\n  blur,\n  background,\n  noseImgOpacity,\n  coverImgTop,\n  coverImgOpacity,\n  overlayOpacity,\n  trackNumTop,\n  trackNumOpacity,\n  titleOverlayTop,\n  titleTop,\n  titleOpacity,\n  authorTop,\n  authorOpacity,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL25vc2UzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFxQjs7QUFFckI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29kZS9kYXRhcy9ub3NlMy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGFibGUgfSBmcm9tICdmcmFtZXInXG5cbmNvbnN0IHdyYXBUb3AgPSBBbmltYXRhYmxlKDM1NilcblxuLy8gY29uc3Qgd3JhcExlZnQgPSBBbmltYXRhYmxlKDEzOClcbmNvbnN0IHdyYXBMZWZ0ID0gQW5pbWF0YWJsZSgwKVxuY29uc3Qgd3JhcE9wYWNpdHkgPSBBbmltYXRhYmxlKDEpXG5cbmNvbnN0IHNjYWxlID0gQW5pbWF0YWJsZSgxKVxuY29uc3QgdG9wID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgcmFkaXVzID0gQW5pbWF0YWJsZSgnMTAwcHgnKVxuY29uc3Qgd2lkdGggPSBBbmltYXRhYmxlKDEwMClcbmNvbnN0IGhlaWdodCA9IEFuaW1hdGFibGUoMTAwKVxuY29uc3Qgc2hhZG93ID0gW1xuICB7XG4gICAgaW5zZXQ6IGZhbHNlLFxuICAgIGNvbG9yOiAncmdiYSgwLCAwLCAwLCAwLjI1KScsXG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGJsdXI6IDAsXG4gICAgc3ByZWFkOiAwLFxuICB9LFxuXVxuY29uc3QgYmx1ciA9IDBcbmNvbnN0IGJhY2tncm91bmQgPSBBbmltYXRhYmxlKCcjREQzMTM3JylcblxuY29uc3Qgbm9zZUltZ09wYWNpdHkgPSBBbmltYXRhYmxlKDEpXG5cbmNvbnN0IGNvdmVySW1nVG9wID0gQW5pbWF0YWJsZSgtNDAwKVxuY29uc3QgY292ZXJJbWdPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5jb25zdCBvdmVybGF5T3BhY2l0eSA9IEFuaW1hdGFibGUoMClcblxuY29uc3QgdHJhY2tOdW1Ub3AgPSBBbmltYXRhYmxlKDApXG5jb25zdCB0cmFja051bU9wYWNpdHkgPSBBbmltYXRhYmxlKDApXG5cbmNvbnN0IHRpdGxlT3ZlcmxheVRvcCA9IEFuaW1hdGFibGUoMClcbmNvbnN0IHRpdGxlVG9wID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgdGl0bGVPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5jb25zdCBhdXRob3JUb3AgPSBBbmltYXRhYmxlKDApXG5jb25zdCBhdXRob3JPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHdyYXBUb3AsXG4gIHdyYXBMZWZ0LFxuICB3cmFwT3BhY2l0eSxcbiAgc2NhbGUsXG4gIHRvcCxcbiAgcmFkaXVzLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBzaGFkb3csXG4gIGJsdXIsXG4gIGJhY2tncm91bmQsXG4gIG5vc2VJbWdPcGFjaXR5LFxuICBjb3ZlckltZ1RvcCxcbiAgY292ZXJJbWdPcGFjaXR5LFxuICBvdmVybGF5T3BhY2l0eSxcbiAgdHJhY2tOdW1Ub3AsXG4gIHRyYWNrTnVtT3BhY2l0eSxcbiAgdGl0bGVPdmVybGF5VG9wLFxuICB0aXRsZVRvcCxcbiAgdGl0bGVPcGFjaXR5LFxuICBhdXRob3JUb3AsXG4gIGF1dGhvck9wYWNpdHksXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/datas/nose3.js\n");

/***/ }),

/***/ "./code/datas/thanks.js":
/*!******************************!*\
  !*** ./code/datas/thanks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst opacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n// const scale = Animatable(1)\nconst top = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(-50)\nconst left = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  opacity,\n  // scale,\n  top,\n  left,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL3RoYW5rcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvZGUvZGF0YXMvdGhhbmtzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0YWJsZSB9IGZyb20gJ2ZyYW1lcidcblxuY29uc3Qgb3BhY2l0eSA9IEFuaW1hdGFibGUoMClcbi8vIGNvbnN0IHNjYWxlID0gQW5pbWF0YWJsZSgxKVxuY29uc3QgdG9wID0gQW5pbWF0YWJsZSgtNTApXG5jb25zdCBsZWZ0ID0gQW5pbWF0YWJsZSgwKVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9wYWNpdHksXG4gIC8vIHNjYWxlLFxuICB0b3AsXG4gIGxlZnQsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/datas/thanks.js\n");

/***/ }),

/***/ "./code/utils.js":
/*!***********************!*\
  !*** ./code/utils.js ***!
  \***********************/
/*! exports provided: sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sleep\", function() { return sleep; });\n// Utils\nconst sleep = ms => {\n  return new Promise(resolve => setTimeout(resolve, ms))\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVRIiwiZmlsZSI6Ii4vY29kZS91dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFV0aWxzXG5jb25zdCBzbGVlcCA9IG1zID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG59XG5cbmV4cG9ydCB7IHNsZWVwIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/utils.js\n");

/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["@framer/kasimir.iphone-x-kit"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/kasimir.iphone-x-kit */ "../../../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/kasimir.iphone-x-kit/build/index.js")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"main":"build/index.js","license":"MIT","version":"1.18.0","devDependencies":{"@framer/framer.device-hand-iphone-1":"1.0.0","@framer/framer.device-hand-iphone-2":"1.0.0","@framer/framer.device-skin-apple-iphone-x-silver":"1.0.0","@framer/framer.device-skin-apple-iphone-x-space-gray":"1.0.0","@types/react":"^16.0.31","framer":"0.9.7"},"peerDependencies":{"framer":"0.9.7","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"2970ec35-535a-4d7f-96d5-57c611da38d0","displayName":"iPhone X Kit"},"keywords":["Apple","iOS","iPhone","Kit","UI"],"author":"Kasimir Hirvikoski","name":"@framer/kasimir.iphone-x-kit","design":{"root":{"__class":"RootNode","children":[{"__class":"FrameNode","aspectRatio":null,"blendingEnabled":0,"blendingMode":"normal","blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0,"centerAnchorY":0,"children":[{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":0,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0.5,"centerAnchorY":0.979064039408867,"children":[],"clip":true,"codeComponentIdentifier":"./Home Button (iPhone X)/HomeButton.tsx_HomeButton","codeComponentProps":{"appearance":"light"},"codeOverrideEnabled":false,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":34,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"A8cBFZLlt","intrinsicHeight":34,"intrinsicWidth":375,"invert":0,"invertEnabled":0,"left":0,"locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"ttqq1MQ7C","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":0,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":null,"visible":true,"width":375,"widthType":0},{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0.5,"centerAnchorY":0.027093596059113302,"children":[],"clip":true,"codeComponentIdentifier":"./Status Bar/Status_Bar.tsx_StatusBar","codeComponentProps":{"appearance":"light","back":"","batteryLevel":13,"liveTime":true,"location":"none","mode":"#4CD964","signalLevel":35,"time":"","twelveHour":true,"wifiLevel":17},"codeOverrideEnabled":false,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":44,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"zJTn1bLDW","intrinsicHeight":44,"intrinsicWidth":375,"invert":0,"invertEnabled":0,"left":0,"locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"ttqq1MQ7C","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":0,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":0,"visible":true,"width":375,"widthType":0}],"clip":true,"codeOverrideEnabled":false,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"deviceType":"framer/FramerAppleIPhoneXS","exportOptions":[{"__class":"ExportOptions","enabled":true,"nameExtension":"","nameExtensionMode":"Suffix","scale":1,"type":"png"},{"__class":"ExportOptions","enabled":true,"nameExtension":"@2x","nameExtensionMode":"Suffix","scale":2,"type":"png"},{"__class":"ExportOptions","enabled":true,"nameExtension":"@3x","nameExtensionMode":"Suffix","scale":3,"type":"png"}],"fillColor":"hsl(0, 0%, 8%)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":812,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"ttqq1MQ7C","intrinsicHeight":null,"intrinsicWidth":null,"invert":0,"invertEnabled":0,"isExternalMaster":null,"isMaster":false,"isTarget":false,"left":982,"locked":false,"name":"Frame","navigationTarget":null,"navigationTransition":"push","navigationTransitionBackdropColor":"rgba(4,4,15,.4)","navigationTransitionDirection":"left","opacity":1,"originalid":null,"parentid":"qjDASOFhc","previewSettings":{"__class":"PreviewSettings","bezel":false,"deviceType":"framer/FramerAppleIPhoneXS","hand":"Hand 2","responsive":false,"rotate":false,"skin":"","touch":true,"zoom":-1},"radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"replicaInfo":null,"right":null,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":180,"visible":true,"width":375,"widthType":0},{"__class":"FrameNode","aspectRatio":null,"blendingEnabled":0,"blendingMode":"normal","blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":1.528,"centerAnchorY":1.2099753694581281,"children":[{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":0,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0.5,"centerAnchorY":0.9546666666666667,"children":[],"clip":true,"codeComponentIdentifier":"./Home Button (iPhone X)/HomeButton.tsx_HomeButton","codeComponentProps":{"appearance":"light"},"codeOverrideEnabled":false,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":34,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"SQdCTDe2s","intrinsicHeight":34,"intrinsicWidth":375,"invert":0,"invertEnabled":0,"left":0,"locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"p4Oh6x5CK","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":0,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":null,"visible":true,"width":812,"widthType":0},{"__class":"CodeComponentNode","aspectRatio":null,"blur":12,"blurEnabled":0,"blurType":"layer","borderBottom":1,"borderColor":"#222","borderEnabled":0,"borderLeft":1,"borderPerSide":false,"borderRight":1,"borderStyle":"solid","borderTop":1,"borderWidth":1,"bottom":null,"boxShadows":[],"brightness":100,"brightnessEnabled":0,"centerAnchorX":0.5,"centerAnchorY":0.027093596059113302,"children":[],"clip":true,"codeComponentIdentifier":"./Status Bar/Status_Bar.tsx_StatusBar","codeComponentProps":{"appearance":"light","back":"","batteryLevel":13,"liveTime":true,"location":"none","mode":"transparent","signalLevel":35,"time":"","twelveHour":false,"wifiLevel":17},"codeOverrideEnabled":false,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"exportOptions":[],"fillColor":"rgba(255,255,255,1)","fillEnabled":false,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":44,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"ZdSKXZzId","intrinsicHeight":44,"intrinsicWidth":375,"invert":0,"invertEnabled":0,"left":0,"locked":false,"name":null,"opacity":1,"originalid":null,"parentid":"p4Oh6x5CK","radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"right":0,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":0,"visible":true,"width":375,"widthType":0}],"clip":true,"codeOverrideEnabled":false,"constraintsLocked":false,"contrast":100,"contrastEnabled":0,"deviceType":"framer/FramerAppleIPhoneXS","exportOptions":[],"fillColor":"hsl(0, 0%, 8%)","fillEnabled":true,"fillGradient":{"__class":"LinearGradient","alpha":1,"angle":0,"end":"rgba(0,0,0,0)","start":"black"},"fillImage":null,"fillImagePixelHeight":null,"fillImagePixelWidth":null,"fillImageResize":"fill","fillType":"color","grayscale":0,"grayScaleEnabled":0,"height":375,"heightType":0,"hueRotate":0,"hueRotateEnabled":0,"id":"p4Oh6x5CK","intrinsicHeight":null,"intrinsicWidth":null,"invert":0,"invertEnabled":0,"isExternalMaster":null,"isMaster":false,"isTarget":false,"left":982,"locked":false,"name":"Frame","navigationTarget":null,"navigationTransition":"push","navigationTransitionBackdropColor":"rgba(4,4,15,.4)","navigationTransitionDirection":"left","opacity":1,"originalid":null,"parentid":"qjDASOFhc","previewSettings":{"__class":"PreviewSettings","bezel":false,"deviceType":"framer/FramerAppleIPhoneXS","hand":"Hand 2","responsive":false,"rotate":true,"skin":"","touch":true,"zoom":-1},"radius":0,"radiusBottomLeft":0,"radiusBottomRight":0,"radiusIsRelative":false,"radiusPerCorner":false,"radiusTopLeft":0,"radiusTopRight":0,"replicaInfo":null,"right":null,"rotation":0,"saturate":100,"saturateEnabled":0,"sepia":0,"sepiaEnabled":0,"top":1066,"visible":true,"width":812,"widthType":0}],"id":"qjDASOFhc","name":null,"originalid":null,"parentid":null,"visible":false},"version":47}}
                    return package
                }

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.9.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"^6.1.0","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"^16","@types/react-dom":"^16","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"~16.4","react-dev-utils":"^5.0.1","react-dom":"~16.4","semver":"^5.6.0","ts-jest":"^22.4.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.3","react-dom":"^16.3"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.9.7"},"peerDependencies":{"framer":"^0.9.7","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"533e9f5c-1b00-4dd5-a260-e813ff4537ca"},"author":". ruucm","dependencies":{"@framer/kasimir.iphone-x-kit":"^1.18.0"}};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});