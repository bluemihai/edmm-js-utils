'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var reverseArray = function reverseArray(arr) {
  var output = [];
  // for(let index = -1; index === -(arr.length); index--){
  //   output += arr[index]
  // }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arrValue = _step.value;

      output += arrValue;
    }
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