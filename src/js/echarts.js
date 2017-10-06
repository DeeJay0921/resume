var echarts = require('echarts');

var myChart = echarts.init(document.getElementById('main'));

var Option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['兴趣', '能力']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 5,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'HTML/CSS', max: 100},
            { name: 'LESS/SASS', max: 100},
            { name: 'JS/jQuery', max: 100},
            { name: 'React/Vue', max: 100},
            { name: 'HTML5/CSS 3', max: 100}
        ]
    },
    series: [{
        name: '兴趣 vs 能力',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [60, 80, 80, 100, 90],
                name : '兴趣'
            },
            {
                value : [80, 70, 80, 70, 80],
                name : '能力'
            }
        ]
    }]
}
// module.exports.myChart = myChart
// module.exports.opt = Option
module.exports = {
    myChart: myChart,
    opt: Option
}