webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/sql/connection/connection.ts":
/*!******************************************!*\
  !*** ./src/sql/connection/connection.ts ***!
  \******************************************/
/*! exports provided: defaultEntities, connectDb, closeDb, removeDb, loadDbFromFile, createDbUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultEntities", function() { return defaultEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectDb", function() { return connectDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeDb", function() { return closeDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDb", function() { return removeDb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDbFromFile", function() { return loadDbFromFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDbUrl", function() { return createDbUrl; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeorm_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm/browser */ "./node_modules/typeorm/browser/index.js");
/* harmony import */ var _entities_Country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Country */ "./src/sql/entities/Country.ts");



var isProd = "development" === 'production';
var defaultConnectionName = 'sqlJsDb';
var defaultEntities = [_entities_Country__WEBPACK_IMPORTED_MODULE_2__["Country"]]; // either copy the file sql-wasm.wasm from sql.js/dist
// or define locateFile function to retrieve it from a cdn

var locateFile = function locateFile(filename) {
  return "https://cdnjs.cloudflare.com/ajax/libs/sql.js/".concat("1.2.2", "/dist/").concat(filename);
};

var connectDb = function connectDb(_ref) {
  var _ref$name, name, _ref$entities, entities, _ref$shouldDrop, shouldDrop, _ref$shouldClear, shouldClear, connection, _window$localforage;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function connectDb$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref$name = _ref.name, name = _ref$name === void 0 ? defaultConnectionName : _ref$name, _ref$entities = _ref.entities, entities = _ref$entities === void 0 ? defaultEntities : _ref$entities, _ref$shouldDrop = _ref.shouldDrop, shouldDrop = _ref$shouldDrop === void 0 ? false : _ref$shouldDrop, _ref$shouldClear = _ref.shouldClear, shouldClear = _ref$shouldClear === void 0 ? false : _ref$shouldClear;

          if (!shouldClear) {
            _context.next = 4;
            break;
          }

          _context.next = 4;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap((_window$localforage = window.localforage) === null || _window$localforage === void 0 ? void 0 : _window$localforage.removeItem(name));

        case 4:
          _context.prev = 4;
          connection = Object(typeorm_browser__WEBPACK_IMPORTED_MODULE_1__["getConnection"])(name);

          if (connection.isConnected) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(connection.connect());

        case 9:
          _context.next = 19;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](4);
          connection = Object(typeorm_browser__WEBPACK_IMPORTED_MODULE_1__["getConnectionManager"])().create({
            type: 'sqljs',
            sqlJsConfig: {
              locateFile: locateFile
            },
            name: name,
            location: name,
            autoSave: true,
            entities: entities,
            useLocalForage: true,
            logging: !isProd && ['query', 'schema']
          });

          if (connection.isConnected) {
            _context.next = 17;
            break;
          }

          _context.next = 17;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(connection.connect());

        case 17:
          _context.next = 19;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(connection.synchronize(shouldDrop));

        case 19:
          return _context.abrupt("return", connection);

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 11]], Promise);
};
var closeDb = function closeDb(_ref2) {
  var _ref2$name = _ref2.name,
      name = _ref2$name === void 0 ? defaultConnectionName : _ref2$name;
  var connection = Object(typeorm_browser__WEBPACK_IMPORTED_MODULE_1__["getConnection"])(name);
  return connection.close();
};
var removeDb = function removeDb(_ref3) {
  var _window$localforage2;

  var _ref3$name, name;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function removeDb$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _ref3$name = _ref3.name, name = _ref3$name === void 0 ? defaultConnectionName : _ref3$name;
          _context2.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(closeDb({
            name: name
          }));

        case 3:
          return _context2.abrupt("return", (_window$localforage2 = window.localforage) === null || _window$localforage2 === void 0 ? void 0 : _window$localforage2.removeItem(name));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};
var loadDbFromFile = function loadDbFromFile(_ref4) {
  var _ref4$name, name, _ref4$entities, entities, database, connection;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadDbFromFile$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _ref4$name = _ref4.name, name = _ref4$name === void 0 ? defaultConnectionName : _ref4$name, _ref4$entities = _ref4.entities, entities = _ref4$entities === void 0 ? defaultEntities : _ref4$entities, database = _ref4.database;
          _context3.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(connectDb({
            name: name,
            entities: entities
          }));

        case 3:
          connection = _context3.sent;
          _context3.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(connection.sqljsManager.loadDatabase(database));

        case 6:
          return _context3.abrupt("return", connection);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
};
var createDbUrl = function createDbUrl(_ref5) {
  var _ref5$name, name, arrayBuffer, blob, dbUrl;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createDbUrl$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _ref5$name = _ref5.name, name = _ref5$name === void 0 ? defaultConnectionName : _ref5$name;
          _context4.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(connectDb({
            name: name
          }));

        case 3:
          arrayBuffer = connection.sqljsManager.exportDatabase();
          blob = new Blob([arrayBuffer], {
            type: 'application/octet-stream'
          });
          dbUrl = URL.createObjectURL(blob);
          return _context4.abrupt("return", dbUrl);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ })

})
//# sourceMappingURL=index.js.e9259b5676a6c57622fa.hot-update.js.map