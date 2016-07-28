'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var trim = function trim(str, char) {
  var output = '';
  for (var i in str) {
    var check = 0;
    for (var j in char) {
      if (str[i] !== char[j]) {
        check++;
        if (check === char.length) {
          output += str[i];
        }
      }
    }
  }
  return output;
};

exports.trim = trim;