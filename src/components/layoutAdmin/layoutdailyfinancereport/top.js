import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { OverlayPanel } from 'primereact/overlaypanel';
import { InputText } from "primereact/inputtext";
import { Gelasio } from "@next/font/google";
import { Inter } from "@next/font/google";

const myGelasio = Gelasio({
    weight: ['400', '500', '600', '700', ],
    subsets: ['latin'],
    display: "swap",
})

const myInter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
  });

export default function Top({ ...pageProps }) {
    const notificatio = useRef(null);

    return (
        <header className={`${myInter.className} sticky top-0 z-[3]`}>
            <div className="bg-white flex items-center justify-between pt-[20px] xl:pt-[1.04vw] pb-[20px] xl:pb-[1.04vw] pr-4 xl:pr-[1.667vw] pl-[118px] xl:pl-[128px] dark:bg-[#191A1E]">
                <div className="">
                    <div className="flex items-center gap-2 text-[12px] xl:text-[0.625vw] text-[#9CA1AB] mb-1 xl:mb-[0.208vw]">
                        <Link href={"/"}>Home</Link>
                        <i className="alb-arrow-down-bold text-[6px] xl:text-[0.375vw] rotate-[-90deg]"></i>
                        <div className="text-[#374151]">{pageProps.pageTitle}</div>
                    </div>
                    <div className="text-[#374151] xl:text-[1.250vw] text-[24px] leading-7 dark:text-[#fff] font-semibold">{pageProps.pageTitle}</div>
                </div>
                <div className="flex items-center gap-2">
                <div className="p-input-icon-right xl:h-[2.500vw] h-[40px] w-full md:w-[300px] xl:w-[17.708vw]">
                <i className="alb-admin-search xl:text-[0.938vw]" style={{color:'#9CA1AB'}} />
                <InputText placeholder="Quick Search" className="xl:h-[2.500vw] h-[40px] w-full md:w-[300px] xl:w-[17.708vw] placeholder:text-[#9CA1AB] placeholder:xl:text-[0.833vw] placeholder:text-sm placeholder:font-normal  custm_search" />
                </div>
                    {/* <div className="block relative">
                        <input 
                            type="text" 
                            className="mt-1 block w-[240px] xl:w-[340px] h-[50px] rounded-full border border-[#BECDE3] pl-[20px] pr-[44px] outline-none text-[16px] text-[#666] header-search" 
                            placeholder="Quick Search" 
                        />
                        <i className="alb-admin-search h-6 w-6 text-gray-400 absolute inset-y-0 right-[20px] my-auto text-2xl cursor-pointer" ></i>
                    </div> */}
                    <Link href={''} className="xl:p-[0.625vw]" title="Message"><Image src={'/assets/images/svg/shopping-cart.svg'} width={24} height={28} alt="Message" /></Link>
                    <Link href={''} className="xl:p-[0.625vw]" title="Message"><Image src={'/assets/images/svg/messages.svg'} width={24} height={28} alt="Message" /></Link>
                    <Link href={''} className="xl:p-[0.625vw]" onClick={(e) => notificatio.current.toggle(e)} title="Notification"><Image src={'/assets/images/svg/notificatio-bell.svg'} width={24} height={28} alt="Notification" /></Link>
                </div>
            </div>

            <OverlayPanel ref={notificatio} className="notificatio_popup">
                <div className=''>
                    <div className="w-full min-w-[418px] origin-top-right bg-white dark:bg-[#24262D] box-shadow">
                        <div className="flex items-center justify-between">
                            <div className="text-[#293141] dark:text-[#FFFFFF] text-sm lg:text-md 2xl:text-lg font-bold">Notifications</div>
                        </div>
                        <SimpleBar className="pr-4" style={{ maxHeight: '300px', }}>
                            <div className="mt-5 divide-y divide-solid divide-[#D8D8D8] dark:divide-[#2A2C32] list-space" data-simplebar>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">New Order has been placed</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Order #00000</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-[#D73F09]"></div>
                                    </div>
                                </div>
                                <div className="flex items-start py-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <div className="text-sm text-[#293141] dark:text-[#ffff] font-bold">End Customer has requested for discount on</div>
                                            <div className="text-[#293141] dark:text-[#8A93A6] text-sm">Product A</div>
                                            <div className="text-[#4C525F] dark:text-[#8A93A6] text-sm">11:15 am, 14th Feb.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SimpleBar>
                    </div>
                </div>
            </OverlayPanel>


        </header>
    );
}
