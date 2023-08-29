"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Server = exports.SUBMIT_TRANSACTION_TIMEOUT = exports.Durability = void 0;
var _stellarBase = require("stellar-base");
var _urijs = _interopRequireDefault(require("urijs"));
var _axios = _interopRequireDefault(require("./axios"));
var jsonrpc = _interopRequireWildcard(require("./jsonrpc"));
var _soroban_rpc = require("./soroban_rpc");
var _transaction = require("./transaction");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function cov_2r237l5dck() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/server.ts";
  var hash = "a646809db18da50facf3d5c5e928beb29b73b5bf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/server.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 42
        },
        end: {
          line: 19,
          column: 51
        }
      },
      "1": {
        start: {
          line: 59,
          column: 4
        },
        end: {
          line: 59,
          column: 36
        }
      },
      "2": {
        start: {
          line: 61,
          column: 31
        },
        end: {
          line: 61,
          column: 33
        }
      },
      "3": {
        start: {
          line: 63,
          column: 4
        },
        end: {
          line: 65,
          column: 5
        }
      },
      "4": {
        start: {
          line: 64,
          column: 6
        },
        end: {
          line: 64,
          column: 49
        }
      },
      "5": {
        start: {
          line: 66,
          column: 4
        },
        end: {
          line: 68,
          column: 5
        }
      },
      "6": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 55
        }
      },
      "7": {
        start: {
          line: 69,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "8": {
        start: {
          line: 70,
          column: 6
        },
        end: {
          line: 74,
          column: 9
        }
      },
      "9": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 70
        }
      },
      "10": {
        start: {
          line: 73,
          column: 8
        },
        end: {
          line: 73,
          column: 22
        }
      },
      "11": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 79,
          column: 5
        }
      },
      "12": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 71
        }
      },
      "13": {
        start: {
          line: 97,
          column: 22
        },
        end: {
          line: 103,
          column: 21
        }
      },
      "14": {
        start: {
          line: 104,
          column: 54
        },
        end: {
          line: 108,
          column: 5
        }
      },
      "15": {
        start: {
          line: 109,
          column: 26
        },
        end: {
          line: 109,
          column: 44
        }
      },
      "16": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 115,
          column: 5
        }
      },
      "17": {
        start: {
          line: 111,
          column: 6
        },
        end: {
          line: 114,
          column: 9
        }
      },
      "18": {
        start: {
          line: 116,
          column: 28
        },
        end: {
          line: 116,
          column: 48
        }
      },
      "19": {
        start: {
          line: 117,
          column: 25
        },
        end: {
          line: 120,
          column: 15
        }
      },
      "20": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 122,
          column: 66
        }
      },
      "21": {
        start: {
          line: 136,
          column: 4
        },
        end: {
          line: 139,
          column: 6
        }
      },
      "22": {
        start: {
          line: 181,
          column: 4
        },
        end: {
          line: 189,
          column: 5
        }
      },
      "23": {
        start: {
          line: 182,
          column: 6
        },
        end: {
          line: 182,
          column: 65
        }
      },
      "24": {
        start: {
          line: 183,
          column: 11
        },
        end: {
          line: 189,
          column: 5
        }
      },
      "25": {
        start: {
          line: 184,
          column: 6
        },
        end: {
          line: 184,
          column: 41
        }
      },
      "26": {
        start: {
          line: 185,
          column: 11
        },
        end: {
          line: 189,
          column: 5
        }
      },
      "27": {
        start: {
          line: 186,
          column: 6
        },
        end: {
          line: 186,
          column: 51
        }
      },
      "28": {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 188,
          column: 64
        }
      },
      "29": {
        start: {
          line: 192,
          column: 4
        },
        end: {
          line: 203,
          column: 5
        }
      },
      "30": {
        start: {
          line: 194,
          column: 8
        },
        end: {
          line: 194,
          column: 63
        }
      },
      "31": {
        start: {
          line: 195,
          column: 8
        },
        end: {
          line: 195,
          column: 14
        }
      },
      "32": {
        start: {
          line: 198,
          column: 8
        },
        end: {
          line: 198,
          column: 64
        }
      },
      "33": {
        start: {
          line: 199,
          column: 8
        },
        end: {
          line: 199,
          column: 14
        }
      },
      "34": {
        start: {
          line: 202,
          column: 8
        },
        end: {
          line: 202,
          column: 65
        }
      },
      "35": {
        start: {
          line: 205,
          column: 30
        },
        end: {
          line: 212,
          column: 21
        }
      },
      "36": {
        start: {
          line: 214,
          column: 4
        },
        end: {
          line: 233,
          column: 9
        }
      },
      "37": {
        start: {
          line: 221,
          column: 30
        },
        end: {
          line: 221,
          column: 52
        }
      },
      "38": {
        start: {
          line: 222,
          column: 8
        },
        end: {
          line: 231,
          column: 9
        }
      },
      "39": {
        start: {
          line: 223,
          column: 10
        },
        end: {
          line: 230,
          column: 13
        }
      },
      "40": {
        start: {
          line: 232,
          column: 8
        },
        end: {
          line: 232,
          column: 32
        }
      },
      "41": {
        start: {
          line: 268,
          column: 4
        },
        end: {
          line: 272,
          column: 6
        }
      },
      "42": {
        start: {
          line: 271,
          column: 22
        },
        end: {
          line: 271,
          column: 39
        }
      },
      "43": {
        start: {
          line: 300,
          column: 16
        },
        end: {
          line: 304,
          column: 5
        }
      },
      "44": {
        start: {
          line: 309,
          column: 8
        },
        end: {
          line: 309,
          column: 17
        }
      },
      "45": {
        start: {
          line: 311,
          column: 4
        },
        end: {
          line: 329,
          column: 5
        }
      },
      "46": {
        start: {
          line: 312,
          column: 19
        },
        end: {
          line: 312,
          column: 76
        }
      },
      "47": {
        start: {
          line: 313,
          column: 6
        },
        end: {
          line: 328,
          column: 8
        }
      },
      "48": {
        start: {
          line: 331,
          column: 54
        },
        end: {
          line: 338,
          column: 5
        }
      },
      "49": {
        start: {
          line: 340,
          column: 4
        },
        end: {
          line: 340,
          column: 18
        }
      },
      "50": {
        start: {
          line: 389,
          column: 4
        },
        end: {
          line: 396,
          column: 7
        }
      },
      "51": {
        start: {
          line: 414,
          column: 4
        },
        end: {
          line: 414,
          column: 71
        }
      },
      "52": {
        start: {
          line: 432,
          column: 4
        },
        end: {
          line: 432,
          column: 76
        }
      },
      "53": {
        start: {
          line: 489,
          column: 4
        },
        end: {
          line: 495,
          column: 46
        }
      },
      "54": {
        start: {
          line: 495,
          column: 21
        },
        end: {
          line: 495,
          column: 44
        }
      },
      "55": {
        start: {
          line: 578,
          column: 42
        },
        end: {
          line: 583,
          column: 6
        }
      },
      "56": {
        start: {
          line: 584,
          column: 4
        },
        end: {
          line: 586,
          column: 5
        }
      },
      "57": {
        start: {
          line: 585,
          column: 6
        },
        end: {
          line: 585,
          column: 30
        }
      },
      "58": {
        start: {
          line: 587,
          column: 4
        },
        end: {
          line: 589,
          column: 5
        }
      },
      "59": {
        start: {
          line: 588,
          column: 6
        },
        end: {
          line: 588,
          column: 55
        }
      },
      "60": {
        start: {
          line: 591,
          column: 4
        },
        end: {
          line: 591,
          column: 77
        }
      },
      "61": {
        start: {
          line: 647,
          column: 4
        },
        end: {
          line: 651,
          column: 6
        }
      },
      "62": {
        start: {
          line: 682,
          column: 20
        },
        end: {
          line: 682,
          column: 79
        }
      },
      "63": {
        start: {
          line: 683,
          column: 4
        },
        end: {
          line: 683,
          column: 74
        }
      },
      "64": {
        start: {
          line: 684,
          column: 4
        },
        end: {
          line: 686,
          column: 5
        }
      },
      "65": {
        start: {
          line: 685,
          column: 6
        },
        end: {
          line: 685,
          column: 73
        }
      },
      "66": {
        start: {
          line: 687,
          column: 4
        },
        end: {
          line: 705,
          column: 5
        }
      },
      "67": {
        start: {
          line: 688,
          column: 23
        },
        end: {
          line: 690,
          column: 7
        }
      },
      "68": {
        start: {
          line: 691,
          column: 19
        },
        end: {
          line: 694,
          column: 7
        }
      },
      "69": {
        start: {
          line: 695,
          column: 23
        },
        end: {
          line: 695,
          column: 72
        }
      },
      "70": {
        start: {
          line: 696,
          column: 6
        },
        end: {
          line: 696,
          column: 44
        }
      },
      "71": {
        start: {
          line: 698,
          column: 6
        },
        end: {
          line: 703,
          column: 7
        }
      },
      "72": {
        start: {
          line: 699,
          column: 8
        },
        end: {
          line: 702,
          column: 9
        }
      },
      "73": {
        start: {
          line: 701,
          column: 10
        },
        end: {
          line: 701,
          column: 42
        }
      },
      "74": {
        start: {
          line: 704,
          column: 6
        },
        end: {
          line: 704,
          column: 18
        }
      },
      "75": {
        start: {
          line: 712,
          column: 40
        },
        end: {
          line: 712,
          column: 42
        }
      },
      "76": {
        start: {
          line: 713,
          column: 2
        },
        end: {
          line: 728,
          column: 3
        }
      },
      "77": {
        start: {
          line: 715,
          column: 6
        },
        end: {
          line: 715,
          column: 37
        }
      },
      "78": {
        start: {
          line: 716,
          column: 6
        },
        end: {
          line: 716,
          column: 12
        }
      },
      "79": {
        start: {
          line: 718,
          column: 6
        },
        end: {
          line: 718,
          column: 42
        }
      },
      "80": {
        start: {
          line: 719,
          column: 6
        },
        end: {
          line: 719,
          column: 12
        }
      },
      "81": {
        start: {
          line: 721,
          column: 6
        },
        end: {
          line: 721,
          column: 42
        }
      },
      "82": {
        start: {
          line: 722,
          column: 6
        },
        end: {
          line: 722,
          column: 12
        }
      },
      "83": {
        start: {
          line: 724,
          column: 6
        },
        end: {
          line: 724,
          column: 42
        }
      },
      "84": {
        start: {
          line: 725,
          column: 6
        },
        end: {
          line: 725,
          column: 12
        }
      },
      "85": {
        start: {
          line: 727,
          column: 6
        },
        end: {
          line: 727,
          column: 66
        }
      },
      "86": {
        start: {
          line: 730,
          column: 2
        },
        end: {
          line: 742,
          column: 3
        }
      },
      "87": {
        start: {
          line: 731,
          column: 4
        },
        end: {
          line: 741,
          column: 5
        }
      },
      "88": {
        start: {
          line: 732,
          column: 6
        },
        end: {
          line: 734,
          column: 7
        }
      },
      "89": {
        start: {
          line: 733,
          column: 8
        },
        end: {
          line: 733,
          column: 17
        }
      },
      "90": {
        start: {
          line: 735,
          column: 19
        },
        end: {
          line: 735,
          column: 37
        }
      },
      "91": {
        start: {
          line: 736,
          column: 6
        },
        end: {
          line: 738,
          column: 7
        }
      },
      "92": {
        start: {
          line: 737,
          column: 8
        },
        end: {
          line: 737,
          column: 17
        }
      },
      "93": {
        start: {
          line: 740,
          column: 6
        },
        end: {
          line: 740,
          column: 48
        }
      },
      "94": {
        start: {
          line: 743,
          column: 2
        },
        end: {
          line: 743,
          column: 55
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 58,
            column: 2
          },
          end: {
            line: 58,
            column: 3
          }
        },
        loc: {
          start: {
            line: 58,
            column: 60
          },
          end: {
            line: 80,
            column: 3
          }
        },
        line: 58
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 70,
            column: 43
          },
          end: {
            line: 70,
            column: 44
          }
        },
        loc: {
          start: {
            line: 70,
            column: 60
          },
          end: {
            line: 74,
            column: 7
          }
        },
        line: 70
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 96,
            column: 2
          },
          end: {
            line: 96,
            column: 3
          }
        },
        loc: {
          start: {
            line: 96,
            column: 61
          },
          end: {
            line: 123,
            column: 3
          }
        },
        line: 96
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 135,
            column: 2
          },
          end: {
            line: 135,
            column: 3
          }
        },
        loc: {
          start: {
            line: 135,
            column: 66
          },
          end: {
            line: 140,
            column: 3
          }
        },
        line: 135
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 174,
            column: 2
          },
          end: {
            line: 174,
            column: 3
          }
        },
        loc: {
          start: {
            line: 178,
            column: 43
          },
          end: {
            line: 234,
            column: 3
          }
        },
        line: 178
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 220,
            column: 12
          },
          end: {
            line: 220,
            column: 13
          }
        },
        loc: {
          start: {
            line: 220,
            column: 26
          },
          end: {
            line: 233,
            column: 7
          }
        },
        line: 220
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 265,
            column: 2
          },
          end: {
            line: 265,
            column: 3
          }
        },
        loc: {
          start: {
            line: 267,
            column: 50
          },
          end: {
            line: 273,
            column: 3
          }
        },
        line: 267
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 271,
            column: 15
          },
          end: {
            line: 271,
            column: 16
          }
        },
        loc: {
          start: {
            line: 271,
            column: 22
          },
          end: {
            line: 271,
            column: 39
          }
        },
        line: 271
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 297,
            column: 2
          },
          end: {
            line: 297,
            column: 3
          }
        },
        loc: {
          start: {
            line: 299,
            column: 48
          },
          end: {
            line: 341,
            column: 3
          }
        },
        line: 299
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 380,
            column: 2
          },
          end: {
            line: 380,
            column: 3
          }
        },
        loc: {
          start: {
            line: 382,
            column: 43
          },
          end: {
            line: 397,
            column: 3
          }
        },
        line: 382
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 413,
            column: 2
          },
          end: {
            line: 413,
            column: 3
          }
        },
        loc: {
          start: {
            line: 413,
            column: 68
          },
          end: {
            line: 415,
            column: 3
          }
        },
        line: 413
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 431,
            column: 2
          },
          end: {
            line: 431,
            column: 3
          }
        },
        loc: {
          start: {
            line: 431,
            column: 78
          },
          end: {
            line: 433,
            column: 3
          }
        },
        line: 431
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 486,
            column: 2
          },
          end: {
            line: 486,
            column: 3
          }
        },
        loc: {
          start: {
            line: 488,
            column: 53
          },
          end: {
            line: 496,
            column: 3
          }
        },
        line: 488
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 495,
            column: 12
          },
          end: {
            line: 495,
            column: 13
          }
        },
        loc: {
          start: {
            line: 495,
            column: 21
          },
          end: {
            line: 495,
            column: 44
          }
        },
        line: 495
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 574,
            column: 2
          },
          end: {
            line: 574,
            column: 3
          }
        },
        loc: {
          start: {
            line: 577,
            column: 47
          },
          end: {
            line: 592,
            column: 3
          }
        },
        line: 577
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 644,
            column: 2
          },
          end: {
            line: 644,
            column: 3
          }
        },
        loc: {
          start: {
            line: 646,
            column: 49
          },
          end: {
            line: 652,
            column: 3
          }
        },
        line: 646
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 678,
            column: 2
          },
          end: {
            line: 678,
            column: 3
          }
        },
        loc: {
          start: {
            line: 681,
            column: 22
          },
          end: {
            line: 706,
            column: 3
          }
        },
        line: 681
      },
      "17": {
        name: "findCreatedAccountSequenceInTransactionMeta",
        decl: {
          start: {
            line: 709,
            column: 9
          },
          end: {
            line: 709,
            column: 52
          }
        },
        loc: {
          start: {
            line: 711,
            column: 10
          },
          end: {
            line: 744,
            column: 1
          }
        },
        line: 711
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 58,
            column: 33
          },
          end: {
            line: 58,
            column: 58
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 58,
            column: 56
          },
          end: {
            line: 58,
            column: 58
          }
        }],
        line: 58
      },
      "1": {
        loc: {
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 65,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 4
          },
          end: {
            line: 65,
            column: 5
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
        line: 63
      },
      "2": {
        loc: {
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 66,
            column: 4
          },
          end: {
            line: 68,
            column: 5
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
        line: 66
      },
      "3": {
        loc: {
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 69,
            column: 4
          },
          end: {
            line: 75,
            column: 5
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
        line: 69
      },
      "4": {
        loc: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 79,
            column: 5
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
        line: 77
      },
      "5": {
        loc: {
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 77,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 77,
            column: 8
          },
          end: {
            line: 77,
            column: 45
          }
        }, {
          start: {
            line: 77,
            column: 49
          },
          end: {
            line: 77,
            column: 64
          }
        }],
        line: 77
      },
      "6": {
        loc: {
          start: {
            line: 109,
            column: 26
          },
          end: {
            line: 109,
            column: 44
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 109,
            column: 26
          },
          end: {
            line: 109,
            column: 38
          }
        }, {
          start: {
            line: 109,
            column: 42
          },
          end: {
            line: 109,
            column: 44
          }
        }],
        line: 109
      },
      "7": {
        loc: {
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 110,
            column: 4
          },
          end: {
            line: 115,
            column: 5
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
        line: 110
      },
      "8": {
        loc: {
          start: {
            line: 177,
            column: 4
          },
          end: {
            line: 177,
            column: 50
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 177,
            column: 29
          },
          end: {
            line: 177,
            column: 50
          }
        }],
        line: 177
      },
      "9": {
        loc: {
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 189,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 181,
            column: 4
          },
          end: {
            line: 189,
            column: 5
          }
        }, {
          start: {
            line: 183,
            column: 11
          },
          end: {
            line: 189,
            column: 5
          }
        }],
        line: 181
      },
      "10": {
        loc: {
          start: {
            line: 183,
            column: 11
          },
          end: {
            line: 189,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 183,
            column: 11
          },
          end: {
            line: 189,
            column: 5
          }
        }, {
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 189,
            column: 5
          }
        }],
        line: 183
      },
      "11": {
        loc: {
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 189,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 185,
            column: 11
          },
          end: {
            line: 189,
            column: 5
          }
        }, {
          start: {
            line: 187,
            column: 11
          },
          end: {
            line: 189,
            column: 5
          }
        }],
        line: 185
      },
      "12": {
        loc: {
          start: {
            line: 192,
            column: 4
          },
          end: {
            line: 203,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 193,
            column: 6
          },
          end: {
            line: 195,
            column: 14
          }
        }, {
          start: {
            line: 197,
            column: 6
          },
          end: {
            line: 199,
            column: 14
          }
        }, {
          start: {
            line: 201,
            column: 6
          },
          end: {
            line: 202,
            column: 65
          }
        }],
        line: 192
      },
      "13": {
        loc: {
          start: {
            line: 221,
            column: 30
          },
          end: {
            line: 221,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 221,
            column: 30
          },
          end: {
            line: 221,
            column: 46
          }
        }, {
          start: {
            line: 221,
            column: 50
          },
          end: {
            line: 221,
            column: 52
          }
        }],
        line: 221
      },
      "14": {
        loc: {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 231,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 231,
            column: 9
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
        line: 222
      },
      "15": {
        loc: {
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 329,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 311,
            column: 4
          },
          end: {
            line: 329,
            column: 5
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
        line: 311
      },
      "16": {
        loc: {
          start: {
            line: 324,
            column: 12
          },
          end: {
            line: 327,
            column: 11
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 324,
            column: 12
          },
          end: {
            line: 324,
            column: 31
          }
        }, {
          start: {
            line: 325,
            column: 10
          },
          end: {
            line: 325,
            column: 42
          }
        }, {
          start: {
            line: 325,
            column: 46
          },
          end: {
            line: 327,
            column: 11
          }
        }],
        line: 324
      },
      "17": {
        loc: {
          start: {
            line: 390,
            column: 15
          },
          end: {
            line: 390,
            column: 36
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 390,
            column: 15
          },
          end: {
            line: 390,
            column: 30
          }
        }, {
          start: {
            line: 390,
            column: 34
          },
          end: {
            line: 390,
            column: 36
          }
        }],
        line: 390
      },
      "18": {
        loc: {
          start: {
            line: 392,
            column: 12
          },
          end: {
            line: 392,
            column: 56
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 392,
            column: 12
          },
          end: {
            line: 392,
            column: 26
          }
        }, {
          start: {
            line: 392,
            column: 30
          },
          end: {
            line: 392,
            column: 56
          }
        }],
        line: 392
      },
      "19": {
        loc: {
          start: {
            line: 393,
            column: 12
          },
          end: {
            line: 393,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 393,
            column: 12
          },
          end: {
            line: 393,
            column: 25
          }
        }, {
          start: {
            line: 393,
            column: 29
          },
          end: {
            line: 393,
            column: 53
          }
        }],
        line: 393
      },
      "20": {
        loc: {
          start: {
            line: 395,
            column: 10
          },
          end: {
            line: 395,
            column: 77
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 395,
            column: 10
          },
          end: {
            line: 395,
            column: 29
          }
        }, {
          start: {
            line: 395,
            column: 33
          },
          end: {
            line: 395,
            column: 77
          }
        }],
        line: 395
      },
      "21": {
        loc: {
          start: {
            line: 579,
            column: 6
          },
          end: {
            line: 581,
            column: 27
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 580,
            column: 10
          },
          end: {
            line: 580,
            column: 60
          }
        }, {
          start: {
            line: 581,
            column: 10
          },
          end: {
            line: 581,
            column: 27
          }
        }],
        line: 579
      },
      "22": {
        loc: {
          start: {
            line: 584,
            column: 4
          },
          end: {
            line: 586,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 584,
            column: 4
          },
          end: {
            line: 586,
            column: 5
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
        line: 584
      },
      "23": {
        loc: {
          start: {
            line: 587,
            column: 4
          },
          end: {
            line: 589,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 587,
            column: 4
          },
          end: {
            line: 589,
            column: 5
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
        line: 587
      },
      "24": {
        loc: {
          start: {
            line: 682,
            column: 20
          },
          end: {
            line: 682,
            column: 79
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 682,
            column: 50
          },
          end: {
            line: 682,
            column: 57
          }
        }, {
          start: {
            line: 682,
            column: 60
          },
          end: {
            line: 682,
            column: 79
          }
        }],
        line: 682
      },
      "25": {
        loc: {
          start: {
            line: 683,
            column: 19
          },
          end: {
            line: 683,
            column: 73
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 683,
            column: 19
          },
          end: {
            line: 683,
            column: 31
          }
        }, {
          start: {
            line: 683,
            column: 35
          },
          end: {
            line: 683,
            column: 73
          }
        }],
        line: 683
      },
      "26": {
        loc: {
          start: {
            line: 684,
            column: 4
          },
          end: {
            line: 686,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 684,
            column: 4
          },
          end: {
            line: 686,
            column: 5
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
        line: 684
      },
      "27": {
        loc: {
          start: {
            line: 698,
            column: 6
          },
          end: {
            line: 703,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 698,
            column: 6
          },
          end: {
            line: 703,
            column: 7
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
        line: 698
      },
      "28": {
        loc: {
          start: {
            line: 699,
            column: 8
          },
          end: {
            line: 702,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 699,
            column: 8
          },
          end: {
            line: 702,
            column: 9
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
        line: 699
      },
      "29": {
        loc: {
          start: {
            line: 713,
            column: 2
          },
          end: {
            line: 728,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 714,
            column: 4
          },
          end: {
            line: 716,
            column: 12
          }
        }, {
          start: {
            line: 717,
            column: 4
          },
          end: {
            line: 719,
            column: 12
          }
        }, {
          start: {
            line: 720,
            column: 4
          },
          end: {
            line: 722,
            column: 12
          }
        }, {
          start: {
            line: 723,
            column: 4
          },
          end: {
            line: 725,
            column: 12
          }
        }, {
          start: {
            line: 726,
            column: 4
          },
          end: {
            line: 727,
            column: 66
          }
        }],
        line: 713
      },
      "30": {
        loc: {
          start: {
            line: 732,
            column: 6
          },
          end: {
            line: 734,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 732,
            column: 6
          },
          end: {
            line: 734,
            column: 7
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
        line: 732
      },
      "31": {
        loc: {
          start: {
            line: 736,
            column: 6
          },
          end: {
            line: 738,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 736,
            column: 6
          },
          end: {
            line: 738,
            column: 7
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
        line: 736
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
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0
    },
    f: {
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
      "17": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0, 0, 0, 0],
      "30": [0, 0],
      "31": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a646809db18da50facf3d5c5e928beb29b73b5bf"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2r237l5dck = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2r237l5dck();
/* tslint:disable:variable-name no-namespace */
const SUBMIT_TRANSACTION_TIMEOUT = (cov_2r237l5dck().s[0]++, 60 * 1000);
exports.SUBMIT_TRANSACTION_TIMEOUT = SUBMIT_TRANSACTION_TIMEOUT;
/**
 * Specifies the durability namespace of contract-related ledger entries.
 */
let Durability = /*#__PURE__*/function (Durability) {
  Durability["Temporary"] = "temporary";
  Durability["Persistent"] = "persistent";
  return Durability;
}({});
/**
 * Server handles the network connection to a
 * [Soroban-RPC](https://soroban.stellar.org/docs) instance and exposes an
 * interface for requests to that instance.
 *
 * @constructor
 *
 * @param {string} serverURL Soroban-RPC Server URL (ex.
 *    `http://localhost:8000/soroban/rpc`).
 * @param {object} [opts] Options object
 * @param {boolean} [opts.allowHttp] - Allow connecting to http servers,
 *    default: `false`. This must be set to false in production deployments! You
 *    can also use {@link Config} class to set this globally.
 * @param {string} [opts.appName] - Allow set custom header `X-App-Name`
 * @param {string} [opts.appVersion] - Allow set custom header `X-App-Version`
 */
exports.Durability = Durability;
class Server {
  /**
   * Soroban-RPC Server URL (ex. `http://localhost:8000/soroban/rpc`).
   */

  constructor(serverURL, opts = (cov_2r237l5dck().b[0][0]++, {})) {
    cov_2r237l5dck().f[0]++;
    cov_2r237l5dck().s[1]++;
    this.serverURL = (0, _urijs.default)(serverURL);
    const customHeaders = (cov_2r237l5dck().s[2]++, {});
    cov_2r237l5dck().s[3]++;
    if (opts.appName) {
      cov_2r237l5dck().b[1][0]++;
      cov_2r237l5dck().s[4]++;
      customHeaders["X-App-Name"] = opts.appName;
    } else {
      cov_2r237l5dck().b[1][1]++;
    }
    cov_2r237l5dck().s[5]++;
    if (opts.appVersion) {
      cov_2r237l5dck().b[2][0]++;
      cov_2r237l5dck().s[6]++;
      customHeaders["X-App-Version"] = opts.appVersion;
    } else {
      cov_2r237l5dck().b[2][1]++;
    }
    cov_2r237l5dck().s[7]++;
    if (Object.keys(customHeaders).length === 0) {
      cov_2r237l5dck().b[3][0]++;
      cov_2r237l5dck().s[8]++;
      _axios.default.interceptors.request.use(config => {
        cov_2r237l5dck().f[1]++;
        cov_2r237l5dck().s[9]++;
        // merge the custom headers into any existing headers
        config.headers = Object.assign(config.headers, customHeaders);
        cov_2r237l5dck().s[10]++;
        return config;
      });
    } else {
      cov_2r237l5dck().b[3][1]++;
    }
    cov_2r237l5dck().s[11]++;
    if ((cov_2r237l5dck().b[5][0]++, this.serverURL.protocol() !== "https") && (cov_2r237l5dck().b[5][1]++, !opts.allowHttp)) {
      cov_2r237l5dck().b[4][0]++;
      cov_2r237l5dck().s[12]++;
      throw new Error("Cannot connect to insecure soroban-rpc server");
    } else {
      cov_2r237l5dck().b[4][1]++;
    }
  }

  /**
   * Fetch a minimal set of current info about a Stellar account.
   *
   * Needed to get the current sequence number for the account so you can build
   * a successful transaction with {@link TransactionBuilder}.
   *
   * @example
   * server.getAccount("GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4").then(account => {
   *   console.log("sequence:", account.sequence);
   * });
   *
   * @param {string} address - The public address of the account to load.
   * @returns {Promise<Account>} Returns a promise to the {@link Account} object with populated sequence number.
   */
  async getAccount(address) {
    cov_2r237l5dck().f[2]++;
    const ledgerKey = (cov_2r237l5dck().s[13]++, _stellarBase.xdr.LedgerKey.account(new _stellarBase.xdr.LedgerKeyAccount({
      accountId: _stellarBase.xdr.PublicKey.publicKeyTypeEd25519(_stellarBase.StrKey.decodeEd25519PublicKey(address))
    })).toXDR("base64"));
    const data = (cov_2r237l5dck().s[14]++, await jsonrpc.post(this.serverURL.toString(), "getLedgerEntries", [ledgerKey]));
    const ledgerEntries = (cov_2r237l5dck().s[15]++, (cov_2r237l5dck().b[6][0]++, data.entries) ?? (cov_2r237l5dck().b[6][1]++, []));
    cov_2r237l5dck().s[16]++;
    if (ledgerEntries.length === 0) {
      cov_2r237l5dck().b[7][0]++;
      cov_2r237l5dck().s[17]++;
      return Promise.reject({
        code: 404,
        message: `Account not found: ${address}`
      });
    } else {
      cov_2r237l5dck().b[7][1]++;
    }
    const ledgerEntryData = (cov_2r237l5dck().s[18]++, ledgerEntries[0].xdr);
    const accountEntry = (cov_2r237l5dck().s[19]++, _stellarBase.xdr.LedgerEntryData.fromXDR(ledgerEntryData, "base64").account());
    cov_2r237l5dck().s[20]++;
    return new _stellarBase.Account(address, accountEntry.seqNum().toString());
  }

  /**
   * General node health check.
   *
   * @example
   * server.getHealth().then(health => {
   *   console.log("status:", health.status);
   * });
   *
   * @returns {Promise<SorobanRpc.GetHealthResponse>} Returns a promise to the {@link SorobanRpc.GetHealthResponse} object with the status of the server ("healthy").
   */
  async getHealth() {
    cov_2r237l5dck().f[3]++;
    cov_2r237l5dck().s[21]++;
    return await jsonrpc.post(this.serverURL.toString(), "getHealth");
  }

  /**
   * Reads the current value of contract data ledger entries directly.
   *
   * @example
   * const contractId = "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5";
   * const key = xdr.ScVal.scvSymbol("counter");
   * server.getContractData(contractId, key, 'temporary').then(data => {
   *   console.log("value:", data.xdr);
   *   console.log("lastModified:", data.lastModifiedLedgerSeq);
   *   console.log("latestLedger:", data.latestLedger);
   * });
   *
   * Allows you to directly inspect the current state of a contract. This is a
   * backup way to access your contract data which may not be available via
   * events or simulateTransaction.
   *
   * @param {string|Address|Contract} contract - The contract ID containing the
   *    data to load. Encoded as Stellar Contract Address string (e.g.
   *    `CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5`), a
   *    {@link Contract}, or an {@link Address} instance.
   * @param {xdr.ScVal} key - The key of the contract data to load.
   * @param {Durability} [durability] - The "durability keyspace" that this
   *    ledger key belongs to, which is either 'temporary' or 'persistent' (the
   *    default), see {@link Durability}.
   *
   * @returns {Promise<SorobanRpc.LedgerEntryResult>} Returns a promise to the
   *    {@link SorobanRpc.LedgerEntryResult} object with the current value.
   *
   * @warning If the data entry in question is a 'temporary' entry, it's
   *    entirely possible that it has expired out of existence. Future versions
   *    of this client may provide abstractions to handle that.
   */
  async getContractData(contract, key, durability = (cov_2r237l5dck().b[8][0]++, Durability.Persistent)) {
    cov_2r237l5dck().f[4]++;
    // coalesce `contract` param variants to an ScAddress
    let scAddress;
    cov_2r237l5dck().s[22]++;
    if (typeof contract === "string") {
      cov_2r237l5dck().b[9][0]++;
      cov_2r237l5dck().s[23]++;
      scAddress = new _stellarBase.Contract(contract).address().toScAddress();
    } else {
      cov_2r237l5dck().b[9][1]++;
      cov_2r237l5dck().s[24]++;
      if (contract instanceof _stellarBase.Address) {
        cov_2r237l5dck().b[10][0]++;
        cov_2r237l5dck().s[25]++;
        scAddress = contract.toScAddress();
      } else {
        cov_2r237l5dck().b[10][1]++;
        cov_2r237l5dck().s[26]++;
        if (contract instanceof _stellarBase.Contract) {
          cov_2r237l5dck().b[11][0]++;
          cov_2r237l5dck().s[27]++;
          scAddress = contract.address().toScAddress();
        } else {
          cov_2r237l5dck().b[11][1]++;
          cov_2r237l5dck().s[28]++;
          throw new TypeError(`unknown contract type: ${contract}`);
        }
      }
    }
    let xdrDurability;
    cov_2r237l5dck().s[29]++;
    switch (durability) {
      case Durability.Temporary:
        cov_2r237l5dck().b[12][0]++;
        cov_2r237l5dck().s[30]++;
        xdrDurability = _stellarBase.xdr.ContractDataDurability.temporary();
        cov_2r237l5dck().s[31]++;
        break;
      case Durability.Persistent:
        cov_2r237l5dck().b[12][1]++;
        cov_2r237l5dck().s[32]++;
        xdrDurability = _stellarBase.xdr.ContractDataDurability.persistent();
        cov_2r237l5dck().s[33]++;
        break;
      default:
        cov_2r237l5dck().b[12][2]++;
        cov_2r237l5dck().s[34]++;
        throw new TypeError(`invalid durability: ${durability}`);
    }
    let contractKey = (cov_2r237l5dck().s[35]++, _stellarBase.xdr.LedgerKey.contractData(new _stellarBase.xdr.LedgerKeyContractData({
      contract: scAddress,
      key,
      durability: xdrDurability,
      bodyType: _stellarBase.xdr.ContractEntryBodyType.dataEntry() // expirationExtension is internal
    })).toXDR("base64"));
    cov_2r237l5dck().s[36]++;
    return jsonrpc.post(this.serverURL.toString(), "getLedgerEntries", [contractKey]).then(response => {
      cov_2r237l5dck().f[5]++;
      const ledgerEntries = (cov_2r237l5dck().s[37]++, (cov_2r237l5dck().b[13][0]++, response.entries) ?? (cov_2r237l5dck().b[13][1]++, []));
      cov_2r237l5dck().s[38]++;
      if (ledgerEntries.length !== 1) {
        cov_2r237l5dck().b[14][0]++;
        cov_2r237l5dck().s[39]++;
        return Promise.reject({
          code: 404,
          message: `Contract data not found. Contract: ${_stellarBase.Address.fromScAddress(scAddress).toString()}, Key: ${key.toXDR("base64")}, Durability: ${durability}`
        });
      } else {
        cov_2r237l5dck().b[14][1]++;
      }
      cov_2r237l5dck().s[40]++;
      return ledgerEntries[0];
    });
  }

  /**
   * Reads the current value of ledger entries directly.
   *
   * Allows you to directly inspect the current state of contracts, contract's
   * code, or any other ledger entries. This is a backup way to access your
   * contract data which may not be available via events or simulateTransaction.
   *
   * To fetch contract wasm byte-code, use the ContractCode ledger entry key.
   *
   * @example
   * const contractId = "CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM";
   * const key = xdr.LedgerKey.contractData(new xdr.LedgerKeyContractData({
   *   contractId: StrKey.decodeContract(contractId),
   *   key: xdr.ScVal.scvSymbol("counter"),
   * }));
   * server.getLedgerEntries([key]).then(response => {
   *   const ledgerData = response.entries[0];
   *   console.log("key:", ledgerData.key);
   *   console.log("value:", ledgerData.xdr);
   *   console.log("lastModified:", ledgerData.lastModifiedLedgerSeq);
   *   console.log("latestLedger:", response.latestLedger);
   * });
   *
   * @param {xdr.ScVal[]} keys - The ledger entry keys to load.
   *
   * @returns {Promise<SorobanRpc.GetLedgerEntriesResponse>} Returns a promise
   *    to the {@link SorobanRpc.GetLedgerEntriesResponse} object with the
   *    current value.
   */
  async getLedgerEntries(keys) {
    cov_2r237l5dck().f[6]++;
    cov_2r237l5dck().s[41]++;
    return await jsonrpc.post(this.serverURL.toString(), "getLedgerEntries", keys.map(k => {
      cov_2r237l5dck().f[7]++;
      cov_2r237l5dck().s[42]++;
      return k.toXDR("base64");
    }));
  }

  /**
   * Fetch the details of a submitted transaction.
   *
   * When submitting a transaction, clients should poll this to tell when the
   * transaction has completed.
   *
   * @example
   * const transactionHash = "c4515e3bdc0897f21cc5dbec8c82cf0a936d4741cb74a8e158eb51b9fb00411a";
   * server.getTransaction(transactionHash).then(transaction => {
   *   console.log("status:", transaction.status);
   *   console.log("envelopeXdr:", transaction.envelopeXdr);
   *   console.log("resultMetaXdr:", transaction.resultMetaXdr);
   *   console.log("resultXdr:", transaction.resultXdr);
   * });
   *
   * @param {string} hash - The hex-encoded hash of the transaction to check.
   *
   * @returns {Promise<SorobanRpc.GetTransactionResponse>} Returns a promise to
   *    the {@link SorobanRpc.GetTransactionResponse} object with the status,
   *    result, and other details about the transaction. Raw XDR fields are
   *    parsed into their appropriate structures wherever possible.
   */
  async getTransaction(hash) {
    cov_2r237l5dck().f[8]++;
    const raw = (cov_2r237l5dck().s[43]++, await jsonrpc.post(this.serverURL.toString(), "getTransaction", hash));
    let successInfo = (cov_2r237l5dck().s[44]++, {});
    cov_2r237l5dck().s[45]++;
    if (raw.status === _soroban_rpc.SorobanRpc.GetTransactionStatus.SUCCESS) {
      var _meta$v3$sorobanMeta;
      cov_2r237l5dck().b[15][0]++;
      const meta = (cov_2r237l5dck().s[46]++, _stellarBase.xdr.TransactionMeta.fromXDR(raw.resultMetaXdr, "base64"));
      cov_2r237l5dck().s[47]++;
      successInfo = {
        ledger: raw.ledger,
        createdAt: raw.createdAt,
        applicationOrder: raw.applicationOrder,
        feeBump: raw.feeBump,
        envelopeXdr: _stellarBase.xdr.TransactionEnvelope.fromXDR(raw.envelopeXdr, "base64"),
        resultXdr: _stellarBase.xdr.TransactionResult.fromXDR(raw.resultXdr, "base64"),
        resultMetaXdr: meta,
        ...((cov_2r237l5dck().b[16][0]++, meta.switch() === 3) && (cov_2r237l5dck().b[16][1]++, meta.v3().sorobanMeta() !== null) && (cov_2r237l5dck().b[16][2]++, {
          returnValue: (_meta$v3$sorobanMeta = meta.v3().sorobanMeta()) === null || _meta$v3$sorobanMeta === void 0 ? void 0 : _meta$v3$sorobanMeta.returnValue()
        }))
      };
    } else {
      cov_2r237l5dck().b[15][1]++;
    }
    const result = (cov_2r237l5dck().s[48]++, {
      status: raw.status,
      latestLedger: raw.latestLedger,
      latestLedgerCloseTime: raw.latestLedgerCloseTime,
      oldestLedger: raw.oldestLedger,
      oldestLedgerCloseTime: raw.oldestLedgerCloseTime,
      ...successInfo
    });
    cov_2r237l5dck().s[49]++;
    return result;
  }

  /**
   * Fetches all events that match a given set of filters.
   *
   * The given filters (see {@link SorobanRpc.EventFilter} for detailed fields)
   * are combined only in a logical OR fashion, and all of the fields in each
   * filter are optional.
   *
   * To page through events, use the `pagingToken` field on the relevant
   * {@link SorobanRpc.EventResponse} object to set the `cursor` parameter.
   *
   * @example
   * server.getEvents({
   *    startLedger: "1000",
   *    filters: [
   *     {
   *      type: "contract",
   *      contractIds: [ "deadb33f..." ],
   *      topics: [[ "AAAABQAAAAh0cmFuc2Zlcg==", "AAAAAQB6Mcc=", "*" ]]
   *     }, {
   *      type: "system",
   *      contractIds: [ "...c4f3b4b3..." ],
   *      topics: [[ "*" ], [ "*", "AAAAAQB6Mcc=" ]]
   *     }, {
   *      contractIds: [ "...c4f3b4b3..." ],
   *      topics: [[ "AAAABQAAAAh0cmFuc2Zlcg==" ]]
   *     }, {
   *      type: "diagnostic",
   *      topics: [[ "AAAAAQB6Mcc=" ]]
   *     }
   *    ],
   *    limit: 10,
   * });
   *
   * @returns {Promise<SorobanRpc.GetEventsResponse>} a promise to the
   *    {@link SorobanRpc.GetEventsResponse} object containing a paginatable set
   *    of the events matching the given event filters.
   */
  async getEvents(request) {
    cov_2r237l5dck().f[9]++;
    cov_2r237l5dck().s[50]++;
    // TODO: It'd be nice if we could do something to infer the types of filter
    // arguments a user wants, e.g. converting something like "transfer/*/42"
    // into the base64-encoded `ScVal` equivalents by inferring that the first
    // is an ScSymbol and the last is a U32.
    //
    // The difficulty comes in matching up the correct integer primitives.
    return await jsonrpc.postObject(this.serverURL.toString(), "getEvents", {
      filters: (cov_2r237l5dck().b[17][0]++, request.filters) ?? (cov_2r237l5dck().b[17][1]++, []),
      pagination: {
        ...((cov_2r237l5dck().b[18][0]++, request.cursor) && (cov_2r237l5dck().b[18][1]++, {
          cursor: request.cursor
        })),
        // add fields only if defined
        ...((cov_2r237l5dck().b[19][0]++, request.limit) && (cov_2r237l5dck().b[19][1]++, {
          limit: request.limit
        }))
      },
      ...((cov_2r237l5dck().b[20][0]++, request.startLedger) && (cov_2r237l5dck().b[20][1]++, {
        startLedger: String(request.startLedger)
      }))
    });
  }

  /**
   * Fetches metadata about the network which Soroban-RPC is connected to.
   *
   * @example
   * server.getNetwork().then(network => {
   *   console.log("friendbotUrl:", network.friendbotUrl);
   *   console.log("passphrase:", network.passphrase);
   *   console.log("protocolVersion:", network.protocolVersion);
   * });
   *
   * @returns {Promise<SorobanRpc.GetNetworkResponse>} a promise to the
   *    {@link SorobanRpc.GetNetworkResponse} object containing metadata
   *    about the current network this soroban-rpc server is connected to.
   */
  async getNetwork() {
    cov_2r237l5dck().f[10]++;
    cov_2r237l5dck().s[51]++;
    return await jsonrpc.post(this.serverURL.toString(), "getNetwork");
  }

  /**
   * Fetches the latest ledger meta info from network which Soroban-RPC is connected to.
   *
   * @example
   * server.getLatestLedger().then(response => {
   *   console.log("hash:", response.id);
   *   console.log("sequence:", response.sequence);
   *   console.log("protocolVersion:", response.protocolVersion);
   * });
   *
   * @returns {Promise<SorobanRpc.GetLatestLedgerResponse>} a promise to the
   *    {@link SorobanRpc.GetLatestLedgerResponse} object containing metadata
   *    about the latest ledger from network soroban-rpc server is connected to.
   */
  async getLatestLedger() {
    cov_2r237l5dck().f[11]++;
    cov_2r237l5dck().s[52]++;
    return await jsonrpc.post(this.serverURL.toString(), "getLatestLedger");
  }

  /**
   * Submit a trial contract invocation to get back return values, expected
   * ledger footprint, expected authorizations, and expected costs.
   *
   * @example
   * const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
   * const contract = new SorobanClient.Contract(contractId);
   *
   * // Right now, this is just the default fee for this example.
   * const fee = 100;
   *
   * const transaction = new SorobanClient.TransactionBuilder(account, {
   *     fee,
   *     // Uncomment the following line to build transactions for the live network. Be
   *     // sure to also change the horizon hostname.
   *     // networkPassphrase: SorobanClient.Networks.PUBLIC,
   *     networkPassphrase: SorobanClient.Networks.FUTURENET
   *   })
   *   // Add a contract.increment soroban contract invocation operation
   *   .addOperation(contract.call("increment"))
   *   // Make this transaction valid for the next 30 seconds only
   *   .setTimeout(30)
   *   // Uncomment to add a memo (https://developers.stellar.org/docs/glossary/transactions/)
   *   // .addMemo(SorobanClient.Memo.text('Hello world!'))
   *   .build();
   *
   * // Sign this transaction with the secret key
   * // NOTE: signing is transaction is network specific. Test network transactions
   * // won't work in the public network. To switch networks, use the Network object
   * // as explained above (look for SorobanClient.Network).
   * const sourceKeypair = SorobanClient.Keypair.fromSecret(sourceSecretKey);
   * transaction.sign(sourceKeypair);
   *
   * server.simulateTransaction(transaction).then(sim => {
   *   console.log("cost:", sim.cost);
   *   console.log("result:", sim.result);
   *   console.log("error:", sim.error);
   *   console.log("latestLedger:", sim.latestLedger);
   * });
   *
   * @param {Transaction | FeeBumpTransaction} transaction - The transaction to
   *    simulate. It should include exactly one operation, which must be one of
   *    {@link xdr.InvokeHostFunctionOp}, {@link xdr.BumpFootprintExpirationOp},
   *    or {@link xdr.RestoreFootprintOp}. Any provided footprint will be
   *    ignored.
   *
   * @returns {Promise<SorobanRpc.SimulateTransactionResponse>} Returns a
   *    promise to the {@link SorobanRpc.SimulateTransactionResponse} object
   *    with the cost, footprint, result/auth requirements (if applicable), and
   *    error of the transaction.
   */
  async simulateTransaction(transaction) {
    cov_2r237l5dck().f[12]++;
    cov_2r237l5dck().s[53]++;
    return await jsonrpc.post(this.serverURL.toString(), "simulateTransaction", transaction.toXDR()).then(raw => {
      cov_2r237l5dck().f[13]++;
      cov_2r237l5dck().s[54]++;
      return (0, _transaction.parseRawSimulation)(raw);
    });
  }

  /**
   * Submit a trial contract invocation, first run a simulation of the contract
   * invocation as defined on the incoming transaction, and apply the results to
   * a new copy of the transaction which is then returned. Setting the ledger
   * footprint and authorization, so the resulting transaction is ready for
   * signing & sending.
   *
   * The returned transaction will also have an updated fee that is the sum of
   * fee set on incoming transaction with the contract resource fees estimated
   * from simulation. It is adviseable to check the fee on returned transaction
   * and validate or take appropriate measures for interaction with user to
   * confirm it is acceptable.
   *
   * You can call the {@link Server.simulateTransaction} method directly first
   * if you want to inspect estimated fees for a given transaction in detail
   * first, if that is of importance.
   *
   * @example
   * const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
   * const contract = new SorobanClient.Contract(contractId);
   *
   * // Right now, this is just the default fee for this example.
   * const fee = 100;
   *
   * const transaction = new SorobanClient.TransactionBuilder(account, {
   *     fee,
   *     // Uncomment the following line to build transactions for the live network. Be
   *     // sure to also change the horizon hostname.
   *     // networkPassphrase: SorobanClient.Networks.PUBLIC,
   *     networkPassphrase: SorobanClient.Networks.TESTNET
   *   })
   *   // Add a contract.increment soroban contract invocation operation
   *   .addOperation(contract.call("increment"))
   *   // Make this transaction valid for the next 30 seconds only
   *   .setTimeout(30)
   *   // Uncomment to add a memo (https://developers.stellar.org/docs/glossary/transactions/)
   *   // .addMemo(SorobanClient.Memo.text('Hello world!'))
   *   .build();
   *
   * preparedTransaction = await server.prepareTransaction(transaction);
   *
   * // Sign this transaction with the secret key
   * // NOTE: signing is transaction is network specific. Test network transactions
   * // won't work in the public network. To switch networks, use the Network object
   * // as explained above (look for SorobanClient.Network).
   * const sourceKeypair = SorobanClient.Keypair.fromSecret(sourceSecretKey);
   * preparedTransaction.sign(sourceKeypair);
   *
   * server.sendTransaction(transaction).then(result => {
   *   console.log("hash:", result.hash);
   *   console.log("status:", result.status);
   *   console.log("errorResultXdr:", result.errorResultXdr);
   * });
   *
   * @param {Transaction | FeeBumpTransaction} transaction - The transaction to
   *    prepare. It should include exactly one operation, which must be one of
   *    {@link xdr.InvokeHostFunctionOp}, {@link xdr.BumpFootprintExpirationOp},
   *    or {@link xdr.RestoreFootprintOp}.
   *
   *    Any provided footprint will be overwritten. However, if your operation
   *    has existing auth entries, they will be preferred over ALL auth entries
   *    from the simulation. In other words, if you include auth entries, you
   *    don't care about the auth returned from the simulation. Other fields
   *    (footprint, etc.) will be filled as normal.
   * @param {string} [networkPassphrase] - Explicitly provide a network
   *    passphrase. If not passed, the current network passphrase will be
   *    requested from the server via {@link Server.getNetwork}.
   *
   * @returns {Promise<Transaction | FeeBumpTransaction>} Returns a copy of the
   *    transaction, with the expected authorizations (in the case of
   *    invocation) and ledger footprint added. The transaction fee will also
   *    automatically be padded with the contract's minimum resource fees
   *    discovered from the simulation.
   *
   * @throws {jsonrpc.Error<any> | Error} if simulation fails
   */
  async prepareTransaction(transaction, networkPassphrase) {
    cov_2r237l5dck().f[14]++;
    const [{
      passphrase
    }, simResponse] = (cov_2r237l5dck().s[55]++, await Promise.all([networkPassphrase ? (cov_2r237l5dck().b[21][0]++, Promise.resolve({
      passphrase: networkPassphrase
    })) : (cov_2r237l5dck().b[21][1]++, this.getNetwork()), this.simulateTransaction(transaction)]));
    cov_2r237l5dck().s[56]++;
    if (simResponse.error) {
      cov_2r237l5dck().b[22][0]++;
      cov_2r237l5dck().s[57]++;
      throw simResponse.error;
    } else {
      cov_2r237l5dck().b[22][1]++;
    }
    cov_2r237l5dck().s[58]++;
    if (!simResponse.result) {
      cov_2r237l5dck().b[23][0]++;
      cov_2r237l5dck().s[59]++;
      throw new Error("transaction simulation failed");
    } else {
      cov_2r237l5dck().b[23][1]++;
    }
    cov_2r237l5dck().s[60]++;
    return (0, _transaction.assembleTransaction)(transaction, passphrase, simResponse).build();
  }

  /**
   * Submit a real transaction to the Stellar network. This is the only way to
   * make changes "on-chain". Unlike Horizon, Soroban-RPC does not wait for
   * transaction completion. It simply validates the transaction and enqueues
   * it. Clients should call {@link Server#getTransactionStatus} to learn about
   * transaction success/failure.
   *
   * @example
   * const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
   * const contract = new SorobanClient.Contract(contractId);
   *
   * // Right now, this is just the default fee for this example.
   * const fee = 100;
   *
   * const transaction = new SorobanClient.TransactionBuilder(account, {
   *     fee,
   *     // Uncomment the following line to build transactions for the live network. Be
   *     // sure to also change the horizon hostname.
   *     // networkPassphrase: SorobanClient.Networks.PUBLIC,
   *     networkPassphrase: SorobanClient.Networks.STANDALONE
   *   })
   *   // Add a contract.increment soroban contract invocation operation
   *   // Note: For real transactions you will need to include the footprint
   *   // and auth in the operation, as returned from simulateTransaction.
   *   .addOperation(contract.call("increment"))
   *   // Make this transaction valid for the next 30 seconds only
   *   .setTimeout(30)
   *   // Uncomment to add a memo (https://developers.stellar.org/docs/glossary/transactions/)
   *   // .addMemo(SorobanClient.Memo.text('Hello world!'))
   *   .build();
   *
   * // Sign this transaction with the secret key
   * // NOTE: signing is transaction is network specific. Test network transactions
   * // won't work in the public network. To switch networks, use the Network object
   * // as explained above (look for SorobanClient.Network).
   * const sourceKeypair = SorobanClient.Keypair.fromSecret(sourceSecretKey);
   * transaction.sign(sourceKeypair);
   *
   * server.sendTransaction(transaction).then(result => {
   *   console.log("hash:", result.hash);
   *   console.log("status:", result.status);
   *   console.log("errorResultXdr:", result.errorResultXdr);
   * });
   *
   * @param {Transaction | FeeBumpTransaction} transaction - The transaction to
   *    submit.
   * @returns {Promise<SorobanRpc.SendTransactionResponse>} Returns a promise to
   *    the {@link SorobanRpc.SendTransactionResponse} object with the
   *    transaction id, status, and any error if available.
   */
  async sendTransaction(transaction) {
    cov_2r237l5dck().f[15]++;
    cov_2r237l5dck().s[61]++;
    return await jsonrpc.post(this.serverURL.toString(), "sendTransaction", transaction.toXDR());
  }

  /**
   * Use the friendbot faucet to create and fund a new account. The method will
   * return an Account object for the created account, or if the account already
   * existed. If friendbot is not configured on this network, this method will
   * throw an error.  If the request fails, this method will throw an error.
   *
   * @example
   * server
   *    .requestAirdrop("GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4")
   *    .then(accountCreated => {
   *      console.log("accountCreated:", accountCreated);
   *    }).catch(error => {
   *      console.error("error:", error);
   *    });
   *
   * @param {string | Account} address - The address or account we want to
   * create and fund.
   * @param {string} [friendbotUrl] - The optional explicit address for
   *    friendbot. If not provided, the client will call the Soroban-RPC
   *    `getNetwork` method to attempt to find this network's friendbot url.
   *
   * @returns {Promise<Account>} Returns a promise to the {@link Account} object
   *    with populated sequence number.
   */
  async requestAirdrop(address, friendbotUrl) {
    cov_2r237l5dck().f[16]++;
    const account = (cov_2r237l5dck().s[62]++, typeof address === "string" ? (cov_2r237l5dck().b[24][0]++, address) : (cov_2r237l5dck().b[24][1]++, address.accountId()));
    cov_2r237l5dck().s[63]++;
    friendbotUrl = (cov_2r237l5dck().b[25][0]++, friendbotUrl) || (cov_2r237l5dck().b[25][1]++, (await this.getNetwork()).friendbotUrl);
    cov_2r237l5dck().s[64]++;
    if (!friendbotUrl) {
      cov_2r237l5dck().b[26][0]++;
      cov_2r237l5dck().s[65]++;
      throw new Error("No friendbot URL configured for current network");
    } else {
      cov_2r237l5dck().b[26][1]++;
    }
    cov_2r237l5dck().s[66]++;
    try {
      const response = (cov_2r237l5dck().s[67]++, await _axios.default.post(`${friendbotUrl}?addr=${encodeURIComponent(account)}`));
      const meta = (cov_2r237l5dck().s[68]++, _stellarBase.xdr.TransactionMeta.fromXDR(response.data.result_meta_xdr, "base64"));
      const sequence = (cov_2r237l5dck().s[69]++, findCreatedAccountSequenceInTransactionMeta(meta));
      cov_2r237l5dck().s[70]++;
      return new _stellarBase.Account(account, sequence);
    } catch (error) {
      var _error$response;
      cov_2r237l5dck().s[71]++;
      if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 400) {
        var _error$response$detai;
        cov_2r237l5dck().b[27][0]++;
        cov_2r237l5dck().s[72]++;
        if ((_error$response$detai = error.response.detail) !== null && _error$response$detai !== void 0 && _error$response$detai.includes("createAccountAlreadyExist")) {
          cov_2r237l5dck().b[28][0]++;
          cov_2r237l5dck().s[73]++;
          // Account already exists, load the sequence number
          return this.getAccount(account);
        } else {
          cov_2r237l5dck().b[28][1]++;
        }
      } else {
        cov_2r237l5dck().b[27][1]++;
      }
      cov_2r237l5dck().s[74]++;
      throw error;
    }
  }
}
exports.Server = Server;
function findCreatedAccountSequenceInTransactionMeta(meta) {
  cov_2r237l5dck().f[17]++;
  let operations = (cov_2r237l5dck().s[75]++, []);
  cov_2r237l5dck().s[76]++;
  switch (meta.switch()) {
    case 0:
      cov_2r237l5dck().b[29][0]++;
      cov_2r237l5dck().s[77]++;
      operations = meta.operations();
      cov_2r237l5dck().s[78]++;
      break;
    case 1:
      cov_2r237l5dck().b[29][1]++;
      cov_2r237l5dck().s[79]++;
      operations = meta.v1().operations();
      cov_2r237l5dck().s[80]++;
      break;
    case 2:
      cov_2r237l5dck().b[29][2]++;
      cov_2r237l5dck().s[81]++;
      operations = meta.v2().operations();
      cov_2r237l5dck().s[82]++;
      break;
    case 3:
      cov_2r237l5dck().b[29][3]++;
      cov_2r237l5dck().s[83]++;
      operations = meta.v3().operations();
      cov_2r237l5dck().s[84]++;
      break;
    default:
      cov_2r237l5dck().b[29][4]++;
      cov_2r237l5dck().s[85]++;
      throw new Error("Unexpected transaction meta switch value");
  }
  cov_2r237l5dck().s[86]++;
  for (const op of operations) {
    cov_2r237l5dck().s[87]++;
    for (const c of op.changes()) {
      cov_2r237l5dck().s[88]++;
      if (c.switch() !== _stellarBase.xdr.LedgerEntryChangeType.ledgerEntryCreated()) {
        cov_2r237l5dck().b[30][0]++;
        cov_2r237l5dck().s[89]++;
        continue;
      } else {
        cov_2r237l5dck().b[30][1]++;
      }
      const data = (cov_2r237l5dck().s[90]++, c.created().data());
      cov_2r237l5dck().s[91]++;
      if (data.switch() !== _stellarBase.xdr.LedgerEntryType.account()) {
        cov_2r237l5dck().b[31][0]++;
        cov_2r237l5dck().s[92]++;
        continue;
      } else {
        cov_2r237l5dck().b[31][1]++;
      }
      cov_2r237l5dck().s[93]++;
      return data.account().seqNum().toString();
    }
  }
  cov_2r237l5dck().s[94]++;
  throw new Error("No account created in transaction");
}