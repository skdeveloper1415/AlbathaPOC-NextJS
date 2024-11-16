import React, {useState, useRef} from "react";
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { TabView } from 'primereact/tabview';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ScrollPanel } from 'primereact/scrollpanel';
import ChartWrapper from "@/components/chartwrapper";
import Insights from './insights'
import DailyAlerts from "./dailyalerts";
import Comparisonsales from './comparison'
import FilterComponent from "@/components/filtercomponent";
import Layout from "@/components/layoutAdmin/layoutdailyfinancereport/layout";

export default function index() {
    const Sales = {
        title: {
            text: '12 Months Trend - Variance',
            top: 3,
            left: -5,
            textStyle:{
            fontSize:13,
            color:'#4B586E',
            fontWeight:500
            }
          },
          grid: {
            top: '20%',
            left:0,
            right:0,
            bottom: 0,
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            axisLine: { show: false },
            axisLabel: { show: true, color:'#4B586E', fontSize:'8', fontWeight:400, },
            axisTick: { show: false },
            splitLine: { show: false },
            data: [
              'JAN',
              'FEB',
              'MAR',
              'APR',
              'MAY',
              'JUN',
              'JUL',
              'AUG',
              'SEP',
              'OCT',
              'NOV',
              'DEC'
            ]
          },
          yAxis: {
            type: 'value',
            max: 100,
            interval: 20,
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: true },
          },
          series: [
            {
              name: 'Cost',
              type: 'bar',
              stack: 'Total',
              barWidth:'60%',
              data: [
                { value: 80, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: 80, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: 60, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: 80, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: -20, itemStyle:{color:'#F98080',borderRadius: [0, 0, 2, 2]} },
                { value: -50, itemStyle:{color:'#F98080',borderRadius: [0, 0, 2, 2]} },
                { value: -30, itemStyle:{color:'#F98080',borderRadius: [0, 0, 2, 2]} },
                { value: 20, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: 50, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: 70, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: 80, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
                { value: 60, itemStyle:{color:'#4BA5B7',borderRadius: [2, 2, 0, 0]} },
              ]
            }
          ]
    };
    const CashPosition = {
        legend: {
            show: true,
             right: 0,
             itemWidth: 10,
             itemHeight: 10,
             textStyle: {
              color: "rgba(30, 62, 90, 0.60)",
              fontSize: 10,
              fontWeight:400
            }
          },
        title: {
            text: '6 Months Trend',
            top: 3,
            left: -5,
            textStyle:{
            fontSize:13,
            color:'#4B586E',
            fontWeight:500
            }
          },
          grid: {
            top: '20%',
            left:0,
            right:0,
            bottom: 0,
            containLabel: true,
          },
        grid: {
            top: '20%',
            left:0,
            right:0,
            bottom: 0,
            containLabel: true,
          },
        xAxis: {
            type: 'category',
            data: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',],
            axisLine: { show: false },
            axisLabel: { show: true, color:'#4B586E', fontSize:'11', fontWeight:400 },
            axisTick: { show: false },
            splitLine: { show: false,
            lineStyle: {
                color: "#E5E7EB"
              }
            },
          },
          yAxis: {
            type: 'value',
            max: 100,
            min:0,
            interval: 20,
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: true },
          },
          series: [
            {
              name:'LY',
              data: [30, 30, 20, 40, 15, 20],
              color:'#4BA5B7',
              type: 'bar',
              barWidth: '80%',
              itemStyle: {
              borderRadius: [2, 2, 0, 0]
              }
            },
            {
              name:'CY',
              data: [15, 15, 10, 20, 20, 15],
              color:'#1F2A37',
              type: 'bar',
              barWidth: '40%',
              barGap: "-75%",
              itemStyle: {
              borderRadius: [2, 2, 0, 0]
              }
            }
          ]
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeIndextabtow, setActiveIndextabtow] = useState(0);
  return (
    <>
    <Layout 
      pageTitle="Summary" 
      pageName="Summary"
    >
      <FilterComponent />    
      <div className='pb-[100px] xl:pb-[5.729vw]'>
      <Tabs className={'customtabview'}>
      <div className='grid grid-cols-12 xl:gap-[1.198vw] gap-5'>
      <div className='col-span-12 lg:col-span-3'>
      <ScrollPanel style={{ width: '100%', height: '90vh' }}>
      <TabList>
        <Tab>
      <div className='bg-[#F5F6F7] xl:p-[0.833vw] p-4 xl:rounded-[0.417vw] rounded-lg shadow-lg activetab_view'>
        <ChartWrapper
          ExportIcon={true}
          tabSection={true}
          setTabActiveIndex={setActiveIndex}
          tabActiveIndex ={activeIndex}
            title={"Sales"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} className="custmprimetab">
              <TabPanel>
              <div className='xl:space-y-[0.625vw] space-y-[12px]'>
              <div className='flex justify-between items-center'>
              <div className='text-[#4B586E] xl:text-[1.354vw] text-[24px] font-semibold xl:leading-[1.458vw] leading-7 act_sub_head'>3.9 bn AED</div>
              <div className='text-[#4B586E] flex items-center gap-1'>
              <div className='xl:text-[0.833vw] text-sm font-medium xl:leading-[0.938vw] leading-[18px] flex items-center gap-1'><i className='alb-arrow-up-rounded-fill text-[#31C48D] xl:text-[1.042vw] text-base'></i><span>4.9%</span></div>
              <div className='xl:text-[0.729vw] font-normal text-xs'>LP Var</div>
              </div>
              </div>
              <div className='h-[145px] xl:h-[7.552vw]'>
              <ReactEcharts option={Sales} style={{ height: "100%", width: "100%" }} />
              </div>
              </div>
              </TabPanel>
              <TabPanel>
              <div className='xl:space-y-[0.625vw] space-y-[12px]'>
              <div className='flex justify-between items-center'>
              <div className='text-[#DD7539] xl:text-[1.354vw] text-[24px] font-semibold xl:leading-[1.458vw] leading-7 act_sub_head'>3.9 bn AED</div>
              <div className='text-[#4B586E] flex items-center gap-1'>
              <div className='xl:text-[0.833vw] text-sm font-medium xl:leading-[0.938vw] leading-[18px] flex items-center gap-1'><i className='alb-arrow-up-rounded-fill text-[#31C48D] xl:text-[1.042vw] text-base'></i><span>4.9%</span></div>
              <div className='xl:text-[0.729vw] font-normal text-xs'>LP Var</div>
              </div>
              </div>
              <div className='h-[145px] xl:h-[7.552vw]'>
              <ReactEcharts option={Sales} style={{ height: "100%", width: "100%" }} />
              </div>
              </div>  
              </TabPanel>
              </TabView>
              </div>
              </>
            }
          />
          </div>
        </Tab>
        <Tab>
        <div className='bg-[#F5F6F7] xl:p-[0.833vw] p-4 xl:rounded-[0.417vw] rounded-lg shadow-lg activetab_view'>
        <ChartWrapper
        ExportIcon={true}
            title={"Cash Position - MTD"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className='xl:space-y-[0.625vw] space-y-[12px]'>
                  <div className='flex justify-between items-center'>
                      <div className='text-[#4B586E] xl:text-[1.354vw] text-[24px] font-semibold xl:leading-[1.458vw] leading-7 act_sub_head'>2.9 bn AED</div>
                      <div className='text-[#4B586E] flex items-center gap-1'>
                      <div className='xl:text-[0.833vw] text-sm font-medium xl:leading-[0.938vw] leading-[18px] flex items-center gap-1'><i className='alb-arrow-up-rounded-fill text-[#31C48D] xl:text-[1.042vw] text-base'></i><span>4.9%</span></div>
                      <div className='xl:text-[0.729vw] font-normal text-xs'>LP Var</div>
                      </div>
                  </div>
                  <div className='h-[145px] xl:h-[7.552vw]'>
                  <ReactEcharts option={CashPosition} style={{ height: "100%", width: "100%" }} />
                  </div>
              </div>
              </div>
              </>
            }
          />
          </div>
        </Tab>
        <Tab>
        <div className='bg-[#F5F6F7] xl:p-[0.833vw] p-4 xl:rounded-[0.417vw] rounded-lg shadow-lg activetab_view'>
        <ChartWrapper
          ExportIcon={true}
          tabSection={false}
            title={"Cash Collecion - MTD"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className='xl:space-y-[0.625vw] space-y-[12px]'>
                  <div className='flex justify-between items-center'>
                      <div className='text-[#4B586E] xl:text-[1.354vw] text-[24px] font-semibold xl:leading-[1.458vw] leading-7 act_sub_head'>3.8 bn AED</div>
                      <div className='text-[#4B586E] flex items-center gap-1'>
                      <div className='xl:text-[0.833vw] text-sm font-medium xl:leading-[0.938vw] leading-[18px] flex items-center gap-1'><i className='alb-arrow-up-rounded-fill text-[#31C48D] xl:text-[1.042vw] text-base'></i><span>4.9%</span></div>
                      <div className='xl:text-[0.729vw] font-normal text-xs'>LP Var</div>
                      </div>
                  </div>
                  <div className='h-[145px] xl:h-[7.552vw]'>
                  <ReactEcharts option={CashPosition} style={{ height: "100%", width: "100%" }} />
                  </div>
              </div>
              </div>
              </>
            }
          />
          </div>
        </Tab>
        <Tab>
        <div className='bg-[#F5F6F7] xl:p-[0.833vw] p-4 xl:rounded-[0.417vw] rounded-lg shadow-lg activetab_view'>
        <ChartWrapper
          ExportIcon={true}
          tabSection={false}
            title={"Inventory - MTD"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className='xl:space-y-[0.625vw] space-y-[12px]'>
                  <div className='flex justify-between items-center'>
                      <div className='text-[#4B586E] xl:text-[1.354vw] text-[24px] font-semibold xl:leading-[1.458vw] leading-7 act_sub_head'>11.5 bn AED</div>
                      <div className='text-[#4B586E] flex items-center gap-1'>
                      <div className='xl:text-[0.833vw] text-sm font-medium xl:leading-[0.938vw] leading-[18px] flex items-center gap-1'><i className='alb-arrow-up-rounded-fill text-[#31C48D] xl:text-[1.042vw] text-base'></i><span>2%</span></div>
                      <div className='xl:text-[0.729vw] font-normal text-xs'>LP Var</div>
                      </div>
                  </div>
                  <div className='h-[145px] xl:h-[7.552vw]'>
                  <ReactEcharts option={CashPosition} style={{ height: "100%", width: "100%" }} />
                  </div>
              </div>
              </div>
              </>
            }
          />
          </div>
        </Tab>
      </TabList>
      </ScrollPanel>
      </div>
      <div className='col-span-12 lg:col-span-7'>
      <TabPanel>
      <Comparisonsales />
      </TabPanel>
      <TabPanel>
      <Comparisonsales />
      </TabPanel>
      <TabPanel>
      <Comparisonsales />
      </TabPanel>
      <TabPanel>
      <Comparisonsales />
      </TabPanel>
      </div>

      <div className='col-span-12 lg:col-span-2'>
      <Insights />
      </div>
      </div>
    </Tabs>
      </div>
      
    <DailyAlerts />
    </Layout>   
    
    </>
  )
}
