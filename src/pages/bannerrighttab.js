import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts'
import { Dropdown } from "primereact/dropdown";

const BannerRightTab = (props) => {

  return (
    <>
    {/**right Side**/}
    <div className="right-side absolute right-0 top-0" data-aos="fade-right" data-aos-easing="ease-in-sine"  data-aos-duration="1600">
            <div className="lg:pt-[2.240vw] relative bannerRight lg:w-[47.266vw] lg:h-[71.134vw]">
                {/* <Image src={''} width={1080.31} height={1065.77} alt="banner-circle" className="w-full lg:h-[71.094vw]" /> */}
            <div className='absolute top-0 lg:top-[8.525vw] right-0 lg:right-[16.100vw]'>
            <div className="flex flex-col items-center justify-end">
                {/**col1**/}
                <div className="lg:mb-[0.840vw] relative right-0 pt-[1.162vw] pb-[0.920vw] px-[0.625vw] rounded-2xl lg:rounded-[0.625vw] transition ease-in-out delay-200 hover:bg-[#4BA5B7] hover:lg:rounded-[0.625vw]" data-aos-anchor-placement="fade-down-right" data-aos-duration="1400">
                    <Link href={''}><Image src={'/assets/images/banner-tab/consumer.svg'} width={155.23} height={53.96} alt="consumer" className="lg:w-[8.085vw]" /></Link>
                </div>
                
                {/**col2**/}
                <div className={`${props.Detail == 1 && 'active'} lg:mb-[1.554vw] relative right-24 lg:right-[6.250vw] pt-[1.273vw] pb-[1.311vw] px-[0.625vw] rounded-2xl lg:rounded-[0.625vw] transition ease-in-out delay-200  hover:bg-[#4BA5B7] hover:lg:rounded-[0.625vw]`} data-aos-anchor-placement="fade-down-right" data-aos-duration="1500">
                <Link href={''} onClick={()=>props.setDetail(1)}><Image src={'/assets/images/banner-tab/retail-home-products.svg'} width={211.49} height={54.74} alt="consumer" className="lg:w-[11.015vw]" /></Link>
                </div>
                {/**col3**/}
                <div className="lg:mb-[2.294vw] relative right-32 lg:right-[7.552vw] pt-[1.166vw] pb-[0.917vw] px-[0.625vw] rounded-2xl lg:rounded-[0.625vw] transition ease-in-out delay-200 hover:bg-[#4BA5B7] hover:lg:rounded-[0.625vw]">
                <Link href={''}><Image src={'/assets/images/banner-tab/healthcare.svg'} width={155.25} height={53.97} alt="consumer" className="lg:w-[8.086vw]" /></Link>
                </div>
                {/**col4**/}
                <div className={`${props.Detail == 2 && 'active'} lg:mb-[2.197vw] relative right-40 lg:right-[8.333vw] pt-[1.032vw] pb-[0.833vw] px-[0.625vw] rounded-2xl lg:rounded-[0.625vw] transition ease-in-out delay-200 hover:bg-[#4BA5B7] hover:lg:rounded-[0.625vw]`}>
                <Link href={''} onClick={()=>props.setDetail(2)}><Image src={'/assets/images/banner-tab/automotive.svg'} width={155.08} height={53.91} alt="consumer" className="lg:w-[8.077vw]" /></Link>
                </div>
                {/**col5**/}
                <div className="lg:mb-[2.414vw] relative right-40 lg:right-[9.115vw] pt-[1.192vw] pb-[0.956vw] px-[0.625vw] rounded-2xl lg:rounded-[0.625vw] transition ease-in-out delay-200 hover:bg-[#4BA5B7] hover:lg:rounded-[0.625vw]" data-aos-anchor-placement="fade-down-right" data-aos-duration="1550">
                <Link href={''}><Image src={'/assets/images/banner-tab/home-personalcare.svg'} width={207.53} height={55.45} alt="consumer" className="lg:w-[10.809vw]" /></Link>
                </div>
                {/**col6**/}
                <div className="lg:mb-[1.226vw] relative right-20 lg:right-[5.469vw] pt-[1.127vw] pb-[0.855vw] px-[0.625vw] rounded-2xl lg:rounded-[0.625vw] transition ease-in-out delay-200 hover:bg-[#4BA5B7] hover:lg:rounded-[0.625vw]" data-aos-anchor-placement="fade-down-right" data-aos-duration="1600">
                <Link href={''}><Image src={'/assets/images/banner-tab/engineering.svg'} width={152.7} height={53.08} alt="consumer" className="lg:w-[7.953vw]" /></Link>
                </div>
                {/**col7**/}
                <div className="lg:mb-[3.206vw] relative -right-5 lg:right-[1.719vw] pt-[1.127vw] pb-[0.859vw] px-[0.625vw] rounded-2xl lg:rounded-[0.625vw] transition ease-in-out delay-200 hover:bg-[#4BA5B7] hover:lg:rounded-[0.625vw]" data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1250">
                <Link href={''}><Image src={'/assets/images/banner-tab/real-estate.svg'} width={155.46} height={54.04} alt="consumer" className="lg:w-[8.097vw]" /></Link>
                </div>
            </div>
            </div>
            </div>
          </div>
          {/**right Side**/}
    </>
  );
};
export default BannerRightTab;
