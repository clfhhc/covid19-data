webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_redux_withRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/redux/withRedux */ "./src/utils/redux/withRedux.tsx");
/* harmony import */ var _stores__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stores */ "./src/stores/index.ts");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _this = undefined,
    _jsxFileName = "/home/clfhhc/src/covid19-data/src/pages/_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;








var App = function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps,
      appProps = _ref.appProps,
      store = _ref.store;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var asyncInit = function asyncInit() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function asyncInit$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              window.localforage = localforage__WEBPACK_IMPORTED_MODULE_4___default.a;

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    asyncInit();
    return function () {
      var asyncEnd = function asyncEnd() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function asyncEnd$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                window.localforage = undefined;

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, null, null, null, Promise);
      };

      asyncEnd();
    };
  }, []);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    store: store,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, appProps, pageProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_redux_withRedux__WEBPACK_IMPORTED_MODULE_6__["default"])({
  makeStore: _stores__WEBPACK_IMPORTED_MODULE_7__["default"],
  isServerSideRendering: false
})(App));

/***/ })

})
//# sourceMappingURL=_app.js.3d7a2235bbe22414247e.hot-update.js.map