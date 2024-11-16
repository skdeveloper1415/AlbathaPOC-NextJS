import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { Dropdown } from "primereact/dropdown";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabView } from "primereact/tabview";
import { OverlayPanel } from "primereact/overlaypanel";
import LegendComponent from "@/components/legendcomponent";

const Comparisonsales = () => {
  

  const gaugeData = [
    {
      value: 65 ,
      name: 'Perfect',
      title: {
        show:true,
        offsetCenter: ['0%', '-30%'],
       
      },
      detail: {
        show:true,
        valueAnimation: true,
        offsetCenter: ['0%', '2%'],
        zlevel:9999,
       
        formatter: function (value) {
          return '{completed|var=} {value|' + value.toFixed(0) + '}{unit|%}';
      },
      rich: {
          completed: {
              fontSize: 20,
              fontWeight: 500,
              color: '#374151'
          },
          value: {
              fontSize: 36,
              fontWeight: 700,
              color: '#374151'
          },
          unit: {
            fontSize: 36,
            fontWeight: 700,
            color: '#374151'
          }
      }
      },
      itemStyle:
     {
      color:'#768FB5',
     },
    },
    {
      value: 62,
      name: 'Good',
      title: {
        show:false,
        offsetCenter: ['0%', '0%']
      },
      detail: {
        show:false,
        valueAnimation: true,
        offsetCenter: ['0%', '10%']
      },
      itemStyle:
      {
       color:'#DD7539',
      },
    },
    {
      value: 58,
      name: 'Commonly',
      title: {
        show:false,
        offsetCenter: ['0%', '30%']
      },
      detail: {
        show:false,
        valueAnimation: true,
        offsetCenter: ['0%', '40%']
      },
      itemStyle:
      {
       color:'#4BA5B7',
      },
    }
  ];
  const gaugeData1 = [
    {
      value: 65 ,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
     {
      color:'#768FB5',
     },
    },
    {
      value: 62,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#DD7539',
      },
    },
    {
      value: 58,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#4BA5B7',
      },
    }
  ];
  const gaugeData5 = [
    {
      value: 50 ,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
     {
      color:'#768FB5',
     },
    },
    {
      value: 42,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#DD7539',
      },
    },
    {
      value: 40,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#4BA5B7',
      },
    }
  ];
  const gaugeData6 = [
    {
      value: 50,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
     {
      color:'#768FB5',
     },
    },
    {
      value: 48,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#DD7539',
      },
    },
    {
      value: 42,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#4BA5B7',
      },
    }
  ];
  const gaugeData7 = [
    {
      value: 30,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
     {
      color:'#768FB5',
     },
    },
    {
      value: 26,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#DD7539',
      },
    },
    {
      value: 22,
      title: {
        show:false,
      },
      detail: {
        show:false,
      },
      itemStyle:
      {
       color:'#4BA5B7',
      },
    }
  ];
  const Comparison = {
   
   
    series: [
   // series 1st
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
        tooltip: {
          trigger: 'axis'
        },
        emphasis: {
          focus: 'series'
        },
      
        radius: "100%",
        center: ['62%', '50%'],
        // center: [600, 320],
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          
          clip: false,
       
        },
        
        axisLine: {
          lineStyle: {
            color: [[1, '#F0F2F6']],
            shadowBlur: 2,
            shadowColor: "#BECDE3",
            width: 28
          }
          
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData,
        title: {
          fontSize: 14
        },
        
       
      },

 // series 2
      {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
      
        radius: "88%",
        center: ['62%', '50%'],
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          
          clip: false,
       
        },
        axisLine: {
          lineStyle: {
            color: [[1, '#F0F2F6']],
            shadowBlur: 2,
            shadowColor: "#BECDE3",
            width: 28
          }
          
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData1,
        title: {
          show:false,
          fontSize: 14
        },
        
        // detail: {
        //   width: 50,
        //   height: 20,
        //   fontSize: 14,
        //   color: 'inherit',
        //   borderColor: 'inherit',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   formatter: '{value}%',
         
        // }
      },
       // series 3
       {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
      
        radius: "78%",
        center: ['62%', '50%'],
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          
          clip: false,
       
        },
        axisLine: {
          lineStyle: {
            color: [[1, '#DBEFF2']],
            shadowBlur: 2,
            shadowColor: "#BECDE3",
            width: 28
          }
          
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData1,
        title: {
          show:false,
          fontSize: 14
        },
        
        // detail: {
        //   width: 50,
        //   height: 20,
        //   fontSize: 14,
        //   color: 'inherit',
        //   borderColor: 'inherit',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   formatter: '{value}%',
         
        // }
      },
       // series 4
       {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
      
        radius: "68%",
        center: ['62%', '50%'],
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          
          clip: false,
       
        },
        axisLine: {
          lineStyle: {
            color: [[1, '#F0F2F6']],
            shadowBlur: 2,
            shadowColor: "#BECDE3",
            width: 28
          }
          
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData1,
        title: {
          show:false,
          fontSize: 14
        },
        
        // detail: {
        //   width: 50,
        //   height: 20,
        //   fontSize: 14,
        //   color: 'inherit',
        //   borderColor: 'inherit',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   formatter: '{value}%',
         
        // }
      },
       // series 5
       {
        type: 'gauge',
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false
        },
      
        radius: "58%",
        center: ['62%', '50%'],
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          
          clip: false,
       
        },
        axisLine: {
          lineStyle: {
            color: [[1, '#DBEFF2']],
            shadowBlur: 2,
            shadowColor: "#BECDE3",
            width: 28
          }
          
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 10
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false,
          distance: 50
        },
        data: gaugeData5,
        title: {
          show:false,
          fontSize: 14
        },
        
        // detail: {
        //   width: 50,
        //   height: 20,
        //   fontSize: 14,
        //   color: 'inherit',
        //   borderColor: 'inherit',
        //   borderRadius: 20,
        //   borderWidth: 1,
        //   formatter: '{value}%',
         
        // }
      },
        // series 6
        {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
        
          radius: "48%",
          center: ['62%', '50%'],
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            
            clip: false,
         
          },
          axisLine: {
            lineStyle: {
              color: [[1, '#F0F2F6']],
              shadowBlur: 2,
              shadowColor: "#BECDE3",
              width: 28
            }
            
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: gaugeData6,
          title: {
            show:false,
            fontSize: 14
          },
          
          // detail: {
          //   width: 50,
          //   height: 20,
          //   fontSize: 14,
          //   color: 'inherit',
          //   borderColor: 'inherit',
          //   borderRadius: 20,
          //   borderWidth: 1,
          //   formatter: '{value}%',
           
          // }
        },
         // series 7
         {
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
        
          radius: "37%",
          center: ['62%', '50%'],
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            
            clip: false,
         
          },
          axisLine: {
            lineStyle: {
              color: [[1, '#DBEFF2']],
              shadowBlur: 2,
              shadowColor: "#BECDE3",
              width: 28
            }
            
          },
          splitLine: {
            show: false,
            distance: 0,
            length: 10
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: gaugeData7,
          title: {
            show:false,
            fontSize: 14
          },
          
          // detail: {
          //   width: 50,
          //   height: 20,
          //   fontSize: 14,
          //   color: 'inherit',
          //   borderColor: 'inherit',
          //   borderRadius: 20,
          //   borderWidth: 1,
          //   formatter: '{value}%',
           
          // }
        },
     
      
    ],


   
  };
  const [selectedGroup1, setSelectedGroup1] = useState(null);
  const Group1 = [
      { name: 'Automotive', code: 'AU' },
      { name: 'Consumer', code: 'CO' },
      { name: 'Engineering', code: 'EN' },
      { name: 'Home & Personal C..', code: 'HP' },
      { name: 'Retail & Home', code: 'RH' },
      { name: 'Real estate', code: 'RE' },
  ];

  const [selectedGroup2, setSelectedGroup2] = useState(null);
  const Group2 = [
      { name: 'GECO Enterprise Company', code: 'AU' },
      { name: 'GECO Smart Life Solutions', code: 'CO' },
      { name: 'Super General Company', code: 'EN' },
      { name: 'Super General Company, Oman', code: 'HP' },
      { name: 'E-City General Trading', code: 'RH' },
    
  ];
  const [selectedGroup3, setSelectedGroup3] = useState(null);
  const Group3 = [
      { name: 'GECO Enterprise Company', code: 'AU' },
      { name: 'GECO Smart Life Solutions', code: 'CO' },
      { name: 'Super General Company', code: 'EN' },
      { name: 'Super General Company, Oman', code: 'HP' },
      { name: 'E-City General Trading', code: 'RH' },
    
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const op = useRef(null);
  const [ChartOptions, setChartOptions] = useState(null);
    const chart = [
        { name: 'New York', code: 'NY' },
    ];
    const customOptionTemplate = (option) => {
      console.log("option",option)
      return (
        <div className="custom-dropdown-item">
          <span>{option.name}</span>
          <i className="fa fa-trash" onClick={() => handleTrashClick(option)}></i>
        </div>
      );
    };
    const handleTrashClick = (option) => {
      // Handle the trash icon click here
      console.log('Delete option:', option);
    };

    const textfuntion = (e) =>{
      console.log("option",option);
    }

   

  return (
    <>
    <div className="bg-[#fff] xl:p-[0.833vw] p-4 xl:rounded-[0.417vw] rounded-lg shadow-lg"> 
    <Tabs className={'customtabview'}>
              <div className="flex justify-between items-center mb-2">
                <div className="text-[#374151] xl:text-[0.833vw] text-[18px] font-medium leading-none">Comparison - <span className="font-semibold">Sales (CY vs LY)</span></div>
               
               
              
                <TabList>
                <div className="flex gap-[20px] items-center">
                      <Tab>
                      <button onClick={() => setActiveIndex(0)} className={`${activeIndex == 0 ? 'bg-[#4BA5B7] text-[white]' : 'text-[#4B586E] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[4px] xl:py-[0.208vw] text-[14px] xl:text-[0.729vw] font-medium rounded-lg`}>MTD</button>
                      </Tab>
                      <Tab>
                      <button onClick={() => setActiveIndex(1)} className={`${activeIndex == 1 ? 'bg-[#4BA5B7] text-[white]' : 'text-[#3D434F] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.208vw] text-[14px] xl:text-[0.729vw] font-medium rounded-lg`}>YTD</button>
                      </Tab>
                      <div>
                      <div className="card flex items-center">
                          <button onClick={(e) => op.current.toggle(e)}>
                            <div className="cursor-pointer flex items-center leading-none">
                              <i className='alb-three-dots-circle text-[18px] xl:text-[1.146vw] align-top text-[#4B586E]' title='Click here for multiple option'></i>
                            </div>
                          </button>
                          <OverlayPanel ref={op} className="chartoptiondropdown">
                            <div className='xl:space-y-[1.250vw] space-y-[22px] xl:p-[0.833vw] p-4'>
                              {/**col**/}
                              <div className='text-[#374151] xl:text-[0.729vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>Chart Options</div>
                              {/**col**/}
                              <div className='flex flex-col xl:gap-[0.317vw] gap-2'>
                              <label htmlFor="username" className='text-[#374151] xl:text-[0.729vw0.729vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>Group by</label>
                              <Dropdown value={ChartOptions} onChange={(e) => setChartOptions(e.value)} options={chart} optionLabel="name" 
                placeholder="Groups" className="w-full custmdropdown" showClear optionTemplate={(e)=>customOptionTemplate(e)}  itemTemplate={textfuntion}/>
                              </div>
                              {/**col**/}
                              <div className='flex flex-col xl:gap-[0.317vw] gap-2'>
                              <label htmlFor="username" className='text-[#374151] xl:text-[0.729vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>View</label>
                              <Dropdown value={ChartOptions}  onChange={(e) => setChartOptions(e.value)} options={chart} optionLabel="name" 
                placeholder="All" className="w-full custmdropdown" />
                              </div>
                              {/**col**/}
                              <div className='flex flex-col xl:gap-[0.317vw] gap-2'>
                              <label htmlFor="username" className='text-[#374151] xl:text-[0.729vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>Compare Against</label>
                              <Dropdown value={ChartOptions} onChange={(e) => setChartOptions(e.value)} options={chart} optionLabel="name" 
                placeholder="Last Year" className="w-full custmdropdown" />
                              </div>
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                      </div>

                  </TabList>
                 
              
               
                </div>
                <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="custmprimetab">
                    <TabPanel>
                    <div className='h-[600px] xl:h-[37vw] relative'>
                        <ReactEcharts option={Comparison} style={{ height: "100%", width: "100%" }} />

                        <div className="absolute left-2 top-0">
                          <div className="flex">
                          <div className=" bg-[#F6F7F9] h-[35vw] xl:p-[0.625vw] p-[15px] mt-4 xl:w-[10.938vw] w-[200px] rounded-lg">
                              <h6 className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal opacity-70">Drilldown Path</h6>
                              <div className="xl:mt-[1.458vw] mt-[22px] relative timeline">
                              <ul>
                                  <li className="timeline__event">
                                    <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[1.25vw] py-[20px]">Group</div>
                                  </li>
                                  <li className="timeline__event custom-dropdown">
                                  <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[0.625vw] py-[12px] relative  border-[#a9b9d0] border-y-2 border-dashed">

                                  <Dropdown value={selectedGroup1} optionTemplate={customOptionTemplate}  onChange={(e) => setSelectedGroup1(e.value)} options={Group1} optionLabel={customOptionTemplate}
                                    placeholder="All" className={` w-full `} />
                                    {
                                      
                                      !selectedGroup1?.name == "" ?
                                         <div className="absolute top-[34px] right-[15px] bg-[#f5f6f7] cursor-pointer" onClick={()=>setSelectedGroup1()}><i className="alb-trash text-[17px] text-[#4B586E]"></i></div> 
                                         :"" 
                                    }

                                      
                                  </div>
                                  </li>
                                  <li className="timeline__event custom-dropdown">
                                  <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[0.625vw] py-[12px] border-[#a9b9d0] border-b-2 border-dashed">

                                  <Dropdown value={selectedGroup2} onChange={(e) => setSelectedGroup2(e.value)} options={Group2} optionLabel="name" 
                                    placeholder="Second Selecion" className="w-full " />
                                  </div>
                                  </li>
                                
                                  <li className="timeline__event custom-dropdown xl:py-[0.625vw] py-[12px]">
                                      <Dropdown value={selectedGroup3} onChange={(e) => setSelectedGroup3(e.value)} options={Group3} optionLabel="name" 
                                      placeholder="All" className="w-full" />
                                    </li>
                                    {/* <li className="timeline__event">
                                      <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[1.25vw] py-[20px]"></div>
                                  </li> */}
                                </ul>
                                </div>
                                


                            </div>
                            <div className=" bg-[#fff] xl:w-[20.229vw] w-[350px] xl:h-[18.233vw] h-[450px] rounded-br-[50px] ">
                                  <div className="border-r-2 border-[#BECDE3] border-dashed">
                                    <ul className="border-r-2 border-[#BECDE3] pr-2 mr-0.5 space-y-[1.094vw]">
                                      <li className="flex justify-end gap-[10px] items-center relative group cursor-default">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Automotive</div>
                                        <div className="text-[#046C4E] xl:text-[0.729vw] text-[14px] font-medium leading-none">6%</div>
                                        <LegendComponent />
                                      </li>
                                      <li className="flex justify-end gap-[10px] items-center relative group cursor-default">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Consumer</div>
                                        <div className="text-[#046C4E] xl:text-[0.729vw] text-[14px] font-medium leading-none">2+</div>
                                        <LegendComponent />
                                      </li>
                                      <li className="flex justify-end gap-[10px] items-center relative group cursor-default">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Engineering</div>
                                        <div className="text-[#046C4E] xl:text-[0.729vw] text-[14px] font-medium leading-none">40%</div>
                                        <LegendComponent />
                                      </li>
                                      <li className="flex justify-end gap-[10px] items-center relative group cursor-default">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Health Care</div>
                                        <div className="text-[#C81E1E] xl:text-[0.729vw] text-[14px] font-medium leading-none">-12%</div>
                                        <LegendComponent />
                                      </li>
                                      <li className="flex justify-end gap-[10px] items-center relative group cursor-default">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Home & Per...</div>
                                        <div className="text-[#046C4E] xl:text-[0.729vw] text-[14px] font-medium leading-none">6%</div>
                                        <LegendComponent />
                                      </li>
                                      <li className="flex justify-end gap-[10px] items-center relative group cursor-default">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Retail & Home</div>
                                        <div className="text-[#C81E1E] xl:text-[0.729vw] text-[14px] font-medium leading-none">6%</div>
                                        <LegendComponent />
                                      </li>
                                      <li className="flex justify-end gap-[10px] items-center relative group cursor-default">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Real Estate</div>
                                        <div className="text-[#046C4E] xl:text-[0.729vw] text-[14px]  font-medium leading-none">8%</div>
                                        <LegendComponent />
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="xl:mt-[1.458vw] mt-[22px]">
                                  <div className="flex gap-[14px] xl:gap-[0.729vw] items-center xl:mb-[0.521vw]  mb-[10px]"> 
                                        <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal leading-none w-[70px] flex justify-end">MTD - LY</div>
                                        <div className="w-2 h-2 bg-[#4BA5B7] rounded-full"></div>
                                        <div className="flex xl:gap-[0.569vw] gap-[9px]">
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.33B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.3B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">1.8B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.6b</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        </div>
                                  </div>
                                  <div className="flex gap-[14px] xl:gap-[0.729vw] items-center xl:mb-[0.521vw]  mb-[10px]"> 
                                        <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal leading-none w-[70px] flex justify-end">MTD - CY</div>
                                        <div className="w-2 h-2 bg-[#DD7539] rounded-full"></div>
                                        <div className="flex xl:gap-[0.569vw] gap-[9px]">
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.33B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.3B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">1.8B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.6b</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        </div>
                                  </div>
                                  <div className="flex gap-[14px] xl:gap-[0.729vw] items-center xl:mb-[0.521vw]  mb-[10px]"> 
                                        <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal leading-none w-[70px] flex justify-end">LY</div>
                                        <div className="w-2 h-2 bg-[#768FB5] rounded-full"></div>
                                        <div className="flex xl:gap-[0.569vw] gap-[9px]">
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.33B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.3B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">1.8B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.6b</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          
                        </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className='h-[600px] xl:h-[37vw] relative'>
                        <ReactEcharts option={Comparison} style={{ height: "100%", width: "100%" }} />

                        <div className="absolute left-2 top-0">
                          <div className="flex">
                          <div className=" bg-[#F6F7F9] h-[35vw] xl:p-[0.625vw] p-[15px] mt-4 xl:w-[10.938vw] w-[200px] rounded-lg">
                              <h6 className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal opacity-70">Drilldown Path</h6>
                              <div className="xl:mt-[1.458vw] mt-[22px] relative timeline">
                              <ul>
                                  <li className="timeline__event">
                                    <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[1.25vw] py-[20px]">Group</div>
                                  </li>
                                  <li className="timeline__event custom-dropdown">
                                  <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[1.25vw] py-[20px]">

                                  <Dropdown value={selectedGroup1} onChange={(e) => setSelectedGroup1(e.value)} options={Group1} optionLabel="name" 
                                    placeholder="All" className="w-full " />
                                  </div>
                                  </li>
                                  <li className="timeline__event custom-dropdown">
                                  <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[1.25vw] py-[20px]">

                                  <Dropdown value={selectedGroup2} onChange={(e) => setSelectedGroup2(e.value)} options={Group2} optionLabel="name" 
                                    placeholder="Second Selecion" className="w-full " />
                                  </div>
                                  </li>
                                
                                  <li className="timeline__event custom-dropdown xl:py-[1.25vw] py-[24px]">
                                      <Dropdown value={selectedGroup3} onChange={(e) => setSelectedGroup3(e.value)} options={Group3} optionLabel="name" 
                                      placeholder="All" className="w-full" />
                                    </li>
                                    {/* <li className="timeline__event">
                                      <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-medium xl:py-[1.25vw] py-[20px]"></div>
                                  </li> */}
                                </ul>
                                </div>
                                


                            </div>
                            <div className=" bg-[#fff] xl:w-[20.229vw] w-[350px] xl:h-[18.233vw] h-[450px] rounded-br-[50px] ">
                                  <div className="border-r-2 border-[#BECDE3] border-dashed">
                                    <ul className="border-r-2 border-[#BECDE3] pr-2 mr-0.5 space-y-[1.094vw]">
                                      <li className="flex justify-end gap-[10px]">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Automotive</div>
                                        <div className="text-[#046C4E] xl:text-[0.938vw] text-[18px] font-medium leading-none">6%</div>
                                      </li>
                                      <li className="flex justify-end gap-[10px]">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Consumer</div>
                                        <div className="text-[#046C4E] xl:text-[0.938vw] text-[18px] font-medium leading-none">2+</div>
                                      </li>
                                      <li className="flex justify-end gap-[10px] ">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Engineering</div>
                                        <div className="text-[#046C4E] xl:text-[0.938vw] text-[18px] font-medium leading-none">40%</div>
                                      </li>
                                      <li className="flex justify-end gap-[10px]">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Health Care</div>
                                        <div className="text-[#C81E1E] xl:text-[0.938vw] text-[18px] font-medium leading-none">-12%</div>
                                      </li>
                                      <li className="flex justify-end gap-[10px]">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Home & Per...</div>
                                        <div className="text-[#046C4E] xl:text-[0.938vw] text-[18px] font-medium leading-none">6%</div>
                                      </li>
                                      <li className="flex justify-end gap-[10px]">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Retail & Home</div>
                                        <div className="text-[#C81E1E] xl:text-[0.938vw] text-[18px] font-medium leading-none">6%</div>
                                      </li>
                                      <li className="flex justify-end gap-[10px]">
                                        <div className="text-[#9CA1AB] xl:text-[0.938vw] text-[18px] font-normal leading-none">Real Estate</div>
                                        <div className="text-[#046C4E] xl:text-[0.938vw] text-[18px] font-medium leading-none">8%</div>
                                      </li>
                                    </ul>
                                  </div>

                                  <div className="xl:mt-[1.458vw] mt-[22px]">
                                  <div className="flex gap-[14px] xl:gap-[0.729vw] items-center xl:mb-[0.521vw]  mb-[10px]"> 
                                        <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal leading-none w-[70px] flex justify-end">MTD - LY</div>
                                        <div className="w-2 h-2 bg-[#4BA5B7] rounded-full"></div>
                                        <div className="flex xl:gap-[0.569vw] gap-[9px]">
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.33B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.3B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">1.8B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.6b</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        </div>
                                  </div>
                                  <div className="flex gap-[14px] xl:gap-[0.729vw] items-center xl:mb-[0.521vw]  mb-[10px]"> 
                                        <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal leading-none w-[70px] flex justify-end">MTD - CY</div>
                                        <div className="w-2 h-2 bg-[#DD7539] rounded-full"></div>
                                        <div className="flex xl:gap-[0.569vw] gap-[9px]">
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.33B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.3B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">1.8B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.6b</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        </div>
                                  </div>
                                  <div className="flex gap-[14px] xl:gap-[0.729vw] items-center xl:mb-[0.521vw]  mb-[10px]"> 
                                        <div className="text-[#363A44] xl:text-[0.729vw] text-[14px] font-normal leading-none w-[70px] flex justify-end">LY</div>
                                        <div className="w-2 h-2 bg-[#768FB5] rounded-full"></div>
                                        <div className="flex xl:gap-[0.569vw] gap-[9px]">
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.33B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.3B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">1.8B</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.6b</div> 
                                        <div className="text-[#374151] xl:text-[0.625vw] text-[12px] font-semibold leading-none">0.2B</div> 
                                        </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          
                        </div>
                        </div>
                    </TabPanel>
              </TabView>
             
              </Tabs>
    </div>
    </>
  );
};
export default Comparisonsales;
