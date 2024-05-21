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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _LinkTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkTab */ \"./src/components/LinkTab.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/HomeLayout.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  _s();\n  var children = _ref.children,\n    pageUrl = _ref.pageUrl;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_9__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 21\n  }, this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 21\n  }, this);\n  var diaries = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(data.diaries);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(data.meta);\n  var totalDiariesCount = function totalDiariesCount(diaries) {\n    var count = 0;\n    for (var i = 0; i < diaries.length; i++) {\n      if (diaries[i] && diaries[i].status !== 'unsaved') count += 1;\n    }\n    return count;\n  };\n  var handleChange = function handleChange(event, value) {\n    return router.push('/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Container, {\n      maxWidth: \"xs\",\n      sx: {\n        pt: 6,\n        display: {\n          xs: 'none',\n          lg: 'block'\n        }\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: user.id,\n        name: user.name,\n        country: user.country,\n        uni: user.uni,\n        bio: user.bio,\n        startDate: user.start_date,\n        endDate: user.end_date,\n        image: user.image.url,\n        diaries: user.diaries,\n        totalDiariesCount: totalDiariesCount(user.diaries),\n        totalLikesCount: user.total_likes_count,\n        following: user.following,\n        followers: user.followers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Card, {\n        sx: {\n          borderRadius: 2\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.CardContent, {\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            value: pageUrl || false,\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"All\",\n              href: \"/\",\n              value: \"/\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 15\n            }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"Following\",\n              href: \"/following_diaries\",\n              value: \"/following_diaries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Divider, {\n            sx: {\n              mb: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 141,\n            columnNumber: 13\n          }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n            children: children\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 142,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 5\n  }, this);\n}\n_s(Layout, \"LnT+ipsCDd40yL0OhV6o9Av5n1k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1RNLCtEQUFZLEVBR0hMLDJDQUFNO0FBQUE7QUFBQXlFLEVBQUEsR0FMUi9ELE1BQU07QUFBQSxJQUFBK0QsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZUxheW91dC50c3g/NjU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEdyaWQsXG4gIENvbnRhaW5lcixcbiAgUGFnaW5hdGlvbixcbiAgQ2FyZCxcbiAgRGl2aWRlcixcbiAgQ2FyZENvbnRlbnQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnXG5pbXBvcnQgY2FtZWxjYXNlS2V5cyBmcm9tICdjYW1lbGNhc2Uta2V5cydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBMaW5rVGFiIGZyb20gJy4vTGlua1RhYidcbmltcG9ydCBEaWFyeUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0RpYXJ5Q2FyZCdcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQnXG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJ1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnQC9zdHlsZXMnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxudHlwZSBEaWFyeVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiB7XG4gICAgdXJsOiBzdHJpbmdcbiAgfVxuICB3b3JkQ291bnQ6IG51bWJlclxuICBkYXk6IHN0cmluZ1xuICBtb250aE5hbWU6IHN0cmluZ1xuICBtb250aDogc3RyaW5nXG4gIHllYXI6IHN0cmluZ1xuICB3RGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc3RyaW5nXG4gICAgfVxuICB9XG4gIGRpYXJpZXM6IERpYXJ5W11cbiAgZmF2b3JpdGVzOiB7IHVzZXJfaWQ6IG51bWJlciB9W11cbiAgZGlhcnlDb21tZW50czogb2JqZWN0W11cbn1cblxudHlwZSBEaWFyeSA9IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZTogeyB1cmw6IHN0cmluZyB9XG4gIHdvcmRDb3VudDogbnVtYmVyXG4gIGRheTogbnVtYmVyXG4gIG1vbnRoTmFtZTogc3RyaW5nXG4gIHllYXI6IG51bWJlclxuICB3RGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHsgdXJsOiBzdHJpbmcgfVxuICB9XG4gIHN0YXR1czogc3RyaW5nXG4gIGZhdm9yaXRlczogbnVtYmVyXG4gIGRpYXJ5Q29tbWVudHM6IG51bWJlclxufVxuXG50eXBlIFByb3BzID0ge1xuICBwYWdlVXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIHBhZ2VVcmwgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbdXNlcl0gPSB1c2VVc2VyU3RhdGUoKVxuICBjb25zdCBwYWdlID0gJ3BhZ2UnIGluIHJvdXRlci5xdWVyeSA/IE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSkgOiAxXG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArICcvZGlhcmllcy8/cGFnZT0nICsgcGFnZVxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmcgLz5cblxuICBjb25zdCBkaWFyaWVzID0gY2FtZWxjYXNlS2V5cyhkYXRhLmRpYXJpZXMpXG5cbiAgY29uc3QgbWV0YSA9IGNhbWVsY2FzZUtleXMoZGF0YS5tZXRhKVxuXG4gIGNvbnN0IHRvdGFsRGlhcmllc0NvdW50ID0gKGRpYXJpZXM6IERpYXJ5W10pID0+IHtcbiAgICBsZXQgY291bnQgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWFyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZGlhcmllc1tpXSAmJiBkaWFyaWVzW2ldLnN0YXR1cyAhPT0gJ3Vuc2F2ZWQnKSBjb3VudCArPSAxXG4gICAgfVxuICAgIHJldHVybiBjb3VudFxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx1bmtub3duPiwgdmFsdWU6IG51bWJlcikgPT5cbiAgICByb3V0ZXIucHVzaCgnLz9wYWdlPScgKyB2YWx1ZSlcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17c3R5bGVzLnBhZ2VNaW5IZWlnaHR9XG4gICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZlMGI2JywgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtYXhXaWR0aD1cInhzXCJcbiAgICAgICAgc3g9e3sgcHQ6IDYsIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbGc6ICdibG9jaycgfSB9fVxuICAgICAgPlxuICAgICAgICA8UHJvZmlsZUNhcmRcbiAgICAgICAgICBpZD17dXNlci5pZH1cbiAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgY291bnRyeT17dXNlci5jb3VudHJ5fVxuICAgICAgICAgIHVuaT17dXNlci51bml9XG4gICAgICAgICAgYmlvPXt1c2VyLmJpb31cbiAgICAgICAgICBzdGFydERhdGU9e3VzZXIuc3RhcnRfZGF0ZX1cbiAgICAgICAgICBlbmREYXRlPXt1c2VyLmVuZF9kYXRlfVxuICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlLnVybH1cbiAgICAgICAgICBkaWFyaWVzPXt1c2VyLmRpYXJpZXN9XG4gICAgICAgICAgdG90YWxEaWFyaWVzQ291bnQ9e3RvdGFsRGlhcmllc0NvdW50KHVzZXIuZGlhcmllcyl9XG4gICAgICAgICAgdG90YWxMaWtlc0NvdW50PXt1c2VyLnRvdGFsX2xpa2VzX2NvdW50fVxuICAgICAgICAgIGZvbGxvd2luZz17dXNlci5mb2xsb3dpbmd9XG4gICAgICAgICAgZm9sbG93ZXJzPXt1c2VyLmZvbGxvd2Vyc31cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3g9e3sgcHk6IDYgfX0+XG4gICAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogMiB9fT5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VGFicyB2YWx1ZT17cGFnZVVybCB8fCBmYWxzZX0+XG4gICAgICAgICAgICAgIDxMaW5rVGFiIGxhYmVsPVwiQWxsXCIgaHJlZj1cIi9cIiB2YWx1ZT1cIi9cIiAvPlxuICAgICAgICAgICAgICA8TGlua1RhYlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9sbG93aW5nXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2ZvbGxvd2luZ19kaWFyaWVzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIi9mb2xsb3dpbmdfZGlhcmllc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8RGl2aWRlciBzeD17eyBtYjogMiB9fSAvPlxuICAgICAgICAgICAgPEJveD57Y2hpbGRyZW59PC9Cb3g+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJDYXJkIiwiRGl2aWRlciIsIkNhcmRDb250ZW50IiwiVGFicyIsImNhbWVsY2FzZUtleXMiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJMaW5rVGFiIiwiRXJyb3IiLCJMb2FkaW5nIiwiUHJvZmlsZUNhcmQiLCJ1c2VVc2VyU3RhdGUiLCJzdHlsZXMiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIkxheW91dCIsIl9yZWYiLCJfcyIsImNoaWxkcmVuIiwicGFnZVVybCIsInJvdXRlciIsIl91c2VVc2VyU3RhdGUiLCJfdXNlVXNlclN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJfdXNlU1dSIiwiZGF0YSIsImVycm9yIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZGlhcmllcyIsIm1ldGEiLCJ0b3RhbERpYXJpZXNDb3VudCIsImNvdW50IiwiaSIsImxlbmd0aCIsInN0YXR1cyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwdXNoIiwiY3NzIiwicGFnZU1pbkhlaWdodCIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIm1heFdpZHRoIiwicHQiLCJ4cyIsImxnIiwiaWQiLCJuYW1lIiwiY291bnRyeSIsInVuaSIsImJpbyIsInN0YXJ0RGF0ZSIsInN0YXJ0X2RhdGUiLCJlbmREYXRlIiwiZW5kX2RhdGUiLCJpbWFnZSIsInRvdGFsTGlrZXNDb3VudCIsInRvdGFsX2xpa2VzX2NvdW50IiwiZm9sbG93aW5nIiwiZm9sbG93ZXJzIiwicHkiLCJib3JkZXJSYWRpdXMiLCJsYWJlbCIsImhyZWYiLCJtYiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HomeLayout.tsx\n"));

/***/ })

});