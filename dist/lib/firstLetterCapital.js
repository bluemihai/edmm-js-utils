'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var firstLetterCapital = function firstLetterCapital(word) {
  var arr = word.split('');
  var number = arr[0].charCodeAt();
  if (number > 90) {
    arr[0] = String.fromCharCode(number - 32);
  }
  return arr.join('');
};

exports.firstLetterCapital = firstLetterCapital;