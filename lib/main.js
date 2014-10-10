/**
 * Created by dmccarthy on 13/11/2013.
 */
'use strict';

var winston = require('winston');

var logger = function(p) {

  var log = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
        level     : p.log_level,
        json      : p.as_json,
        timestamp : true,
        colorize  : true
      }),
      new winston.transports.File     ({
        level     : p.log_level,
        json      : p.as_json,
        filename  : p.path + '.log'
      })
    ],
    exceptionHandlers: [
      new (winston.transports.Console)({
        level     : p.log_level,
        json      : p.as_json,
        timestamp : true,
        colorize  : true
      }),
      new winston.transports.File     ({
        level     : p.log_level,
        json      : p.as_json,
        filename  : p.path + '_exceptions.log'
      })
    ],
    exitOnError: false
  });


  var logMongrel2Message = function(msg) {

    log.info('Headers: ' + JSON.stringify(msg.headers));
    for (var i = 0; i < msg.headers.length; i++) {
       log.info('\t' + i + ' :' + msg.headers[i]);
    }
    log.info('UUID   : ' + msg.uuid);
    log.info('CONNID : ' + msg.connId);
    log.info('Path   : ' + msg.path);
    log.info('Body   : ' + msg.body);
    log.info('JSON   : ' + msg.json);
    log.info('----------------------------------------------');
    log.info('----------------------------------------------');

  };


  var logMessage = function(level, msg) {

    log.log(level, msg);

  };

  var query = function(){

    var options = {
      from : new Date() - 24 * 60 * 60 * 1000,
      until: new Date()
    };

    winston.query(options, function (err, results) {
      console.log(results);
    });
  };


  return {
    'logMongrel2Message':logMongrel2Message,
    'log'               :logMessage,
    'query'             :query
  };
};


module.exports = logger;
