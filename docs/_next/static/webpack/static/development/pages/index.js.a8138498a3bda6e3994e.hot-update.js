webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/features/country/CountryDb.tsx":
/*!********************************************!*\
  !*** ./src/features/country/CountryDb.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _sql_connection_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sql/connection/connection */ "./src/sql/connection/connection.ts");
/* harmony import */ var _sql_entities_Country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sql/entities/Country */ "./src/sql/entities/Country.ts");
/* harmony import */ var _countryEntity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./countryEntity */ "./src/features/country/countryEntity.ts");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");



var _this = undefined,
    _jsxFileName = "/home/clfhhc/src/covid19-data/src/features/country/CountryDb.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var _countryAdapter$getSe = _countryEntity__WEBPACK_IMPORTED_MODULE_6__["default"].getSelectors(function (state) {
  return state.country;
}),
    selectCountries = _countryAdapter$getSe.selectAll;

var CountryDb = function CountryDb() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      dbUrl = _useState[0],
      setDbUrl = _useState[1];

  var handleButtonClick = function handleButtonClick() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleButtonClick$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = setDbUrl;
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_sql_connection_connection__WEBPACK_IMPORTED_MODULE_4__["createDbUrl"])({}));

          case 3:
            _context.t1 = _context.sent;
            (0, _context.t0)(_context.t1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var countries = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(selectCountries) || [];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var main = function main() {
      var countriesCopy, connection;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function main$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (countries.length) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              countriesCopy = countries.map(function (value) {
                return _objectSpread({}, value);
              });
              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_sql_connection_connection__WEBPACK_IMPORTED_MODULE_4__["connectDb"])({
                shouldDrop: true
              }));

            case 5:
              connection = _context2.sent;
              _context2.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(connection.sqljsManager.createQueryBuilder().insert().into(_sql_entities_Country__WEBPACK_IMPORTED_MODULE_5__["default"]).values(countriesCopy).execute());

            case 8:
              connection.close();

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    };

    main();
  }, [countries]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
    type: "button",
    onClick: handleButtonClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "Create a db"), dbUrl && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("a", {
    href: dbUrl,
    download: "db.sqlite",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "db_link"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CountryDb);

/***/ })

})
//# sourceMappingURL=index.js.a8138498a3bda6e3994e.hot-update.js.map