import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/router';
import { reactLocalStorage } from 'reactjs-localstorage';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useTheme } from 'next-themes';
// import { Link } from 'react-router-dom';


export default function Left() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const router = useRouter()
  async function logOut() {
    reactLocalStorage.clear();
    router.push('/')
  }

  return (
    <>
      <div className={` fixed top-0 left-0 z-20 max-md:h-full left-menu-sec`}>
        <div className="w-[96px] hover:w-[328px] bg-white left-menu-h py-5 px-5 border-r border-[#E5E7EB] dark:border-[#191A1E] overflow-hidden max-md:h-full left-menu-mobile dark:bg-[#191A1E]">
          <div className="relative h-full">
            <div className="logo_icon flex justify-center" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
              <Image src="/assets/images/left-menu-icons/logo-icon.svg" width={32} height={32} alt='logo icon' />
            </div>
            <div className="logo mb-1 min-w-[230px] ml-4"><Link href='/'><Image src="/assets/images/left-menu-icons/logo.svg" width={223} height={32} alt='logo icon' /></Link></div>


            <div className="lock_icon mt-4 mb-4" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
              <i className='alb-unloack text-[16px] dark:text-[#41414B] text-[#E5E7EB] relative top-[0] dark:bg-[#191A1E] mx-auto w-[26px] h-[26px] flex justify-center items-center bg-[#F5F5F5] rounded-full' ></i>
            </div>
            <div className="logo min-w-[150px] mb-4 border-b-2 border-[#E5E7EB] dark:border-[#2A2C32] text-right ">
              <Link href='' className=''>
                <i className='alb-unloack text-[16px] dark:text-[#41414B] text-[#9CA3AF] relative top-[10px] bg-[#fff] dark:bg-[#191A1E]' ></i>
              </Link>
            </div>



            <SimpleBar style={{ maxHeight: "70%", height: "calc(100% - 415px)" }}>
              <div data-simplebar>
                <div className="visible lg:hidden"></div>
                <ul className="left-menu h-full">
                  <li className={`${router.pathname == "/admin/dailyfinancereport/summary" ? 'active' : ''} ico-summary`}>
                    <Link href='/admin/dailyfinancereport/summary'>
                      <span>Summary</span>
                    </Link>
                  </li>
                  <li className={`${router.pathname == "/admin/dailyfinancereport/reports" ? 'active' : ''} ico-reports`}>
                    <Link href='/admin/dailyfinancereport/reports'>
                      <span>Reports</span>
                    </Link>
                  </li>
                  <li className={`${router.pathname == "/admin/dailyfinancereport/drilldown" ? 'active' : ''} ico-drilldownanalysis`}>
                    <Link href='/admin/dailyfinancereport/drilldown'>
                      <span>Drilldown Analysis</span>
                    </Link>
                  </li>
                  <li className={`${router.pathname == "/admin/dailyfinancereport/managealerts" ? 'active' : ''} ico-manage-alerts`}>
                    <Link href='/admin/dailyfinancereport/managealerts'>
                      <span>Manage Alerts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </SimpleBar>
            <div className="absolute left-0 right-0 bottom-0">
              <ul className="left-menu hoverNone">
                <li className="ico-settings"><Link href=''><span>Settings</span></Link></li>
                <li className='ico-dark'>
                  <Link href="">
                    <span onClick={() => setTheme("light")}>Light Theme</span>
                  </Link>
                  {/* <Link href=""> {currentTheme === "dark" ?
                    <span onClick={() => setTheme("light")}>Dark Theme</span>
                    :
                    <span onClick={() => setTheme("dark")}>Light Theme</span>} </Link> */}
                </li>
                <li className="support mt-[12px] xl:mt-[0.625vw]"><Link href='' className="supportBg"><span>Support Tickets</span></Link></li>
                <li className="userProfile relative mt-[24px] xl:mt-[1.250vw] -ml-[3px]">
                  <div className="flex items-center">
                    <div className="userPic">
                      <Image alt="profile" src="/assets/images/left-menu-icons/profile.svg" width="48" height="48" style={{color: 'transparent'}} />
                    </div>
                    <div>
                      <Link href='/summary'>
                        <span className="text-[#4C525F] text-[16px] xl:text-[0.833vw] font-semibold block"> Jese Leos </span>
                        <span className="text-[#6B7280] text-[14px] xl:text-[0.729vw] block"> Joined in January 2024 </span>
                      </Link>
                    </div>
                    <Link href='/summary'>
                      <i className="alb-three-dots-square"></i>
                    </Link>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}