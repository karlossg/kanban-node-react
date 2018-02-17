if (process.env.NODE_ENV === 'production') {
  // in production
  module.export = require('./prod');
} else {
  // in development
  module.export = require('./dev');
}
