"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/following_diaries",{

/***/ "./src/components/HomeLayout.tsx":
/*!***************************************!*\
  !*** ./src/components/HomeLayout.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tabs */ \"./node_modules/@mui/material/Tabs/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _LinkTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkTab */ \"./src/components/LinkTab.tsx\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ProfileCard */ \"./src/components/ProfileCard.tsx\");\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/HomeLayout.tsx\",\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Layout(_ref, _ref2) {\n  _s();\n  var children = _ref.children;\n  var pageUrl = _ref2.pageUrl;\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  var page = 'page' in router.query ? Number(router.query.page) : 1;\n  var url = \"http://localhost:3000/api/v1\" + '/diaries/?page=' + page;\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_9__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 21\n  }, this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 21\n  }, this);\n  var diaries = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(data.diaries);\n  var meta = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(data.meta);\n  var totalDiariesCount = function totalDiariesCount(diaries) {\n    var count = 0;\n    for (var i = 0; i < diaries.length; i++) {\n      if (diaries[i] && diaries[i].status !== 'unsaved') count += 1;\n    }\n    return count;\n  };\n  var handleChange = function handleChange(event, value) {\n    return router.push('/?page=' + value);\n  };\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_8__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Container, {\n      maxWidth: \"xs\",\n      sx: {\n        pt: 6,\n        display: {\n          xs: 'none',\n          lg: 'block'\n        }\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_ProfileCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        id: user.id,\n        name: user.name,\n        country: user.country,\n        uni: user.uni,\n        bio: user.bio,\n        startDate: user.start_date,\n        endDate: user.end_date,\n        image: user.image.url,\n        diaries: user.diaries,\n        totalDiariesCount: totalDiariesCount(user.diaries),\n        totalLikesCount: user.total_likes_count,\n        following: user.following,\n        followers: user.followers\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 7\n    }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        py: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Card, {\n        sx: {\n          borderRadius: 2\n        },\n        children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.CardContent, {\n          children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n            sx: {\n              display: 'flex',\n              justifyContent: 'space-between'\n            },\n            value: pageUrl || false,\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"All\",\n              href: \"/\",\n              value: \"/\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 15\n            }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_LinkTab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              label: \"Following\",\n              href: \"/following_diaries\",\n              value: \"/following_diaries\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 141,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 13\n          }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Divider, {\n            sx: {\n              my: 2\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 147,\n            columnNumber: 13\n          }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_12__.Box, {\n            children: children\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 148,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, this);\n}\n_s(Layout, \"LnT+ipsCDd40yL0OhV6o9Av5n1k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_7__.useUserState, swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lTGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3NCO0FBQ2U7QUFDSztBQUdIO0FBQ2Y7QUFDTztBQUVPO0FBQ0k7QUFDUTtBQUNHO0FBQ3BCO0FBQ0E7QUFBQTtBQXlEbEIsU0FBU2tCLE1BQU1BLENBQUFDLElBQUEsRUFBQUMsS0FBQSxFQUc1QjtFQUFBQyxFQUFBO0VBQUEsSUFGRUMsUUFBUSxHQUFBSCxJQUFBLENBQVJHLFFBQVE7RUFBQSxJQUNSQyxPQUFPLEdBQUFILEtBQUEsQ0FBUEcsT0FBTztFQUVULElBQU1DLE1BQU0sR0FBR2pCLHNEQUFTLENBQUMsQ0FBQztFQUMxQixJQUFBa0IsYUFBQSxHQUFlWixtRUFBWSxDQUFDLENBQUM7SUFBQWEsY0FBQSxHQUFBQywySEFBQSxDQUFBRixhQUFBO0lBQXRCRyxJQUFJLEdBQUFGLGNBQUE7RUFDWCxJQUFNRyxJQUFJLEdBQUcsTUFBTSxJQUFJTCxNQUFNLENBQUNNLEtBQUssR0FBR0MsTUFBTSxDQUFDUCxNQUFNLENBQUNNLEtBQUssQ0FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQztFQUNuRSxJQUFNRyxHQUFHLEdBQUdDLDhCQUFvQyxHQUFHLGlCQUFpQixHQUFHSixJQUFJO0VBQzNFLElBQUFPLE9BQUEsR0FBd0I1QiwrQ0FBTSxDQUFDd0IsR0FBRyxFQUFFakIsMkNBQU8sQ0FBQztJQUFwQ3NCLElBQUksR0FBQUQsT0FBQSxDQUFKQyxJQUFJO0lBQUVDLEtBQUssR0FBQUYsT0FBQSxDQUFMRSxLQUFLO0VBQ25CLElBQUlBLEtBQUssRUFBRSxPQUFPckIsdUVBQUEsQ0FBQ1AseURBQUs7SUFBQTZCLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUFFLENBQUM7RUFDM0IsSUFBSSxDQUFDTCxJQUFJLEVBQUUsT0FBT3BCLHVFQUFBLENBQUNOLDJEQUFPO0lBQUE0QixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsT0FBRSxDQUFDO0VBRTdCLElBQU1DLE9BQU8sR0FBR3JDLDJEQUFhLENBQUMrQixJQUFJLENBQUNNLE9BQU8sQ0FBQztFQUUzQyxJQUFNQyxJQUFJLEdBQUd0QywyREFBYSxDQUFDK0IsSUFBSSxDQUFDTyxJQUFJLENBQUM7RUFFckMsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFpQkEsQ0FBSUYsT0FBZ0IsRUFBSztJQUM5QyxJQUFJRyxLQUFLLEdBQUcsQ0FBQztJQUNiLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSixPQUFPLENBQUNLLE1BQU0sRUFBRUQsQ0FBQyxFQUFFLEVBQUU7TUFDdkMsSUFBSUosT0FBTyxDQUFDSSxDQUFDLENBQUMsSUFBSUosT0FBTyxDQUFDSSxDQUFDLENBQUMsQ0FBQ0UsTUFBTSxLQUFLLFNBQVMsRUFBRUgsS0FBSyxJQUFJLENBQUM7SUFDL0Q7SUFDQSxPQUFPQSxLQUFLO0VBQ2QsQ0FBQztFQUVELElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxLQUFpQyxFQUFFQyxLQUFhO0lBQUEsT0FDcEU1QixNQUFNLENBQUM2QixJQUFJLENBQUMsU0FBUyxHQUFHRCxLQUFLLENBQUM7RUFBQTtFQUVoQyxPQUNFbkMsdUVBQUEsQ0FBQ2pCLCtDQUFHO0lBQ0ZzRCxHQUFHLEVBQUV4QywyQ0FBTSxDQUFDeUMsYUFBYztJQUMxQkMsRUFBRSxFQUFFO01BQUVDLGVBQWUsRUFBRSxTQUFTO01BQUVDLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQXBDLFFBQUEsR0FFcERMLHVFQUFBLENBQUNoQixxREFBUztNQUNSMEQsUUFBUSxFQUFDLElBQUk7TUFDYkgsRUFBRSxFQUFFO1FBQUVJLEVBQUUsRUFBRSxDQUFDO1FBQUVGLE9BQU8sRUFBRTtVQUFFRyxFQUFFLEVBQUUsTUFBTTtVQUFFQyxFQUFFLEVBQUU7UUFBUTtNQUFFLENBQUU7TUFBQXhDLFFBQUEsRUFFcERMLHVFQUFBLENBQUNMLCtEQUFXO1FBQ1ZtRCxFQUFFLEVBQUVuQyxJQUFJLENBQUNtQyxFQUFHO1FBQ1pDLElBQUksRUFBRXBDLElBQUksQ0FBQ29DLElBQUs7UUFDaEJDLE9BQU8sRUFBRXJDLElBQUksQ0FBQ3FDLE9BQVE7UUFDdEJDLEdBQUcsRUFBRXRDLElBQUksQ0FBQ3NDLEdBQUk7UUFDZEMsR0FBRyxFQUFFdkMsSUFBSSxDQUFDdUMsR0FBSTtRQUNkQyxTQUFTLEVBQUV4QyxJQUFJLENBQUN5QyxVQUFXO1FBQzNCQyxPQUFPLEVBQUUxQyxJQUFJLENBQUMyQyxRQUFTO1FBQ3ZCQyxLQUFLLEVBQUU1QyxJQUFJLENBQUM0QyxLQUFLLENBQUN4QyxHQUFJO1FBQ3RCVyxPQUFPLEVBQUVmLElBQUksQ0FBQ2UsT0FBUTtRQUN0QkUsaUJBQWlCLEVBQUVBLGlCQUFpQixDQUFDakIsSUFBSSxDQUFDZSxPQUFPLENBQUU7UUFDbkQ4QixlQUFlLEVBQUU3QyxJQUFJLENBQUM4QyxpQkFBa0I7UUFDeENDLFNBQVMsRUFBRS9DLElBQUksQ0FBQytDLFNBQVU7UUFDMUJDLFNBQVMsRUFBRWhELElBQUksQ0FBQ2dEO01BQVU7UUFBQXJDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUMzQjtJQUFDO01BQUFILFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxPQUNPLENBQUMsRUFDWnpCLHVFQUFBLENBQUNoQixxREFBUztNQUFDMEQsUUFBUSxFQUFDLElBQUk7TUFBQ0gsRUFBRSxFQUFFO1FBQUVxQixFQUFFLEVBQUU7TUFBRSxDQUFFO01BQUF2RCxRQUFBLEVBQ3JDTCx1RUFBQSxDQUFDZixnREFBSTtRQUFDc0QsRUFBRSxFQUFFO1VBQUVzQixZQUFZLEVBQUU7UUFBRSxDQUFFO1FBQUF4RCxRQUFBLEVBQzVCTCx1RUFBQSxDQUFDYix1REFBVztVQUFBa0IsUUFBQSxHQUNWTCx1RUFBQSxDQUFDWiwyREFBSTtZQUNIbUQsRUFBRSxFQUFFO2NBQUVFLE9BQU8sRUFBRSxNQUFNO2NBQUVxQixjQUFjLEVBQUU7WUFBZ0IsQ0FBRTtZQUN6RDNCLEtBQUssRUFBRTdCLE9BQU8sSUFBSSxLQUFNO1lBQUFELFFBQUEsR0FFeEJMLHVFQUFBLENBQUNSLGdEQUFPO2NBQUN1RSxLQUFLLEVBQUMsS0FBSztjQUFDQyxJQUFJLEVBQUMsR0FBRztjQUFDN0IsS0FBSyxFQUFDO1lBQUc7Y0FBQWIsUUFBQSxFQUFBQyxZQUFBO2NBQUFDLFVBQUE7Y0FBQUMsWUFBQTtZQUFBLE9BQUUsQ0FBQyxFQUMxQ3pCLHVFQUFBLENBQUNSLGdEQUFPO2NBQ051RSxLQUFLLEVBQUMsV0FBVztjQUNqQkMsSUFBSSxFQUFDLG9CQUFvQjtjQUN6QjdCLEtBQUssRUFBQztZQUFvQjtjQUFBYixRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsT0FDM0IsQ0FBQztVQUFBO1lBQUFILFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUNFLENBQUMsRUFDUHpCLHVFQUFBLENBQUNkLG1EQUFPO1lBQUNxRCxFQUFFLEVBQUU7Y0FBRTBCLEVBQUUsRUFBRTtZQUFFO1VBQUU7WUFBQTNDLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxPQUFFLENBQUMsRUFDMUJ6Qix1RUFBQSxDQUFDakIsK0NBQUc7WUFBQXNCLFFBQUEsRUFBRUE7VUFBUTtZQUFBaUIsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLE9BQU0sQ0FBQztRQUFBO1VBQUFILFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxPQUNWO01BQUM7UUFBQUgsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLE9BQ1Y7SUFBQztNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDRSxDQUFDO0VBQUE7SUFBQUgsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLE9BQ1QsQ0FBQztBQUVWO0FBQUNyQixFQUFBLENBekV1QkgsTUFBTTtFQUFBLFFBSWJYLGtEQUFTLEVBQ1RNLCtEQUFZLEVBR0hMLDJDQUFNO0FBQUE7QUFBQTJFLEVBQUEsR0FSUmpFLE1BQU07QUFBQSxJQUFBaUUsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZUxheW91dC50c3g/NjU1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEdyaWQsXG4gIENvbnRhaW5lcixcbiAgUGFnaW5hdGlvbixcbiAgQ2FyZCxcbiAgRGl2aWRlcixcbiAgQ2FyZENvbnRlbnQsXG4gIFR5cG9ncmFwaHksXG59IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnXG5pbXBvcnQgY2FtZWxjYXNlS2V5cyBmcm9tICdjYW1lbGNhc2Uta2V5cydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBMaW5rVGFiIGZyb20gJy4vTGlua1RhYidcbmltcG9ydCBEaWFyeUNhcmQgZnJvbSAnQC9jb21wb25lbnRzL0RpYXJ5Q2FyZCdcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvUHJvZmlsZUNhcmQnXG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJ1xuaW1wb3J0IHsgc3R5bGVzIH0gZnJvbSAnQC9zdHlsZXMnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxudHlwZSBEaWFyeVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlOiB7XG4gICAgdXJsOiBzdHJpbmdcbiAgfVxuICB3b3JkQ291bnQ6IG51bWJlclxuICBkYXk6IHN0cmluZ1xuICBtb250aE5hbWU6IHN0cmluZ1xuICBtb250aDogc3RyaW5nXG4gIHllYXI6IHN0cmluZ1xuICB3RGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHtcbiAgICAgIHVybDogc3RyaW5nXG4gICAgfVxuICB9XG4gIGRpYXJpZXM6IERpYXJ5W11cbiAgZmF2b3JpdGVzOiB7IHVzZXJfaWQ6IG51bWJlciB9W11cbiAgZGlhcnlDb21tZW50czogb2JqZWN0W11cbn1cblxudHlwZSBEaWFyeSA9IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZTogeyB1cmw6IHN0cmluZyB9XG4gIHdvcmRDb3VudDogbnVtYmVyXG4gIGRheTogbnVtYmVyXG4gIG1vbnRoTmFtZTogc3RyaW5nXG4gIHllYXI6IG51bWJlclxuICB3RGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIGlkOiBzdHJpbmdcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBjb3VudHJ5OiBzdHJpbmdcbiAgICB1bmk6IHN0cmluZ1xuICAgIGJpbzogc3RyaW5nXG4gICAgaW1hZ2U6IHsgdXJsOiBzdHJpbmcgfVxuICB9XG4gIHN0YXR1czogc3RyaW5nXG4gIGZhdm9yaXRlczogbnVtYmVyXG4gIGRpYXJ5Q29tbWVudHM6IG51bWJlclxufVxuXG50eXBlIFByb3BzID0ge1xuICBwYWdlVXJsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChcbiAgeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfSxcbiAgeyBwYWdlVXJsIH06IFByb3BzLFxuKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFt1c2VyXSA9IHVzZVVzZXJTdGF0ZSgpXG4gIGNvbnN0IHBhZ2UgPSAncGFnZScgaW4gcm91dGVyLnF1ZXJ5ID8gTnVtYmVyKHJvdXRlci5xdWVyeS5wYWdlKSA6IDFcbiAgY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMICsgJy9kaWFyaWVzLz9wYWdlPScgKyBwYWdlXG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUih1cmwsIGZldGNoZXIpXG4gIGlmIChlcnJvcikgcmV0dXJuIDxFcnJvciAvPlxuICBpZiAoIWRhdGEpIHJldHVybiA8TG9hZGluZyAvPlxuXG4gIGNvbnN0IGRpYXJpZXMgPSBjYW1lbGNhc2VLZXlzKGRhdGEuZGlhcmllcylcblxuICBjb25zdCBtZXRhID0gY2FtZWxjYXNlS2V5cyhkYXRhLm1ldGEpXG5cbiAgY29uc3QgdG90YWxEaWFyaWVzQ291bnQgPSAoZGlhcmllczogRGlhcnlbXSkgPT4ge1xuICAgIGxldCBjb3VudCA9IDBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpYXJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkaWFyaWVzW2ldICYmIGRpYXJpZXNbaV0uc3RhdHVzICE9PSAndW5zYXZlZCcpIGNvdW50ICs9IDFcbiAgICB9XG4gICAgcmV0dXJuIGNvdW50XG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PHVua25vd24+LCB2YWx1ZTogbnVtYmVyKSA9PlxuICAgIHJvdXRlci5wdXNoKCcvP3BhZ2U9JyArIHZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY3NzPXtzdHlsZXMucGFnZU1pbkhlaWdodH1cbiAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmZmUwYjYnLCBkaXNwbGF5OiAnZmxleCcgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIG1heFdpZHRoPVwieHNcIlxuICAgICAgICBzeD17eyBwdDogNiwgZGlzcGxheTogeyB4czogJ25vbmUnLCBsZzogJ2Jsb2NrJyB9IH19XG4gICAgICA+XG4gICAgICAgIDxQcm9maWxlQ2FyZFxuICAgICAgICAgIGlkPXt1c2VyLmlkfVxuICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICBjb3VudHJ5PXt1c2VyLmNvdW50cnl9XG4gICAgICAgICAgdW5pPXt1c2VyLnVuaX1cbiAgICAgICAgICBiaW89e3VzZXIuYmlvfVxuICAgICAgICAgIHN0YXJ0RGF0ZT17dXNlci5zdGFydF9kYXRlfVxuICAgICAgICAgIGVuZERhdGU9e3VzZXIuZW5kX2RhdGV9XG4gICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2UudXJsfVxuICAgICAgICAgIGRpYXJpZXM9e3VzZXIuZGlhcmllc31cbiAgICAgICAgICB0b3RhbERpYXJpZXNDb3VudD17dG90YWxEaWFyaWVzQ291bnQodXNlci5kaWFyaWVzKX1cbiAgICAgICAgICB0b3RhbExpa2VzQ291bnQ9e3VzZXIudG90YWxfbGlrZXNfY291bnR9XG4gICAgICAgICAgZm9sbG93aW5nPXt1c2VyLmZvbGxvd2luZ31cbiAgICAgICAgICBmb2xsb3dlcnM9e3VzZXIuZm9sbG93ZXJzfVxuICAgICAgICAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwic21cIiBzeD17eyBweTogNiB9fT5cbiAgICAgICAgPENhcmQgc3g9e3sgYm9yZGVyUmFkaXVzOiAyIH19PlxuICAgICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgIHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fVxuICAgICAgICAgICAgICB2YWx1ZT17cGFnZVVybCB8fCBmYWxzZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmtUYWIgbGFiZWw9XCJBbGxcIiBocmVmPVwiL1wiIHZhbHVlPVwiL1wiIC8+XG4gICAgICAgICAgICAgIDxMaW5rVGFiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJGb2xsb3dpbmdcIlxuICAgICAgICAgICAgICAgIGhyZWY9XCIvZm9sbG93aW5nX2RpYXJpZXNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiL2ZvbGxvd2luZ19kaWFyaWVzXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDxEaXZpZGVyIHN4PXt7IG15OiAyIH19IC8+XG4gICAgICAgICAgICA8Qm94PntjaGlsZHJlbn08L0JveD5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICA8L0NhcmQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkJveCIsIkNvbnRhaW5lciIsIkNhcmQiLCJEaXZpZGVyIiwiQ2FyZENvbnRlbnQiLCJUYWJzIiwiY2FtZWxjYXNlS2V5cyIsInVzZVJvdXRlciIsInVzZVNXUiIsIkxpbmtUYWIiLCJFcnJvciIsIkxvYWRpbmciLCJQcm9maWxlQ2FyZCIsInVzZVVzZXJTdGF0ZSIsInN0eWxlcyIsImZldGNoZXIiLCJqc3hERVYiLCJfanN4REVWIiwiTGF5b3V0IiwiX3JlZiIsIl9yZWYyIiwiX3MiLCJjaGlsZHJlbiIsInBhZ2VVcmwiLCJyb3V0ZXIiLCJfdXNlVXNlclN0YXRlIiwiX3VzZVVzZXJTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXIiLCJwYWdlIiwicXVlcnkiLCJOdW1iZXIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImRpYXJpZXMiLCJtZXRhIiwidG90YWxEaWFyaWVzQ291bnQiLCJjb3VudCIsImkiLCJsZW5ndGgiLCJzdGF0dXMiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwicHVzaCIsImNzcyIsInBhZ2VNaW5IZWlnaHQiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJtYXhXaWR0aCIsInB0IiwieHMiLCJsZyIsImlkIiwibmFtZSIsImNvdW50cnkiLCJ1bmkiLCJiaW8iLCJzdGFydERhdGUiLCJzdGFydF9kYXRlIiwiZW5kRGF0ZSIsImVuZF9kYXRlIiwiaW1hZ2UiLCJ0b3RhbExpa2VzQ291bnQiLCJ0b3RhbF9saWtlc19jb3VudCIsImZvbGxvd2luZyIsImZvbGxvd2VycyIsInB5IiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeUNvbnRlbnQiLCJsYWJlbCIsImhyZWYiLCJteSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HomeLayout.tsx\n"));

/***/ })

});