// require('normalize.css')
require('less/reset.less')
require('less/index.less')

var $ = require('./jquery')
var Tab = require('./tab').Tab
var myChart = require('./echarts').myChart
var option = require('./echarts').opt

    Tab.start($('.tabs'));
    myChart.setOption(option);