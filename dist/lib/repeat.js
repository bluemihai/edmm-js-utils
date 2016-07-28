'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var repeat = function repeat(str, n) {
  // let arr = str.split('')
  // console.log("whaaats up");
  var newStr = "";
  var x = [].concat(_toConsumableArray(Array(n).keys()));
  x.map(function (index) {
    newStr += str;
  });
  // console.log(x);
  return newStr;
};

exports.repeat = repeat;