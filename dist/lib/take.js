'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var take = function take(arr) {
  var num = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

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
//# sourceMappingURL=take.js.map