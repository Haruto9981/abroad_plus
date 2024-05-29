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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileLayout */ \"./src/components/ProfileLayout.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name]/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 7\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 7\n  }, _this);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.diaries);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n      sx: {\n        fontSize: 20,\n        mb: 2\n      },\n      children: \"Diaries\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n      sx: {\n        my: 2\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n      container: true,\n      children: profile.map(function (diary, i) {\n        return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          item: true,\n          xs: 12,\n          md: 12,\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n            href: '/diaries/' + diary.id,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              id: diary.id,\n              title: diary.title,\n              content: diary.content,\n              image: diary.image.url,\n              wordCount: diary.word_count,\n              day: diary.day,\n              month: diary.month_name,\n              year: diary.year,\n              wDay: diary.w_day,\n              userName: profile.name,\n              userCountry: profile.country,\n              userUni: profile.uni,\n              userBio: profile.bio,\n              userImage: profile.image.url,\n              favorites: diary.favorites,\n              diaryComments: diary.diary_comments\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n            sx: {\n              my: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center',\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Pagination, {\n        count: meta.totalPages,\n        page: meta.currentPage,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW25hbWVdL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRTtBQUNoQztBQUVkO0FBQ1c7QUFDZjtBQUNzQjtBQUNSO0FBQ0k7QUFDSztBQUNkO0FBQUE7QUE2QmpDLElBQU1nQixXQUFxQixHQUFHLFNBQXhCQSxXQUFxQkEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDbEMsSUFBTUMsTUFBTSxHQUFHWCxzREFBUyxDQUFDLENBQUM7RUFDMUIsSUFBTVksSUFBSSxHQUFHLE1BQU0sSUFBSUQsTUFBTSxDQUFDRSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDRSxLQUFLLENBQUNELElBQUksQ0FBQyxHQUFHLENBQUM7RUFDbkUsSUFBTUcsR0FBRyxHQUNQQyw4QkFBb0MsR0FDcEMsU0FBUyxHQUNUTCxNQUFNLENBQUNFLEtBQUssQ0FBQ00sSUFBSSxHQUNqQixpQkFBaUIsR0FDakJQLElBQUk7RUFFTixJQUFBUSxPQUFBLEdBQXdCbkIsK0NBQU0sQ0FBQ2MsR0FBRyxFQUFFVCwyQ0FBTyxDQUFDO0lBQXBDZSxJQUFJLEdBQUFELE9BQUEsQ0FBSkMsSUFBSTtJQUFFQyxLQUFLLEdBQUFGLE9BQUEsQ0FBTEUsS0FBSztFQUVuQixJQUFJQSxLQUFLLEVBQ1AsT0FDRWQsc0VBQUEsQ0FBQ0gsaUVBQU07SUFBQWtCLFFBQUEsRUFDTGYsc0VBQUEsQ0FBQ0wseURBQUs7TUFBQXFCLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUFFO0VBQUM7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ0gsQ0FBQztFQUViLElBQUksQ0FBQ1AsSUFBSSxFQUNQLE9BQ0ViLHNFQUFBLENBQUNILGlFQUFNO0lBQUFrQixRQUFBLEVBQ0xmLHNFQUFBLENBQUNKLDJEQUFPO01BQUFvQixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FBRTtFQUFDO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNMLENBQUM7RUFHYixJQUFNQyxPQUFPLEdBQUcvQiwwREFBYSxDQUFDdUIsSUFBSSxDQUFDUyxPQUFPLENBQUM7RUFDM0MsSUFBTUMsSUFBSSxHQUFHakMsMERBQWEsQ0FBQ3VCLElBQUksQ0FBQ1UsSUFBSSxDQUFDO0VBRXJDLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFpQyxFQUFFQyxLQUFhO0lBQUEsT0FDcEV2QixNQUFNLENBQUN3QixJQUFJLENBQUMsR0FBRyxHQUFHeEIsTUFBTSxDQUFDRSxLQUFLLENBQUNNLElBQUksR0FBRyxTQUFTLEdBQUdlLEtBQUssQ0FBQztFQUFBO0VBRTFELE9BQ0UxQixzRUFBQSxDQUFDSCxpRUFBTTtJQUFBa0IsUUFBQSxHQUNMZixzRUFBQSxDQUFDYixzREFBVTtNQUFDeUMsRUFBRSxFQUFFO1FBQUVDLFFBQVEsRUFBRSxFQUFFO1FBQUVDLEVBQUUsRUFBRTtNQUFFLENBQUU7TUFBQWYsUUFBQSxFQUFDO0lBQU87TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQVksQ0FBQyxFQUM3RHBCLHNFQUFBLENBQUNYLG1EQUFPO01BQUN1QyxFQUFFLEVBQUU7UUFBRUcsRUFBRSxFQUFFO01BQUU7SUFBRTtNQUFBZixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FBRSxDQUFDLEVBQzFCcEIsc0VBQUEsQ0FBQ2QsZ0RBQUk7TUFBQzhDLFNBQVM7TUFBQWpCLFFBQUEsRUFDWk0sT0FBTyxDQUFDWSxHQUFHLENBQUMsVUFBQ0MsS0FBaUIsRUFBRUMsQ0FBUztRQUFBLE9BQ3hDbkMsc0VBQUEsQ0FBQ2QsZ0RBQUk7VUFBU2tELElBQUk7VUFBQ0MsRUFBRSxFQUFFLEVBQUc7VUFBQ0MsRUFBRSxFQUFFLEVBQUc7VUFBQXZCLFFBQUEsR0FDaENmLHNFQUFBLENBQUNULGtEQUFJO1lBQUNnRCxJQUFJLEVBQUUsV0FBVyxHQUFHTCxLQUFLLENBQUNNLEVBQUc7WUFBQXpCLFFBQUEsRUFDakNmLHNFQUFBLENBQUNOLDZEQUFTO2NBQ1I4QyxFQUFFLEVBQUVOLEtBQUssQ0FBQ00sRUFBRztjQUNiQyxLQUFLLEVBQUVQLEtBQUssQ0FBQ08sS0FBTTtjQUNuQkMsT0FBTyxFQUFFUixLQUFLLENBQUNRLE9BQVE7Y0FDdkJDLEtBQUssRUFBRVQsS0FBSyxDQUFDUyxLQUFLLENBQUNwQyxHQUFJO2NBQ3ZCcUMsU0FBUyxFQUFFVixLQUFLLENBQUNXLFVBQVc7Y0FDNUJDLEdBQUcsRUFBRVosS0FBSyxDQUFDWSxHQUFJO2NBQ2ZDLEtBQUssRUFBRWIsS0FBSyxDQUFDYyxVQUFXO2NBQ3hCQyxJQUFJLEVBQUVmLEtBQUssQ0FBQ2UsSUFBSztjQUNqQkMsSUFBSSxFQUFFaEIsS0FBSyxDQUFDaUIsS0FBTTtjQUNsQkMsUUFBUSxFQUFFL0IsT0FBTyxDQUFDVixJQUFLO2NBQ3ZCMEMsV0FBVyxFQUFFaEMsT0FBTyxDQUFDaUMsT0FBUTtjQUM3QkMsT0FBTyxFQUFFbEMsT0FBTyxDQUFDbUMsR0FBSTtjQUNyQkMsT0FBTyxFQUFFcEMsT0FBTyxDQUFDcUMsR0FBSTtjQUNyQkMsU0FBUyxFQUFFdEMsT0FBTyxDQUFDc0IsS0FBSyxDQUFDcEMsR0FBSTtjQUM3QnFELFNBQVMsRUFBRTFCLEtBQUssQ0FBQzBCLFNBQVU7Y0FDM0JDLGFBQWEsRUFBRTNCLEtBQUssQ0FBQzRCO1lBQWU7Y0FBQTlDLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxHQUFBQyxLQUNyQztVQUFDO1lBQUFKLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUNFLENBQUMsRUFDUHBCLHNFQUFBLENBQUNYLG1EQUFPO1lBQUN1QyxFQUFFLEVBQUU7Y0FBRUcsRUFBRSxFQUFFO1lBQUU7VUFBRTtZQUFBZixRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsR0FBQUMsS0FBRSxDQUFDO1FBQUEsR0FyQmpCZSxDQUFDO1VBQUFuQixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsR0FBQUMsS0FzQk4sQ0FBQztNQUFBLENBQ1I7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDRSxDQUFDLEVBQ1BwQixzRUFBQSxDQUFDZiwrQ0FBRztNQUFDMkMsRUFBRSxFQUFFO1FBQUVtQyxPQUFPLEVBQUUsTUFBTTtRQUFFQyxjQUFjLEVBQUUsUUFBUTtRQUFFQyxFQUFFLEVBQUU7TUFBRSxDQUFFO01BQUFsRCxRQUFBLEVBQzVEZixzRUFBQSxDQUFDWixzREFBVTtRQUNUOEUsS0FBSyxFQUFFM0MsSUFBSSxDQUFDNEMsVUFBVztRQUN2Qi9ELElBQUksRUFBRW1CLElBQUksQ0FBQzZDLFdBQVk7UUFDdkJDLFFBQVEsRUFBRTdDO01BQWE7UUFBQVIsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQ3hCO0lBQUM7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ0MsQ0FBQztFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNBLENBQUM7QUFFYixDQUFDO0FBQUFsQixFQUFBLENBdkVLRCxXQUFxQjtFQUFBLFFBQ1ZULGtEQUFTLEVBU0FDLDJDQUFNO0FBQUE7QUFBQTZFLEVBQUEsR0FWMUJyRSxXQUFxQjtBQXlFM0IsK0RBQWVBLFdBQVc7QUFBQSxJQUFBcUUsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1tuYW1lXS9pbmRleC50c3g/YTRkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEdyaWQsIFR5cG9ncmFwaHksIFBhZ2luYXRpb24sIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IGNhbWVsY2FzZUtleXMgZnJvbSAnY2FtZWxjYXNlLWtleXMnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgRGlhcnlDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9EaWFyeUNhcmQnXG5pbXBvcnQgRXJyb3IgZnJvbSAnQC9jb21wb25lbnRzL0Vycm9yJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnQC9jb21wb25lbnRzL0xvYWRpbmcnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9Qcm9maWxlTGF5b3V0J1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbnR5cGUgRGlhcnlQcm9wcyA9IHtcbiAgaWQ6IG51bWJlclxuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZToge1xuICAgIHVybDogc3RyaW5nXG4gIH1cbiAgd29yZF9jb3VudDogbnVtYmVyXG4gIGRheTogc3RyaW5nXG4gIG1vbnRoX25hbWU6IHN0cmluZ1xuICBtb250aDogc3RyaW5nXG4gIHllYXI6IHN0cmluZ1xuICB3X2RheTogc3RyaW5nXG4gIHVzZXI6IHtcbiAgICBpZDogbnVtYmVyXG4gICAgbmFtZTogc3RyaW5nXG4gICAgY291bnRyeTogc3RyaW5nXG4gICAgdW5pOiBzdHJpbmdcbiAgICBiaW86IHN0cmluZ1xuICAgIGltYWdlOiB7XG4gICAgICB1cmw6IHN0cmluZ1xuICAgIH1cbiAgfVxuICBmYXZvcml0ZXM6IHsgdXNlcl9pZDogbnVtYmVyIH1bXVxuICBkaWFyeV9jb21tZW50czogQXJyYXk8b2JqZWN0PlxufVxuXG5jb25zdCBVc2VyUHJvZmlsZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhZ2UgPSAncGFnZScgaW4gcm91dGVyLnF1ZXJ5ID8gTnVtYmVyKHJvdXRlci5xdWVyeS5wYWdlKSA6IDFcbiAgY29uc3QgdXJsID1cbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgK1xuICAgICcvdXNlcnMvJyArXG4gICAgcm91dGVyLnF1ZXJ5Lm5hbWUgK1xuICAgICcvZGlhcmllcy8/cGFnZT0nICtcbiAgICBwYWdlXG5cbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcblxuICBpZiAoZXJyb3IpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxFcnJvciAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICBpZiAoIWRhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICA8L0xheW91dD5cbiAgICApXG5cbiAgY29uc3QgcHJvZmlsZSA9IGNhbWVsY2FzZUtleXMoZGF0YS5kaWFyaWVzKVxuICBjb25zdCBtZXRhID0gY2FtZWxjYXNlS2V5cyhkYXRhLm1ldGEpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDx1bmtub3duPiwgdmFsdWU6IG51bWJlcikgPT5cbiAgICByb3V0ZXIucHVzaCgnLycgKyByb3V0ZXIucXVlcnkubmFtZSArICcvP3BhZ2U9JyArIHZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAyMCwgbWI6IDIgfX0+RGlhcmllczwvVHlwb2dyYXBoeT5cbiAgICAgIDxEaXZpZGVyIHN4PXt7IG15OiAyIH19IC8+XG4gICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgIHtwcm9maWxlLm1hcCgoZGlhcnk6IERpYXJ5UHJvcHMsIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxHcmlkIGtleT17aX0gaXRlbSB4cz17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICA8TGluayBocmVmPXsnL2RpYXJpZXMvJyArIGRpYXJ5LmlkfT5cbiAgICAgICAgICAgICAgPERpYXJ5Q2FyZFxuICAgICAgICAgICAgICAgIGlkPXtkaWFyeS5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17ZGlhcnkudGl0bGV9XG4gICAgICAgICAgICAgICAgY29udGVudD17ZGlhcnkuY29udGVudH1cbiAgICAgICAgICAgICAgICBpbWFnZT17ZGlhcnkuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgIHdvcmRDb3VudD17ZGlhcnkud29yZF9jb3VudH1cbiAgICAgICAgICAgICAgICBkYXk9e2RpYXJ5LmRheX1cbiAgICAgICAgICAgICAgICBtb250aD17ZGlhcnkubW9udGhfbmFtZX1cbiAgICAgICAgICAgICAgICB5ZWFyPXtkaWFyeS55ZWFyfVxuICAgICAgICAgICAgICAgIHdEYXk9e2RpYXJ5LndfZGF5fVxuICAgICAgICAgICAgICAgIHVzZXJOYW1lPXtwcm9maWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgdXNlckNvdW50cnk9e3Byb2ZpbGUuY291bnRyeX1cbiAgICAgICAgICAgICAgICB1c2VyVW5pPXtwcm9maWxlLnVuaX1cbiAgICAgICAgICAgICAgICB1c2VyQmlvPXtwcm9maWxlLmJpb31cbiAgICAgICAgICAgICAgICB1c2VySW1hZ2U9e3Byb2ZpbGUuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgIGZhdm9yaXRlcz17ZGlhcnkuZmF2b3JpdGVzfVxuICAgICAgICAgICAgICAgIGRpYXJ5Q29tbWVudHM9e2RpYXJ5LmRpYXJ5X2NvbW1lbnRzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPERpdmlkZXIgc3g9e3sgbXk6IDIgfX0gLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICkpfVxuICAgICAgPC9HcmlkPlxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcHk6IDYgfX0+XG4gICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgY291bnQ9e21ldGEudG90YWxQYWdlc31cbiAgICAgICAgICBwYWdlPXttZXRhLmN1cnJlbnRQYWdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZVxuIl0sIm5hbWVzIjpbIkJveCIsIkdyaWQiLCJUeXBvZ3JhcGh5IiwiUGFnaW5hdGlvbiIsIkRpdmlkZXIiLCJjYW1lbGNhc2VLZXlzIiwiTGluayIsInVzZVJvdXRlciIsInVzZVNXUiIsIkRpYXJ5Q2FyZCIsIkVycm9yIiwiTG9hZGluZyIsIkxheW91dCIsImZldGNoZXIiLCJqc3hERVYiLCJfanN4REVWIiwiVXNlclByb2ZpbGUiLCJfcyIsInJvdXRlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJuYW1lIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJwcm9maWxlIiwiZGlhcmllcyIsIm1ldGEiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicHVzaCIsInN4IiwiZm9udFNpemUiLCJtYiIsIm15IiwiY29udGFpbmVyIiwibWFwIiwiZGlhcnkiLCJpIiwiaXRlbSIsInhzIiwibWQiLCJocmVmIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJpbWFnZSIsIndvcmRDb3VudCIsIndvcmRfY291bnQiLCJkYXkiLCJtb250aCIsIm1vbnRoX25hbWUiLCJ5ZWFyIiwid0RheSIsIndfZGF5IiwidXNlck5hbWUiLCJ1c2VyQ291bnRyeSIsImNvdW50cnkiLCJ1c2VyVW5pIiwidW5pIiwidXNlckJpbyIsImJpbyIsInVzZXJJbWFnZSIsImZhdm9yaXRlcyIsImRpYXJ5Q29tbWVudHMiLCJkaWFyeV9jb21tZW50cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInB5IiwiY291bnQiLCJ0b3RhbFBhZ2VzIiwiY3VycmVudFBhZ2UiLCJvbkNoYW5nZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[name]/index.tsx\n"));

/***/ })

});