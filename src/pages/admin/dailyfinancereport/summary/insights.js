import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollPanel } from 'primereact/scrollpanel';

const Insights = () => {

  return (
    <>
    <ScrollPanel style={{ width: '100%', height: '90vh' }}>
    <div className="bg-white xl:py-[0.833vw] py-4 xl:px-[0.625vw] px-3 xl:rounded-[0.417vw] rounded-lg h-[99%]">
      <div className="text-[#374151] xl:text-[0.833vw] text-base font-normal xl:leading-[1.042vw] leading-5">Insights</div>
      <div className="xl:mt-[1.667vw] mt-[30px] xl:space-y-[1.250vw] space-y-[22px]">
        {/**col**/}
        <div className="bg-[#F5F6F7] xl:rounded-[0.833vw] rounded-2xl xl:pt-[1.042vw] pt-[18px] xl:px-[0.833vw] px-3.5 xl:pb-[0.833vw] pb-3.5 relative">
          <div className='absolute -top-[15px] xl:-top-[0.729vw] inset-x-[45px] xl:inset-x-[2.346vw]'>
            <div className="bg-[#294450] xl:px-[1.042vw] px-5 xl:py-[0.313vw] py-2.5 rounded-full flex items-center justify-center xl:gap-[0.417vw] gap-2">
              <span className="text-[#F5F6F7] xl:text-[0.625vw] text-[10px] font-semibold">Insight 1</span>
              <i className="alb-lamp-info text-[#EBB686] xl:text-[0.729vw] text-[10px]"></i>
            </div>
          </div>
          <div className="text-[#294450] xl:text-[0.729vw] text-[12px] font-semibold">Lorem ipsum dolor sit amet</div>
          <div className="text-[#4B586E] xl:text-[0.625vw] text-[10px] font-normal opacity-[0.67]">Lorem ipsum dolor sit amet consectetur. Faucibus dui elit sit ultrices. </div>
        </div>
        {/**col**/}
        <div className="bg-[#F5F6F7] xl:rounded-[0.833vw] rounded-2xl xl:pt-[1.042vw] pt-[18px] xl:px-[0.833vw] px-3.5 xl:pb-[0.833vw] pb-3.5 relative">
          <div className='absolute -top-[15px] xl:-top-[0.729vw] inset-x-[45px] xl:inset-x-[2.346vw]'>
            <div className="bg-[#294450] xl:px-[1.042vw] px-5 xl:py-[0.313vw] py-2.5 rounded-full flex items-center justify-center xl:gap-[0.417vw] gap-2">
              <span className="text-[#F5F6F7] xl:text-[0.625vw] text-[10px] font-semibold">Insight 2</span>
              <i className="alb-lamp-info text-[#EBB686] xl:text-[0.729vw] text-[10px]"></i>
            </div>
          </div>
          <div className="text-[#294450] xl:text-[0.729vw] text-[12px] font-semibold">Lorem ipsum dolor sit amet</div>
          <div className="text-[#4B586E] xl:text-[0.625vw] text-[10px] font-normal opacity-[0.67]">Lorem ipsum dolor sit amet consectetur. Faucibus dui elit sit ultrices. </div>
        </div>
        {/**col**/}
        <div className="bg-[#F5F6F7] xl:rounded-[0.833vw] rounded-2xl xl:pt-[1.042vw] pt-[18px] xl:px-[0.833vw] px-3.5 xl:pb-[0.833vw] pb-3.5 relative">
          <div className='absolute -top-[15px] xl:-top-[0.729vw] inset-x-[45px] xl:inset-x-[2.346vw]'>
            <div className="bg-[#294450] xl:px-[1.042vw] px-5 xl:py-[0.313vw] py-2.5 rounded-full flex items-center justify-center xl:gap-[0.417vw] gap-2">
              <span className="text-[#F5F6F7] xl:text-[0.625vw] text-[10px] font-semibold">Insight 3</span>
              <i className="alb-lamp-info text-[#EBB686] xl:text-[0.729vw] text-[10px]"></i>
            </div>
          </div>
          <div className="text-[#294450] xl:text-[0.729vw] text-[12px] font-semibold">Lorem ipsum dolor sit amet</div>
          <div className="text-[#4B586E] xl:text-[0.625vw] text-[10px] font-normal opacity-[0.67]">Lorem ipsum dolor sit amet consectetur. Faucibus dui elit sit ultrices. </div>
        </div>
        {/**col**/}
        <div className="bg-[#F5F6F7] xl:rounded-[0.833vw] rounded-2xl xl:pt-[1.042vw] pt-[18px] xl:px-[0.833vw] px-3.5 xl:pb-[0.833vw] pb-3.5 relative">
          <div className='absolute -top-[15px] xl:-top-[0.729vw] inset-x-[45px] xl:inset-x-[2.346vw]'>
            <div className="bg-[#294450] xl:px-[1.042vw] px-5 xl:py-[0.313vw] py-2.5 rounded-full flex items-center justify-center xl:gap-[0.417vw] gap-2">
              <span className="text-[#F5F6F7] xl:text-[0.625vw] text-[10px] font-semibold">Insight 4</span>
              <i className="alb-lamp-info text-[#EBB686] xl:text-[0.729vw] text-[10px]"></i>
            </div>
          </div>
          <div className="text-[#294450] xl:text-[0.729vw] text-[12px] font-semibold">Lorem ipsum dolor sit amet</div>
          <div className="text-[#4B586E] xl:text-[0.625vw] text-[10px] font-normal opacity-[0.67]">Lorem ipsum dolor sit amet consectetur. Faucibus dui elit sit ultrices. </div>
        </div>
        {/**col**/}
        <div className="bg-[#F5F6F7] xl:rounded-[0.833vw] rounded-2xl xl:pt-[1.042vw] pt-[18px] xl:px-[0.833vw] px-3.5 xl:pb-[0.833vw] pb-3.5 relative">
          <div className='absolute -top-[15px] xl:-top-[0.729vw] inset-x-[45px] xl:inset-x-[2.346vw]'>
            <div className="bg-[#294450] xl:px-[1.042vw] px-5 xl:py-[0.313vw] py-2.5 rounded-full flex items-center justify-center xl:gap-[0.417vw] gap-2">
              <span className="text-[#F5F6F7] xl:text-[0.625vw] text-[10px] font-semibold">Insight 5</span>
              <i className="alb-lamp-info text-[#EBB686] xl:text-[0.729vw] text-[10px]"></i>
            </div>
          </div>
          <div className="text-[#294450] xl:text-[0.729vw] text-[12px] font-semibold">Lorem ipsum dolor sit amet</div>
          <div className="text-[#4B586E] xl:text-[0.625vw] text-[10px] font-normal opacity-[0.67]">Lorem ipsum dolor sit amet consectetur. Faucibus dui elit sit ultrices. </div>
        </div>
      </div>
    </div>
    </ScrollPanel>
    </>
  );
};
export default Insights;
