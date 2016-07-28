'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var take = function take(arr, num) {
  var output = [];
  arr.forEach(ArrayFunc);
  function ArrayFunc(element, index, array) {
    if (index < num) {
      output.push(element);
    }
  }

  return output;
};

exports.take = take;