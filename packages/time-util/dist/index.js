'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dayjs = _interopDefault(require('dayjs'));

function getNextMonth() {
  var months = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var current = new Date();
  current.setDate(1);
  var t = dayjs().subtract(7, 'month');
  console.log(t);
  return Array(months).fill(0).map(function (el, index) {
    current.setMonth(current.getMonth() + index + 1);
    return new Date(current.getFullYear(), current.getMonth(), current.getDate());
  });
}
getNextMonth();

exports.getNextMonth = getNextMonth;
