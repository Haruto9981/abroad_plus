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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name].tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_8__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 21\n  }, _this);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(data.profile);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_7__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        pt: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: profile.id,\n        name: profile.name,\n        country: profile.country,\n        uni: profile.uni,\n        bio: profile.bio,\n        startDate: profile.startDate,\n        endDate: profile.endDate,\n        image: profile.image.url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Typography, {\n        sx: {\n          fontSize: 28,\n          mb: 2\n        },\n        children: \"Shared Diaries\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {\n        container: true,\n        spacing: 2,\n        children: profile.diaries.map(function (diary, i) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Grid, {\n            item: true,\n            xs: 12,\n            md: 12,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n              href: '/diaries/' + diary.id,\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: diary.id,\n                title: diary.title,\n                content: diary.content,\n                image: diary.image.url,\n                wordCount: diary.word_count,\n                day: diary.day,\n                month: diary.month_name,\n                year: diary.year,\n                wDay: diary.w_day,\n                userId: profile.id,\n                userName: profile.name,\n                userCountry: profile.country,\n                userUni: profile.uni,\n                userBio: profile.bio,\n                userImage: profile.image.url,\n                favorites: diary.favorites,\n                diaryComments: diary.diary_comments\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'center',\n          py: 6\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Pagination, {\n          count: meta.totalPages,\n          page: meta.currentPage,\n          onChange: handleChange\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFlBQUE7UUFBQSxHQUFBQyxLQUN4QjtNQUFDO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUNDLENBQUM7SUFBQTtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDRyxDQUFDO0VBQUE7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ1QsQ0FBQztBQUVWLENBQUM7QUFBQWpCLEVBQUEsQ0E1RUtELFdBQXFCO0VBQUEsUUFDVlYsa0RBQVMsRUFTQUMsMkNBQU07QUFBQTtBQUFBc0YsRUFBQSxHQVYxQjdFLFdBQXFCO0FBOEUzQiwrREFBZUEsV0FBVztBQUFBLElBQUE2RSxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW25hbWVdLnRzeD85MmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBjYW1lbGNhc2VLZXlzIGZyb20gJ2NhbWVsY2FzZS1rZXlzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IERpYXJ5Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvRGlhcnlDYXJkJ1xuaW1wb3J0IEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9FcnJvcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IFByb2ZpbGVDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Qcm9maWxlQ2FyZCdcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJ0Avc3R5bGVzJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbnR5cGUgRGlhcnlQcm9wcyA9IHtcbiAgaWQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZToge1xuICAgIHVybDogc3RyaW5nXG4gIH1cbiAgd29yZF9jb3VudDogbnVtYmVyXG4gIGRheTogc3RyaW5nXG4gIG1vbnRoX25hbWU6IHN0cmluZ1xuICBtb250aDogc3RyaW5nXG4gIHllYXI6IHN0cmluZ1xuICB3X2RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgY291bnRyeTogc3RyaW5nXG4gICAgdW5pOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgfVxuICBmYXZvcml0ZXM6IHsgdXNlcl9pZDogbnVtYmVyIH1bXVxuICBkaWFyeV9jb21tZW50czogQXJyYXk8b2JqZWN0PlxufVxuXG5jb25zdCBVc2VyUHJvZmlsZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhZ2UgPSAncGFnZScgaW4gcm91dGVyLnF1ZXJ5ID8gTnVtYmVyKHJvdXRlci5xdWVyeS5wYWdlKSA6IDFcbiAgY29uc3QgdXJsID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgK1xuICAgICcvdXNlcnMvJyArXG4gICAgcm91dGVyLnF1ZXJ5Lm5hbWUgK1xuICAgICcvP3BhZ2U9JyArXG4gICAgcGFnZVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsIGZldGNoZXIpXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPlxuICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZGluZyAvPlxuXG4gIGNvbnN0IHByb2ZpbGUgPSBjYW1lbGNhc2VLZXlzKGRhdGEucHJvZmlsZSlcbiAgY29uc3QgbWV0YSA9IGNhbWVsY2FzZUtleXMoZGF0YS5tZXRhKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8dW5rbm93bj4sIHZhbHVlOiBudW1iZXIpID0+XG4gICAgcm91dGVyLnB1c2goJy8nICsgcm91dGVyLnF1ZXJ5Lm5hbWUgKyAnLz9wYWdlPScgKyB2YWx1ZSlcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17c3R5bGVzLnBhZ2VNaW5IZWlnaHR9XG4gICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZlMGI2JywgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3g9e3sgcHQ6IDYgfX0+XG4gICAgICAgIDxQcm9maWxlQ2FyZFxuICAgICAgICAgIGlkPXtwcm9maWxlLmlkfVxuICAgICAgICAgIG5hbWU9e3Byb2ZpbGUubmFtZX1cbiAgICAgICAgICBjb3VudHJ5PXtwcm9maWxlLmNvdW50cnl9XG4gICAgICAgICAgdW5pPXtwcm9maWxlLnVuaX1cbiAgICAgICAgICBiaW89e3Byb2ZpbGUuYmlvfVxuICAgICAgICAgIHN0YXJ0RGF0ZT17cHJvZmlsZS5zdGFydERhdGV9XG4gICAgICAgICAgZW5kRGF0ZT17cHJvZmlsZS5lbmREYXRlfVxuICAgICAgICAgIGltYWdlPXtwcm9maWxlLmltYWdlLnVybH1cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3g9e3sgcHk6IDYgfX0+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAyOCwgbWI6IDIgfX0+U2hhcmVkIERpYXJpZXM8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICB7cHJvZmlsZS5kaWFyaWVzLm1hcCgoZGlhcnk6IERpYXJ5UHJvcHMsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgPEdyaWQga2V5PXtpfSBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9kaWFyaWVzLycgKyBkaWFyeS5pZH0+XG4gICAgICAgICAgICAgICAgPERpYXJ5Q2FyZFxuICAgICAgICAgICAgICAgICAgaWQ9e2RpYXJ5LmlkfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2RpYXJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgY29udGVudD17ZGlhcnkuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIGltYWdlPXtkaWFyeS5pbWFnZS51cmx9XG4gICAgICAgICAgICAgICAgICB3b3JkQ291bnQ9e2RpYXJ5LndvcmRfY291bnR9XG4gICAgICAgICAgICAgICAgICBkYXk9e2RpYXJ5LmRheX1cbiAgICAgICAgICAgICAgICAgIG1vbnRoPXtkaWFyeS5tb250aF9uYW1lfVxuICAgICAgICAgICAgICAgICAgeWVhcj17ZGlhcnkueWVhcn1cbiAgICAgICAgICAgICAgICAgIHdEYXk9e2RpYXJ5LndfZGF5fVxuICAgICAgICAgICAgICAgICAgdXNlcklkPXtwcm9maWxlLmlkfVxuICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3Byb2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICAgIHVzZXJDb3VudHJ5PXtwcm9maWxlLmNvdW50cnl9XG4gICAgICAgICAgICAgICAgICB1c2VyVW5pPXtwcm9maWxlLnVuaX1cbiAgICAgICAgICAgICAgICAgIHVzZXJCaW89e3Byb2ZpbGUuYmlvfVxuICAgICAgICAgICAgICAgICAgdXNlckltYWdlPXtwcm9maWxlLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgIGZhdm9yaXRlcz17ZGlhcnkuZmF2b3JpdGVzfVxuICAgICAgICAgICAgICAgICAgZGlhcnlDb21tZW50cz17ZGlhcnkuZGlhcnlfY29tbWVudHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHB5OiA2IH19PlxuICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICBjb3VudD17bWV0YS50b3RhbFBhZ2VzfVxuICAgICAgICAgICAgcGFnZT17bWV0YS5jdXJyZW50UGFnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZVxuIl0sIm5hbWVzIjpbIkJveCIsIkNvbnRhaW5lciIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiUGFnaW5hdGlvbiIsImNhbWVsY2FzZUtleXMiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlU1dSIiwiRGlhcnlDYXJkIiwiRXJyb3IiLCJMb2FkaW5nIiwiUHJvZmlsZUNhcmQiLCJzdHlsZXMiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIlVzZXJQcm9maWxlIiwiX3MiLCJyb3V0ZXIiLCJwYWdlIiwicXVlcnkiLCJOdW1iZXIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwibmFtZSIsIl91c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsInByb2ZpbGUiLCJtZXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInB1c2giLCJjc3MiLCJwYWdlTWluSGVpZ2h0Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiY2hpbGRyZW4iLCJtYXhXaWR0aCIsInB0IiwiaWQiLCJjb3VudHJ5IiwidW5pIiwiYmlvIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImltYWdlIiwicHkiLCJmb250U2l6ZSIsIm1iIiwiY29udGFpbmVyIiwic3BhY2luZyIsImRpYXJpZXMiLCJtYXAiLCJkaWFyeSIsImkiLCJpdGVtIiwieHMiLCJtZCIsImhyZWYiLCJ0aXRsZSIsImNvbnRlbnQiLCJ3b3JkQ291bnQiLCJ3b3JkX2NvdW50IiwiZGF5IiwibW9udGgiLCJtb250aF9uYW1lIiwieWVhciIsIndEYXkiLCJ3X2RheSIsInVzZXJJZCIsInVzZXJOYW1lIiwidXNlckNvdW50cnkiLCJ1c2VyVW5pIiwidXNlckJpbyIsInVzZXJJbWFnZSIsImZhdm9yaXRlcyIsImRpYXJ5Q29tbWVudHMiLCJkaWFyeV9jb21tZW50cyIsImp1c3RpZnlDb250ZW50IiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiY3VycmVudFBhZ2UiLCJvbkNoYW5nZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[name].tsx\n"));

/***/ })

});