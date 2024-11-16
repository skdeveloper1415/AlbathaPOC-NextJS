import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useTheme } from "next-themes";

export default function HorizontalChart({legend,grid,data}){

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const options = {
        legend: legend,
          grid: grid,
          xAxis: {
            type: "value",
            max: 550,
            min: 0,
            interval: 20,
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
          },
          yAxis: {
            type: "category",
            data: [""],
            axisLine: { show: false },
            axisLabel: {
              show: true,
              color: "#4B586E",
              fontSize: "11",
              fontWeight: 400,
            },
            axisTick: { show: false },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#E5E7EB",
              },
            },
          },
          series: [
            {
              name: "Actual",
              data: data.value1,
              color: "#4BA5B7",
              type: "bar",
              barWidth: "80%",
              itemStyle: {
                borderRadius: [0, 6, 6, 0],
              },
            },
            {
              name: "Target",
              data: data.value2,
              color: "#CE5A28",
              type: "bar",
              barWidth: "40%",
              barGap: "-75%",
              label: {
                show: true,
                position: "right",
                formatter: "TARGET \n${c}K",
                textStyle: {
                  color: "#FFF",
                  backgroundColor: "#1F2A37",
                  padding: [8, 8, 8, 8],
              },                
                
              },
              itemStyle: {
                borderRadius: [0, 6, 6, 0],
              },
              
            },
          ],
    }

    return(
        <div>
             <ReactEcharts
                    option={options}
                    style={{ height: "100%", width: "100%" }}
                  />
        </div>
    )
}