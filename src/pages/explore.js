import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Inter, Nunito, Teko } from "@next/font/google";
import HalfDoughnutChart from "@/components/charts/halfdoughnutchart";
import LineChart from "@/components/charts/linechart";
import BarChart from "@/components/charts/barchart";
import HorizontalChart from "@/components/charts/horizontalchart";

const myInter = Inter({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    display: "swap",
});

const myNunito = Nunito({
    weight: ["200", "300", "400", "600", "700", "800", "900"],
    subsets: ["latin"],
    display: "swap",
});


export default function Explore() {

    const LineChartData = {
        labels: ["Jan,23", "Feb,23", "Mar,23", "Apr,23", "May,23", "Jun,23"],
        values: ["17000", "22000", "25000", "35000", "19000", "29000"],
    };
    const BarChartData = {
        labels: ["Jan,23", "Feb,23", "Mar,23", "Apr,23", "May,23", "Jun,23"],
        values: ["50", "35", "40", "30", "25", "30"],
    };

    const HorizontalChartData = {
        value2:["430"],
        value1: ["300"],
        
      };


    return (
        <>
            <div className="px-[15px] xl:px-[5.083vw] py-[15px] xl:py-[4.083vw] explore_bg pt-[150px] xl:pt-[6.813vw] z-[99999]  ">
                <div className="flex justify-between">
                    <div className="col">
                        <div
                            className={`${myNunito.className} text-white text-[36px] sm:text-[20px] lg:text-[24px] xl:text-[1.875vw] font-bold leading-tight`}
                        >
                            Explore all the available solutions
                        </div>
                        <div
                            className={`${myNunito.className} text-white mt-[15px] text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[0.833vw] font-medium leading-tight opacity-[0.7] flex flex-col gap-[8px] xl:gap-[0.427vw]`}
                        >
                            <span>
                                View the latest technological trends from around the globe
                                under Latest Trends. Track the upcoming releases under New
                                Releases and find answers to your questions
                            </span>
                            <span>related to the platform under FAQs</span>
                        </div>
                    </div>
                    <div className="col">
                        <Link
                            href=""
                            className="relative z-[1] btn-color xl:text-[1.042vw] font-medium rounded-lg text-[20px] py-[12px] xl:py-[0.625vw] px-[21px] xl:px-[1.094vw] bg-[#42536D] text-[#FFF]"
                        >
                            Show All
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 xl:gap-[0.833vw] gap-[16px] xl:mt-[1.954vw] mt-[20px]">
                    <div className="box-style grid-bg xl:p-[0.581vw] p-[15px] relative gap-[16px] xl:gap-[0.833vw]">
                        <div className="zoom-effect-container border border-[#2D505D] rounded-t-2xl">
                            <div className="bg-[#DD7539] text-[#FFF] flex justify-center rounded-lg absolute top-[-5px] right-[22px]">
                                <Link
                                    className="flex gap-[8px] xl:gap-[0.417vw] items-center px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.217vw]"
                                    href={""}
                                >
                                    <div className="text-[12px] xl:text-[0.625vw]">
                                        Run Application
                                    </div>
                                    <div>
                                        <i className="alb-export text-[12px] xl:text-[0.625vw]"></i>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className={`${myInter.className} grid h-[5vw] pt-[16.5px] xl:pt-[0.859vw] pr-[22px] xl:pr-[1.146vw] pb-[20px] xl:pb-[0.521vw] pl-[20px] xl:pl-[1.042vw] gap-[25.5px] xl:gap-[1.328vw] rounded-t-2xl`}
                            >
                                <div className="text-[20px] xl:text-[1.042vw] text-[#FFF] font-bold">
                                    Executive Dashboard
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Customized BI App
                                    </div>
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Last Release: Aug, 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content px-[20px] xl:px-[1.042vw] rounded-b-2xl">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[0.729vw] font-normal leading-tight h-[52px] xl:h-[2.708vw] pt-[15px]">
                                    Group Target Vs Actual - Revenue (2023)
                                </div>
                                <div>
                                    <i className="alb-refresh text-[20px] xl:text-[1.042vw] text-[#FFF]"></i>
                                </div>
                            </div>

                            <div className="h-[100px] xl:h-[5.208vw] w-full">
                                <HalfDoughnutChart
                                    grid={{
                                        top: "5%",
                                        bottom: "25%",
                                        left: "10%",
                                        right: "10%",
                                    }}
                                    legend={{
                                        right: "right",
                                        top: 0,
                                        itemWidth: 10,
                                        itemHeight: 10,
                                        textStyle: {
                                            color: "#FFF",
                                            fontSize: 12,
                                            fontWeight: 400,
                                        },
                                    }}
                                    color={["#327488", "#8CCAD4", "#4a4e4f"]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="box-style grid-bg xl:p-[0.581vw] p-[15px] relative gap-[16px] xl:gap-[0.833vw]">
                        <div className="zoom-effect-container border border-[#2D505D] rounded-t-2xl">
                            <div className="bg-[#DD7539] text-[#FFF] flex justify-center rounded-lg absolute top-[-5px] right-[22px]">
                                <Link
                                    className="flex gap-[8px] xl:gap-[0.417vw] items-center px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.217vw]"
                                    href="/admin/dailyfinancereport/summary"
                                >
                                    <div className="text-[12px] xl:text-[0.625vw]">
                                        Run Application
                                    </div>
                                    <div>
                                        <i className="alb-export text-[12px] xl:text-[0.625vw]"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid h-[5vw] pt-[16.5px] xl:pt-[0.859vw] pr-[22px] xl:pr-[1.146vw] pb-[20px] xl:pb-[0.521vw] pl-[20px] xl:pl-[1.042vw] gap-[25.5px] xl:gap-[1.328vw] rounded-t-2xl">
                                <div className="text-[20px] xl:text-[1.042vw] text-[#FFF] font-bold">
                                    Daily Finance Report
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Customized BI App
                                    </div>
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Last Release: Aug, 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content px-[20px] xl:px-[1.042vw] rounded-b-2xl">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[0.729vw] font-normal leading-tight h-[52px] xl:h-[2.708vw] pt-[15px]">
                                    Group - Profit (2023)
                                </div>
                                <div>
                                    <i className="alb-refresh text-[20px] xl:text-[1.042vw] text-[#FFF]"></i>
                                </div>
                            </div>
                            <div className="gap-2 h-[100px] xl:h-[5.208vw]">
                                <BarChart
                                    barWidth={25}
                                    grid={{ top: 1, bottom: 55, left: "10%", right: "0" }}
                                    barcolor={"#DD7539"}
                                    yAxisNamePosition="center"
                                    yAxisNameGap="33"
                                    data={BarChartData}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="box-style grid-bg xl:p-[0.581vw] p-[15px] relative gap-[16px] xl:gap-[0.833vw]">
                        <div className="zoom-effect-container border border-[#2D505D] rounded-t-2xl">
                            <div className="bg-[#DD7539] text-[#FFF] flex justify-center rounded-lg absolute top-[-5px] right-[22px]">
                                <Link
                                    className="flex gap-[8px] xl:gap-[0.417vw] items-center px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.217vw]"
                                    href={""}
                                >
                                    <div className="text-[12px] xl:text-[0.625vw]">
                                        Run Application
                                    </div>
                                    <div>
                                        <i className="alb-export text-[12px] xl:text-[0.625vw]"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid h-[5vw] pt-[16.5px] xl:pt-[0.859vw] pr-[22px] xl:pr-[1.146vw] pb-[20px] xl:pb-[0.521vw] pl-[20px] xl:pl-[1.042vw] gap-[25.5px] xl:gap-[1.328vw] rounded-t-2xl">
                                <div className="text-[20px] xl:text-[1.042vw] text-[#FFF] font-bold">
                                    E-City Analytics
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Customized BI App
                                    </div>
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Last Release: Aug, 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content px-[20px] xl:px-[1.042vw] rounded-b-2xl">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[0.729vw] font-normal leading-tight h-[52px] xl:h-[2.708vw] pt-[15px]">
                                    Target Vs Actual - Sales (2023)
                                </div>
                                <div>
                                    <i className="alb-refresh text-[20px] xl:text-[1.042vw] text-[#FFF]"></i>
                                </div>
                            </div>
                            <div className="h-[100px] xl:h-[5.208vw]">
                                <HorizontalChart
                                    legend={{
                                        show: true,
                                        bottom: 30,
                                        left: 0,
                                        itemWidth: 9,
                                        itemHeight: 9,
                                        textStyle: {
                                            color: "#FFF",
                                            fontSize: "10px",
                                            fontWeight: 400,
                                        }
                                    }}
                                    grid={{
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 50,
                                        containLabel: true,
                                    }}
                                    data={HorizontalChartData}
                                    style={{ height: "100%", width: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="box-style grid-bg xl:p-[0.581vw] p-[15px] relative gap-[16px] xl:gap-[0.833vw]">
                        <div className="zoom-effect-container border border-[#2D505D] rounded-t-2xl">
                            <div className="bg-[#DD7539] text-[#FFF] flex justify-center rounded-lg absolute top-[-5px] right-[22px]">
                                <Link
                                    className="flex gap-[8px] xl:gap-[0.417vw] items-center px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.217vw]"
                                    href={""}
                                >
                                    <div className="text-[12px] xl:text-[0.625vw]">
                                        Run Application
                                    </div>
                                    <div>
                                        <i className="alb-export text-[12px] xl:text-[0.625vw]"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="grid h-[5vw] pt-[16.5px] xl:pt-[0.859vw] pr-[22px] xl:pr-[1.146vw] pb-[20px] xl:pb-[0.521vw] pl-[20px] xl:pl-[1.042vw] gap-[25.5px] xl:gap-[1.328vw] rounded-t-2xl">
                                <div className="text-[20px] xl:text-[1.042vw] text-[#FFF] font-bold">
                                    E-Commerce Analytics
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Customized BI App
                                    </div>
                                    <div className="text-[14px] xl:text-[0.729vw] font-semibold text-[#FFF] opacity-[0.6]">
                                        Last Release: Aug, 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content px-[20px] xl:px-[1.042vw] rounded-b-2xl">
                            <div className="flex justify-between items-center">
                                <div className="text-white text-[14px] sm:text-[14px] lg:text-[18px] xl:text-[0.729vw] font-normal leading-tight h-[52px] xl:h-[2.708vw] pt-[15px]">
                                    Number of visitors, 2023
                                </div>
                                <div>
                                    <i className="alb-refresh text-[20px] xl:text-[1.042vw] text-[#FFF]"></i>
                                </div>
                            </div>
                            <div className="gap-2 h-[100px] xl:h-[5.208vw]">
                                <LineChart
                                    legend={{
                                        show: true,
                                        bottom: 5,
                                        itemWidth: 10,
                                        itemHeight: 10,
                                        width: "100%",
                                        textStyle: {
                                            fontSize: 10,
                                            color: "#6C768B",
                                        },
                                    }}
                                    labelShow={true}
                                    grid={{
                                        top: "5%",
                                        bottom: "55%",
                                        left: "18%",
                                        right: "0%",
                                    }}
                                    data={LineChartData}
                                    lineType={"line"}
                                    color1={"black"}
                                    fillcolor={["#EBB686"]}
                                    borderColor={"#FFF"}
                                    lineColor={["#FFA600"]}
                                    yAxisNameGap={"33"}
                                    yAxisNamePosition={"middle"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
