import { Menu, Transition } from "@headlessui/react";
import { Avatar } from "@mui/material";
import Link from 'next/link';
import Image from 'next/image';
import React, { Fragment } from "react";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Profile() {


    
    
    return (
        
       
      
       <div>
            <span className="flex flex-wrap flex-grow">
                {/* <div className="mr-3"> */}


                {/* </div> */}
                <Menu as="div" className="relative inline-block z-10">
                    <div className="flex items-center px-2">
                        <Menu.Button className='flex items-center'>
                            {/* <Avatar  src={profilePic} /> */}
                            <div className="relative    ">
                            <div className="flex items-center space-x-3">
                            <div className="relative">
                            <Image src={"/assets/images/svg/profile.svg"} width={48} height={48} className="rounded-full" alt="" />
                            <div className="absolute right-0 -bottom-1"><Image src={"/assets/images/svg/clip_path.svg"} width={23} height={23} className="rounded-full" alt="" /></div>
                            </div>
                            <div className="text-start hidden xl:inline-block">
                            <div className='text-[#fff]  text-[16px] xl:text-[0.833vw] font-semibold'>Jhon Nassir Jr.</div>
                            <div className='text-[#fff]  dark:text-[#C6CBD2] font-light text-[14px] xl:text-[0.800vw]'>Executive</div>
                            </div>
                            </div>
                            </div>
                            <span className="text-[rgba(76,82,95,0.6);] pl-2 xl:pl-4"><i className="alb-arrow-down-sharp text-[#fff]  text-[8px]"></i></span>


                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}

                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-50 w-full min-w-[250px]  origin-top-right bg-[#0a0a0a] rounded-[5px] xl:rounded-[5px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] divide-y divide-solid divide-[#333]">
                            <div className="px-4 pt-5 pb-3 xl:px-[0.833vw] xl:py-[0.833vw]">
                                <div className="flex items-center mb-4 xl:mb-[0.417vw] space-x-3">
                                    
                                    <div className="text-start">
                                    <div className="text-[#fff] opacity-[0.6] text-sm xl:text-[0.729vw]">Admin Account </div>
                                        <div className="text-md xl:text-[0.938vw] text-[#f2f2f2] font-semibold">Jhon Nassir Jr.</div>
                                     
                                    </div>
                                    
                                </div>
                                <div className="flex items-center gap-3 py-1 xl:py-[0.521vw]">
                                        <Link href={''} className="text-[#f2f2f2] text-[14px] xl:text-[0.833vw] font-normal ">
                                            <i className="mr-3 red-tsg-user text-[#f2f2f2]"></i>  View profile</Link>
                                    </div>
                                    <div className="flex gap-3 items-center text-[#f2f2f2] font-normal text-[14px] py-1 xl:py-[0.521vw]">
                                        <Link href={''} className="text-[#f2f2f2] text-[14px] xl:text-[0.833vw] font-normal ">
                                        <i className="mr-3 red-tsg-user text-[#f2f2f2]"></i> Change Password</Link>
                                    </div>
                                    
                               
                                
                            </div>
                           
                            <div className="px-4 py-4 ">
                            <Link href={'/'} className="text-[#f2f2f2] text-[14px] xl:text-[0.833vw] font-normal "><i className="mr-3 red-tsg-logout text-[#f2f2f2]"></i>Log out</Link>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </span>
        </div>
    


    )

}