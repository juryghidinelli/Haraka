"use strict";

var stub = require('tests/fixtures/stub');

var logger = exports;

function Logger() {
}

logger.createLogger = function() {
  var obj  = new Logger();
  return obj;
};
