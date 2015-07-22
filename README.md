# peat-logger

Logger for the PEAT Cloudlet Platform

## Getting Started
Install the module with: `npm install git+ssh://git@gitlab.peat-platform.eu:peat-logger.git`

To build the project enter the following commands. Note: npm is only required the first time the module is built or if a new dependency is added. There are a number of grunt tasks that can be executed including: test, cover, default and jenkins. The jenkins task is executed on the build server, if it doesn't pass then the build will fail.

```bash
git clone git@gitlab.peat-platform.eu:peat-logger.git
cd peat-logger
npm install
grunt jenkins
```

## Documentation

### Logging Levels

Below is a list of common logging levels and a general outline of how they should be used. 
The levels below are ordered in their correct hierarchial positions.

*  __fatal__
   Runtime errors that cause the program to terminate prematurely.

*  __error__
   Other problems/errors encountered at runtime, which do not necessarily cause premature termination.

*  __warn__
   Runtime issues that are undesired, however do not generate errors.

*  __info__
   Runtime events that may be interesting, such as startup and shutdown.

*  __debug__
   Detailed information about system state and the flow of the system.

*  __trace__
   Highly detailed information.

## Examples

```javascript
// Initialise the logger.
var peatLogger = require('peat-logger')

// Define these wherever you feel most appropriate.
// path:       The output log file path.
// log_level:  Defines the level of logging desired e.g. setting debug will not record trace messages but will record debug and everything higher(see above).
// as_json:    Do you want the logs to be JSON format?
logger_params = {
      'path'     : '/opt/peat/cloudlet_platform/logs/data_api',
      'log_level': 'debug',
      'as_json'  : false
}

// You can configure the logger by passing parameters to it.
var init = function(logger_params){
   this.logger = peatLogger(logger_params)
}

// Below shows how to use the logger.
this.logger.log('trace', 'this is a trace log message')
this.logger.log('debug', 'this is a debug log message')
this.logger.log('info',  'this is an info log message')
this.logger.log('warn',  'this is an warn log message')
this.logger.log('error', 'this is an error log message')
this.logger.log('fatal', 'this is a fatal log message')
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
**0.1.0** *(23/10/14 dmccarthy@tssg.org, dbenson@tssg.org, dconway@tssg.org)* Includes the basic logger functionality.

## License
Copyright (c) 2013 dmccarthy dbenson dconway
Licensed under the MIT license.
