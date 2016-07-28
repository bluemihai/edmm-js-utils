'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var trimEnd = function trimEnd(str, char) {
  var arr = str.split('');
  var charArr = char.split('');
  var newArr = [];

  arr.map(function (x) {
    charArr.map(function (y) {
      if (y === x) {
        arr.pop(x);
      }
    });
  });
  return arr.join('');
};

exports.trimEnd = trimEnd;
//# sourceMappingURL=trimEnd.js.map