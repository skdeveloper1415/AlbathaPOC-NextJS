import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'

export default function DonatChart() {

    const options = {
        legend: {
          show: false,
        },
        toolbox: {
          show: false,
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [10, 55],
            center: ['50%', '50%'],
            roseType: 'radius',
            seriesLayoutBy:'column',
            labelLine: {
                show: true,
                length: '0px',
                length2: 0,
                lineStyle: {
                    color: '#FFFFFF',
                    width:0.5,
                }
            },
            label:{
                color: '#FFFFFF',
                fontSize:10
            },
            data: [
              { value: 100, name: '40',itemStyle:{color:"#893923"} },
              { value: 90, name: '16',itemStyle:{color:"#3B160F"} },
              { value: 80, name: '8',itemStyle:{color:"#F2EEEE"}  },
              { value: 70, name: '9',itemStyle:{color:"#F3D3B5"} },
              { value: 60, name: '8', itemStyle:{color:"#EBB686"}  },
              { value: 50, name: '12', itemStyle:{color:"#E38E54"}  },
              { value: 40, name: '7', itemStyle:{color:"#DD7539"}  },
            ]
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