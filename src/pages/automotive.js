import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Teko } from "@next/font/google";
import BannerRightTab from "./bannerrighttab";
import DonatChart from "@/components/charts/donatchart";
import LineChartBanner from "@/components/charts/linechartbanner";
import Profile from "@/components/layout/profile";
import Head from "next/head";
import Explore from "./explore";
import Universe from "./universe";

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

export default function Automotive(props) {

  const [smart, setSmart] = useState(1); 
  const LineChartData = {
    labels: ["Jan,23", "Feb,23", "Mar,23", "Apr,23", "May,23", "Jun,23"],
    values: ["10000", "22000", "25000", "35000", "15000", "29000"],
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
      {/* <Head>
        <title>Albatha Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon.svg" />
      </Head> */}
      <div className={`${myInter.className} landingBgColor`}>
        <div className="automative-wrap">
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
            <div className="text-white/60 text-[16px] xl:text-[0.833vw] leading-none" data-aos="fade-right" data-aos-duration="1000">
            <Link href={""} onClick={()=>props.setDetail(0)} >
                <i className="alb-arrow-left-line mr-[10px] text-[14px] xl:text-[0.729vw]"></i>
                Back to hall of data
              </Link>
            </div>
            <div className={myTeko.className}>
              <div className="text-[57px] xl:text-[2.969vw] text-white font-medium">
                Albatha portfolio
              </div>
            </div>
            <div className="w-full max-w-[681px] xl:max-w-[35.469vw] space-y-[20px] xl:space-y-[1.042vw]" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600"
     data-aos-offset="0"> 
              <div className="grid grid-cols-12 gap-[20px] xl:gap-[1.042vw]">
                <div className="col-span-7">
                  <div className="space-y-[20px] xl:space-y-[1.042vw]">
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
                      <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw]  w-full bannerLogoWrap">
                        <div className="flex justify-center items-center h-full">
                          <div className="bannerLogoAutomotive">
                            <Image
                              src={"/assets/images/banner_logo_automotive.png"}
                              className="mx-auto"
                              width={"177"}
                              height={"46"}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] BannerHeadcount relative overflow-hidden">
                      <div className="text-white text-[16px] xl:text-[0.833vw] font-semibold">
                        Number of vehicles sold
                      </div>
                      <div className="chartHover">
                        <div className="w-full h-[152px] xl:h-[7.917vw]">
                          <LineChartBanner
                            legend={{
                              show: false,
                              bottom: 5,
                              itemWidth: 10,
                              itemHeight: 10,
                              width: "100%",
                              textStyle: {
                                fontSize: 10,
                                color: "#6C768B",
                              },
                            }}
                            labelShow={false}
                            grid={{
                              top: "15",
                              bottom: "20",
                              left: "45",
                              right: "15",
                            }}
                            data={LineChartData}
                            lineType={"line"}
                            fillcolor={["#EBB686"]}
                            borderColor={"#FFF"}
                            lineColor={["#FFA600"]}
                            yAxisNameGap={"33"}
                            yAxisNamePosition={"middle"}
                          />
                        </div>
                      </div>

                      <div className="absolute top-2/4 left-0 right-0 -translate-y-2/4">
                        <div className="hoverDiv3">
                          <div className="text-white max-w-[330px] xl:max-w-[17.188vw] mx-auto">
                            <div className="flex items-center gap-[27px] xl:gap-[27px]">
                              <div className="col">
                                <div className="block mb-[10px] xl:mb-[0.521vw]">
                                  <Link
                                    href={""}
                                    className="inline-block bg-[#DD7539] rounded-[6px] xl:rounded-[0.313vw] py-[4px] 2xl:py-[0.208vw] px-[8px] xl:px-[0.417vw] text-[12px] xl:text-[0.625vw] font-semibold uppercase"
                                  >
                                    <i className="alb-lamp mr-[5px] xl:mr-[0.260vw]"></i>
                                    hexa ai insight
                                  </Link>
                                </div>
                                <div className="text-[14px] xl:text-[0.729vw]">
                                  The vehicle most sold was BMW M3 in the color
                                  Gray.
                                </div>
                              </div>
                              <div className="col">
                                <Image
                                  src={"/assets/images/car.jpg"}
                                  className="min-w-[125px] xl:min-w-[6.510vw] min-h-[88px] xl:min-h-[4.583vw] max-w-[125px] xl:max-w-[6.510vw] rounded-[8px] xl:rounded-[0.417vw] object-cover"
                                  width={133}
                                  height={88}
                                  alt=""
                                />
                              </div>
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
                    <div className="companiesHover">
                      {/* row */}
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap border-b border-b-[rgba(255,255,255,0.05)] mb-[35px] xl:mb-[1.223vw] pb-1">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          AGMC &#40;Arabian Gulf Mechanical Centre&#41;	
                          </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.1)] p-[6px] xl:p-[0.513vw] rounded-[6px] xl:rounded-[0.313vw] w-full max-w-[70px] xl:max-w-[3.646vw] min-h-[46px] xl:min-h-[2.396vw] flex items-center justify-center hoverImg">
                          <Image
                            src={"assets/images/agmc_image.svg"}
                            width={"62"}
                            height={"38"}
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
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap border-b border-b-[rgba(255,255,255,0.05)] mb-[35px] xl:mb-[1.223vw] pb-1">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          BMW Albatha Finance PSC
                          </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.1)] p-[6px] xl:p-[0.313vw] rounded-[6px] xl:rounded-[0.313vw] w-full max-w-[70px] xl:max-w-[3.646vw] min-h-[46px] xl:min-h-[2.396vw] flex items-center justify-center hoverImg">
                          <Image
                            src={"assets/images/bmwlogo.svg"}
                            width={"62"}
                            height={"38"}
                            className="w-[26px] h-[26px] xl:w-[1.354vw] xl:h-[1.354vw]"
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
                      <div className="flex items-center justify-between gap-[8px] xl:gap-[0.417vw] rowWrap border-b border-b-[rgba(255,255,255,0.05)] mb-[35px] xl:mb-[1.223vw] pb-1">
                        <div className="col hoverText1">
                          <div className="text-[#FFFFFF]/70 text-[12px] xl:text-[0.625vw] leading-[1.3]">
                          BMW Albatha Leasing
                          </div>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.1)] p-[6px] xl:p-[0.313vw] rounded-[6px] xl:rounded-[0.313vw] w-full max-w-[70px] xl:max-w-[3.646vw] min-h-[46px] xl:min-h-[2.396vw] flex items-center justify-center hoverImg">
                          <Image
                            src={"assets/images/bmwlogo.svg"}
                            width={"62"}
                            height={"38"}
                            className="w-[26px] h-[26px] xl:w-[1.354vw] xl:h-[1.354vw]"
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
                    </div>
                  </div>
                </div>
              </div>
              {/* row */}
              <div className="bg-[rgba(12,17,22,0.20)] hover:bg-[rgba(12,17,22,0.55)] transition ease-in-out delay-150 backdrop-blur-[10px] xl:backdrop-blur-[0.521vw] border border-[rgba(75,165,183,0.50)] rounded-[16px] xl:rounded-[0.833vw] p-[14px] xl:p-[0.729vw] h-full relative trendAnalysis overflow-hidden">
                <div className="overflow-hidden">
                  <div className="text-white text-[16px] xl:text-[0.833vw] font-semibold mb-[34px] xl:mb-[1.771vw]">
                    Breakdown by Category
                  </div>
                  <div className="chartHover">
                    <div className="grid grid-cols-2 gap-[11px] xl:gap-[0.573vw]">
                      <div className="grid grid-cols-12">
                        <div className="col-span-3">
                          <div className="bg-[#FFFFFF33] p-[5px] rounded-[4px] text-white text-[10px] xl:text-[0.521vw] font-semibold mb-1">
                            Sales: $100M
                          </div>
                          <div className="bg-[#FFFFFF33] p-[5px] rounded-[4px] text-white text-[10px] xl:text-[0.521vw] font-semibold">
                            CY, 2022
                          </div>
                        </div>
                        <div className="col-span-9">
                          <div className="w-full h-[194px] xl:h-[10.104vw] border-r border-r-[#E5E7EB]">
                            <DonatChart />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-3">
                          <div className="bg-[#FFFFFF33] p-[5px] rounded-[4px] text-white text-[10px] xl:text-[0.521vw] font-semibold mb-1">
                            Sales: $100M
                          </div>
                          <div className="bg-[#FFFFFF33] p-[5px] rounded-[4px] text-white text-[10px] xl:text-[0.521vw] font-semibold">
                            CY, 2022
                          </div>
                        </div>
                        <div className="col-span-9">
                          <div className="w-full h-[194px] xl:h-[10.104vw]">
                            <DonatChart />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-2/4 left-0 right-0 -translate-y-2/4">
                    <div className="hoverDiv1">
                      <div className="text-center text-white max-w-[372px] xl:max-w-[19.375vw] mx-auto">
                        <div className="block mb-[10px] xl:mb-[0.521vw]">
                          <Link
                            href={""}
                            className="inline-block bg-[#DD7539] rounded-[6px] xl:rounded-[0.313vw] py-[4px] 3xl:py-[0.208vw] px-[8px] xl:px-[0.417vw] text-[12px] xl:text-[0.625vw] font-semibold uppercase"
                          >
                            <i className="alb-lamp mr-[5px] xl:mr-[0.260vw]"></i>
                            hexa ai insight
                          </Link>
                        </div>
                        <div className="text-[14px] xl:text-[0.729vw]">
                          Figma ipsum component variant main layer. Project
                          distribute arrow follower rotate line component bold.
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
                           months. The main activity was the on-site sales &#40;8500&#41;	
                           followed by the online sales &#40;1500&#41;.
                         </div>
                         <div className="bg-[rgba(255,255,255,0.1)] p-[8px] xl:p-[0.417vw] rounded-[8px] xl:rounded-[0.417vw] mt-[14px] xl:mt-[0.729vw]">
                           <div className="text-[#4BA5B7] text-[12px] xl:text-[0.625vw] font-medium uppercase">
                             <i className="alb-lamp mr-[6px] xl:mr-[0.260vw]"></i>
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
                             <i className="alb-lamp mr-[6px] xl:mr-[0.260vw]"></i>
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
                             <i className="alb-lamp mr-[6px] xl:mr-[0.260vw]"></i>
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
