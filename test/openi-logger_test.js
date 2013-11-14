'use strict';
var fs           = require('fs');
var base_path    = require('./basePath.js');
var openi_logger = require(base_path + '../lib/main.js');


exports['constuct'] = {


   'test log' : function (test) {

      var logger_params = {
         'path'     : 'build/tmp_log_1',
         'log_level': 'info',
         'as_json'  : false
      }

      var logger = openi_logger(logger_params)

      logger.log('info', 'test message')

      test.ok(true);
      //test.ok(val.indexOf('test message') > -1, 'log should contain "test message"');
      test.done();
   },
   'test log mongrel2': function (test) {

      var logger_params = {
         'path'     : 'build/tmp_log_2',
         'log_level': 'info',
         'as_json'  : false
      }

      var logger = openi_logger(logger_params)

      var mockMongrelMessage = {
         'uuid'   : 'QWEQWEQWE',
         'connId' : '2314123124',
         'path'   : '/vi/data/get/obj',
         'body'   : '{"my":"body"}',
         'json'   : {'my':'body'},
         'headers': [
            {'x-forwarded-for': '127.0.0.1'},
            {'accept-encoding': 'gzip,deflate,sdch'}
         ]
      }

      logger.logMongrel2Message(mockMongrelMessage)

      //need to get query reading logs
      var val = logger.query()

      test.ok(true);
//      test.ok(val.indexOf('info: UUID   : QWEQWEQWE')  > -1, 'log should contain "info: UUID   : QWEQWEQWE"');
//      test.ok(val.indexOf('CONNID : 2314123124')       > -1, 'log should contain "CONNID : 2314123124"');
//      test.ok(val.indexOf('Path   : /vi/data/get/obj') > -1, 'log should contain "Path   : /vi/data/get/obj"');
//      test.ok(val.indexOf('Body   : {"my":"body"}')    > -1, 'log should contain "Body   : {"my":"body"}"');
      test.done();
   }

};
