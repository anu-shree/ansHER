'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionKey = '@@__rrs_pendingTask__@@';
var begin = '@@__rrs_begin__@@';
var end = '@__rrs_end__@@';

var reducer = function reducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
  var action = arguments[1];

  if (action[actionKey] === begin) {
    return state + 1;
  }
  if (action[actionKey] === end) {
    return state - 1;
  }
  return state;
};

exports.actionKey = actionKey;
exports.begin = begin;
exports.end = end;
exports.pendingTasksReducer = reducer;