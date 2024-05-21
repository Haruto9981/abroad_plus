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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _LinkTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkTab */ \"./src/components/LinkTab.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/HomeLayout.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n  var children = _ref.children,\n    pageUrl = _ref.pageUrl;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_9__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 21\n  }, _this);\n  var totalDiariesCount = function totalDiariesCount(diaries) {\n    var count = 0;\n    for (var i = 0; i < diaries.length; i++) {\n      if (diaries[i] && diaries[i].status !== 'unsaved') count += 1;\n    }\n    return count;\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"xs\",\n      sx: {\n        pt: 6,\n        display: {\n          xs: 'none',\n          lg: 'block'\n        }\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: user.id,\n        name: user.name,\n        country: user.country,\n        uni: user.uni,\n        bio: user.bio,\n        startDate: user.start_date,\n        endDate: user.end_date,\n        image: user.image.url,\n        diaries: user.diaries,\n        totalDiariesCount: totalDiariesCount(user.diaries),\n        totalLikesCount: user.total_likes_count,\n        following: user.following,\n        followers: user.followers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Card, {\n        sx: {\n          borderRadius: 2\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.CardContent, {\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            value: pageUrl || false,\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"All\",\n              href: \"/\",\n              value: \"/\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"Following\",\n              href: \"/following_diaries\",\n              value: \"/following_diaries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Divider, {\n            sx: {\n              mb: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n            children: children\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 5\n  }, _this);\n};\n_s(Layout, \"LnT+ipsCDd40yL0OhV6o9Av5n1k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2NvbXBvbmVudHMvSG9tZUxheW91dC50c3g/NjU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgQ2FyZCwgRGl2aWRlciwgQ2FyZENvbnRlbnQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IFRhYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBMaW5rVGFiIGZyb20gJy4vTGlua1RhYidcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQnXG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJ1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnQC9zdHlsZXMnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxudHlwZSBEaWFyeVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiB7XG4gICAgdXJsOiBzdHJpbmdcbiAgfVxuICB3b3JkQ291bnQ6IG51bWJlclxuICBkYXk6IHN0cmluZ1xuICBtb250aE5hbWU6IHN0cmluZ1xuICBtb250aDogc3RyaW5nXG4gIHllYXI6IHN0cmluZ1xuICB3RGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc3RyaW5nXG4gICAgfVxuICB9XG4gIGRpYXJpZXM6IERpYXJ5W11cbiAgZmF2b3JpdGVzOiB7IHVzZXJfaWQ6IG51bWJlciB9W11cbiAgZGlhcnlDb21tZW50czogb2JqZWN0W11cbn1cblxudHlwZSBEaWFyeSA9IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZTogeyB1cmw6IHN0cmluZyB9XG4gIHdvcmRDb3VudDogbnVtYmVyXG4gIGRheTogbnVtYmVyXG4gIG1vbnRoTmFtZTogc3RyaW5nXG4gIHllYXI6IG51bWJlclxuICB3RGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHsgdXJsOiBzdHJpbmcgfVxuICB9XG4gIHN0YXR1czogc3RyaW5nXG4gIGZhdm9yaXRlczogbnVtYmVyXG4gIGRpYXJ5Q29tbWVudHM6IG51bWJlclxufVxuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIHBhZ2VVcmw6IHN0cmluZ1xufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgcGFnZVVybCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbdXNlcl0gPSB1c2VVc2VyU3RhdGUoKVxuICBjb25zdCBwYWdlID0gJ3BhZ2UnIGluIHJvdXRlci5xdWVyeSA/IE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSkgOiAxXG4gIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArICcvZGlhcmllcy8/cGFnZT0nICsgcGFnZVxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmcgLz5cblxuICBjb25zdCB0b3RhbERpYXJpZXNDb3VudCA9IChkaWFyaWVzOiBEaWFyeVtdKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlhcmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRpYXJpZXNbaV0gJiYgZGlhcmllc1tpXS5zdGF0dXMgIT09ICd1bnNhdmVkJykgY291bnQgKz0gMVxuICAgIH1cbiAgICByZXR1cm4gY291bnRcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY3NzPXtzdHlsZXMucGFnZU1pbkhlaWdodH1cbiAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmUwYjYnLCBkaXNwbGF5OiAnZmxleCcgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIG1heFdpZHRoPVwieHNcIlxuICAgICAgICBzeD17eyBwdDogNiwgZGlzcGxheTogeyB4czogJ25vbmUnLCBsZzogJ2Jsb2NrJyB9IH19XG4gICAgICA+XG4gICAgICAgIDxQcm9maWxlQ2FyZFxuICAgICAgICAgIGlkPXt1c2VyLmlkfVxuICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICBjb3VudHJ5PXt1c2VyLmNvdW50cnl9XG4gICAgICAgICAgdW5pPXt1c2VyLnVuaX1cbiAgICAgICAgICBiaW89e3VzZXIuYmlvfVxuICAgICAgICAgIHN0YXJ0RGF0ZT17dXNlci5zdGFydF9kYXRlfVxuICAgICAgICAgIGVuZERhdGU9e3VzZXIuZW5kX2RhdGV9XG4gICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2UudXJsfVxuICAgICAgICAgIGRpYXJpZXM9e3VzZXIuZGlhcmllc31cbiAgICAgICAgICB0b3RhbERpYXJpZXNDb3VudD17dG90YWxEaWFyaWVzQ291bnQodXNlci5kaWFyaWVzKX1cbiAgICAgICAgICB0b3RhbExpa2VzQ291bnQ9e3VzZXIudG90YWxfbGlrZXNfY291bnR9XG4gICAgICAgICAgZm9sbG93aW5nPXt1c2VyLmZvbGxvd2luZ31cbiAgICAgICAgICBmb2xsb3dlcnM9e3VzZXIuZm9sbG93ZXJzfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzeD17eyBweTogNiB9fT5cbiAgICAgICAgPENhcmQgc3g9e3sgYm9yZGVyUmFkaXVzOiAyIH19PlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUYWJzIHZhbHVlPXtwYWdlVXJsIHx8IGZhbHNlfT5cbiAgICAgICAgICAgICAgPExpbmtUYWIgbGFiZWw9XCJBbGxcIiBocmVmPVwiL1wiIHZhbHVlPVwiL1wiIC8+XG4gICAgICAgICAgICAgIDxMaW5rVGFiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJGb2xsb3dpbmdcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZm9sbG93aW5nX2RpYXJpZXNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiL2ZvbGxvd2luZ19kaWFyaWVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG1iOiAyIH19IC8+XG4gICAgICAgICAgICA8Qm94PntjaGlsZHJlbn08L0JveD5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJDYXJkIiwiRGl2aWRlciIsIkNhcmRDb250ZW50IiwiVGFicyIsInVzZVJvdXRlciIsInVzZVNXUiIsIkxpbmtUYWIiLCJFcnJvciIsIkxvYWRpbmciLCJQcm9maWxlQ2FyZCIsInVzZVVzZXJTdGF0ZSIsInN0eWxlcyIsImZldGNoZXIiLCJqc3hERVYiLCJfanN4REVWIiwiTGF5b3V0IiwiX3JlZiIsIl9zIiwiY2hpbGRyZW4iLCJwYWdlVXJsIiwicm91dGVyIiwiX3VzZVVzZXJTdGF0ZSIsIl91c2VVc2VyU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ1c2VyIiwicGFnZSIsInF1ZXJ5IiwiTnVtYmVyIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsIl91c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsInRvdGFsRGlhcmllc0NvdW50IiwiZGlhcmllcyIsImNvdW50IiwiaSIsImxlbmd0aCIsInN0YXR1cyIsImNzcyIsInBhZ2VNaW5IZWlnaHQiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJtYXhXaWR0aCIsInB0IiwieHMiLCJsZyIsImlkIiwibmFtZSIsImNvdW50cnkiLCJ1bmkiLCJiaW8iLCJzdGFydERhdGUiLCJzdGFydF9kYXRlIiwiZW5kRGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2UiLCJ0b3RhbExpa2VzQ291bnQiLCJ0b3RhbF9saWtlc19jb3VudCIsImZvbGxvd2luZyIsImZvbGxvd2VycyIsInB5IiwiYm9yZGVyUmFkaXVzIiwidmFsdWUiLCJsYWJlbCIsImhyZWYiLCJtYiIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HomeLayout.tsx\n"));

/***/ })

});