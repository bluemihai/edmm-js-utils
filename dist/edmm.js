'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reverseArray = function reverseArray(arr) {
  var output = [];
  for (var i = 0; i < arr.length; ++i) {
    output.push(arr[arr.length - i - 1]);
  }
  return output;
};

var sumArray = function sumArray(arr) {
  var output = 0;
  for (var i = 0; i < arr.length; ++i) {
    output += arr[i];
  }
  return output;
};

var sumByArray = function sumByArray(arr, key) {
  var output = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arrValue = _step.value;

      output += arrValue[key];
      console.log(arrValue[key]);
    }
    // console.log(output)
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return output;
};

exports.reverseArray = reverseArray;
exports.sumArray = sumArray;
exports.sumByArray = sumByArray;