"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assembleTransaction = assembleTransaction;
exports.parseRawSimulation = parseRawSimulation;
var _stellarBase = require("stellar-base");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function assembleTransaction(raw, networkPassphrase, simulation) {
  var _invokeOp$auth;
  if ("innerTransaction" in raw) {
    return assembleTransaction(raw.innerTransaction, networkPassphrase, simulation);
  }
  if (!isSorobanTransaction(raw)) {
    throw new TypeError("unsupported transaction: must contain exactly one " + "invokeHostFunction, bumpFootprintExpiration, or restoreFootprint " + "operation");
  }
  var coalesced = parseRawSimulation(simulation);
  if (!coalesced.result) {
    throw new Error("simulation incorrect: ".concat(JSON.stringify(coalesced)));
  }
  var classicFeeNum = parseInt(raw.fee) || 0;
  var minResourceFeeNum = parseInt(coalesced.minResourceFee) || 0;
  var txnBuilder = _stellarBase.TransactionBuilder.cloneFrom(raw, {
    fee: (classicFeeNum + minResourceFeeNum).toString(),
    sorobanData: coalesced.transactionData.build(),
    networkPassphrase: networkPassphrase
  });
  switch (raw.operations[0].type) {
    case "invokeHostFunction":
      txnBuilder.clearOperations();
      var invokeOp = raw.operations[0];
      var existingAuth = (_invokeOp$auth = invokeOp.auth) !== null && _invokeOp$auth !== void 0 ? _invokeOp$auth : [];
      txnBuilder.addOperation(_stellarBase.Operation.invokeHostFunction({
        source: invokeOp.source,
        func: invokeOp.func,
        auth: existingAuth.length > 0 ? existingAuth : coalesced.result.auth
      }));
      break;
  }
  return txnBuilder;
}
function isSorobanTransaction(tx) {
  if (tx.operations.length !== 1) {
    return false;
  }
  switch (tx.operations[0].type) {
    case "invokeHostFunction":
    case "bumpFootprintExpiration":
    case "restoreFootprint":
      return true;
    default:
      return false;
  }
}
function parseRawSimulation(sim) {
  var _sim$events, _sim$results, _sim$results2;
  var looksRaw = isSimulationRaw(sim);
  if (!looksRaw) {
    return sim;
  }
  return _objectSpread(_objectSpread({
    id: sim.id,
    minResourceFee: sim.minResourceFee,
    latestLedger: sim.latestLedger,
    cost: sim.cost,
    transactionData: new _stellarBase.SorobanDataBuilder(sim.transactionData === "" ? undefined : sim.transactionData),
    events: ((_sim$events = sim.events) !== null && _sim$events !== void 0 ? _sim$events : []).map(function (event) {
      return _stellarBase.xdr.DiagnosticEvent.fromXDR(event, "base64");
    })
  }, sim.error !== undefined && {
    error: sim.error
  }), ((_sim$results = sim.results) !== null && _sim$results !== void 0 ? _sim$results : []).length > 0 && {
    result: (_sim$results2 = sim.results) === null || _sim$results2 === void 0 ? void 0 : _sim$results2.map(function (result) {
      var _result$auth;
      return {
        auth: ((_result$auth = result.auth) !== null && _result$auth !== void 0 ? _result$auth : []).map(function (entry) {
          return _stellarBase.xdr.SorobanAuthorizationEntry.fromXDR(entry, "base64");
        }),
        retval: _stellarBase.xdr.ScVal.fromXDR(result.xdr, "base64")
      };
    })[0]
  });
}
function isSimulationRaw(sim) {
  var _results;
  return sim.result === undefined || typeof sim.transactionData === "string" || ((_results = sim.results) !== null && _results !== void 0 ? _results : []).length > 0;
}