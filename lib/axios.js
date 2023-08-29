"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SERVER_TIME_MAP = void 0;
exports.getCurrentServerTime = getCurrentServerTime;
var _axios = _interopRequireDefault(require("axios"));
var _axiosFetchAdapter = _interopRequireDefault(require("@haverstack/axios-fetch-adapter"));
var _urijs = _interopRequireDefault(require("urijs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function cov_a2rhukmpo() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/axios.ts";
  var hash = "4795a19984ec4336a9f592971caa6d16ab371f80";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/axios.ts",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 7,
          column: 50
        }
      },
      "1": {
        start: {
          line: 26,
          column: 59
        },
        end: {
          line: 26,
          column: 61
        }
      },
      "2": {
        start: {
          line: 28,
          column: 20
        },
        end: {
          line: 34,
          column: 2
        }
      },
      "3": {
        start: {
          line: 37,
          column: 2
        },
        end: {
          line: 37,
          column: 31
        }
      },
      "4": {
        start: {
          line: 40,
          column: 0
        },
        end: {
          line: 55,
          column: 3
        }
      },
      "5": {
        start: {
          line: 43,
          column: 19
        },
        end: {
          line: 43,
          column: 55
        }
      },
      "6": {
        start: {
          line: 44,
          column: 21
        },
        end: {
          line: 44,
          column: 66
        }
      },
      "7": {
        start: {
          line: 45,
          column: 28
        },
        end: {
          line: 45,
          column: 60
        }
      },
      "8": {
        start: {
          line: 47,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "9": {
        start: {
          line: 48,
          column: 4
        },
        end: {
          line: 51,
          column: 6
        }
      },
      "10": {
        start: {
          line: 54,
          column: 2
        },
        end: {
          line: 54,
          column: 18
        }
      },
      "11": {
        start: {
          line: 69,
          column: 16
        },
        end: {
          line: 69,
          column: 41
        }
      },
      "12": {
        start: {
          line: 71,
          column: 2
        },
        end: {
          line: 73,
          column: 3
        }
      },
      "13": {
        start: {
          line: 72,
          column: 4
        },
        end: {
          line: 72,
          column: 16
        }
      },
      "14": {
        start: {
          line: 75,
          column: 44
        },
        end: {
          line: 75,
          column: 49
        }
      },
      "15": {
        start: {
          line: 76,
          column: 22
        },
        end: {
          line: 76,
          column: 54
        }
      },
      "16": {
        start: {
          line: 79,
          column: 2
        },
        end: {
          line: 81,
          column: 3
        }
      },
      "17": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 80,
          column: 16
        }
      },
      "18": {
        start: {
          line: 83,
          column: 2
        },
        end: {
          line: 83,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "_toSeconds",
        decl: {
          start: {
            line: 36,
            column: 9
          },
          end: {
            line: 36,
            column: 19
          }
        },
        loc: {
          start: {
            line: 36,
            column: 40
          },
          end: {
            line: 38,
            column: 1
          }
        },
        line: 36
      },
      "1": {
        name: "interceptorHorizonResponse",
        decl: {
          start: {
            line: 40,
            column: 47
          },
          end: {
            line: 40,
            column: 73
          }
        },
        loc: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 55,
            column: 1
          }
        },
        line: 42
      },
      "2": {
        name: "getCurrentServerTime",
        decl: {
          start: {
            line: 68,
            column: 16
          },
          end: {
            line: 68,
            column: 36
          }
        },
        loc: {
          start: {
            line: 68,
            column: 70
          },
          end: {
            line: 84,
            column: 1
          }
        },
        line: 68
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 47,
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
            line: 47,
            column: 2
          },
          end: {
            line: 52,
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
      "1": {
        loc: {
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 73,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 71,
            column: 2
          },
          end: {
            line: 73,
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
        line: 71
      },
      "2": {
        loc: {
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 71,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 71,
            column: 6
          },
          end: {
            line: 71,
            column: 12
          }
        }, {
          start: {
            line: 71,
            column: 16
          },
          end: {
            line: 71,
            column: 40
          }
        }, {
          start: {
            line: 71,
            column: 44
          },
          end: {
            line: 71,
            column: 61
          }
        }],
        line: 71
      },
      "3": {
        loc: {
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 81,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 79,
            column: 2
          },
          end: {
            line: 81,
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
        line: 79
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
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0],
      "3": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4795a19984ec4336a9f592971caa6d16ab371f80"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_a2rhukmpo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_a2rhukmpo();
/* tslint:disable-next-line:no-var-requires */
const version = (cov_a2rhukmpo().s[0]++, require("../package.json").version);
/**
 * keep a local map of server times
 * (export this purely for testing purposes)
 *
 * each entry will map the server domain to the last-known time and the local
 * time it was recorded, ex:
 *
 *     "localhost:8000": {
 *       serverTime: 1552513039,
 *       localTimeRecorded: 1552513052
 *     }
 */
const SERVER_TIME_MAP = (cov_a2rhukmpo().s[1]++, {});
exports.SERVER_TIME_MAP = SERVER_TIME_MAP;
const AxiosClient = (cov_a2rhukmpo().s[2]++, _axios.default.create({
  adapter: _axiosFetchAdapter.default,
  headers: {
    "X-Client-Name": "js-soroban-client",
    "X-Client-Version": version
  }
}));
function _toSeconds(ms) {
  cov_a2rhukmpo().f[0]++;
  cov_a2rhukmpo().s[3]++;
  return Math.floor(ms / 1000);
}
cov_a2rhukmpo().s[4]++;
AxiosClient.interceptors.response.use(function interceptorHorizonResponse(response) {
  cov_a2rhukmpo().f[1]++;
  const hostname = (cov_a2rhukmpo().s[5]++, (0, _urijs.default)(response.config.url).hostname());
  const serverTime = (cov_a2rhukmpo().s[6]++, _toSeconds(Date.parse(response.headers.date)));
  const localTimeRecorded = (cov_a2rhukmpo().s[7]++, _toSeconds(new Date().getTime()));
  cov_a2rhukmpo().s[8]++;
  if (!isNaN(serverTime)) {
    cov_a2rhukmpo().b[0][0]++;
    cov_a2rhukmpo().s[9]++;
    SERVER_TIME_MAP[hostname] = {
      serverTime,
      localTimeRecorded
    };
  } else {
    cov_a2rhukmpo().b[0][1]++;
  }
  cov_a2rhukmpo().s[10]++;
  return response;
});
var _default = AxiosClient;
/**
 * Given a hostname, get the current time of that server (i.e., use the last-
 * recorded server time and offset it by the time since then.) If there IS no
 * recorded server time, or it's been 5 minutes since the last, return null.
 * @param {string} hostname Hostname of a Soroban-RPC server.
 * @returns {number} The UNIX timestamp (in seconds, not milliseconds)
 * representing the current time on that server, or `null` if we don't have
 * a record of that time.
 */
exports.default = _default;
function getCurrentServerTime(hostname) {
  cov_a2rhukmpo().f[2]++;
  const entry = (cov_a2rhukmpo().s[11]++, SERVER_TIME_MAP[hostname]);
  cov_a2rhukmpo().s[12]++;
  if ((cov_a2rhukmpo().b[2][0]++, !entry) || (cov_a2rhukmpo().b[2][1]++, !entry.localTimeRecorded) || (cov_a2rhukmpo().b[2][2]++, !entry.serverTime)) {
    cov_a2rhukmpo().b[1][0]++;
    cov_a2rhukmpo().s[13]++;
    return null;
  } else {
    cov_a2rhukmpo().b[1][1]++;
  }
  const {
    serverTime,
    localTimeRecorded
  } = (cov_a2rhukmpo().s[14]++, entry);
  const currentTime = (cov_a2rhukmpo().s[15]++, _toSeconds(new Date().getTime()));

  // if it's been more than 5 minutes from the last time, then null it out
  cov_a2rhukmpo().s[16]++;
  if (currentTime - localTimeRecorded > 60 * 5) {
    cov_a2rhukmpo().b[3][0]++;
    cov_a2rhukmpo().s[17]++;
    return null;
  } else {
    cov_a2rhukmpo().b[3][1]++;
  }
  cov_a2rhukmpo().s[18]++;
  return currentTime - localTimeRecorded + serverTime;
}