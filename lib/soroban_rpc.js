"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SorobanRpc = void 0;
function cov_1eyu4k9tn5() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/soroban_rpc.ts";
  var hash = "e946e7111a55151874dcf7f4cbc34af8b4483dcc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/soroban_rpc.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e946e7111a55151874dcf7f4cbc34af8b4483dcc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1eyu4k9tn5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1eyu4k9tn5();
// TODO: Better parsing for hashes
/* tslint:disable-next-line:no-namespace */
/**
 * @namespace SorobanRpc
 */
let SorobanRpc;
exports.SorobanRpc = SorobanRpc;
(function (_SorobanRpc) {
  /* Response for jsonrpc method `getLedgerEntries`
   */
  /* Response for jsonrpc method `getNetwork`
   */
  /* Response for jsonrpc method `getLatestLedger`
   */
  let GetTransactionStatus = /*#__PURE__*/function (GetTransactionStatus) {
    GetTransactionStatus["SUCCESS"] = "SUCCESS";
    GetTransactionStatus["NOT_FOUND"] = "NOT_FOUND";
    GetTransactionStatus["FAILED"] = "FAILED";
    return GetTransactionStatus;
  }({});
  _SorobanRpc.GetTransactionStatus = GetTransactionStatus;
})(SorobanRpc || (exports.SorobanRpc = SorobanRpc = {}));