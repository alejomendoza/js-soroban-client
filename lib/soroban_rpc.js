"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SorobanRpc = void 0;
var SorobanRpc;
exports.SorobanRpc = SorobanRpc;
(function (_SorobanRpc) {
  var GetTransactionStatus = function (GetTransactionStatus) {
    GetTransactionStatus["SUCCESS"] = "SUCCESS";
    GetTransactionStatus["NOT_FOUND"] = "NOT_FOUND";
    GetTransactionStatus["FAILED"] = "FAILED";
    return GetTransactionStatus;
  }({});
  _SorobanRpc.GetTransactionStatus = GetTransactionStatus;
})(SorobanRpc || (exports.SorobanRpc = SorobanRpc = {}));