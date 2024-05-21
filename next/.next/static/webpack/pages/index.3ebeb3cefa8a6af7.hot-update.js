"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/HomeLayout.tsx":
/*!***************************************!*\
  !*** ./src/components/HomeLayout.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _LinkTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkTab */ \"./src/components/LinkTab.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/HomeLayout.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n  var children = _ref.children,\n    pageUrl = _ref.pageUrl;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_9__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 21\n  }, this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 93,\n    columnNumber: 21\n  }, this);\n  var diaries = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(data.diaries);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(data.meta);\n  var totalDiariesCount = function totalDiariesCount(diaries) {\n    var count = 0;\n    for (var i = 0; i < diaries.length; i++) {\n      if (diaries[i] && diaries[i].status !== 'unsaved') count += 1;\n    }\n    return count;\n  };\n  var handleChange = function handleChange(event, value) {\n    return router.push('/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Container, {\n      maxWidth: \"xs\",\n      sx: {\n        pt: 6,\n        display: {\n          xs: 'none',\n          lg: 'block'\n        }\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: user.id,\n        name: user.name,\n        country: user.country,\n        uni: user.uni,\n        bio: user.bio,\n        startDate: user.start_date,\n        endDate: user.end_date,\n        image: user.image.url,\n        diaries: user.diaries,\n        totalDiariesCount: totalDiariesCount(user.diaries),\n        totalLikesCount: user.total_likes_count,\n        following: user.following,\n        followers: user.followers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Card, {\n        sx: {\n          borderRadius: 2\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.CardContent, {\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            value: pageUrl || false,\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"All\",\n              href: \"/\",\n              value: \"/\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 15\n            }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"Following\",\n              href: \"/following_diaries\",\n              value: \"/following_diaries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Divider, {\n            sx: {\n              mb: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 13\n          }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n            children: children\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 5\n  }, this);\n}\n_s(Layout, \"LnT+ipsCDd40yL0OhV6o9Av5n1k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSwrREFBWSxFQUdITCwyQ0FBTTtBQUFBO0FBQUF5RSxFQUFBLEdBVlIvRCxNQUFNO0FBQUEsSUFBQStELEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWVMYXlvdXQudHN4PzY1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBHcmlkLFxuICBDb250YWluZXIsXG4gIFBhZ2luYXRpb24sXG4gIENhcmQsXG4gIERpdmlkZXIsXG4gIENhcmRDb250ZW50LFxuICBUeXBvZ3JhcGh5LFxufSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFRhYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJzJ1xuaW1wb3J0IGNhbWVsY2FzZUtleXMgZnJvbSAnY2FtZWxjYXNlLWtleXMnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgTGlua1RhYiBmcm9tICcuL0xpbmtUYWInXG5pbXBvcnQgRGlhcnlDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9EaWFyeUNhcmQnXG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgUHJvZmlsZUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2ZpbGVDYXJkJ1xuaW1wb3J0IHsgdXNlVXNlclN0YXRlIH0gZnJvbSAnQC9ob29rcy91c2VHbG9iYWxTdGF0ZSdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJ0Avc3R5bGVzJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbnR5cGUgRGlhcnlQcm9wcyA9IHtcbiAgaWQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZToge1xuICAgIHVybDogc3RyaW5nXG4gIH1cbiAgd29yZENvdW50OiBudW1iZXJcbiAgZGF5OiBzdHJpbmdcbiAgbW9udGhOYW1lOiBzdHJpbmdcbiAgbW9udGg6IHN0cmluZ1xuICB5ZWFyOiBzdHJpbmdcbiAgd0RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgY291bnRyeTogc3RyaW5nXG4gICAgdW5pOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgfVxuICBkaWFyaWVzOiBEaWFyeVtdXG4gIGZhdm9yaXRlczogeyB1c2VyX2lkOiBudW1iZXIgfVtdXG4gIGRpYXJ5Q29tbWVudHM6IG9iamVjdFtdXG59XG5cbnR5cGUgRGlhcnkgPSB7XG4gIGlkOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW1hZ2U6IHsgdXJsOiBzdHJpbmcgfVxuICB3b3JkQ291bnQ6IG51bWJlclxuICBkYXk6IG51bWJlclxuICBtb250aE5hbWU6IHN0cmluZ1xuICB5ZWFyOiBudW1iZXJcbiAgd0RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgY291bnRyeTogc3RyaW5nXG4gICAgdW5pOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7IHVybDogc3RyaW5nIH1cbiAgfVxuICBzdGF0dXM6IHN0cmluZ1xuICBmYXZvcml0ZXM6IG51bWJlclxuICBkaWFyeUNvbW1lbnRzOiBudW1iZXJcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgcGFnZVVybD86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoe1xuICBjaGlsZHJlbixcbiAgcGFnZVVybCxcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbdXNlcl0gPSB1c2VVc2VyU3RhdGUoKVxuICBjb25zdCBwYWdlID0gJ3BhZ2UnIGluIHJvdXRlci5xdWVyeSA/IE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSkgOiAxXG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArICcvZGlhcmllcy8/cGFnZT0nICsgcGFnZVxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmcgLz5cblxuICBjb25zdCBkaWFyaWVzID0gY2FtZWxjYXNlS2V5cyhkYXRhLmRpYXJpZXMpXG5cbiAgY29uc3QgbWV0YSA9IGNhbWVsY2FzZUtleXMoZGF0YS5tZXRhKVxuXG4gIGNvbnN0IHRvdGFsRGlhcmllc0NvdW50ID0gKGRpYXJpZXM6IERpYXJ5W10pID0+IHtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWFyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlhcmllc1tpXSAmJiBkaWFyaWVzW2ldLnN0YXR1cyAhPT0gJ3Vuc2F2ZWQnKSBjb3VudCArPSAxXG4gICAgfVxuICAgIHJldHVybiBjb3VudFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx1bmtub3duPiwgdmFsdWU6IG51bWJlcikgPT5cbiAgICByb3V0ZXIucHVzaCgnLz9wYWdlPScgKyB2YWx1ZSlcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17c3R5bGVzLnBhZ2VNaW5IZWlnaHR9XG4gICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZlMGI2JywgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtYXhXaWR0aD1cInhzXCJcbiAgICAgICAgc3g9e3sgcHQ6IDYsIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbGc6ICdibG9jaycgfSB9fVxuICAgICAgPlxuICAgICAgICA8UHJvZmlsZUNhcmRcbiAgICAgICAgICBpZD17dXNlci5pZH1cbiAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgY291bnRyeT17dXNlci5jb3VudHJ5fVxuICAgICAgICAgIHVuaT17dXNlci51bml9XG4gICAgICAgICAgYmlvPXt1c2VyLmJpb31cbiAgICAgICAgICBzdGFydERhdGU9e3VzZXIuc3RhcnRfZGF0ZX1cbiAgICAgICAgICBlbmREYXRlPXt1c2VyLmVuZF9kYXRlfVxuICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlLnVybH1cbiAgICAgICAgICBkaWFyaWVzPXt1c2VyLmRpYXJpZXN9XG4gICAgICAgICAgdG90YWxEaWFyaWVzQ291bnQ9e3RvdGFsRGlhcmllc0NvdW50KHVzZXIuZGlhcmllcyl9XG4gICAgICAgICAgdG90YWxMaWtlc0NvdW50PXt1c2VyLnRvdGFsX2xpa2VzX2NvdW50fVxuICAgICAgICAgIGZvbGxvd2luZz17dXNlci5mb2xsb3dpbmd9XG4gICAgICAgICAgZm9sbG93ZXJzPXt1c2VyLmZvbGxvd2Vyc31cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3g9e3sgcHk6IDYgfX0+XG4gICAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogMiB9fT5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VGFicyB2YWx1ZT17cGFnZVVybCB8fCBmYWxzZX0+XG4gICAgICAgICAgICAgIDxMaW5rVGFiIGxhYmVsPVwiQWxsXCIgaHJlZj1cIi9cIiB2YWx1ZT1cIi9cIiAvPlxuICAgICAgICAgICAgICA8TGlua1RhYlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9sbG93aW5nXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2ZvbGxvd2luZ19kaWFyaWVzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIi9mb2xsb3dpbmdfZGlhcmllc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8RGl2aWRlciBzeD17eyBtYjogMiB9fSAvPlxuICAgICAgICAgICAgPEJveD57Y2hpbGRyZW59PC9Cb3g+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJDYXJkIiwiRGl2aWRlciIsIkNhcmRDb250ZW50IiwiVGFicyIsImNhbWVsY2FzZUtleXMiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJMaW5rVGFiIiwiRXJyb3IiLCJMb2FkaW5nIiwiUHJvZmlsZUNhcmQiLCJ1c2VVc2VyU3RhdGUiLCJzdHlsZXMiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIkxheW91dCIsIl9yZWYiLCJfcyIsImNoaWxkcmVuIiwicGFnZVVybCIsInJvdXRlciIsIl91c2VVc2VyU3RhdGUiLCJfdXNlVXNlclN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJfdXNlU1dSIiwiZGF0YSIsImVycm9yIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZGlhcmllcyIsIm1ldGEiLCJ0b3RhbERpYXJpZXNDb3VudCIsImNvdW50IiwiaSIsImxlbmd0aCIsInN0YXR1cyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwdXNoIiwiY3NzIiwicGFnZU1pbkhlaWdodCIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIm1heFdpZHRoIiwicHQiLCJ4cyIsImxnIiwiaWQiLCJuYW1lIiwiY291bnRyeSIsInVuaSIsImJpbyIsInN0YXJ0RGF0ZSIsInN0YXJ0X2RhdGUiLCJlbmREYXRlIiwiZW5kX2RhdGUiLCJpbWFnZSIsInRvdGFsTGlrZXNDb3VudCIsInRvdGFsX2xpa2VzX2NvdW50IiwiZm9sbG93aW5nIiwiZm9sbG93ZXJzIiwicHkiLCJib3JkZXJSYWRpdXMiLCJsYWJlbCIsImhyZWYiLCJtYiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HomeLayout.tsx\n"));

/***/ })

});