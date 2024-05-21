"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/following_diaries",{

/***/ "./src/components/HomeLayout.tsx":
/*!***************************************!*\
  !*** ./src/components/HomeLayout.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _LinkTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkTab */ \"./src/components/LinkTab.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/HomeLayout.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n  var children = _ref.children,\n    pageUrl = _ref.pageUrl;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_9__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 21\n  }, _this);\n  var totalDiariesCount = function totalDiariesCount(diaries) {\n    var count = 0;\n    for (var i = 0; i < diaries.length; i++) {\n      if (diaries[i] && diaries[i].status !== 'unsaved') count += 1;\n    }\n    return count;\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"xs\",\n      sx: {\n        pt: 6,\n        display: {\n          xs: 'none',\n          lg: 'block'\n        }\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: user.id,\n        name: user.name,\n        country: user.country,\n        uni: user.uni,\n        bio: user.bio,\n        startDate: user.start_date,\n        endDate: user.end_date,\n        image: user.image.url,\n        diaries: user.diaries,\n        totalDiariesCount: totalDiariesCount(user.diaries),\n        totalLikesCount: user.total_likes_count,\n        following: user.following,\n        followers: user.followers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Card, {\n        sx: {\n          borderRadius: 2\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.CardContent, {\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            value: pageUrl || false,\n            variant: \"fullWidth\",\n            centered: true,\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"All\",\n              href: \"/\",\n              value: \"/\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 15\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"Following\",\n              href: \"/following_diaries\",\n              value: \"/following_diaries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Divider, {\n            sx: {\n              mb: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n            children: children\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, _this);\n};\n_s(Layout, \"LnT+ipsCDd40yL0OhV6o9Av5n1k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWVMYXlvdXQudHN4PzY1NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIENhcmQsIERpdmlkZXIsIENhcmRDb250ZW50IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBUYWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFicydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgTGlua1RhYiBmcm9tICcuL0xpbmtUYWInXG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgUHJvZmlsZUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2ZpbGVDYXJkJ1xuaW1wb3J0IHsgdXNlVXNlclN0YXRlIH0gZnJvbSAnQC9ob29rcy91c2VHbG9iYWxTdGF0ZSdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJ0Avc3R5bGVzJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbnR5cGUgRGlhcnkgPSB7XG4gIGlkOiBzdHJpbmdcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW1hZ2U6IHsgdXJsOiBzdHJpbmcgfVxuICB3b3JkQ291bnQ6IG51bWJlclxuICBkYXk6IG51bWJlclxuICBtb250aE5hbWU6IHN0cmluZ1xuICB5ZWFyOiBudW1iZXJcbiAgd0RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBpZDogc3RyaW5nXG4gICAgbmFtZTogc3RyaW5nXG4gICAgY291bnRyeTogc3RyaW5nXG4gICAgdW5pOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7IHVybDogc3RyaW5nIH1cbiAgfVxuICBzdGF0dXM6IHN0cmluZ1xuICBmYXZvcml0ZXM6IG51bWJlclxuICBkaWFyeUNvbW1lbnRzOiBudW1iZXJcbn1cblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBwYWdlVXJsOiBzdHJpbmdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHBhZ2VVcmwgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3VzZXJdID0gdXNlVXNlclN0YXRlKClcbiAgY29uc3QgcGFnZSA9ICdwYWdlJyBpbiByb3V0ZXIucXVlcnkgPyBOdW1iZXIocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMVxuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgKyAnL2RpYXJpZXMvP3BhZ2U9JyArIHBhZ2VcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgY29uc3QgdG90YWxEaWFyaWVzQ291bnQgPSAoZGlhcmllczogRGlhcnlbXSkgPT4ge1xuICAgIGxldCBjb3VudCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpYXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaWFyaWVzW2ldICYmIGRpYXJpZXNbaV0uc3RhdHVzICE9PSAndW5zYXZlZCcpIGNvdW50ICs9IDFcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17c3R5bGVzLnBhZ2VNaW5IZWlnaHR9XG4gICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZlMGI2JywgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtYXhXaWR0aD1cInhzXCJcbiAgICAgICAgc3g9e3sgcHQ6IDYsIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbGc6ICdibG9jaycgfSB9fVxuICAgICAgPlxuICAgICAgICA8UHJvZmlsZUNhcmRcbiAgICAgICAgICBpZD17dXNlci5pZH1cbiAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgY291bnRyeT17dXNlci5jb3VudHJ5fVxuICAgICAgICAgIHVuaT17dXNlci51bml9XG4gICAgICAgICAgYmlvPXt1c2VyLmJpb31cbiAgICAgICAgICBzdGFydERhdGU9e3VzZXIuc3RhcnRfZGF0ZX1cbiAgICAgICAgICBlbmREYXRlPXt1c2VyLmVuZF9kYXRlfVxuICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlLnVybH1cbiAgICAgICAgICBkaWFyaWVzPXt1c2VyLmRpYXJpZXN9XG4gICAgICAgICAgdG90YWxEaWFyaWVzQ291bnQ9e3RvdGFsRGlhcmllc0NvdW50KHVzZXIuZGlhcmllcyl9XG4gICAgICAgICAgdG90YWxMaWtlc0NvdW50PXt1c2VyLnRvdGFsX2xpa2VzX2NvdW50fVxuICAgICAgICAgIGZvbGxvd2luZz17dXNlci5mb2xsb3dpbmd9XG4gICAgICAgICAgZm9sbG93ZXJzPXt1c2VyLmZvbGxvd2Vyc31cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3g9e3sgcHk6IDYgfX0+XG4gICAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogMiB9fT5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VGFicyB2YWx1ZT17cGFnZVVybCB8fCBmYWxzZX0gdmFyaWFudD1cImZ1bGxXaWR0aFwiIGNlbnRlcmVkPlxuICAgICAgICAgICAgICA8TGlua1RhYiBsYWJlbD1cIkFsbFwiIGhyZWY9XCIvXCIgdmFsdWU9XCIvXCIgLz5cbiAgICAgICAgICAgICAgPExpbmtUYWJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkZvbGxvd2luZ1wiXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9mb2xsb3dpbmdfZGlhcmllc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCIvZm9sbG93aW5nX2RpYXJpZXNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPERpdmlkZXIgc3g9e3sgbWI6IDIgfX0gLz5cbiAgICAgICAgICAgIDxCb3g+e2NoaWxkcmVufTwvQm94PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl0sIm5hbWVzIjpbIkJveCIsIkNvbnRhaW5lciIsIkNhcmQiLCJEaXZpZGVyIiwiQ2FyZENvbnRlbnQiLCJUYWJzIiwidXNlUm91dGVyIiwidXNlU1dSIiwiTGlua1RhYiIsIkVycm9yIiwiTG9hZGluZyIsIlByb2ZpbGVDYXJkIiwidXNlVXNlclN0YXRlIiwic3R5bGVzIiwiZmV0Y2hlciIsImpzeERFViIsIl9qc3hERVYiLCJMYXlvdXQiLCJfcmVmIiwiX3MiLCJjaGlsZHJlbiIsInBhZ2VVcmwiLCJyb3V0ZXIiLCJfdXNlVXNlclN0YXRlIiwiX3VzZVVzZXJTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXIiLCJwYWdlIiwicXVlcnkiLCJOdW1iZXIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwidG90YWxEaWFyaWVzQ291bnQiLCJkaWFyaWVzIiwiY291bnQiLCJpIiwibGVuZ3RoIiwic3RhdHVzIiwiY3NzIiwicGFnZU1pbkhlaWdodCIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIm1heFdpZHRoIiwicHQiLCJ4cyIsImxnIiwiaWQiLCJuYW1lIiwiY291bnRyeSIsInVuaSIsImJpbyIsInN0YXJ0RGF0ZSIsInN0YXJ0X2RhdGUiLCJlbmREYXRlIiwiZW5kX2RhdGUiLCJpbWFnZSIsInRvdGFsTGlrZXNDb3VudCIsInRvdGFsX2xpa2VzX2NvdW50IiwiZm9sbG93aW5nIiwiZm9sbG93ZXJzIiwicHkiLCJib3JkZXJSYWRpdXMiLCJ2YWx1ZSIsInZhcmlhbnQiLCJjZW50ZXJlZCIsImxhYmVsIiwiaHJlZiIsIm1iIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/HomeLayout.tsx\n"));

/***/ })

});