"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/hooks/useGlobalState.ts":
/*!*************************************!*\
  !*** ./src/hooks/useGlobalState.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSnackbarState: function() { return /* binding */ useSnackbarState; },\n/* harmony export */   useUserState: function() { return /* binding */ useUserState; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\nvar _s = $RefreshSig$(),\n  _s2 = $RefreshSig$();\n\nvar useUserState = function useUserState() {\n  _s();\n  var fallbackData = {\n    id: 0,\n    name: '',\n    email: '',\n    startDate: undefined,\n    endDate: undefined,\n    image: {\n      url: ''\n    },\n    isSignedIn: false,\n    isFetched: false\n  };\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('user', null, {\n      fallbackData: fallbackData\n    }),\n    state = _useSWR.data,\n    setState = _useSWR.mutate;\n  return [state, setState];\n};\n_s(useUserState, \"wwCxptk/JQVHNgJwk6IjAdLB0bc=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\nvar useSnackbarState = function useSnackbarState() {\n  _s2();\n  var fallbackData = {\n    message: null,\n    severity: null,\n    pathname: null\n  };\n  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('snackbar', null, {\n      fallbackData: fallbackData\n    }),\n    state = _useSWR2.data,\n    setState = _useSWR2.mutate;\n  return [state, setState];\n};\n_s2(useSnackbarState, \"wwCxptk/JQVHNgJwk6IjAdLB0bc=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR2xvYmFsU3RhdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFFakIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBY2hDLElBQU1DLFlBQTJCLEdBQUc7SUFDbENDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRSxFQUFFO0lBQ1JDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLFNBQVMsRUFBRUMsU0FBUztJQUNwQkMsT0FBTyxFQUFFRCxTQUFTO0lBQ2xCRSxLQUFLLEVBQUU7TUFDTEMsR0FBRyxFQUFFO0lBQ1AsQ0FBQztJQUNEQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUVELElBQUFDLE9BQUEsR0FBMENkLCtDQUFNLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtNQUM3REcsWUFBWSxFQUFFQTtJQUNoQixDQUFDLENBQUM7SUFGWVksS0FBSyxHQUFBRCxPQUFBLENBQVhFLElBQUk7SUFBaUJDLFFBQVEsR0FBQUgsT0FBQSxDQUFoQkksTUFBTTtFQUczQixPQUFPLENBQUNILEtBQUssRUFBRUUsUUFBUSxDQUFDO0FBQzFCLENBQUM7QUFBQWYsRUFBQSxDQS9CWUQsWUFBWTtFQUFBLFFBMkJtQkQsMkNBQU07QUFBQTtBQU0zQyxJQUFNbUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0VBQUFDLEdBQUE7RUFPcEMsSUFBTWpCLFlBQStCLEdBQUc7SUFDdENrQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0QsSUFBQUMsUUFBQSxHQUEwQ3hCLCtDQUFNLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRTtNQUNqRUcsWUFBWSxFQUFFQTtJQUNoQixDQUFDLENBQUM7SUFGWVksS0FBSyxHQUFBUyxRQUFBLENBQVhSLElBQUk7SUFBaUJDLFFBQVEsR0FBQU8sUUFBQSxDQUFoQk4sTUFBTTtFQUczQixPQUFPLENBQUNILEtBQUssRUFBRUUsUUFBUSxDQUFDO0FBSTFCLENBQUM7QUFBQUcsR0FBQSxDQW5CWUQsZ0JBQWdCO0VBQUEsUUFZZW5CLDJDQUFNO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUdsb2JhbFN0YXRlLnRzPzZmMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmV4cG9ydCBjb25zdCB1c2VVc2VyU3RhdGUgPSAoKSA9PiB7XG4gIHR5cGUgdXNlclN0YXRlVHlwZSA9IHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZW1haWw6IHN0cmluZ1xuICAgIHN0YXJ0RGF0ZTogRGF0ZSB8IHVuZGVmaW5lZFxuICAgIGVuZERhdGU6IERhdGUgfCB1bmRlZmluZWRcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzdHJpbmdcbiAgICB9XG4gICAgaXNTaWduZWRJbjogYm9vbGVhblxuICAgIGlzRmV0Y2hlZDogYm9vbGVhblxuICB9XG5cbiAgY29uc3QgZmFsbGJhY2tEYXRhOiB1c2VyU3RhdGVUeXBlID0ge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBzdGFydERhdGU6IHVuZGVmaW5lZCxcbiAgICBlbmREYXRlOiB1bmRlZmluZWQsXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogJycsXG4gICAgfSxcbiAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICBpc0ZldGNoZWQ6IGZhbHNlLFxuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBzdGF0ZSwgbXV0YXRlOiBzZXRTdGF0ZSB9ID0gdXNlU1dSKCd1c2VyJywgbnVsbCwge1xuICAgIGZhbGxiYWNrRGF0YTogZmFsbGJhY2tEYXRhLFxuICB9KVxuICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV0gYXMgW3VzZXJTdGF0ZVR5cGUsICh2YWx1ZTogdXNlclN0YXRlVHlwZSkgPT4gdm9pZF1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNuYWNrYmFyU3RhdGUgPSAoKSA9PiB7XG4gIHR5cGUgc25hY2tiYXJTdGF0ZVR5cGUgPSB7XG4gICAgbWVzc2FnZTogbnVsbCB8IHN0cmluZ1xuICAgIHNldmVyaXR5OiBudWxsIHwgJ3N1Y2Nlc3MnIHwgJ2Vycm9yJ1xuICAgIHBhdGhuYW1lOiBudWxsIHwgc3RyaW5nXG4gIH1cblxuICBjb25zdCBmYWxsYmFja0RhdGE6IHNuYWNrYmFyU3RhdGVUeXBlID0ge1xuICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgc2V2ZXJpdHk6IG51bGwsXG4gICAgcGF0aG5hbWU6IG51bGwsXG4gIH1cbiAgY29uc3QgeyBkYXRhOiBzdGF0ZSwgbXV0YXRlOiBzZXRTdGF0ZSB9ID0gdXNlU1dSKCdzbmFja2JhcicsIG51bGwsIHtcbiAgICBmYWxsYmFja0RhdGE6IGZhbGxiYWNrRGF0YSxcbiAgfSlcbiAgcmV0dXJuIFtzdGF0ZSwgc2V0U3RhdGVdIGFzIFtcbiAgICBzbmFja2JhclN0YXRlVHlwZSxcbiAgICAodmFsdWU6IHNuYWNrYmFyU3RhdGVUeXBlKSA9PiB2b2lkLFxuICBdXG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlVXNlclN0YXRlIiwiX3MiLCJmYWxsYmFja0RhdGEiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInN0YXJ0RGF0ZSIsInVuZGVmaW5lZCIsImVuZERhdGUiLCJpbWFnZSIsInVybCIsImlzU2lnbmVkSW4iLCJpc0ZldGNoZWQiLCJfdXNlU1dSIiwic3RhdGUiLCJkYXRhIiwic2V0U3RhdGUiLCJtdXRhdGUiLCJ1c2VTbmFja2JhclN0YXRlIiwiX3MyIiwibWVzc2FnZSIsInNldmVyaXR5IiwicGF0aG5hbWUiLCJfdXNlU1dSMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useGlobalState.ts\n"));

/***/ })

});