"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  version: true,
  ContractSpec: true,
  Server: true,
  AxiosClient: true,
  SERVER_TIME_MAP: true,
  getCurrentServerTime: true
};
Object.defineProperty(exports, "AxiosClient", {
  enumerable: true,
  get: function () {
    return _axios.default;
  }
});
Object.defineProperty(exports, "ContractSpec", {
  enumerable: true,
  get: function () {
    return _contract_spec.ContractSpec;
  }
});
Object.defineProperty(exports, "SERVER_TIME_MAP", {
  enumerable: true,
  get: function () {
    return _axios.SERVER_TIME_MAP;
  }
});
Object.defineProperty(exports, "Server", {
  enumerable: true,
  get: function () {
    return _server.Server;
  }
});
exports.default = void 0;
Object.defineProperty(exports, "getCurrentServerTime", {
  enumerable: true,
  get: function () {
    return _axios.getCurrentServerTime;
  }
});
exports.version = void 0;
var _soroban_rpc = require("./soroban_rpc");
Object.keys(_soroban_rpc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _soroban_rpc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _soroban_rpc[key];
    }
  });
});
var _contract_spec = require("./contract_spec");
var _server = require("./server");
var _axios = _interopRequireWildcard(require("./axios"));
var _transaction = require("./transaction");
Object.keys(_transaction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _transaction[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transaction[key];
    }
  });
});
var _stellarBase = require("stellar-base");
Object.keys(_stellarBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _stellarBase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _stellarBase[key];
    }
  });
});
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function cov_94rq1x92g() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/index.ts";
  var hash = "57eaafafabeeeaaa366406ff4c40f0b2f82a78d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/index.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 16
        },
        end: {
          line: 2,
          column: 50
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "57eaafafabeeeaaa366406ff4c40f0b2f82a78d0"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_94rq1x92g = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_94rq1x92g();
/* tslint:disable:no-var-requires */
const version = (cov_94rq1x92g().s[0]++, require("../package.json").version);

// Expose all types

// stellar-sdk classes to expose

// expose classes and functions from stellar-base
exports.version = version;
var _default = module.exports;
exports.default = _default;