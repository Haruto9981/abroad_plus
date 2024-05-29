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

/***/ "./src/pages/[name]/index.tsx":
/*!************************************!*\
  !*** ./src/pages/[name]/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileLayout */ \"./src/components/ProfileLayout.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name]/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + 'diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 7\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 7\n  }, _this);\n  console.log(data);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n      sx: {\n        fontSize: 20,\n        mb: 2\n      },\n      children: \"Diaries\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n      sx: {\n        my: 2\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n      container: true,\n      children: profile.diaries.map(function (diary, i) {\n        return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          item: true,\n          xs: 12,\n          md: 12,\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n            href: '/diaries/' + diary.id,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              id: diary.id,\n              title: diary.title,\n              content: diary.content,\n              image: diary.image.url,\n              wordCount: diary.word_count,\n              day: diary.day,\n              month: diary.month_name,\n              year: diary.year,\n              wDay: diary.w_day,\n              userName: profile.name,\n              userCountry: profile.country,\n              userUni: profile.uni,\n              userBio: profile.bio,\n              userImage: profile.image.url,\n              favorites: diary.favorites,\n              diaryComments: diary.diary_comments\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n            sx: {\n              my: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center',\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Pagination, {\n        count: meta.totalPages,\n        page: meta.currentPage,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW25hbWVdL2luZGV4LnRzeD9hNGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgVHlwb2dyYXBoeSwgUGFnaW5hdGlvbiwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgY2FtZWxjYXNlS2V5cyBmcm9tICdjYW1lbGNhc2Uta2V5cydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBEaWFyeUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0RpYXJ5Q2FyZCdcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2ZpbGVMYXlvdXQnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxudHlwZSBEaWFyeVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiB7XG4gICAgdXJsOiBzdHJpbmdcbiAgfVxuICB3b3JkX2NvdW50OiBudW1iZXJcbiAgZGF5OiBzdHJpbmdcbiAgbW9udGhfbmFtZTogc3RyaW5nXG4gIG1vbnRoOiBzdHJpbmdcbiAgeWVhcjogc3RyaW5nXG4gIHdfZGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc3RyaW5nXG4gICAgfVxuICB9XG4gIGZhdm9yaXRlczogeyB1c2VyX2lkOiBudW1iZXIgfVtdXG4gIGRpYXJ5X2NvbW1lbnRzOiBBcnJheTxvYmplY3Q+XG59XG5cbmNvbnN0IFVzZXJQcm9maWxlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGFnZSA9ICdwYWdlJyBpbiByb3V0ZXIucXVlcnkgPyBOdW1iZXIocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMVxuICBjb25zdCB1cmwgPVxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArXG4gICAgJy91c2Vycy8nICtcbiAgICByb3V0ZXIucXVlcnkubmFtZSArXG4gICAgJ2RpYXJpZXMvP3BhZ2U9JyArXG4gICAgcGFnZVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsIGZldGNoZXIpXG4gIGlmIChlcnJvcilcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEVycm9yIC8+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIGlmICghZGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcblxuICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gIGNvbnN0IHByb2ZpbGUgPSBjYW1lbGNhc2VLZXlzKGRhdGEpXG4gIGNvbnN0IG1ldGEgPSBjYW1lbGNhc2VLZXlzKGRhdGEubWV0YSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHVua25vd24+LCB2YWx1ZTogbnVtYmVyKSA9PlxuICAgIHJvdXRlci5wdXNoKCcvJyArIHJvdXRlci5xdWVyeS5uYW1lICsgJy8/cGFnZT0nICsgdmFsdWUpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDIwLCBtYjogMiB9fT5EaWFyaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgPERpdmlkZXIgc3g9e3sgbXk6IDIgfX0gLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAge3Byb2ZpbGUuZGlhcmllcy5tYXAoKGRpYXJ5OiBEaWFyeVByb3BzLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8R3JpZCBrZXk9e2l9IGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9kaWFyaWVzLycgKyBkaWFyeS5pZH0+XG4gICAgICAgICAgICAgIDxEaWFyeUNhcmRcbiAgICAgICAgICAgICAgICBpZD17ZGlhcnkuaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2RpYXJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2RpYXJ5LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2RpYXJ5LmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICB3b3JkQ291bnQ9e2RpYXJ5LndvcmRfY291bnR9XG4gICAgICAgICAgICAgICAgZGF5PXtkaWFyeS5kYXl9XG4gICAgICAgICAgICAgICAgbW9udGg9e2RpYXJ5Lm1vbnRoX25hbWV9XG4gICAgICAgICAgICAgICAgeWVhcj17ZGlhcnkueWVhcn1cbiAgICAgICAgICAgICAgICB3RGF5PXtkaWFyeS53X2RheX1cbiAgICAgICAgICAgICAgICB1c2VyTmFtZT17cHJvZmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgIHVzZXJDb3VudHJ5PXtwcm9maWxlLmNvdW50cnl9XG4gICAgICAgICAgICAgICAgdXNlclVuaT17cHJvZmlsZS51bml9XG4gICAgICAgICAgICAgICAgdXNlckJpbz17cHJvZmlsZS5iaW99XG4gICAgICAgICAgICAgICAgdXNlckltYWdlPXtwcm9maWxlLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICBmYXZvcml0ZXM9e2RpYXJ5LmZhdm9yaXRlc31cbiAgICAgICAgICAgICAgICBkaWFyeUNvbW1lbnRzPXtkaWFyeS5kaWFyeV9jb21tZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG15OiAyIH19IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHB5OiA2IH19PlxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGNvdW50PXttZXRhLnRvdGFsUGFnZXN9XG4gICAgICAgICAgcGFnZT17bWV0YS5jdXJyZW50UGFnZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlBhZ2luYXRpb24iLCJEaXZpZGVyIiwiY2FtZWxjYXNlS2V5cyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJEaWFyeUNhcmQiLCJFcnJvciIsIkxvYWRpbmciLCJMYXlvdXQiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIlVzZXJQcm9maWxlIiwiX3MiLCJyb3V0ZXIiLCJwYWdlIiwicXVlcnkiLCJOdW1iZXIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwibmFtZSIsIl91c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGUiLCJtZXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInB1c2giLCJzeCIsImZvbnRTaXplIiwibWIiLCJteSIsImNvbnRhaW5lciIsImRpYXJpZXMiLCJtYXAiLCJkaWFyeSIsImkiLCJpdGVtIiwieHMiLCJtZCIsImhyZWYiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImltYWdlIiwid29yZENvdW50Iiwid29yZF9jb3VudCIsImRheSIsIm1vbnRoIiwibW9udGhfbmFtZSIsInllYXIiLCJ3RGF5Iiwid19kYXkiLCJ1c2VyTmFtZSIsInVzZXJDb3VudHJ5IiwiY291bnRyeSIsInVzZXJVbmkiLCJ1bmkiLCJ1c2VyQmlvIiwiYmlvIiwidXNlckltYWdlIiwiZmF2b3JpdGVzIiwiZGlhcnlDb21tZW50cyIsImRpYXJ5X2NvbW1lbnRzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicHkiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJjdXJyZW50UGFnZSIsIm9uQ2hhbmdlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[name]/index.tsx\n"));

/***/ })

});