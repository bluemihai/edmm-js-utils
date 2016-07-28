'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var trimStart = function trimStart(str, char) {
  var output = '';
  for (var i in str) {
    var check = 0;
    for (var j in char) {
      if (str[i] !== char[j]) {
        check++;
        if (check === 2) {
          while (str.length > i) {
            output += str[i];
            i++;
          }
          return output;
        }
      }
    }
  }
  return output;
};

exports.trimStart = trimStart;
//# sourceMappingURL=trimStart.js.map