'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isBoolean = function isBoolean(arg) {

  if (arg === (true || false)) {
    return true;
  } else {
    return false;
  }
};

exports.isBoolean = isBoolean;