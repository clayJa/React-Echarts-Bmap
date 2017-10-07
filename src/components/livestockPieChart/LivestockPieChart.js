import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
let myChart,option;
class LivestockPieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
	componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        myChart = echarts.init(document.getElementById('livestockPieChart'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'horizontal',
                left: 'center',
                bottom:'0',
                itemWidth: 20,
                textStyle: {
                    color: '#b7b7b7',
                },
                
                data:['牛','骆驼','马','山羊','绵羊']
            },

            series: [
                {
                    name:'牲畜数量',
                    type:'pie',
                    center: ['55%', '50%'],
                    radius: [0, '30%'],
                    color: ['#45c7c3','#327992'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:679, name:'围栏外'},
                        {value:1548, name:'围栏内'}
                    ]
                },
                {
                    name:'牲畜分类',
                    type:'pie',
                    center: ['55%', '50%'],
                    radius: ['45%', '60%'],
                    color: ['#46d6aa','#4baede','#e9a17d','#b890ff','#78cdfe'],
                    label: {
                        normal: {
                            show: true,
                            formatter: '{b}\n{d}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true
                        }
                    },
                    data: this.props.data
                }
            ]
        };
        // 绘制图表
        myChart.setOption(option);
    }
    componentWillUnmount() {
        myChart.dispose();
    }
	render() {
        return (
            <div id="livestockPieChart" style={{ width: '100%', height: '280px' }}></div>
        );
    }
}

export default LivestockPieChart;