// require('normalize.css')
require('less/reset.less')
require('less/index.less')

var $ = require('./jquery')
var Tab = require('./tab').Tab

Tab.start($('.tabs'));