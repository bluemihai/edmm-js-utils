'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var size = function size(object) {
  var counter = 0;
  if (typeof object === 'string') {
    object = object.split("");
  } else if (object.constructor == Object) {
    object = Object.keys(object);
  }

  object.forEach(function (x) {
    return counter++;
  });
  return counter;
};

exports.size = size;
//# sourceMappingURL=size.js.map