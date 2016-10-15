'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _findWithRegex = require('find-with-regex');

var _findWithRegex2 = _interopRequireDefault(_findWithRegex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MENTION_REGEX = /(\s|^)@[\w]*/g;

exports.default = function (contentBlock, callback) {
  (0, _findWithRegex2.default)(MENTION_REGEX, contentBlock, callback);
};