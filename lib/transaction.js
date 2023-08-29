"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assembleTransaction = assembleTransaction;
exports.parseRawSimulation = parseRawSimulation;
var _stellarBase = require("stellar-base");
function cov_pyc7w5sbb() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/transaction.ts";
  var hash = "c8549a348e1cf4328590764bede23bcc91ed97ef";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/transaction.ts",
    statementMap: {
      "0": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 45,
          column: 3
        }
      },
      "1": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 44,
          column: 6
        }
      },
      "2": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 53,
          column: 3
        }
      },
      "3": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 52,
          column: 6
        }
      },
      "4": {
        start: {
          line: 55,
          column: 20
        },
        end: {
          line: 55,
          column: 50
        }
      },
      "5": {
        start: {
          line: 56,
          column: 2
        },
        end: {
          line: 58,
          column: 3
        }
      },
      "6": {
        start: {
          line: 57,
          column: 4
        },
        end: {
          line: 57,
          column: 74
        }
      },
      "7": {
        start: {
          line: 60,
          column: 24
        },
        end: {
          line: 60,
          column: 46
        }
      },
      "8": {
        start: {
          line: 61,
          column: 28
        },
        end: {
          line: 61,
          column: 67
        }
      },
      "9": {
        start: {
          line: 62,
          column: 21
        },
        end: {
          line: 75,
          column: 4
        }
      },
      "10": {
        start: {
          line: 77,
          column: 2
        },
        end: {
          line: 97,
          column: 3
        }
      },
      "11": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 35
        }
      },
      "12": {
        start: {
          line: 82,
          column: 53
        },
        end: {
          line: 82,
          column: 70
        }
      },
      "13": {
        start: {
          line: 83,
          column: 27
        },
        end: {
          line: 83,
          column: 46
        }
      },
      "14": {
        start: {
          line: 84,
          column: 6
        },
        end: {
          line: 95,
          column: 8
        }
      },
      "15": {
        start: {
          line: 96,
          column: 6
        },
        end: {
          line: 96,
          column: 12
        }
      },
      "16": {
        start: {
          line: 99,
          column: 2
        },
        end: {
          line: 99,
          column: 20
        }
      },
      "17": {
        start: {
          line: 103,
          column: 2
        },
        end: {
          line: 105,
          column: 3
        }
      },
      "18": {
        start: {
          line: 104,
          column: 4
        },
        end: {
          line: 104,
          column: 17
        }
      },
      "19": {
        start: {
          line: 107,
          column: 2
        },
        end: {
          line: 115,
          column: 3
        }
      },
      "20": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 111,
          column: 17
        }
      },
      "21": {
        start: {
          line: 114,
          column: 6
        },
        end: {
          line: 114,
          column: 19
        }
      },
      "22": {
        start: {
          line: 132,
          column: 19
        },
        end: {
          line: 132,
          column: 39
        }
      },
      "23": {
        start: {
          line: 133,
          column: 2
        },
        end: {
          line: 136,
          column: 3
        }
      },
      "24": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 135,
          column: 15
        }
      },
      "25": {
        start: {
          line: 137,
          column: 2
        },
        end: {
          line: 160,
          column: 4
        }
      },
      "26": {
        start: {
          line: 146,
          column: 6
        },
        end: {
          line: 146,
          column: 50
        }
      },
      "27": {
        start: {
          line: 152,
          column: 8
        },
        end: {
          line: 157,
          column: 10
        }
      },
      "28": {
        start: {
          line: 154,
          column: 12
        },
        end: {
          line: 154,
          column: 66
        }
      },
      "29": {
        start: {
          line: 169,
          column: 2
        },
        end: {
          line: 174,
          column: 4
        }
      }
    },
    fnMap: {
      "0": {
        name: "assembleTransaction",
        decl: {
          start: {
            line: 31,
            column: 16
          },
          end: {
            line: 31,
            column: 35
          }
        },
        loc: {
          start: {
            line: 37,
            column: 22
          },
          end: {
            line: 100,
            column: 1
          }
        },
        line: 37
      },
      "1": {
        name: "isSorobanTransaction",
        decl: {
          start: {
            line: 102,
            column: 9
          },
          end: {
            line: 102,
            column: 29
          }
        },
        loc: {
          start: {
            line: 102,
            column: 56
          },
          end: {
            line: 116,
            column: 1
          }
        },
        line: 102
      },
      "2": {
        name: "parseRawSimulation",
        decl: {
          start: {
            line: 127,
            column: 16
          },
          end: {
            line: 127,
            column: 34
          }
        },
        loc: {
          start: {
            line: 131,
            column: 42
          },
          end: {
            line: 161,
            column: 1
          }
        },
        line: 131
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 145,
            column: 35
          },
          end: {
            line: 145,
            column: 36
          }
        },
        loc: {
          start: {
            line: 146,
            column: 6
          },
          end: {
            line: 146,
            column: 50
          }
        },
        line: 146
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 151,
            column: 31
          },
          end: {
            line: 151,
            column: 32
          }
        },
        loc: {
          start: {
            line: 151,
            column: 43
          },
          end: {
            line: 158,
            column: 7
          }
        },
        line: 151
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 153,
            column: 40
          },
          end: {
            line: 153,
            column: 41
          }
        },
        loc: {
          start: {
            line: 154,
            column: 12
          },
          end: {
            line: 154,
            column: 66
          }
        },
        line: 154
      },
      "6": {
        name: "isSimulationRaw",
        decl: {
          start: {
            line: 163,
            column: 9
          },
          end: {
            line: 163,
            column: 24
          }
        },
        loc: {
          start: {
            line: 167,
            column: 52
          },
          end: {
            line: 175,
            column: 1
          }
        },
        line: 167
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 45,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 38
      },
      "1": {
        loc: {
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 47,
            column: 2
          },
          end: {
            line: 53,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 47
      },
      "2": {
        loc: {
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 56
      },
      "3": {
        loc: {
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 60,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 60,
            column: 24
          },
          end: {
            line: 60,
            column: 41
          }
        }, {
          start: {
            line: 60,
            column: 45
          },
          end: {
            line: 60,
            column: 46
          }
        }],
        line: 60
      },
      "4": {
        loc: {
          start: {
            line: 61,
            column: 28
          },
          end: {
            line: 61,
            column: 67
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 61,
            column: 28
          },
          end: {
            line: 61,
            column: 62
          }
        }, {
          start: {
            line: 61,
            column: 66
          },
          end: {
            line: 61,
            column: 67
          }
        }],
        line: 61
      },
      "5": {
        loc: {
          start: {
            line: 77,
            column: 2
          },
          end: {
            line: 97,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 78,
            column: 4
          },
          end: {
            line: 96,
            column: 12
          }
        }],
        line: 77
      },
      "6": {
        loc: {
          start: {
            line: 83,
            column: 27
          },
          end: {
            line: 83,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 83,
            column: 27
          },
          end: {
            line: 83,
            column: 40
          }
        }, {
          start: {
            line: 83,
            column: 44
          },
          end: {
            line: 83,
            column: 46
          }
        }],
        line: 83
      },
      "7": {
        loc: {
          start: {
            line: 93,
            column: 16
          },
          end: {
            line: 93,
            column: 78
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 93,
            column: 42
          },
          end: {
            line: 93,
            column: 54
          }
        }, {
          start: {
            line: 93,
            column: 57
          },
          end: {
            line: 93,
            column: 78
          }
        }],
        line: 93
      },
      "8": {
        loc: {
          start: {
            line: 103,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 103,
            column: 2
          },
          end: {
            line: 105,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 103
      },
      "9": {
        loc: {
          start: {
            line: 107,
            column: 2
          },
          end: {
            line: 115,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 108,
            column: 4
          },
          end: {
            line: 108,
            column: 30
          }
        }, {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 35
          }
        }, {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 111,
            column: 17
          }
        }, {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 114,
            column: 19
          }
        }],
        line: 107
      },
      "10": {
        loc: {
          start: {
            line: 133,
            column: 2
          },
          end: {
            line: 136,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 133,
            column: 2
          },
          end: {
            line: 136,
            column: 3
          }
        }, {
          start: {
            line: undefined,
            column: undefined
          },
          end: {
            line: undefined,
            column: undefined
          }
        }],
        line: 133
      },
      "11": {
        loc: {
          start: {
            line: 143,
            column: 6
          },
          end: {
            line: 143,
            column: 66
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 143,
            column: 35
          },
          end: {
            line: 143,
            column: 44
          }
        }, {
          start: {
            line: 143,
            column: 47
          },
          end: {
            line: 143,
            column: 66
          }
        }],
        line: 143
      },
      "12": {
        loc: {
          start: {
            line: 145,
            column: 13
          },
          end: {
            line: 145,
            column: 29
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 145,
            column: 13
          },
          end: {
            line: 145,
            column: 23
          }
        }, {
          start: {
            line: 145,
            column: 27
          },
          end: {
            line: 145,
            column: 29
          }
        }],
        line: 145
      },
      "13": {
        loc: {
          start: {
            line: 148,
            column: 8
          },
          end: {
            line: 148,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 148,
            column: 8
          },
          end: {
            line: 148,
            column: 31
          }
        }, {
          start: {
            line: 148,
            column: 35
          },
          end: {
            line: 148,
            column: 55
          }
        }],
        line: 148
      },
      "14": {
        loc: {
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 159,
            column: 5
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 150,
            column: 8
          },
          end: {
            line: 150,
            column: 38
          }
        }, {
          start: {
            line: 150,
            column: 42
          },
          end: {
            line: 159,
            column: 5
          }
        }],
        line: 150
      },
      "15": {
        loc: {
          start: {
            line: 150,
            column: 9
          },
          end: {
            line: 150,
            column: 26
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 150,
            column: 9
          },
          end: {
            line: 150,
            column: 20
          }
        }, {
          start: {
            line: 150,
            column: 24
          },
          end: {
            line: 150,
            column: 26
          }
        }],
        line: 150
      },
      "16": {
        loc: {
          start: {
            line: 153,
            column: 17
          },
          end: {
            line: 153,
            column: 34
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 153,
            column: 17
          },
          end: {
            line: 153,
            column: 28
          }
        }, {
          start: {
            line: 153,
            column: 32
          },
          end: {
            line: 153,
            column: 34
          }
        }],
        line: 153
      },
      "17": {
        loc: {
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 173,
            column: 20
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 170,
            column: 4
          },
          end: {
            line: 170,
            column: 72
          }
        }, {
          start: {
            line: 171,
            column: 5
          },
          end: {
            line: 171,
            column: 44
          }
        }, {
          start: {
            line: 172,
            column: 6
          },
          end: {
            line: 173,
            column: 19
          }
        }],
        line: 170
      },
      "18": {
        loc: {
          start: {
            line: 172,
            column: 7
          },
          end: {
            line: 172,
            column: 71
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 172,
            column: 7
          },
          end: {
            line: 172,
            column: 65
          }
        }, {
          start: {
            line: 172,
            column: 69
          },
          end: {
            line: 172,
            column: 71
          }
        }],
        line: 172
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0, 0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0, 0],
      "18": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c8549a348e1cf4328590764bede23bcc91ed97ef"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pyc7w5sbb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_pyc7w5sbb();
/**
 * Combines the given raw transaction alongside the simulation results.
 *
 * @param raw   the initial transaction, w/o simulation applied
 * @param networkPassphrase  the network this simulation applies to (see
 *    {@link Networks} for options)
 * @param simulation  the Soroban RPC simulation result (see
 *    {@link Server.simulateTransaction})
 *
 * @returns a new, cloned transaction with the proper auth and resource (fee,
 *    footprint) simulation data applied
 *
 * @note if the given transaction already has authorization entries in a host
 *    function invocation (see {@link Operation.invokeHostFunction}), **the
 *    simulation entries are ignored**.
 *
 * @see {Server.simulateTransaction}
 * @see {Server.prepareTransaction}
 */
function assembleTransaction(raw, networkPassphrase, simulation) {
  cov_pyc7w5sbb().f[0]++;
  cov_pyc7w5sbb().s[0]++;
  if ("innerTransaction" in raw) {
    cov_pyc7w5sbb().b[0][0]++;
    cov_pyc7w5sbb().s[1]++;
    // TODO: Handle feebump transactions
    return assembleTransaction(raw.innerTransaction, networkPassphrase, simulation);
  } else {
    cov_pyc7w5sbb().b[0][1]++;
  }
  cov_pyc7w5sbb().s[2]++;
  if (!isSorobanTransaction(raw)) {
    cov_pyc7w5sbb().b[1][0]++;
    cov_pyc7w5sbb().s[3]++;
    throw new TypeError("unsupported transaction: must contain exactly one " + "invokeHostFunction, bumpFootprintExpiration, or restoreFootprint " + "operation");
  } else {
    cov_pyc7w5sbb().b[1][1]++;
  }
  const coalesced = (cov_pyc7w5sbb().s[4]++, parseRawSimulation(simulation));
  cov_pyc7w5sbb().s[5]++;
  if (!coalesced.result) {
    cov_pyc7w5sbb().b[2][0]++;
    cov_pyc7w5sbb().s[6]++;
    throw new Error(`simulation incorrect: ${JSON.stringify(coalesced)}`);
  } else {
    cov_pyc7w5sbb().b[2][1]++;
  }
  const classicFeeNum = (cov_pyc7w5sbb().s[7]++, (cov_pyc7w5sbb().b[3][0]++, parseInt(raw.fee)) || (cov_pyc7w5sbb().b[3][1]++, 0));
  const minResourceFeeNum = (cov_pyc7w5sbb().s[8]++, (cov_pyc7w5sbb().b[4][0]++, parseInt(coalesced.minResourceFee)) || (cov_pyc7w5sbb().b[4][1]++, 0));
  const txnBuilder = (cov_pyc7w5sbb().s[9]++, _stellarBase.TransactionBuilder.cloneFrom(raw, {
    // automatically update the tx fee that will be set on the resulting tx to
    // the sum of 'classic' fee provided from incoming tx.fee and minResourceFee
    // provided by simulation.
    //
    // 'classic' tx fees are measured as the product of tx.fee * 'number of
    // operations', In soroban contract tx, there can only be single operation
    // in the tx, so can make simplification of total classic fees for the
    // soroban transaction will be equal to incoming tx.fee + minResourceFee.
    fee: (classicFeeNum + minResourceFeeNum).toString(),
    // apply the pre-built Soroban Tx Data from simulation onto the Tx
    sorobanData: coalesced.transactionData.build(),
    networkPassphrase
  }));
  cov_pyc7w5sbb().s[10]++;
  switch (raw.operations[0].type) {
    case "invokeHostFunction":
      cov_pyc7w5sbb().b[5][0]++;
      cov_pyc7w5sbb().s[11]++;
      // In this case, we don't want to clone the operation, so we drop it.
      txnBuilder.clearOperations();
      const invokeOp = (cov_pyc7w5sbb().s[12]++, raw.operations[0]);
      const existingAuth = (cov_pyc7w5sbb().s[13]++, (cov_pyc7w5sbb().b[6][0]++, invokeOp.auth) ?? (cov_pyc7w5sbb().b[6][1]++, []));
      cov_pyc7w5sbb().s[14]++;
      txnBuilder.addOperation(_stellarBase.Operation.invokeHostFunction({
        source: invokeOp.source,
        func: invokeOp.func,
        // if auth entries are already present, we consider this "advanced
        // usage" and disregard ALL auth entries from the simulation
        //
        // the intuition is "if auth exists, this tx has probably been
        // simulated before"
        auth: existingAuth.length > 0 ? (cov_pyc7w5sbb().b[7][0]++, existingAuth) : (cov_pyc7w5sbb().b[7][1]++, coalesced.result.auth)
      }));
      cov_pyc7w5sbb().s[15]++;
      break;
  }
  cov_pyc7w5sbb().s[16]++;
  return txnBuilder;
}
function isSorobanTransaction(tx) {
  cov_pyc7w5sbb().f[1]++;
  cov_pyc7w5sbb().s[17]++;
  if (tx.operations.length !== 1) {
    cov_pyc7w5sbb().b[8][0]++;
    cov_pyc7w5sbb().s[18]++;
    return false;
  } else {
    cov_pyc7w5sbb().b[8][1]++;
  }
  cov_pyc7w5sbb().s[19]++;
  switch (tx.operations[0].type) {
    case "invokeHostFunction":
      cov_pyc7w5sbb().b[9][0]++;
    case "bumpFootprintExpiration":
      cov_pyc7w5sbb().b[9][1]++;
    case "restoreFootprint":
      cov_pyc7w5sbb().b[9][2]++;
      cov_pyc7w5sbb().s[20]++;
      return true;
    default:
      cov_pyc7w5sbb().b[9][3]++;
      cov_pyc7w5sbb().s[21]++;
      return false;
  }
}

/**
 * Converts a raw response schema into one with parsed XDR fields and a
 * simplified interface.
 *
 * @param raw   the raw response schema (parsed ones are allowed, best-effort
 *    detected, and returned untouched)
 *
 * @returns the original parameter (if already parsed), parsed otherwise
 */
function parseRawSimulation(sim) {
  var _sim$results;
  cov_pyc7w5sbb().f[2]++;
  const looksRaw = (cov_pyc7w5sbb().s[22]++, isSimulationRaw(sim));
  cov_pyc7w5sbb().s[23]++;
  if (!looksRaw) {
    cov_pyc7w5sbb().b[10][0]++;
    cov_pyc7w5sbb().s[24]++;
    // Gordon Ramsey in shambles
    return sim;
  } else {
    cov_pyc7w5sbb().b[10][1]++;
  }
  cov_pyc7w5sbb().s[25]++;
  return {
    id: sim.id,
    minResourceFee: sim.minResourceFee,
    latestLedger: sim.latestLedger,
    cost: sim.cost,
    transactionData: new _stellarBase.SorobanDataBuilder(sim.transactionData === "" ? (cov_pyc7w5sbb().b[11][0]++, undefined) : (cov_pyc7w5sbb().b[11][1]++, sim.transactionData)),
    events: ((cov_pyc7w5sbb().b[12][0]++, sim.events) ?? (cov_pyc7w5sbb().b[12][1]++, [])).map(event => {
      cov_pyc7w5sbb().f[3]++;
      cov_pyc7w5sbb().s[26]++;
      return _stellarBase.xdr.DiagnosticEvent.fromXDR(event, "base64");
    }),
    ...((cov_pyc7w5sbb().b[13][0]++, sim.error !== undefined) && (cov_pyc7w5sbb().b[13][1]++, {
      error: sim.error
    })),
    // only if present
    // ^ XOR v
    ...((cov_pyc7w5sbb().b[14][0]++, ((cov_pyc7w5sbb().b[15][0]++, sim.results) ?? (cov_pyc7w5sbb().b[15][1]++, [])).length > 0) && (cov_pyc7w5sbb().b[14][1]++, {
      result: (_sim$results = sim.results) === null || _sim$results === void 0 ? void 0 : _sim$results.map(result => {
        cov_pyc7w5sbb().f[4]++;
        cov_pyc7w5sbb().s[27]++;
        return {
          auth: ((cov_pyc7w5sbb().b[16][0]++, result.auth) ?? (cov_pyc7w5sbb().b[16][1]++, [])).map(entry => {
            cov_pyc7w5sbb().f[5]++;
            cov_pyc7w5sbb().s[28]++;
            return _stellarBase.xdr.SorobanAuthorizationEntry.fromXDR(entry, "base64");
          }),
          retval: _stellarBase.xdr.ScVal.fromXDR(result.xdr, "base64")
        };
      })[0] // only if present
    }))
  };
}

function isSimulationRaw(sim) {
  cov_pyc7w5sbb().f[6]++;
  cov_pyc7w5sbb().s[29]++;
  // lazy check to determine parameter type
  return (cov_pyc7w5sbb().b[17][0]++, sim.result === undefined) || (cov_pyc7w5sbb().b[17][1]++, typeof sim.transactionData === "string") || (cov_pyc7w5sbb().b[17][2]++, ((cov_pyc7w5sbb().b[18][0]++, sim.results) ?? (cov_pyc7w5sbb().b[18][1]++, [])).length > 0);
}