"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasOwnProperty = hasOwnProperty;
function cov_kzxt548ko() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/utils.ts";
  var hash = "f1442d5299a4a120c73f90f6411b1d4949180545";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/utils.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "hasOwnProperty",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 30
          }
        },
        loc: {
          start: {
            line: 6,
            column: 33
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f1442d5299a4a120c73f90f6411b1d4949180545"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_kzxt548ko = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_kzxt548ko();
// Check if the given object X has a field Y, and make that available to
// typescript typing.
function hasOwnProperty(obj, prop) {
  cov_kzxt548ko().f[0]++;
  cov_kzxt548ko().s[0]++;
  return obj.hasOwnProperty(prop);
}