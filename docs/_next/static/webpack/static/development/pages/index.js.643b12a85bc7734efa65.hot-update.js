webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_head_ManifestHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/head/ManifestHead */ "./src/features/head/ManifestHead.tsx");
/* harmony import */ var _features_country_countryEntity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/country/countryEntity */ "./src/features/country/countryEntity.ts");
/* harmony import */ var _features_country_CountryDiv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/country/CountryDiv */ "./src/features/country/CountryDiv.tsx");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");


var _this = undefined,
    _jsxFileName = "/home/clfhhc/src/covid19-data/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var _countryAdapter$getSe = _features_country_countryEntity__WEBPACK_IMPORTED_MODULE_5__["default"].getSelectors(function (state) {
  return state.country || {};
}),
    selectCountries = _countryAdapter$getSe.selectEntities;

var IndexPage = function IndexPage(_ref) {
  var _countryObj$curerentI, _countryObj$curerentI2;

  var countries = _ref.countries,
      ip = _ref.ip;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      currentIp = _useState[0],
      setIp = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      curerentISO2 = _useState2[0],
      setISO2 = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var main = function main() {
      var _data$geolocation, _data$geolocation$cou;

      var _await$axios$get, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function main$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setIp(ip);
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://api.kwelo.com/v1/network/ip-address/location/162.228.91.236"));

            case 3:
              _await$axios$get = _context.sent;
              data = _await$axios$get.data;
              console.log(data);
              setISO2((data === null || data === void 0 ? void 0 : (_data$geolocation = data.geolocation) === null || _data$geolocation === void 0 ? void 0 : (_data$geolocation$cou = _data$geolocation.country) === null || _data$geolocation$cou === void 0 ? void 0 : _data$geolocation$cou.iso_code) || '');

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    main();
  }, [ip]);
  var countryObj = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(selectCountries) || {};
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_features_head_ManifestHead__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "",
    hrefCanonical: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Your Ip: ".concat(currentIp)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Your country: ".concat((_countryObj$curerentI = (_countryObj$curerentI2 = countryObj[curerentISO2]) === null || _countryObj$curerentI2 === void 0 ? void 0 : _countryObj$curerentI2.Country) !== null && _countryObj$curerentI !== void 0 ? _countryObj$curerentI : '')), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_features_country_CountryDiv__WEBPACK_IMPORTED_MODULE_6__["default"], {
    countries: countries,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));
};

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ })

})
//# sourceMappingURL=index.js.643b12a85bc7734efa65.hot-update.js.map