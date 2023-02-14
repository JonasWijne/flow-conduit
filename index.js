'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./flow-conduit.cjs.production.js')
} else {
  module.exports = require('./flow-conduit.cjs.development.js')
}
