'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var zip = function zip() {
  var _arguments = arguments;

  var values = Object.keys(arguments).map(function (key) {
    return _arguments[key];
  });
  var valueLengths = values.map(function (value) {
    return value.length;
  });

  Array.prototype.max = function () {
    return Math.max.apply(null, this);
  };

  var maxLength = valueLengths.max();
  var rangeToMax = [].concat(_toConsumableArray(Array(maxLength).keys()));
  var uncompact = rangeToMax.map(function (idx) {
    return values.map(function (valuesArray) {
      return valuesArray[idx];
    });
  });
  return uncompact.map(function (array) {
    return array.filter(function (item) {
      return item != null;
    });
  });
};

exports.zip = zip;

// let output = []
// for (let i = 0; i < arguments.length; i++) {
//   for (let j = 0; j < arguments[i].length; j++) {
//     output.splice(j, 0, arguments[i][j])
//   }
// }
// console.log("arguments ", arguments)
// return 1
//# sourceMappingURL=zip.js.map