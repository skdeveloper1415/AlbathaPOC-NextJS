import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "next-themes";

export default function BarChart({
  data,
  yAxisName,
  yAxisNameGap,
  yAxisNamePosition,
  xAxisName,
  xAxisNameGap,
  xAxisNamePosition,
  barColor,
  formatter,
  lineColor1,
  yAxisLabelFormatter,
  barName,
  lineName1,
  lineName2,
  grid,
  barWidth,
  legends,
  barcolor,
  colors,
}) {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;
  const options = {
    legend: legends,
    grid: grid,
    xAxis: {
      axisLabel: {
        interval: 0,
        fontSize: 7,
        color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B",
      },

      axisTick: {
        show: false,
      },
      name: xAxisName,
      nameLocation: xAxisNamePosition,
      nameGap: xAxisNameGap,

      type: "category",
      data: data.labels,
      nameTextStyle: {
        color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B",
      },
      axisLabel: {
        textStyle: {
          fontSize: 8,
          color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B", // set text color to red
        },
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: yAxisLabelFormatter,
        color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B",
        fontSize: 8,
      },
      nameTextStyle: {
        color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B",
      },
      axisLabel: {
        textStyle: {
          color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B", // set text color to red
        },
      },
      name: yAxisName,
      nameLocation: yAxisNamePosition,
      nameGap: yAxisNameGap,

      nameTextStyle: {
        color: currentTheme == "dark" ? "#ffff" : "#6C768B",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: currentTheme == "dark" ? "#ffffff1a" : "#BECDE3",
        },
      },
    },
    color: colors,
    series: [
      {
        interval: 0,
        label: {
          show: false,
        },

        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          // normal: {
          color: barcolor,
          // },
        },
        data: data.values,
        barWidth: barWidth,
        type: "bar",
        name: barName,
      },
      {
        name: lineName1,
        type: "line",
        data: data.values2,
        symbolSize: 4,
        symbol: "circle",
        itemStyle: {
          color: lineColor1,
        },
      },
      {
        name: lineName2,
        type: "line",
        data: data.values3,
        symbolSize: 4,
        symbol: "circle",
      },
    ],
  };

  return (
    <div>
      <ReactEcharts
        echarts={echarts}
        option={options}
        opts={{ renderer: "svg" }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
