'use strict';

module.exports = function(app) {
  app.get('/get-test', function(req, res, next) {
    res.json({"code":"999", "message":"get method test"});
  });
}
