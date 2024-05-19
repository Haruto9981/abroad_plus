"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[name]",{

/***/ "./src/pages/[name].tsx":
/*!******************************!*\
  !*** ./src/pages/[name].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/pages/[name].tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_8__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_10__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 21\n  }, _this);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(data.profile);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  console.log(profile);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_9__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        pt: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: profile.id,\n        name: profile.name,\n        country: profile.country,\n        uni: profile.uni,\n        bio: profile.bio,\n        startDate: profile.startDate,\n        endDate: profile.endDate,\n        image: profile.image.url,\n        currentUser: user\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Typography, {\n        sx: {\n          fontSize: 28,\n          mb: 2\n        },\n        children: \"Shared Diaries\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Grid, {\n        container: true,\n        spacing: 2,\n        children: profile.diaries.map(function (diary, i) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Grid, {\n            item: true,\n            xs: 12,\n            md: 12,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n              href: '/diaries/' + diary.id,\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                id: diary.id,\n                title: diary.title,\n                content: diary.content,\n                image: diary.image.url,\n                wordCount: diary.word_count,\n                day: diary.day,\n                month: diary.month_name,\n                year: diary.year,\n                wDay: diary.w_day,\n                userId: profile.id,\n                userName: profile.name,\n                userCountry: profile.country,\n                userUni: profile.uni,\n                userBio: profile.bio,\n                userImage: profile.image.url,\n                favorites: diary.favorites,\n                diaryComments: diary.diary_comments\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'center',\n          py: 6\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_13__.Pagination, {\n          count: meta.totalPages,\n          page: meta.currentPage,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"eK6/ZNY7g05RbOX+SfVgJj/zkLQ=\", false, function () {\n  return [_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_8__.useUserState, next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7UUFBRSxDQUFFO1FBQUFYLFFBQUEsRUFDNURyQyx1RUFBQSxDQUFDYixzREFBVTtVQUNUOEYsS0FBSyxFQUFFeEQsSUFBSSxDQUFDeUQsVUFBVztVQUN2QjFFLElBQUksRUFBRWlCLElBQUksQ0FBQzBELFdBQVk7VUFDdkJDLFFBQVEsRUFBRTFEO1FBQWE7VUFBQVAsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBQ3hCO01BQUM7UUFBQUosUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQ0MsQ0FBQztJQUFBO01BQUFKLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUNHLENBQUM7RUFBQTtJQUFBSixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FDVCxDQUFDO0FBRVYsQ0FBQztBQUFBckIsRUFBQSxDQWhGS0QsV0FBcUI7RUFBQSxRQUNWTCwrREFBWSxFQUNaTixrREFBUyxFQVNBQywyQ0FBTTtBQUFBO0FBQUE4RixFQUFBLEdBWDFCcEYsV0FBcUI7QUFrRjNCLCtEQUFlQSxXQUFXO0FBQUEsSUFBQW9GLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bbmFtZV0udHN4PzkyYjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFBhZ2luYXRpb24gfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IGNhbWVsY2FzZUtleXMgZnJvbSAnY2FtZWxjYXNlLWtleXMnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgRGlhcnlDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9EaWFyeUNhcmQnXG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgUHJvZmlsZUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2ZpbGVDYXJkJ1xuaW1wb3J0IHsgdXNlVXNlclN0YXRlIH0gZnJvbSAnQC9ob29rcy91c2VHbG9iYWxTdGF0ZSdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJ0Avc3R5bGVzJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbnR5cGUgRGlhcnlQcm9wcyA9IHtcbiAgaWQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZToge1xuICAgIHVybDogc3RyaW5nXG4gIH1cbiAgd29yZF9jb3VudDogbnVtYmVyXG4gIGRheTogc3RyaW5nXG4gIG1vbnRoX25hbWU6IHN0cmluZ1xuICBtb250aDogc3RyaW5nXG4gIHllYXI6IHN0cmluZ1xuICB3X2RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgY291bnRyeTogc3RyaW5nXG4gICAgdW5pOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgfVxuICBmYXZvcml0ZXM6IHsgdXNlcl9pZDogbnVtYmVyIH1bXVxuICBkaWFyeV9jb21tZW50czogQXJyYXk8b2JqZWN0PlxufVxuXG5jb25zdCBVc2VyUHJvZmlsZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VyXSA9IHVzZVVzZXJTdGF0ZSgpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhZ2UgPSAncGFnZScgaW4gcm91dGVyLnF1ZXJ5ID8gTnVtYmVyKHJvdXRlci5xdWVyeS5wYWdlKSA6IDFcbiAgY29uc3QgdXJsID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgK1xuICAgICcvdXNlcnMvJyArXG4gICAgcm91dGVyLnF1ZXJ5Lm5hbWUgK1xuICAgICcvP3BhZ2U9JyArXG4gICAgcGFnZVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsIGZldGNoZXIpXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPlxuICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZGluZyAvPlxuXG4gIGNvbnN0IHByb2ZpbGUgPSBjYW1lbGNhc2VLZXlzKGRhdGEucHJvZmlsZSlcbiAgY29uc3QgbWV0YSA9IGNhbWVsY2FzZUtleXMoZGF0YS5tZXRhKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8dW5rbm93bj4sIHZhbHVlOiBudW1iZXIpID0+XG4gICAgcm91dGVyLnB1c2goJy8nICsgcm91dGVyLnF1ZXJ5Lm5hbWUgKyAnLz9wYWdlPScgKyB2YWx1ZSlcblxuICBjb25zb2xlLmxvZyhwcm9maWxlKVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY3NzPXtzdHlsZXMucGFnZU1pbkhlaWdodH1cbiAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmUwYjYnLCBkaXNwbGF5OiAnZmxleCcgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzeD17eyBwdDogNiB9fT5cbiAgICAgICAgPFByb2ZpbGVDYXJkXG4gICAgICAgICAgaWQ9e3Byb2ZpbGUuaWR9XG4gICAgICAgICAgbmFtZT17cHJvZmlsZS5uYW1lfVxuICAgICAgICAgIGNvdW50cnk9e3Byb2ZpbGUuY291bnRyeX1cbiAgICAgICAgICB1bmk9e3Byb2ZpbGUudW5pfVxuICAgICAgICAgIGJpbz17cHJvZmlsZS5iaW99XG4gICAgICAgICAgc3RhcnREYXRlPXtwcm9maWxlLnN0YXJ0RGF0ZX1cbiAgICAgICAgICBlbmREYXRlPXtwcm9maWxlLmVuZERhdGV9XG4gICAgICAgICAgaW1hZ2U9e3Byb2ZpbGUuaW1hZ2UudXJsfVxuICAgICAgICAgIGN1cnJlbnRVc2VyPXt1c2VyfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzeD17eyBweTogNiB9fT5cbiAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDI4LCBtYjogMiB9fT5TaGFyZWQgRGlhcmllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgIHtwcm9maWxlLmRpYXJpZXMubWFwKChkaWFyeTogRGlhcnlQcm9wcywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBrZXk9e2l9IGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2RpYXJpZXMvJyArIGRpYXJ5LmlkfT5cbiAgICAgICAgICAgICAgICA8RGlhcnlDYXJkXG4gICAgICAgICAgICAgICAgICBpZD17ZGlhcnkuaWR9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17ZGlhcnkudGl0bGV9XG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtkaWFyeS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e2RpYXJ5LmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgIHdvcmRDb3VudD17ZGlhcnkud29yZF9jb3VudH1cbiAgICAgICAgICAgICAgICAgIGRheT17ZGlhcnkuZGF5fVxuICAgICAgICAgICAgICAgICAgbW9udGg9e2RpYXJ5Lm1vbnRoX25hbWV9XG4gICAgICAgICAgICAgICAgICB5ZWFyPXtkaWFyeS55ZWFyfVxuICAgICAgICAgICAgICAgICAgd0RheT17ZGlhcnkud19kYXl9XG4gICAgICAgICAgICAgICAgICB1c2VySWQ9e3Byb2ZpbGUuaWR9XG4gICAgICAgICAgICAgICAgICB1c2VyTmFtZT17cHJvZmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgdXNlckNvdW50cnk9e3Byb2ZpbGUuY291bnRyeX1cbiAgICAgICAgICAgICAgICAgIHVzZXJVbmk9e3Byb2ZpbGUudW5pfVxuICAgICAgICAgICAgICAgICAgdXNlckJpbz17cHJvZmlsZS5iaW99XG4gICAgICAgICAgICAgICAgICB1c2VySW1hZ2U9e3Byb2ZpbGUuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgZmF2b3JpdGVzPXtkaWFyeS5mYXZvcml0ZXN9XG4gICAgICAgICAgICAgICAgICBkaWFyeUNvbW1lbnRzPXtkaWFyeS5kaWFyeV9jb21tZW50c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcHk6IDYgfX0+XG4gICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgIGNvdW50PXttZXRhLnRvdGFsUGFnZXN9XG4gICAgICAgICAgICBwYWdlPXttZXRhLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlXG4iXSwibmFtZXMiOlsiQm94IiwiQ29udGFpbmVyIiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJQYWdpbmF0aW9uIiwiY2FtZWxjYXNlS2V5cyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJEaWFyeUNhcmQiLCJFcnJvciIsIkxvYWRpbmciLCJQcm9maWxlQ2FyZCIsInVzZVVzZXJTdGF0ZSIsInN0eWxlcyIsImZldGNoZXIiLCJqc3hERVYiLCJfanN4REVWIiwiVXNlclByb2ZpbGUiLCJfcyIsIl91c2VVc2VyU3RhdGUiLCJfdXNlVXNlclN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlciIsInJvdXRlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJuYW1lIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwicHJvZmlsZSIsIm1ldGEiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJjc3MiLCJwYWdlTWluSGVpZ2h0Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsInB0IiwiaWQiLCJjb3VudHJ5IiwidW5pIiwiYmlvIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImltYWdlIiwiY3VycmVudFVzZXIiLCJweSIsImZvbnRTaXplIiwibWIiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiZGlhcmllcyIsIm1hcCIsImRpYXJ5IiwiaSIsIml0ZW0iLCJ4cyIsIm1kIiwiaHJlZiIsInRpdGxlIiwiY29udGVudCIsIndvcmRDb3VudCIsIndvcmRfY291bnQiLCJkYXkiLCJtb250aCIsIm1vbnRoX25hbWUiLCJ5ZWFyIiwid0RheSIsIndfZGF5IiwidXNlcklkIiwidXNlck5hbWUiLCJ1c2VyQ291bnRyeSIsInVzZXJVbmkiLCJ1c2VyQmlvIiwidXNlckltYWdlIiwiZmF2b3JpdGVzIiwiZGlhcnlDb21tZW50cyIsImRpYXJ5X2NvbW1lbnRzIiwianVzdGlmeUNvbnRlbnQiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJjdXJyZW50UGFnZSIsIm9uQ2hhbmdlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[name].tsx\n"));

/***/ })

});