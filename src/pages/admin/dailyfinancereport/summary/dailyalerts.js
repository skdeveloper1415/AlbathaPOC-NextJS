import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartWrapper from "@/components/chartwrapper";

const DailyAlerts = () => {

  const settings = {
    dots: false,
    infinite: true,
    prevArrow:false,
    initialSlide: 0,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};

  return (
    <>
    <div className="fixed bottom-0 left-0 w-full z-10 border_topgradiant">
    <div className="xl:pl-[7.208vw] pl-[35px] xl:pr-[7.208vw] pr-[35px] w-full bg-white xl:h-[6.146vw] xl:py-[0.625vw] flex items-center xl:gap-[2.885vw] gap-4">
    <div className="text-[#4B586E] xl:text-[0.833vw] font-medium xl:leading-[1.042vw] leading-5 text-right">Daily <br></br>Alerts</div>
    <div className="relative w-full inline-block">
    <Slider {...settings} className="custmsliderbottom">
      {/**col1**/}
      <div className="bg-white xl:rounded-[0.313vw] rounded-md border border-[#E5E7EB] shadow-md xl:py-[0.438vw] py-2 xl:px-[0.583vw] px-3 orange-flag">
      <ChartWrapper
          ExportIcon={true}
          FlagIcon={true}
          titlemini={"UAE"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className="xl:space-y-[0.313vw] space-y-[6px]">
              <div className="flex items-center justify-between">
                <div className="text-[#374151] xl:text-[0.656vw] text-xs font-semibold xl:leading-[0.802vw] leading-4">Sales Variance</div>
                <div className="text-[#4B586E] xl:text-[0.573vw] text-[10px] font-light xl:leading-[0.802vw] leading-4">Period: MTD</div>
              </div>
              <div className="border border-[#E5E7EB] xl:rounded-[0.260vw] rounded xl:py-[0.146vw] py-0.5 xl:px-[0.438vw] px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Threshold</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">8%</div>
                  </div>
                  <div className="text-[#6C768B] xl:text-[0.306vw] text-[6px] font-medium xl:leading-[0.408vw] leading-[7.84] backvs">VS</div>
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Actual</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">10%</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </>
            }
          />
      </div>
      {/**col2**/}
      <div className="bg-white xl:rounded-[0.313vw] rounded-md border border-[#E5E7EB] shadow-md xl:py-[0.438vw] py-2 xl:px-[0.583vw] px-3 yellow-flag">
      <ChartWrapper
          ExportIcon={true}
          FlagIcon={true}
          titlemini={"Qatar"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className="xl:space-y-[0.313vw] space-y-[6px]">
              <div className="flex items-center justify-between">
                <div className="text-[#374151] xl:text-[0.656vw] text-xs font-semibold xl:leading-[0.802vw] leading-4">Sales Variance</div>
                <div className="text-[#4B586E] xl:text-[0.573vw] text-[10px] font-light xl:leading-[0.802vw] leading-4">Period: MTD</div>
              </div>
              <div className="border border-[#E5E7EB] xl:rounded-[0.260vw] rounded xl:py-[0.146vw] py-0.5 xl:px-[0.438vw] px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Threshold</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">8%</div>
                  </div>
                  <div className="text-[#6C768B] xl:text-[0.306vw] text-[6px] font-medium xl:leading-[0.408vw] leading-[7.84] backvs">VS</div>
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Actual</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">10%</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </>
            }
          />
      </div>
      {/**col1**/}
      <div className="bg-white xl:rounded-[0.313vw] rounded-md border border-[#E5E7EB] shadow-md xl:py-[0.438vw] py-2 xl:px-[0.583vw] px-3 orange-flag">
      <ChartWrapper
          ExportIcon={true}
          FlagIcon={true}
          titlemini={"Egypt"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className="xl:space-y-[0.313vw] space-y-[6px]">
              <div className="flex items-center justify-between">
                <div className="text-[#374151] xl:text-[0.656vw] text-xs font-semibold xl:leading-[0.802vw] leading-4">Sales Variance</div>
                <div className="text-[#4B586E] xl:text-[0.573vw] text-[10px] font-light xl:leading-[0.802vw] leading-4">Period: MTD</div>
              </div>
              <div className="border border-[#E5E7EB] xl:rounded-[0.260vw] rounded xl:py-[0.146vw] py-0.5 xl:px-[0.438vw] px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Threshold</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">8%</div>
                  </div>
                  <div className="text-[#6C768B] xl:text-[0.306vw] text-[6px] font-medium xl:leading-[0.408vw] leading-[7.84] backvs">VS</div>
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Actual</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">10%</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </>
            }
          />
      </div>
      {/**col1**/}
      <div className="bg-white xl:rounded-[0.313vw] rounded-md border border-[#E5E7EB] shadow-md xl:py-[0.438vw] py-2 xl:px-[0.583vw] px-3 green-flag">
      <ChartWrapper
          ExportIcon={true}
          FlagIcon={true}
          titlemini={"Saudi Arabia"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className="xl:space-y-[0.313vw] space-y-[6px]">
              <div className="flex items-center justify-between">
                <div className="text-[#374151] xl:text-[0.656vw] text-xs font-semibold xl:leading-[0.802vw] leading-4">Sales Variance</div>
                <div className="text-[#4B586E] xl:text-[0.573vw] text-[10px] font-light xl:leading-[0.802vw] leading-4">Period: MTD</div>
              </div>
              <div className="border border-[#E5E7EB] xl:rounded-[0.260vw] rounded xl:py-[0.146vw] py-0.5 xl:px-[0.438vw] px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Threshold</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">8%</div>
                  </div>
                  <div className="text-[#6C768B] xl:text-[0.306vw] text-[6px] font-medium xl:leading-[0.408vw] leading-[7.84] backvs">VS</div>
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Actual</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">10%</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </>
            }
          />
      </div>
      {/**col1**/}
      <div className="bg-white xl:rounded-[0.313vw] rounded-md border border-[#E5E7EB] shadow-md xl:py-[0.438vw] py-2 xl:px-[0.583vw] px-3 orange-flag">
      <ChartWrapper
          ExportIcon={true}
          FlagIcon={true}
          titlemini={"UAE"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className="xl:space-y-[0.313vw] space-y-[6px]">
              <div className="flex items-center justify-between">
                <div className="text-[#374151] xl:text-[0.656vw] text-xs font-semibold xl:leading-[0.802vw] leading-4">Sales Variance</div>
                <div className="text-[#4B586E] xl:text-[0.573vw] text-[10px] font-light xl:leading-[0.802vw] leading-4">Period: MTD</div>
              </div>
              <div className="border border-[#E5E7EB] xl:rounded-[0.260vw] rounded xl:py-[0.146vw] py-0.5 xl:px-[0.438vw] px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Threshold</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">8%</div>
                  </div>
                  <div className="text-[#6C768B] xl:text-[0.306vw] text-[6px] font-medium xl:leading-[0.408vw] leading-[7.84] backvs">VS</div>
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Actual</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">10%</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </>
            }
          />
      </div>
      {/**col1**/}
      <div className="bg-white xl:rounded-[0.313vw] rounded-md border border-[#E5E7EB] shadow-md xl:py-[0.438vw] py-2 xl:px-[0.583vw] px-3 orange-flag">
      <ChartWrapper
          ExportIcon={true}
          FlagIcon={true}
          titlemini={"UAE"}
            data={
              <>
              <div className="xl:pt-[0.417vw] pt-2">
              <div className="xl:space-y-[0.313vw] space-y-[6px]">
              <div className="flex items-center justify-between">
                <div className="text-[#374151] xl:text-[0.656vw] text-xs font-semibold xl:leading-[0.802vw] leading-4">Sales Variance</div>
                <div className="text-[#4B586E] xl:text-[0.573vw] text-[10px] font-light xl:leading-[0.802vw] leading-4">Period: MTD</div>
              </div>
              <div className="border border-[#E5E7EB] xl:rounded-[0.260vw] rounded xl:py-[0.146vw] py-0.5 xl:px-[0.438vw] px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Threshold</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">8%</div>
                  </div>
                  <div className="text-[#6C768B] xl:text-[0.306vw] text-[6px] font-medium xl:leading-[0.408vw] leading-[7.84] backvs">VS</div>
                  <div>
                    <div className="text-[#9CA1AB] xl:text-[0.510vw] text-[10xp] font-normal xl:leading-[0.656vw] leading-[12.6px]">Actual</div>
                    <div className="text-[#24262D] xl:text-[0.583vw] text-[10px] font-bold xl:leading-[0.729vw] leading-[14px]">10%</div>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </>
            }
          />
      </div>
    </Slider>
    </div>
    </div>
    </div>
    </>
  );
};
export default DailyAlerts;
