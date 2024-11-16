import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BannerRightTab from "./bannerrighttab";
import { Inter, Teko } from "@next/font/google";
import PieChartWithImage from "@/components/charts/piechartwithimage";
import BarChartWithLine from "@/components/charts/barchartwithline";
import Profile from "@/components/layout/profile";
import Head from "next/head";
import Explore from "./explore";
import Universe from "./universe";
import ReactEcharts from 'echarts-for-react';

const myInter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const myTeko = Teko({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function albathagroup(props) {

  const [smart, setSmart] = useState(1); 
  const malegraphic = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/male_image.svg",
        width: 28,
        height: 28,
      },
      center: "center",
      left: "center",
      right: "center",
      top: "center",
    },
  ];

  const femalegraphic = [
    {
      type: "image",
      style: {
        image: "/assets/images/svg/female_image.svg",
        width: 28,
        height: 28,
      },
      center: "center",
      left: "center",
      right: "center",
      top: "center",
    },
  ];

  // chart 
  const SalesActualTargetData = {
    legend: {
      show: false,
      right: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(30, 62, 90, 0.60)",
        fontSize: 10,
        fontWeight: 400
      }
    },
    title: {
      show: false,
    },
    grid: {
      top: 10,
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Automotive', 'Consumer', 'Engineering', 'Healthcare', 'Home...', 'Retail...', 'Real Estate',],
      axisLine: { 
        show: true,
        lineStyle: {
          color: "#BECDE3"
        }
       },
      axisLabel: {
        interval:0,
        show: true, color: '#4B586E', fontSize: '11', fontWeight: 400,
        formatter: function (value) {
          return '{value|'+ value +'}\n {unit|LP Var: 2%}';
        },
        rich: {
          completed: {
            fontSize: 12,
            fontWeight: 400,
            color: '#6F7787'
          },
          value: {
            fontSize: 11,
            fontWeight: 400,
            color: '#FFFFFF'
          },
          unit: {
            fontSize: 9,
            fontWeight: 400,
            color: '#9CA1AB'
          }
        }
      },
      axisTick: { show: false },
      splitLine: {
        show: false,
        lineStyle: {
          color: "#E5E7EB"
        }
      },
    },
    yAxis: {
      type: 'value',
      max: 120,
      min: 0,
      interval: 20,
      axisLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: "#E5E7EB"
        }
      },
    },
    series: [
      {
        name: 'LY',
        data: [110, 75, 85, 65, 90, 35, 75],
        color: '#327488',
        type: 'bar',
        barWidth: '28%',
        itemStyle: {
          borderRadius: [3, 3, 0, 0]
        },
        label: {
          show: true,
          position: 'top',
          color: '#fff',
          fontSize: 10,
          fontWeight: 400,
          formatter: '{c} % Ach'
        }
      },
      {
        name: 'CY',
        data: [100, 65, 75, 55, 80, 25, 65],
        color: '#E38E54',
        type: 'bar',
        barWidth: '14%',
        barGap: "-75%",
        itemStyle: {
          borderRadius: [0.3, 0.3, 0, 0]
        },
        label: { show: false }
      }
    ]
  };

  function handleCount(){

    if(smart<3){
      setSmart(smart+1)
    }
    else{
      setSmart(1)
    }
  }

  return (
    <>
      <Head>
        <title>Albatha Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon.svg" />
      </Head>
      <div className={`${myInter.className} landingBgColor`}>
        <div className="albathagroup_bg">
           {/* header section */}
           <div
              className="bg-[#02151880]  py-[1.25vw] relative z-20"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <div className="px-[15px] xl:px-[5.083vw] menu-wrap">
                <div className="grid grid-cols-12 items-center">
                  <div className="col-span-3 xl:col-span-4">
                    <div className="flex items-center space-x-[30px] xl:space-x-[3.385vw]">
                      <div className="w-full lg:w-auto" id="logo">
                        <Link href={"/"}>
                          <Image
                            src={"/assets/images/logo.svg"}
                            width={"360"}
                            height={"70"}
                            className="max-w-[180px] md:max-w-[250px] xl:max-w-[12.750vw] light"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-9 xl:col-span-8">
                    <div className="flex items-center justify-end xl:space-x-[2.083vw]">
                      <div>
                        <div className="flex items-center space-x-[0.521vw]">
                          <div className="flex items-center space-x-[10px] xl:space-x-[1.354vw]">
                            <div className="relative">
                              <Link
                                href={""}
                                className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px]
                   xl:w-[2.610vw] xl:h-[2.610vw] rounded-full bg-[#F0F0F01A]"
                              >
                                <i className="NU-cart text-[#fff] text-[18px] xl:text-[0.938vw]"></i>

                                <Image
                                  src={
                                    "/assets/images/svg/notification-white.svg"
                                  }
                                  width={"16"}
                                  height={"16"}
                                  className=""
                                  alt="notification"
                                />
                              </Link>
                              <div className="absolute -right-[10px] -top-[10px] md:-right-[6px] md:-top-[6px] xl:-right-[0.313vw] xl:-top-[0.313vw]">
                                <div className="text-[11px] xl:text-[0.573vw] text-white bg-[#A83B3B] rounded-full w-[20px] h-[20px] md:w-[24px] md:h-[24px] xl:w-[1vw] xl:h-[1vw] flex items-center justify-center">
                                  3
                                </div>
                              </div>
                            </div>
                            <div>
                              <div x-data="{ open: false }" className="">
                                <div
                                  className="relative"
                                  x-data="{ open: false }"
                                >
                                  <Profile />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* header section End */}
          <div className="pl-[15px] xl:pl-[5.083vw] pt-[30px] xl:pt-[1.563vw]">
            <div className="text-white/60 text-[16px] xl:text-[0.833vw] leading-none">
            <Link href={""} onClick={()=>props.setDetail(0)} >
                <i className="alb-arrow-left-line mr-[10px] text-[14px] xl:text-[0.729vw]"></i>
                Back to hall of data
              </Link>
            </div>
            <div className={myTeko.className}>
              <div className="text-[57px] xl:text-[2.969vw] text-white font-medium">
              Albatha group
              </div>
            </div>
            <div className="w-full max-w-[681px] xl:max-w-[35.469vw] space-y-[20px] xl:space-y-[1.042vw]">
              <div className="grid grid-cols-12 gap-[20px] xl:gap-[1.042vw]">
                <div className="col-span-7">
                  <div className="space-y-[20px] xl:space-y-[1.042vw] h-full">
                    <div className="flex gap-[20px] xl:gap-[1.042vw]">
                      <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] text-white min-w-max hoverViewBox">
                        <div className="flex flex-col items-center justify-center h-full">
                          <div className="text-[32px] xl:text-[1.667vw] leading-[1.2] iconHover">
                            <i className="alb-lamp"></i>
                            <i className="alb-navigate"></i>
                          </div>
                          <div className="font-semibold text-[12px] xl:text-[0.625vw] text-center w-full min-w-[89px] overflow-hidden">
                            <span className="hoverText1 block">
                              Hover to view...
                            </span>
                            <span className="hoverText2 block">
                              Some insights
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] w-full bannerLogoWrap">
                        <div className="flex justify-center items-center h-full">
                          <div className="bannerLogoGroup">
                            <Image
                              src={"/assets/images/grouplogo.png"}
                              className="mx-auto"
                              width={"168"}
                              height={"87"}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] BannerHeadcount relative overflow-hidden">
                      <div className="text-white text-[16px] xl:text-[0.833vw] font-semibold">
                        Headcount
                      </div>
                      <div className="hoverDiv1None">
                        <div className="flex items-center gap-[68px] xl:gap-[3.542vw]">
                          <div className="col">
                            <div className="space-y-[16px] xl:space-y-[0.833vw]">
                              <div className="text-white text-[24px] xl:text-[24px] font-semibold leading-none">
                                10,000
                              </div>
                              <div className="py-[5px] px-[6px] xl:py-[0.260vw] xl:px-[0.313vw] bg-[rgba(255,255,255,0.2)] rounded-[8px] xl:rounded-[0.417vw] text-center text-white text-[14px] xl:text-[0.729vw] min-w-max">
                                LP Var: 2%
                              </div>
                            </div>
                          </div>
                          <div className="col w-full">
                            <div className="grid grid-cols-2 gap-[24px] xl:gap-[1.250vw]">
                              <div className="col">
                                <div className="w-full h-[100px] xl:h-[5.208vw]">
                                  <PieChartWithImage
                                    chartname={"headcount"}
                                    data={[
                                      { value: 65, name: "Male" },
                                      { value: 35, name: "Other" },
                                    ]}
                                    radius={["70%", "100%"]}
                                    center={["50%", "50%"]}
                                    graphic={malegraphic}
                                    color={["#CE5A28", "#FFFFFF1A"]}
                                    legend={{
                                      show: false,
                                    }}
                                  />
                                </div>
                                <div className="row">
                                  <div className="text-white text-[12px] xl:text-[0.625vw]">
                                    Male
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="text-white text-[18px] xl:text-[0.938vw]">
                                      6500
                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.1)] p-[6px] xl:p-[0.260vw] rounded-[4px] xl:rounded-[0.208vw] text-white text-[12px] xl:text-[0.625vw]">
                                      65%
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <div className="w-full h-[100px] xl:h-[5.208vw]">
                                  <PieChartWithImage
                                    chartname={"headcount"}
                                    data={[
                                      { value: 35, name: "Femal" },
                                      { value: 65, name: "Other" },
                                    ]}
                                    radius={["70%", "100%"]}
                                    center={["50%", "50%"]}
                                    graphic={femalegraphic}
                                    color={["#4BA5B7", "#FFFFFF1A"]}
                                    legend={{
                                      show: false,
                                    }}
                                  />
                                </div>
                                <div className="row">
                                  <div className="text-white text-[12px] xl:text-[0.625vw]">
                                    Female
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div className="text-white text-[18px] xl:text-[0.938vw]">
                                      3500
                                    </div>
                                    <div className="bg-[rgba(255,255,255,0.1)] p-[6px] xl:p-[0.260vw] rounded-[4px] xl:rounded-[0.208vw] text-white text-[12px] xl:text-[0.625vw]">
                                      35%
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-2/4 left-0 right-0 -translate-y-2/4">
                        <div className="hoverDiv2">
                          <div className="text-center text-white max-w-[312px] xl:max-w-[16.250vw] mx-auto">
                            <div className="block mb-[10px] xl:mb-[0.521vw]">
                              <Link
                                href={""}
                                className="inline-block bg-[#DD7539] rounded-[6px] xl:rounded-[0.313vw] py-[4px] py-[0.208vw] px-[8px] xl:px-[0.417vw] text-[12px] xl:text-[0.625vw] font-semibold uppercase"
                              >
                                <i className="alb-lamp mr-[5px] xl:mr-[0.260vw]"></i>
                                hexa ai insight
                              </Link>
                            </div>
                            <div className="text-[14px] xl:text-[0.729vw]">
                              Your team of 10,000 people generates approximately
                              985 million in monthly revenue.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] h-full">
                    <div className="text-white text-[16px] xl:text-[0.833vw] font-semibold mb-[10px] xl:mb-[0.521vw]">
                      Top 5 Companies
                    </div>
                    <div className="divide-y divide-[rgba(255,255,255,0.05)] space-y-[6px] xl:space-y-[0.313vw] companiesHover Groupcompanies">
                      {/* row */}
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          Retail & Home Products
                          </div>
                        </div>
                        <div className="w-full max-w-[90px] xl:max-w-[4.688vw] min-h-[30px] xl:min-h-[1.563vw] hoverImg hoverImgCustm">
                          <Image
                            src={"assets/images/retail-click.png"}
                            width={"90"}
                            height={"44"}
                            alt=""
                          />
                        </div>
                        <div className="col hoverText2">
                          <div className="text-white/60 text-[12px] xl:text-[0.625vw] text-end">
                            Revenue
                          </div>
                          <div className="text-white text-[16px] xl:text-[0.833vw] font-medium">
                            $ 90m
                          </div>
                        </div>
                      </div>

                      {/* row */}
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          Automotive
                          </div>
                        </div>
                        <div className="w-full max-w-[69px] xl:max-w-[3.594vw] min-h-[30px] xl:min-h-[1.563vw] hoverImg">
                          <Image
                            src={"assets/images/automotive.png"}
                            width={"69"}
                            height={"44"}
                            alt=""
                          />
                        </div>
                        <div className="col hoverText2">
                          <div className="text-white/60 text-[12px] xl:text-[0.625vw] text-end">
                            Revenue
                          </div>
                          <div className="text-white text-[16px] xl:text-[0.833vw] font-medium">
                            $ 178m
                          </div>
                        </div>
                      </div>
                      {/* row */}
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          Healthcare
                          </div>
                        </div>
                        <div className="w-full max-w-[69px] xl:max-w-[3.594vw] min-h-[30px] xl:min-h-[1.563vw] hoverImg">
                          <Image
                            src={"assets/images/healthcare.png"}
                            width={"69"}
                            height={"44"}
                            alt=""
                          />
                        </div>
                        <div className="col hoverText2">
                          <div className="text-white/60 text-[12px] xl:text-[0.625vw] text-end">
                            Revenue
                          </div>
                          <div className="text-white text-[16px] xl:text-[0.833vw] font-medium">
                            $ 218m
                          </div>
                        </div>
                      </div>
                      {/* row */}
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          Real Estate
                          </div>
                        </div>
                        <div className="w-full max-w-[69px] xl:max-w-[3.594vw] min-h-[30px] xl:min-h-[1.563vw] hoverImg">
                          <Image
                            src={"assets/images/real-estate.png"}
                            width={"69"}
                            height={"44"}
                            alt=""
                          />
                        </div>
                        <div className="col hoverText2">
                          <div className="text-white/60 text-[12px] xl:text-[0.625vw] text-end">
                            Revenue
                          </div>
                          <div className="text-white text-[16px] xl:text-[0.833vw] font-medium">
                            $ 300m
                          </div>
                        </div>
                      </div>
                      {/* row */}
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          Consumer
                          </div>
                        </div>
                        <div className="w-full max-w-[69px] xl:max-w-[3.594vw] min-h-[30px] xl:min-h-[1.563vw] hoverImg">
                          <Image
                            src={"assets/images/consumer.png"}
                            width={"69"}
                            height={"44"}
                            alt=""
                          />
                        </div>
                        <div className="col hoverText2">
                          <div className="text-white/60 text-[12px] xl:text-[0.625vw] text-end">
                            Revenue
                          </div>
                          <div className="text-white text-[16px] xl:text-[0.833vw] font-medium">
                            $ 75m
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              {/* row */}
              <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] h-full relative trendAnalysis overflow-hidden">
                <div className="overflow-hidden">
                  <div className="text-white text-[16px] xl:text-[0.833vw] font-semibold mb-[20px] xl:mb-[1.042vw]">
                  Sales, Actual Vs Target  by Groups, CY
                  </div>
                  <div className="chartHover">
                  <div className="w-full h-[194px] xl:h-[10.104vw]">
                    <ReactEcharts option={SalesActualTargetData} style={{ height: "100%", width: "100%" }} />
                  </div>
                  </div>
                  <div className="absolute top-2/4 left-0 right-0 -translate-y-2/4">
                    <div className="hoverDiv1">
                      <div className="text-center text-white max-w-[372px] xl:max-w-[19.375vw] mx-auto">
                        <div className="block mb-[10px] xl:mb-[0.521vw]">
                          <Link
                            href={""}
                            className="inline-block bg-[#DD7539] rounded-[6px] xl:rounded-[0.313vw] py-[4px] py-[0.208vw] px-[8px] xl:px-[0.417vw] text-[12px] xl:text-[0.625vw] font-semibold uppercase"
                          >
                            <i className="alb-lamp mr-[5px] xl:mr-[0.260vw]"></i>{" "}
                            hexa ai insight
                          </Link>
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw]">
                        Figma ipsum component variant main layer. Project distribute arrow follower rotate line component bold.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="bg-[rgba(12,17,22,0.20)] backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] h-full">
                <div className="flex items-center divide-x divide-[rgba(255,255,255,0.5)] gap-[16px] xl:gap-[0.833vw] overflow-hidden">
                  <div className="col min-w-max">
                    <div className="text-white text-[16px] xl:text-[0.833vw] font-semibold">
                      Smart Narratives
                    </div>
                    <div className="text-[rgba(255,255,255,0.5)] text-[12px] xl:text-[0.625vw] uppercase">
                      Generated by hexa ai
                    </div>
                    <div className="block mt-[18px] xl:mt-[0.938vw]">
                      <div
                        onClick={handleCount}
                        className="inline-block bg-[#CE5A28] p-[8px] xl:p-[0.417vw] rounded-[6px] xl:rounded-[0.260vw] text-[14px] xl:text-[0.729vw] text-white cursor-pointer"
                      >
                        New Narrative{" "}
                        <i className="alb-refresh ml-[5px] xl:ml-[0.260vw]"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="pl-[16px] xl:pl-[0.833vw] transition-opacity">
                      { smart===1?
                         <div className="col box new-narrative-slide" >
                         <div className="text-white/60 text-[12px] xl:text-[0.625vw] h-[35px]">
                           E-City has witnessed around 10% growth in the past 3
                           months. The main activity was the on-site sales (8500)
                           followed by the online sales (1500).
                         </div>
                         <div className="bg-[rgba(255,255,255,0.1)] p-[8px] xl:p-[0.417vw] rounded-[8px] xl:rounded-[0.417vw] mt-[14px] xl:mt-[0.729vw]">
                           <div className="text-[#4BA5B7] text-[12px] xl:text-[0.625vw] font-medium uppercase">
                             <i className="alb-lamp mr-[6px] xl:mr-[0.260vw]"></i>{" "}
                             hexa ai recommendation
                           </div>
                           <div className="text-white text-[12px] xl:text-[0.625vw]">
                             Increase investment in paid media to improve online
                             sales.
                           </div>
                         </div>
                       </div>:
                        null
                      }
                       { smart===2?
                         <div className="col box new-narrative-slide" >
                         <div className="text-white/60 text-[12px] xl:text-[0.625vw] h-[35px]">
                         GECO have the higher revenue per collaborator of Albatha Engineering.
                         </div>
                         <div className="bg-[rgba(255,255,255,0.1)] p-[8px] xl:p-[0.417vw] rounded-[8px] xl:rounded-[0.417vw] mt-[14px] xl:mt-[0.729vw]">
                           <div className="text-[#4BA5B7] text-[12px] xl:text-[0.625vw] font-medium uppercase">
                             <i className="alb-lamp mr-[6px] xl:mr-[0.260vw]"></i>{" "}
                             hexa ai recommendation
                           </div>
                           <div className="text-white text-[12px] xl:text-[0.625vw]">
                           Give workshops for the collaborators of the other companies.
                           </div>
                         </div>
                       </div>:
                         null
                        
                      }
                       { smart===3?
                         <div className="col box new-narrative-slide" >
                         <div className="text-white/60 text-[12px] xl:text-[0.625vw] h-[35px]">
                         GECO have the higher .
                         </div>
                         <div className="bg-[rgba(255,255,255,0.1)] p-[8px] xl:p-[0.417vw] rounded-[8px] xl:rounded-[0.417vw] mt-[14px] xl:mt-[0.729vw]">
                           <div className="text-[#4BA5B7] text-[12px] xl:text-[0.625vw] font-medium uppercase">
                             <i className="alb-lamp mr-[6px] xl:mr-[0.260vw]"></i>{" "}
                             hexa ai recommendation
                           </div>
                           <div className="text-white text-[12px] xl:text-[0.625vw]">
                           Give workshops for the collaborators of the other companies.
                           </div>
                         </div>
                       </div>:
                         null
                        
                      }
                   
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

           {/* Explore start */}
           <Explore />
          {/* Explore end */}

          {/* Universe start */}
          <Universe />
          {/* Universe end */}

          {/**banner Right Side**/}
          <BannerRightTab setDetail={props.setDetail} Detail={props.Detail} />
          {/**banner Right Side**/}
        </div>
      </div>
    </>
  );
}
