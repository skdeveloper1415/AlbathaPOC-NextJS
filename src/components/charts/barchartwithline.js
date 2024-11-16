import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function BarChartWithLine({grid,legend}) {

    const options = {
        tooltip: { trigger: "axis" },
        legend: legend,
        grid: grid,
        xAxis: [
            {
                type: 'category',
                interval: 0,
                data: ["Jan' 23", "Feb' 23", "Mar' 23", "Apr' 23", "May' 23", "Jun' 23", "Jul' 23", "Aug' 23", "Sep' 23", "Oct' 23", "Nov' 23", "Dec' 23"],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#BECDE3"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval:0,
                    fontSize: 8,
                    color: "#fff",
                }
            },
        ],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 1.2,
                interval: 0.2,
                axisLabel: {
                    fontSize: 8,
                    formatter: '{value}',
                    color: "#fff"
                },
                axisLine: { show: false,},
                axisTick: { show: false },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dotted",
                        color: "#E5E7EB4A"
                    }
                }
            },
            {
                type: 'value',
                min: 0,
                max: 3,
                interval: 0.5,
                axisLabel: {
                    fontSize: 8,
                    formatter: '{value} %',
                    color: "#fff"
                },
                axisLine: { show: false,},
                axisTick: { show: false},
                splitLine: {show: false}
            }
        ],
        series: [
            {
                name: 'Budget',
                data: [0.9, 0.8, 0.7, 0.7,0.9, 0.8, 0.7, 0.7,0.9, 0.8, 0.7, 0.7],
                type: 'bar',
                color: '#4BA5B7',
                itemStyle: {
                    borderRadius: [4, 4, 0, 0]
                },
                label: {
                    show: false,
                }
            },
            {
                name: 'Growth %',
                yAxisIndex: 1,
                symbol: 'circle',
                symbolSize:7,
                data: [1.5, 2, 2, 1.4,1.5, 2, 2, 1.4,1.5, 2, 2, 1.4],
                type: 'line',
                color: '#DD7539',
                label: {
                    show: false,
                }
            }
        ]
    };

    return (
        <ReactEcharts
            option={options}
            style={{ height: "100%", width: "100%" }}
        />
    )
}