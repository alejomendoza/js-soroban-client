"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Friendbot = void 0;
function cov_1f20cyrc4w() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/friendbot.ts";
  var hash = "ecd21664d0016ef74035766c9223bc9679b63a47";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/friendbot.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ecd21664d0016ef74035766c9223bc9679b63a47"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1f20cyrc4w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1f20cyrc4w();
let Friendbot;
exports.Friendbot = Friendbot;