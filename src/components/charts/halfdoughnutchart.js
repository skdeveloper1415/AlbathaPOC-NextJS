import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "next-themes";

export default function HalfDoughnutChart({ grid, legend, data, color }) {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const options = {
    color: color,
    tooltip: {
      trigger: "item",
    },
    legend: legend,
    grid: grid,
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["90%", "130%"],
        center: ["30%", "65%"],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: false,
          formatter(param) {
            // correct the percentage
            return param.name + " (" + param.percent * 2 + "%)";
          },
        },
        data: [
          {
            value: 1060,
            name: "Target",
            itemStyle: {
              borderRadius: [0, 2, 0, 2],
            },
          },
          { value: 735, name: "Actual",
          itemStyle: {
            borderRadius: [0, 4, 0, 4],
          }, },
          {
            value: 400,
            itemStyle: {
              borderRadius: [0, 0, 0, 0],
            },
          },
          {
            // make an record to fill the bottom 50%
            value: 1048 + 735 + 400,
            itemStyle: {
              // stop the chart from rendering this piece
              color: "none",
              decal: {
                symbol: "none",
              },
            },
            label: {
              show: false,
            },
          },
        ],
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
