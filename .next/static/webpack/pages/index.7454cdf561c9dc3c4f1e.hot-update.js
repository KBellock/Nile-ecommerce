/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Product.js":
/*!***********************************!*\
  !*** ./src/components/Product.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kevinbellock/Desktop/react-projects/amazon-clone/src/components/Product.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar MAX_RATING = 5;\nvar MIN_RATING = 1;\n\nfunction Product(_ref) {\n  _s();\n\n  var _this = this;\n\n  var id = _ref.id,\n      title = _ref.title,\n      price = _ref.price,\n      description = _ref.description,\n      category = _ref.category,\n      image = _ref.image;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING),\n      rating = _useState[0];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Math.random() < 0.5),\n      prime = _useState2[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"relative flex flex-col m-5 bg-white z-30 p-10\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"absolute top-2 right-2 text-xs italic text-gray-400\",\n      children: category\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: image,\n      height: 200,\n      width: 200,\n      objectFit: \"contain\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n      className: \"my-3\",\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex text-yellow-400\",\n      children: Array(rating).fill().map(function (_, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {\n          className: \"h-5\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: \"text-xs my-2 line-clamp-3\",\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"mb-3\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {\n        quantity: price\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), prime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex items-center space-x-2 -mt-2\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        className: \"w-12\",\n        src: \"/primeLogo.png\",\n        alt: \"prime logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-xs text-gray-500\",\n        children: \"FREE Delivery\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \"Add to Basket\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Product, \"vIJnm5EEYM8OXvPXO9jFneEL+TI=\");\n\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\nvar _c;\n\n$RefreshReg$(_c, \"Product\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdC5qcz9iZTI2Il0sIm5hbWVzIjpbIk1BWF9SQVRJTkciLCJNSU5fUkFUSU5HIiwiUHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInVzZVN0YXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmF0aW5nIiwicHJpbWUiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHLENBQW5CO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLENBQW5COztBQUVBLFNBQVNDLE9BQVQsT0FBbUU7QUFBQTs7QUFBQTs7QUFBQSxNQUFqREMsRUFBaUQsUUFBakRBLEVBQWlEO0FBQUEsTUFBN0NDLEtBQTZDLFFBQTdDQSxLQUE2QztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSxNQUEvQkMsV0FBK0IsUUFBL0JBLFdBQStCO0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFBQSxrQkFFOUNDLCtDQUFRLENBQ3JCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCWixVQUFVLEdBQUdDLFVBQWIsR0FBMEIsQ0FBM0MsQ0FBWCxJQUE0REEsVUFEdkMsQ0FGc0M7QUFBQSxNQUV4RFksTUFGd0Q7O0FBQUEsbUJBTS9DSiwrQ0FBUSxDQUFDQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBakIsQ0FOdUM7QUFBQSxNQU14REUsS0FOd0Q7O0FBUS9ELHNCQUNJO0FBQUssYUFBUyxFQUFDLCtDQUFmO0FBQUEsNEJBQ0k7QUFBRyxlQUFTLEVBQUMscURBQWI7QUFBQSxnQkFBb0VQO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUdJLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFQyxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUtJO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQSxnQkFBc0JKO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU9JO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsZ0JBQ0tXLEtBQUssQ0FBQ0YsTUFBRCxDQUFMLENBQWNHLElBQWQsR0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLDRCQUN0Qiw4REFBQyw0REFBRDtBQUFVLG1CQUFTLEVBQUM7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEc0I7QUFBQSxPQUF6QjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQWFJO0FBQUcsZUFBUyxFQUFDLDJCQUFiO0FBQUEsZ0JBQTBDYjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosZUFlSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUEsNkJBQ0ksOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFRDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKLEVBbUJLUyxLQUFLLGlCQUNGO0FBQUssZUFBUyxFQUFDLG1DQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBRyxFQUFDLGdCQUExQjtBQUEyQyxXQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJSLGVBMEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0NIOztHQXhDUVosTzs7S0FBQUEsTztBQTBDVCwrREFBZUEsT0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3Rhckljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L3NvbGlkJ1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gJ3JlYWN0LWN1cnJlbmN5LWZvcm1hdHRlcidcblxuY29uc3QgTUFYX1JBVElORyA9IDU7XG5jb25zdCBNSU5fUkFUSU5HID0gMTtcblxuZnVuY3Rpb24gUHJvZHVjdCh7aWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZX0pIHtcblxuICAgIGNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGUoXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNQVhfUkFUSU5HIC0gTUlOX1JBVElORyArIDEpKSArIE1JTl9SQVRJTkdcbiAgICApO1xuICAgIFxuICAgIGNvbnN0IFtwcmltZV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpIDwgMC41KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG0tNSBiZy13aGl0ZSB6LTMwIHAtMTBcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPntjYXRlZ29yeX08L3A+XG5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBoZWlnaHQ9ezIwMH0gd2lkdGg9ezIwMH0gb2JqZWN0Rml0PSdjb250YWluJyAvPlxuXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibXktM1wiPnt0aXRsZX08L2g0PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC15ZWxsb3ctNDAwXCI+XG4gICAgICAgICAgICAgICAge0FycmF5KHJhdGluZykuZmlsbCgpLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8U3Rhckljb24gY2xhc3NOYW1lPVwiaC01XCIgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG15LTIgbGluZS1jbGFtcC0zXCI+e2Rlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgPEN1cnJlbmN5IHF1YW50aXR5PXtwcmljZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtwcmltZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgLW10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTEyXCIgc3JjPVwiL3ByaW1lTG9nby5wbmdcIiBhbHQ9XCJwcmltZSBsb2dvXCIvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS01MDBcIj5GUkVFIERlbGl2ZXJ5PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgPGJ1dHRvbj5BZGQgdG8gQmFza2V0PC9idXR0b24+XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Product.js\n");

/***/ })

});