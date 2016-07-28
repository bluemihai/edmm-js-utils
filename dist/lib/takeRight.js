'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var takeRight = function takeRight(arr) {
  var num = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  var output = [];
  var counter = [].concat(_toConsumableArray(Array(num).keys()));
  counter.map(function (idx) {
    output[counter.length - idx - 1] = arr.pop();
  });
  return output;
};

exports.takeRight = takeRight;
//# sourceMappingURL=takeRight.js.map