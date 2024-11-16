import React, { useEffect, useRef } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { useTheme } from "next-themes";
import { Dialog } from "primereact/dialog";

export default function ChartDialog({
  data,
  series1,
  series2,
  visible,
  onHides,
  grid,
  legend,
  name1,
  name2,
  maxvalue
}) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const option = {
    // title: title,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    grid: grid,
    legend: legend,
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data,
      show: true,
      axisLabel: {
        color: currentTheme === "dark" ? "#FFF" : "#4B586E",
        fontSize: 10,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },

    yAxis: {
      type: "value",
      show: true,
      max:maxvalue,
    },
    series: [
      {
        data: series1,
        name:name1,
        type: "line",
        symbol: "none",
        itemStyle: {
          // color: "#1596E2",
          color: currentTheme === "dark" ? "#FFF" : "#4BA5B7",
        },
      },
      {
        data: series2,
        name:name2,
        type: "line",
        symbol: "none",
        itemStyle: {
          // color: "#1596E2",
          color: currentTheme === "dark" ? "#FFF" : "#DD7539",
        },
      },
    ],
  };
  return (
    <div>
      <>
      <div className="" onClick={()=>onHides(false)}>
      <Dialog
          header="Header"
          showHeader={false}
          position="right"
          className="custmDialog"
          visible={visible}
          onHide={() => onHides(false)}
          contentStyle={{
            padding: 10,
            borderRadius: "8px",
            border: "1px solid #DBE1EA",
            background: "#fff",
            width: "full",
          }}
        >
          <div>
            <div className="flex justify-between border-b border-[#9CA3AF] py-[10px] xl:py-[0.529vw]">
                <div className="text-[16px] xl:text-[0.833vw] text-[#4B586E]">Trend Analysis</div>
              <i className="pi pi-times" onClick={() => onHides(false)}></i>
            </div>
            <ReactEcharts
              echarts={echarts}
              option={option}
              opts={{ renderer: "svg" }}
              style={{ width: "100%", height: "130%" }}
            />
          </div>
        </Dialog>
      </div>
      
      </>
    </div>
  );
}
