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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileLayout */ \"./src/components/ProfileLayout.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name]/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/users/' + router.query.name + '/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_7__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 21\n  }, _this);\n  var profile = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.profile);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(data.meta);\n  var handleChange = function handleChange(event, value) {\n    return router.push('/' + router.query.name + '/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_ProfileLayout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Card, {\n      sx: {\n        borderRadius: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.CardContent, {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Typography, {\n          sx: {\n            fontSize: 20,\n            mb: 2\n          },\n          children: \"Shared Diaries\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Divider, {\n          sx: {\n            mt: 2\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n          container: true,\n          children: profile.diaries.map(function (diary, i) {\n            return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Grid, {\n              item: true,\n              xs: 12,\n              md: 12,\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n                href: '/diaries/' + diary.id,\n                children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                  id: diary.id,\n                  title: diary.title,\n                  content: diary.content,\n                  image: diary.image.url,\n                  wordCount: diary.word_count,\n                  day: diary.day,\n                  month: diary.month_name,\n                  year: diary.year,\n                  wDay: diary.w_day,\n                  userId: profile.id,\n                  userName: profile.name,\n                  userCountry: profile.country,\n                  userUni: profile.uni,\n                  userBio: profile.bio,\n                  userImage: profile.image.url,\n                  favorites: diary.favorites,\n                  diaryComments: diary.diary_comments\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 77,\n                  columnNumber: 19\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 76,\n                columnNumber: 17\n              }, _this)\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 75,\n              columnNumber: 15\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Box, {\n          sx: {\n            display: 'flex',\n            justifyContent: 'center',\n            py: 6\n          },\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_10__.Pagination, {\n            count: meta.totalPages,\n            page: meta.currentPage,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 68,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW25hbWVdL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9zQjtBQUNvQjtBQUVkO0FBQ1c7QUFDZjtBQUNzQjtBQUNSO0FBQ0k7QUFDSztBQUNkO0FBQUE7QUE2QmpDLElBQU1pQixXQUFxQixHQUFHLFNBQXhCQSxXQUFxQkEsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFDbEMsSUFBTUMsTUFBTSxHQUFHWCxzREFBUyxDQUFDLENBQUM7RUFDMUIsSUFBTVksSUFBSSxHQUFHLE1BQU0sSUFBSUQsTUFBTSxDQUFDRSxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0gsTUFBTSxDQUFDRSxLQUFLLENBQUNELElBQUksQ0FBQyxHQUFHLENBQUM7RUFDbkUsSUFBTUcsR0FBRyxHQUNQQyw4QkFBb0MsR0FDcEMsU0FBUyxHQUNUTCxNQUFNLENBQUNFLEtBQUssQ0FBQ00sSUFBSSxHQUNqQixTQUFTLEdBQ1RQLElBQUk7RUFFTixJQUFBUSxPQUFBLEdBQXdCbkIsK0NBQU0sQ0FBQ2MsR0FBRyxFQUFFVCwyQ0FBTyxDQUFDO0lBQXBDZSxJQUFJLEdBQUFELE9BQUEsQ0FBSkMsSUFBSTtJQUFFQyxLQUFLLEdBQUFGLE9BQUEsQ0FBTEUsS0FBSztFQUNuQixJQUFJQSxLQUFLLEVBQUUsT0FBT2Qsc0VBQUEsQ0FBQ0wseURBQUs7SUFBQW9CLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUFFLENBQUM7RUFDM0IsSUFBSSxDQUFDTixJQUFJLEVBQUUsT0FBT2Isc0VBQUEsQ0FBQ0osMkRBQU87SUFBQW1CLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUFFLENBQUM7RUFFN0IsSUFBTUMsT0FBTyxHQUFHOUIsMERBQWEsQ0FBQ3VCLElBQUksQ0FBQ08sT0FBTyxDQUFDO0VBQzNDLElBQU1DLElBQUksR0FBRy9CLDBEQUFhLENBQUN1QixJQUFJLENBQUNRLElBQUksQ0FBQztFQUVyQyxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBSUMsS0FBaUMsRUFBRUMsS0FBYTtJQUFBLE9BQ3BFckIsTUFBTSxDQUFDc0IsSUFBSSxDQUFDLEdBQUcsR0FBR3RCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDTSxJQUFJLEdBQUcsU0FBUyxHQUFHYSxLQUFLLENBQUM7RUFBQTtFQUUxRCxPQUNFeEIsc0VBQUEsQ0FBQ0gsaUVBQU07SUFBQTZCLFFBQUEsRUFDTDFCLHNFQUFBLENBQUNaLGdEQUFJO01BQUN1QyxFQUFFLEVBQUU7UUFBRUMsWUFBWSxFQUFFO01BQUUsQ0FBRTtNQUFBRixRQUFBLEVBQzVCMUIsc0VBQUEsQ0FBQ1gsdURBQVc7UUFBQXFDLFFBQUEsR0FDVjFCLHNFQUFBLENBQUNkLHNEQUFVO1VBQUN5QyxFQUFFLEVBQUU7WUFBRUUsUUFBUSxFQUFFLEVBQUU7WUFBRUMsRUFBRSxFQUFFO1VBQUUsQ0FBRTtVQUFBSixRQUFBLEVBQUM7UUFBYztVQUFBWCxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUEsR0FBQUMsS0FBWSxDQUFDLEVBQ3BFbkIsc0VBQUEsQ0FBQytCLE9BQU87VUFBQ0osRUFBRSxFQUFFO1lBQUVLLEVBQUUsRUFBRTtVQUFFO1FBQUU7VUFBQWpCLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxHQUFBQyxLQUFFLENBQUMsRUFDMUJuQixzRUFBQSxDQUFDZixnREFBSTtVQUFDZ0QsU0FBUztVQUFBUCxRQUFBLEVBQ1pOLE9BQU8sQ0FBQ2MsT0FBTyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsS0FBaUIsRUFBRUMsQ0FBUztZQUFBLE9BQ2hEckMsc0VBQUEsQ0FBQ2YsZ0RBQUk7Y0FBU3FELElBQUk7Y0FBQ0MsRUFBRSxFQUFFLEVBQUc7Y0FBQ0MsRUFBRSxFQUFFLEVBQUc7Y0FBQWQsUUFBQSxFQUNoQzFCLHNFQUFBLENBQUNULGtEQUFJO2dCQUFDa0QsSUFBSSxFQUFFLFdBQVcsR0FBR0wsS0FBSyxDQUFDTSxFQUFHO2dCQUFBaEIsUUFBQSxFQUNqQzFCLHNFQUFBLENBQUNOLDZEQUFTO2tCQUNSZ0QsRUFBRSxFQUFFTixLQUFLLENBQUNNLEVBQUc7a0JBQ2JDLEtBQUssRUFBRVAsS0FBSyxDQUFDTyxLQUFNO2tCQUNuQkMsT0FBTyxFQUFFUixLQUFLLENBQUNRLE9BQVE7a0JBQ3ZCQyxLQUFLLEVBQUVULEtBQUssQ0FBQ1MsS0FBSyxDQUFDdEMsR0FBSTtrQkFDdkJ1QyxTQUFTLEVBQUVWLEtBQUssQ0FBQ1csVUFBVztrQkFDNUJDLEdBQUcsRUFBRVosS0FBSyxDQUFDWSxHQUFJO2tCQUNmQyxLQUFLLEVBQUViLEtBQUssQ0FBQ2MsVUFBVztrQkFDeEJDLElBQUksRUFBRWYsS0FBSyxDQUFDZSxJQUFLO2tCQUNqQkMsSUFBSSxFQUFFaEIsS0FBSyxDQUFDaUIsS0FBTTtrQkFDbEJDLE1BQU0sRUFBRWxDLE9BQU8sQ0FBQ3NCLEVBQUc7a0JBQ25CYSxRQUFRLEVBQUVuQyxPQUFPLENBQUNULElBQUs7a0JBQ3ZCNkMsV0FBVyxFQUFFcEMsT0FBTyxDQUFDcUMsT0FBUTtrQkFDN0JDLE9BQU8sRUFBRXRDLE9BQU8sQ0FBQ3VDLEdBQUk7a0JBQ3JCQyxPQUFPLEVBQUV4QyxPQUFPLENBQUN5QyxHQUFJO2tCQUNyQkMsU0FBUyxFQUFFMUMsT0FBTyxDQUFDeUIsS0FBSyxDQUFDdEMsR0FBSTtrQkFDN0J3RCxTQUFTLEVBQUUzQixLQUFLLENBQUMyQixTQUFVO2tCQUMzQkMsYUFBYSxFQUFFNUIsS0FBSyxDQUFDNkI7Z0JBQWU7a0JBQUFsRCxRQUFBLEVBQUFDLFlBQUE7a0JBQUFDLFVBQUE7a0JBQUFDLFlBQUE7Z0JBQUEsR0FBQUMsS0FDckM7Y0FBQztnQkFBQUosUUFBQSxFQUFBQyxZQUFBO2dCQUFBQyxVQUFBO2dCQUFBQyxZQUFBO2NBQUEsR0FBQUMsS0FDRTtZQUFDLEdBckJFa0IsQ0FBQztjQUFBdEIsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLEdBQUFDLEtBc0JOLENBQUM7VUFBQSxDQUNSO1FBQUM7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBQ0UsQ0FBQyxFQUNQbkIsc0VBQUEsQ0FBQ2hCLCtDQUFHO1VBQUMyQyxFQUFFLEVBQUU7WUFBRXVDLE9BQU8sRUFBRSxNQUFNO1lBQUVDLGNBQWMsRUFBRSxRQUFRO1lBQUVDLEVBQUUsRUFBRTtVQUFFLENBQUU7VUFBQTFDLFFBQUEsRUFDNUQxQixzRUFBQSxDQUFDYixzREFBVTtZQUNUa0YsS0FBSyxFQUFFaEQsSUFBSSxDQUFDaUQsVUFBVztZQUN2QmxFLElBQUksRUFBRWlCLElBQUksQ0FBQ2tELFdBQVk7WUFDdkJDLFFBQVEsRUFBRWxEO1VBQWE7WUFBQVAsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLEdBQUFDLEtBQ3hCO1FBQUM7VUFBQUosUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBQ0MsQ0FBQztNQUFBO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUNLO0lBQUM7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ1Y7RUFBQztJQUFBSixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FDRCxDQUFDO0FBRWIsQ0FBQztBQUFBakIsRUFBQSxDQWhFS0QsV0FBcUI7RUFBQSxRQUNWVCxrREFBUyxFQVNBQywyQ0FBTTtBQUFBO0FBQUFnRixFQUFBLEdBVjFCeEUsV0FBcUI7QUFrRTNCLCtEQUFlQSxXQUFXO0FBQUEsSUFBQXdFLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bbmFtZV0vaW5kZXgudHN4P2E0ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxuICBQYWdpbmF0aW9uLFxuICBDYXJkLFxuICBDYXJkQ29udGVudCxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBjYW1lbGNhc2VLZXlzIGZyb20gJ2NhbWVsY2FzZS1rZXlzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IERpYXJ5Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvRGlhcnlDYXJkJ1xuaW1wb3J0IEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9FcnJvcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZmlsZUxheW91dCdcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICdAL3V0aWxzJ1xuXG50eXBlIERpYXJ5UHJvcHMgPSB7XG4gIGlkOiBudW1iZXJcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW1hZ2U6IHtcbiAgICB1cmw6IHN0cmluZ1xuICB9XG4gIHdvcmRfY291bnQ6IG51bWJlclxuICBkYXk6IHN0cmluZ1xuICBtb250aF9uYW1lOiBzdHJpbmdcbiAgbW9udGg6IHN0cmluZ1xuICB5ZWFyOiBzdHJpbmdcbiAgd19kYXk6IHN0cmluZ1xuICB1c2VyOiB7XG4gICAgaWQ6IG51bWJlclxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvdW50cnk6IHN0cmluZ1xuICAgIHVuaTogc3RyaW5nXG4gICAgYmlvOiBzdHJpbmdcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzdHJpbmdcbiAgICB9XG4gIH1cbiAgZmF2b3JpdGVzOiB7IHVzZXJfaWQ6IG51bWJlciB9W11cbiAgZGlhcnlfY29tbWVudHM6IEFycmF5PG9iamVjdD5cbn1cblxuY29uc3QgVXNlclByb2ZpbGU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYWdlID0gJ3BhZ2UnIGluIHJvdXRlci5xdWVyeSA/IE51bWJlcihyb3V0ZXIucXVlcnkucGFnZSkgOiAxXG4gIGNvbnN0IHVybCA9XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMICtcbiAgICAnL3VzZXJzLycgK1xuICAgIHJvdXRlci5xdWVyeS5uYW1lICtcbiAgICAnLz9wYWdlPScgK1xuICAgIHBhZ2VcblxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmcgLz5cblxuICBjb25zdCBwcm9maWxlID0gY2FtZWxjYXNlS2V5cyhkYXRhLnByb2ZpbGUpXG4gIGNvbnN0IG1ldGEgPSBjYW1lbGNhc2VLZXlzKGRhdGEubWV0YSlcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHVua25vd24+LCB2YWx1ZTogbnVtYmVyKSA9PlxuICAgIHJvdXRlci5wdXNoKCcvJyArIHJvdXRlci5xdWVyeS5uYW1lICsgJy8/cGFnZT0nICsgdmFsdWUpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPENhcmQgc3g9e3sgYm9yZGVyUmFkaXVzOiAyIH19PlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDIwLCBtYjogMiB9fT5TaGFyZWQgRGlhcmllczwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8RGl2aWRlciBzeD17eyBtdDogMiB9fSAvPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cbiAgICAgICAgICAgIHtwcm9maWxlLmRpYXJpZXMubWFwKChkaWFyeTogRGlhcnlQcm9wcywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxHcmlkIGtleT17aX0gaXRlbSB4cz17MTJ9IG1kPXsxMn0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9kaWFyaWVzLycgKyBkaWFyeS5pZH0+XG4gICAgICAgICAgICAgICAgICA8RGlhcnlDYXJkXG4gICAgICAgICAgICAgICAgICAgIGlkPXtkaWFyeS5pZH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2RpYXJ5LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtkaWFyeS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17ZGlhcnkuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICB3b3JkQ291bnQ9e2RpYXJ5LndvcmRfY291bnR9XG4gICAgICAgICAgICAgICAgICAgIGRheT17ZGlhcnkuZGF5fVxuICAgICAgICAgICAgICAgICAgICBtb250aD17ZGlhcnkubW9udGhfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgeWVhcj17ZGlhcnkueWVhcn1cbiAgICAgICAgICAgICAgICAgICAgd0RheT17ZGlhcnkud19kYXl9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZD17cHJvZmlsZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e3Byb2ZpbGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgdXNlckNvdW50cnk9e3Byb2ZpbGUuY291bnRyeX1cbiAgICAgICAgICAgICAgICAgICAgdXNlclVuaT17cHJvZmlsZS51bml9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJCaW89e3Byb2ZpbGUuYmlvfVxuICAgICAgICAgICAgICAgICAgICB1c2VySW1hZ2U9e3Byb2ZpbGUuaW1hZ2UudXJsfVxuICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZXM9e2RpYXJ5LmZhdm9yaXRlc31cbiAgICAgICAgICAgICAgICAgICAgZGlhcnlDb21tZW50cz17ZGlhcnkuZGlhcnlfY29tbWVudHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHB5OiA2IH19PlxuICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgY291bnQ9e21ldGEudG90YWxQYWdlc31cbiAgICAgICAgICAgICAgcGFnZT17bWV0YS5jdXJyZW50UGFnZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8L0NhcmQ+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwiVHlwb2dyYXBoeSIsIlBhZ2luYXRpb24iLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJjYW1lbGNhc2VLZXlzIiwiTGluayIsInVzZVJvdXRlciIsInVzZVNXUiIsIkRpYXJ5Q2FyZCIsIkVycm9yIiwiTG9hZGluZyIsIkxheW91dCIsImZldGNoZXIiLCJqc3hERVYiLCJfanN4REVWIiwiVXNlclByb2ZpbGUiLCJfcyIsInJvdXRlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJuYW1lIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwicHJvZmlsZSIsIm1ldGEiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicHVzaCIsImNoaWxkcmVuIiwic3giLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsIm1iIiwiRGl2aWRlciIsIm10IiwiY29udGFpbmVyIiwiZGlhcmllcyIsIm1hcCIsImRpYXJ5IiwiaSIsIml0ZW0iLCJ4cyIsIm1kIiwiaHJlZiIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiaW1hZ2UiLCJ3b3JkQ291bnQiLCJ3b3JkX2NvdW50IiwiZGF5IiwibW9udGgiLCJtb250aF9uYW1lIiwieWVhciIsIndEYXkiLCJ3X2RheSIsInVzZXJJZCIsInVzZXJOYW1lIiwidXNlckNvdW50cnkiLCJjb3VudHJ5IiwidXNlclVuaSIsInVuaSIsInVzZXJCaW8iLCJiaW8iLCJ1c2VySW1hZ2UiLCJmYXZvcml0ZXMiLCJkaWFyeUNvbW1lbnRzIiwiZGlhcnlfY29tbWVudHMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJweSIsImNvdW50IiwidG90YWxQYWdlcyIsImN1cnJlbnRQYWdlIiwib25DaGFuZ2UiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[name]/index.tsx\n"));

/***/ })

});