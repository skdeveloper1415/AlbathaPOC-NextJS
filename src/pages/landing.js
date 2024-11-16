import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactEcharts from "echarts-for-react";
import Link from "next/link";
import "aos/dist/aos.css";
import AOS from "aos";
import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";
import { Nunito, Open_Sans, Roboto } from "@next/font/google";
import { InputText } from "primereact/inputtext";
import Profile from "@/components/layout/profile";
import { Accordion, AccordionTab } from "primereact/accordion";
import { PhotoService } from "../service/PhotoService";
import { Dropdown } from "primereact/dropdown";
import Head from "next/head";
import { Inter, Teko } from "@next/font/google";
import ListComponent from "@/components/listComponent/listComponent";
import LineChart from "@/components/charts/linechart";
import BarChart from "@/components/charts/barchart";
import HalfDoughnutChart from "@/components/charts/halfdoughnutchart";
import HorizontalChart from "@/components/charts/horizontalchart";
import Explore from "./explore";
import Universe from "./universe";
import RetailHome from "./retailhome";
import Automotive from "./automotive";
import Albathagroup from "./albathagroup";
const myNunito = Nunito({
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const myInter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const myOpenSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const myRoboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});
const myTeko = Teko({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
export default function Landing() {
  useEffect(() => {
    AOS.init();
  }, []);

  const LineChartData = {
    labels: ["Jan,23", "Feb,23", "Mar,23", "Apr,23", "May,23", "Jun,23"],
    values: ["10000", "22000", "25000", "35000", "15000", "29000"],
  };
  const BarChartData = {
    labels: ["Jan,23", "Feb,23", "Mar,23", "Apr,23", "May,23", "Jun,23"],
    values: ["50", "35", "40", "30", "25", "30"],
  };

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");
  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };
  const onHide = (position) => {
    setPosition(position);
    setVisible(false);
  };

  const [activeGrid, setActiveGrid] = useState(false);

  /*--Galleria--*/
  const [images, setImages] = useState(null);
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];
  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);
  const HorizontalChartData = {
    value1: ["300"],
    value2: ["430"],
  };
  /*--Galleria--*/

  /*---Select--*/
  const [selectedCity, setSelectedCity] = useState(null);
  const [Detail, setDetail] = useState(0);
  const Category = [
    { name: "Technology Information", code: "TI" },
    { name: "Growth Initiatives", code: "GI" },
    { name: "OEP", code: "OEP" },
    { name: "All", code: "ALL" },
  ];
  const SubCategory = [
    { name: "All", code: "TI" },
    { name: "Finance", code: "GI" },
    { name: "HR", code: "OEP" },
    { name: "COE", code: "COE" },
    { name: "Credit", code: "CRD" },
    { name: "Marketing", code: "MARK" },
    { name: "Admin", code: "ADM" },
  ];
  /*---Select--*/

  // listData
  const listData = [
    {
      id: 1,
      title: "Finance Dashboard",
      img: "/assets/images/product2.png",
    },
    {
      id: 2,
      title: "Finance Dashboard",
      img: "/assets/images/product2.png",
    },
    {
      id: 3,
      title: "HR Dashboard",
      img: "/assets/images/product3.png",
    },
    {
      id: 4,
      title: "Ecommerce Dashboard",
      img: "/assets/images/product4.png",
    },
    {
      id: 5,
      title: "Finance Dashboard",
      img: "/assets/images/product5.png",
    },
    {
      id: 6,
      title: "Finance Dashboard",
      img: "/assets/images/product9.png",
    },
    {
      id: 7,
      title: "HR Dashboard",
      img: "/assets/images/product3.png",
    },
    {
      id: 8,
      title: "Partner 360 Dashboard - POC",
      img: "/assets/images/product9.png",
    },
    {
      id: 9,
      title: "Goal Sheet Evalution",
      img: "/assets/images/product8.png",
    },
    {
      id: 10,
      title: "Human Resource",
      img: "/assets/images/product3.png",
    },
    {
      id: 11,
      title: "Ecommerce",
      img: "/assets/images/product2.png",
    },
    {
      id: 12,
      title: "Supply Chain Dashboard",
      img: "/assets/images/product4.png",
    },
    {
      id: 13,
      title: "Finance Dashboard",
      img: "/assets/images/product5.png",
    },
    {
      id: 14,
      title: "Finance Dashboard",
      img: "/assets/images/product6.png",
    },
    {
      id: 15,
      title: "HR Dashboard",
      img: "/assets/images/product7.png",
    },
    {
      id: 16,
      title: "Partner 360 Dashboard - POC",
      img: "/assets/images/product2.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Albatha Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/favicon.svg" />
      </Head>
      {Detail ===0 ?
      <div>
        <div className="relative">
          <div className="absolute top-0 right-1">
            <Image
              src={"/assets/images/hall_of_data.svg"}
              className="w-[85.313vw] h-[80vw] z-[999]"
              width={100}
              height={100}
              alt=""
            />
            <div className="absolute left-[0.992vw] top-[12.063vw]">
              <div className={myTeko.className}>
                <div className="text-[57px] xl:text-[3.521vw] text-white font-bold leading-none tracking-wide">
                  Albatha portfolio
                </div>
              </div>
              <div className="text-white text-[20px] xl:text-[1vw] font-normal">
                The all-in-one place to browse in your applications.
              </div>
            </div>
            <div className="absolute left-[0.858vw] top-[22.538vw]">
              <div className="gradient-one backdrop-blur-[4px] xl:backdrop-blur-[0.208vw] p-[16px] xl:p-[0.833vw] rounded-[12px] xl:rounded-[0.625vw] w-full max-w-[17.917vw]">
                <div className="flex items-center justify-between gap-[24px] xl:gap-[1.250vw]">
                  <div className="col min-w-fit text-center">
                    <div className="text-[56px] xl:text-[2.917vw] text-white font-bold leading-none">
                      12
                    </div>
                    <div className="text-[20px] xl:text-[1.042vw] text-white font-bold leading-none uppercase">
                      million gb
                    </div>
                  </div>
                  <div className="text-[20px] xl:text-[1.042vw] text-white/60 leading-none font-light">
                    of data processed every day.
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[5.167vw] bottom-[38.120vw]">
              <div className="gradient-two backdrop-blur-[4px] xl:backdrop-blur-[0.208vw] p-[16px] xl:p-[0.833vw] rounded-[12px] xl:rounded-[0.625vw] w-full max-w-[17.917vw]">
                <div className="flex items-center justify-between gap-[24px] xl:gap-[1.250vw]">
                  <div className="col min-w-fit text-center">
                    <div className="text-[56px] xl:text-[2.917vw] text-white font-bold leading-none">
                      5+
                    </div>
                  </div>
                  <div className="text-[20px] xl:text-[1.042vw] text-white uppercase leading-none">
                    Digital solutions
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[20.417vw] top-[27.600vw]">
              <div className="gradient-three backdrop-blur-[4px] xl:backdrop-blur-[0.208vw] p-[16px] xl:p-[0.833vw] rounded-[12px] xl:rounded-[0.625vw] w-full max-w-[17.917vw]">
                <div className="flex items-center justify-between gap-[24px] xl:gap-[1.250vw]">
                  <div className="col min-w-fit text-center">
                    <div className="text-[56px] xl:text-[2.917vw] text-white font-bold leading-none">
                      15+
                    </div>
                    <div className="text-[20px] xl:text-[1.042vw] text-white font-bold leading-none uppercase">
                      dashboards
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[27vw] top-[1.063vw]">
              <Link href={""} onClick={() => setDetail(3)}>
                <Image
                  src={"/assets/images/main-logo-circle.svg"}
                  className="w-[68.813vw]"
                  width={726}
                  height={726}
                  alt=""
                />
              </Link>
            </div>
            <div className="absolute left-[30vw] top-[14.063vw]">
              <Link href={""} onClick={() => setDetail(1)}>
                <Image
                  src={"/assets/images/retail-click.png"}
                  className="w-[11.042vw]"
                  width={212}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
            <div className="absolute right-[11.063vw] top-[11.458vw]">
              <Link href={""}>
                <Image
                  src={"/assets/images/consumer.png"}
                  className="w-[8.125vw]"
                  width={212}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
            <div className="absolute left-[28.188vw] top-[23.938vw]">
              <Link href={""}>
                <Image
                  src={"/assets/images/healthcare.png"}
                  className="w-[8.177vw]"
                  width={212}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
            <div className="absolute right-[4.208vw] top-[25.938vw]">
              <Link href={""}>
                <Image
                  src={"/assets/images/real-estate.png"}
                  className="w-[8.177vw]"
                  width={212}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
            <div className="absolute left-[32.354vw] bottom-[35.688vw]">
              <Link href={""}>
                <Image
                  src={"/assets/images/engineering.png"}
                  className="w-[8.021vw]"
                  width={212}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
            <div className="absolute left-[41.250vw] bottom-[27.917vw]">
              <Link href={""}>
                <Image
                  src={"/assets/images/homecare.png"}
                  className="w-[10.833vw]"
                  width={212}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
            <div className="absolute right-[10.417vw] bottom-[33.646vw]">
              <Link href={""} onClick={() => setDetail(2)}>
                <Image
                  src={"/assets/images/automotive.png"}
                  className="w-[8.125vw]"
                  width={212}
                  height={56}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="">
            <div className={`${myNunito.className} landingBgColor `}>
              <div className="landingBanner1  ">
                <div className="p-lr-100">
                  {/* header section */}
                  <div
                    className="bg-[#02151880] backdrop-blur-md py-[1.25vw] fixed w-full z-20"
                    data-aos="fade-down"
                    data-aos-duration="800"
                  >
                    <div className="px-[15px] xl:px-[5.083vw] menu-wrap">
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-3 xl:col-span-4">
                          <div className="flex items-center space-x-[30px] xl:space-x-[3.385vw]">
                            <div className="w-full lg:w-auto" id="logo">
                              <Link href={"/"}>
                                <Image
                                  src={"/assets/images/logo.svg"}
                                  width={"360"}
                                  height={"70"}
                                  className="max-w-[180px] md:max-w-[250px] xl:max-w-[12.750vw] light"
                                  alt="Logo"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-9 xl:col-span-8">
                          <div className="flex items-center justify-end xl:space-x-[2.083vw]">
                            <div>
                              <div className="flex items-center space-x-[0.521vw]">
                                <div className="flex items-center space-x-[10px] xl:space-x-[1.354vw]">
                                  <div className="relative">
                                    <Link
                                      href={""}
                                      className="flex items-center justify-center w-[40px] h-[40px] md:w-[48px] md:h-[48px]
                   xl:w-[2.610vw] xl:h-[2.610vw] rounded-full bg-[#F0F0F01A]"
                                    >
                                      <i className="NU-cart text-[#fff] text-[18px] xl:text-[0.938vw]"></i>

                                      <Image
                                        src={
                                          "/assets/images/svg/notification-white.svg"
                                        }
                                        width={"16"}
                                        height={"16"}
                                        className=""
                                        alt="notification"
                                      />
                                    </Link>
                                    <div className="absolute -right-[10px] -top-[10px] md:-right-[6px] md:-top-[6px] xl:-right-[0.313vw] xl:-top-[0.313vw]">
                                      <div className="text-[11px] xl:text-[0.573vw] text-white bg-[#A83B3B] rounded-full w-[20px] h-[20px] md:w-[24px] md:h-[24px] xl:w-[1vw] xl:h-[1vw] flex items-center justify-center">
                                        3
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div x-data="{ open: false }" className="">
                                      <div
                                        className="relative"
                                        x-data="{ open: false }"
                                      >
                                        <Profile />
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
                  {/* header section End */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Explore start */}
          <Explore />
          {/* Explore end */}
          {/* Universe start */}
          <Universe />
          {/* Universe end */}
        </div>
      </div>
      :null

      }
 {Detail ===1 ?
      <div>
        <RetailHome setDetail={setDetail} Detail={Detail} />
      </div>

      :null
 }
      
 {Detail ===2 ?
      <div>
        <Automotive setDetail={setDetail} Detail={Detail} />
      </div>

      :null
 }
 
 {Detail ===3 ?
      <div>
        <Albathagroup setDetail={setDetail} Detail={Detail} />
      </div>

      :null
 }


    </>
  );
}
