'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reverseArray = function reverseArray(arr) {
  var counter = arr.length - 1;
  var output = [];
  for (var i = 0; i < arr.length; ++i) {
    output.push(arr[arr.length - i - 1]);
  }
  return output;
};

exports.reverseArray = reverseArray;