<template>
    <li class="skills ">
        <h1>我的技能</h1>
        <div id="main" style="width: 600px;height:400px;"></div>
        <div class="intro">
            <svg>
                <use xlink:href="#icon-gerenzhongxinzhuyedaipingjia"></use>
            </svg>
            <div class="text">
                <ul class="cap">
                    <h3>能力技能</h3>
                    <li>熟悉HTML、CSS、页面架构和布局，对Web标准和标签语义化有深入理解</li>
                    <li>熟悉Ajax、JavaScript、jQuery、JSON等前端技术,掌握模块化组件化的思想</li>
                    <li>了解ECMA5的标签规范以及HTML5新标签及CSS3样式及动画</li>
                    <li>对目前主流浏览器的前端页面兼容性有一定的认识</li>
                </ul>
                <ul class="adv">
                    <h3>优势特长</h3>
                    <li>良好的代码风格，对自己代码质量有高要求，注释清晰</li>
                    <li>良好的逻辑思维能力和团队合作能力，有快速分析和解决问题的能力</li>
                    <li>了解less、Vue、React等前端框架工具</li>
                    <li>了解掌握浏览器的调试，可快速寻找bug</li>
                    <li>良好的英文水平，阅读能力较好</li>
                </ul>
            </div>
        </div>
    </li>
</template>
<script>
    import echarts from 'echarts'
    export default {
        mounted() {
            const myChart = echarts.init(document.getElementById('main'));

            const Option = {
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
                        { name: 'HTML/CSS', max: 100 },
                        { name: 'LESS/SASS', max: 100 },
                        { name: 'JS/jQuery', max: 100 },
                        { name: 'React/Vue', max: 100 },
                        { name: 'HTML5/CSS 3', max: 100 }
                    ]
                },
                series: [{
                    name: '兴趣 vs 能力',
                    type: 'radar',
                    // areaStyle: {normal: {}},
                    data: [
                        {
                            value: [60, 80, 80, 100, 90],
                            name: '兴趣'
                        },
                        {
                            value: [80, 70, 80, 85, 80],
                            name: '能力'
                        }
                    ]
                }]
            }

            myChart.setOption(Option)
        }
    }
</script>