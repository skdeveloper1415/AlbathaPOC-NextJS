import React, { useEffect, useState } from "react";
import { Inter } from '@next/font/google';
import Image from "next/image";
import Link from "next/link";
const myinter = Inter({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap'
})
// relative group cursor-default

export default function LegendComponent() {
    return (
        <div className="z-[4] opacity-0 group-hover:opacity-100 duration-300 absolute bottom-0 right-[-12vw] bg-[#F5F6F7] rounded-[16px] xl:rounded-[0.833vw] p-[16px] xl:p-[0.833vw] w-[11.51vw]">
            <div className="text-[#374151] text-[16px] xl:text-[0.833vw] font-semibold mb-[8px]">Health Care</div>
            <div className="space-y-[8px]">
                <div className="flex items-center justify-between gap-1 ">
                    <div className="flex items-center gap-[8px]">
                        <div className="w-[17px] h-[17px] xl:w-[0.885vw] xl:h-[0.885vw] bg-[#4BA5B7] rounded-full"></div>
                        <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">
                            MTD - LY
                        </div>
                    </div>
                    <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-semibold">
                        5.3M
                    </div>
                </div>
                <div className="flex items-center justify-between gap-1 border-t border-t-[#E5E7EB] pt-[8px]">
                    <div className="flex items-center gap-[8px]">
                        <div className="w-[17px] h-[17px] xl:w-[0.885vw] xl:h-[0.885vw] bg-[#DD7539] rounded-full"></div>
                        <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">
                            MTD - LY
                        </div>
                    </div>
                    <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-semibold">
                        5M
                    </div>
                </div>
                <div className="flex items-center justify-between gap-1 border-t border-t-[#E5E7EB] pt-[8px]">
                    <div className="flex items-center gap-[8px]">
                        <div className="w-[17px] h-[17px] xl:w-[0.885vw] xl:h-[0.885vw] bg-[#768FB5] rounded-full"></div>
                        <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-medium">
                            LY
                        </div>
                    </div>
                    <div className="text-[#4B586E] text-[14px] xl:text-[0.729vw] font-semibold">
                        5.3M
                    </div>
                </div>
            </div>
        </div>
    );
}
