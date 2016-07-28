'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var pick = function pick(obj, arr) {
  var newObj = {};
  arr.map(function (x) {
    return newObj[x] = obj[x];
  });
  return newObj;
};

exports.pick = pick;
//# sourceMappingURL=pick.js.map