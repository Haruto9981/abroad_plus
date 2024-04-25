/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/CurrentUserFetch.tsx":
/*!*********************************************!*\
  !*** ./src/components/CurrentUserFetch.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\nconst CurrentUserFetch = () => {\n  const [user, setUser] = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_2__.useUserState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (user.isFetched) {\n      return;\n    }\n    if (localStorage.getItem('access-token')) {\n      const url = \"http://localhost:3000/api/v1\" + '/current/user';\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url, {\n        headers: {\n          'Content-Type': 'application/json',\n          'access-token': localStorage.getItem('access-token'),\n          client: localStorage.getItem('client'),\n          uid: localStorage.getItem('uid')\n        }\n      }).then(res => {\n        setUser(_objectSpread(_objectSpread(_objectSpread({}, user), res.data), {}, {\n          isSignedIn: true,\n          isFetched: true\n        }));\n      }).catch(err => {\n        console.log(err.message);\n        setUser(_objectSpread(_objectSpread({}, user), {}, {\n          isFetched: true\n        }));\n      });\n    } else {\n      setUser(_objectSpread(_objectSpread({}, user), {}, {\n        isFetched: true\n      }));\n    }\n  }, [user, setUser]);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentUserFetch);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlckZldGNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUN2QjtBQUNvQjtBQUFBO0FBQUE7QUFFckQsTUFBTU8sZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTtFQUM3QixNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdQLG1FQUFZLENBQUMsQ0FBQztFQUV0Q0QsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSU8sSUFBSSxDQUFDRSxTQUFTLEVBQUU7TUFDbEI7SUFDRjtJQUVBLElBQUlDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQ3hDLE1BQU1DLEdBQUcsR0FBR0MsOEJBQW9DLEdBQUcsZUFBZTtNQUNsRWQsaURBQ00sQ0FBQ2EsR0FBRyxFQUFFO1FBQ1JLLE9BQU8sRUFBRTtVQUNQLGNBQWMsRUFBRSxrQkFBa0I7VUFDbEMsY0FBYyxFQUFFUCxZQUFZLENBQUNDLE9BQU8sQ0FBQyxjQUFjLENBQUM7VUFDcERPLE1BQU0sRUFBRVIsWUFBWSxDQUFDQyxPQUFPLENBQUMsUUFBUSxDQUFDO1VBQ3RDUSxHQUFHLEVBQUVULFlBQVksQ0FBQ0MsT0FBTyxDQUFDLEtBQUs7UUFDakM7TUFDRixDQUFDLENBQUMsQ0FDRFMsSUFBSSxDQUFFQyxHQUFrQixJQUFLO1FBQzVCYixPQUFPLENBQUFjLGFBQUEsQ0FBQUEsYUFBQSxDQUFBQSxhQUFBLEtBQ0ZmLElBQUksR0FDSmMsR0FBRyxDQUFDRSxJQUFJO1VBQ1hDLFVBQVUsRUFBRSxJQUFJO1VBQ2hCZixTQUFTLEVBQUU7UUFBSSxFQUNoQixDQUFDO01BQ0osQ0FBQyxDQUFDLENBQ0RnQixLQUFLLENBQUVDLEdBQWtDLElBQUs7UUFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUNHLE9BQU8sQ0FBQztRQUN4QnJCLE9BQU8sQ0FBQWMsYUFBQSxDQUFBQSxhQUFBLEtBQ0ZmLElBQUk7VUFDUEUsU0FBUyxFQUFFO1FBQUksRUFDaEIsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNOLENBQUMsTUFBTTtNQUNMRCxPQUFPLENBQUFjLGFBQUEsQ0FBQUEsYUFBQSxLQUNGZixJQUFJO1FBQ1BFLFNBQVMsRUFBRTtNQUFJLEVBQ2hCLENBQUM7SUFDSjtFQUNGLENBQUMsRUFBRSxDQUFDRixJQUFJLEVBQUVDLE9BQU8sQ0FBQyxDQUFDO0VBRW5CLE9BQU9ILHNFQUFBLENBQUFGLG9FQUFBLG1CQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsaUVBQWVHLGdCQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXJGZXRjaC50c3g/MTM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSwgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VVc2VyU3RhdGUgfSBmcm9tICdAL2hvb2tzL3VzZUdsb2JhbFN0YXRlJ1xuXG5jb25zdCBDdXJyZW50VXNlckZldGNoID0gKCkgPT4ge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VVc2VyU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXIuaXNGZXRjaGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzcy10b2tlbicpKSB7XG4gICAgICBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwgKyAnL2N1cnJlbnQvdXNlcidcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQodXJsLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzLXRva2VuJyksXG4gICAgICAgICAgICBjbGllbnQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjbGllbnQnKSxcbiAgICAgICAgICAgIHVpZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VpZCcpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXM6IEF4aW9zUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIC4uLnVzZXIsXG4gICAgICAgICAgICAuLi5yZXMuZGF0YSxcbiAgICAgICAgICAgIGlzU2lnbmVkSW46IHRydWUsXG4gICAgICAgICAgICBpc0ZldGNoZWQ6IHRydWUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnI6IEF4aW9zRXJyb3I8eyBlcnJvcjogc3RyaW5nIH0+KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgICAgaXNGZXRjaGVkOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFVzZXIoe1xuICAgICAgICAuLi51c2VyLFxuICAgICAgICBpc0ZldGNoZWQ6IHRydWUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3VzZXIsIHNldFVzZXJdKVxuXG4gIHJldHVybiA8PjwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50VXNlckZldGNoXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VFZmZlY3QiLCJ1c2VVc2VyU3RhdGUiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsImpzeERFViIsIl9qc3hERVYiLCJDdXJyZW50VXNlckZldGNoIiwidXNlciIsInNldFVzZXIiLCJpc0ZldGNoZWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsImdldCIsImhlYWRlcnMiLCJjbGllbnQiLCJ1aWQiLCJ0aGVuIiwicmVzIiwiX29iamVjdFNwcmVhZCIsImRhdGEiLCJpc1NpZ25lZEluIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CurrentUserFetch.tsx\n");

/***/ }),

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__]);\n([_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/app/src/components/Header.tsx\";\n\n\n\n\n\n\nconst Header = () => {\n  const [user] = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__.useUserState)();\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.AppBar, {\n    position: \"sticky\",\n    sx: {\n      backgroundColor: 'white',\n      color: 'black',\n      boxShadow: 'none'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Container, {\n      maxWidth: \"lg\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n              src: \"/logo.png\",\n              width: 85,\n              height: 85,\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 15\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, undefined), user.isFetched && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n          children: [!user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"/sign_in\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {\n                color: \"warning\",\n                variant: \"contained\",\n                sx: {\n                  color: 'white',\n                  textTransform: 'none',\n                  fontSize: 16,\n                  borderRadius: 2,\n                  boxShadow: 'none'\n                },\n                children: \"Sign in\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 21\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 19\n            }, undefined), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Button, {\n              color: \"warning\",\n              variant: \"outlined\",\n              sx: {\n                textTransform: 'none',\n                fontSize: 16,\n                borderRadius: 2,\n                boxShadow: 'none',\n                border: '1.5px solid #f5a500',\n                ml: 2\n              },\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 19\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 17\n          }, undefined), user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Box, {\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 35\n          }, undefined)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDaEM7QUFDRjtBQUN5QjtBQUFBO0FBQUE7QUFFckQsTUFBTVcsTUFBTSxHQUFHQSxDQUFBLEtBQU07RUFDbkIsTUFBTSxDQUFDQyxJQUFJLENBQUMsR0FBR04sbUVBQVksQ0FBQyxDQUFDO0VBRTdCLE9BQ0VFLHNFQUFBLENBQUNSLGlEQUFNO0lBQ0xhLFFBQVEsRUFBQyxRQUFRO0lBQ2pCQyxFQUFFLEVBQUU7TUFDRkMsZUFBZSxFQUFFLE9BQU87TUFDeEJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRTtJQUNiLENBQUU7SUFBQUMsUUFBQSxFQUVGVixzRUFBQSxDQUFDTCxvREFBUztNQUFDZ0IsUUFBUSxFQUFDLElBQUk7TUFBQ0wsRUFBRSxFQUFFO1FBQUVNLEVBQUUsRUFBRTtNQUFFLENBQUU7TUFBQUYsUUFBQSxFQUNyQ1Ysc0VBQUEsQ0FBQ1AsOENBQUc7UUFDRmEsRUFBRSxFQUFFO1VBQ0ZPLE9BQU8sRUFBRSxNQUFNO1VBQ2ZDLGNBQWMsRUFBRSxlQUFlO1VBQy9CQyxVQUFVLEVBQUU7UUFDZCxDQUFFO1FBQUFMLFFBQUEsR0FFRlYsc0VBQUEsQ0FBQ1AsOENBQUc7VUFBQWlCLFFBQUEsRUFDRlYsc0VBQUEsQ0FBQ0gsa0RBQUk7WUFBQ21CLElBQUksRUFBQyxHQUFHO1lBQUFOLFFBQUEsRUFDWlYsc0VBQUEsQ0FBQ0osbURBQUs7Y0FBQ3FCLEdBQUcsRUFBQyxXQUFXO2NBQUNDLEtBQUssRUFBRSxFQUFHO2NBQUNDLE1BQU0sRUFBRSxFQUFHO2NBQUNDLEdBQUcsRUFBQztZQUFNO2NBQUFDLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxZQUFFO1VBQUM7WUFBQUgsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQ3ZEO1FBQUM7VUFBQUgsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLFlBQ0osQ0FBQyxFQUNMcEIsSUFBSSxDQUFDcUIsU0FBUyxJQUNiekIsc0VBQUEsQ0FBQUUsb0VBQUE7VUFBQVEsUUFBQSxHQUNHLENBQUNOLElBQUksQ0FBQ3NCLFVBQVUsSUFDZjFCLHNFQUFBLENBQUNQLDhDQUFHO1lBQUFpQixRQUFBLEdBQ0ZWLHNFQUFBLENBQUNILGtEQUFJO2NBQUNtQixJQUFJLEVBQUMsVUFBVTtjQUFBTixRQUFBLEVBQ25CVixzRUFBQSxDQUFDTixpREFBTTtnQkFDTGMsS0FBSyxFQUFDLFNBQVM7Z0JBQ2ZtQixPQUFPLEVBQUMsV0FBVztnQkFDbkJyQixFQUFFLEVBQUU7a0JBQ0ZFLEtBQUssRUFBRSxPQUFPO2tCQUNkb0IsYUFBYSxFQUFFLE1BQU07a0JBQ3JCQyxRQUFRLEVBQUUsRUFBRTtrQkFDWkMsWUFBWSxFQUFFLENBQUM7a0JBQ2ZyQixTQUFTLEVBQUU7Z0JBQ2IsQ0FBRTtnQkFBQUMsUUFBQSxFQUNIO2NBRUQ7Z0JBQUFXLFFBQUEsRUFBQUMsWUFBQTtnQkFBQUMsVUFBQTtnQkFBQUMsWUFBQTtjQUFBLFlBQVE7WUFBQztjQUFBSCxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFDTCxDQUFDLEVBQ1B4QixzRUFBQSxDQUFDTixpREFBTTtjQUNMYyxLQUFLLEVBQUMsU0FBUztjQUNmbUIsT0FBTyxFQUFDLFVBQVU7Y0FDbEJyQixFQUFFLEVBQUU7Z0JBQ0ZzQixhQUFhLEVBQUUsTUFBTTtnQkFDckJDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxZQUFZLEVBQUUsQ0FBQztnQkFDZnJCLFNBQVMsRUFBRSxNQUFNO2dCQUNqQnNCLE1BQU0sRUFBRSxxQkFBcUI7Z0JBQzdCQyxFQUFFLEVBQUU7Y0FDTixDQUFFO2NBQUF0QixRQUFBLEVBQ0g7WUFFRDtjQUFBVyxRQUFBLEVBQUFDLFlBQUE7Y0FBQUMsVUFBQTtjQUFBQyxZQUFBO1lBQUEsWUFBUSxDQUFDO1VBQUE7WUFBQUgsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLFlBQ04sQ0FDTixFQUNBcEIsSUFBSSxDQUFDc0IsVUFBVSxJQUFJMUIsc0VBQUEsQ0FBQ1AsOENBQUc7WUFBQWlCLFFBQUEsRUFBRU4sSUFBSSxDQUFDNkI7VUFBSTtZQUFBWixRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsWUFBTSxDQUFDO1FBQUEsZUFDMUMsQ0FDSDtNQUFBO1FBQUFILFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxZQUNFO0lBQUM7TUFBQUgsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLFlBQ0c7RUFBQztJQUFBSCxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFDTixDQUFDO0FBRWIsQ0FBQztBQUVELGlFQUFlckIsTUFBTSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEJhciwgQm94LCBCdXR0b24sIENvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVVzZXJTdGF0ZSB9IGZyb20gJ0AvaG9va3MvdXNlR2xvYmFsU3RhdGUnXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3VzZXJdID0gdXNlVXNlclN0YXRlKClcblxuICByZXR1cm4gKFxuICAgIDxBcHBCYXJcbiAgICAgIHBvc2l0aW9uPVwic3RpY2t5XCJcbiAgICAgIHN4PXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBzeD17eyBweDogMiB9fT5cbiAgICAgICAgPEJveFxuICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvZ28ucG5nXCIgd2lkdGg9ezg1fSBoZWlnaHQ9ezg1fSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICB7dXNlci5pc0ZldGNoZWQgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgeyF1c2VyLmlzU2lnbmVkSW4gJiYgKFxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25faW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwid2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMS41cHggc29saWQgI2Y1YTUwMCcsXG4gICAgICAgICAgICAgICAgICAgICAgbWw6IDIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7dXNlci5pc1NpZ25lZEluICYmIDxCb3g+e3VzZXIubmFtZX08L0JveD59XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQXBwQmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sIm5hbWVzIjpbIkFwcEJhciIsIkJveCIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIkltYWdlIiwiTGluayIsInVzZVVzZXJTdGF0ZSIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkhlYWRlciIsInVzZXIiLCJwb3NpdGlvbiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJjaGlsZHJlbiIsIm1heFdpZHRoIiwicHgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiaXNGZXRjaGVkIiwiaXNTaWduZWRJbiIsInZhcmlhbnQiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJtbCIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ }),

/***/ "./src/hooks/useGlobalState.ts":
/*!*************************************!*\
  !*** ./src/hooks/useGlobalState.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUserState: () => (/* binding */ useUserState)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);\nswr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useUserState = () => {\n  const fallbackData = {\n    id: 0,\n    name: '',\n    email: '',\n    isSignedIn: false,\n    isFetched: false\n  };\n  const {\n    data: state,\n    mutate: setState\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('user', null, {\n    fallbackData: fallbackData\n  });\n  return [state, setState];\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR2xvYmFsU3RhdGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0I7QUFFakIsTUFBTUMsWUFBWSxHQUFHQSxDQUFBLEtBQU07RUFTaEMsTUFBTUMsWUFBMkIsR0FBRztJQUNsQ0MsRUFBRSxFQUFFLENBQUM7SUFDTEMsSUFBSSxFQUFFLEVBQUU7SUFDUkMsS0FBSyxFQUFFLEVBQUU7SUFDVEMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLFNBQVMsRUFBRTtFQUNiLENBQUM7RUFFRCxNQUFNO0lBQUVDLElBQUksRUFBRUMsS0FBSztJQUFFQyxNQUFNLEVBQUVDO0VBQVMsQ0FBQyxHQUFHWCwrQ0FBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUU7SUFDN0RFLFlBQVksRUFBRUE7RUFDaEIsQ0FBQyxDQUFDO0VBQ0YsT0FBTyxDQUFDTyxLQUFLLEVBQUVFLFFBQVEsQ0FBQztBQUMxQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvaG9va3MvdXNlR2xvYmFsU3RhdGUudHM/NmYzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcblxuZXhwb3J0IGNvbnN0IHVzZVVzZXJTdGF0ZSA9ICgpID0+IHtcbiAgdHlwZSB1c2VyU3RhdGVUeXBlID0ge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBlbWFpbDogc3RyaW5nXG4gICAgaXNTaWduZWRJbjogYm9vbGVhblxuICAgIGlzRmV0Y2hlZDogYm9vbGVhblxuICB9XG5cbiAgY29uc3QgZmFsbGJhY2tEYXRhOiB1c2VyU3RhdGVUeXBlID0ge1xuICAgIGlkOiAwLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBpc1NpZ25lZEluOiBmYWxzZSxcbiAgICBpc0ZldGNoZWQ6IGZhbHNlLFxuICB9XG5cbiAgY29uc3QgeyBkYXRhOiBzdGF0ZSwgbXV0YXRlOiBzZXRTdGF0ZSB9ID0gdXNlU1dSKCd1c2VyJywgbnVsbCwge1xuICAgIGZhbGxiYWNrRGF0YTogZmFsbGJhY2tEYXRhLFxuICB9KVxuICByZXR1cm4gW3N0YXRlLCBzZXRTdGF0ZV0gYXMgW3VzZXJTdGF0ZVR5cGUsICh2YWx1ZTogdXNlclN0YXRlVHlwZSkgPT4gdm9pZF1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VVc2VyU3RhdGUiLCJmYWxsYmFja0RhdGEiLCJpZCIsIm5hbWUiLCJlbWFpbCIsImlzU2lnbmVkSW4iLCJpc0ZldGNoZWQiLCJkYXRhIiwic3RhdGUiLCJtdXRhdGUiLCJzZXRTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useGlobalState.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_destyle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/destyle.css */ \"./src/styles/destyle.css\");\n/* harmony import */ var _styles_destyle_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_destyle_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/CurrentUserFetch */ \"./src/components/CurrentUserFetch.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header.tsx\");\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/createEmotionCache */ \"./src/styles/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_5__, _components_Header__WEBPACK_IMPORTED_MODULE_6__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_0__, _components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_5__, _components_Header__WEBPACK_IMPORTED_MODULE_6__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/app/src/pages/_app.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n\n\n\n\n\n\n// Client-side cache, shared for the whole session of the user in the browser.\n\nconst clientSideEmotionCache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\nfunction MyApp(props) {\n  const {\n    Component,\n    emotionCache = clientSideEmotionCache,\n    pageProps\n  } = props;\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_0__.CacheProvider, {\n    value: emotionCache,\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n      theme: _styles_theme__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_CurrentUserFetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTREO0FBQ1Q7QUFDQztBQUV0QjtBQUNEO0FBQytCO0FBQ3BCO0FBRW9CO0FBQzFCOztBQUVsQztBQUFBO0FBQ0EsTUFBTVUsc0JBQXNCLEdBQUdKLHNFQUFrQixDQUFDLENBQUM7QUFNcEMsU0FBU0ssS0FBS0EsQ0FBQ0MsS0FBaUIsRUFBZTtFQUM1RCxNQUFNO0lBQUVDLFNBQVM7SUFBRUMsWUFBWSxHQUFHSixzQkFBc0I7SUFBRUs7RUFBVSxDQUFDLEdBQUdILEtBQUs7RUFDN0UsT0FDRUgsc0VBQUEsQ0FBQ1QseURBQWE7SUFBQ2dCLEtBQUssRUFBRUYsWUFBYTtJQUFBRyxRQUFBLEVBQ2pDUixzRUFBQSxDQUFDUCwrREFBYTtNQUFDSyxLQUFLLEVBQUVBLHFEQUFNO01BQUFVLFFBQUEsR0FFMUJSLHNFQUFBLENBQUNSLGtFQUFXO1FBQUFpQixRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRSxDQUFDLEVBQ2ZaLHNFQUFBLENBQUNMLG9FQUFnQjtRQUFBYyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRSxDQUFDLEVBQ3BCWixzRUFBQSxDQUFDSiwwREFBTTtRQUFBYSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsT0FBRSxDQUFDLEVBQ1ZaLHNFQUFBLENBQUNJLFNBQVMsRUFBQVMsYUFBQSxLQUFLUCxTQUFTO1FBQUFHLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxPQUFHLENBQUM7SUFBQTtNQUFBSCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsT0FDZjtFQUFDO0lBQUFILFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxPQUNILENBQUM7QUFFcEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhY2hlUHJvdmlkZXIsIEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJ0Avc3R5bGVzL2Rlc3R5bGUuY3NzJ1xuaW1wb3J0IEN1cnJlbnRVc2VyRmV0Y2ggZnJvbSAnQC9jb21wb25lbnRzL0N1cnJlbnRVc2VyRmV0Y2gnXG5pbXBvcnQgSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9IZWFkZXInXG5cbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnQC9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlJ1xuaW1wb3J0IHRoZW1lIGZyb20gJ0Avc3R5bGVzL3RoZW1lJ1xuXG4vLyBDbGllbnQtc2lkZSBjYWNoZSwgc2hhcmVkIGZvciB0aGUgd2hvbGUgc2Vzc2lvbiBvZiB0aGUgdXNlciBpbiB0aGUgYnJvd3Nlci5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKVxuXG5pbnRlcmZhY2UgTXlBcHBQcm9wcyBleHRlbmRzIEFwcFByb3BzIHtcbiAgZW1vdGlvbkNhY2hlPzogRW1vdGlvbkNhY2hlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzOiBNeUFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xuICBjb25zdCB7IENvbXBvbmVudCwgZW1vdGlvbkNhY2hlID0gY2xpZW50U2lkZUVtb3Rpb25DYWNoZSwgcGFnZVByb3BzIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxDYWNoZVByb3ZpZGVyIHZhbHVlPXtlbW90aW9uQ2FjaGV9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEN1cnJlbnRVc2VyRmV0Y2ggLz5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9DYWNoZVByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FjaGVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiVGhlbWVQcm92aWRlciIsIlJlYWN0IiwiQ3VycmVudFVzZXJGZXRjaCIsIkhlYWRlciIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsInRoZW1lIiwianN4REVWIiwiX2pzeERFViIsImNsaWVudFNpZGVFbW90aW9uQ2FjaGUiLCJNeUFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIiwidmFsdWUiLCJjaGlsZHJlbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl9vYmplY3RTcHJlYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/createEmotionCache.ts":
/*!******************************************!*\
  !*** ./src/styles/createEmotionCache.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n  return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: 'css'\n  });\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUUzQyxTQUFTQyxrQkFBa0JBLENBQUEsRUFBaUI7RUFDekQsT0FBT0QsMERBQVcsQ0FBQztJQUFFRSxHQUFHLEVBQUU7RUFBTSxDQUFDLENBQUM7QUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzPzBlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlLCB7IEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL2NhY2hlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKTogRW1vdGlvbkNhY2hlIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/createEmotionCache.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n  palette: {\n    primary: {\n      main: '#ffe0b6'\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.red.A400\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ1E7O0FBRWxEO0FBQ0EsTUFBTUUsS0FBSyxHQUFHRCxpRUFBVyxDQUFDO0VBQ3hCRSxPQUFPLEVBQUU7SUFDUEMsT0FBTyxFQUFFO01BQ1BDLElBQUksRUFBRTtJQUNSLENBQUM7SUFDREMsU0FBUyxFQUFFO01BQ1RELElBQUksRUFBRTtJQUNSLENBQUM7SUFDREUsS0FBSyxFQUFFO01BQ0xGLElBQUksRUFBRUwscURBQUcsQ0FBQ1E7SUFDWjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsaUVBQWVOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNmZmUwYjYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnIzE5ODU3YicsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iXSwibmFtZXMiOlsicmVkIiwiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "./src/styles/destyle.css":
/*!********************************!*\
  !*** ./src/styles/destyle.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();