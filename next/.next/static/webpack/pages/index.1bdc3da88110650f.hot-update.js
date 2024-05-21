"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/HomeLayout.tsx":
/*!***************************************!*\
  !*** ./src/components/HomeLayout.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _LinkTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkTab */ \"./src/components/LinkTab.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/HomeLayout.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Layout = function Layout(_ref) {\n  _s();\n  var children = _ref.children,\n    pageUrl = _ref.pageUrl;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_9__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 88,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 21\n  }, _this);\n  var totalDiariesCount = function totalDiariesCount(diaries) {\n    var count = 0;\n    for (var i = 0; i < diaries.length; i++) {\n      if (diaries[i] && diaries[i].status !== 'unsaved') count += 1;\n    }\n    return count;\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"xs\",\n      sx: {\n        pt: 6,\n        display: {\n          xs: 'none',\n          lg: 'block'\n        }\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: user.id,\n        name: user.name,\n        country: user.country,\n        uni: user.uni,\n        bio: user.bio,\n        startDate: user.start_date,\n        endDate: user.end_date,\n        image: user.image.url,\n        diaries: user.diaries,\n        totalDiariesCount: totalDiariesCount(user.diaries),\n        totalLikesCount: user.total_likes_count,\n        following: user.following,\n        followers: user.followers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Card, {\n        sx: {\n          borderRadius: 2\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.CardContent, {\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n            value: pageUrl || false,\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"All\",\n              href: \"/\",\n              value: \"/\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 15\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"Following\",\n              href: \"/following_diaries\",\n              value: \"/following_diaries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Divider, {\n            sx: {\n              mb: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 13\n          }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n            children: children\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 100,\n    columnNumber: 5\n  }, _this);\n};\n_s(Layout, \"LnT+ipsCDd40yL0OhV6o9Av5n1k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3NCO0FBQ2U7QUFJRTtBQUNmO0FBQ087QUFFTztBQUNJO0FBQ1E7QUFDRztBQUNwQjtBQUNBO0FBQUE7QUEwRGpDLElBQU1pQixNQUF1QixHQUFHLFNBQTFCQSxNQUF1QkEsQ0FBQUMsSUFBQSxFQUFxQztFQUFBQyxFQUFBO0VBQUEsSUFBL0JDLFFBQVEsR0FBQUYsSUFBQSxDQUFSRSxRQUFRO0lBQUVDLE9BQU8sR0FBQUgsSUFBQSxDQUFQRyxPQUFPO0VBQ2xELElBQU1DLE1BQU0sR0FBR2hCLHNEQUFTLENBQUMsQ0FBQztFQUMxQixJQUFBaUIsYUFBQSxHQUFlWCxtRUFBWSxDQUFDLENBQUM7SUFBQVksY0FBQSxHQUFBQywySEFBQSxDQUFBRixhQUFBO0lBQXRCRyxJQUFJLEdBQUFGLGNBQUE7RUFDWCxJQUFNRyxJQUFJLEdBQUcsTUFBTSxJQUFJTCxNQUFNLENBQUNNLEtBQUssR0FBR0MsTUFBTSxDQUFDUCxNQUFNLENBQUNNLEtBQUssQ0FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNuRSxJQUFNRyxHQUFHLEdBQUdDLDhCQUFvQyxHQUFHLGlCQUFpQixHQUFHSixJQUFJO0VBQzNFLElBQUFPLE9BQUEsR0FBd0IzQiwrQ0FBTSxDQUFDdUIsR0FBRyxFQUFFaEIsMkNBQU8sQ0FBQztJQUFwQ3FCLElBQUksR0FBQUQsT0FBQSxDQUFKQyxJQUFJO0lBQUVDLEtBQUssR0FBQUYsT0FBQSxDQUFMRSxLQUFLO0VBQ25CLElBQUlBLEtBQUssRUFBRSxPQUFPcEIsdUVBQUEsQ0FBQ1AseURBQUs7SUFBQTRCLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUFFLENBQUM7RUFDM0IsSUFBSSxDQUFDTixJQUFJLEVBQUUsT0FBT25CLHVFQUFBLENBQUNOLDJEQUFPO0lBQUEyQixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FBRSxDQUFDO0VBRTdCLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUlDLE9BQWdCLEVBQUs7SUFDOUMsSUFBSUMsS0FBSyxHQUFHLENBQUM7SUFDYixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsT0FBTyxDQUFDRyxNQUFNLEVBQUVELENBQUMsRUFBRSxFQUFFO01BQ3ZDLElBQUlGLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLElBQUlGLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLE1BQU0sS0FBSyxTQUFTLEVBQUVILEtBQUssSUFBSSxDQUFDO0lBQy9EO0lBQ0EsT0FBT0EsS0FBSztFQUNkLENBQUM7RUFFRCxPQUNFNUIsdUVBQUEsQ0FBQ2hCLCtDQUFHO0lBQ0ZnRCxHQUFHLEVBQUVuQywyQ0FBTSxDQUFDb0MsYUFBYztJQUMxQkMsRUFBRSxFQUFFO01BQUVDLGVBQWUsRUFBRSxTQUFTO01BQUVDLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQWhDLFFBQUEsR0FFcERKLHVFQUFBLENBQUNmLHFEQUFTO01BQ1JvRCxRQUFRLEVBQUMsSUFBSTtNQUNiSCxFQUFFLEVBQUU7UUFBRUksRUFBRSxFQUFFLENBQUM7UUFBRUYsT0FBTyxFQUFFO1VBQUVHLEVBQUUsRUFBRSxNQUFNO1VBQUVDLEVBQUUsRUFBRTtRQUFRO01BQUUsQ0FBRTtNQUFBcEMsUUFBQSxFQUVwREosdUVBQUEsQ0FBQ0wsK0RBQVc7UUFDVjhDLEVBQUUsRUFBRS9CLElBQUksQ0FBQytCLEVBQUc7UUFDWkMsSUFBSSxFQUFFaEMsSUFBSSxDQUFDZ0MsSUFBSztRQUNoQkMsT0FBTyxFQUFFakMsSUFBSSxDQUFDaUMsT0FBUTtRQUN0QkMsR0FBRyxFQUFFbEMsSUFBSSxDQUFDa0MsR0FBSTtRQUNkQyxHQUFHLEVBQUVuQyxJQUFJLENBQUNtQyxHQUFJO1FBQ2RDLFNBQVMsRUFBRXBDLElBQUksQ0FBQ3FDLFVBQVc7UUFDM0JDLE9BQU8sRUFBRXRDLElBQUksQ0FBQ3VDLFFBQVM7UUFDdkJDLEtBQUssRUFBRXhDLElBQUksQ0FBQ3dDLEtBQUssQ0FBQ3BDLEdBQUk7UUFDdEJhLE9BQU8sRUFBRWpCLElBQUksQ0FBQ2lCLE9BQVE7UUFDdEJELGlCQUFpQixFQUFFQSxpQkFBaUIsQ0FBQ2hCLElBQUksQ0FBQ2lCLE9BQU8sQ0FBRTtRQUNuRHdCLGVBQWUsRUFBRXpDLElBQUksQ0FBQzBDLGlCQUFrQjtRQUN4Q0MsU0FBUyxFQUFFM0MsSUFBSSxDQUFDMkMsU0FBVTtRQUMxQkMsU0FBUyxFQUFFNUMsSUFBSSxDQUFDNEM7TUFBVTtRQUFBakMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQzNCO0lBQUM7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ08sQ0FBQyxFQUNaekIsdUVBQUEsQ0FBQ2YscURBQVM7TUFBQ29ELFFBQVEsRUFBQyxJQUFJO01BQUNILEVBQUUsRUFBRTtRQUFFcUIsRUFBRSxFQUFFO01BQUUsQ0FBRTtNQUFBbkQsUUFBQSxFQUNyQ0osdUVBQUEsQ0FBQ2QsZ0RBQUk7UUFBQ2dELEVBQUUsRUFBRTtVQUFFc0IsWUFBWSxFQUFFO1FBQUUsQ0FBRTtRQUFBcEQsUUFBQSxFQUM1QkosdUVBQUEsQ0FBQ1osdURBQVc7VUFBQWdCLFFBQUEsR0FDVkosdUVBQUEsQ0FBQ1gsMkRBQUk7WUFBQ29FLEtBQUssRUFBRXBELE9BQU8sSUFBSSxLQUFNO1lBQUFELFFBQUEsR0FDNUJKLHVFQUFBLENBQUNSLGdEQUFPO2NBQUNrRSxLQUFLLEVBQUMsS0FBSztjQUFDQyxJQUFJLEVBQUMsR0FBRztjQUFDRixLQUFLLEVBQUM7WUFBRztjQUFBcEMsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLEdBQUFDLEtBQUUsQ0FBQyxFQUMxQ3pCLHVFQUFBLENBQUNSLGdEQUFPO2NBQ05rRSxLQUFLLEVBQUMsV0FBVztjQUNqQkMsSUFBSSxFQUFDLG9CQUFvQjtjQUN6QkYsS0FBSyxFQUFDO1lBQW9CO2NBQUFwQyxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsR0FBQUMsS0FDM0IsQ0FBQztVQUFBO1lBQUFKLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUNFLENBQUMsRUFDUHpCLHVFQUFBLENBQUNiLG1EQUFPO1lBQUMrQyxFQUFFLEVBQUU7Y0FBRTBCLEVBQUUsRUFBRTtZQUFFO1VBQUU7WUFBQXZDLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUFFLENBQUMsRUFDMUJ6Qix1RUFBQSxDQUFDaEIsK0NBQUc7WUFBQW9CLFFBQUEsRUFBRUE7VUFBUTtZQUFBaUIsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLEdBQUFDLEtBQU0sQ0FBQztRQUFBO1VBQUFKLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxHQUFBQyxLQUNWO01BQUM7UUFBQUosUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQ1Y7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDRSxDQUFDO0VBQUE7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ1QsQ0FBQztBQUVWLENBQUM7QUFBQXRCLEVBQUEsQ0E1REtGLE1BQXVCO0VBQUEsUUFDWlgsa0RBQVMsRUFDVE0sK0RBQVksRUFHSEwsMkNBQU07QUFBQTtBQUFBc0UsRUFBQSxHQUwxQjVELE1BQXVCO0FBOEQ3QiwrREFBZUEsTUFBTTtBQUFBLElBQUE0RCxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lTGF5b3V0LnRzeD82NTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgR3JpZCxcbiAgQ29udGFpbmVyLFxuICBQYWdpbmF0aW9uLFxuICBDYXJkLFxuICBEaXZpZGVyLFxuICBDYXJkQ29udGVudCxcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBUYWJzIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFicydcbmltcG9ydCBjYW1lbGNhc2VLZXlzIGZyb20gJ2NhbWVsY2FzZS1rZXlzJ1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuaW1wb3J0IExpbmtUYWIgZnJvbSAnLi9MaW5rVGFiJ1xuaW1wb3J0IERpYXJ5Q2FyZCBmcm9tICdAL2NvbXBvbmVudHMvRGlhcnlDYXJkJ1xuaW1wb3J0IEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9FcnJvcidcbmltcG9ydCBMb2FkaW5nIGZyb20gJ0AvY29tcG9uZW50cy9Mb2FkaW5nJ1xuaW1wb3J0IFByb2ZpbGVDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Qcm9maWxlQ2FyZCdcbmltcG9ydCB7IHVzZVVzZXJTdGF0ZSB9IGZyb20gJ0AvaG9va3MvdXNlR2xvYmFsU3RhdGUnXG5pbXBvcnQgeyBzdHlsZXMgfSBmcm9tICdAL3N0eWxlcydcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICdAL3V0aWxzJ1xuXG50eXBlIERpYXJ5UHJvcHMgPSB7XG4gIGlkOiBudW1iZXJcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW1hZ2U6IHtcbiAgICB1cmw6IHN0cmluZ1xuICB9XG4gIHdvcmRDb3VudDogbnVtYmVyXG4gIGRheTogc3RyaW5nXG4gIG1vbnRoTmFtZTogc3RyaW5nXG4gIG1vbnRoOiBzdHJpbmdcbiAgeWVhcjogc3RyaW5nXG4gIHdEYXk6IHN0cmluZ1xuICB1c2VyOiB7XG4gICAgaWQ6IG51bWJlclxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvdW50cnk6IHN0cmluZ1xuICAgIHVuaTogc3RyaW5nXG4gICAgYmlvOiBzdHJpbmdcbiAgICBpbWFnZToge1xuICAgICAgdXJsOiBzdHJpbmdcbiAgICB9XG4gIH1cbiAgZGlhcmllczogRGlhcnlbXVxuICBmYXZvcml0ZXM6IHsgdXNlcl9pZDogbnVtYmVyIH1bXVxuICBkaWFyeUNvbW1lbnRzOiBvYmplY3RbXVxufVxuXG50eXBlIERpYXJ5ID0ge1xuICBpZDogc3RyaW5nXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiB7IHVybDogc3RyaW5nIH1cbiAgd29yZENvdW50OiBudW1iZXJcbiAgZGF5OiBudW1iZXJcbiAgbW9udGhOYW1lOiBzdHJpbmdcbiAgeWVhcjogbnVtYmVyXG4gIHdEYXk6IHN0cmluZ1xuICB1c2VyOiB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvdW50cnk6IHN0cmluZ1xuICAgIHVuaTogc3RyaW5nXG4gICAgYmlvOiBzdHJpbmdcbiAgICBpbWFnZTogeyB1cmw6IHN0cmluZyB9XG4gIH1cbiAgc3RhdHVzOiBzdHJpbmdcbiAgZmF2b3JpdGVzOiBudW1iZXJcbiAgZGlhcnlDb21tZW50czogbnVtYmVyXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgcGFnZVVybDogc3RyaW5nXG59XG5cbmNvbnN0IExheW91dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgY2hpbGRyZW4sIHBhZ2VVcmwgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW3VzZXJdID0gdXNlVXNlclN0YXRlKClcbiAgY29uc3QgcGFnZSA9ICdwYWdlJyBpbiByb3V0ZXIucXVlcnkgPyBOdW1iZXIocm91dGVyLnF1ZXJ5LnBhZ2UpIDogMVxuICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgKyAnL2RpYXJpZXMvP3BhZ2U9JyArIHBhZ2VcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yIC8+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxMb2FkaW5nIC8+XG5cbiAgY29uc3QgdG90YWxEaWFyaWVzQ291bnQgPSAoZGlhcmllczogRGlhcnlbXSkgPT4ge1xuICAgIGxldCBjb3VudCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpYXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaWFyaWVzW2ldICYmIGRpYXJpZXNbaV0uc3RhdHVzICE9PSAndW5zYXZlZCcpIGNvdW50ICs9IDFcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNzcz17c3R5bGVzLnBhZ2VNaW5IZWlnaHR9XG4gICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZlMGI2JywgZGlzcGxheTogJ2ZsZXgnIH19XG4gICAgPlxuICAgICAgPENvbnRhaW5lclxuICAgICAgICBtYXhXaWR0aD1cInhzXCJcbiAgICAgICAgc3g9e3sgcHQ6IDYsIGRpc3BsYXk6IHsgeHM6ICdub25lJywgbGc6ICdibG9jaycgfSB9fVxuICAgICAgPlxuICAgICAgICA8UHJvZmlsZUNhcmRcbiAgICAgICAgICBpZD17dXNlci5pZH1cbiAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgY291bnRyeT17dXNlci5jb3VudHJ5fVxuICAgICAgICAgIHVuaT17dXNlci51bml9XG4gICAgICAgICAgYmlvPXt1c2VyLmJpb31cbiAgICAgICAgICBzdGFydERhdGU9e3VzZXIuc3RhcnRfZGF0ZX1cbiAgICAgICAgICBlbmREYXRlPXt1c2VyLmVuZF9kYXRlfVxuICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlLnVybH1cbiAgICAgICAgICBkaWFyaWVzPXt1c2VyLmRpYXJpZXN9XG4gICAgICAgICAgdG90YWxEaWFyaWVzQ291bnQ9e3RvdGFsRGlhcmllc0NvdW50KHVzZXIuZGlhcmllcyl9XG4gICAgICAgICAgdG90YWxMaWtlc0NvdW50PXt1c2VyLnRvdGFsX2xpa2VzX2NvdW50fVxuICAgICAgICAgIGZvbGxvd2luZz17dXNlci5mb2xsb3dpbmd9XG4gICAgICAgICAgZm9sbG93ZXJzPXt1c2VyLmZvbGxvd2Vyc31cbiAgICAgICAgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInNtXCIgc3g9e3sgcHk6IDYgfX0+XG4gICAgICAgIDxDYXJkIHN4PXt7IGJvcmRlclJhZGl1czogMiB9fT5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8VGFicyB2YWx1ZT17cGFnZVVybCB8fCBmYWxzZX0+XG4gICAgICAgICAgICAgIDxMaW5rVGFiIGxhYmVsPVwiQWxsXCIgaHJlZj1cIi9cIiB2YWx1ZT1cIi9cIiAvPlxuICAgICAgICAgICAgICA8TGlua1RhYlxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRm9sbG93aW5nXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiL2ZvbGxvd2luZ19kaWFyaWVzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIi9mb2xsb3dpbmdfZGlhcmllc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8RGl2aWRlciBzeD17eyBtYjogMiB9fSAvPlxuICAgICAgICAgICAgPEJveD57Y2hpbGRyZW59PC9Cb3g+XG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXSwibmFtZXMiOlsiQm94IiwiQ29udGFpbmVyIiwiQ2FyZCIsIkRpdmlkZXIiLCJDYXJkQ29udGVudCIsIlRhYnMiLCJ1c2VSb3V0ZXIiLCJ1c2VTV1IiLCJMaW5rVGFiIiwiRXJyb3IiLCJMb2FkaW5nIiwiUHJvZmlsZUNhcmQiLCJ1c2VVc2VyU3RhdGUiLCJzdHlsZXMiLCJmZXRjaGVyIiwianN4REVWIiwiX2pzeERFViIsIkxheW91dCIsIl9yZWYiLCJfcyIsImNoaWxkcmVuIiwicGFnZVVybCIsInJvdXRlciIsIl91c2VVc2VyU3RhdGUiLCJfdXNlVXNlclN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidXNlciIsInBhZ2UiLCJxdWVyeSIsIk51bWJlciIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJfdXNlU1dSIiwiZGF0YSIsImVycm9yIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJ0b3RhbERpYXJpZXNDb3VudCIsImRpYXJpZXMiLCJjb3VudCIsImkiLCJsZW5ndGgiLCJzdGF0dXMiLCJjc3MiLCJwYWdlTWluSGVpZ2h0Iiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJwdCIsInhzIiwibGciLCJpZCIsIm5hbWUiLCJjb3VudHJ5IiwidW5pIiwiYmlvIiwic3RhcnREYXRlIiwic3RhcnRfZGF0ZSIsImVuZERhdGUiLCJlbmRfZGF0ZSIsImltYWdlIiwidG90YWxMaWtlc0NvdW50IiwidG90YWxfbGlrZXNfY291bnQiLCJmb2xsb3dpbmciLCJmb2xsb3dlcnMiLCJweSIsImJvcmRlclJhZGl1cyIsInZhbHVlIiwibGFiZWwiLCJocmVmIiwibWIiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HomeLayout.tsx\n"));

/***/ })

});