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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileLayout */ \"./src/components/ProfileLayout.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name]/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  console.log(data);\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 55,\n    columnNumber: 7\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 7\n  }, _this);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n      sx: {\n        fontSize: 20,\n        mb: 2\n      },\n      children: \"Diaries\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n      sx: {\n        my: 2\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n      container: true,\n      children: profile.diaries.map(function (diary, i) {\n        return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          item: true,\n          xs: 12,\n          md: 12,\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n            href: '/diaries/' + diary.id,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              id: diary.id,\n              title: diary.title,\n              content: diary.content,\n              image: diary.image.url,\n              wordCount: diary.word_count,\n              day: diary.day,\n              month: diary.month_name,\n              year: diary.year,\n              wDay: diary.w_day,\n              userName: profile.name,\n              userCountry: profile.country,\n              userUni: profile.uni,\n              userBio: profile.bio,\n              userImage: profile.image.url,\n              favorites: diary.favorites,\n              diaryComments: diary.diary_comments\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Divider, {\n            sx: {\n              my: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 13\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n      sx: {\n        display: 'flex',\n        justifyContent: 'center',\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Pagination, {\n        count: meta.totalPages,\n        page: meta.currentPage,\n        onChange: handleChange\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW25hbWVdL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRTtBQUNoQztBQUVkO0FBQ1c7QUFDZjtBQUNzQjtBQUNSO0FBQ0k7QUFDSztBQUNkO0FBQUE7QUE2QmpDLElBQU1nQixXQUFxQixHQUFHLFNBQXhCQSxXQUFxQkEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDbEMsSUFBTUMsTUFBTSxHQUFHWCxzREFBUyxDQUFDLENBQUM7RUFDMUIsSUFBTVksSUFBSSxHQUFHLE1BQU0sSUFBSUQsTUFBTSxDQUFDRSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDRSxLQUFLLENBQUNELElBQUksQ0FBQyxHQUFHLENBQUM7RUFDbkUsSUFBTUcsR0FBRyxHQUNQQyw4QkFBb0MsR0FDcEMsU0FBUyxHQUNUTCxNQUFNLENBQUNFLEtBQUssQ0FBQ00sSUFBSSxHQUNqQixpQkFBaUIsR0FDakJQLElBQUk7RUFFTixJQUFBUSxPQUFBLEdBQXdCbkIsK0NBQU0sQ0FBQ2MsR0FBRyxFQUFFVCwyQ0FBTyxDQUFDO0lBQXBDZSxJQUFJLEdBQUFELE9BQUEsQ0FBSkMsSUFBSTtJQUFFQyxLQUFLLEdBQUFGLE9BQUEsQ0FBTEUsS0FBSztFQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztFQUVqQixJQUFJQyxLQUFLLEVBQ1AsT0FDRWQsc0VBQUEsQ0FBQ0gsaUVBQU07SUFBQW9CLFFBQUEsRUFDTGpCLHNFQUFBLENBQUNMLHlEQUFLO01BQUF1QixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FBRTtFQUFDO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNILENBQUM7RUFFYixJQUFJLENBQUNULElBQUksRUFDUCxPQUNFYixzRUFBQSxDQUFDSCxpRUFBTTtJQUFBb0IsUUFBQSxFQUNMakIsc0VBQUEsQ0FBQ0osMkRBQU87TUFBQXNCLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUFFO0VBQUM7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ0wsQ0FBQztFQUdiLElBQU1DLE9BQU8sR0FBR2pDLDBEQUFhLENBQUN1QixJQUFJLENBQUM7RUFDbkMsSUFBTVcsSUFBSSxHQUFHbEMsMERBQWEsQ0FBQ3VCLElBQUksQ0FBQ1csSUFBSSxDQUFDO0VBRXJDLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFpQyxFQUFFQyxLQUFhO0lBQUEsT0FDcEV4QixNQUFNLENBQUN5QixJQUFJLENBQUMsR0FBRyxHQUFHekIsTUFBTSxDQUFDRSxLQUFLLENBQUNNLElBQUksR0FBRyxTQUFTLEdBQUdnQixLQUFLLENBQUM7RUFBQTtFQUUxRCxPQUNFM0Isc0VBQUEsQ0FBQ0gsaUVBQU07SUFBQW9CLFFBQUEsR0FDTGpCLHNFQUFBLENBQUNiLHNEQUFVO01BQUMwQyxFQUFFLEVBQUU7UUFBRUMsUUFBUSxFQUFFLEVBQUU7UUFBRUMsRUFBRSxFQUFFO01BQUUsQ0FBRTtNQUFBZCxRQUFBLEVBQUM7SUFBTztNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FBWSxDQUFDLEVBQzdEdEIsc0VBQUEsQ0FBQ1gsbURBQU87TUFBQ3dDLEVBQUUsRUFBRTtRQUFFRyxFQUFFLEVBQUU7TUFBRTtJQUFFO01BQUFkLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUFFLENBQUMsRUFDMUJ0QixzRUFBQSxDQUFDZCxnREFBSTtNQUFDK0MsU0FBUztNQUFBaEIsUUFBQSxFQUNaTSxPQUFPLENBQUNXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLEtBQWlCLEVBQUVDLENBQVM7UUFBQSxPQUNoRHJDLHNFQUFBLENBQUNkLGdEQUFJO1VBQVNvRCxJQUFJO1VBQUNDLEVBQUUsRUFBRSxFQUFHO1VBQUNDLEVBQUUsRUFBRSxFQUFHO1VBQUF2QixRQUFBLEdBQ2hDakIsc0VBQUEsQ0FBQ1Qsa0RBQUk7WUFBQ2tELElBQUksRUFBRSxXQUFXLEdBQUdMLEtBQUssQ0FBQ00sRUFBRztZQUFBekIsUUFBQSxFQUNqQ2pCLHNFQUFBLENBQUNOLDZEQUFTO2NBQ1JnRCxFQUFFLEVBQUVOLEtBQUssQ0FBQ00sRUFBRztjQUNiQyxLQUFLLEVBQUVQLEtBQUssQ0FBQ08sS0FBTTtjQUNuQkMsT0FBTyxFQUFFUixLQUFLLENBQUNRLE9BQVE7Y0FDdkJDLEtBQUssRUFBRVQsS0FBSyxDQUFDUyxLQUFLLENBQUN0QyxHQUFJO2NBQ3ZCdUMsU0FBUyxFQUFFVixLQUFLLENBQUNXLFVBQVc7Y0FDNUJDLEdBQUcsRUFBRVosS0FBSyxDQUFDWSxHQUFJO2NBQ2ZDLEtBQUssRUFBRWIsS0FBSyxDQUFDYyxVQUFXO2NBQ3hCQyxJQUFJLEVBQUVmLEtBQUssQ0FBQ2UsSUFBSztjQUNqQkMsSUFBSSxFQUFFaEIsS0FBSyxDQUFDaUIsS0FBTTtjQUNsQkMsUUFBUSxFQUFFL0IsT0FBTyxDQUFDWixJQUFLO2NBQ3ZCNEMsV0FBVyxFQUFFaEMsT0FBTyxDQUFDaUMsT0FBUTtjQUM3QkMsT0FBTyxFQUFFbEMsT0FBTyxDQUFDbUMsR0FBSTtjQUNyQkMsT0FBTyxFQUFFcEMsT0FBTyxDQUFDcUMsR0FBSTtjQUNyQkMsU0FBUyxFQUFFdEMsT0FBTyxDQUFDc0IsS0FBSyxDQUFDdEMsR0FBSTtjQUM3QnVELFNBQVMsRUFBRTFCLEtBQUssQ0FBQzBCLFNBQVU7Y0FDM0JDLGFBQWEsRUFBRTNCLEtBQUssQ0FBQzRCO1lBQWU7Y0FBQTlDLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxHQUFBQyxLQUNyQztVQUFDO1lBQUFKLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUNFLENBQUMsRUFDUHRCLHNFQUFBLENBQUNYLG1EQUFPO1lBQUN3QyxFQUFFLEVBQUU7Y0FBRUcsRUFBRSxFQUFFO1lBQUU7VUFBRTtZQUFBZCxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsR0FBQUMsS0FBRSxDQUFDO1FBQUEsR0FyQmpCZSxDQUFDO1VBQUFuQixRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsR0FBQUMsS0FzQk4sQ0FBQztNQUFBLENBQ1I7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDRSxDQUFDLEVBQ1B0QixzRUFBQSxDQUFDZiwrQ0FBRztNQUFDNEMsRUFBRSxFQUFFO1FBQUVvQyxPQUFPLEVBQUUsTUFBTTtRQUFFQyxjQUFjLEVBQUUsUUFBUTtRQUFFQyxFQUFFLEVBQUU7TUFBRSxDQUFFO01BQUFsRCxRQUFBLEVBQzVEakIsc0VBQUEsQ0FBQ1osc0RBQVU7UUFDVGdGLEtBQUssRUFBRTVDLElBQUksQ0FBQzZDLFVBQVc7UUFDdkJqRSxJQUFJLEVBQUVvQixJQUFJLENBQUM4QyxXQUFZO1FBQ3ZCQyxRQUFRLEVBQUU5QztNQUFhO1FBQUFQLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUN4QjtJQUFDO01BQUFKLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUNDLENBQUM7RUFBQTtJQUFBSixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FDQSxDQUFDO0FBRWIsQ0FBQztBQUFBcEIsRUFBQSxDQXhFS0QsV0FBcUI7RUFBQSxRQUNWVCxrREFBUyxFQVNBQywyQ0FBTTtBQUFBO0FBQUErRSxFQUFBLEdBVjFCdkUsV0FBcUI7QUEwRTNCLCtEQUFlQSxXQUFXO0FBQUEsSUFBQXVFLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bbmFtZV0vaW5kZXgudHN4P2E0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBHcmlkLCBUeXBvZ3JhcGh5LCBQYWdpbmF0aW9uLCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBjYW1lbGNhc2VLZXlzIGZyb20gJ2NhbWVsY2FzZS1rZXlzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IERpYXJ5Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvRGlhcnlDYXJkJ1xuaW1wb3J0IEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9FcnJvcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZmlsZUxheW91dCdcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICdAL3V0aWxzJ1xuXG50eXBlIERpYXJ5UHJvcHMgPSB7XG4gIGlkOiBudW1iZXJcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW1hZ2U6IHtcbiAgICB1cmw6IHN0cmluZ1xuICB9XG4gIHdvcmRfY291bnQ6IG51bWJlclxuICBkYXk6IHN0cmluZ1xuICBtb250aF9uYW1lOiBzdHJpbmdcbiAgbW9udGg6IHN0cmluZ1xuICB5ZWFyOiBzdHJpbmdcbiAgd19kYXk6IHN0cmluZ1xuICB1c2VyOiB7XG4gICAgaWQ6IG51bWJlclxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvdW50cnk6IHN0cmluZ1xuICAgIHVuaTogc3RyaW5nXG4gICAgYmlvOiBzdHJpbmdcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzdHJpbmdcbiAgICB9XG4gIH1cbiAgZmF2b3JpdGVzOiB7IHVzZXJfaWQ6IG51bWJlciB9W11cbiAgZGlhcnlfY29tbWVudHM6IEFycmF5PG9iamVjdD5cbn1cblxuY29uc3QgVXNlclByb2ZpbGU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYWdlID0gJ3BhZ2UnIGluIHJvdXRlci5xdWVyeSA/IE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSkgOiAxXG4gIGNvbnN0IHVybCA9XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMICtcbiAgICAnL3VzZXJzLycgK1xuICAgIHJvdXRlci5xdWVyeS5uYW1lICtcbiAgICAnL2RpYXJpZXMvP3BhZ2U9JyArXG4gICAgcGFnZVxuXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsIGZldGNoZXIpXG4gIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgaWYgKGVycm9yKVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8RXJyb3IgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgaWYgKCFkYXRhKVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuXG4gIGNvbnN0IHByb2ZpbGUgPSBjYW1lbGNhc2VLZXlzKGRhdGEpXG4gIGNvbnN0IG1ldGEgPSBjYW1lbGNhc2VLZXlzKGRhdGEubWV0YSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHVua25vd24+LCB2YWx1ZTogbnVtYmVyKSA9PlxuICAgIHJvdXRlci5wdXNoKCcvJyArIHJvdXRlci5xdWVyeS5uYW1lICsgJy8/cGFnZT0nICsgdmFsdWUpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDIwLCBtYjogMiB9fT5EaWFyaWVzPC9UeXBvZ3JhcGh5PlxuICAgICAgPERpdmlkZXIgc3g9e3sgbXk6IDIgfX0gLz5cbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAge3Byb2ZpbGUuZGlhcmllcy5tYXAoKGRpYXJ5OiBEaWFyeVByb3BzLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICA8R3JpZCBrZXk9e2l9IGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9kaWFyaWVzLycgKyBkaWFyeS5pZH0+XG4gICAgICAgICAgICAgIDxEaWFyeUNhcmRcbiAgICAgICAgICAgICAgICBpZD17ZGlhcnkuaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2RpYXJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2RpYXJ5LmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgaW1hZ2U9e2RpYXJ5LmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICB3b3JkQ291bnQ9e2RpYXJ5LndvcmRfY291bnR9XG4gICAgICAgICAgICAgICAgZGF5PXtkaWFyeS5kYXl9XG4gICAgICAgICAgICAgICAgbW9udGg9e2RpYXJ5Lm1vbnRoX25hbWV9XG4gICAgICAgICAgICAgICAgeWVhcj17ZGlhcnkueWVhcn1cbiAgICAgICAgICAgICAgICB3RGF5PXtkaWFyeS53X2RheX1cbiAgICAgICAgICAgICAgICB1c2VyTmFtZT17cHJvZmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgIHVzZXJDb3VudHJ5PXtwcm9maWxlLmNvdW50cnl9XG4gICAgICAgICAgICAgICAgdXNlclVuaT17cHJvZmlsZS51bml9XG4gICAgICAgICAgICAgICAgdXNlckJpbz17cHJvZmlsZS5iaW99XG4gICAgICAgICAgICAgICAgdXNlckltYWdlPXtwcm9maWxlLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICBmYXZvcml0ZXM9e2RpYXJ5LmZhdm9yaXRlc31cbiAgICAgICAgICAgICAgICBkaWFyeUNvbW1lbnRzPXtkaWFyeS5kaWFyeV9jb21tZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG15OiAyIH19IC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHB5OiA2IH19PlxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIGNvdW50PXttZXRhLnRvdGFsUGFnZXN9XG4gICAgICAgICAgcGFnZT17bWV0YS5jdXJyZW50UGFnZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlBhZ2luYXRpb24iLCJEaXZpZGVyIiwiY2FtZWxjYXNlS2V5cyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJEaWFyeUNhcmQiLCJFcnJvciIsIkxvYWRpbmciLCJMYXlvdXQiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIlVzZXJQcm9maWxlIiwiX3MiLCJyb3V0ZXIiLCJwYWdlIiwicXVlcnkiLCJOdW1iZXIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwibmFtZSIsIl91c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsInByb2ZpbGUiLCJtZXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInB1c2giLCJzeCIsImZvbnRTaXplIiwibWIiLCJteSIsImNvbnRhaW5lciIsImRpYXJpZXMiLCJtYXAiLCJkaWFyeSIsImkiLCJpdGVtIiwieHMiLCJtZCIsImhyZWYiLCJpZCIsInRpdGxlIiwiY29udGVudCIsImltYWdlIiwid29yZENvdW50Iiwid29yZF9jb3VudCIsImRheSIsIm1vbnRoIiwibW9udGhfbmFtZSIsInllYXIiLCJ3RGF5Iiwid19kYXkiLCJ1c2VyTmFtZSIsInVzZXJDb3VudHJ5IiwiY291bnRyeSIsInVzZXJVbmkiLCJ1bmkiLCJ1c2VyQmlvIiwiYmlvIiwidXNlckltYWdlIiwiZmF2b3JpdGVzIiwiZGlhcnlDb21tZW50cyIsImRpYXJ5X2NvbW1lbnRzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicHkiLCJjb3VudCIsInRvdGFsUGFnZXMiLCJjdXJyZW50UGFnZSIsIm9uQ2hhbmdlIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[name]/index.tsx\n"));

/***/ })

});