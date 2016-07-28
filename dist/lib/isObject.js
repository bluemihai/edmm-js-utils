'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var isObject = function isObject(val) {
  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
    return true;
  } else {
    return false;
  }
};

exports.isObject = isObject;