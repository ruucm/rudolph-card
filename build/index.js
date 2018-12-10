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
	"./AppStore.tsx": "./code/AppStore.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./Rudolph.tsx": "./code/Rudolph.tsx",
	"./animate/index.js": "./code/animate/index.js",
	"./animate/showNose1.js": "./code/animate/showNose1.js",
	"./animate/showNose2.js": "./code/animate/showNose2.js",
	"./canvas.tsx": "./code/canvas.tsx",
	"./datas/index.js": "./code/datas/index.js",
	"./datas/nose.js": "./code/datas/nose.js",
	"./datas/nose2.js": "./code/datas/nose2.js",
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

/***/ "./code/AppStore.tsx":
/*!***************************!*\
  !*** ./code/AppStore.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst data = framer_1.Data({\n    itemAreaTop: framer_1.Animatable(129),\n    itemAreaWidth: framer_1.Animatable(335),\n    itemAreaHeight: framer_1.Animatable(409),\n    itemAreaRadius: framer_1.Animatable('20px'),\n    itemAreaOverFlow: 'hidden',\n    itemDescBottom: framer_1.Animatable(-333),\n    textImgBottom: framer_1.Animatable(-100),\n    closeBtnOpacity: framer_1.Animatable(0),\n});\nexports.ItemArea = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: data.itemAreaTop,\n        width: data.itemAreaWidth,\n        height: data.itemAreaHeight,\n        radius: data.itemAreaRadius,\n        overflow: data.itemAreaOverFlow,\n    };\n};\nexports.TextImg = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        bottom: data.textImgBottom,\n    };\n};\nexports.ItemImg = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        originY: 0,\n        onMouseDown() {\n            window[\"__checkBudget__\"]();\n            framer_1.animate.ease(data.itemAreaWidth, 320);\n        },\n        onTap() {\n            return __awaiter(this, void 0, void 0, function* () {\n                window[\"__checkBudget__\"]();\n                data.closeBtnOpacity.set(0.99);\n                data.itemAreaOverFlow = 'scroll';\n                framer_1.animate.ease(data.itemAreaTop, 0);\n                framer_1.animate.ease(data.itemAreaWidth, 375);\n                framer_1.animate.ease(data.itemAreaHeight, 2000);\n                yield framer_1.animate.ease(data.itemAreaRadius, '0px').finished;\n                framer_1.animate.easeInOut(data.textImgBottom, 20);\n            });\n        },\n    };\n};\nexports.ItemDesc = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        originY: 0,\n        bottom: data.itemDescBottom,\n    };\n};\nexports.CloseBtn = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.closeBtnOpacity,\n        onTap() {\n            window[\"__checkBudget__\"]();\n            data.closeBtnOpacity.set(0);\n            framer_1.animate.ease(data.itemAreaTop, 129);\n            framer_1.animate.ease(data.itemAreaWidth, 335);\n            framer_1.animate.ease(data.itemAreaHeight, 409);\n            framer_1.animate.ease(data.itemAreaRadius, '20px');\n            setTimeout(() => __awaiter(this, void 0, void 0, function* () {\n                window[\"__checkBudget__\"]();\n                yield framer_1.animate.easeInOut(data.textImgBottom, -100).finished;\n                data.itemAreaOverFlow = 'hidden';\n            }), 400);\n        },\n    };\n};\nexports.__info__ = [{ name: \"ItemArea\", type: \"override\" }, { name: \"TextImg\", type: \"override\" }, { name: \"ItemImg\", type: \"override\" }, { name: \"ItemDesc\", type: \"override\" }, { name: \"CloseBtn\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0FwcFN0b3JlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLHFCQUFxQixxQ0FBcUMsR0FBRyxvQ0FBb0MsR0FBRyxvQ0FBb0MsR0FBRyxxQ0FBcUMsR0FBRyxxQ0FBcUMiLCJmaWxlIjoiLi9jb2RlL0FwcFN0b3JlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmcmFtZXJfMSA9IHJlcXVpcmUoXCJmcmFtZXJcIik7XG5jb25zdCBkYXRhID0gZnJhbWVyXzEuRGF0YSh7XG4gICAgaXRlbUFyZWFUb3A6IGZyYW1lcl8xLkFuaW1hdGFibGUoMTI5KSxcbiAgICBpdGVtQXJlYVdpZHRoOiBmcmFtZXJfMS5BbmltYXRhYmxlKDMzNSksXG4gICAgaXRlbUFyZWFIZWlnaHQ6IGZyYW1lcl8xLkFuaW1hdGFibGUoNDA5KSxcbiAgICBpdGVtQXJlYVJhZGl1czogZnJhbWVyXzEuQW5pbWF0YWJsZSgnMjBweCcpLFxuICAgIGl0ZW1BcmVhT3ZlckZsb3c6ICdoaWRkZW4nLFxuICAgIGl0ZW1EZXNjQm90dG9tOiBmcmFtZXJfMS5BbmltYXRhYmxlKC0zMzMpLFxuICAgIHRleHRJbWdCb3R0b206IGZyYW1lcl8xLkFuaW1hdGFibGUoLTEwMCksXG4gICAgY2xvc2VCdG5PcGFjaXR5OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxufSk7XG5leHBvcnRzLkl0ZW1BcmVhID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogZGF0YS5pdGVtQXJlYVRvcCxcbiAgICAgICAgd2lkdGg6IGRhdGEuaXRlbUFyZWFXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkYXRhLml0ZW1BcmVhSGVpZ2h0LFxuICAgICAgICByYWRpdXM6IGRhdGEuaXRlbUFyZWFSYWRpdXMsXG4gICAgICAgIG92ZXJmbG93OiBkYXRhLml0ZW1BcmVhT3ZlckZsb3csXG4gICAgfTtcbn07XG5leHBvcnRzLlRleHRJbWcgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm90dG9tOiBkYXRhLnRleHRJbWdCb3R0b20sXG4gICAgfTtcbn07XG5leHBvcnRzLkl0ZW1JbWcgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3JpZ2luWTogMCxcbiAgICAgICAgb25Nb3VzZURvd24oKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZShkYXRhLml0ZW1BcmVhV2lkdGgsIDMyMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVGFwKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICBkYXRhLmNsb3NlQnRuT3BhY2l0eS5zZXQoMC45OSk7XG4gICAgICAgICAgICAgICAgZGF0YS5pdGVtQXJlYU92ZXJGbG93ID0gJ3Njcm9sbCc7XG4gICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlKGRhdGEuaXRlbUFyZWFUb3AsIDApO1xuICAgICAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZShkYXRhLml0ZW1BcmVhV2lkdGgsIDM3NSk7XG4gICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlKGRhdGEuaXRlbUFyZWFIZWlnaHQsIDIwMDApO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZyYW1lcl8xLmFuaW1hdGUuZWFzZShkYXRhLml0ZW1BcmVhUmFkaXVzLCAnMHB4JykuZmluaXNoZWQ7XG4gICAgICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlSW5PdXQoZGF0YS50ZXh0SW1nQm90dG9tLCAyMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbmV4cG9ydHMuSXRlbURlc2MgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3JpZ2luWTogMCxcbiAgICAgICAgYm90dG9tOiBkYXRhLml0ZW1EZXNjQm90dG9tLFxuICAgIH07XG59O1xuZXhwb3J0cy5DbG9zZUJ0biA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLmNsb3NlQnRuT3BhY2l0eSxcbiAgICAgICAgb25UYXAoKSB7XG4gICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgIGRhdGEuY2xvc2VCdG5PcGFjaXR5LnNldCgwKTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZShkYXRhLml0ZW1BcmVhVG9wLCAxMjkpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlKGRhdGEuaXRlbUFyZWFXaWR0aCwgMzM1KTtcbiAgICAgICAgICAgIGZyYW1lcl8xLmFuaW1hdGUuZWFzZShkYXRhLml0ZW1BcmVhSGVpZ2h0LCA0MDkpO1xuICAgICAgICAgICAgZnJhbWVyXzEuYW5pbWF0ZS5lYXNlKGRhdGEuaXRlbUFyZWFSYWRpdXMsICcyMHB4Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmcmFtZXJfMS5hbmltYXRlLmVhc2VJbk91dChkYXRhLnRleHRJbWdCb3R0b20sIC0xMDApLmZpbmlzaGVkO1xuICAgICAgICAgICAgICAgIGRhdGEuaXRlbUFyZWFPdmVyRmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfSksIDQwMCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJJdGVtQXJlYVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlRleHRJbWdcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJJdGVtSW1nXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiSXRlbURlc2NcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJDbG9zZUJ0blwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/AppStore.tsx\n");

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

/***/ "./code/Rudolph.tsx":
/*!**************************!*\
  !*** ./code/Rudolph.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst datas_1 = __webpack_require__(/*! ./datas */ \"./code/datas/index.js\");\nconst animate_1 = __webpack_require__(/*! ./animate */ \"./code/animate/index.js\");\n// Animation Objects\nconst data = framer_1.Data({\n    spark01Opacity: framer_1.Animatable(0),\n    spark01Top: framer_1.Animatable(0),\n    spark01Right: framer_1.Animatable(0),\n    spark02Opacity: framer_1.Animatable(0),\n    spark02Top: framer_1.Animatable(0),\n    spark02Right: framer_1.Animatable(0),\n    spark03Opacity: framer_1.Animatable(0),\n    spark03Top: framer_1.Animatable(0),\n    spark03Left: framer_1.Animatable(0),\n    spark04Opacity: framer_1.Animatable(0),\n    spark04Top: framer_1.Animatable(0),\n    spark04Right: framer_1.Animatable(0),\n    hatOpacity: framer_1.Animatable(0),\n    hatTop: framer_1.Animatable(-100),\n    hatScaleY: framer_1.Animatable(1),\n});\nexports.TextsTitle = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose.textsTitleOpacity,\n        left: datas_1.nose.textsTitleLeft,\n        scale: datas_1.nose.textsTitleScale,\n    };\n};\nexports.Texts = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose.textsOpacity,\n        left: datas_1.nose.textsLeft,\n    };\n};\nexports.Spark01 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.spark01Opacity,\n        top: data.spark01Top,\n        right: data.spark01Right,\n    };\n};\nexports.Spark02 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.spark02Opacity,\n        top: data.spark02Top,\n        right: data.spark02Right,\n    };\n};\nexports.Spark03 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.spark03Opacity,\n        top: data.spark03Top,\n        left: data.spark03Left,\n    };\n};\nexports.Spark04 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.spark04Opacity,\n        top: data.spark04Top,\n        right: data.spark04Right,\n    };\n};\nexports.Hat = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: data.hatOpacity,\n        top: data.hatTop,\n        scaleY: data.hatScaleY,\n    };\n};\nexports.NoseWrap = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        top: datas_1.nose.wrapTop,\n        left: datas_1.nose.wrapLeft,\n        opacity: datas_1.nose.wrapOpacity,\n    };\n};\nexports.Nose = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: datas_1.nose.scale,\n        top: datas_1.nose.top,\n        radius: datas_1.nose.radius,\n        width: datas_1.nose.width,\n        height: datas_1.nose.height,\n        shadows: datas_1.nose.shadow,\n        background: datas_1.nose.background,\n        style: {\n            transition: 'border-radius 1.2s ease-in-out, box-shadow 1s ease-out',\n        },\n        onTap: animate_1.showNose1,\n    };\n};\nexports.Nose2 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose2.opacity,\n        scale: datas_1.nose2.scale,\n        top: datas_1.nose2.top,\n        left: datas_1.nose2.left,\n        radius: datas_1.nose2.radius,\n        width: datas_1.nose2.width,\n        height: datas_1.nose2.height,\n        shadows: datas_1.nose2.shadow,\n        background: datas_1.nose2.background,\n        style: {\n            transition: 'border-radius 1.2s ease-in-out, box-shadow 2s ease-out',\n        },\n    };\n};\nexports.Texts2Title = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose2.texts2TitleOpacity,\n        left: datas_1.nose2.texts2TitleLeft,\n        scale: datas_1.nose2.texts2TitleScale,\n    };\n};\nexports.Texts2 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        opacity: datas_1.nose2.texts2Opacity,\n        left: datas_1.nose2.texts2Left,\n    };\n};\nexports.NextButton = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: datas_1.nose.nextBtnScale,\n        opacity: datas_1.nose.nextBtnOpacity,\n        onTap: animate_1.showNose2,\n    };\n};\nexports.NextButton2 = () => {\n    window[\"__checkBudget__\"]();\n    return {\n        scale: datas_1.nose2.nextBtn2Scale,\n        opacity: datas_1.nose2.nextBtn2Opacity,\n    };\n};\nexports.__info__ = [{ name: \"TextsTitle\", type: \"override\" }, { name: \"Texts\", type: \"override\" }, { name: \"Spark01\", type: \"override\" }, { name: \"Spark02\", type: \"override\" }, { name: \"Spark03\", type: \"override\" }, { name: \"Spark04\", type: \"override\" }, { name: \"Hat\", type: \"override\" }, { name: \"NoseWrap\", type: \"override\" }, { name: \"Nose\", type: \"override\" }, { name: \"Nose2\", type: \"override\" }, { name: \"Texts2Title\", type: \"override\" }, { name: \"Texts2\", type: \"override\" }, { name: \"NextButton\", type: \"override\" }, { name: \"NextButton2\", type: \"override\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL1J1ZG9scGgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVDQUF1QyxHQUFHLGtDQUFrQyxHQUFHLG9DQUFvQyxHQUFHLG9DQUFvQyxHQUFHLG9DQUFvQyxHQUFHLG9DQUFvQyxHQUFHLGdDQUFnQyxHQUFHLHFDQUFxQyxHQUFHLGlDQUFpQyxHQUFHLGtDQUFrQyxHQUFHLHdDQUF3QyxHQUFHLG1DQUFtQyxHQUFHLHVDQUF1QyxHQUFHLHdDQUF3QyIsImZpbGUiOiIuL2NvZGUvUnVkb2xwaC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IGRhdGFzXzEgPSByZXF1aXJlKFwiLi9kYXRhc1wiKTtcbmNvbnN0IGFuaW1hdGVfMSA9IHJlcXVpcmUoXCIuL2FuaW1hdGVcIik7XG4vLyBBbmltYXRpb24gT2JqZWN0c1xuY29uc3QgZGF0YSA9IGZyYW1lcl8xLkRhdGEoe1xuICAgIHNwYXJrMDFPcGFjaXR5OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIHNwYXJrMDFUb3A6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgc3BhcmswMVJpZ2h0OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIHNwYXJrMDJPcGFjaXR5OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIHNwYXJrMDJUb3A6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgc3BhcmswMlJpZ2h0OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIHNwYXJrMDNPcGFjaXR5OiBmcmFtZXJfMS5BbmltYXRhYmxlKDApLFxuICAgIHNwYXJrMDNUb3A6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgc3BhcmswM0xlZnQ6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgc3BhcmswNE9wYWNpdHk6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgc3BhcmswNFRvcDogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSxcbiAgICBzcGFyazA0UmlnaHQ6IGZyYW1lcl8xLkFuaW1hdGFibGUoMCksXG4gICAgaGF0T3BhY2l0eTogZnJhbWVyXzEuQW5pbWF0YWJsZSgwKSxcbiAgICBoYXRUb3A6IGZyYW1lcl8xLkFuaW1hdGFibGUoLTEwMCksXG4gICAgaGF0U2NhbGVZOiBmcmFtZXJfMS5BbmltYXRhYmxlKDEpLFxufSk7XG5leHBvcnRzLlRleHRzVGl0bGUgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlLnRleHRzVGl0bGVPcGFjaXR5LFxuICAgICAgICBsZWZ0OiBkYXRhc18xLm5vc2UudGV4dHNUaXRsZUxlZnQsXG4gICAgICAgIHNjYWxlOiBkYXRhc18xLm5vc2UudGV4dHNUaXRsZVNjYWxlLFxuICAgIH07XG59O1xuZXhwb3J0cy5UZXh0cyA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhc18xLm5vc2UudGV4dHNPcGFjaXR5LFxuICAgICAgICBsZWZ0OiBkYXRhc18xLm5vc2UudGV4dHNMZWZ0LFxuICAgIH07XG59O1xuZXhwb3J0cy5TcGFyazAxID0gKCkgPT4ge1xuICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9wYWNpdHk6IGRhdGEuc3BhcmswMU9wYWNpdHksXG4gICAgICAgIHRvcDogZGF0YS5zcGFyazAxVG9wLFxuICAgICAgICByaWdodDogZGF0YS5zcGFyazAxUmlnaHQsXG4gICAgfTtcbn07XG5leHBvcnRzLlNwYXJrMDIgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogZGF0YS5zcGFyazAyT3BhY2l0eSxcbiAgICAgICAgdG9wOiBkYXRhLnNwYXJrMDJUb3AsXG4gICAgICAgIHJpZ2h0OiBkYXRhLnNwYXJrMDJSaWdodCxcbiAgICB9O1xufTtcbmV4cG9ydHMuU3BhcmswMyA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLnNwYXJrMDNPcGFjaXR5LFxuICAgICAgICB0b3A6IGRhdGEuc3BhcmswM1RvcCxcbiAgICAgICAgbGVmdDogZGF0YS5zcGFyazAzTGVmdCxcbiAgICB9O1xufTtcbmV4cG9ydHMuU3BhcmswNCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhLnNwYXJrMDRPcGFjaXR5LFxuICAgICAgICB0b3A6IGRhdGEuc3BhcmswNFRvcCxcbiAgICAgICAgcmlnaHQ6IGRhdGEuc3BhcmswNFJpZ2h0LFxuICAgIH07XG59O1xuZXhwb3J0cy5IYXQgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogZGF0YS5oYXRPcGFjaXR5LFxuICAgICAgICB0b3A6IGRhdGEuaGF0VG9wLFxuICAgICAgICBzY2FsZVk6IGRhdGEuaGF0U2NhbGVZLFxuICAgIH07XG59O1xuZXhwb3J0cy5Ob3NlV3JhcCA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IGRhdGFzXzEubm9zZS53cmFwVG9wLFxuICAgICAgICBsZWZ0OiBkYXRhc18xLm5vc2Uud3JhcExlZnQsXG4gICAgICAgIG9wYWNpdHk6IGRhdGFzXzEubm9zZS53cmFwT3BhY2l0eSxcbiAgICB9O1xufTtcbmV4cG9ydHMuTm9zZSA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2FsZTogZGF0YXNfMS5ub3NlLnNjYWxlLFxuICAgICAgICB0b3A6IGRhdGFzXzEubm9zZS50b3AsXG4gICAgICAgIHJhZGl1czogZGF0YXNfMS5ub3NlLnJhZGl1cyxcbiAgICAgICAgd2lkdGg6IGRhdGFzXzEubm9zZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkYXRhc18xLm5vc2UuaGVpZ2h0LFxuICAgICAgICBzaGFkb3dzOiBkYXRhc18xLm5vc2Uuc2hhZG93LFxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXRhc18xLm5vc2UuYmFja2dyb3VuZCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItcmFkaXVzIDEuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMXMgZWFzZS1vdXQnLFxuICAgICAgICB9LFxuICAgICAgICBvblRhcDogYW5pbWF0ZV8xLnNob3dOb3NlMSxcbiAgICB9O1xufTtcbmV4cG9ydHMuTm9zZTIgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlMi5vcGFjaXR5LFxuICAgICAgICBzY2FsZTogZGF0YXNfMS5ub3NlMi5zY2FsZSxcbiAgICAgICAgdG9wOiBkYXRhc18xLm5vc2UyLnRvcCxcbiAgICAgICAgbGVmdDogZGF0YXNfMS5ub3NlMi5sZWZ0LFxuICAgICAgICByYWRpdXM6IGRhdGFzXzEubm9zZTIucmFkaXVzLFxuICAgICAgICB3aWR0aDogZGF0YXNfMS5ub3NlMi53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBkYXRhc18xLm5vc2UyLmhlaWdodCxcbiAgICAgICAgc2hhZG93czogZGF0YXNfMS5ub3NlMi5zaGFkb3csXG4gICAgICAgIGJhY2tncm91bmQ6IGRhdGFzXzEubm9zZTIuYmFja2dyb3VuZCxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItcmFkaXVzIDEuMnMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMnMgZWFzZS1vdXQnLFxuICAgICAgICB9LFxuICAgIH07XG59O1xuZXhwb3J0cy5UZXh0czJUaXRsZSA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhc18xLm5vc2UyLnRleHRzMlRpdGxlT3BhY2l0eSxcbiAgICAgICAgbGVmdDogZGF0YXNfMS5ub3NlMi50ZXh0czJUaXRsZUxlZnQsXG4gICAgICAgIHNjYWxlOiBkYXRhc18xLm5vc2UyLnRleHRzMlRpdGxlU2NhbGUsXG4gICAgfTtcbn07XG5leHBvcnRzLlRleHRzMiA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvcGFjaXR5OiBkYXRhc18xLm5vc2UyLnRleHRzMk9wYWNpdHksXG4gICAgICAgIGxlZnQ6IGRhdGFzXzEubm9zZTIudGV4dHMyTGVmdCxcbiAgICB9O1xufTtcbmV4cG9ydHMuTmV4dEJ1dHRvbiA9ICgpID0+IHtcbiAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzY2FsZTogZGF0YXNfMS5ub3NlLm5leHRCdG5TY2FsZSxcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlLm5leHRCdG5PcGFjaXR5LFxuICAgICAgICBvblRhcDogYW5pbWF0ZV8xLnNob3dOb3NlMixcbiAgICB9O1xufTtcbmV4cG9ydHMuTmV4dEJ1dHRvbjIgPSAoKSA9PiB7XG4gICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NhbGU6IGRhdGFzXzEubm9zZTIubmV4dEJ0bjJTY2FsZSxcbiAgICAgICAgb3BhY2l0eTogZGF0YXNfMS5ub3NlMi5uZXh0QnRuMk9wYWNpdHksXG4gICAgfTtcbn07XG5leHBvcnRzLl9faW5mb19fID0gW3sgbmFtZTogXCJUZXh0c1RpdGxlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiVGV4dHNcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJTcGFyazAxXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiU3BhcmswMlwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlNwYXJrMDNcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJTcGFyazA0XCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiSGF0XCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiTm9zZVdyYXBcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJOb3NlXCIsIHR5cGU6IFwib3ZlcnJpZGVcIiB9LCB7IG5hbWU6IFwiTm9zZTJcIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJUZXh0czJUaXRsZVwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIlRleHRzMlwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfSwgeyBuYW1lOiBcIk5leHRCdXR0b25cIiwgdHlwZTogXCJvdmVycmlkZVwiIH0sIHsgbmFtZTogXCJOZXh0QnV0dG9uMlwiLCB0eXBlOiBcIm92ZXJyaWRlXCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/Rudolph.tsx\n");

/***/ }),

/***/ "./code/animate/index.js":
/*!*******************************!*\
  !*** ./code/animate/index.js ***!
  \*******************************/
/*! exports provided: showNose1, showNose2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _showNose1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showNose1 */ \"./code/animate/showNose1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showNose1\", function() { return _showNose1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _showNose2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showNose2 */ \"./code/animate/showNose2.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"showNose2\", function() { return _showNose2__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7O0FBRVEiLCJmaWxlIjoiLi9jb2RlL2FuaW1hdGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvd05vc2UxIGZyb20gJy4vc2hvd05vc2UxJ1xuaW1wb3J0IHNob3dOb3NlMiBmcm9tICcuL3Nob3dOb3NlMidcblxuZXhwb3J0IHsgc2hvd05vc2UxLCBzaG93Tm9zZTIgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/animate/index.js\n");

/***/ }),

/***/ "./code/animate/showNose1.js":
/*!***********************************!*\
  !*** ./code/animate/showNose1.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datas */ \"./code/datas/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./code/utils.js\");\n\n\n\n\n\nvar lock01 = false\n\nconst showNose1 = async () => {\n  // nose shirink\n  if (!lock01) {\n    _datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].scale.set(0.6)\n    framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].spring(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].scale, 1)\n    lock01 = true\n  }\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(100)\n\n  // animate title\n  // animate.easeIn(data.titleTop, -300)\n\n  // animate nose\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: 5,\n      y: 30,\n      blur: 20,\n      spread: 0,\n    },\n  ])\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(1000)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].top, -50)\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(700)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].radius, '20px')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(700)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].width, 350)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].height, 350)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].background, 'white')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(750)\n\n  // animate sparks\n  // animate.easeInOut(data.spark01Opacity, 0.99, {\n  //   duration: 0.2,\n  // })\n  // animate.easeOut(data.spark01Top, 130, {\n  //   duration: 0.3,\n  // })\n  // animate.easeOut(data.spark01Right, 80, {\n  //   duration: 0.3,\n  // })\n\n  // animate.easeInOut(data.spark02Opacity, 0.99, {\n  //   duration: 0.3,\n  // })\n  // animate.easeOut(data.spark02Top, 100, {\n  //   duration: 0.25,\n  // })\n  // animate.easeOut(data.spark02Right, 15, {\n  //   duration: 0.3,\n  // })\n\n  // animate.easeInOut(data.spark03Opacity, 0.99, {\n  //   duration: 0.3,\n  // })\n  // animate.easeOut(data.spark03Top, 120, {\n  //   duration: 0.3,\n  // })\n  // animate.easeOut(data.spark03Left, 80, {\n  //   duration: 0.3,\n  // })\n\n  // animate.easeInOut(data.spark04Opacity, 0.99, {\n  //   duration: 0.3,\n  // })\n  // animate.easeOut(data.spark04Top, 160, {\n  //   duration: 0.3,\n  // })\n  // animate.easeOut(data.spark04Right, 10, {\n  //   duration: 0.3,\n  // })\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(200)\n\n  // animate texts\n\n  // data.textsTitleScale.set(0.6)\n  // animate.spring(data.textsTitleScale, 1)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].textsTitleOpacity, 0.99)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].textsTitleLeft, 30)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].textsOpacity, 0.99)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].spring(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].textsLeft, 30, {\n    tension: 80,\n    friction: 40,\n  })\n\n  // animate next button\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].nextBtnOpacity, 0.99)\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(1500)\n\n  // animate hat\n  // animate.easeInOut(data.hatOpacity, 0.99)\n\n  // animate.easeIn(data.hatTop, 5, {\n  //   duration: 1,\n  // })\n  // await sleep(800)\n  // animate.easeOut(data.hatScaleY, 0.9, {\n  //   duration: 0.2,\n  // })\n\n  // await sleep(300)\n\n  // animate.easeIn(data.hatScaleY, 1, {\n  //   duration: 0.2,\n  // })\n\n  // animate.easeOut(data.hatTop, 10, {\n  //   duration: 0.2,\n  // })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showNose1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvc2hvd05vc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWtCOztBQUVIO0FBQ0M7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTs7QUFFTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUEiLCJmaWxlIjoiLi9jb2RlL2FuaW1hdGUvc2hvd05vc2UxLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSB9IGZyb20gJ2ZyYW1lcidcblxuaW1wb3J0IHsgbm9zZSB9IGZyb20gJy4uL2RhdGFzJ1xuaW1wb3J0IHsgc2xlZXAgfSBmcm9tICcuLi91dGlscydcblxudmFyIGxvY2swMSA9IGZhbHNlXG5cbmNvbnN0IHNob3dOb3NlMSA9IGFzeW5jICgpID0+IHtcbiAgLy8gbm9zZSBzaGlyaW5rXG4gIGlmICghbG9jazAxKSB7XG4gICAgbm9zZS5zY2FsZS5zZXQoMC42KVxuICAgIGFuaW1hdGUuc3ByaW5nKG5vc2Uuc2NhbGUsIDEpXG4gICAgbG9jazAxID0gdHJ1ZVxuICB9XG5cbiAgYXdhaXQgc2xlZXAoMTAwKVxuXG4gIC8vIGFuaW1hdGUgdGl0bGVcbiAgLy8gYW5pbWF0ZS5lYXNlSW4oZGF0YS50aXRsZVRvcCwgLTMwMClcblxuICAvLyBhbmltYXRlIG5vc2VcbiAgYW5pbWF0ZS5lYXNlT3V0KG5vc2Uuc2hhZG93LCBbXG4gICAge1xuICAgICAgaW5zZXQ6IGZhbHNlLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICAgIHg6IDUsXG4gICAgICB5OiAzMCxcbiAgICAgIGJsdXI6IDIwLFxuICAgICAgc3ByZWFkOiAwLFxuICAgIH0sXG4gIF0pXG5cbiAgYXdhaXQgc2xlZXAoMTAwMClcbiAgYW5pbWF0ZS5lYXNlT3V0KG5vc2UudG9wLCAtNTApXG5cbiAgYXdhaXQgc2xlZXAoNzAwKVxuXG4gIGFuaW1hdGUuZWFzZUluT3V0KG5vc2UucmFkaXVzLCAnMjBweCcpXG5cbiAgYXdhaXQgc2xlZXAoNzAwKVxuXG4gIGFuaW1hdGUuZWFzZUluT3V0KG5vc2Uud2lkdGgsIDM1MClcbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZS5oZWlnaHQsIDM1MClcbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZS5iYWNrZ3JvdW5kLCAnd2hpdGUnKVxuXG4gIGF3YWl0IHNsZWVwKDc1MClcblxuICAvLyBhbmltYXRlIHNwYXJrc1xuICAvLyBhbmltYXRlLmVhc2VJbk91dChkYXRhLnNwYXJrMDFPcGFjaXR5LCAwLjk5LCB7XG4gIC8vICAgZHVyYXRpb246IDAuMixcbiAgLy8gfSlcbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuc3BhcmswMVRvcCwgMTMwLCB7XG4gIC8vICAgZHVyYXRpb246IDAuMyxcbiAgLy8gfSlcbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuc3BhcmswMVJpZ2h0LCA4MCwge1xuICAvLyAgIGR1cmF0aW9uOiAwLjMsXG4gIC8vIH0pXG5cbiAgLy8gYW5pbWF0ZS5lYXNlSW5PdXQoZGF0YS5zcGFyazAyT3BhY2l0eSwgMC45OSwge1xuICAvLyAgIGR1cmF0aW9uOiAwLjMsXG4gIC8vIH0pXG4gIC8vIGFuaW1hdGUuZWFzZU91dChkYXRhLnNwYXJrMDJUb3AsIDEwMCwge1xuICAvLyAgIGR1cmF0aW9uOiAwLjI1LFxuICAvLyB9KVxuICAvLyBhbmltYXRlLmVhc2VPdXQoZGF0YS5zcGFyazAyUmlnaHQsIDE1LCB7XG4gIC8vICAgZHVyYXRpb246IDAuMyxcbiAgLy8gfSlcblxuICAvLyBhbmltYXRlLmVhc2VJbk91dChkYXRhLnNwYXJrMDNPcGFjaXR5LCAwLjk5LCB7XG4gIC8vICAgZHVyYXRpb246IDAuMyxcbiAgLy8gfSlcbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuc3BhcmswM1RvcCwgMTIwLCB7XG4gIC8vICAgZHVyYXRpb246IDAuMyxcbiAgLy8gfSlcbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuc3BhcmswM0xlZnQsIDgwLCB7XG4gIC8vICAgZHVyYXRpb246IDAuMyxcbiAgLy8gfSlcblxuICAvLyBhbmltYXRlLmVhc2VJbk91dChkYXRhLnNwYXJrMDRPcGFjaXR5LCAwLjk5LCB7XG4gIC8vICAgZHVyYXRpb246IDAuMyxcbiAgLy8gfSlcbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuc3BhcmswNFRvcCwgMTYwLCB7XG4gIC8vICAgZHVyYXRpb246IDAuMyxcbiAgLy8gfSlcbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuc3BhcmswNFJpZ2h0LCAxMCwge1xuICAvLyAgIGR1cmF0aW9uOiAwLjMsXG4gIC8vIH0pXG5cbiAgYXdhaXQgc2xlZXAoMjAwKVxuXG4gIC8vIGFuaW1hdGUgdGV4dHNcblxuICAvLyBkYXRhLnRleHRzVGl0bGVTY2FsZS5zZXQoMC42KVxuICAvLyBhbmltYXRlLnNwcmluZyhkYXRhLnRleHRzVGl0bGVTY2FsZSwgMSlcbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZS50ZXh0c1RpdGxlT3BhY2l0eSwgMC45OSlcbiAgYW5pbWF0ZS5lYXNlKG5vc2UudGV4dHNUaXRsZUxlZnQsIDMwKVxuXG4gIGFuaW1hdGUuZWFzZUluT3V0KG5vc2UudGV4dHNPcGFjaXR5LCAwLjk5KVxuICBhbmltYXRlLnNwcmluZyhub3NlLnRleHRzTGVmdCwgMzAsIHtcbiAgICB0ZW5zaW9uOiA4MCxcbiAgICBmcmljdGlvbjogNDAsXG4gIH0pXG5cbiAgLy8gYW5pbWF0ZSBuZXh0IGJ1dHRvblxuICBhbmltYXRlLmVhc2VJbk91dChub3NlLm5leHRCdG5PcGFjaXR5LCAwLjk5KVxuXG4gIGF3YWl0IHNsZWVwKDE1MDApXG5cbiAgLy8gYW5pbWF0ZSBoYXRcbiAgLy8gYW5pbWF0ZS5lYXNlSW5PdXQoZGF0YS5oYXRPcGFjaXR5LCAwLjk5KVxuXG4gIC8vIGFuaW1hdGUuZWFzZUluKGRhdGEuaGF0VG9wLCA1LCB7XG4gIC8vICAgZHVyYXRpb246IDEsXG4gIC8vIH0pXG4gIC8vIGF3YWl0IHNsZWVwKDgwMClcbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuaGF0U2NhbGVZLCAwLjksIHtcbiAgLy8gICBkdXJhdGlvbjogMC4yLFxuICAvLyB9KVxuXG4gIC8vIGF3YWl0IHNsZWVwKDMwMClcblxuICAvLyBhbmltYXRlLmVhc2VJbihkYXRhLmhhdFNjYWxlWSwgMSwge1xuICAvLyAgIGR1cmF0aW9uOiAwLjIsXG4gIC8vIH0pXG5cbiAgLy8gYW5pbWF0ZS5lYXNlT3V0KGRhdGEuaGF0VG9wLCAxMCwge1xuICAvLyAgIGR1cmF0aW9uOiAwLjIsXG4gIC8vIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dOb3NlMVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./code/animate/showNose1.js\n");

/***/ }),

/***/ "./code/animate/showNose2.js":
/*!***********************************!*\
  !*** ./code/animate/showNose2.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _datas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datas */ \"./code/datas/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./code/utils.js\");\n\n\n\n\n\nconst showNose2 = async () => {\n  _datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].nextBtnScale.set(0.6)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].spring(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].nextBtnScale, 1)\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(200)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].scale, 0.8)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].wrapLeft, 0)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].wrapTop, 230)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose\"].wrapOpacity, 0.3)\n\n  // nose2 in\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].shadow, [\n    {\n      inset: false,\n      color: 'rgba(0, 0, 0, 0.25)',\n      x: 5,\n      y: 30,\n      blur: 20,\n      spread: 5,\n    },\n  ])\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(250)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].opacity, 0.99)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].left, -350)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].radius, '20px')\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].width, 350)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].height, 350)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].background, 'white')\n\n  await Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"sleep\"])(1000)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].texts2TitleOpacity, 0.99)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].ease(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].texts2TitleLeft, 30)\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].texts2Opacity, 0.99)\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].spring(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].texts2Left, 30, {\n    tension: 80,\n    friction: 40,\n  })\n\n  framer__WEBPACK_IMPORTED_MODULE_0__[\"animate\"].easeInOut(_datas__WEBPACK_IMPORTED_MODULE_1__[\"nose2\"].nextBtn2Opacity, 0.99)\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (showNose2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2FuaW1hdGUvc2hvd05vc2UyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQWtCOztBQUVJO0FBQ047O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vY29kZS9hbmltYXRlL3Nob3dOb3NlMi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUgfSBmcm9tICdmcmFtZXInXG5cbmltcG9ydCB7IG5vc2UsIG5vc2UyIH0gZnJvbSAnLi4vZGF0YXMnXG5pbXBvcnQgeyBzbGVlcCB9IGZyb20gJy4uL3V0aWxzJ1xuXG5jb25zdCBzaG93Tm9zZTIgPSBhc3luYyAoKSA9PiB7XG4gIG5vc2UubmV4dEJ0blNjYWxlLnNldCgwLjYpXG4gIGFuaW1hdGUuc3ByaW5nKG5vc2UubmV4dEJ0blNjYWxlLCAxKVxuICBhd2FpdCBzbGVlcCgyMDApXG5cbiAgYW5pbWF0ZS5lYXNlKG5vc2Uuc2NhbGUsIDAuOClcbiAgYW5pbWF0ZS5lYXNlKG5vc2Uud3JhcExlZnQsIDApXG4gIGFuaW1hdGUuZWFzZShub3NlLndyYXBUb3AsIDIzMClcbiAgYW5pbWF0ZS5lYXNlKG5vc2Uud3JhcE9wYWNpdHksIDAuMylcblxuICAvLyBub3NlMiBpblxuICBhbmltYXRlLmVhc2VPdXQobm9zZTIuc2hhZG93LCBbXG4gICAge1xuICAgICAgaW5zZXQ6IGZhbHNlLFxuICAgICAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJyxcbiAgICAgIHg6IDUsXG4gICAgICB5OiAzMCxcbiAgICAgIGJsdXI6IDIwLFxuICAgICAgc3ByZWFkOiA1LFxuICAgIH0sXG4gIF0pXG5cbiAgYXdhaXQgc2xlZXAoMjUwKVxuXG4gIGFuaW1hdGUuZWFzZShub3NlMi5vcGFjaXR5LCAwLjk5KVxuICBhbmltYXRlLmVhc2Uobm9zZTIubGVmdCwgLTM1MClcblxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMi5yYWRpdXMsICcyMHB4JylcblxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMi53aWR0aCwgMzUwKVxuICBhbmltYXRlLmVhc2VJbk91dChub3NlMi5oZWlnaHQsIDM1MClcbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZTIuYmFja2dyb3VuZCwgJ3doaXRlJylcblxuICBhd2FpdCBzbGVlcCgxMDAwKVxuXG4gIGFuaW1hdGUuZWFzZUluT3V0KG5vc2UyLnRleHRzMlRpdGxlT3BhY2l0eSwgMC45OSlcbiAgYW5pbWF0ZS5lYXNlKG5vc2UyLnRleHRzMlRpdGxlTGVmdCwgMzApXG5cbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZTIudGV4dHMyT3BhY2l0eSwgMC45OSlcbiAgYW5pbWF0ZS5zcHJpbmcobm9zZTIudGV4dHMyTGVmdCwgMzAsIHtcbiAgICB0ZW5zaW9uOiA4MCxcbiAgICBmcmljdGlvbjogNDAsXG4gIH0pXG5cbiAgYW5pbWF0ZS5lYXNlSW5PdXQobm9zZTIubmV4dEJ0bjJPcGFjaXR5LCAwLjk5KVxufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93Tm9zZTJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/animate/showNose2.js\n");

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
/*! exports provided: nose, nose2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nose */ \"./code/datas/nose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nose\", function() { return _nose__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _nose2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nose2 */ \"./code/datas/nose2.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nose2\", function() { return _nose2__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVRIiwiZmlsZSI6Ii4vY29kZS9kYXRhcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub3NlIGZyb20gJy4vbm9zZSdcbmltcG9ydCBub3NlMiBmcm9tICcuL25vc2UyJ1xuXG5leHBvcnQgeyBub3NlLCBub3NlMiB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/datas/index.js\n");

/***/ }),

/***/ "./code/datas/nose.js":
/*!****************************!*\
  !*** ./code/datas/nose.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst wrapTop = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(231)\n\nconst wrapLeft = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(123)\nconst wrapOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst scale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\nconst top = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst radius = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('100px')\nconst width = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(130)\nconst height = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(120)\nconst shadow = [\n  {\n    inset: false,\n    color: 'rgba(0, 0, 0, 0.25)',\n    x: 0,\n    y: 0,\n    blur: 0,\n    spread: 0,\n  },\n]\nconst background = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('#DD3137')\n\nconst textsTitleOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst textsTitleLeft = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst textsTitleScale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst textsOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst textsLeft = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst nextBtnScale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\nconst nextBtnOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  wrapTop,\n  wrapLeft,\n  wrapOpacity,\n  scale,\n  top,\n  radius,\n  width,\n  height,\n  shadow,\n  background,\n  textsTitleOpacity,\n  textsTitleLeft,\n  textsTitleScale,\n  textsOpacity,\n  textsLeft,\n  nextBtnScale,\n  nextBtnOpacity,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL25vc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQXFCOztBQUVyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvZGUvZGF0YXMvbm9zZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGFibGUgfSBmcm9tICdmcmFtZXInXG5cbmNvbnN0IHdyYXBUb3AgPSBBbmltYXRhYmxlKDIzMSlcblxuY29uc3Qgd3JhcExlZnQgPSBBbmltYXRhYmxlKDEyMylcbmNvbnN0IHdyYXBPcGFjaXR5ID0gQW5pbWF0YWJsZSgxKVxuXG5jb25zdCBzY2FsZSA9IEFuaW1hdGFibGUoMSlcbmNvbnN0IHRvcCA9IEFuaW1hdGFibGUoMClcbmNvbnN0IHJhZGl1cyA9IEFuaW1hdGFibGUoJzEwMHB4JylcbmNvbnN0IHdpZHRoID0gQW5pbWF0YWJsZSgxMzApXG5jb25zdCBoZWlnaHQgPSBBbmltYXRhYmxlKDEyMClcbmNvbnN0IHNoYWRvdyA9IFtcbiAge1xuICAgIGluc2V0OiBmYWxzZSxcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yNSknLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBibHVyOiAwLFxuICAgIHNwcmVhZDogMCxcbiAgfSxcbl1cbmNvbnN0IGJhY2tncm91bmQgPSBBbmltYXRhYmxlKCcjREQzMTM3JylcblxuY29uc3QgdGV4dHNUaXRsZU9wYWNpdHkgPSBBbmltYXRhYmxlKDApXG5jb25zdCB0ZXh0c1RpdGxlTGVmdCA9IEFuaW1hdGFibGUoMClcbmNvbnN0IHRleHRzVGl0bGVTY2FsZSA9IEFuaW1hdGFibGUoMSlcblxuY29uc3QgdGV4dHNPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgdGV4dHNMZWZ0ID0gQW5pbWF0YWJsZSgwKVxuXG5jb25zdCBuZXh0QnRuU2NhbGUgPSBBbmltYXRhYmxlKDEpXG5jb25zdCBuZXh0QnRuT3BhY2l0eSA9IEFuaW1hdGFibGUoMClcblxuZXhwb3J0IGRlZmF1bHQge1xuICB3cmFwVG9wLFxuICB3cmFwTGVmdCxcbiAgd3JhcE9wYWNpdHksXG4gIHNjYWxlLFxuICB0b3AsXG4gIHJhZGl1cyxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgc2hhZG93LFxuICBiYWNrZ3JvdW5kLFxuICB0ZXh0c1RpdGxlT3BhY2l0eSxcbiAgdGV4dHNUaXRsZUxlZnQsXG4gIHRleHRzVGl0bGVTY2FsZSxcbiAgdGV4dHNPcGFjaXR5LFxuICB0ZXh0c0xlZnQsXG4gIG5leHRCdG5TY2FsZSxcbiAgbmV4dEJ0bk9wYWNpdHksXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/datas/nose.js\n");

/***/ }),

/***/ "./code/datas/nose2.js":
/*!*****************************!*\
  !*** ./code/datas/nose2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer */ \"framer\");\n/* harmony import */ var framer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// nose2\nconst opacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst scale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\nconst top = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst left = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(-111)\nconst radius = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('100px')\nconst width = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(130)\nconst height = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(120)\nconst shadow = [\n  {\n    inset: false,\n    color: 'rgba(0, 0, 0, 0.25)',\n    x: 0,\n    y: 0,\n    blur: 0,\n    spread: 0,\n  },\n]\nconst background = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])('#DD3137')\n\nconst texts2TitleOpacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst texts2TitleLeft = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst texts2TitleScale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\n\nconst texts2Opacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\nconst texts2Left = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\nconst nextBtn2Scale = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(1)\nconst nextBtn2Opacity = Object(framer__WEBPACK_IMPORTED_MODULE_0__[\"Animatable\"])(0)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  opacity,\n  scale,\n  top,\n  left,\n  radius,\n  width,\n  height,\n  shadow,\n  background,\n  texts2TitleOpacity,\n  texts2TitleLeft,\n  texts2TitleScale,\n  texts2Opacity,\n  texts2Left,\n  nextBtn2Scale,\n  nextBtn2Opacity,\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL2RhdGFzL25vc2UyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvZGUvZGF0YXMvbm9zZTIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRhYmxlIH0gZnJvbSAnZnJhbWVyJ1xuXG4vLyBub3NlMlxuY29uc3Qgb3BhY2l0eSA9IEFuaW1hdGFibGUoMClcbmNvbnN0IHNjYWxlID0gQW5pbWF0YWJsZSgxKVxuY29uc3QgdG9wID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgbGVmdCA9IEFuaW1hdGFibGUoLTExMSlcbmNvbnN0IHJhZGl1cyA9IEFuaW1hdGFibGUoJzEwMHB4JylcbmNvbnN0IHdpZHRoID0gQW5pbWF0YWJsZSgxMzApXG5jb25zdCBoZWlnaHQgPSBBbmltYXRhYmxlKDEyMClcbmNvbnN0IHNoYWRvdyA9IFtcbiAge1xuICAgIGluc2V0OiBmYWxzZSxcbiAgICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yNSknLFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBibHVyOiAwLFxuICAgIHNwcmVhZDogMCxcbiAgfSxcbl1cbmNvbnN0IGJhY2tncm91bmQgPSBBbmltYXRhYmxlKCcjREQzMTM3JylcblxuY29uc3QgdGV4dHMyVGl0bGVPcGFjaXR5ID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgdGV4dHMyVGl0bGVMZWZ0ID0gQW5pbWF0YWJsZSgwKVxuY29uc3QgdGV4dHMyVGl0bGVTY2FsZSA9IEFuaW1hdGFibGUoMSlcblxuY29uc3QgdGV4dHMyT3BhY2l0eSA9IEFuaW1hdGFibGUoMClcbmNvbnN0IHRleHRzMkxlZnQgPSBBbmltYXRhYmxlKDApXG5cbmNvbnN0IG5leHRCdG4yU2NhbGUgPSBBbmltYXRhYmxlKDEpXG5jb25zdCBuZXh0QnRuMk9wYWNpdHkgPSBBbmltYXRhYmxlKDApXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb3BhY2l0eSxcbiAgc2NhbGUsXG4gIHRvcCxcbiAgbGVmdCxcbiAgcmFkaXVzLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBzaGFkb3csXG4gIGJhY2tncm91bmQsXG4gIHRleHRzMlRpdGxlT3BhY2l0eSxcbiAgdGV4dHMyVGl0bGVMZWZ0LFxuICB0ZXh0czJUaXRsZVNjYWxlLFxuICB0ZXh0czJPcGFjaXR5LFxuICB0ZXh0czJMZWZ0LFxuICBuZXh0QnRuMlNjYWxlLFxuICBuZXh0QnRuMk9wYWNpdHksXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/datas/nose2.js\n");

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
                    package.__framer__.packageJson = {"name":"framer","version":"0.9.2","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"^16.0.0","@types/react-dom":"^16.0.0","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.5.0","react-dev-utils":"^5.0.1","react-dom":"^16.5.0","ts-jest":"^22.4.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.5.0","react-dom":"^16.5.0"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]}}
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

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@types/react":"^16.4.16","framer":"^0.9.2"},"peerDependencies":{"framer":"^0.9.2","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"46a0b7e7-a864-4de6-a94f-c6e99040b8f2"},"author":"test-r test-r","dependencies":{"@framer/kasimir.iphone-x-kit":"^1.18.0","ruucm-util":"^0.12.0","styled-components":"^4.1.2"}};

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