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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useSnackbarState: function() { return /* binding */ useSnackbarState; },\n/* harmony export */   useUserState: function() { return /* binding */ useUserState; }\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\nvar _s = $RefreshSig$(),\n  _s2 = $RefreshSig$();\n\nvar useUserState = function useUserState() {\n  _s();\n  var fallbackData = {\n    id: 0,\n    name: '',\n    email: '',\n    country: '',\n    uni: '',\n    bio: '',\n    start_date: '',\n    end_date: '',\n    image: {\n      url: ''\n    },\n    following: [],\n    followers: [],\n    isSignedIn: false,\n    isFetched: false\n  };\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('user', null, {\n      fallbackData: fallbackData\n    }),\n    state = _useSWR.data,\n    setState = _useSWR.mutate;\n  return [state, setState];\n};\n_s(useUserState, \"wwCxptk/JQVHNgJwk6IjAdLB0bc=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\nvar useSnackbarState = function useSnackbarState() {\n  _s2();\n  var fallbackData = {\n    message: null,\n    severity: null,\n    pathname: null\n  };\n  var _useSWR2 = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('snackbar', null, {\n      fallbackData: fallbackData\n    }),\n    state = _useSWR2.data,\n    setState = _useSWR2.mutate;\n  return [state, setState];\n};\n_s2(useSnackbarState, \"wwCxptk/JQVHNgJwk6IjAdLB0bc=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR2xvYmFsU3RhdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFFakIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBa0JoQyxJQUFNQyxZQUEyQixHQUFHO0lBQ2xDQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUUsRUFBRTtJQUNSQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxPQUFPLEVBQUUsRUFBRTtJQUNYQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxHQUFHLEVBQUUsRUFBRTtJQUNQQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxLQUFLLEVBQUU7TUFDTEMsR0FBRyxFQUFFO0lBQ1AsQ0FBQztJQUNEQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxTQUFTLEVBQUUsRUFBRTtJQUNiQyxVQUFVLEVBQUUsS0FBSztJQUNqQkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUVELElBQUFDLE9BQUEsR0FBMENsQiwrQ0FBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7TUFDN0RHLFlBQVksRUFBRUE7SUFDaEIsQ0FBQyxDQUFDO0lBRllnQixLQUFLLEdBQUFELE9BQUEsQ0FBWEUsSUFBSTtJQUFpQkMsUUFBUSxHQUFBSCxPQUFBLENBQWhCSSxNQUFNO0VBRzNCLE9BQU8sQ0FBQ0gsS0FBSyxFQUFFRSxRQUFRLENBQUM7QUFDMUIsQ0FBQztBQUFBbkIsRUFBQSxDQXhDWUQsWUFBWTtFQUFBLFFBb0NtQkQsMkNBQU07QUFBQTtBQU0zQyxJQUFNdUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQSxFQUFTO0VBQUFDLEdBQUE7RUFPcEMsSUFBTXJCLFlBQStCLEdBQUc7SUFDdENzQixPQUFPLEVBQUUsSUFBSTtJQUNiQyxRQUFRLEVBQUUsSUFBSTtJQUNkQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0QsSUFBQUMsUUFBQSxHQUEwQzVCLCtDQUFNLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRTtNQUNqRUcsWUFBWSxFQUFFQTtJQUNoQixDQUFDLENBQUM7SUFGWWdCLEtBQUssR0FBQVMsUUFBQSxDQUFYUixJQUFJO0lBQWlCQyxRQUFRLEdBQUFPLFFBQUEsQ0FBaEJOLE1BQU07RUFHM0IsT0FBTyxDQUFDSCxLQUFLLEVBQUVFLFFBQVEsQ0FBQztBQUkxQixDQUFDO0FBQUFHLEdBQUEsQ0FuQllELGdCQUFnQjtFQUFBLFFBWWV2QiwyQ0FBTTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VHbG9iYWxTdGF0ZS50cz82ZjMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuXG5leHBvcnQgY29uc3QgdXNlVXNlclN0YXRlID0gKCkgPT4ge1xuICB0eXBlIHVzZXJTdGF0ZVR5cGUgPSB7XG4gICAgaWQ6IG51bWJlclxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGVtYWlsOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIHN0YXJ0X2RhdGU6IHN0cmluZ1xuICAgIGVuZF9kYXRlOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgICBmb2xsb3dpbmc6IFtdXG4gICAgaXNTaWduZWRJbjogYm9vbGVhblxuICAgIGlzRmV0Y2hlZDogYm9vbGVhblxuICB9XG5cbiAgY29uc3QgZmFsbGJhY2tEYXRhOiB1c2VyU3RhdGVUeXBlID0ge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBjb3VudHJ5OiAnJyxcbiAgICB1bmk6ICcnLFxuICAgIGJpbzogJycsXG4gICAgc3RhcnRfZGF0ZTogJycsXG4gICAgZW5kX2RhdGU6ICcnLFxuICAgIGltYWdlOiB7XG4gICAgICB1cmw6ICcnLFxuICAgIH0sXG4gICAgZm9sbG93aW5nOiBbXSxcbiAgICBmb2xsb3dlcnM6IFtdLFxuICAgIGlzU2lnbmVkSW46IGZhbHNlLFxuICAgIGlzRmV0Y2hlZDogZmFsc2UsXG4gIH1cblxuICBjb25zdCB7IGRhdGE6IHN0YXRlLCBtdXRhdGU6IHNldFN0YXRlIH0gPSB1c2VTV1IoJ3VzZXInLCBudWxsLCB7XG4gICAgZmFsbGJhY2tEYXRhOiBmYWxsYmFja0RhdGEsXG4gIH0pXG4gIHJldHVybiBbc3RhdGUsIHNldFN0YXRlXSBhcyBbdXNlclN0YXRlVHlwZSwgKHZhbHVlOiB1c2VyU3RhdGVUeXBlKSA9PiB2b2lkXVxufVxuXG5leHBvcnQgY29uc3QgdXNlU25hY2tiYXJTdGF0ZSA9ICgpID0+IHtcbiAgdHlwZSBzbmFja2JhclN0YXRlVHlwZSA9IHtcbiAgICBtZXNzYWdlOiBudWxsIHwgc3RyaW5nXG4gICAgc2V2ZXJpdHk6IG51bGwgfCAnc3VjY2VzcycgfCAnZXJyb3InXG4gICAgcGF0aG5hbWU6IG51bGwgfCBzdHJpbmdcbiAgfVxuXG4gIGNvbnN0IGZhbGxiYWNrRGF0YTogc25hY2tiYXJTdGF0ZVR5cGUgPSB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICBzZXZlcml0eTogbnVsbCxcbiAgICBwYXRobmFtZTogbnVsbCxcbiAgfVxuICBjb25zdCB7IGRhdGE6IHN0YXRlLCBtdXRhdGU6IHNldFN0YXRlIH0gPSB1c2VTV1IoJ3NuYWNrYmFyJywgbnVsbCwge1xuICAgIGZhbGxiYWNrRGF0YTogZmFsbGJhY2tEYXRhLFxuICB9KVxuICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV0gYXMgW1xuICAgIHNuYWNrYmFyU3RhdGVUeXBlLFxuICAgICh2YWx1ZTogc25hY2tiYXJTdGF0ZVR5cGUpID0+IHZvaWQsXG4gIF1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VVc2VyU3RhdGUiLCJfcyIsImZhbGxiYWNrRGF0YSIsImlkIiwibmFtZSIsImVtYWlsIiwiY291bnRyeSIsInVuaSIsImJpbyIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsImltYWdlIiwidXJsIiwiZm9sbG93aW5nIiwiZm9sbG93ZXJzIiwiaXNTaWduZWRJbiIsImlzRmV0Y2hlZCIsIl91c2VTV1IiLCJzdGF0ZSIsImRhdGEiLCJzZXRTdGF0ZSIsIm11dGF0ZSIsInVzZVNuYWNrYmFyU3RhdGUiLCJfczIiLCJtZXNzYWdlIiwic2V2ZXJpdHkiLCJwYXRobmFtZSIsIl91c2VTV1IyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useGlobalState.ts\n"));

/***/ })

});