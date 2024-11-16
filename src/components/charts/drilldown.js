import React from "react";
import ReactEcharts from "echarts-for-react";
import { color } from "echarts";
import { useTheme } from "next-themes";

export const DrillDownChart = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const drillDownCharts = {
    series: [
      {
        type: "tree",
        symbol: "rect",
        emphasis: false,
        data: [
          {
            name: (() => {
              return "Sales\n (AED) \n 50.8M";
            })(),

            label: {
              show: true,
              position: "inside",
              color: "#FFF",
              fontSize: 12,
              fontWeight: "500",
              textAlign: "left",
              borderColor: "#294450",
               lineHeight: 15,
              emphasis: false,
              
            },

            symbolSize: 85,
            itemStyle: {
              color: currentTheme == "dark" ? "#70639E" : "#294450",
              borderColor: currentTheme == "dark" ? "#70639E" : "#312C49",
              emphasis: false,
              borderRadius: 8,
            },
            children: [
              {
                lineStyle: {
                  width: 20,
                  color: currentTheme == "dark" ? "#323047" : "#bfe0e6",
                },
                symbolSize: 65,
                label: {
                  show: true,
                  position: "inside",
                  background: "#70639E",
                  fontSize: 12,
                  fontWeight: "500",
                  textAlign: "left",
                   lineHeight: 15,
                  color: "#fff",
                },
                itemStyle: {
                  color: currentTheme == "dark" ? "#968FC3" : "#4BA5B7",
                  borderColor: currentTheme == "dark" ? "#968FC3" : "#4BA5B7",
                  borderRadius: 8,
                },
                name: "Week 1\n30.5M",
                children: [
                  {
                    name: "Egypt \n 0.5M",
                    lineStyle: {
                      width: 20,
                      color: currentTheme == "dark" ? "#413b35" : "#bfe0e6",
                    },
                    symbolSize: 65,
                    label: {
                      show: true,
                      position: "inside",
                      textAlign: "left",
                       lineHeight: 15,
                      fontSize: 12,
                       lineHeight: 15,
                      color: currentTheme == "dark" ? "#fff" : "#262626",
                    },
                    itemStyle: {
                      color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                      borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                    },
                  },
                  {
                    name: "Saudi Arabia\n1.0M",
                    lineStyle: {
                      width: 20,
                      color: currentTheme == "dark" ? "#413b35" : "#bfe0e6",
                    },
                    symbolSize: 65,
                    label: {
                      show: true,
                      position: "inside",
                      textAlign: "left",
                      fontSize: 11,
                      lineHeight: 15,
                      color: currentTheme == "dark" ? "#fff" : "#262626",
                    },
                    itemStyle: {
                      color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                      borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                    },
                  },
                  {
                    name: "UAE \n 10.0M",
                    lineStyle: {
                      width: 20,
                      color: currentTheme == "dark" ? "#323047" : "#bfe0e6",
                    },
                    label: {
                      show: true,
                      position: "inside",
                      background: "#70639E",
                      fontSize: 12,
                      fontWeight: "500",
                      textAlign: "left",
                      lineHeight: 15,
                      color: "#fff",
                    },
                    symbolSize: 65,
                    itemStyle: {
                      color: currentTheme == "dark" ? "#968FC3" : "#4BA5B7",
                      borderColor: currentTheme == "dark" ? "#968FC3" : "#4BA5B7",
                    },
                    collapsed: false,
                    children: [
                      {
                        name: "Automotive\n2.0M",
                        lineStyle: {
                          width: 20,
                          color: currentTheme == "dark" ? "#3f3a35" : "#bfe0e6",
                        },
                        symbolSize: 65,
                        label: {
                          show: true,
                          position: "inside",
                          textAlign: "left",
                           lineHeight: 15,
                          fontSize: 12,
                           lineHeight: 15,
                          color: currentTheme == "dark" ? "#fff" : "#262626",
                        },
                        itemStyle: {
                          color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                          borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                        },
                      },
                      {
                        name: "Consumer\n2.0M",
                        lineStyle: {
                          width: 20,
                          color: currentTheme == "dark" ? "#3f3a35" : "#bfe0e6",
                        },
                        symbolSize: 65,
                        label: {
                          show: true,
                          position: "inside",
                          textAlign: "left",
                           lineHeight: 15,
                          fontSize: 12,
                           lineHeight: 15,
                          color: currentTheme == "dark" ? "#fff" : "#262626",
                        },
                        itemStyle: {
                          color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                          borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                        },
                      },
                      {
                        name: "Engineering\n2.0M",
                        lineStyle: {
                          width: 20,
                          color: currentTheme == "dark" ? "#3f3a35" : "#bfe0e6",
                        },
                        symbolSize: 65,
                        label: {
                          show: true,
                          position: "inside",
                          textAlign: "left",
                           lineHeight: 15,
                          fontSize: 12,
                           lineHeight: 15,
                          color: currentTheme == "dark" ? "#fff" : "#262626",
                        },
                        itemStyle: {
                          color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                          borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                        },
                      },
                      {
                        name: "Healthcare\n2.0M",
                        lineStyle: {
                          width: 20,
                          color: currentTheme == "dark" ? "#3f3a35" : "#bfe0e6",
                        },
                        symbolSize: 65,
                        
                        label: {
                          show: true,
                          position: "inside",
                          textAlign: "left",
                           lineHeight: 15,
                          fontSize: 12,
                           lineHeight: 15,
                          color: currentTheme == "dark" ? "#fff" : "#262626",
                        },
                        itemStyle: {
                          color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                          borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                        },
                      },
                      {
                        name: "Real Estate\n2.0M",
                        lineStyle: {
                          width: 20,
                          color: currentTheme == "dark" ? "#3f3a35" : "#bfe0e6",
                        },
                        symbolSize: 65,
                        label: {
                          show: true,
                          position: "inside",
                          textAlign: "left",
                           lineHeight: 15,
                          fontSize: 12,
                           lineHeight: 15,
                          color: currentTheme == "dark" ? "#fff" : "#262626",
                        },
                        itemStyle: {
                          color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                          borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                        },
                      },
                    ],
                    lineStyle: {
                      width: 20,
                      color: "#bfe0e6",
                    },
                  },
                  {
                    name: "Qatar\n9.5M",
                    lineStyle: {
                      width: 20,
                      color: currentTheme == "dark" ? "#3f3a34" : "#bfe0e6",
                    },
                    symbolSize: 65,
                    label: {
                      show: true,
                      position: "inside",
                      textAlign: "left",
                       lineHeight: 15,
                      fontSize: 12,
                      color: currentTheme == "dark" ? "#fff" : "#262626",
                    },
                    itemStyle: {
                      color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                      borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                    },
                  },
                  {
                    name: "Oman\n8.5M",
                    lineStyle: {
                      width: 20,
                      color: currentTheme == "dark" ? "#3f3a34" : "#bfe0e6",
                    },
                    symbolSize: 65,
                    label: {
                      show: true,
                      position: "inside",
                      textAlign: "left",
                       lineHeight: 15,
                      fontSize: 12,
                      color: currentTheme == "dark" ? "#fff" : "#262626",
                    },
                    itemStyle: {
                      color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                      borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                    },
                  },
                  {
                    name: "Country 7\n0.8M",
                    lineStyle: {
                      width: 20,
                      color: currentTheme == "dark" ? "#3f3a34" : "#bfe0e6",
                    },
                    symbolSize: 65,
                    label: {
                      show: true,
                      position: "inside",
                      textAlign: "left",
                       lineHeight: 15,
                      fontSize: 12,
                      color: currentTheme == "dark" ? "#fff" : "#262626",
                    },
                    itemStyle: {
                      color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                      borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                    },
                  },
                ],
              },
              {
                name: (() => {
                  return "Week 2\n10.8M";
                })(),
                lineStyle: {
                  width: 20,
                  color: currentTheme == "dark" ? "#413b35" : "#bfe0e6",
                },
                symbolSize: 65,
                label: {
                  show: true,
                  position: "inside",
                  fontSize: 12,
                  fontWeight: "500",
                   lineHeight: 15,
                  color: currentTheme == "dark" ? "#fff" : "#262626",
                },
                itemStyle: {
                  color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                  borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                },
              },
              {
                name: (() => {
                  return "Week 3\n5.2M";
                })(),
                lineStyle: {
                  width: 20,
                  color: currentTheme == "dark" ? "#413b35" : "#bfe0e6",
                },
                symbolSize: 65,
                label: {
                  show: true,
                  position: "inside",
                  fontSize: 12,
                  fontWeight: "500",
                   lineHeight: 15,
                  color: currentTheme == "dark" ? "#fff" : "#262626",
                },
                itemStyle: {
                  color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                  borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                },
              },
              {
                name: (() => {
                  return "Week 4\n2.2M";
                })(),
                lineStyle: {
                  width: 20,
                  color: currentTheme == "dark" ? "#413b35" : "#bfe0e6",
                },
                symbolSize: 65,
                label: {
                  show: true,
                  position: "inside",
                  fontSize: 12,
                  fontWeight: "500",
                   lineHeight: 15,
                  color: currentTheme == "dark" ? "#fff" : "#262626",
                },
                itemStyle: {
                  color: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                  borderColor: currentTheme == "dark" ? "#312C49" : "#F1FAFA",
                },
              },
            ],
          },
        ],
        itemStyle: {
          emphasis: {
            emphasis: false,
          },
        },
        label: {
          position: "right",
          color: "#fff",
          lineHeight: 15,
          color: currentTheme == "dark" ? "#fff" : "#363A44",
        },
        lineStyle: {
          width: 30,
          color: "#fff",
        },
        // symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY4MkQxQkVBOUYyMjExRUU4RTRCRDg3RTIwMTY2QjI4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY4MkQxQkVCOUYyMjExRUU4RTRCRDg3RTIwMTY2QjI4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjgyRDFCRTg5RjIyMTFFRThFNEJEODdFMjAxNjZCMjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjgyRDFCRTk5RjIyMTFFRThFNEJEODdFMjAxNjZCMjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7gfL1aAAABdUlEQVR42uzX0U0CURBAUdwKtoSlA0uAD3+FEmzAZDsAKjCWYAdagZZAB2wJluC85C150MGO5yaTEPibw2zg4fnpdXXXJmYXs48ZVlpC5zqnmKn9oGte9zFvMd8xI9xF9RjzEnOphv09cN/AatmN1bJvgQ/1W6A8F32YgQeXm/aSN90srZTtO4/m1O0A527o7CB3gAELsAALsAALsAADFmABFmABFmABBizAAizAAizAAizAgAVYgAVYgAVYgAELsAALsAALsAADFmABFmABFmABFmDAAizAAizAAizAgAVYgAVYgAVYgAFbAWABFmABFmABFmDAAizAAizAAizAgAVYgAVYgAVYgAUYsAALsAALsAALMGABFmABFmABFmDAAizAAizAAizAAvx/gCdrSNu5AH/ZQ27gT3tI26kA/8S820W6iuk0/8g6lnO2kzyP5mp6/RX9G7N1yWkud1tNb/4mlTfGmHXMh4teVFMDO864pT8BBgDBCyPyunyA5wAAAABJRU5ErkJggg==",

        height: "90%",
        top: "0",
        left: "60",
        bottom: "-20%",

        on: {
          click: function (params) {
            var node = params.data;
            if (node.symbolSize === 0) {
              node.symbolSize = 65;
              if (node.children) {
                node.children.forEach(function (child) {
                  child.symbolSize = 50;
                });
              }
            } else {
              node.symbolSize = 0;
              if (node.children) {
                node.children.forEach(function (child) {
                  child.symbolSize = 0;
                });
              }
            }
            myChart.setOption(option);
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactEcharts
        option={drillDownCharts}
        style={{ width: "100%", height: "600px" }}
      />
    </div>
  );
};
