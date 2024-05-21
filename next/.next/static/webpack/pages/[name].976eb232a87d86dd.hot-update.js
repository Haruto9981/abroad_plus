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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileLayout */ \"./src/components/ProfileLayout.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name]/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 21\n  }, _this);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.profile);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Card, {\n      sx: {\n        borderRadius: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.CardContent, {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n          sx: {\n            fontSize: 20,\n            mb: 2\n          },\n          children: \"Shared Diaries\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          container: true,\n          children: profile.diaries.map(function (diary, i) {\n            return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n              item: true,\n              xs: 12,\n              md: 12,\n              children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Divider, {\n                sx: {\n                  mt: 2\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n                href: '/diaries/' + diary.id,\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                  id: diary.id,\n                  title: diary.title,\n                  content: diary.content,\n                  image: diary.image.url,\n                  wordCount: diary.word_count,\n                  day: diary.day,\n                  month: diary.month_name,\n                  year: diary.year,\n                  wDay: diary.w_day,\n                  userId: profile.id,\n                  userName: profile.name,\n                  userCountry: profile.country,\n                  userUni: profile.uni,\n                  userBio: profile.bio,\n                  userImage: profile.image.url,\n                  favorites: diary.favorites,\n                  diaryComments: diary.diary_comments\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 17\n              }, _this)]\n            }, i, true, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n          sx: {\n            display: 'flex',\n            justifyContent: 'center',\n            py: 6\n          },\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Pagination, {\n            count: meta.totalPages,\n            page: meta.currentPage,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEdyaWQsXG4gIFR5cG9ncmFwaHksXG4gIFBhZ2luYXRpb24sXG4gIENhcmQsXG4gIENhcmRDb250ZW50LFxufSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IGNhbWVsY2FzZUtleXMgZnJvbSAnY2FtZWxjYXNlLWtleXMnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgRGlhcnlDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9EaWFyeUNhcmQnXG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9maWxlTGF5b3V0J1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbnR5cGUgRGlhcnlQcm9wcyA9IHtcbiAgaWQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZToge1xuICAgIHVybDogc3RyaW5nXG4gIH1cbiAgd29yZF9jb3VudDogbnVtYmVyXG4gIGRheTogc3RyaW5nXG4gIG1vbnRoX25hbWU6IHN0cmluZ1xuICBtb250aDogc3RyaW5nXG4gIHllYXI6IHN0cmluZ1xuICB3X2RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgY291bnRyeTogc3RyaW5nXG4gICAgdW5pOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgfVxuICBmYXZvcml0ZXM6IHsgdXNlcl9pZDogbnVtYmVyIH1bXVxuICBkaWFyeV9jb21tZW50czogQXJyYXk8b2JqZWN0PlxufVxuXG5jb25zdCBVc2VyUHJvZmlsZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhZ2UgPSAncGFnZScgaW4gcm91dGVyLnF1ZXJ5ID8gTnVtYmVyKHJvdXRlci5xdWVyeS5wYWdlKSA6IDFcbiAgY29uc3QgdXJsID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgK1xuICAgICcvdXNlcnMvJyArXG4gICAgcm91dGVyLnF1ZXJ5Lm5hbWUgK1xuICAgICcvP3BhZ2U9JyArXG4gICAgcGFnZVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsIGZldGNoZXIpXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPlxuICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZGluZyAvPlxuXG4gIGNvbnN0IHByb2ZpbGUgPSBjYW1lbGNhc2VLZXlzKGRhdGEucHJvZmlsZSlcbiAgY29uc3QgbWV0YSA9IGNhbWVsY2FzZUtleXMoZGF0YS5tZXRhKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8dW5rbm93bj4sIHZhbHVlOiBudW1iZXIpID0+XG4gICAgcm91dGVyLnB1c2goJy8nICsgcm91dGVyLnF1ZXJ5Lm5hbWUgKyAnLz9wYWdlPScgKyB2YWx1ZSlcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q2FyZCBzeD17eyBib3JkZXJSYWRpdXM6IDIgfX0+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogMjAsIG1iOiAyIH19PlNoYXJlZCBEaWFyaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIHtwcm9maWxlLmRpYXJpZXMubWFwKChkaWFyeTogRGlhcnlQcm9wcywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIGtleT17aX0gaXRlbSB4cz17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPERpdmlkZXIgc3g9e3sgbXQ6IDIgfX0gLz5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2RpYXJpZXMvJyArIGRpYXJ5LmlkfT5cbiAgICAgICAgICAgICAgICAgIDxEaWFyeUNhcmRcbiAgICAgICAgICAgICAgICAgICAgaWQ9e2RpYXJ5LmlkfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17ZGlhcnkudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2RpYXJ5LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtkaWFyeS5pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIHdvcmRDb3VudD17ZGlhcnkud29yZF9jb3VudH1cbiAgICAgICAgICAgICAgICAgICAgZGF5PXtkaWFyeS5kYXl9XG4gICAgICAgICAgICAgICAgICAgIG1vbnRoPXtkaWFyeS5tb250aF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICB5ZWFyPXtkaWFyeS55ZWFyfVxuICAgICAgICAgICAgICAgICAgICB3RGF5PXtkaWFyeS53X2RheX1cbiAgICAgICAgICAgICAgICAgICAgdXNlcklkPXtwcm9maWxlLmlkfVxuICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZT17cHJvZmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICB1c2VyQ291bnRyeT17cHJvZmlsZS5jb3VudHJ5fVxuICAgICAgICAgICAgICAgICAgICB1c2VyVW5pPXtwcm9maWxlLnVuaX1cbiAgICAgICAgICAgICAgICAgICAgdXNlckJpbz17cHJvZmlsZS5iaW99XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbWFnZT17cHJvZmlsZS5pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICAgIGZhdm9yaXRlcz17ZGlhcnkuZmF2b3JpdGVzfVxuICAgICAgICAgICAgICAgICAgICBkaWFyeUNvbW1lbnRzPXtkaWFyeS5kaWFyeV9jb21tZW50c31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcHk6IDYgfX0+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICBjb3VudD17bWV0YS50b3RhbFBhZ2VzfVxuICAgICAgICAgICAgICBwYWdlPXttZXRhLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZVxuIl0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiUGFnaW5hdGlvbiIsIkNhcmQiLCJDYXJkQ29udGVudCIsImNhbWVsY2FzZUtleXMiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlU1dSIiwiRGlhcnlDYXJkIiwiRXJyb3IiLCJMb2FkaW5nIiwiTGF5b3V0IiwiZmV0Y2hlciIsImpzeERFViIsIl9qc3hERVYiLCJVc2VyUHJvZmlsZSIsIl9zIiwicm91dGVyIiwicGFnZSIsInF1ZXJ5IiwiTnVtYmVyIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsIm5hbWUiLCJfdXNlU1dSIiwiZGF0YSIsImVycm9yIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJwcm9maWxlIiwibWV0YSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwdXNoIiwiY2hpbGRyZW4iLCJzeCIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwibWIiLCJjb250YWluZXIiLCJkaWFyaWVzIiwibWFwIiwiZGlhcnkiLCJpIiwiaXRlbSIsInhzIiwibWQiLCJEaXZpZGVyIiwibXQiLCJocmVmIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsIndvcmRDb3VudCIsIndvcmRfY291bnQiLCJkYXkiLCJtb250aCIsIm1vbnRoX25hbWUiLCJ5ZWFyIiwid0RheSIsIndfZGF5IiwidXNlcklkIiwidXNlck5hbWUiLCJ1c2VyQ291bnRyeSIsImNvdW50cnkiLCJ1c2VyVW5pIiwidW5pIiwidXNlckJpbyIsImJpbyIsInVzZXJJbWFnZSIsImZhdm9yaXRlcyIsImRpYXJ5Q29tbWVudHMiLCJkaWFyeV9jb21tZW50cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInB5IiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiY3VycmVudFBhZ2UiLCJvbkNoYW5nZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[name]/index.tsx\n"));

/***/ })

});