import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useTheme } from "next-themes";

export default function LineChartBanner({
    labelShow, data, grid, yAxisName, yAxisNameGap, yAxisNamePosition, areaStyle, color1, fillcolor, lineColor, lineType,  xAxisName, xAxisNameGap, xAxisNamePosition, borderColor, name1, legend }) {
        const { systemTheme, theme, setTheme } = useTheme();

        const currentTheme = theme === 'system' ? systemTheme : theme;
        const options = {
        legend: legend,
        xAxis: {
            name: xAxisName,
            nameLocation: xAxisNamePosition,
            nameGap: xAxisNameGap,
            type: 'category',
            data: data.labels,
            nameTextStyle: {
                color: "#9CA1AB"
            },
            label: {
                show: true // show labels for all data points
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                fontSize: 8,
                color: '#9CA1AB',
                fontWeight:400
            },
        },
        grid: grid,
        yAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color:currentTheme == "dark" ? "#ffffff26": "#E0E0E0",

                }
            },
            name: yAxisName,
            nameLocation: yAxisNamePosition,
            nameGap: yAxisNameGap,
            nameTextStyle: {
                color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B"
            },
            axisLabel: {
                color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B",
                fontSize: 8,
                fontWeight:400,
                formatter: '{value}',
            }
        },
        series: [
            {
                name: name1,
                data: data.values,
                type: 'line',
                emphasis: {
                    focus: 'series'
                },
                symbol: 'circle',
                symbolSize: 10,
                smooth: true,
                label: {
                    show: labelShow,
                    fontSize: 12,
                    position: 'top',
                    formatter: '{c}',
                    textStyle: {
                        color: "#6C768B",
                        fontSize: 10,
                        fontWeight: 500
                    }
                },
                lineStyle: {
                    color: lineColor[0],
                    width: 2,
                    type: lineType,
                    itemStyle: {
                        borderColor: borderColor,
                        borderWidth: 2
                    },
                },
                itemStyle: {
                    color: fillcolor[0],
                    borderWidth: 1,
                    borderColor: borderColor,
                }
            },
        ]
    };

    return(
        <ReactEcharts
        echarts={echarts}
        option={options}
        opts={{ renderer: 'svg' }}
        style={{width:'100%', height: '100%'}}
    />
    )
}