'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sortedIndex = function sortedIndex(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      //arr.splice(i, 0 , num)
      return i;
    }
  }
  return arr.length - 1;
};

exports.sortedIndex = sortedIndex;