# openi-logger

Logger for the OPENi Cloudlet Platform

## Getting Started
Install the module with: `npm install git+ssh://git@gitlab.openi-ict.eu:openi-logger.git`

To build the project enter the following commands. Note: npm is only required the first time the module is built or if a new dependency is added. There are a number of grunt tasks that can be executed including: test, cover, default and jenkins. The jenkins task is executed on the build server, if it doesn't pass then the build will fail.

```bash
git clone git@gitlab.openi-ict.eu:openi-logger.git
cd openi-logger
npm install
grunt jenkins
```

## Documentation

### Logging Levels

Below is a list of common logging levels and a general outline of how they should be used.

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
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 dmccarthy dbenson
Licensed under the MIT license.
