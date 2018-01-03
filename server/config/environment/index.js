'use strict';

var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}


var config = {
  env: process.env.NODE_ENV,

  port: process.env.PORT || 9000
}

module.exports = config;

console.log("=====Runtime Config======");

var configToDisplay = _.cloneDeep(config, function(value, key) {
  // hide the password
  if ((/password/i.exec(key) || /passwd/i.exec(key) || /secret/i.exec(key) || /key/i.exec(key)) && _.isString(value)) {
    var start = 2;
    var end = value.length - 2;
    if (start < end) {
      // password always have the same length
      return value.substring(0, start) + _.repeat('*', 8) + value.substring(end);
    }
  }
});
console.log(configToDisplay);
