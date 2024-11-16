import { Menu, Transition } from "@headlessui/react";
import { Avatar } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
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
            <Menu.Button className="flex items-center">
              {/* <Avatar  src={profilePic} /> */}
              <div className="relative py-2">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={"/assets/images/profile.png"}
                      width={48}
                      height={48}
                      className="rounded-full w-12 h-12"
                      alt=""
                    />
                  </div>
                  <div className="text-start hidden md:inline-block">
                    <div className="text-[#222222] text-[14px] xl:text-[0.729vw] font-semibold">
                    David Williams
                    </div>
                    <div className="text-[#555555] text-[14px] xl:text-[0.729vw]">
                    Welcome,
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[rgba(76,82,95,0.6);] pl-2 xl:pl-4">
                <i className="redingon-portfolio-arrow-open-down text-[#222222] text-[14px]"></i>
              </span>
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
            <Menu.Items className="absolute right-0 z-50 w-full min-w-[250px]  origin-top-right bg-white rounded-[5px] xl:rounded-[5px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] divide-y divide-solid divide-[#E4E7EC]">
              <div className="px-4 pt-5 pb-3 xl:px-[0.833vw] xl:py-[0.833vw]">
                <div className="flex items-center mb-4 xl:mb-[0.417vw] space-x-3">
                  <div className="text-start">
                    <div className="text-[#222222] text-sm xl:text-[0.729vw]">
                      Admin Account{" "}
                    </div>
                    <div className="text-md xl:text-[0.938vw] text-[#222222] font-semibold">
                    David Williams
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 py-1 xl:py-[0.521vw]">
                  <Link
                    href={"/profile"}
                    className="text-[#222222] text-[14px] xl:text-[0.833vw] font-normal "
                  >
                    <i className="mr-3 red-tsg-user"></i> View
                    profile
                  </Link>
                </div>
                <div className="flex gap-3 items-center text-[#222222] font-normal text-[14px] py-1 xl:py-[0.521vw]">
                  <Link
                    href={""}
                    className="text-[#222222] text-[14px] xl:text-[0.833vw] font-normal "
                  >
                    <i className="mr-3 red-tsg-user text-[#222222]"></i> Change
                    Password
                  </Link>
                </div>
              </div>

              <div className="px-4 py-4">
                <Link
                  href={""}
                  className="text-[#222222] text-[14px] xl:text-[0.833vw] font-normal "
                >
                  <i className="mr-3 red-tsg-logout"></i>Log out
                </Link>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </span>
    </div>
  );
}
