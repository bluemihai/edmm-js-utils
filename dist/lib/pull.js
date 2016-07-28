'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pull = function pull(arr) {
  var args = [].concat(Array.prototype.slice.call(arguments));

  arr.map(function (x) {
    args.map(function (s) {
      if (x === s) {
        var i = arr.indexOf(x);
        if (i > -1) {
          arr.splice(i, 1);
        }
      }
    });
  });

  return arr;
};

exports.pull = pull;