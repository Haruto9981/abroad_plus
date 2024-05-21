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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileLayout */ \"./src/components/ProfileLayout.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name]/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile(_ref) {\n  _s();\n  var profile = _ref.profile;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 21\n  }, _this);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n      sx: {\n        fontSize: 28,\n        mb: 2\n      },\n      children: \"Shared Diaries\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n      container: true,\n      spacing: 2,\n      children: profile.diaries.map(function (diary, i) {\n        return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          item: true,\n          xs: 12,\n          md: 12,\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n            href: '/diaries/' + diary.id,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              id: diary.id,\n              title: diary.title,\n              content: diary.content,\n              image: diary.image.url,\n              wordCount: diary.word_count,\n              day: diary.day,\n              month: diary.month_name,\n              year: diary.year,\n              wDay: diary.w_day,\n              userId: profile.id,\n              userName: profile.name,\n              userCountry: profile.country,\n              userUni: profile.uni,\n              userBio: profile.bio,\n              userImage: profile.image.url,\n              favorites: diary.favorites,\n              diaryComments: diary.diary_comments\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 66,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this)\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center',\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Pagination, {\n        count: meta.totalPages,\n        page: meta.currentPage,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMrQyxVQUFXO1FBQ3ZCL0QsSUFBSSxFQUFFZ0IsSUFBSSxDQUFDZ0QsV0FBWTtRQUN2QkMsUUFBUSxFQUFFaEQ7TUFBYTtRQUFBTixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FDeEI7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDQyxDQUFDO0VBQUE7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ0EsQ0FBQztBQUViLENBQUM7QUFBQWxCLEVBQUEsQ0ExREtGLFdBQXFCO0VBQUEsUUFDVlQsa0RBQVMsRUFTQUMsMkNBQU07QUFBQTtBQUFBK0UsRUFBQSxHQVYxQnZFLFdBQXFCO0FBNEQzQiwrREFBZUEsV0FBVztBQUFBLElBQUF1RSxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW25hbWVdL2luZGV4LnRzeD9hNGQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgR3JpZCwgVHlwb2dyYXBoeSwgUGFnaW5hdGlvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgY2FtZWxjYXNlS2V5cyBmcm9tICdjYW1lbGNhc2Uta2V5cydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBEaWFyeUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0RpYXJ5Q2FyZCdcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL1Byb2ZpbGVMYXlvdXQnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxudHlwZSBEaWFyeVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiB7XG4gICAgdXJsOiBzdHJpbmdcbiAgfVxuICB3b3JkX2NvdW50OiBudW1iZXJcbiAgZGF5OiBzdHJpbmdcbiAgbW9udGhfbmFtZTogc3RyaW5nXG4gIG1vbnRoOiBzdHJpbmdcbiAgeWVhcjogc3RyaW5nXG4gIHdfZGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc3RyaW5nXG4gICAgfVxuICB9XG4gIGZhdm9yaXRlczogeyB1c2VyX2lkOiBudW1iZXIgfVtdXG4gIGRpYXJ5X2NvbW1lbnRzOiBBcnJheTxvYmplY3Q+XG59XG5cbmNvbnN0IFVzZXJQcm9maWxlOiBOZXh0UGFnZSA9ICh7IHByb2ZpbGUgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYWdlID0gJ3BhZ2UnIGluIHJvdXRlci5xdWVyeSA/IE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSkgOiAxXG4gIGNvbnN0IHVybCA9XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMICtcbiAgICAnL3VzZXJzLycgK1xuICAgIHJvdXRlci5xdWVyeS5uYW1lICtcbiAgICAnLz9wYWdlPScgK1xuICAgIHBhZ2VcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmcgLz5cblxuICBjb25zdCBtZXRhID0gY2FtZWxjYXNlS2V5cyhkYXRhLm1ldGEpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx1bmtub3duPiwgdmFsdWU6IG51bWJlcikgPT5cbiAgICByb3V0ZXIucHVzaCgnLycgKyByb3V0ZXIucXVlcnkubmFtZSArICcvP3BhZ2U9JyArIHZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAyOCwgbWI6IDIgfX0+U2hhcmVkIERpYXJpZXM8L1R5cG9ncmFwaHk+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgIHtwcm9maWxlLmRpYXJpZXMubWFwKChkaWFyeTogRGlhcnlQcm9wcywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgPEdyaWQga2V5PXtpfSBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZGlhcmllcy8nICsgZGlhcnkuaWR9PlxuICAgICAgICAgICAgICA8RGlhcnlDYXJkXG4gICAgICAgICAgICAgICAgaWQ9e2RpYXJ5LmlkfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtkaWFyeS50aXRsZX1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtkaWFyeS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGltYWdlPXtkaWFyeS5pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgd29yZENvdW50PXtkaWFyeS53b3JkX2NvdW50fVxuICAgICAgICAgICAgICAgIGRheT17ZGlhcnkuZGF5fVxuICAgICAgICAgICAgICAgIG1vbnRoPXtkaWFyeS5tb250aF9uYW1lfVxuICAgICAgICAgICAgICAgIHllYXI9e2RpYXJ5LnllYXJ9XG4gICAgICAgICAgICAgICAgd0RheT17ZGlhcnkud19kYXl9XG4gICAgICAgICAgICAgICAgdXNlcklkPXtwcm9maWxlLmlkfVxuICAgICAgICAgICAgICAgIHVzZXJOYW1lPXtwcm9maWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgdXNlckNvdW50cnk9e3Byb2ZpbGUuY291bnRyeX1cbiAgICAgICAgICAgICAgICB1c2VyVW5pPXtwcm9maWxlLnVuaX1cbiAgICAgICAgICAgICAgICB1c2VyQmlvPXtwcm9maWxlLmJpb31cbiAgICAgICAgICAgICAgICB1c2VySW1hZ2U9e3Byb2ZpbGUuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgIGZhdm9yaXRlcz17ZGlhcnkuZmF2b3JpdGVzfVxuICAgICAgICAgICAgICAgIGRpYXJ5Q29tbWVudHM9e2RpYXJ5LmRpYXJ5X2NvbW1lbnRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSl9XG4gICAgICA8L0dyaWQ+XG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBweTogNiB9fT5cbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBjb3VudD17bWV0YS50b3RhbFBhZ2VzfVxuICAgICAgICAgIHBhZ2U9e21ldGEuY3VycmVudFBhZ2V9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlXG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIlR5cG9ncmFwaHkiLCJQYWdpbmF0aW9uIiwiY2FtZWxjYXNlS2V5cyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJEaWFyeUNhcmQiLCJFcnJvciIsIkxvYWRpbmciLCJMYXlvdXQiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIlVzZXJQcm9maWxlIiwiX3JlZiIsIl9zIiwicHJvZmlsZSIsInJvdXRlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJuYW1lIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwibWV0YSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJwdXNoIiwiY2hpbGRyZW4iLCJzeCIsImZvbnRTaXplIiwibWIiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiZGlhcmllcyIsIm1hcCIsImRpYXJ5IiwiaSIsIml0ZW0iLCJ4cyIsIm1kIiwiaHJlZiIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ3b3JkQ291bnQiLCJ3b3JkX2NvdW50IiwiZGF5IiwibW9udGgiLCJtb250aF9uYW1lIiwieWVhciIsIndEYXkiLCJ3X2RheSIsInVzZXJJZCIsInVzZXJOYW1lIiwidXNlckNvdW50cnkiLCJjb3VudHJ5IiwidXNlclVuaSIsInVuaSIsInVzZXJCaW8iLCJiaW8iLCJ1c2VySW1hZ2UiLCJmYXZvcml0ZXMiLCJkaWFyeUNvbW1lbnRzIiwiZGlhcnlfY29tbWVudHMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJweSIsImNvdW50IiwidG90YWxQYWdlcyIsImN1cnJlbnRQYWdlIiwib25DaGFuZ2UiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[name]/index.tsx\n"));

/***/ })

});