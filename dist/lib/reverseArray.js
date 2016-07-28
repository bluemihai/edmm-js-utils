'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reverseArray = function reverseArray(arr) {
  var output = [];
  for (var i = 0; i < arr.length; ++i) {
    output.push(arr[arr.length - i - 1]);
  }
  return output;
};

exports.reverseArray = reverseArray;
//# sourceMappingURL=reverseArray.js.map