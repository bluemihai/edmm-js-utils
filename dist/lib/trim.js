'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var trim = function trim(str, char) {
  var arr = str.split('');
  var charArr = char.split('');
  var newArr = [];
  var flag = false;
  arr.map(function (x) {
    charArr.map(function (y) {
      console.log('Y is: ' + y);
      if (x === y) {
        flag = true;
      }
    });
    if (!flag) {
      newArr.push(x);
      flag = false;
    }
    // console.log(`X is: ${typeof x}`);
  });
  console.log('New Array: ' + newArr.join(''));
  // if(number > 90){
  //   arr[0] = String.fromCharCode(number - 32)
  // }
  return arr.join('');
};

exports.trim = trim;