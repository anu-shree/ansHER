'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.end = exports.begin = exports.pendingTask = exports.Spinner = exports.pendingTasksReducer = undefined;

require('./nprogress.css');

var _reducer = require('./reducer.js');

var _spinner = require('./spinner.js');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.pendingTasksReducer = _reducer.pendingTasksReducer;
exports.Spinner = _spinner2.default;
exports.pendingTask = _reducer.actionKey;
exports.begin = _reducer.begin;
exports.end = _reducer.end;