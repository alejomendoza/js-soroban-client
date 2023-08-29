"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContractSpec = void 0;
var _stellarBase = require("stellar-base");
function cov_2mtjvyog38() {
  var path = "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/contract_spec.ts";
  var hash = "6fdc1b7931e58db035152b0b641104140747c1c5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/alejomendoza/Sites/stellar/js-soroban-client/src/contract_spec.ts",
    statementMap: {
      "0": {
        start: {
          line: 39,
          column: 18
        },
        end: {
          line: 39,
          column: 41
        }
      },
      "1": {
        start: {
          line: 40,
          column: 14
        },
        end: {
          line: 40,
          column: 74
        }
      },
      "2": {
        start: {
          line: 40,
          column: 55
        },
        end: {
          line: 40,
          column: 73
        }
      },
      "3": {
        start: {
          line: 41,
          column: 2
        },
        end: {
          line: 43,
          column: 3
        }
      },
      "4": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 50
        }
      },
      "5": {
        start: {
          line: 44,
          column: 2
        },
        end: {
          line: 44,
          column: 18
        }
      },
      "6": {
        start: {
          line: 48,
          column: 38
        },
        end: {
          line: 48,
          column: 40
        }
      },
      "7": {
        start: {
          line: 58,
          column: 4
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "8": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 68
        }
      },
      "9": {
        start: {
          line: 61,
          column: 16
        },
        end: {
          line: 61,
          column: 26
        }
      },
      "10": {
        start: {
          line: 62,
          column: 4
        },
        end: {
          line: 68,
          column: 5
        }
      },
      "11": {
        start: {
          line: 63,
          column: 6
        },
        end: {
          line: 65,
          column: 8
        }
      },
      "12": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 64,
          column: 44
        }
      },
      "13": {
        start: {
          line: 67,
          column: 6
        },
        end: {
          line: 67,
          column: 50
        }
      },
      "14": {
        start: {
          line: 79,
          column: 16
        },
        end: {
          line: 79,
          column: 36
        }
      },
      "15": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 84,
          column: 5
        }
      },
      "16": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 51
        }
      },
      "17": {
        start: {
          line: 85,
          column: 4
        },
        end: {
          line: 85,
          column: 49
        }
      },
      "18": {
        start: {
          line: 107,
          column: 13
        },
        end: {
          line: 107,
          column: 31
        }
      },
      "19": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 110,
          column: 78
        }
      },
      "20": {
        start: {
          line: 110,
          column: 22
        },
        end: {
          line: 110,
          column: 76
        }
      },
      "21": {
        start: {
          line: 130,
          column: 6
        },
        end: {
          line: 132,
          column: 23
        }
      },
      "22": {
        start: {
          line: 133,
          column: 15
        },
        end: {
          line: 133,
          column: 33
        }
      },
      "23": {
        start: {
          line: 134,
          column: 18
        },
        end: {
          line: 134,
          column: 32
        }
      },
      "24": {
        start: {
          line: 135,
          column: 4
        },
        end: {
          line: 141,
          column: 5
        }
      },
      "25": {
        start: {
          line: 136,
          column: 17
        },
        end: {
          line: 136,
          column: 29
        }
      },
      "26": {
        start: {
          line: 137,
          column: 6
        },
        end: {
          line: 139,
          column: 7
        }
      },
      "27": {
        start: {
          line: 138,
          column: 8
        },
        end: {
          line: 138,
          column: 59
        }
      },
      "28": {
        start: {
          line: 140,
          column: 6
        },
        end: {
          line: 140,
          column: 18
        }
      },
      "29": {
        start: {
          line: 142,
          column: 4
        },
        end: {
          line: 144,
          column: 5
        }
      },
      "30": {
        start: {
          line: 143,
          column: 6
        },
        end: {
          line: 143,
          column: 56
        }
      },
      "31": {
        start: {
          line: 145,
          column: 17
        },
        end: {
          line: 145,
          column: 27
        }
      },
      "32": {
        start: {
          line: 146,
          column: 4
        },
        end: {
          line: 146,
          column: 43
        }
      },
      "33": {
        start: {
          line: 158,
          column: 16
        },
        end: {
          line: 160,
          column: 5
        }
      },
      "34": {
        start: {
          line: 159,
          column: 17
        },
        end: {
          line: 159,
          column: 57
        }
      },
      "35": {
        start: {
          line: 161,
          column: 4
        },
        end: {
          line: 163,
          column: 5
        }
      },
      "36": {
        start: {
          line: 162,
          column: 6
        },
        end: {
          line: 162,
          column: 48
        }
      },
      "37": {
        start: {
          line: 164,
          column: 4
        },
        end: {
          line: 164,
          column: 17
        }
      },
      "38": {
        start: {
          line: 177,
          column: 28
        },
        end: {
          line: 177,
          column: 39
        }
      },
      "39": {
        start: {
          line: 178,
          column: 16
        },
        end: {
          line: 178,
          column: 23
        }
      },
      "40": {
        start: {
          line: 179,
          column: 4
        },
        end: {
          line: 182,
          column: 5
        }
      },
      "41": {
        start: {
          line: 180,
          column: 16
        },
        end: {
          line: 180,
          column: 47
        }
      },
      "42": {
        start: {
          line: 181,
          column: 6
        },
        end: {
          line: 181,
          column: 58
        }
      },
      "43": {
        start: {
          line: 183,
          column: 4
        },
        end: {
          line: 189,
          column: 5
        }
      },
      "44": {
        start: {
          line: 184,
          column: 16
        },
        end: {
          line: 184,
          column: 50
        }
      },
      "45": {
        start: {
          line: 185,
          column: 6
        },
        end: {
          line: 187,
          column: 7
        }
      },
      "46": {
        start: {
          line: 186,
          column: 8
        },
        end: {
          line: 186,
          column: 35
        }
      },
      "47": {
        start: {
          line: 188,
          column: 6
        },
        end: {
          line: 188,
          column: 54
        }
      },
      "48": {
        start: {
          line: 191,
          column: 4
        },
        end: {
          line: 351,
          column: 5
        }
      },
      "49": {
        start: {
          line: 193,
          column: 8
        },
        end: {
          line: 202,
          column: 9
        }
      },
      "50": {
        start: {
          line: 194,
          column: 10
        },
        end: {
          line: 201,
          column: 11
        }
      },
      "51": {
        start: {
          line: 196,
          column: 14
        },
        end: {
          line: 196,
          column: 41
        }
      },
      "52": {
        start: {
          line: 198,
          column: 14
        },
        end: {
          line: 200,
          column: 16
        }
      },
      "53": {
        start: {
          line: 204,
          column: 8
        },
        end: {
          line: 206,
          column: 9
        }
      },
      "54": {
        start: {
          line: 205,
          column: 10
        },
        end: {
          line: 205,
          column: 21
        }
      },
      "55": {
        start: {
          line: 208,
          column: 8
        },
        end: {
          line: 215,
          column: 9
        }
      },
      "56": {
        start: {
          line: 209,
          column: 10
        },
        end: {
          line: 213,
          column: 11
        }
      },
      "57": {
        start: {
          line: 210,
          column: 12
        },
        end: {
          line: 212,
          column: 14
        }
      },
      "58": {
        start: {
          line: 214,
          column: 10
        },
        end: {
          line: 214,
          column: 31
        }
      },
      "59": {
        start: {
          line: 217,
          column: 8
        },
        end: {
          line: 224,
          column: 9
        }
      },
      "60": {
        start: {
          line: 218,
          column: 10
        },
        end: {
          line: 222,
          column: 11
        }
      },
      "61": {
        start: {
          line: 219,
          column: 12
        },
        end: {
          line: 221,
          column: 14
        }
      },
      "62": {
        start: {
          line: 223,
          column: 10
        },
        end: {
          line: 223,
          column: 41
        }
      },
      "63": {
        start: {
          line: 226,
          column: 8
        },
        end: {
          line: 247,
          column: 9
        }
      },
      "64": {
        start: {
          line: 227,
          column: 23
        },
        end: {
          line: 227,
          column: 43
        }
      },
      "65": {
        start: {
          line: 228,
          column: 10
        },
        end: {
          line: 246,
          column: 11
        }
      },
      "66": {
        start: {
          line: 230,
          column: 28
        },
        end: {
          line: 230,
          column: 62
        }
      },
      "67": {
        start: {
          line: 231,
          column: 14
        },
        end: {
          line: 235,
          column: 15
        }
      },
      "68": {
        start: {
          line: 232,
          column: 16
        },
        end: {
          line: 234,
          column: 18
        }
      },
      "69": {
        start: {
          line: 237,
          column: 14
        },
        end: {
          line: 237,
          column: 46
        }
      },
      "70": {
        start: {
          line: 241,
          column: 14
        },
        end: {
          line: 241,
          column: 46
        }
      },
      "71": {
        start: {
          line: 243,
          column: 14
        },
        end: {
          line: 245,
          column: 16
        }
      },
      "72": {
        start: {
          line: 248,
          column: 8
        },
        end: {
          line: 269,
          column: 9
        }
      },
      "73": {
        start: {
          line: 249,
          column: 10
        },
        end: {
          line: 268,
          column: 11
        }
      },
      "74": {
        start: {
          line: 250,
          column: 22
        },
        end: {
          line: 250,
          column: 53
        }
      },
      "75": {
        start: {
          line: 251,
          column: 30
        },
        end: {
          line: 251,
          column: 47
        }
      },
      "76": {
        start: {
          line: 252,
          column: 12
        },
        end: {
          line: 254,
          column: 14
        }
      },
      "77": {
        start: {
          line: 253,
          column: 29
        },
        end: {
          line: 253,
          column: 63
        }
      },
      "78": {
        start: {
          line: 255,
          column: 17
        },
        end: {
          line: 268,
          column: 11
        }
      },
      "79": {
        start: {
          line: 256,
          column: 22
        },
        end: {
          line: 256,
          column: 55
        }
      },
      "80": {
        start: {
          line: 257,
          column: 27
        },
        end: {
          line: 257,
          column: 43
        }
      },
      "81": {
        start: {
          line: 258,
          column: 12
        },
        end: {
          line: 262,
          column: 13
        }
      },
      "82": {
        start: {
          line: 259,
          column: 14
        },
        end: {
          line: 261,
          column: 16
        }
      },
      "83": {
        start: {
          line: 263,
          column: 12
        },
        end: {
          line: 265,
          column: 14
        }
      },
      "84": {
        start: {
          line: 264,
          column: 32
        },
        end: {
          line: 264,
          column: 66
        }
      },
      "85": {
        start: {
          line: 267,
          column: 12
        },
        end: {
          line: 267,
          column: 79
        }
      },
      "86": {
        start: {
          line: 270,
          column: 8
        },
        end: {
          line: 287,
          column: 9
        }
      },
      "87": {
        start: {
          line: 271,
          column: 10
        },
        end: {
          line: 273,
          column: 11
        }
      },
      "88": {
        start: {
          line: 272,
          column: 12
        },
        end: {
          line: 272,
          column: 77
        }
      },
      "89": {
        start: {
          line: 274,
          column: 22
        },
        end: {
          line: 274,
          column: 53
        }
      },
      "90": {
        start: {
          line: 275,
          column: 20
        },
        end: {
          line: 275,
          column: 40
        }
      },
      "91": {
        start: {
          line: 276,
          column: 42
        },
        end: {
          line: 276,
          column: 44
        }
      },
      "92": {
        start: {
          line: 277,
          column: 23
        },
        end: {
          line: 277,
          column: 36
        }
      },
      "93": {
        start: {
          line: 278,
          column: 20
        },
        end: {
          line: 278,
          column: 33
        }
      },
      "94": {
        start: {
          line: 279,
          column: 10
        },
        end: {
          line: 285,
          column: 11
        }
      },
      "95": {
        start: {
          line: 280,
          column: 25
        },
        end: {
          line: 280,
          column: 34
        }
      },
      "96": {
        start: {
          line: 281,
          column: 22
        },
        end: {
          line: 281,
          column: 60
        }
      },
      "97": {
        start: {
          line: 282,
          column: 22
        },
        end: {
          line: 282,
          column: 62
        }
      },
      "98": {
        start: {
          line: 283,
          column: 12
        },
        end: {
          line: 283,
          column: 59
        }
      },
      "99": {
        start: {
          line: 284,
          column: 12
        },
        end: {
          line: 284,
          column: 32
        }
      },
      "100": {
        start: {
          line: 286,
          column: 10
        },
        end: {
          line: 286,
          column: 43
        }
      },
      "101": {
        start: {
          line: 289,
          column: 8
        },
        end: {
          line: 295,
          column: 9
        }
      },
      "102": {
        start: {
          line: 290,
          column: 10
        },
        end: {
          line: 294,
          column: 12
        }
      },
      "103": {
        start: {
          line: 297,
          column: 8
        },
        end: {
          line: 299,
          column: 10
        }
      },
      "104": {
        start: {
          line: 304,
          column: 8
        },
        end: {
          line: 320,
          column: 9
        }
      },
      "105": {
        start: {
          line: 306,
          column: 12
        },
        end: {
          line: 306,
          column: 51
        }
      },
      "106": {
        start: {
          line: 308,
          column: 12
        },
        end: {
          line: 308,
          column: 51
        }
      },
      "107": {
        start: {
          line: 315,
          column: 28
        },
        end: {
          line: 315,
          column: 75
        }
      },
      "108": {
        start: {
          line: 316,
          column: 12
        },
        end: {
          line: 316,
          column: 69
        }
      },
      "109": {
        start: {
          line: 319,
          column: 12
        },
        end: {
          line: 319,
          column: 78
        }
      },
      "110": {
        start: {
          line: 323,
          column: 8
        },
        end: {
          line: 323,
          column: 37
        }
      },
      "111": {
        start: {
          line: 326,
          column: 8
        },
        end: {
          line: 328,
          column: 9
        }
      },
      "112": {
        start: {
          line: 327,
          column: 10
        },
        end: {
          line: 327,
          column: 73
        }
      },
      "113": {
        start: {
          line: 329,
          column: 8
        },
        end: {
          line: 329,
          column: 38
        }
      },
      "114": {
        start: {
          line: 332,
          column: 8
        },
        end: {
          line: 334,
          column: 9
        }
      },
      "115": {
        start: {
          line: 333,
          column: 10
        },
        end: {
          line: 333,
          column: 37
        }
      },
      "116": {
        start: {
          line: 335,
          column: 8
        },
        end: {
          line: 343,
          column: 9
        }
      },
      "117": {
        start: {
          line: 338,
          column: 12
        },
        end: {
          line: 338,
          column: 39
        }
      },
      "118": {
        start: {
          line: 340,
          column: 12
        },
        end: {
          line: 342,
          column: 14
        }
      },
      "119": {
        start: {
          line: 347,
          column: 8
        },
        end: {
          line: 347,
          column: 45
        }
      },
      "120": {
        start: {
          line: 350,
          column: 8
        },
        end: {
          line: 350,
          column: 79
        }
      },
      "121": {
        start: {
          line: 355,
          column: 16
        },
        end: {
          line: 355,
          column: 36
        }
      },
      "122": {
        start: {
          line: 356,
          column: 4
        },
        end: {
          line: 373,
          column: 5
        }
      },
      "123": {
        start: {
          line: 358,
          column: 8
        },
        end: {
          line: 362,
          column: 9
        }
      },
      "124": {
        start: {
          line: 359,
          column: 10
        },
        end: {
          line: 361,
          column: 12
        }
      },
      "125": {
        start: {
          line: 363,
          column: 8
        },
        end: {
          line: 366,
          column: 10
        }
      },
      "126": {
        start: {
          line: 368,
          column: 8
        },
        end: {
          line: 368,
          column: 80
        }
      },
      "127": {
        start: {
          line: 370,
          column: 8
        },
        end: {
          line: 370,
          column: 78
        }
      },
      "128": {
        start: {
          line: 372,
          column: 8
        },
        end: {
          line: 372,
          column: 55
        }
      },
      "129": {
        start: {
          line: 380,
          column: 21
        },
        end: {
          line: 380,
          column: 28
        }
      },
      "130": {
        start: {
          line: 381,
          column: 16
        },
        end: {
          line: 384,
          column: 6
        }
      },
      "131": {
        start: {
          line: 382,
          column: 18
        },
        end: {
          line: 382,
          column: 49
        }
      },
      "132": {
        start: {
          line: 383,
          column: 6
        },
        end: {
          line: 383,
          column: 34
        }
      },
      "133": {
        start: {
          line: 385,
          column: 4
        },
        end: {
          line: 387,
          column: 5
        }
      },
      "134": {
        start: {
          line: 386,
          column: 6
        },
        end: {
          line: 386,
          column: 76
        }
      },
      "135": {
        start: {
          line: 388,
          column: 14
        },
        end: {
          line: 388,
          column: 45
        }
      },
      "136": {
        start: {
          line: 389,
          column: 4
        },
        end: {
          line: 417,
          column: 5
        }
      },
      "137": {
        start: {
          line: 391,
          column: 8
        },
        end: {
          line: 391,
          column: 39
        }
      },
      "138": {
        start: {
          line: 394,
          column: 20
        },
        end: {
          line: 394,
          column: 75
        }
      },
      "139": {
        start: {
          line: 401,
          column: 8
        },
        end: {
          line: 412,
          column: 9
        }
      },
      "140": {
        start: {
          line: 402,
          column: 10
        },
        end: {
          line: 406,
          column: 11
        }
      },
      "141": {
        start: {
          line: 403,
          column: 12
        },
        end: {
          line: 405,
          column: 14
        }
      },
      "142": {
        start: {
          line: 407,
          column: 23
        },
        end: {
          line: 409,
          column: 11
        }
      },
      "143": {
        start: {
          line: 408,
          column: 12
        },
        end: {
          line: 408,
          column: 43
        }
      },
      "144": {
        start: {
          line: 410,
          column: 10
        },
        end: {
          line: 410,
          column: 30
        }
      },
      "145": {
        start: {
          line: 411,
          column: 10
        },
        end: {
          line: 411,
          column: 42
        }
      },
      "146": {
        start: {
          line: 413,
          column: 8
        },
        end: {
          line: 413,
          column: 75
        }
      },
      "147": {
        start: {
          line: 416,
          column: 8
        },
        end: {
          line: 416,
          column: 71
        }
      },
      "148": {
        start: {
          line: 423,
          column: 17
        },
        end: {
          line: 423,
          column: 32
        }
      },
      "149": {
        start: {
          line: 424,
          column: 4
        },
        end: {
          line: 433,
          column: 5
        }
      },
      "150": {
        start: {
          line: 425,
          column: 6
        },
        end: {
          line: 429,
          column: 7
        }
      },
      "151": {
        start: {
          line: 426,
          column: 8
        },
        end: {
          line: 428,
          column: 10
        }
      },
      "152": {
        start: {
          line: 430,
          column: 6
        },
        end: {
          line: 432,
          column: 8
        }
      },
      "153": {
        start: {
          line: 431,
          column: 29
        },
        end: {
          line: 431,
          column: 73
        }
      },
      "154": {
        start: {
          line: 434,
          column: 4
        },
        end: {
          line: 442,
          column: 6
        }
      },
      "155": {
        start: {
          line: 436,
          column: 19
        },
        end: {
          line: 436,
          column: 42
        }
      },
      "156": {
        start: {
          line: 437,
          column: 8
        },
        end: {
          line: 440,
          column: 11
        }
      },
      "157": {
        start: {
          line: 446,
          column: 4
        },
        end: {
          line: 448,
          column: 5
        }
      },
      "158": {
        start: {
          line: 446,
          column: 38
        },
        end: {
          line: 446,
          column: 59
        }
      },
      "159": {
        start: {
          line: 447,
          column: 6
        },
        end: {
          line: 447,
          column: 35
        }
      },
      "160": {
        start: {
          line: 449,
          column: 4
        },
        end: {
          line: 449,
          column: 66
        }
      },
      "161": {
        start: {
          line: 462,
          column: 4
        },
        end: {
          line: 462,
          column: 76
        }
      },
      "162": {
        start: {
          line: 475,
          column: 12
        },
        end: {
          line: 475,
          column: 28
        }
      },
      "163": {
        start: {
          line: 476,
          column: 16
        },
        end: {
          line: 476,
          column: 23
        }
      },
      "164": {
        start: {
          line: 477,
          column: 4
        },
        end: {
          line: 479,
          column: 5
        }
      },
      "165": {
        start: {
          line: 478,
          column: 6
        },
        end: {
          line: 478,
          column: 78
        }
      },
      "166": {
        start: {
          line: 483,
          column: 4
        },
        end: {
          line: 566,
          column: 5
        }
      },
      "167": {
        start: {
          line: 485,
          column: 8
        },
        end: {
          line: 485,
          column: 27
        }
      },
      "168": {
        start: {
          line: 497,
          column: 8
        },
        end: {
          line: 497,
          column: 39
        }
      },
      "169": {
        start: {
          line: 500,
          column: 8
        },
        end: {
          line: 511,
          column: 9
        }
      },
      "170": {
        start: {
          line: 501,
          column: 20
        },
        end: {
          line: 501,
          column: 56
        }
      },
      "171": {
        start: {
          line: 502,
          column: 10
        },
        end: {
          line: 504,
          column: 17
        }
      },
      "172": {
        start: {
          line: 503,
          column: 12
        },
        end: {
          line: 503,
          column: 54
        }
      },
      "173": {
        start: {
          line: 505,
          column: 15
        },
        end: {
          line: 511,
          column: 9
        }
      },
      "174": {
        start: {
          line: 506,
          column: 22
        },
        end: {
          line: 506,
          column: 60
        }
      },
      "175": {
        start: {
          line: 507,
          column: 25
        },
        end: {
          line: 507,
          column: 43
        }
      },
      "176": {
        start: {
          line: 508,
          column: 10
        },
        end: {
          line: 510,
          column: 17
        }
      },
      "177": {
        start: {
          line: 509,
          column: 12
        },
        end: {
          line: 509,
          column: 48
        }
      },
      "178": {
        start: {
          line: 512,
          column: 8
        },
        end: {
          line: 512,
          column: 74
        }
      },
      "179": {
        start: {
          line: 516,
          column: 8
        },
        end: {
          line: 516,
          column: 43
        }
      },
      "180": {
        start: {
          line: 519,
          column: 18
        },
        end: {
          line: 519,
          column: 33
        }
      },
      "181": {
        start: {
          line: 520,
          column: 8
        },
        end: {
          line: 530,
          column: 9
        }
      },
      "182": {
        start: {
          line: 521,
          column: 22
        },
        end: {
          line: 521,
          column: 58
        }
      },
      "183": {
        start: {
          line: 522,
          column: 24
        },
        end: {
          line: 522,
          column: 39
        }
      },
      "184": {
        start: {
          line: 523,
          column: 26
        },
        end: {
          line: 523,
          column: 43
        }
      },
      "185": {
        start: {
          line: 524,
          column: 10
        },
        end: {
          line: 529,
          column: 17
        }
      },
      "186": {
        start: {
          line: 525,
          column: 31
        },
        end: {
          line: 528,
          column: 13
        }
      },
      "187": {
        start: {
          line: 531,
          column: 8
        },
        end: {
          line: 533,
          column: 10
        }
      },
      "188": {
        start: {
          line: 541,
          column: 8
        },
        end: {
          line: 541,
          column: 32
        }
      },
      "189": {
        start: {
          line: 545,
          column: 8
        },
        end: {
          line: 552,
          column: 9
        }
      },
      "190": {
        start: {
          line: 549,
          column: 10
        },
        end: {
          line: 551,
          column: 12
        }
      },
      "191": {
        start: {
          line: 553,
          column: 8
        },
        end: {
          line: 553,
          column: 44
        }
      },
      "192": {
        start: {
          line: 559,
          column: 8
        },
        end: {
          line: 559,
          column: 79
        }
      },
      "193": {
        start: {
          line: 563,
          column: 8
        },
        end: {
          line: 565,
          column: 10
        }
      },
      "194": {
        start: {
          line: 570,
          column: 16
        },
        end: {
          line: 570,
          column: 53
        }
      },
      "195": {
        start: {
          line: 571,
          column: 4
        },
        end: {
          line: 582,
          column: 5
        }
      },
      "196": {
        start: {
          line: 573,
          column: 8
        },
        end: {
          line: 573,
          column: 76
        }
      },
      "197": {
        start: {
          line: 575,
          column: 8
        },
        end: {
          line: 575,
          column: 80
        }
      },
      "198": {
        start: {
          line: 577,
          column: 8
        },
        end: {
          line: 577,
          column: 78
        }
      },
      "199": {
        start: {
          line: 579,
          column: 8
        },
        end: {
          line: 581,
          column: 10
        }
      },
      "200": {
        start: {
          line: 586,
          column: 14
        },
        end: {
          line: 586,
          column: 23
        }
      },
      "201": {
        start: {
          line: 587,
          column: 4
        },
        end: {
          line: 589,
          column: 5
        }
      },
      "202": {
        start: {
          line: 588,
          column: 6
        },
        end: {
          line: 588,
          column: 70
        }
      },
      "203": {
        start: {
          line: 590,
          column: 4
        },
        end: {
          line: 594,
          column: 5
        }
      },
      "204": {
        start: {
          line: 591,
          column: 6
        },
        end: {
          line: 593,
          column: 8
        }
      },
      "205": {
        start: {
          line: 595,
          column: 15
        },
        end: {
          line: 595,
          column: 38
        }
      },
      "206": {
        start: {
          line: 596,
          column: 4
        },
        end: {
          line: 598,
          column: 5
        }
      },
      "207": {
        start: {
          line: 597,
          column: 6
        },
        end: {
          line: 597,
          column: 50
        }
      },
      "208": {
        start: {
          line: 599,
          column: 16
        },
        end: {
          line: 599,
          column: 48
        }
      },
      "209": {
        start: {
          line: 600,
          column: 4
        },
        end: {
          line: 604,
          column: 5
        }
      },
      "210": {
        start: {
          line: 601,
          column: 6
        },
        end: {
          line: 603,
          column: 8
        }
      },
      "211": {
        start: {
          line: 605,
          column: 26
        },
        end: {
          line: 605,
          column: 58
        }
      },
      "212": {
        start: {
          line: 606,
          column: 4
        },
        end: {
          line: 620,
          column: 5
        }
      },
      "213": {
        start: {
          line: 610,
          column: 18
        },
        end: {
          line: 610,
          column: 64
        }
      },
      "214": {
        start: {
          line: 611,
          column: 15
        },
        end: {
          line: 611,
          column: 27
        }
      },
      "215": {
        start: {
          line: 613,
          column: 19
        },
        end: {
          line: 613,
          column: 21
        }
      },
      "216": {
        start: {
          line: 614,
          column: 6
        },
        end: {
          line: 617,
          column: 7
        }
      },
      "217": {
        start: {
          line: 614,
          column: 19
        },
        end: {
          line: 614,
          column: 20
        }
      },
      "218": {
        start: {
          line: 615,
          column: 16
        },
        end: {
          line: 615,
          column: 53
        }
      },
      "219": {
        start: {
          line: 616,
          column: 8
        },
        end: {
          line: 616,
          column: 23
        }
      },
      "220": {
        start: {
          line: 618,
          column: 14
        },
        end: {
          line: 618,
          column: 35
        }
      },
      "221": {
        start: {
          line: 619,
          column: 6
        },
        end: {
          line: 619,
          column: 15
        }
      },
      "222": {
        start: {
          line: 621,
          column: 4
        },
        end: {
          line: 621,
          column: 15
        }
      },
      "223": {
        start: {
          line: 624,
          column: 19
        },
        end: {
          line: 624,
          column: 21
        }
      },
      "224": {
        start: {
          line: 625,
          column: 17
        },
        end: {
          line: 625,
          column: 29
        }
      },
      "225": {
        start: {
          line: 626,
          column: 4
        },
        end: {
          line: 631,
          column: 5
        }
      },
      "226": {
        start: {
          line: 627,
          column: 14
        },
        end: {
          line: 629,
          column: 72
        }
      },
      "227": {
        start: {
          line: 629,
          column: 28
        },
        end: {
          line: 629,
          column: 71
        }
      },
      "228": {
        start: {
          line: 630,
          column: 6
        },
        end: {
          line: 630,
          column: 15
        }
      },
      "229": {
        start: {
          line: 632,
          column: 4
        },
        end: {
          line: 638,
          column: 7
        }
      },
      "230": {
        start: {
          line: 633,
          column: 18
        },
        end: {
          line: 633,
          column: 27
        }
      },
      "231": {
        start: {
          line: 634,
          column: 6
        },
        end: {
          line: 637,
          column: 8
        }
      },
      "232": {
        start: {
          line: 639,
          column: 4
        },
        end: {
          line: 639,
          column: 15
        }
      },
      "233": {
        start: {
          line: 643,
          column: 4
        },
        end: {
          line: 645,
          column: 5
        }
      },
      "234": {
        start: {
          line: 644,
          column: 6
        },
        end: {
          line: 644,
          column: 52
        }
      },
      "235": {
        start: {
          line: 646,
          column: 14
        },
        end: {
          line: 646,
          column: 35
        }
      },
      "236": {
        start: {
          line: 647,
          column: 4
        },
        end: {
          line: 648,
          column: 5
        }
      },
      "237": {
        start: {
          line: 647,
          column: 36
        },
        end: {
          line: 647,
          column: 57
        }
      },
      "238": {
        start: {
          line: 649,
          column: 4
        },
        end: {
          line: 649,
          column: 15
        }
      },
      "239": {
        start: {
          line: 654,
          column: 2
        },
        end: {
          line: 668,
          column: 3
        }
      },
      "240": {
        start: {
          line: 656,
          column: 6
        },
        end: {
          line: 656,
          column: 38
        }
      },
      "241": {
        start: {
          line: 658,
          column: 6
        },
        end: {
          line: 658,
          column: 38
        }
      },
      "242": {
        start: {
          line: 660,
          column: 17
        },
        end: {
          line: 660,
          column: 50
        }
      },
      "243": {
        start: {
          line: 661,
          column: 6
        },
        end: {
          line: 661,
          column: 54
        }
      },
      "244": {
        start: {
          line: 665,
          column: 6
        },
        end: {
          line: 667,
          column: 8
        }
      },
      "245": {
        start: {
          line: 672,
          column: 2
        },
        end: {
          line: 672,
          column: 47
        }
      },
      "246": {
        start: {
          line: 676,
          column: 2
        },
        end: {
          line: 689,
          column: 4
        }
      },
      "247": {
        start: {
          line: 677,
          column: 4
        },
        end: {
          line: 688,
          column: 5
        }
      },
      "248": {
        start: {
          line: 679,
          column: 20
        },
        end: {
          line: 679,
          column: 66
        }
      },
      "249": {
        start: {
          line: 680,
          column: 8
        },
        end: {
          line: 680,
          column: 48
        }
      },
      "250": {
        start: {
          line: 683,
          column: 24
        },
        end: {
          line: 683,
          column: 69
        }
      },
      "251": {
        start: {
          line: 684,
          column: 8
        },
        end: {
          line: 684,
          column: 52
        }
      },
      "252": {
        start: {
          line: 687,
          column: 8
        },
        end: {
          line: 687,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "readObj",
        decl: {
          start: {
            line: 38,
            column: 9
          },
          end: {
            line: 38,
            column: 16
          }
        },
        loc: {
          start: {
            line: 38,
            column: 70
          },
          end: {
            line: 45,
            column: 1
          }
        },
        line: 38
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 40,
            column: 40
          },
          end: {
            line: 40,
            column: 41
          }
        },
        loc: {
          start: {
            line: 40,
            column: 55
          },
          end: {
            line: 40,
            column: 73
          }
        },
        line: 40
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 57,
            column: 2
          },
          end: {
            line: 57,
            column: 3
          }
        },
        loc: {
          start: {
            line: 57,
            column: 53
          },
          end: {
            line: 69,
            column: 3
          }
        },
        line: 57
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 63,
            column: 47
          },
          end: {
            line: 63,
            column: 48
          }
        },
        loc: {
          start: {
            line: 64,
            column: 8
          },
          end: {
            line: 64,
            column: 44
          }
        },
        line: 64
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 78,
            column: 2
          },
          end: {
            line: 78,
            column: 3
          }
        },
        loc: {
          start: {
            line: 78,
            column: 46
          },
          end: {
            line: 86,
            column: 3
          }
        },
        line: 78
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 106,
            column: 2
          },
          end: {
            line: 106,
            column: 3
          }
        },
        loc: {
          start: {
            line: 106,
            column: 60
          },
          end: {
            line: 111,
            column: 3
          }
        },
        line: 106
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 110,
            column: 11
          },
          end: {
            line: 110,
            column: 12
          }
        },
        loc: {
          start: {
            line: 110,
            column: 22
          },
          end: {
            line: 110,
            column: 76
          }
        },
        line: 110
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 128,
            column: 2
          },
          end: {
            line: 128,
            column: 3
          }
        },
        loc: {
          start: {
            line: 128,
            column: 72
          },
          end: {
            line: 147,
            column: 3
          }
        },
        line: 128
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 157,
            column: 2
          },
          end: {
            line: 157,
            column: 3
          }
        },
        loc: {
          start: {
            line: 157,
            column: 43
          },
          end: {
            line: 165,
            column: 3
          }
        },
        line: 157
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 159,
            column: 6
          },
          end: {
            line: 159,
            column: 7
          }
        },
        loc: {
          start: {
            line: 159,
            column: 17
          },
          end: {
            line: 159,
            column: 57
          }
        },
        line: 159
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 176,
            column: 2
          },
          end: {
            line: 176,
            column: 3
          }
        },
        loc: {
          start: {
            line: 176,
            column: 60
          },
          end: {
            line: 352,
            column: 3
          }
        },
        line: 176
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 253,
            column: 22
          },
          end: {
            line: 253,
            column: 23
          }
        },
        loc: {
          start: {
            line: 253,
            column: 29
          },
          end: {
            line: 253,
            column: 63
          }
        },
        line: 253
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 264,
            column: 22
          },
          end: {
            line: 264,
            column: 23
          }
        },
        loc: {
          start: {
            line: 264,
            column: 32
          },
          end: {
            line: 264,
            column: 66
          }
        },
        line: 264
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 354,
            column: 2
          },
          end: {
            line: 354,
            column: 3
          }
        },
        loc: {
          start: {
            line: 354,
            column: 57
          },
          end: {
            line: 374,
            column: 3
          }
        },
        line: 354
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 376,
            column: 2
          },
          end: {
            line: 376,
            column: 3
          }
        },
        loc: {
          start: {
            line: 379,
            column: 15
          },
          end: {
            line: 420,
            column: 3
          }
        },
        line: 379
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 381,
            column: 36
          },
          end: {
            line: 381,
            column: 37
          }
        },
        loc: {
          start: {
            line: 381,
            column: 47
          },
          end: {
            line: 384,
            column: 5
          }
        },
        line: 381
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 407,
            column: 38
          },
          end: {
            line: 407,
            column: 39
          }
        },
        loc: {
          start: {
            line: 408,
            column: 12
          },
          end: {
            line: 408,
            column: 43
          }
        },
        line: 408
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 422,
            column: 2
          },
          end: {
            line: 422,
            column: 3
          }
        },
        loc: {
          start: {
            line: 422,
            column: 77
          },
          end: {
            line: 443,
            column: 3
          }
        },
        line: 422
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 431,
            column: 19
          },
          end: {
            line: 431,
            column: 20
          }
        },
        loc: {
          start: {
            line: 431,
            column: 29
          },
          end: {
            line: 431,
            column: 73
          }
        },
        line: 431
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 435,
            column: 17
          },
          end: {
            line: 435,
            column: 18
          }
        },
        loc: {
          start: {
            line: 435,
            column: 28
          },
          end: {
            line: 441,
            column: 7
          }
        },
        line: 435
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 445,
            column: 2
          },
          end: {
            line: 445,
            column: 3
          }
        },
        loc: {
          start: {
            line: 445,
            column: 75
          },
          end: {
            line: 450,
            column: 3
          }
        },
        line: 445
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 446,
            column: 27
          },
          end: {
            line: 446,
            column: 28
          }
        },
        loc: {
          start: {
            line: 446,
            column: 38
          },
          end: {
            line: 446,
            column: 59
          }
        },
        line: 446
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 461,
            column: 2
          },
          end: {
            line: 461,
            column: 3
          }
        },
        loc: {
          start: {
            line: 461,
            column: 66
          },
          end: {
            line: 463,
            column: 3
          }
        },
        line: 461
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 474,
            column: 2
          },
          end: {
            line: 474,
            column: 3
          }
        },
        loc: {
          start: {
            line: 474,
            column: 66
          },
          end: {
            line: 567,
            column: 3
          }
        },
        line: 474
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 502,
            column: 39
          },
          end: {
            line: 502,
            column: 40
          }
        },
        loc: {
          start: {
            line: 503,
            column: 12
          },
          end: {
            line: 503,
            column: 54
          }
        },
        line: 503
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 508,
            column: 39
          },
          end: {
            line: 508,
            column: 40
          }
        },
        loc: {
          start: {
            line: 509,
            column: 12
          },
          end: {
            line: 509,
            column: 48
          }
        },
        line: 509
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 525,
            column: 20
          },
          end: {
            line: 525,
            column: 21
          }
        },
        loc: {
          start: {
            line: 525,
            column: 31
          },
          end: {
            line: 528,
            column: 13
          }
        },
        line: 525
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 569,
            column: 2
          },
          end: {
            line: 569,
            column: 3
          }
        },
        loc: {
          start: {
            line: 569,
            column: 72
          },
          end: {
            line: 583,
            column: 3
          }
        },
        line: 569
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 585,
            column: 2
          },
          end: {
            line: 585,
            column: 3
          }
        },
        loc: {
          start: {
            line: 585,
            column: 72
          },
          end: {
            line: 622,
            column: 3
          }
        },
        line: 585
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 623,
            column: 2
          },
          end: {
            line: 623,
            column: 3
          }
        },
        loc: {
          start: {
            line: 623,
            column: 74
          },
          end: {
            line: 640,
            column: 3
          }
        },
        line: 623
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 629,
            column: 14
          },
          end: {
            line: 629,
            column: 15
          }
        },
        loc: {
          start: {
            line: 629,
            column: 28
          },
          end: {
            line: 629,
            column: 71
          }
        },
        line: 629
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 632,
            column: 23
          },
          end: {
            line: 632,
            column: 24
          }
        },
        loc: {
          start: {
            line: 632,
            column: 37
          },
          end: {
            line: 638,
            column: 5
          }
        },
        line: 632
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 642,
            column: 2
          },
          end: {
            line: 642,
            column: 3
          }
        },
        loc: {
          start: {
            line: 642,
            column: 70
          },
          end: {
            line: 650,
            column: 3
          }
        },
        line: 642
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 647,
            column: 25
          },
          end: {
            line: 647,
            column: 26
          }
        },
        loc: {
          start: {
            line: 647,
            column: 36
          },
          end: {
            line: 647,
            column: 57
          }
        },
        line: 647
      },
      "34": {
        name: "stringToScVal",
        decl: {
          start: {
            line: 653,
            column: 9
          },
          end: {
            line: 653,
            column: 22
          }
        },
        loc: {
          start: {
            line: 653,
            column: 67
          },
          end: {
            line: 669,
            column: 1
          }
        },
        line: 653
      },
      "35": {
        name: "isNumeric",
        decl: {
          start: {
            line: 671,
            column: 9
          },
          end: {
            line: 671,
            column: 18
          }
        },
        loc: {
          start: {
            line: 671,
            column: 54
          },
          end: {
            line: 673,
            column: 1
          }
        },
        line: 671
      },
      "36": {
        name: "findCase",
        decl: {
          start: {
            line: 675,
            column: 9
          },
          end: {
            line: 675,
            column: 17
          }
        },
        loc: {
          start: {
            line: 675,
            column: 32
          },
          end: {
            line: 690,
            column: 1
          }
        },
        line: 675
      },
      "37": {
        name: "matches",
        decl: {
          start: {
            line: 676,
            column: 18
          },
          end: {
            line: 676,
            column: 25
          }
        },
        loc: {
          start: {
            line: 676,
            column: 59
          },
          end: {
            line: 689,
            column: 3
          }
        },
        line: 676
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 43,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 41,
            column: 2
          },
          end: {
            line: 43,
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
        line: 41
      },
      "1": {
        loc: {
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 58,
            column: 4
          },
          end: {
            line: 60,
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
        line: 58
      },
      "2": {
        loc: {
          start: {
            line: 62,
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
            line: 62,
            column: 4
          },
          end: {
            line: 68,
            column: 5
          }
        }, {
          start: {
            line: 66,
            column: 11
          },
          end: {
            line: 68,
            column: 5
          }
        }],
        line: 62
      },
      "3": {
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 84,
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
        line: 80
      },
      "4": {
        loc: {
          start: {
            line: 130,
            column: 6
          },
          end: {
            line: 132,
            column: 23
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 131,
            column: 10
          },
          end: {
            line: 131,
            column: 52
          }
        }, {
          start: {
            line: 132,
            column: 10
          },
          end: {
            line: 132,
            column: 23
          }
        }],
        line: 130
      },
      "5": {
        loc: {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 141,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 141,
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
        line: 135
      },
      "6": {
        loc: {
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 137,
            column: 6
          },
          end: {
            line: 139,
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
        line: 137
      },
      "7": {
        loc: {
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 142,
            column: 4
          },
          end: {
            line: 144,
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
        line: 142
      },
      "8": {
        loc: {
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 163,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 161,
            column: 4
          },
          end: {
            line: 163,
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
        line: 161
      },
      "9": {
        loc: {
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 182,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 179,
            column: 4
          },
          end: {
            line: 182,
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
        line: 179
      },
      "10": {
        loc: {
          start: {
            line: 183,
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
            line: 183,
            column: 4
          },
          end: {
            line: 189,
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
        line: 183
      },
      "11": {
        loc: {
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 187,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 185,
            column: 6
          },
          end: {
            line: 187,
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
        line: 185
      },
      "12": {
        loc: {
          start: {
            line: 191,
            column: 4
          },
          end: {
            line: 351,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 192,
            column: 6
          },
          end: {
            line: 300,
            column: 7
          }
        }, {
          start: {
            line: 302,
            column: 6
          },
          end: {
            line: 302,
            column: 20
          }
        }, {
          start: {
            line: 303,
            column: 6
          },
          end: {
            line: 321,
            column: 7
          }
        }, {
          start: {
            line: 322,
            column: 6
          },
          end: {
            line: 323,
            column: 37
          }
        }, {
          start: {
            line: 325,
            column: 6
          },
          end: {
            line: 330,
            column: 7
          }
        }, {
          start: {
            line: 331,
            column: 6
          },
          end: {
            line: 344,
            column: 7
          }
        }, {
          start: {
            line: 346,
            column: 6
          },
          end: {
            line: 347,
            column: 45
          }
        }, {
          start: {
            line: 349,
            column: 6
          },
          end: {
            line: 350,
            column: 79
          }
        }],
        line: 191
      },
      "13": {
        loc: {
          start: {
            line: 193,
            column: 8
          },
          end: {
            line: 202,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 193,
            column: 8
          },
          end: {
            line: 202,
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
        line: 193
      },
      "14": {
        loc: {
          start: {
            line: 194,
            column: 10
          },
          end: {
            line: 201,
            column: 11
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 195,
            column: 12
          },
          end: {
            line: 196,
            column: 41
          }
        }, {
          start: {
            line: 197,
            column: 12
          },
          end: {
            line: 200,
            column: 16
          }
        }],
        line: 194
      },
      "15": {
        loc: {
          start: {
            line: 204,
            column: 8
          },
          end: {
            line: 206,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 204,
            column: 8
          },
          end: {
            line: 206,
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
        line: 204
      },
      "16": {
        loc: {
          start: {
            line: 208,
            column: 8
          },
          end: {
            line: 215,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 208,
            column: 8
          },
          end: {
            line: 215,
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
        line: 208
      },
      "17": {
        loc: {
          start: {
            line: 209,
            column: 10
          },
          end: {
            line: 213,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 209,
            column: 10
          },
          end: {
            line: 213,
            column: 11
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
        line: 209
      },
      "18": {
        loc: {
          start: {
            line: 217,
            column: 8
          },
          end: {
            line: 224,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 217,
            column: 8
          },
          end: {
            line: 224,
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
        line: 217
      },
      "19": {
        loc: {
          start: {
            line: 218,
            column: 10
          },
          end: {
            line: 222,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 218,
            column: 10
          },
          end: {
            line: 222,
            column: 11
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
        line: 218
      },
      "20": {
        loc: {
          start: {
            line: 226,
            column: 8
          },
          end: {
            line: 247,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 226,
            column: 8
          },
          end: {
            line: 247,
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
        line: 226
      },
      "21": {
        loc: {
          start: {
            line: 226,
            column: 12
          },
          end: {
            line: 226,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 226,
            column: 12
          },
          end: {
            line: 226,
            column: 37
          }
        }, {
          start: {
            line: 226,
            column: 41
          },
          end: {
            line: 226,
            column: 61
          }
        }],
        line: 226
      },
      "22": {
        loc: {
          start: {
            line: 228,
            column: 10
          },
          end: {
            line: 246,
            column: 11
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 229,
            column: 12
          },
          end: {
            line: 238,
            column: 13
          }
        }, {
          start: {
            line: 239,
            column: 12
          },
          end: {
            line: 241,
            column: 46
          }
        }, {
          start: {
            line: 242,
            column: 12
          },
          end: {
            line: 245,
            column: 16
          }
        }],
        line: 228
      },
      "23": {
        loc: {
          start: {
            line: 231,
            column: 14
          },
          end: {
            line: 235,
            column: 15
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 231,
            column: 14
          },
          end: {
            line: 235,
            column: 15
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
        line: 231
      },
      "24": {
        loc: {
          start: {
            line: 248,
            column: 8
          },
          end: {
            line: 269,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 248,
            column: 8
          },
          end: {
            line: 269,
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
        line: 248
      },
      "25": {
        loc: {
          start: {
            line: 249,
            column: 10
          },
          end: {
            line: 268,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 249,
            column: 10
          },
          end: {
            line: 268,
            column: 11
          }
        }, {
          start: {
            line: 255,
            column: 17
          },
          end: {
            line: 268,
            column: 11
          }
        }],
        line: 249
      },
      "26": {
        loc: {
          start: {
            line: 255,
            column: 17
          },
          end: {
            line: 268,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 255,
            column: 17
          },
          end: {
            line: 268,
            column: 11
          }
        }, {
          start: {
            line: 266,
            column: 17
          },
          end: {
            line: 268,
            column: 11
          }
        }],
        line: 255
      },
      "27": {
        loc: {
          start: {
            line: 258,
            column: 12
          },
          end: {
            line: 262,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 258,
            column: 12
          },
          end: {
            line: 262,
            column: 13
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
        line: 258
      },
      "28": {
        loc: {
          start: {
            line: 270,
            column: 8
          },
          end: {
            line: 287,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 270,
            column: 8
          },
          end: {
            line: 287,
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
        line: 270
      },
      "29": {
        loc: {
          start: {
            line: 271,
            column: 10
          },
          end: {
            line: 273,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 271,
            column: 10
          },
          end: {
            line: 273,
            column: 11
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
        line: 271
      },
      "30": {
        loc: {
          start: {
            line: 289,
            column: 8
          },
          end: {
            line: 295,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 289,
            column: 8
          },
          end: {
            line: 295,
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
        line: 289
      },
      "31": {
        loc: {
          start: {
            line: 289,
            column: 13
          },
          end: {
            line: 289,
            column: 40
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 289,
            column: 13
          },
          end: {
            line: 289,
            column: 34
          }
        }, {
          start: {
            line: 289,
            column: 38
          },
          end: {
            line: 289,
            column: 40
          }
        }],
        line: 289
      },
      "32": {
        loc: {
          start: {
            line: 304,
            column: 8
          },
          end: {
            line: 320,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 305,
            column: 10
          },
          end: {
            line: 306,
            column: 51
          }
        }, {
          start: {
            line: 307,
            column: 10
          },
          end: {
            line: 308,
            column: 51
          }
        }, {
          start: {
            line: 309,
            column: 10
          },
          end: {
            line: 309,
            column: 52
          }
        }, {
          start: {
            line: 310,
            column: 10
          },
          end: {
            line: 310,
            column: 52
          }
        }, {
          start: {
            line: 311,
            column: 10
          },
          end: {
            line: 311,
            column: 53
          }
        }, {
          start: {
            line: 312,
            column: 10
          },
          end: {
            line: 312,
            column: 53
          }
        }, {
          start: {
            line: 313,
            column: 10
          },
          end: {
            line: 313,
            column: 53
          }
        }, {
          start: {
            line: 314,
            column: 10
          },
          end: {
            line: 317,
            column: 11
          }
        }, {
          start: {
            line: 318,
            column: 10
          },
          end: {
            line: 319,
            column: 78
          }
        }],
        line: 304
      },
      "33": {
        loc: {
          start: {
            line: 326,
            column: 8
          },
          end: {
            line: 328,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 326,
            column: 8
          },
          end: {
            line: 328,
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
        line: 326
      },
      "34": {
        loc: {
          start: {
            line: 332,
            column: 8
          },
          end: {
            line: 334,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 332,
            column: 8
          },
          end: {
            line: 334,
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
        line: 332
      },
      "35": {
        loc: {
          start: {
            line: 335,
            column: 8
          },
          end: {
            line: 343,
            column: 9
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 336,
            column: 10
          },
          end: {
            line: 336,
            column: 53
          }
        }, {
          start: {
            line: 337,
            column: 10
          },
          end: {
            line: 338,
            column: 39
          }
        }, {
          start: {
            line: 339,
            column: 10
          },
          end: {
            line: 342,
            column: 14
          }
        }],
        line: 335
      },
      "36": {
        loc: {
          start: {
            line: 356,
            column: 4
          },
          end: {
            line: 373,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 357,
            column: 6
          },
          end: {
            line: 366,
            column: 10
          }
        }, {
          start: {
            line: 367,
            column: 6
          },
          end: {
            line: 368,
            column: 80
          }
        }, {
          start: {
            line: 369,
            column: 6
          },
          end: {
            line: 370,
            column: 78
          }
        }, {
          start: {
            line: 371,
            column: 6
          },
          end: {
            line: 372,
            column: 55
          }
        }],
        line: 356
      },
      "37": {
        loc: {
          start: {
            line: 358,
            column: 8
          },
          end: {
            line: 362,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 358,
            column: 8
          },
          end: {
            line: 362,
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
        line: 358
      },
      "38": {
        loc: {
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 387,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 385,
            column: 4
          },
          end: {
            line: 387,
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
        line: 385
      },
      "39": {
        loc: {
          start: {
            line: 389,
            column: 4
          },
          end: {
            line: 417,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 390,
            column: 6
          },
          end: {
            line: 392,
            column: 7
          }
        }, {
          start: {
            line: 393,
            column: 6
          },
          end: {
            line: 414,
            column: 7
          }
        }, {
          start: {
            line: 415,
            column: 6
          },
          end: {
            line: 416,
            column: 71
          }
        }],
        line: 389
      },
      "40": {
        loc: {
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 412,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 401,
            column: 8
          },
          end: {
            line: 412,
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
        line: 401
      },
      "41": {
        loc: {
          start: {
            line: 402,
            column: 10
          },
          end: {
            line: 406,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 402,
            column: 10
          },
          end: {
            line: 406,
            column: 11
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
        line: 402
      },
      "42": {
        loc: {
          start: {
            line: 424,
            column: 4
          },
          end: {
            line: 433,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 424,
            column: 4
          },
          end: {
            line: 433,
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
        line: 424
      },
      "43": {
        loc: {
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 429,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 425,
            column: 6
          },
          end: {
            line: 429,
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
        line: 425
      },
      "44": {
        loc: {
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 448,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 446,
            column: 4
          },
          end: {
            line: 448,
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
        line: 446
      },
      "45": {
        loc: {
          start: {
            line: 477,
            column: 4
          },
          end: {
            line: 479,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 477,
            column: 4
          },
          end: {
            line: 479,
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
        line: 477
      },
      "46": {
        loc: {
          start: {
            line: 483,
            column: 4
          },
          end: {
            line: 566,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 484,
            column: 6
          },
          end: {
            line: 485,
            column: 27
          }
        }, {
          start: {
            line: 488,
            column: 6
          },
          end: {
            line: 488,
            column: 40
          }
        }, {
          start: {
            line: 489,
            column: 6
          },
          end: {
            line: 489,
            column: 40
          }
        }, {
          start: {
            line: 493,
            column: 6
          },
          end: {
            line: 493,
            column: 41
          }
        }, {
          start: {
            line: 494,
            column: 6
          },
          end: {
            line: 494,
            column: 41
          }
        }, {
          start: {
            line: 495,
            column: 6
          },
          end: {
            line: 495,
            column: 41
          }
        }, {
          start: {
            line: 496,
            column: 6
          },
          end: {
            line: 497,
            column: 39
          }
        }, {
          start: {
            line: 499,
            column: 6
          },
          end: {
            line: 513,
            column: 7
          }
        }, {
          start: {
            line: 515,
            column: 6
          },
          end: {
            line: 516,
            column: 43
          }
        }, {
          start: {
            line: 518,
            column: 6
          },
          end: {
            line: 534,
            column: 7
          }
        }, {
          start: {
            line: 537,
            column: 6
          },
          end: {
            line: 537,
            column: 41
          }
        }, {
          start: {
            line: 538,
            column: 6
          },
          end: {
            line: 538,
            column: 40
          }
        }, {
          start: {
            line: 539,
            column: 6
          },
          end: {
            line: 539,
            column: 40
          }
        }, {
          start: {
            line: 540,
            column: 6
          },
          end: {
            line: 541,
            column: 32
          }
        }, {
          start: {
            line: 543,
            column: 6
          },
          end: {
            line: 543,
            column: 43
          }
        }, {
          start: {
            line: 544,
            column: 6
          },
          end: {
            line: 554,
            column: 7
          }
        }, {
          start: {
            line: 557,
            column: 6
          },
          end: {
            line: 557,
            column: 46
          }
        }, {
          start: {
            line: 558,
            column: 6
          },
          end: {
            line: 559,
            column: 79
          }
        }, {
          start: {
            line: 562,
            column: 6
          },
          end: {
            line: 565,
            column: 10
          }
        }],
        line: 483
      },
      "47": {
        loc: {
          start: {
            line: 500,
            column: 8
          },
          end: {
            line: 511,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 500,
            column: 8
          },
          end: {
            line: 511,
            column: 9
          }
        }, {
          start: {
            line: 505,
            column: 15
          },
          end: {
            line: 511,
            column: 9
          }
        }],
        line: 500
      },
      "48": {
        loc: {
          start: {
            line: 502,
            column: 18
          },
          end: {
            line: 502,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 502,
            column: 18
          },
          end: {
            line: 502,
            column: 27
          }
        }, {
          start: {
            line: 502,
            column: 31
          },
          end: {
            line: 502,
            column: 33
          }
        }],
        line: 502
      },
      "49": {
        loc: {
          start: {
            line: 505,
            column: 15
          },
          end: {
            line: 511,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 505,
            column: 15
          },
          end: {
            line: 511,
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
        line: 505
      },
      "50": {
        loc: {
          start: {
            line: 508,
            column: 18
          },
          end: {
            line: 508,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 508,
            column: 18
          },
          end: {
            line: 508,
            column: 27
          }
        }, {
          start: {
            line: 508,
            column: 31
          },
          end: {
            line: 508,
            column: 33
          }
        }],
        line: 508
      },
      "51": {
        loc: {
          start: {
            line: 519,
            column: 18
          },
          end: {
            line: 519,
            column: 33
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 519,
            column: 18
          },
          end: {
            line: 519,
            column: 27
          }
        }, {
          start: {
            line: 519,
            column: 31
          },
          end: {
            line: 519,
            column: 33
          }
        }],
        line: 519
      },
      "52": {
        loc: {
          start: {
            line: 520,
            column: 8
          },
          end: {
            line: 530,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 520,
            column: 8
          },
          end: {
            line: 530,
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
        line: 520
      },
      "53": {
        loc: {
          start: {
            line: 545,
            column: 8
          },
          end: {
            line: 552,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 545,
            column: 8
          },
          end: {
            line: 552,
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
        line: 545
      },
      "54": {
        loc: {
          start: {
            line: 546,
            column: 10
          },
          end: {
            line: 547,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 546,
            column: 10
          },
          end: {
            line: 546,
            column: 59
          }
        }, {
          start: {
            line: 547,
            column: 10
          },
          end: {
            line: 547,
            column: 59
          }
        }],
        line: 546
      },
      "55": {
        loc: {
          start: {
            line: 571,
            column: 4
          },
          end: {
            line: 582,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 572,
            column: 6
          },
          end: {
            line: 573,
            column: 76
          }
        }, {
          start: {
            line: 574,
            column: 6
          },
          end: {
            line: 575,
            column: 80
          }
        }, {
          start: {
            line: 576,
            column: 6
          },
          end: {
            line: 577,
            column: 78
          }
        }, {
          start: {
            line: 578,
            column: 6
          },
          end: {
            line: 581,
            column: 10
          }
        }],
        line: 571
      },
      "56": {
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
      "57": {
        loc: {
          start: {
            line: 590,
            column: 4
          },
          end: {
            line: 594,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 590,
            column: 4
          },
          end: {
            line: 594,
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
        line: 590
      },
      "58": {
        loc: {
          start: {
            line: 590,
            column: 8
          },
          end: {
            line: 590,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 590,
            column: 8
          },
          end: {
            line: 590,
            column: 24
          }
        }, {
          start: {
            line: 590,
            column: 28
          },
          end: {
            line: 590,
            column: 50
          }
        }],
        line: 590
      },
      "59": {
        loc: {
          start: {
            line: 596,
            column: 4
          },
          end: {
            line: 598,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 596,
            column: 4
          },
          end: {
            line: 598,
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
        line: 596
      },
      "60": {
        loc: {
          start: {
            line: 600,
            column: 4
          },
          end: {
            line: 604,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 600,
            column: 4
          },
          end: {
            line: 604,
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
        line: 600
      },
      "61": {
        loc: {
          start: {
            line: 606,
            column: 4
          },
          end: {
            line: 620,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 606,
            column: 4
          },
          end: {
            line: 620,
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
        line: 606
      },
      "62": {
        loc: {
          start: {
            line: 626,
            column: 4
          },
          end: {
            line: 631,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 626,
            column: 4
          },
          end: {
            line: 631,
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
        line: 626
      },
      "63": {
        loc: {
          start: {
            line: 643,
            column: 4
          },
          end: {
            line: 645,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 643,
            column: 4
          },
          end: {
            line: 645,
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
        line: 643
      },
      "64": {
        loc: {
          start: {
            line: 647,
            column: 4
          },
          end: {
            line: 648,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 647,
            column: 4
          },
          end: {
            line: 648,
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
        line: 647
      },
      "65": {
        loc: {
          start: {
            line: 654,
            column: 2
          },
          end: {
            line: 668,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 655,
            column: 4
          },
          end: {
            line: 656,
            column: 38
          }
        }, {
          start: {
            line: 657,
            column: 4
          },
          end: {
            line: 658,
            column: 38
          }
        }, {
          start: {
            line: 659,
            column: 4
          },
          end: {
            line: 662,
            column: 5
          }
        }, {
          start: {
            line: 664,
            column: 4
          },
          end: {
            line: 667,
            column: 8
          }
        }],
        line: 654
      },
      "66": {
        loc: {
          start: {
            line: 677,
            column: 4
          },
          end: {
            line: 688,
            column: 5
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 678,
            column: 6
          },
          end: {
            line: 681,
            column: 7
          }
        }, {
          start: {
            line: 682,
            column: 6
          },
          end: {
            line: 685,
            column: 7
          }
        }, {
          start: {
            line: 686,
            column: 6
          },
          end: {
            line: 687,
            column: 21
          }
        }],
        line: 677
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
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0
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
      "37": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0, 0, 0, 0, 0, 0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0, 0],
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0, 0],
      "32": [0, 0, 0, 0, 0, 0, 0, 0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0, 0],
      "36": [0, 0, 0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0, 0],
      "40": [0, 0],
      "41": [0, 0],
      "42": [0, 0],
      "43": [0, 0],
      "44": [0, 0],
      "45": [0, 0],
      "46": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0, 0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0],
      "61": [0, 0],
      "62": [0, 0],
      "63": [0, 0],
      "64": [0, 0],
      "65": [0, 0, 0, 0],
      "66": [0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6fdc1b7931e58db035152b0b641104140747c1c5"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mtjvyog38 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2mtjvyog38();
/**
 * Provides a ContractSpec class which can contains the XDR types defined by the contract.
 * This allows the class to be used to convert between native and raw `xdr.ScVal`s.
 *
 * @example
 * ```js
 * const specEntries = [...]; // XDR spec entries of a smart contract
 * const contractSpec = new ContractSpec(specEntries);
 *
 * // Convert native value to ScVal
 * const args = {
 *   arg1: 'value1',
 *   arg2: 1234
 * };
 * const scArgs = contractSpec.funcArgsToScVals('funcName', args);
 *
 * // Call contract
 * const resultScv = await callContract(contractId, 'funcName', scArgs);
 *
 * // Convert result ScVal back to native value
 * const result = contractSpec.funcResToNative('funcName', resultScv);
 *
 * console.log(result); // {success: true}
 * ```
 */
function readObj(args, input) {
  cov_2mtjvyog38().f[0]++;
  let inputName = (cov_2mtjvyog38().s[0]++, input.name().toString());
  let entry = (cov_2mtjvyog38().s[1]++, Object.entries(args).find(([name, _]) => {
    cov_2mtjvyog38().f[1]++;
    cov_2mtjvyog38().s[2]++;
    return name === inputName;
  }));
  cov_2mtjvyog38().s[3]++;
  if (!entry) {
    cov_2mtjvyog38().b[0][0]++;
    cov_2mtjvyog38().s[4]++;
    throw new Error(`Missing field ${inputName}`);
  } else {
    cov_2mtjvyog38().b[0][1]++;
  }
  cov_2mtjvyog38().s[5]++;
  return entry[1];
}
class ContractSpec {
  entries = (cov_2mtjvyog38().s[6]++, []);

  /**
   * Constructs a new ContractSpec from an array of XDR spec entries.
   *
   * @param {xdr.ScSpecEntry[] | string[]} entries the XDR spec entries
   *
   * @throws {Error} if entries is invalid
   */
  constructor(entries) {
    cov_2mtjvyog38().f[2]++;
    cov_2mtjvyog38().s[7]++;
    if (entries.length == 0) {
      cov_2mtjvyog38().b[1][0]++;
      cov_2mtjvyog38().s[8]++;
      throw new Error("Contract spec must have at least one entry");
    } else {
      cov_2mtjvyog38().b[1][1]++;
    }
    let entry = (cov_2mtjvyog38().s[9]++, entries[0]);
    cov_2mtjvyog38().s[10]++;
    if (typeof entry === "string") {
      cov_2mtjvyog38().b[2][0]++;
      cov_2mtjvyog38().s[11]++;
      this.entries = entries.map(s => {
        cov_2mtjvyog38().f[3]++;
        cov_2mtjvyog38().s[12]++;
        return _stellarBase.xdr.ScSpecEntry.fromXDR(s, "base64");
      });
    } else {
      cov_2mtjvyog38().b[2][1]++;
      cov_2mtjvyog38().s[13]++;
      this.entries = entries;
    }
  }
  /**
   * Gets the XDR function spec for the given function name.
   *
   * @param {string} name the name of the function
   * @returns {xdr.ScSpecFunctionV0} the function spec
   *
   * @throws {Error} if no function with the given name exists
   */
  getFunc(name) {
    cov_2mtjvyog38().f[4]++;
    let entry = (cov_2mtjvyog38().s[14]++, this.findEntry(name));
    cov_2mtjvyog38().s[15]++;
    if (entry.switch().value !== _stellarBase.xdr.ScSpecEntryKind.scSpecEntryFunctionV0().value) {
      cov_2mtjvyog38().b[3][0]++;
      cov_2mtjvyog38().s[16]++;
      throw new Error(`${name} is not a function`);
    } else {
      cov_2mtjvyog38().b[3][1]++;
    }
    cov_2mtjvyog38().s[17]++;
    return entry.value();
  }

  /**
   * Converts native JS arguments to ScVals for calling a contract function.
   *
   * @param {string} name the name of the function
   * @param {Object} args the arguments object
   * @returns {xdr.ScVal[]} the converted arguments
   *
   * @throws {Error} if argument is missing or incorrect type
   *
   * @example
   * ```js
   * const args = {
   *   arg1: 'value1',
   *   arg2: 1234
   * };
   * const scArgs = contractSpec.funcArgsToScVals('funcName', args);
   * ```
   */
  funcArgsToScVals(name, args) {
    cov_2mtjvyog38().f[5]++;
    let fn = (cov_2mtjvyog38().s[18]++, this.getFunc(name));
    cov_2mtjvyog38().s[19]++;
    return fn.inputs().map(input => {
      cov_2mtjvyog38().f[6]++;
      cov_2mtjvyog38().s[20]++;
      return this.nativeToScVal(readObj(args, input), input.type());
    });
  }

  /**
   * Converts the result ScVal of a function call to a native JS value.
   *
   * @param {string} name the name of the function
   * @param {xdr.ScVal | string} val_or_base64 the result ScVal or base64 encoded string
   * @returns {any} the converted native value
   *
   * @throws {Error} if return type mismatch or invalid input
   *
   * @example
   * ```js
   * const resultScv = 'AAA=='; // Base64 encoded ScVal
   * const result = contractSpec.funcResToNative('funcName', resultScv);
   * ```
   */
  funcResToNative(name, val_or_base64) {
    cov_2mtjvyog38().f[7]++;
    let val = (cov_2mtjvyog38().s[21]++, typeof val_or_base64 === "string" ? (cov_2mtjvyog38().b[4][0]++, _stellarBase.xdr.ScVal.fromXDR(val_or_base64, "base64")) : (cov_2mtjvyog38().b[4][1]++, val_or_base64));
    let func = (cov_2mtjvyog38().s[22]++, this.getFunc(name));
    let outputs = (cov_2mtjvyog38().s[23]++, func.outputs());
    cov_2mtjvyog38().s[24]++;
    if (outputs.length === 0) {
      cov_2mtjvyog38().b[5][0]++;
      let type = (cov_2mtjvyog38().s[25]++, val.switch());
      cov_2mtjvyog38().s[26]++;
      if (type.value !== _stellarBase.xdr.ScValType.scvVoid().value) {
        cov_2mtjvyog38().b[6][0]++;
        cov_2mtjvyog38().s[27]++;
        throw new Error(`Expected void, got ${type.name}`);
      } else {
        cov_2mtjvyog38().b[6][1]++;
      }
      cov_2mtjvyog38().s[28]++;
      return null;
    } else {
      cov_2mtjvyog38().b[5][1]++;
    }
    cov_2mtjvyog38().s[29]++;
    if (outputs.length > 1) {
      cov_2mtjvyog38().b[7][0]++;
      cov_2mtjvyog38().s[30]++;
      throw new Error(`Multiple outputs not supported`);
    } else {
      cov_2mtjvyog38().b[7][1]++;
    }
    let output = (cov_2mtjvyog38().s[31]++, outputs[0]);
    cov_2mtjvyog38().s[32]++;
    return this.scValToNative(val, output);
  }

  /**
   * Finds the XDR spec entry for the given name.
   *
   * @param {string} name the name to find
   * @returns {xdr.ScSpecEntry} the entry
   *
   * @throws {Error} if no entry with the given name exists
   */
  findEntry(name) {
    cov_2mtjvyog38().f[8]++;
    let entry = (cov_2mtjvyog38().s[33]++, this.entries.find(entry => {
      cov_2mtjvyog38().f[9]++;
      cov_2mtjvyog38().s[34]++;
      return entry.value().name().toString() === name;
    }));
    cov_2mtjvyog38().s[35]++;
    if (!entry) {
      cov_2mtjvyog38().b[8][0]++;
      cov_2mtjvyog38().s[36]++;
      throw new Error(`no such entry: ${name}`);
    } else {
      cov_2mtjvyog38().b[8][1]++;
    }
    cov_2mtjvyog38().s[37]++;
    return entry;
  }

  /**
   * Converts a native JS value to an ScVal based on the given type.
   *
   * @param {any} val the native JS value
   * @param {xdr.ScSpecTypeDef} [ty] the expected type
   * @returns {xdr.ScVal} the converted ScVal
   *
   * @throws {Error} if value cannot be converted to the given type
   */
  nativeToScVal(val, ty) {
    cov_2mtjvyog38().f[10]++;
    let t = (cov_2mtjvyog38().s[38]++, ty.switch());
    let value = (cov_2mtjvyog38().s[39]++, t.value);
    cov_2mtjvyog38().s[40]++;
    if (t.value === _stellarBase.xdr.ScSpecType.scSpecTypeUdt().value) {
      cov_2mtjvyog38().b[9][0]++;
      let udt = (cov_2mtjvyog38().s[41]++, ty.value());
      cov_2mtjvyog38().s[42]++;
      return this.nativeToUdt(val, udt.name().toString());
    } else {
      cov_2mtjvyog38().b[9][1]++;
    }
    cov_2mtjvyog38().s[43]++;
    if (value === _stellarBase.xdr.ScSpecType.scSpecTypeOption().value) {
      cov_2mtjvyog38().b[10][0]++;
      let opt = (cov_2mtjvyog38().s[44]++, ty.value());
      cov_2mtjvyog38().s[45]++;
      if (val === undefined) {
        cov_2mtjvyog38().b[11][0]++;
        cov_2mtjvyog38().s[46]++;
        return _stellarBase.xdr.ScVal.scvVoid();
      } else {
        cov_2mtjvyog38().b[11][1]++;
      }
      cov_2mtjvyog38().s[47]++;
      return this.nativeToScVal(val, opt.valueType());
    } else {
      cov_2mtjvyog38().b[10][1]++;
    }
    cov_2mtjvyog38().s[48]++;
    switch (typeof val) {
      case "object":
        cov_2mtjvyog38().b[12][0]++;
        {
          var _val$constructor;
          cov_2mtjvyog38().s[49]++;
          if (val === null) {
            cov_2mtjvyog38().b[13][0]++;
            cov_2mtjvyog38().s[50]++;
            switch (value) {
              case _stellarBase.xdr.ScSpecType.scSpecTypeVoid().value:
                cov_2mtjvyog38().b[14][0]++;
                cov_2mtjvyog38().s[51]++;
                return _stellarBase.xdr.ScVal.scvVoid();
              default:
                cov_2mtjvyog38().b[14][1]++;
                cov_2mtjvyog38().s[52]++;
                throw new TypeError(`Type ${ty} was not void, but value was null`);
            }
          } else {
            cov_2mtjvyog38().b[13][1]++;
          }
          cov_2mtjvyog38().s[53]++;
          if (val instanceof _stellarBase.xdr.ScVal) {
            cov_2mtjvyog38().b[15][0]++;
            cov_2mtjvyog38().s[54]++;
            return val; // should we copy?
          } else {
            cov_2mtjvyog38().b[15][1]++;
          }
          cov_2mtjvyog38().s[55]++;
          if (val instanceof _stellarBase.Address) {
            cov_2mtjvyog38().b[16][0]++;
            cov_2mtjvyog38().s[56]++;
            if (ty.switch().value !== _stellarBase.xdr.ScSpecType.scSpecTypeAddress().value) {
              cov_2mtjvyog38().b[17][0]++;
              cov_2mtjvyog38().s[57]++;
              throw new TypeError(`Type ${ty} was not address, but value was Address`);
            } else {
              cov_2mtjvyog38().b[17][1]++;
            }
            cov_2mtjvyog38().s[58]++;
            return val.toScVal();
          } else {
            cov_2mtjvyog38().b[16][1]++;
          }
          cov_2mtjvyog38().s[59]++;
          if (val instanceof _stellarBase.Contract) {
            cov_2mtjvyog38().b[18][0]++;
            cov_2mtjvyog38().s[60]++;
            if (ty.switch().value !== _stellarBase.xdr.ScSpecType.scSpecTypeAddress().value) {
              cov_2mtjvyog38().b[19][0]++;
              cov_2mtjvyog38().s[61]++;
              throw new TypeError(`Type ${ty} was not address, but value was Address`);
            } else {
              cov_2mtjvyog38().b[19][1]++;
            }
            cov_2mtjvyog38().s[62]++;
            return val.address().toScVal();
          } else {
            cov_2mtjvyog38().b[18][1]++;
          }
          cov_2mtjvyog38().s[63]++;
          if ((cov_2mtjvyog38().b[21][0]++, val instanceof Uint8Array) || (cov_2mtjvyog38().b[21][1]++, Buffer.isBuffer(val))) {
            cov_2mtjvyog38().b[20][0]++;
            const copy = (cov_2mtjvyog38().s[64]++, Uint8Array.from(val));
            cov_2mtjvyog38().s[65]++;
            switch (value) {
              case _stellarBase.xdr.ScSpecType.scSpecTypeBytesN().value:
                cov_2mtjvyog38().b[22][0]++;
                {
                  let bytes_n = (cov_2mtjvyog38().s[66]++, ty.value());
                  cov_2mtjvyog38().s[67]++;
                  if (copy.length !== bytes_n.n()) {
                    cov_2mtjvyog38().b[23][0]++;
                    cov_2mtjvyog38().s[68]++;
                    throw new TypeError(`expected ${bytes_n.n()} bytes, but got ${copy.length}`);
                  } else {
                    cov_2mtjvyog38().b[23][1]++;
                  }
                  //@ts-ignore
                  cov_2mtjvyog38().s[69]++;
                  return _stellarBase.xdr.ScVal.scvBytes(copy);
                }
              case _stellarBase.xdr.ScSpecType.scSpecTypeBytes().value:
                cov_2mtjvyog38().b[22][1]++;
                cov_2mtjvyog38().s[70]++;
                //@ts-ignore
                return _stellarBase.xdr.ScVal.scvBytes(copy);
              default:
                cov_2mtjvyog38().b[22][2]++;
                cov_2mtjvyog38().s[71]++;
                throw new TypeError(`invalid type (${ty}) specified for Bytes and BytesN`);
            }
          } else {
            cov_2mtjvyog38().b[20][1]++;
          }
          cov_2mtjvyog38().s[72]++;
          if (Array.isArray(val)) {
            cov_2mtjvyog38().b[24][0]++;
            cov_2mtjvyog38().s[73]++;
            if (_stellarBase.xdr.ScSpecType.scSpecTypeVec().value === value) {
              cov_2mtjvyog38().b[25][0]++;
              let vec = (cov_2mtjvyog38().s[74]++, ty.value());
              let elementType = (cov_2mtjvyog38().s[75]++, vec.elementType());
              cov_2mtjvyog38().s[76]++;
              return _stellarBase.xdr.ScVal.scvVec(val.map(v => {
                cov_2mtjvyog38().f[11]++;
                cov_2mtjvyog38().s[77]++;
                return this.nativeToScVal(v, elementType);
              }));
            } else {
              cov_2mtjvyog38().b[25][1]++;
              cov_2mtjvyog38().s[78]++;
              if (_stellarBase.xdr.ScSpecType.scSpecTypeTuple().value === value) {
                cov_2mtjvyog38().b[26][0]++;
                let tup = (cov_2mtjvyog38().s[79]++, ty.value());
                let valTypes = (cov_2mtjvyog38().s[80]++, tup.valueTypes());
                cov_2mtjvyog38().s[81]++;
                if (val.length !== valTypes.length) {
                  cov_2mtjvyog38().b[27][0]++;
                  cov_2mtjvyog38().s[82]++;
                  throw new TypeError(`Tuple expects ${valTypes.length} values, but ${val.length} were provided`);
                } else {
                  cov_2mtjvyog38().b[27][1]++;
                }
                cov_2mtjvyog38().s[83]++;
                return _stellarBase.xdr.ScVal.scvVec(val.map((v, i) => {
                  cov_2mtjvyog38().f[12]++;
                  cov_2mtjvyog38().s[84]++;
                  return this.nativeToScVal(v, valTypes[i]);
                }));
              } else {
                cov_2mtjvyog38().b[26][1]++;
                cov_2mtjvyog38().s[85]++;
                throw new TypeError(`Type ${ty} was not vec, but value was Array`);
              }
            }
          } else {
            cov_2mtjvyog38().b[24][1]++;
          }
          cov_2mtjvyog38().s[86]++;
          if (val.constructor === Map) {
            cov_2mtjvyog38().b[28][0]++;
            cov_2mtjvyog38().s[87]++;
            if (value !== _stellarBase.xdr.ScSpecType.scSpecTypeMap().value) {
              cov_2mtjvyog38().b[29][0]++;
              cov_2mtjvyog38().s[88]++;
              throw new TypeError(`Type ${ty} was not map, but value was Map`);
            } else {
              cov_2mtjvyog38().b[29][1]++;
            }
            let scMap = (cov_2mtjvyog38().s[89]++, ty.value());
            let map = (cov_2mtjvyog38().s[90]++, val);
            let entries = (cov_2mtjvyog38().s[91]++, []);
            let values = (cov_2mtjvyog38().s[92]++, map.entries());
            let res = (cov_2mtjvyog38().s[93]++, values.next());
            cov_2mtjvyog38().s[94]++;
            while (!res.done) {
              let [k, v] = (cov_2mtjvyog38().s[95]++, res.value);
              let key = (cov_2mtjvyog38().s[96]++, this.nativeToScVal(k, scMap.keyType()));
              let val = (cov_2mtjvyog38().s[97]++, this.nativeToScVal(v, scMap.valueType()));
              cov_2mtjvyog38().s[98]++;
              entries.push(new _stellarBase.xdr.ScMapEntry({
                key,
                val
              }));
              cov_2mtjvyog38().s[99]++;
              res = values.next();
            }
            cov_2mtjvyog38().s[100]++;
            return _stellarBase.xdr.ScVal.scvMap(entries);
          } else {
            cov_2mtjvyog38().b[28][1]++;
          }
          cov_2mtjvyog38().s[101]++;
          if (((cov_2mtjvyog38().b[31][0]++, (_val$constructor = val.constructor) === null || _val$constructor === void 0 || _val$constructor.name) ?? (cov_2mtjvyog38().b[31][1]++, "")) !== "Object") {
            var _val$constructor2;
            cov_2mtjvyog38().b[30][0]++;
            cov_2mtjvyog38().s[102]++;
            throw new TypeError(`cannot interpret ${(_val$constructor2 = val.constructor) === null || _val$constructor2 === void 0 ? void 0 : _val$constructor2.name} value as ScVal (${JSON.stringify(val)})`);
          } else {
            cov_2mtjvyog38().b[30][1]++;
          }
          cov_2mtjvyog38().s[103]++;
          throw new TypeError(`Received object ${val}  did not match the provided type ${ty}`);
        }
      case "number":
        cov_2mtjvyog38().b[12][1]++;
      case "bigint":
        cov_2mtjvyog38().b[12][2]++;
        {
          cov_2mtjvyog38().s[104]++;
          switch (value) {
            case _stellarBase.xdr.ScSpecType.scSpecTypeU32().value:
              cov_2mtjvyog38().b[32][0]++;
              cov_2mtjvyog38().s[105]++;
              return _stellarBase.xdr.ScVal.scvU32(val);
            case _stellarBase.xdr.ScSpecType.scSpecTypeI32().value:
              cov_2mtjvyog38().b[32][1]++;
              cov_2mtjvyog38().s[106]++;
              return _stellarBase.xdr.ScVal.scvI32(val);
            case _stellarBase.xdr.ScSpecType.scSpecTypeU64().value:
              cov_2mtjvyog38().b[32][2]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeI64().value:
              cov_2mtjvyog38().b[32][3]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeU128().value:
              cov_2mtjvyog38().b[32][4]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeI128().value:
              cov_2mtjvyog38().b[32][5]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeU256().value:
              cov_2mtjvyog38().b[32][6]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeI256().value:
              cov_2mtjvyog38().b[32][7]++;
              {
                const intType = (cov_2mtjvyog38().s[107]++, t.name.substring(10).toLowerCase());
                cov_2mtjvyog38().s[108]++;
                return new _stellarBase.XdrLargeInt(intType, val).toScVal();
              }
            default:
              cov_2mtjvyog38().b[32][8]++;
              cov_2mtjvyog38().s[109]++;
              throw new TypeError(`invalid type (${ty}) specified for integer`);
          }
        }
      case "string":
        cov_2mtjvyog38().b[12][3]++;
        cov_2mtjvyog38().s[110]++;
        return stringToScVal(val, t);
      case "boolean":
        cov_2mtjvyog38().b[12][4]++;
        {
          cov_2mtjvyog38().s[111]++;
          if (value !== _stellarBase.xdr.ScSpecType.scSpecTypeBool().value) {
            cov_2mtjvyog38().b[33][0]++;
            cov_2mtjvyog38().s[112]++;
            throw TypeError(`Type ${ty} was not bool, but value was bool`);
          } else {
            cov_2mtjvyog38().b[33][1]++;
          }
          cov_2mtjvyog38().s[113]++;
          return _stellarBase.xdr.ScVal.scvBool(val);
        }
      case "undefined":
        cov_2mtjvyog38().b[12][5]++;
        {
          cov_2mtjvyog38().s[114]++;
          if (!ty) {
            cov_2mtjvyog38().b[34][0]++;
            cov_2mtjvyog38().s[115]++;
            return _stellarBase.xdr.ScVal.scvVoid();
          } else {
            cov_2mtjvyog38().b[34][1]++;
          }
          cov_2mtjvyog38().s[116]++;
          switch (value) {
            case _stellarBase.xdr.ScSpecType.scSpecTypeVoid().value:
              cov_2mtjvyog38().b[35][0]++;
            case _stellarBase.xdr.ScSpecType.scSpecTypeOption().value:
              cov_2mtjvyog38().b[35][1]++;
              cov_2mtjvyog38().s[117]++;
              return _stellarBase.xdr.ScVal.scvVoid();
            default:
              cov_2mtjvyog38().b[35][2]++;
              cov_2mtjvyog38().s[118]++;
              throw new TypeError(`Type ${ty} was not void, but value was undefined`);
          }
        }
      case "function":
        cov_2mtjvyog38().b[12][6]++;
        cov_2mtjvyog38().s[119]++;
        // FIXME: Is this too helpful?
        return this.nativeToScVal(val(), ty);
      default:
        cov_2mtjvyog38().b[12][7]++;
        cov_2mtjvyog38().s[120]++;
        throw new TypeError(`failed to convert typeof ${typeof val} (${val})`);
    }
  }
  nativeToUdt(val, name) {
    cov_2mtjvyog38().f[13]++;
    let entry = (cov_2mtjvyog38().s[121]++, this.findEntry(name));
    cov_2mtjvyog38().s[122]++;
    switch (entry.switch()) {
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
        cov_2mtjvyog38().b[36][0]++;
        cov_2mtjvyog38().s[123]++;
        if (typeof val !== "number") {
          cov_2mtjvyog38().b[37][0]++;
          cov_2mtjvyog38().s[124]++;
          throw new TypeError(`expected number for enum ${name}, but got ${typeof val}`);
        } else {
          cov_2mtjvyog38().b[37][1]++;
        }
        cov_2mtjvyog38().s[125]++;
        return this.nativeToEnum(val, entry.value());
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
        cov_2mtjvyog38().b[36][1]++;
        cov_2mtjvyog38().s[126]++;
        return this.nativeToStruct(val, entry.value());
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
        cov_2mtjvyog38().b[36][2]++;
        cov_2mtjvyog38().s[127]++;
        return this.nativeToUnion(val, entry.value());
      default:
        cov_2mtjvyog38().b[36][3]++;
        cov_2mtjvyog38().s[128]++;
        throw new Error(`failed to parse udt ${name}`);
    }
  }
  nativeToUnion(val, union_) {
    cov_2mtjvyog38().f[14]++;
    let entry_name = (cov_2mtjvyog38().s[129]++, val.tag);
    let case_ = (cov_2mtjvyog38().s[130]++, union_.cases().find(entry => {
      cov_2mtjvyog38().f[15]++;
      let case_ = (cov_2mtjvyog38().s[131]++, entry.value().name().toString());
      cov_2mtjvyog38().s[132]++;
      return case_ === entry_name;
    }));
    cov_2mtjvyog38().s[133]++;
    if (!case_) {
      cov_2mtjvyog38().b[38][0]++;
      cov_2mtjvyog38().s[134]++;
      throw new TypeError(`no such enum entry: ${entry_name} in ${union_}`);
    } else {
      cov_2mtjvyog38().b[38][1]++;
    }
    let key = (cov_2mtjvyog38().s[135]++, _stellarBase.xdr.ScVal.scvSymbol(entry_name));
    cov_2mtjvyog38().s[136]++;
    switch (case_.switch()) {
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0():
        cov_2mtjvyog38().b[39][0]++;
        {
          cov_2mtjvyog38().s[137]++;
          return _stellarBase.xdr.ScVal.scvVec([key]);
        }
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0():
        cov_2mtjvyog38().b[39][1]++;
        {
          let types = (cov_2mtjvyog38().s[138]++, case_.value().type());
          // if (types.length == 1) {
          //   return xdr.ScVal.scvVec([
          //     key,
          //     this.nativeToScVal(val.values, types[0]),
          //   ]);
          // }
          cov_2mtjvyog38().s[139]++;
          if (Array.isArray(val.values)) {
            cov_2mtjvyog38().b[40][0]++;
            cov_2mtjvyog38().s[140]++;
            if (val.values.length != types.length) {
              cov_2mtjvyog38().b[41][0]++;
              cov_2mtjvyog38().s[141]++;
              throw new TypeError(`union ${union_} expects ${types.length} values, but got ${val.values.length}`);
            } else {
              cov_2mtjvyog38().b[41][1]++;
            }
            let scvals = (cov_2mtjvyog38().s[142]++, val.values.map((v, i) => {
              cov_2mtjvyog38().f[16]++;
              cov_2mtjvyog38().s[143]++;
              return this.nativeToScVal(v, types[i]);
            }));
            cov_2mtjvyog38().s[144]++;
            scvals.unshift(key);
            cov_2mtjvyog38().s[145]++;
            return _stellarBase.xdr.ScVal.scvVec(scvals);
          } else {
            cov_2mtjvyog38().b[40][1]++;
          }
          cov_2mtjvyog38().s[146]++;
          throw new Error(`failed to parse union case ${case_} with ${val}`);
        }
      default:
        cov_2mtjvyog38().b[39][2]++;
        cov_2mtjvyog38().s[147]++;
        throw new Error(`failed to parse union ${union_} with ${val}`);
    }

    // enum_.cases()
  }

  nativeToStruct(val, struct) {
    cov_2mtjvyog38().f[17]++;
    let fields = (cov_2mtjvyog38().s[148]++, struct.fields());
    cov_2mtjvyog38().s[149]++;
    if (fields.some(isNumeric)) {
      cov_2mtjvyog38().b[42][0]++;
      cov_2mtjvyog38().s[150]++;
      if (!fields.every(isNumeric)) {
        cov_2mtjvyog38().b[43][0]++;
        cov_2mtjvyog38().s[151]++;
        throw new Error("mixed numeric and non-numeric field names are not allowed");
      } else {
        cov_2mtjvyog38().b[43][1]++;
      }
      cov_2mtjvyog38().s[152]++;
      return _stellarBase.xdr.ScVal.scvVec(fields.map((_, i) => {
        cov_2mtjvyog38().f[18]++;
        cov_2mtjvyog38().s[153]++;
        return this.nativeToScVal(val[i], fields[i].type());
      }));
    } else {
      cov_2mtjvyog38().b[42][1]++;
    }
    cov_2mtjvyog38().s[154]++;
    return _stellarBase.xdr.ScVal.scvMap(fields.map(field => {
      cov_2mtjvyog38().f[19]++;
      let name = (cov_2mtjvyog38().s[155]++, field.name().toString());
      cov_2mtjvyog38().s[156]++;
      return new _stellarBase.xdr.ScMapEntry({
        key: this.nativeToScVal(name, _stellarBase.xdr.ScSpecTypeDef.scSpecTypeSymbol()),
        val: this.nativeToScVal(val[name], field.type())
      });
    }));
  }
  nativeToEnum(val, enum_) {
    cov_2mtjvyog38().f[20]++;
    cov_2mtjvyog38().s[157]++;
    if (enum_.cases().some(entry => {
      cov_2mtjvyog38().f[21]++;
      cov_2mtjvyog38().s[158]++;
      return entry.value() === val;
    })) {
      cov_2mtjvyog38().b[44][0]++;
      cov_2mtjvyog38().s[159]++;
      return _stellarBase.xdr.ScVal.scvU32(val);
    } else {
      cov_2mtjvyog38().b[44][1]++;
    }
    cov_2mtjvyog38().s[160]++;
    throw new TypeError(`no such enum entry: ${val} in ${enum_}`);
  }

  /**
   * Converts an base64 encoded ScVal back to a native JS value based on the given type.
   *
   * @param {string} scv the base64 encoded ScVal
   * @param {xdr.ScSpecTypeDef} typeDef the expected type
   * @returns {any} the converted native JS value
   *
   * @throws {Error} if ScVal cannot be converted to the given type
   */
  scValStrToNative(scv, typeDef) {
    cov_2mtjvyog38().f[22]++;
    cov_2mtjvyog38().s[161]++;
    return this.scValToNative(_stellarBase.xdr.ScVal.fromXDR(scv, "base64"), typeDef);
  }

  /**
   * Converts an ScVal back to a native JS value based on the given type.
   *
   * @param {xdr.ScVal} scv the ScVal
   * @param {xdr.ScSpecTypeDef} typeDef the expected type
   * @returns {any} the converted native JS value
   *
   * @throws {Error} if ScVal cannot be converted to the given type
   */
  scValToNative(scv, typeDef) {
    cov_2mtjvyog38().f[23]++;
    let t = (cov_2mtjvyog38().s[162]++, typeDef.switch());
    let value = (cov_2mtjvyog38().s[163]++, t.value);
    cov_2mtjvyog38().s[164]++;
    if (value === _stellarBase.xdr.ScSpecType.scSpecTypeUdt().value) {
      cov_2mtjvyog38().b[45][0]++;
      cov_2mtjvyog38().s[165]++;
      return this.scValUdtToNative(scv, typeDef.value());
    } else {
      cov_2mtjvyog38().b[45][1]++;
    }
    // we use the verbose xdr.ScValType.<type>.value form here because it's faster
    // than string comparisons and the underlying constants never need to be
    // updated
    cov_2mtjvyog38().s[166]++;
    switch (scv.switch().value) {
      case _stellarBase.xdr.ScValType.scvVoid().value:
        cov_2mtjvyog38().b[46][0]++;
        cov_2mtjvyog38().s[167]++;
        return void 0;

      // these can be converted to bigints directly
      case _stellarBase.xdr.ScValType.scvU64().value:
        cov_2mtjvyog38().b[46][1]++;
      case _stellarBase.xdr.ScValType.scvI64().value:
        cov_2mtjvyog38().b[46][2]++;
      // these can be parsed by internal abstractions note that this can also
      // handle the above two cases, but it's not as efficient (another
      // type-check, parsing, etc.)
      case _stellarBase.xdr.ScValType.scvU128().value:
        cov_2mtjvyog38().b[46][3]++;
      case _stellarBase.xdr.ScValType.scvI128().value:
        cov_2mtjvyog38().b[46][4]++;
      case _stellarBase.xdr.ScValType.scvU256().value:
        cov_2mtjvyog38().b[46][5]++;
      case _stellarBase.xdr.ScValType.scvI256().value:
        cov_2mtjvyog38().b[46][6]++;
        cov_2mtjvyog38().s[168]++;
        return (0, _stellarBase.scValToBigInt)(scv);
      case _stellarBase.xdr.ScValType.scvVec().value:
        cov_2mtjvyog38().b[46][7]++;
        {
          cov_2mtjvyog38().s[169]++;
          if (value == _stellarBase.xdr.ScSpecType.scSpecTypeVec().value) {
            cov_2mtjvyog38().b[47][0]++;
            let vec = (cov_2mtjvyog38().s[170]++, typeDef.value());
            cov_2mtjvyog38().s[171]++;
            return ((cov_2mtjvyog38().b[48][0]++, scv.vec()) ?? (cov_2mtjvyog38().b[48][1]++, [])).map(elm => {
              cov_2mtjvyog38().f[24]++;
              cov_2mtjvyog38().s[172]++;
              return this.scValToNative(elm, vec.elementType());
            });
          } else {
            cov_2mtjvyog38().b[47][1]++;
            cov_2mtjvyog38().s[173]++;
            if (value == _stellarBase.xdr.ScSpecType.scSpecTypeTuple().value) {
              cov_2mtjvyog38().b[49][0]++;
              let tuple = (cov_2mtjvyog38().s[174]++, typeDef.value());
              let valTypes = (cov_2mtjvyog38().s[175]++, tuple.valueTypes());
              cov_2mtjvyog38().s[176]++;
              return ((cov_2mtjvyog38().b[50][0]++, scv.vec()) ?? (cov_2mtjvyog38().b[50][1]++, [])).map((elm, i) => {
                cov_2mtjvyog38().f[25]++;
                cov_2mtjvyog38().s[177]++;
                return this.scValToNative(elm, valTypes[i]);
              });
            } else {
              cov_2mtjvyog38().b[49][1]++;
            }
          }
          cov_2mtjvyog38().s[178]++;
          throw new TypeError(`Type ${typeDef} was not vec, but ${scv} is`);
        }
      case _stellarBase.xdr.ScValType.scvAddress().value:
        cov_2mtjvyog38().b[46][8]++;
        cov_2mtjvyog38().s[179]++;
        return _stellarBase.Address.fromScVal(scv);
      case _stellarBase.xdr.ScValType.scvMap().value:
        cov_2mtjvyog38().b[46][9]++;
        {
          let map = (cov_2mtjvyog38().s[180]++, (cov_2mtjvyog38().b[51][0]++, scv.map()) ?? (cov_2mtjvyog38().b[51][1]++, []));
          cov_2mtjvyog38().s[181]++;
          if (value == _stellarBase.xdr.ScSpecType.scSpecTypeMap().value) {
            cov_2mtjvyog38().b[52][0]++;
            let type_ = (cov_2mtjvyog38().s[182]++, typeDef.value());
            let keyType = (cov_2mtjvyog38().s[183]++, type_.keyType());
            let valueType = (cov_2mtjvyog38().s[184]++, type_.valueType());
            cov_2mtjvyog38().s[185]++;
            return new Map(map.map(entry => {
              cov_2mtjvyog38().f[26]++;
              cov_2mtjvyog38().s[186]++;
              return [this.scValToNative(entry.key(), keyType), this.scValToNative(entry.val(), valueType)];
            }));
          } else {
            cov_2mtjvyog38().b[52][1]++;
          }
          cov_2mtjvyog38().s[187]++;
          throw new TypeError(`ScSpecType ${t.name} was not map, but ${JSON.stringify(scv, null, 2)} is`);
        }

      // these return the primitive type directly
      case _stellarBase.xdr.ScValType.scvBool().value:
        cov_2mtjvyog38().b[46][10]++;
      case _stellarBase.xdr.ScValType.scvU32().value:
        cov_2mtjvyog38().b[46][11]++;
      case _stellarBase.xdr.ScValType.scvI32().value:
        cov_2mtjvyog38().b[46][12]++;
      case _stellarBase.xdr.ScValType.scvBytes().value:
        cov_2mtjvyog38().b[46][13]++;
        cov_2mtjvyog38().s[188]++;
        return scv.value();
      case _stellarBase.xdr.ScValType.scvString().value:
        cov_2mtjvyog38().b[46][14]++;
      case _stellarBase.xdr.ScValType.scvSymbol().value:
        cov_2mtjvyog38().b[46][15]++;
        {
          var _scv$value;
          cov_2mtjvyog38().s[189]++;
          if ((cov_2mtjvyog38().b[54][0]++, value !== _stellarBase.xdr.ScSpecType.scSpecTypeString().value) && (cov_2mtjvyog38().b[54][1]++, value !== _stellarBase.xdr.ScSpecType.scSpecTypeSymbol().value)) {
            cov_2mtjvyog38().b[53][0]++;
            cov_2mtjvyog38().s[190]++;
            throw new Error(`ScSpecType ${t.name} was not string or symbol, but ${JSON.stringify(scv, null, 2)} is`);
          } else {
            cov_2mtjvyog38().b[53][1]++;
          }
          cov_2mtjvyog38().s[191]++;
          return (_scv$value = scv.value()) === null || _scv$value === void 0 ? void 0 : _scv$value.toString();
        }

      // these can be converted to bigint
      case _stellarBase.xdr.ScValType.scvTimepoint().value:
        cov_2mtjvyog38().b[46][16]++;
      case _stellarBase.xdr.ScValType.scvDuration().value:
        cov_2mtjvyog38().b[46][17]++;
        cov_2mtjvyog38().s[192]++;
        return (0, _stellarBase.scValToBigInt)(_stellarBase.xdr.ScVal.scvU64(scv.value()));

      // in the fallthrough case, just return the underlying value directly
      default:
        cov_2mtjvyog38().b[46][18]++;
        cov_2mtjvyog38().s[193]++;
        throw new TypeError(`failed to convert ${JSON.stringify(scv, null, 2)} to native type from type ${t.name}`);
    }
  }
  scValUdtToNative(scv, udt) {
    cov_2mtjvyog38().f[27]++;
    let entry = (cov_2mtjvyog38().s[194]++, this.findEntry(udt.name().toString()));
    cov_2mtjvyog38().s[195]++;
    switch (entry.switch()) {
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtEnumV0():
        cov_2mtjvyog38().b[55][0]++;
        cov_2mtjvyog38().s[196]++;
        return this.enumToNative(scv, entry.value());
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtStructV0():
        cov_2mtjvyog38().b[55][1]++;
        cov_2mtjvyog38().s[197]++;
        return this.structToNative(scv, entry.value());
      case _stellarBase.xdr.ScSpecEntryKind.scSpecEntryUdtUnionV0():
        cov_2mtjvyog38().b[55][2]++;
        cov_2mtjvyog38().s[198]++;
        return this.unionToNative(scv, entry.value());
      default:
        cov_2mtjvyog38().b[55][3]++;
        cov_2mtjvyog38().s[199]++;
        throw new Error(`failed to parse udt ${udt.name().toString()}: ${entry}`);
    }
  }
  unionToNative(val, udt) {
    cov_2mtjvyog38().f[28]++;
    let vec = (cov_2mtjvyog38().s[200]++, val.vec());
    cov_2mtjvyog38().s[201]++;
    if (!vec) {
      cov_2mtjvyog38().b[56][0]++;
      cov_2mtjvyog38().s[202]++;
      throw new Error(`${JSON.stringify(val, null, 2)} is not a vec`);
    } else {
      cov_2mtjvyog38().b[56][1]++;
    }
    cov_2mtjvyog38().s[203]++;
    if ((cov_2mtjvyog38().b[58][0]++, vec.length === 0) && (cov_2mtjvyog38().b[58][1]++, udt.cases.length !== 0)) {
      cov_2mtjvyog38().b[57][0]++;
      cov_2mtjvyog38().s[204]++;
      throw new Error(`${val} has length 0, but the there are at least one case in the union`);
    } else {
      cov_2mtjvyog38().b[57][1]++;
    }
    let name = (cov_2mtjvyog38().s[205]++, vec[0].sym().toString());
    cov_2mtjvyog38().s[206]++;
    if (vec[0].switch().value != _stellarBase.xdr.ScValType.scvSymbol().value) {
      cov_2mtjvyog38().b[59][0]++;
      cov_2mtjvyog38().s[207]++;
      throw new Error(`{vec[0]} is not a symbol`);
    } else {
      cov_2mtjvyog38().b[59][1]++;
    }
    let entry = (cov_2mtjvyog38().s[208]++, udt.cases().find(findCase(name)));
    cov_2mtjvyog38().s[209]++;
    if (!entry) {
      cov_2mtjvyog38().b[60][0]++;
      cov_2mtjvyog38().s[210]++;
      throw new Error(`failed to find entry ${name} in union {udt.name().toString()}`);
    } else {
      cov_2mtjvyog38().b[60][1]++;
    }
    let res = (cov_2mtjvyog38().s[211]++, {
      tag: name,
      values: undefined
    });
    cov_2mtjvyog38().s[212]++;
    if (entry.switch().value === _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value) {
      cov_2mtjvyog38().b[61][0]++;
      let tuple = (cov_2mtjvyog38().s[213]++, entry.value());
      let ty = (cov_2mtjvyog38().s[214]++, tuple.type());
      //@ts-ignore
      let values = (cov_2mtjvyog38().s[215]++, []);
      cov_2mtjvyog38().s[216]++;
      for (let i = (cov_2mtjvyog38().s[217]++, 0); i < ty.length; i++) {
        let v = (cov_2mtjvyog38().s[218]++, this.scValToNative(vec[i + 1], ty[i]));
        cov_2mtjvyog38().s[219]++;
        values.push(v);
      }
      let r = (cov_2mtjvyog38().s[220]++, {
        tag: name,
        values
      });
      cov_2mtjvyog38().s[221]++;
      return r;
    } else {
      cov_2mtjvyog38().b[61][1]++;
    }
    cov_2mtjvyog38().s[222]++;
    return res;
  }
  structToNative(val, udt) {
    var _val$map;
    cov_2mtjvyog38().f[29]++;
    let res = (cov_2mtjvyog38().s[223]++, {});
    let fields = (cov_2mtjvyog38().s[224]++, udt.fields());
    cov_2mtjvyog38().s[225]++;
    if (fields.some(isNumeric)) {
      var _val$vec;
      cov_2mtjvyog38().b[62][0]++;
      let r = (cov_2mtjvyog38().s[226]++, (_val$vec = val.vec()) === null || _val$vec === void 0 || _val$vec.map((entry, i) => {
        cov_2mtjvyog38().f[30]++;
        cov_2mtjvyog38().s[227]++;
        return this.scValToNative(entry, fields[i].type());
      }));
      cov_2mtjvyog38().s[228]++;
      return r;
    } else {
      cov_2mtjvyog38().b[62][1]++;
    }
    cov_2mtjvyog38().s[229]++;
    (_val$map = val.map()) === null || _val$map === void 0 || _val$map.forEach((entry, i) => {
      cov_2mtjvyog38().f[31]++;
      let field = (cov_2mtjvyog38().s[230]++, fields[i]);
      cov_2mtjvyog38().s[231]++;
      res[field.name().toString()] = this.scValToNative(entry.val(), field.type());
    });
    cov_2mtjvyog38().s[232]++;
    return res;
  }
  enumToNative(scv, udt) {
    cov_2mtjvyog38().f[32]++;
    cov_2mtjvyog38().s[233]++;
    if (scv.switch().value !== _stellarBase.xdr.ScValType.scvU32().value) {
      cov_2mtjvyog38().b[63][0]++;
      cov_2mtjvyog38().s[234]++;
      throw new Error(`Enum must have a u32 value`);
    } else {
      cov_2mtjvyog38().b[63][1]++;
    }
    let num = (cov_2mtjvyog38().s[235]++, scv.value());
    cov_2mtjvyog38().s[236]++;
    if (udt.cases().some(entry => {
      cov_2mtjvyog38().f[33]++;
      cov_2mtjvyog38().s[237]++;
      return entry.value() === num;
    })) {
      cov_2mtjvyog38().b[64][0]++;
    } else {
      cov_2mtjvyog38().b[64][1]++;
    }
    cov_2mtjvyog38().s[238]++;
    return num;
  }
}
exports.ContractSpec = ContractSpec;
function stringToScVal(str, ty) {
  cov_2mtjvyog38().f[34]++;
  cov_2mtjvyog38().s[239]++;
  switch (ty.value) {
    case _stellarBase.xdr.ScSpecType.scSpecTypeString().value:
      cov_2mtjvyog38().b[65][0]++;
      cov_2mtjvyog38().s[240]++;
      return _stellarBase.xdr.ScVal.scvString(str);
    case _stellarBase.xdr.ScSpecType.scSpecTypeSymbol().value:
      cov_2mtjvyog38().b[65][1]++;
      cov_2mtjvyog38().s[241]++;
      return _stellarBase.xdr.ScVal.scvSymbol(str);
    case _stellarBase.xdr.ScSpecType.scSpecTypeAddress().value:
      cov_2mtjvyog38().b[65][2]++;
      {
        let addr = (cov_2mtjvyog38().s[242]++, _stellarBase.Address.fromString(str));
        cov_2mtjvyog38().s[243]++;
        return _stellarBase.xdr.ScVal.scvAddress(addr.toScAddress());
      }
    default:
      cov_2mtjvyog38().b[65][3]++;
      cov_2mtjvyog38().s[244]++;
      throw new TypeError(`invalid type ${ty.name} specified for string value`);
  }
}
function isNumeric(field) {
  cov_2mtjvyog38().f[35]++;
  cov_2mtjvyog38().s[245]++;
  return /^\d+$/.test(field.name().toString());
}
function findCase(name) {
  cov_2mtjvyog38().f[36]++;
  cov_2mtjvyog38().s[246]++;
  return function matches(entry) {
    cov_2mtjvyog38().f[37]++;
    cov_2mtjvyog38().s[247]++;
    switch (entry.switch().value) {
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseTupleV0().value:
        cov_2mtjvyog38().b[66][0]++;
        {
          let tuple = (cov_2mtjvyog38().s[248]++, entry.value());
          cov_2mtjvyog38().s[249]++;
          return tuple.name().toString() === name;
        }
      case _stellarBase.xdr.ScSpecUdtUnionCaseV0Kind.scSpecUdtUnionCaseVoidV0().value:
        cov_2mtjvyog38().b[66][1]++;
        {
          let void_case = (cov_2mtjvyog38().s[250]++, entry.value());
          cov_2mtjvyog38().s[251]++;
          return void_case.name().toString() === name;
        }
      default:
        cov_2mtjvyog38().b[66][2]++;
        cov_2mtjvyog38().s[252]++;
        return false;
    }
  };
}