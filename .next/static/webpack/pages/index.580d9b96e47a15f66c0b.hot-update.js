/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductFeed.js":
/*!***************************************!*\
  !*** ./src/components/ProductFeed.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ \"./src/components/Product.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kevinbellock/Desktop/react-projects/amazon-clone/src/components/ProductFeed.js\";\n\n\nfunction ProductFeed(_ref) {\n  var _this = this;\n\n  var products = _ref.products;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto\",\n    children: [products.slice(0, 4).map(function (_ref2) {\n      var id = _ref2.id,\n          title = _ref2.title,\n          price = _ref2.price,\n          description = _ref2.description,\n          category = _ref2.category,\n          image = _ref2.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 16\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: \"/banner-ad.jpeg\",\n      alt: \"ad\",\n      className: \"md:col-span-2\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"md:col-span-2\",\n      children: products.slice(4, 5).map(function (_ref3) {\n        var id = _ref3.id,\n            title = _ref3.title,\n            price = _ref3.price,\n            description = _ref3.description,\n            category = _ref3.category,\n            image = _ref3.image;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {\n          title: title,\n          price: price,\n          description: description,\n          category: category,\n          image: image\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), products.slice(5, products.length).map(function (_ref4) {\n      var id = _ref4.id,\n          title = _ref4.title,\n          price = _ref4.price,\n          description = _ref4.description,\n          category = _ref4.category,\n          image = _ref4.image;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_1__.default, {\n        title: title,\n        price: price,\n        description: description,\n        category: category,\n        image: image\n      }, id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 16\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n\n_c = ProductFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductFeed);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductFeed\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanM/MDU1YiJdLCJuYW1lcyI6WyJQcm9kdWN0RmVlZCIsInByb2R1Y3RzIiwic2xpY2UiLCJtYXAiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiaW1hZ2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFHQSxTQUFTQSxXQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBWEMsUUFBVyxRQUFYQSxRQUFXO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlGQUFmO0FBQUEsZUFJSUEsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFvQkMsR0FBcEIsQ0FBd0I7QUFBQSxVQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxVQUFNQyxLQUFOLFNBQU1BLEtBQU47QUFBQSxVQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxVQUFvQkMsV0FBcEIsU0FBb0JBLFdBQXBCO0FBQUEsVUFBaUNDLFFBQWpDLFNBQWlDQSxRQUFqQztBQUFBLFVBQTJDQyxLQUEzQyxTQUEyQ0EsS0FBM0M7QUFBQSwwQkFDckIsOERBQUMsNkNBQUQ7QUFFSyxhQUFLLEVBQUVKLEtBRlo7QUFHSyxhQUFLLEVBQUVDLEtBSFo7QUFJSyxtQkFBVyxFQUFFQyxXQUpsQjtBQUtLLGdCQUFRLEVBQUVDLFFBTGY7QUFNSyxhQUFLLEVBQUVDO0FBTlosU0FDVUwsRUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHFCO0FBQUEsS0FBeEIsQ0FKSixlQWdCRztBQUFNLFNBQUcsRUFBQyxpQkFBVjtBQUE0QixTQUFHLEVBQUMsSUFBaEM7QUFBcUMsZUFBUyxFQUFDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkgsZUFtQkk7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNLSCxRQUFRLENBQUNDLEtBQVQsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW9CQyxHQUFwQixDQUF3QjtBQUFBLFlBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFlBQU1DLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFlBQWFDLEtBQWIsU0FBYUEsS0FBYjtBQUFBLFlBQW9CQyxXQUFwQixTQUFvQkEsV0FBcEI7QUFBQSxZQUFpQ0MsUUFBakMsU0FBaUNBLFFBQWpDO0FBQUEsWUFBMkNDLEtBQTNDLFNBQTJDQSxLQUEzQztBQUFBLDRCQUNyQiw4REFBQyw2Q0FBRDtBQUVRLGVBQUssRUFBRUosS0FGZjtBQUdRLGVBQUssRUFBRUMsS0FIZjtBQUlRLHFCQUFXLEVBQUVDLFdBSnJCO0FBS1Esa0JBQVEsRUFBRUMsUUFMbEI7QUFNUSxlQUFLLEVBQUVDO0FBTmYsV0FDYUwsRUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CSixFQStCSUgsUUFBUSxDQUFDQyxLQUFULENBQWUsQ0FBZixFQUFpQkQsUUFBUSxDQUFDUyxNQUExQixFQUFrQ1AsR0FBbEMsQ0FBc0M7QUFBQSxVQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxVQUFNQyxLQUFOLFNBQU1BLEtBQU47QUFBQSxVQUFhQyxLQUFiLFNBQWFBLEtBQWI7QUFBQSxVQUFvQkMsV0FBcEIsU0FBb0JBLFdBQXBCO0FBQUEsVUFBaUNDLFFBQWpDLFNBQWlDQSxRQUFqQztBQUFBLFVBQTJDQyxLQUEzQyxTQUEyQ0EsS0FBM0M7QUFBQSwwQkFDbkMsOERBQUMsNkNBQUQ7QUFFSyxhQUFLLEVBQUVKLEtBRlo7QUFHSyxhQUFLLEVBQUVDLEtBSFo7QUFJSyxtQkFBVyxFQUFFQyxXQUpsQjtBQUtLLGdCQUFRLEVBQUVDLFFBTGY7QUFNSyxhQUFLLEVBQUVDO0FBTlosU0FDVUwsRUFEVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRG1DO0FBQUEsS0FBdEMsQ0EvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE0Q0g7O0tBN0NRSixXO0FBK0NULCtEQUFlQSxXQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdEZlZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi9Qcm9kdWN0XCJcblxuXG5mdW5jdGlvbiBQcm9kdWN0RmVlZCh7cHJvZHVjdHN9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtZmxvdy1yb3ctZGVuc2UgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTQgbWQ6LW10LTUyIG14LWF1dG9cIj5cbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDAsNCkubWFwKCh7aWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZX0pID0+IChcbiAgICAgICAgICAgICAgIDxQcm9kdWN0IFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICkpfVxuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgPGltZyAgc3JjPVwiL2Jhbm5lci1hZC5qcGVnXCIgYWx0PVwiYWRcIiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCIvPlxuICAgICAgICAgICBcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDQsNSkubWFwKCh7aWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZX0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3QgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAge3Byb2R1Y3RzLnNsaWNlKDUscHJvZHVjdHMubGVuZ3RoKS5tYXAoKHtpZCwgdGl0bGUsIHByaWNlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnksIGltYWdlfSkgPT4gKFxuICAgICAgICAgICAgICAgPFByb2R1Y3QgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e3ByaWNlfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxuICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductFeed.js\n");

/***/ })

});