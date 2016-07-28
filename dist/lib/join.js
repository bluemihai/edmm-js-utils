'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var join = function join(arr, sep) {
  var newArr = [];
  for (var i = 0; i < arr.length; ++i) {
    newArr.push(arr[i]);
    if (i < arr.length - 1) {
      newArr.push(sep);
    }
  }

  return newArr.join('');
};

exports.join = join;