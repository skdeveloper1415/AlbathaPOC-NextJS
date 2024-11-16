import React, { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Inter } from '@next/font/google';
import { Menubar } from 'primereact/menubar';
import { Menu } from 'primereact/menu';
import Profile from "../layout/profile";
import { Nunito } from '@next/font/google';
import { useRouter } from 'next/router';

const myNunito = Nunito({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'

})

export default function Top({ ...pageProps }) {
  const menu = useRef(null);
  const router = useRouter()

  
  return (
    <div className={myNunito}>
    <div className='fixed w-full z-20'>
      <div className='bg-white py-[0.500vw] relative z-20' data-aos="fade-down" data-aos-duration="800">
        <div className='px-[15px] xl:px-[2.083vw] menu-wrap'>
          <div className='grid grid-cols-12 items-center'>
            <div className='col-span-3 xl:col-span-4'>
              <div className='flex items-center space-x-[30px] xl:space-x-[3.385vw]'>
                <div className='w-full lg:w-auto' id='logo'>
                  <Link href={"/"}><Image src={"/assets/images/landing-logo-white.svg"} width={"360"} height={"70"} className='max-w-[180px] md:max-w-[250px] xl:max-w-[18.750vw] light' alt="Logo" /></Link>
                </div>
              </div>
            </div>
            <div className='col-span-9 xl:col-span-8'>
              <div className='flex items-center justify-end xl:space-x-[2.083vw]'>
                <div>
                  <div className='flex items-center space-x-[0.521vw]'>
                    <div className='flex items-center space-x-[10px] xl:space-x-[1.354vw]'>
                      <div>
                        <div x-data="{ open: false }" className="">
                          <div className="relative" x-data="{ open: false }">
                            <Profile />
                          </div>
                        </div>

                      </div>
                      <div className='relative'>
                        <Link href={""} className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px]
                   xl:w-[3.110vw] xl:h-[3.110vw] rounded-full bg-[#525252]"><i className='NU-cart text-[#fff] text-[18px] xl:text-[0.938vw]'></i></Link>
                        <div className='absolute -right-[10px] -top-[10px] md:-right-[6px] md:-top-[6px] xl:-right-[0.313vw] xl:-top-[0.313vw]'>
                          <div className='text-[11px] xl:text-[0.573vw] text-white bg-[#A83B3B] rounded-full w-[20px] h-[20px] md:w-[24px] md:h-[24px] xl:w-[1.250vw] xl:h-[1.250vw] flex items-center justify-center'>3</div>
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
    </div>
  )

}