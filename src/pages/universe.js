import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Inter, Nunito, Open_Sans, Roboto, Teko } from "@next/font/google";
import { InputText } from "primereact/inputtext";
import { Accordion, AccordionTab } from "primereact/accordion";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const myInter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const myNunito = Nunito({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const myOpenSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const myRoboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Universe() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="px-[15px] xl:px-[5.083vw] xl:py-[3.083vw] py-[40px] universe-bg bg-[#0C1116]">
        <div className="flex justify-center">
          <div className="text-center">
            <h3
              className={`${myNunito.className} text-white text-[36px] sm:text-[20px] lg:text-[24px] xl:text-[1.875vw] font-bold leading-8`}
            >
              Get involved on our{" "}
              <span className="text-[#2F6070] pr-[4px]">Universe</span>!
            </h3>
            <div
              className={`${myInter.className} mt-[15px] text-white text-[16px] sm:text-[20px] lg:text-[24px] xl:text-[0.833vw] font-medium leading-6 opacity-[0.7] flex flex-col gap-[8px] xl:gap-[0.427vw]`}
            >
              <span>
                View the latest technological trends from around the globe under
                Latest Trends. Track the upcoming releases under New Releases
                and find answers to your
              </span>
              <span>questions related to the platform under FAQs</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xl:gap-[1.250vw] gap-[20px] xl:mt-[2.954vw] mt-[20px] mb-[20px]">
          <div className="universe-box xl:p-[1.042vw] p-[15px] rounded-lg">
            <div
              className={`${myInter.className}  flex justify-between items-center`}
            >
              <h6 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[1.042vw] font-semibold leading-tight">
                Latest Trends
              </h6>
              <Link
                href=""
                alt=""
                className="small-btn xl:px-[0.775vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.781vw] text-[15px] text-[#fff] rounded-md font-medium"
              >
                See All
              </Link>
            </div>

            <div className="xl:mt-[1.302vw] mt-[20px]">
              <Image
                src={"/assets/images/svg/trend1.svg"}
                width={"560"}
                height={"234"}
                className=""
                alt="trand1"
              />
            </div>
            <div className="xl:mt-[1.302vw] mt-[20px]">
              <h6 className="text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.729vw] font-light">
                OpenAI
              </h6>
              <div
                className={`${myOpenSans.className} xl:my-[0.521vw] my-[10px] text-[#fff] lg:text-[14px] xl:text-[0.938vw] font-semibold`}
              >
                Jasper AI vs. Chat GPT-4: What's the Difference, and Which One
                Is Better?
              </div>
              <div
                className={`${myRoboto.className} text-[#D5D0D0] text-[12px] xl:text-[0.625vw] font-light leading-[1.3]`}
              >
                onversational Artificial Intelligence(AI) technology has become
                a vital tool for businesses and individuals. Two of the most
                popular AI models are Jasper AI vs. Chat GPT-4. One unique
                aspect of these AI tools is that they re trained to simulate
                human-like conversations through machine learning and Natural
                Language Processing (NLP). onversational Artificial
                Intelligence(AI) technology has become a vital tool for
                businesses and individuals. Two of the most popular AI models
                are Jasper AI vs. Chat GPT-4. One unique aspect of these AI
                tools is that they re trained to simulate hum
              </div>
              <div className="xl:mt-[1.302vw] mt-[20px] pb-6 border-b border-[#FFFFFF0D]">
                <Link
                  href=""
                  alt=""
                  className="bg-[#2F6070] border-[#2F6070] shadow-md xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.781vw] text-[15px] text-[#fff] rounded-md font-medium"
                >
                  Open Full Article
                </Link>
              </div>
            </div>

            <div className="small-box xl:p-[0.781vw] p-[15px] rounded-lg xl:mt-[1.154vw] mt-[20px]">
              <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 xl:gap-[0.950vw] gap-[20px] ">
                <div className="col-span-5">
                  <Image
                    src={"/assets/images/svg/trend2.svg"}
                    width={"560"}
                    height={"118"}
                    className="max-h-[118px]"
                    alt="trand1"
                  />
                </div>
                <div className="col-span-7">
                  <p
                    className={`${myInter.className} text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-light leading-tight mb-3`}
                  >
                    Home Office
                  </p>
                  <h5
                    className={`${myOpenSans.className}  xl:my-[0.202vw] my-[20px] text-[#fff] lg:text-[14px] xl:text-[0.908vw] font-semibold leading-4 `}
                  >
                    Discovering the power of sunshine
                  </h5>
                  <p
                    className={`${myRoboto.className}  text-[#D5D0D0] text-[12px] xl:text-[0.625vw] font-light leading-tight mt-1`}
                  >
                    Ornare sit dignissim massa tristique. Sed duis mi ac ornare
                    tellus ut vulputate quam bibendum. Pellentesque quisque
                    senectus massa neque tellus ultrices
                  </p>
                </div>
              </div>
            </div>

            <div className="small-box xl:p-[0.781vw] p-[15px] rounded-lg xl:mt-[0.954vw] mt-[20px]">
              <div className="grid grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 xl:gap-[0.950vw] gap-[20px] ">
                <div className="col-span-5">
                  <Image
                    src={"/assets/images/svg/trend3.svg"}
                    width={"560"}
                    height={"118"}
                    className="max-h-[118px]"
                    alt="trand1"
                  />
                </div>
                <div className="col-span-7">
                  <p
                    className={`${myInter.className} text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-light leading-tight mb-3`}
                  >
                    Home Office
                  </p>
                  <h5
                    className={`${myOpenSans.className}  xl:my-[0.202vw] my-[20px] text-[#fff] lg:text-[14px] xl:text-[0.908vw] font-semibold leading-4 `}
                  >
                    Discovering the power of sunshine
                  </h5>
                  <p
                    className={`${myRoboto.className}  text-[#D5D0D0] text-[12px] xl:text-[0.625vw] font-light leading-tight mt-1`}
                  >
                    Ornare sit dignissim massa tristique. Sed duis mi ac ornare
                    tellus ut vulputate quam bibendum. Pellentesque quisque
                    senectus massa neque tellus ultrices
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Sencond box */}
          <div className="universe-box xl:p-[1.042vw] p-[15px] rounded-lg">
            <div
              className={`${myInter.className}  flex justify-between items-center`}
            >
              <h6 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[1.042vw] font-semibold leading-tight">
                New Releases !
              </h6>
              <Link
                href=""
                alt=""
                className="small-btn xl:px-[0.775vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.781vw] text-[15px] text-[#fff] rounded-md font-medium"
              >
                See All
              </Link>
            </div>
            <div className="space-y-[26px] xl:space-y-[1.354vw]">
              <div className="small-box xl:p-[0.581vw] p-[15px] rounded-lg xl:mt-[1.754vw] mt-[20px] shadow-2xl">
                <div className="grid grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 xl:gap-[0.950vw] gap-[20px] ">
                  <div className="col-span-3">
                    <Image
                      src={"/assets/images/svg/release1.svg"}
                      width={"560"}
                      height={"320"}
                      className=" x:h-[16.240vw] xl:w-full"
                      alt="trand1"
                    />
                  </div>
                  <div className="col-span-5">
                    <div className="flex justify-between flex-nowrap">
                      <div className="gap-[8px] xl:gap-[0.417vw]">
                        <p
                          className={`${myInter.className}  text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-light leading-tight mb-3`}
                        >
                          23rd April,2023
                        </p>
                        <h5
                          className={`${myOpenSans.className} xl:my-[0.202vw] my-[20px] text-[#fff] text-[16px] xl:text-[0.833vw] font-semibold leading-4 `}
                        >
                          Sales Analytics
                        </h5>
                      </div>

                      <Link
                        href=""
                        alt=""
                        className={`${myInter.className} bg-[#1B1E25] flex items-center h-[28px] xl:px-[0.675vw] px-[18px] xl:py-[0.250vw] py-[18px] xl:text-[0.625vw] text-[12px] text-[#fff] rounded-md font-medium`}
                      >
                        Open
                      </Link>
                    </div>
                    <div
                      className={`${myRoboto.className} text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-medium leading-tight mt-1`}
                    >
                      <p>New Features:</p>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Narrative Insights</li>
                        <li>Forecasting</li>
                        <li>Market share analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-box xl:p-[0.885vw] p-[17px] rounded-lg shadow-2xl">
                <div className="grid grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 xl:gap-[0.950vw] gap-[20px] ">
                  <div className="col-span-3">
                    <Image
                      src={"/assets/images/svg/release2.svg"}
                      width={"560"}
                      height={"320"}
                      className=" x:h-[16.240vw] xl:w-full rounded-lg"
                      alt="trand1"
                    />
                  </div>
                  <div className="col-span-5">
                    <div className="flex justify-between flex-nowrap">
                      <div className="gap-[8px] xl:gap-[0.417vw]">
                        <p
                          className={`${myInter.className}  text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-light leading-tight mb-3`}
                        >
                          23rd April,2023
                        </p>
                        <h5
                          className={`${myOpenSans.className}  xl:my-[0.202vw] my-[20px] text-[#fff] text-[16px] xl:text-[0.833vw] font-semibold leading-4 `}
                        >
                          Partner Analytics
                        </h5>
                      </div>

                      <Link
                        href=""
                        alt=""
                        className={`${myInter.className} bg-[#1B1E25] flex items-center h-[28px] xl:px-[0.675vw] px-[18px] xl:py-[0.250vw] py-[18px] xl:text-[0.625vw] text-[12px] text-[#fff] rounded-md font-medium`}
                      >
                        Open
                      </Link>
                    </div>
                    <div
                      className={`${myRoboto.className} text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-medium leading-tight mt-1`}
                    >
                      <p>New Features:</p>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Narrative Insights</li>
                        <li>Forecasting</li>
                        <li>Market share analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-box xl:p-[0.885vw] p-[17px] rounded-lg shadow-2xl">
                <div className="grid grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 xl:gap-[0.950vw] gap-[20px] ">
                  <div className="col-span-3">
                    <Image
                      src={"/assets/images/svg/release3.svg"}
                      width={"560"}
                      height={"320"}
                      className=" x:h-[16.240vw] xl:w-full rounded-lg"
                      alt="trand1"
                    />
                  </div>
                  <div className="col-span-5">
                    <div className="flex justify-between flex-nowrap">
                      <div className="gap-[8px] xl:gap-[0.417vw]">
                        <p
                          className={`${myInter.className}  text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-light leading-tight mb-3`}
                        >
                          23rd April,2023
                        </p>
                        <h5
                          className={`${myOpenSans.className}  xl:my-[0.202vw] my-[20px] text-[#fff] text-[16px] xl:text-[0.833vw] font-semibold leading-4 `}
                        >
                          Brand Analytics
                        </h5>
                      </div>

                      <Link
                        href=""
                        alt=""
                        className={`${myInter.className} bg-[#1B1E25] flex items-center h-[28px] xl:px-[0.675vw] px-[18px] xl:py-[0.250vw] py-[18px] xl:text-[0.625vw] text-[12px] text-[#fff] rounded-md font-medium`}
                      >
                        Open
                      </Link>
                    </div>
                    <div
                      className={`${myRoboto.className} text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-medium leading-tight mt-1`}
                    >
                      <p>New Features:</p>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Narrative Insights</li>
                        <li>Forecasting</li>
                        <li>Market share analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-box xl:p-[0.885vw] p-[17px] rounded-lg shadow-2xl">
                <div className="grid grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 xl:gap-[0.950vw] gap-[20px] ">
                  <div className="col-span-3">
                    <Image
                      src={"/assets/images/svg/release3.svg"}
                      width={"560"}
                      height={"58"}
                      className="xl:w-full rounded-lg"
                      alt="trand1"
                    />
                  </div>
                  <div className="col-span-5">
                    <div className="flex justify-between flex-nowrap">
                      <div className="gap-[8px] xl:gap-[0.417vw]">
                        <p
                          className={`${myInter.className}  text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-light leading-tight mb-3`}
                        >
                          23rd April,2023
                        </p>
                        <h5
                          className={`${myOpenSans.className}  xl:my-[0.202vw] my-[20px] text-[#fff] text-[16px] xl:text-[0.833vw] font-semibold leading-4 `}
                        >
                          Marketing Analytics
                        </h5>
                      </div>

                      <Link
                        href=""
                        alt=""
                        className={`${myInter.className} bg-[#1B1E25] flex items-center h-[28px] xl:px-[0.675vw] px-[18px] xl:py-[0.250vw] py-[18px] xl:text-[0.625vw] text-[12px] text-[#fff] rounded-md font-medium`}
                      >
                        Open
                      </Link>
                    </div>
                    <div
                      className={`${myRoboto.className} text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-medium leading-tight mt-1`}
                    >
                      <p>New Features:</p>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Narrative Insights</li>
                        <li>Forecasting</li>
                        <li>Market share analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="small-box xl:p-[0.885vw] p-[17px] rounded-lg shadow-2xl">
                <div className="grid grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 xl:gap-[0.950vw] gap-[20px] ">
                  <div className="col-span-3">
                    <Image
                      src={"/assets/images/svg/release3.svg"}
                      width={"560"}
                      height={"320"}
                      className=" x:h-[16.240vw] xl:w-full rounded-lg"
                      alt="trand1"
                    />
                  </div>
                  <div className="col-span-5">
                    <div className="flex justify-between flex-nowrap">
                      <div className="gap-[8px] xl:gap-[0.417vw]">
                        <p
                          className={`${myInter.className}  text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-light leading-tight`}
                        >
                          23rd April,2023
                        </p>
                        <h5
                          className={`${myOpenSans.className} xl:my-[0.202vw] my-[20px] text-[#fff] text-[16px] xl:text-[0.833vw] font-semibold leading-4 `}
                        >
                          HR Analytics
                        </h5>
                      </div>

                      <Link
                        href=""
                        alt=""
                        className={`${myInter.className} bg-[#1B1E25] flex h-[28px] items-center xl:px-[0.675vw] px-[18px] xl:py-[0.250vw] py-[18px] xl:text-[0.625vw] text-[12px] text-[#fff] rounded-md font-medium`}
                      >
                        Open
                      </Link>
                    </div>
                    <div
                      className={`${myRoboto.className} text-[#D5D0D0] text-[12px] sm:text-[14px] lg:text-[14px] xl:text-[0.629vw] font-medium leading-tight mt-1`}
                    >
                      <p>New Features:</p>
                      <ul className="list-disc ml-5 mt-1">
                        <li>Narrative Insights</li>
                        <li>Forecasting</li>
                        <li>Market share analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Third box */}
          <div className="universe-box xl:p-[1.042vw] p-[15px] rounded-lg">
            <div
              className={`${myInter.className}  flex justify-between items-center`}
            >
              <h6 className="text-white text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[1.042vw] font-semibold leading-tight">
                FAQs
              </h6>
              <Link
                href=""
                alt=""
                className="small-btn xl:px-[0.775vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.781vw] text-[15px] text-[#fff] rounded-md font-medium"
              >
                See All
              </Link>
            </div>
            <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
              <div
                className={`${myRoboto.className} xl:mt-[1.754vw] mt-[20px] `}
              >
                <TabList>
                  <div className="flex items-center gap-[20px] xl:gap-[1.042vw] justify-between">
                    <div className="flex gap-2">
                      <Tab>
                        <div
                          className={`xl:h-[1.658vw] h-[28] xl:px-[0.775vw] px-[18px] xl:py-[0.400vw] py-[18px]
                          ${
                            activeTab === 0
                              ? "bg-[#2F6070] text-[#FFF] active border border-[#4BA5B7]"
                              : "bg-[#171b1e] opacity-[0.7] dark:bg-[#374151] text-[#FFF]"
                          }
                          border border-[#FFFFFF1A]  xl:text-[0.581vw] text-[15px] text-[#fff] rounded-full font-medium cursor-pointer`}
                        >
                          All
                        </div>
                      </Tab>

                      <Tab>
                        <div
                          className={`xl:px-[0.775vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.581vw] text-[15px]
                          ${
                            activeTab === 1
                              ? "bg-[#2F6070] text-[#FFF] active border border-[#4BA5B7]"
                              : "bg-[#171b1e] dark:bg-[#374151] text-[#FFF] opacity-[0.7]"
                          }
                           rounded-full font-medium border border-[#FFFFFF1A] xl:h-[1.658vw] h-[28] cursor-pointer`}
                        >
                          Category
                        </div>
                      </Tab>
                      <Tab>
                        <div
                          className={`xl:px-[0.775vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.581vw] text-[15px] 
                          ${
                            activeTab === 2
                              ? "bg-[#2F6070] text-[#FFF] active border border-[#4BA5B7]"
                              : "bg-[#171b1e] opacity-[0.7] dark:bg-[#374151] text-[#FFF]"
                          }
                           rounded-full font-medium border border-[#FFFFFF1A] xl:h-[1.658vw] h-[28] cursor-pointer`}
                        >
                          Category
                        </div>
                      </Tab>
                    </div>
                    <div className="custInput">
                      <span className="p-input-icon-right w-full">
                        <i className="alb-search text-[#fff] mt-0" />
                        <InputText placeholder="Search" className="w-full" />
                      </span>
                    </div>
                  </div>
                </TabList>
              </div>
              <TabPanel>
                <div className={`${myRoboto.className} accordion-custom mt-8`}>
                  <Accordion multiple activeIndex={[0]}>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[17.667vw] w-[180px] font-medium">
                            What are browsers supported?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32 mr-[8px] xl:pr-[0.627vw]">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra. Sociis amet , a,
                        arcu sagittis sed tellus, tortor. Volutpat euismod
                        pretium dolor elit ultricies at amet est.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[17.667vw] w-[180px] font-medium">
                            What is the best viewed screen resolution?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[17.667vw] w-[180px] font-medium">
                            Response
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra. Sociis amet, a,
                        arcu sagittis sed tellus, tortor. Volutpat euismod
                        pretium dolor elit ultricies at amet est. Ac ac velit
                        tincidunt neque, quisque sit nulla. Sapien aliquam
                        egestas non convallis viverra. Sociis amet, a , arcu
                        sagittis sed tellus, tortor. Volutpat euismod pretium
                        dolor elit ultricies at amet est.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[17.667vw] w-[180px] font-medium">
                            How secure is my data?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[17.667vw] w-[200px] font-medium">
                            What are the security and privacy policies?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                  </Accordion>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={`${myRoboto.className} accordion-custom mt-8`}>
                  <Accordion multiple activeIndex={[0]}>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            What are browsers supported?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra. Sociis amet , a,
                        arcu sagittis sed tellus, tortor. Volutpat euismod
                        pretium dolor elit ultricies at amet est.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            What is the best viewed screen resolution?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            Response
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra. Sociis amet, a,
                        arcu sagittis sed tellus, tortor. Volutpat euismod
                        pretium dolor elit ultricies at amet est. Ac ac velit
                        tincidunt neque, quisque sit nulla. Sapien aliquam
                        egestas non convallis viverra. Sociis amet, a , arcu
                        sagittis sed tellus, tortor. Volutpat euismod pretium
                        dolor elit ultricies at amet est.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            How secure is my data?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            What are the security and privacy policies?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                  </Accordion>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={`${myRoboto.className} accordion-custom mt-8`}>
                  <Accordion multiple activeIndex={[0]}>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            What are browsers supported?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra. Sociis amet , a,
                        arcu sagittis sed tellus, tortor. Volutpat euismod
                        pretium dolor elit ultricies at amet est.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            What is the best viewed screen resolution?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            Response
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra. Sociis amet, a,
                        arcu sagittis sed tellus, tortor. Volutpat euismod
                        pretium dolor elit ultricies at amet est. Ac ac velit
                        tincidunt neque, quisque sit nulla. Sapien aliquam
                        egestas non convallis viverra. Sociis amet, a , arcu
                        sagittis sed tellus, tortor. Volutpat euismod pretium
                        dolor elit ultricies at amet est.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            How secure is my data?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                    <AccordionTab
                      header={
                        <div className="flex justify-between items-center">
                          <p className="xl:w-[18.667vw] w-[200px] font-medium">
                            What are the security and privacy policies?
                          </p>
                          <span className="xl:text-[0.625vw] text-[12px] font-light text-[#E1E1E1] w-32">
                            2017/01/02 11AM
                          </span>
                        </div>
                      }
                    >
                      <p className="m-0 xl:text-[0.625vw] text-[12px] font-normal text-[#fff] mb-3">
                        Ac ac velit tincidunt neque, quisque sit nulla. Sapien
                        aliquam egestas non convallis viverra.
                      </p>
                      <Link
                        href=""
                        alt=""
                        className="green-gradient xl:px-[0.675vw] px-[18px] xl:py-[0.400vw] py-[18px] xl:text-[0.681vw] text-[15px] text-[#fff] rounded-md font-light mb-3"
                      >
                        Read More
                      </Link>
                    </AccordionTab>
                  </Accordion>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
