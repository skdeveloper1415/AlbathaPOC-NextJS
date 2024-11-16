import React, { useEffect, useState } from "react";
import { Inter } from '@next/font/google';
import Image from "next/image";
import Link from "next/link";
const myinter = Inter({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap'
})

export default function ListComponent(props) {
    return (
        <div>
            {
          props.data.map((elm) => {
            return (  
            <div className="xl:p-[0.581vw] p-[15px] list-bg rounded-md shadow-md shadow-[#1018281A] my-2">
                <div className="grid grid-cols-8 gap-4">
                    <div className="col-span-1 place-self-center">
                        <Image
                            src={`${elm.img}`}
                            width={"290"}
                            height={"172"}
                            className="xl:w-full xl:h-[6.406vw] rounded-md "
                            alt="notification"
                        />
                    </div>
                    <div className="col-span-6">
                        <h5 className="text-white text-[18px] sm:text-[16px] lg:text-[20px] xl:text-[1.042vw] font-bold leading-tight mt-1">
                            {elm.title}
                        </h5>

                        <div className="xl:mt-[1.042vw] mt-[20px] font-normal text-[16px] xl:text-[0.833vw] text-[#98A2B3] leading-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>

                        <div className="flex gap-2 xl:mt-[1.042vw] mt-[20px]">
                            <div className="tags xl:text-[0.521vw] text-[10px] xl:px-[0.365vw] px-[8px] xl:py-[0.265vw] py-[8px] text-[#98A2B3]">
                                Finance
                            </div>
                            <div className="tags xl:text-[0.521vw] text-[10px] xl:px-[0.365vw] px-[8px] xl:py-[0.265vw] py-[8px] text-[#98A2B3]">
                                Revenue
                            </div>
                            <div className="tags xl:text-[0.521vw] text-[10px] xl:px-[0.365vw] px-[8px] xl:py-[0.265vw] py-[8px] text-[#98A2B3]">
                                Other ag
                            </div>
                            <div className="xl:text-[0.521vw] text-[10px]  xl:py-[0.265vw] py-[8px] text-[#98A2B3]">
                                Last Update: 2023, Jan 12nd.
                            </div>
                        </div>

                    </div>
                    <div className="col-span-1 place-self-center">
                        <div class="flex justify-center gap-2 ">
                            <Link href={''} alt="" onClick={props.onClick}>
                                <Image src={"/assets/images/eye_icon.svg"} width={"42"} height={"42"} className="mt-2 xl:w-[2.188vw] xl:h-[2.188vw] rounded-md" alt="eye" />
                            </Link>
                            <Link href={''} alt="">
                                <Image src={"/assets/images/link_icon.svg"} width={"42"} height={"42"} className="mt-2 xl:w-[2.188vw] xl:h-[2.188vw] rounded-md" alt="eye" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div> 
            )
            }
          )
          }
        </div>
    );
}
