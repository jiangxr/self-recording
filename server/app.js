'use strict';

//set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('./config/environment');
const moment = require('moment');
const express = require('express');
const os = require('os');

//setup server
var app = express();

var server = require('http').createServer(app);

app.use('/check', function(req, res) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    res.json({
      code: "0000",
      msg: "OK",
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss.SSS'),
      hostname: os.hostname()
    });
  });

  require('./routes')(app);

  server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
