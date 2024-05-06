"use strict";
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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var _emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/server/create-instance */ \"@emotion/server/create-instance\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/createEmotionCache */ \"./src/styles/createEmotionCache.ts\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"@emotion/react/jsx-dev-runtime\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__]);\n([_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__, _styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__, _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"/app/src/pages/_document.tsx\";\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/* eslint-disable @typescript-eslint/no-explicit-any */\n\n\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n  render() {\n    return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n      lang: \"ja\",\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n          name: \"theme-color\",\n          content: _styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].palette.primary.main\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n          rel: \"stylesheet\",\n          href: \"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"body\", {\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n// `getInitialProps` belongs to `_document` (instead of `_app`),\n// it's compatible with static-site generation (SSG).\nMyDocument.getInitialProps = async ctx => {\n  // Resolution order\n  //\n  // On the server:\n  // 1. app.getInitialProps\n  // 2. page.getInitialProps\n  // 3. document.getInitialProps\n  // 4. app.render\n  // 5. page.render\n  // 6. document.render\n  //\n  // On the server with error:\n  // 1. document.getInitialProps\n  // 2. app.render\n  // 3. page.render\n  // 4. document.render\n  //\n  // On the client\n  // 1. app.getInitialProps\n  // 2. page.getInitialProps\n  // 3. app.render\n  // 4. page.render\n\n  const originalRenderPage = ctx.renderPage;\n\n  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.\n  // However, be aware that it can have global side effects.\n  const cache = (0,_styles_createEmotionCache__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const {\n    extractCriticalToChunks\n  } = (0,_emotion_server_create_instance__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cache);\n  ctx.renderPage = () => originalRenderPage({\n    enhanceApp: App =>\n    // eslint-disable-next-line react/display-name\n    props => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(App, _objectSpread({\n      emotionCache: cache\n    }, props), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 33\n    }, undefined)\n  });\n  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n  // This is important. It prevents emotion to render invalid HTML.\n  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153\n  const emotionStyles = extractCriticalToChunks(initialProps.html);\n  const emotionStyleTags = emotionStyles.styles.map(style => (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"style\", {\n    \"data-emotion\": `${style.key} ${style.ids.join(' ')}`,\n    // eslint-disable-next-line react/no-danger\n    dangerouslySetInnerHTML: {\n      __html: style.css\n    }\n  }, style.key, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, undefined));\n  return _objectSpread(_objectSpread({}, initialProps), {}, {\n    // Styles fragment is rendered after the app and page rendering finish.\n    styles: [...react__WEBPACK_IMPORTED_MODULE_2__.Children.toArray(initialProps.styles), ...emotionStyleTags]\n  });\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxHQUYxQ04sS0FBSyxDQUFDQyxHQUFHO0lBQUF4QixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsWUFHZixDQUNGLENBQUM7RUFFRixPQUFBWSxhQUFBLENBQUFBLGFBQUEsS0FDS0UsWUFBWTtJQUNmO0lBQ0FJLE1BQU0sRUFBRSxDQUNOLEdBQUduQywyQ0FBYyxDQUFDNkMsT0FBTyxDQUFDZCxZQUFZLENBQUNJLE1BQU0sQ0FBQyxFQUM5QyxHQUFHRCxnQkFBZ0I7RUFDcEI7QUFFTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeD8xODhlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgKi9cbmltcG9ydCBjcmVhdGVFbW90aW9uU2VydmVyIGZyb20gJ0BlbW90aW9uL3NlcnZlci9jcmVhdGUtaW5zdGFuY2UnXG5pbXBvcnQgeyBSZW5kZXJQYWdlUmVzdWx0IH0gZnJvbSAnbmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMnXG5pbXBvcnQgRG9jdW1lbnQsIHtcbiAgSHRtbCxcbiAgSGVhZCxcbiAgTWFpbixcbiAgTmV4dFNjcmlwdCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG59IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IGNyZWF0ZUVtb3Rpb25DYWNoZSBmcm9tICdAL3N0eWxlcy9jcmVhdGVFbW90aW9uQ2FjaGUnXG5pbXBvcnQgdGhlbWUgZnJvbSAnQC9zdHlsZXMvdGhlbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJqYVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICB7LyogUFdBIHByaW1hcnkgY29sb3IgKi99XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86MzAwLDQwMCw1MDAsNzAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApXG4gIH1cbn1cblxuLy8gYGdldEluaXRpYWxQcm9wc2AgYmVsb25ncyB0byBgX2RvY3VtZW50YCAoaW5zdGVhZCBvZiBgX2FwcGApLFxuLy8gaXQncyBjb21wYXRpYmxlIHdpdGggc3RhdGljLXNpdGUgZ2VuZXJhdGlvbiAoU1NHKS5cbk15RG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCk6IFByb21pc2U8RG9jdW1lbnRJbml0aWFsUHJvcHM+ID0+IHtcbiAgLy8gUmVzb2x1dGlvbiBvcmRlclxuICAvL1xuICAvLyBPbiB0aGUgc2VydmVyOlxuICAvLyAxLiBhcHAuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDIuIHBhZ2UuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIDMuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyA0LiBhcHAucmVuZGVyXG4gIC8vIDUuIHBhZ2UucmVuZGVyXG4gIC8vIDYuIGRvY3VtZW50LnJlbmRlclxuICAvL1xuICAvLyBPbiB0aGUgc2VydmVyIHdpdGggZXJyb3I6XG4gIC8vIDEuIGRvY3VtZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyAyLiBhcHAucmVuZGVyXG4gIC8vIDMuIHBhZ2UucmVuZGVyXG4gIC8vIDQuIGRvY3VtZW50LnJlbmRlclxuICAvL1xuICAvLyBPbiB0aGUgY2xpZW50XG4gIC8vIDEuIGFwcC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMi4gcGFnZS5nZXRJbml0aWFsUHJvcHNcbiAgLy8gMy4gYXBwLnJlbmRlclxuICAvLyA0LiBwYWdlLnJlbmRlclxuXG4gIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlXG5cbiAgLy8gWW91IGNhbiBjb25zaWRlciBzaGFyaW5nIHRoZSBzYW1lIGVtb3Rpb24gY2FjaGUgYmV0d2VlbiBhbGwgdGhlIFNTUiByZXF1ZXN0cyB0byBzcGVlZCB1cCBwZXJmb3JtYW5jZS5cbiAgLy8gSG93ZXZlciwgYmUgYXdhcmUgdGhhdCBpdCBjYW4gaGF2ZSBnbG9iYWwgc2lkZSBlZmZlY3RzLlxuICBjb25zdCBjYWNoZSA9IGNyZWF0ZUVtb3Rpb25DYWNoZSgpXG4gIGNvbnN0IHsgZXh0cmFjdENyaXRpY2FsVG9DaHVua3MgfSA9IGNyZWF0ZUVtb3Rpb25TZXJ2ZXIoY2FjaGUpXG5cbiAgY3R4LnJlbmRlclBhZ2UgPSAoKTogUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD4gPT5cbiAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgZW5oYW5jZUFwcDpcbiAgICAgICAgKEFwcDogYW55KSA9PlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZGlzcGxheS1uYW1lXG4gICAgICAgIChwcm9wcyk6IEpTWC5FbGVtZW50ID0+IDxBcHAgZW1vdGlvbkNhY2hlPXtjYWNoZX0gey4uLnByb3BzfSAvPixcbiAgICB9KVxuXG4gIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpXG4gIC8vIFRoaXMgaXMgaW1wb3J0YW50LiBJdCBwcmV2ZW50cyBlbW90aW9uIHRvIHJlbmRlciBpbnZhbGlkIEhUTUwuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9pc3N1ZXMvMjY1NjEjaXNzdWVjb21tZW50LTg1NTI4NjE1M1xuICBjb25zdCBlbW90aW9uU3R5bGVzID0gZXh0cmFjdENyaXRpY2FsVG9DaHVua3MoaW5pdGlhbFByb3BzLmh0bWwpXG4gIGNvbnN0IGVtb3Rpb25TdHlsZVRhZ3MgPSBlbW90aW9uU3R5bGVzLnN0eWxlcy5tYXAoKHN0eWxlKSA9PiAoXG4gICAgPHN0eWxlXG4gICAgICBkYXRhLWVtb3Rpb249e2Ake3N0eWxlLmtleX0gJHtzdHlsZS5pZHMuam9pbignICcpfWB9XG4gICAgICBrZXk9e3N0eWxlLmtleX1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kYW5nZXJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGUuY3NzIH19XG4gICAgLz5cbiAgKSlcblxuICByZXR1cm4ge1xuICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAvLyBTdHlsZXMgZnJhZ21lbnQgaXMgcmVuZGVyZWQgYWZ0ZXIgdGhlIGFwcCBhbmQgcGFnZSByZW5kZXJpbmcgZmluaXNoLlxuICAgIHN0eWxlczogW1xuICAgICAgLi4uUmVhY3QuQ2hpbGRyZW4udG9BcnJheShpbml0aWFsUHJvcHMuc3R5bGVzKSxcbiAgICAgIC4uLmVtb3Rpb25TdHlsZVRhZ3MsXG4gICAgXSxcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUVtb3Rpb25TZXJ2ZXIiLCJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJSZWFjdCIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsInRoZW1lIiwianN4REVWIiwiX2pzeERFViIsIk15RG9jdW1lbnQiLCJyZW5kZXIiLCJsYW5nIiwiY2hpbGRyZW4iLCJuYW1lIiwiY29udGVudCIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsInJlbCIsImhyZWYiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiY2FjaGUiLCJleHRyYWN0Q3JpdGljYWxUb0NodW5rcyIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsIl9vYmplY3RTcHJlYWQiLCJlbW90aW9uQ2FjaGUiLCJpbml0aWFsUHJvcHMiLCJlbW90aW9uU3R5bGVzIiwiaHRtbCIsImVtb3Rpb25TdHlsZVRhZ3MiLCJzdHlsZXMiLCJtYXAiLCJzdHlsZSIsImtleSIsImlkcyIsImpvaW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNzcyIsIkNoaWxkcmVuIiwidG9BcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "./src/styles/createEmotionCache.ts":
/*!******************************************!*\
  !*** ./src/styles/createEmotionCache.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction createEmotionCache() {\n  return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: 'css'\n  });\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2NyZWF0ZUVtb3Rpb25DYWNoZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUUzQyxTQUFTQyxrQkFBa0JBLENBQUEsRUFBaUI7RUFDekQsT0FBT0QsMERBQVcsQ0FBQztJQUFFRSxHQUFHLEVBQUU7RUFBTSxDQUFDLENBQUM7QUFDcEMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9zdHlsZXMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzPzBlNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUNhY2hlLCB7IEVtb3Rpb25DYWNoZSB9IGZyb20gJ0BlbW90aW9uL2NhY2hlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbW90aW9uQ2FjaGUoKTogRW1vdGlvbkNhY2hlIHtcbiAgcmV0dXJuIGNyZWF0ZUNhY2hlKHsga2V5OiAnY3NzJyB9KVxufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhY2hlIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/createEmotionCache.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.createTheme)({\n  palette: {\n    primary: {\n      main: '#ffe0b6'\n    },\n    secondary: {\n      main: '#ff0000'\n    },\n    error: {\n      main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_0__.red.A400\n    }\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBDO0FBQ1E7O0FBRWxEO0FBQ0EsTUFBTUUsS0FBSyxHQUFHRCxpRUFBVyxDQUFDO0VBQ3hCRSxPQUFPLEVBQUU7SUFDUEMsT0FBTyxFQUFFO01BQ1BDLElBQUksRUFBRTtJQUNSLENBQUM7SUFDREMsU0FBUyxFQUFFO01BQ1RELElBQUksRUFBRTtJQUNSLENBQUM7SUFDREUsS0FBSyxFQUFFO01BQ0xGLElBQUksRUFBRUwscURBQUcsQ0FBQ1E7SUFDWjtFQUNGO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsaUVBQWVOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnXG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogJyNmZmUwYjYnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiAnI2ZmMDAwMCcsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgbWFpbjogcmVkLkE0MDAsXG4gICAgfSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iXSwibmFtZXMiOlsicmVkIiwiY3JlYXRlVGhlbWUiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react/jsx-dev-runtime":
/*!*************************************************!*\
  !*** external "@emotion/react/jsx-dev-runtime" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = import("@emotion/react/jsx-dev-runtime");;

/***/ }),

/***/ "@emotion/server/create-instance":
/*!**************************************************!*\
  !*** external "@emotion/server/create-instance" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@emotion/server/create-instance");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();