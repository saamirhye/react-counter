"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/ui/counter/functions.tsx":
/*!**************************************!*\
  !*** ./app/ui/counter/functions.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Functions)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_ui_buttons_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/ui/buttons/button */ \"(app-pages-browser)/./app/ui/buttons/button.tsx\");\n\n\nfunction Functions(param) {\n    let { count, setCount } = param;\n    const arithmetic_functions = [\n        {\n            text: \"Add 1\"\n        },\n        {\n            text: \"Minus 1\"\n        },\n        {\n            text: \"Add 10\"\n        },\n        {\n            text: \"Minus 10\"\n        }\n    ];\n    return(// add different arithmetic function components here (may contain all in this file for now)\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: arithmetic_functions.map((func)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_buttons_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    children: func.text\n                }, func.text, false, {\n                    fileName: \"/Users/saamirhye/Documents/Projects/react-counter/app/ui/counter/functions.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saamirhye/Documents/Projects/react-counter/app/ui/counter/functions.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/saamirhye/Documents/Projects/react-counter/app/ui/counter/functions.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this));\n}\n_c = Functions;\nvar _c;\n$RefreshReg$(_c, \"Functions\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9jb3VudGVyL2Z1bmN0aW9ucy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QztBQUU5QixTQUFTQyxVQUFVLEtBQW1CO1FBQW5CLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQW5CO0lBQ2hDLE1BQU1DLHVCQUF1QjtRQUMzQjtZQUNFQyxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7UUFDQTtZQUNFQSxNQUFNO1FBQ1I7S0FDRDtJQUNELE9BQ0UsMkZBQTJGO2tCQUMzRiw4REFBQ0M7UUFBSUMsV0FBVTtrQkFJWkgscUJBQXFCSSxHQUFHLENBQUMsQ0FBQ0MscUJBQ3pCLDhEQUFDSDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1AsOERBQU1BOzhCQUFrQlMsS0FBS0osSUFBSTttQkFBckJJLEtBQUtKLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQUtoQztLQTVCd0JKIiwic291cmNlcyI6WyIvVXNlcnMvc2FhbWlyaHllL0RvY3VtZW50cy9Qcm9qZWN0cy9yZWFjdC1jb3VudGVyL2FwcC91aS9jb3VudGVyL2Z1bmN0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1c0NpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAL2FwcC91aS9idXR0b25zL2J1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGdW5jdGlvbnMoeyBjb3VudCwgc2V0Q291bnQgfSkge1xuICBjb25zdCBhcml0aG1ldGljX2Z1bmN0aW9ucyA9IFtcbiAgICB7XG4gICAgICB0ZXh0OiBcIkFkZCAxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIk1pbnVzIDFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiQWRkIDEwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIk1pbnVzIDEwXCIsXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICAvLyBhZGQgZGlmZmVyZW50IGFyaXRobWV0aWMgZnVuY3Rpb24gY29tcG9uZW50cyBoZXJlIChtYXkgY29udGFpbiBhbGwgaW4gdGhpcyBmaWxlIGZvciBub3cpXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wnPlxuICAgICAgey8qIDxidXR0b24+XG4gICAgICAgIDxQbHVzQ2lyY2xlSWNvbiBjbGFzc05hbWU9J2gtOCB3LTggbWQ6aC04IG1kOnctOCBmbGV4LXNocmluay0wJyAvPlxuICAgICAgPC9idXR0b24+ICovfVxuICAgICAge2FyaXRobWV0aWNfZnVuY3Rpb25zLm1hcCgoZnVuYykgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00Jz5cbiAgICAgICAgICA8QnV0dG9uIGtleT17ZnVuYy50ZXh0fT57ZnVuYy50ZXh0fTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZ1bmN0aW9ucyIsImNvdW50Iiwic2V0Q291bnQiLCJhcml0aG1ldGljX2Z1bmN0aW9ucyIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJmdW5jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/counter/functions.tsx\n"));

/***/ })

});