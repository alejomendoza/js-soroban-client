"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = post;
exports.postObject = postObject;
var _axios = _interopRequireDefault(require("./axios"));
var _utils = require("./utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function cov_1s7d7uzbi1() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/jsonrpc.ts";
  var hash = "0e714d7d2b67e7bdbc5ceac4385c5e4fca308cdc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/jsonrpc.ts",
    statementMap: {
      "0": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "1": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 18
        }
      },
      "2": {
        start: {
          line: 41,
          column: 19
        },
        end: {
          line: 47,
          column: 4
        }
      },
      "3": {
        start: {
          line: 48,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "4": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 30
        }
      },
      "5": {
        start: {
          line: 51,
          column: 4
        },
        end: {
          line: 51,
          column: 33
        }
      },
      "6": {
        start: {
          line: 63,
          column: 19
        },
        end: {
          line: 69,
          column: 4
        }
      },
      "7": {
        start: {
          line: 70,
          column: 2
        },
        end: {
          line: 74,
          column: 3
        }
      },
      "8": {
        start: {
          line: 71,
          column: 4
        },
        end: {
          line: 71,
          column: 30
        }
      },
      "9": {
        start: {
          line: 73,
          column: 4
        },
        end: {
          line: 73,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "post",
        decl: {
          start: {
            line: 33,
            column: 22
          },
          end: {
            line: 33,
            column: 26
          }
        },
        loc: {
          start: {
            line: 37,
            column: 14
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 37
      },
      "1": {
        name: "postObject",
        decl: {
          start: {
            line: 58,
            column: 22
          },
          end: {
            line: 58,
            column: 32
          }
        },
        loc: {
          start: {
            line: 62,
            column: 14
          },
          end: {
            line: 75,
            column: 1
          }
        },
        line: 62
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
            line: 40,
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
            line: 40,
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
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 12
          }
        }, {
          start: {
            line: 38,
            column: 16
          },
          end: {
            line: 38,
            column: 33
          }
        }],
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 48,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        }, {
          start: {
            line: 50,
            column: 9
          },
          end: {
            line: 52,
            column: 3
          }
        }],
        line: 48
      },
      "3": {
        loc: {
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 70,
            column: 2
          },
          end: {
            line: 74,
            column: 3
          }
        }, {
          start: {
            line: 72,
            column: 9
          },
          end: {
            line: 74,
            column: 3
          }
        }],
        line: 70
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0e714d7d2b67e7bdbc5ceac4385c5e4fca308cdc"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1s7d7uzbi1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1s7d7uzbi1();
/**
 * Sends the jsonrpc 'params' as an array.
 */
async function post(url, method, ...params) {
  cov_1s7d7uzbi1().f[0]++;
  cov_1s7d7uzbi1().s[0]++;
  if ((cov_1s7d7uzbi1().b[1][0]++, params) && (cov_1s7d7uzbi1().b[1][1]++, params.length < 1)) {
    cov_1s7d7uzbi1().b[0][0]++;
    cov_1s7d7uzbi1().s[1]++;
    params = null;
  } else {
    cov_1s7d7uzbi1().b[0][1]++;
  }
  const response = (cov_1s7d7uzbi1().s[2]++, await _axios.default.post(url, {
    jsonrpc: "2.0",
    // TODO: Generate a unique request id
    id: 1,
    method,
    params
  }));
  cov_1s7d7uzbi1().s[3]++;
  if ((0, _utils.hasOwnProperty)(response.data, "error")) {
    cov_1s7d7uzbi1().b[2][0]++;
    cov_1s7d7uzbi1().s[4]++;
    throw response.data.error;
  } else {
    var _response$data;
    cov_1s7d7uzbi1().b[2][1]++;
    cov_1s7d7uzbi1().s[5]++;
    return (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.result;
  }
}

/**
 * Sends the jsonrpc 'params' as the single 'param' obj, no array wrapper is applied.
 */
async function postObject(url, method, param) {
  cov_1s7d7uzbi1().f[1]++;
  const response = (cov_1s7d7uzbi1().s[6]++, await _axios.default.post(url, {
    jsonrpc: "2.0",
    // TODO: Generate a unique request id
    id: 1,
    method,
    params: param
  }));
  cov_1s7d7uzbi1().s[7]++;
  if ((0, _utils.hasOwnProperty)(response.data, "error")) {
    cov_1s7d7uzbi1().b[3][0]++;
    cov_1s7d7uzbi1().s[8]++;
    throw response.data.error;
  } else {
    var _response$data2;
    cov_1s7d7uzbi1().b[3][1]++;
    cov_1s7d7uzbi1().s[9]++;
    return (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.result;
  }
}