'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var random = function random(upper) {
  var fraction = Math.random() * (upper + 1);
  return Math.floor(fraction);
};

exports.random = random;
//# sourceMappingURL=random.js.map