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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileLayout */ \"./src/components/ProfileLayout.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name]/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 21\n  }, _this);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.profile);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Card, {\n      sx: {\n        borderRadius: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.CardContent, {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n          sx: {\n            fontSize: 20,\n            mb: 2\n          },\n          children: \"Diaries\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n          sx: {\n            my: 2\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          container: true,\n          children: profile.diaries.map(function (diary, i) {\n            return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n              item: true,\n              xs: 12,\n              md: 12,\n              children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n                href: '/diaries/' + diary.id,\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                  id: diary.id,\n                  title: diary.title,\n                  content: diary.content,\n                  image: diary.image.url,\n                  wordCount: diary.word_count,\n                  day: diary.day,\n                  month: diary.month_name,\n                  year: diary.year,\n                  wDay: diary.w_day,\n                  userId: profile.id,\n                  userName: profile.name,\n                  userCountry: profile.country,\n                  userUni: profile.uni,\n                  userBio: profile.bio,\n                  userImage: profile.image.url,\n                  favorites: diary.favorites,\n                  diaryComments: diary.diary_comments\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 78,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 77,\n                columnNumber: 17\n              }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n                sx: {\n                  my: 2\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 17\n              }, _this)]\n            }, i, true, {\n              fileName: _jsxFileName,\n              lineNumber: 76,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n          sx: {\n            display: 'flex',\n            justifyContent: 'center',\n            py: 6\n          },\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Pagination, {\n            count: meta.totalPages,\n            page: meta.currentPage,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 69,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxHQVYxQnZFLFdBQXFCO0FBbUUzQiwrREFBZUEsV0FBVztBQUFBLElBQUF1RSxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW25hbWVdL2luZGV4LnRzeD9hNGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgR3JpZCxcbiAgVHlwb2dyYXBoeSxcbiAgUGFnaW5hdGlvbixcbiAgQ2FyZCxcbiAgRGl2aWRlcixcbiAgQ2FyZENvbnRlbnQsXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgY2FtZWxjYXNlS2V5cyBmcm9tICdjYW1lbGNhc2Uta2V5cydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBEaWFyeUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0RpYXJ5Q2FyZCdcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2ZpbGVMYXlvdXQnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxudHlwZSBEaWFyeVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiB7XG4gICAgdXJsOiBzdHJpbmdcbiAgfVxuICB3b3JkX2NvdW50OiBudW1iZXJcbiAgZGF5OiBzdHJpbmdcbiAgbW9udGhfbmFtZTogc3RyaW5nXG4gIG1vbnRoOiBzdHJpbmdcbiAgeWVhcjogc3RyaW5nXG4gIHdfZGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc3RyaW5nXG4gICAgfVxuICB9XG4gIGZhdm9yaXRlczogeyB1c2VyX2lkOiBudW1iZXIgfVtdXG4gIGRpYXJ5X2NvbW1lbnRzOiBBcnJheTxvYmplY3Q+XG59XG5cbmNvbnN0IFVzZXJQcm9maWxlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGFnZSA9ICdwYWdlJyBpbiByb3V0ZXIucXVlcnkgPyBOdW1iZXIocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMVxuICBjb25zdCB1cmwgPVxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArXG4gICAgJy91c2Vycy8nICtcbiAgICByb3V0ZXIucXVlcnkubmFtZSArXG4gICAgJy8/cGFnZT0nICtcbiAgICBwYWdlXG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgY29uc3QgcHJvZmlsZSA9IGNhbWVsY2FzZUtleXMoZGF0YS5wcm9maWxlKVxuICBjb25zdCBtZXRhID0gY2FtZWxjYXNlS2V5cyhkYXRhLm1ldGEpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx1bmtub3duPiwgdmFsdWU6IG51bWJlcikgPT5cbiAgICByb3V0ZXIucHVzaCgnLycgKyByb3V0ZXIucXVlcnkubmFtZSArICcvP3BhZ2U9JyArIHZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogMiB9fT5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAyMCwgbWI6IDIgfX0+RGlhcmllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8RGl2aWRlciBzeD17eyBteTogMiB9fSAvPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIHtwcm9maWxlLmRpYXJpZXMubWFwKChkaWFyeTogRGlhcnlQcm9wcywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIGtleT17aX0gaXRlbSB4cz17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9kaWFyaWVzLycgKyBkaWFyeS5pZH0+XG4gICAgICAgICAgICAgICAgICA8RGlhcnlDYXJkXG4gICAgICAgICAgICAgICAgICAgIGlkPXtkaWFyeS5pZH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2RpYXJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtkaWFyeS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZGlhcnkuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICB3b3JkQ291bnQ9e2RpYXJ5LndvcmRfY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGRheT17ZGlhcnkuZGF5fVxuICAgICAgICAgICAgICAgICAgICBtb250aD17ZGlhcnkubW9udGhfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgeWVhcj17ZGlhcnkueWVhcn1cbiAgICAgICAgICAgICAgICAgICAgd0RheT17ZGlhcnkud19kYXl9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZD17cHJvZmlsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3Byb2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgdXNlckNvdW50cnk9e3Byb2ZpbGUuY291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgdXNlclVuaT17cHJvZmlsZS51bml9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJCaW89e3Byb2ZpbGUuYmlvfVxuICAgICAgICAgICAgICAgICAgICB1c2VySW1hZ2U9e3Byb2ZpbGUuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZXM9e2RpYXJ5LmZhdm9yaXRlc31cbiAgICAgICAgICAgICAgICAgICAgZGlhcnlDb21tZW50cz17ZGlhcnkuZGlhcnlfY29tbWVudHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8RGl2aWRlciBzeD17eyBteTogMiB9fSAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcHk6IDYgfX0+XG4gICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICBjb3VudD17bWV0YS50b3RhbFBhZ2VzfVxuICAgICAgICAgICAgICBwYWdlPXttZXRhLmN1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZVxuIl0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiUGFnaW5hdGlvbiIsIkNhcmQiLCJEaXZpZGVyIiwiQ2FyZENvbnRlbnQiLCJjYW1lbGNhc2VLZXlzIiwiTGluayIsInVzZVJvdXRlciIsInVzZVNXUiIsIkRpYXJ5Q2FyZCIsIkVycm9yIiwiTG9hZGluZyIsIkxheW91dCIsImZldGNoZXIiLCJqc3hERVYiLCJfanN4REVWIiwiVXNlclByb2ZpbGUiLCJfcyIsInJvdXRlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJuYW1lIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwicHJvZmlsZSIsIm1ldGEiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicHVzaCIsImNoaWxkcmVuIiwic3giLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm1iIiwibXkiLCJjb250YWluZXIiLCJkaWFyaWVzIiwibWFwIiwiZGlhcnkiLCJpIiwiaXRlbSIsInhzIiwibWQiLCJocmVmIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsIndvcmRDb3VudCIsIndvcmRfY291bnQiLCJkYXkiLCJtb250aCIsIm1vbnRoX25hbWUiLCJ5ZWFyIiwid0RheSIsIndfZGF5IiwidXNlcklkIiwidXNlck5hbWUiLCJ1c2VyQ291bnRyeSIsImNvdW50cnkiLCJ1c2VyVW5pIiwidW5pIiwidXNlckJpbyIsImJpbyIsInVzZXJJbWFnZSIsImZhdm9yaXRlcyIsImRpYXJ5Q29tbWVudHMiLCJkaWFyeV9jb21tZW50cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInB5IiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiY3VycmVudFBhZ2UiLCJvbkNoYW5nZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[name]/index.tsx\n"));

/***/ })

});