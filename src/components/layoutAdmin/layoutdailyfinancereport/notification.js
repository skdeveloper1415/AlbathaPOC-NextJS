import { Menu, Transition } from "@headlessui/react";
import Link from 'next/link';
import React, { Fragment } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export default function Notification() {


    return (


        <Menu as="div" className="">
                <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                     <div className='bg-[#F2F4F7] flex items-center justify-center w-12 h-12 rounded-full'><i className='redingon-portfolio-notification text-base xl:text-[0.833vw] text-[#667085]'></i></div>
                     <div className='absolute -top-[4%] -right-[15%] bg-[#029046] rounded-full text-xs text-white w-6 h-6 flex items-center justify-center'>3</div>
                </Menu.Button>

            {/* <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 w-full min-w-[418px] mt-3 origin-top-right bg-white rounded-[10px] xl:rounded-[20px] box-shadow">
                    <div className="p-8">
                        <div className="flex items-center justify-between">
                            <div className="text-[#293141] text-sm lg:text-md 2xl:text-lg font-bold">Notifications</div>
                        </div>
                        <SimpleBar style={{ maxHeight: '300px', }}>
                        <div className="mt-8 divide-y divide-solid divide-[#D8D8D8] list-space" data-simplebar>
                            <div className="flex items-start space-x-2">
                                <div className="w-[24px]"><i className="cloud-shopping-bag text-[#019049] text-2xl"></i></div>
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <div className="text-sm text-[#293141] font-bold">New Order has been placed</div>
                                        <div className="text-[#293141] text-sm">Order #00000</div>
                                        <div className="text-[#4C525F] text-sm">11:15 am, 14th Feb.</div>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-[#FDB022]"></div>
                                </div>
                            </div>
                        </div>
                        </SimpleBar>
                    </div>

                </Menu.Items>
            </Transition> */}
        </Menu>




    )

}