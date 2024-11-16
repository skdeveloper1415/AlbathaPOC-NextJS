import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { CSVLink } from "react-csv";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useReactToPrint } from "react-to-print";
import ReactFullscreen from 'react-easyfullscreen';
import ExcelDownloader from '../exportn/ExcelDownloader';
import PdfDownloader from '../exportn/PdfDownloader';
import { Dropdown } from "primereact/dropdown";

export default function ChartWrapper(props) {

  const [visible, setVisible] = useState(false);
  const [infoIcon, setInfoIcon] = useState(props.infoIcon);
  const [dropdown2, setDropdown2] = useState(props.dropdown2);
  const [dropdown1, setDropdown1] = useState(props.dropdown1);
  const [bulbIcon, setBulbIcon] = useState(props.bulbIcon);
  const [ExportIcon, setExportIcon] = useState(props.ExportIcon);
  const [FlagIcon, setFlagIcon] = useState(props.FlagIcon);
  const [ExportIconTow, setExportIconTow] = useState(props.ExportIconTow);
  const [graphIcon, setGraphIcon] = useState(props.ExportIcon);
  const [downloadIcon, setDownloadIcon] = useState(props.ExportIcon);
  const [tabSection, setTabSection] = useState(props.tabSection);
  const [tabSectiontow, setTabSectiontow] = useState(props.tabSectiontow);

  const op = useRef(null);
  const Bots = useRef();
  const handleClick = (e) => {
    document.querySelector('body').classList.toggle('echartHeight');
  }

  //Print Function
  const handlePrintBots = useReactToPrint({
    content: () => Bots.current,
  });

  const { formatDownloadedData = [], formatFileName = 'Demo', isDetailedExport = false, disablepdf = false, title = 'abc', subtitle = 'abc', placeholder1 = 'Dimention', placeholder2 = 'Dimention2', data = [] } = props;

  const headers = [
    { label: "First Name", key: "id" },
    { label: "Last Name", key: "name" },
    { label: "Email", key: "value" },
    { label: "Age", key: "age" }
  ];

  const csvReport = {
    data: formatDownloadedData,
    headers: headers,
    filename: `${formatFileName}.csv`
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
  ];

  const [ChartOptions, setChartOptions] = useState(null);
    const chart = [
        { name: 'New York', code: 'NY' },
    ];

  return (
    <div>
      <ReactFullscreen>
        {({ ref, onToggle, onExit }) => (
          <div ref={ref} className=' h-full fullScreen'>
            <div>
              <div className='flex items-center justify-between'>
                <div className=''>
                  <div className={`text-[#4B586E] dark:text-[#FFF] text-[14px] xl:text-[0.833vw] font-normal tabheading  ${props.text}`}>
                    <p>{props.title}</p>
                  </div>
                  <div className={`text-[#4B586E] dark:text-[#FFF] text-[10px] xl:text-[0.583vw] font-normal tabheading  ${props.text}`}>
                    <p>{props.titlemini}</p>
                  </div>
                  <div className={`text-[#6C768B] text-[14px] xl:text-[0.729vw] font-normal  ${props.text}`}><p>{props.subtitle}</p></div>
                </div>
                <div className='space-x-2 optionbtn flex items-center wrapper_icons custm_dropdwon text-[#6C768B] dark:text-[#B3B9C6]'>
                  {
                    dropdown1 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder1}
                        className="w-full xl:w-[10.417vw] md:h-[40px]"
                        style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {
                    dropdown2 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder2}
                        className="w-full xl:w-[10.417vw] md:h-[40px]"
                        style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {/* {
                    graphIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-graph text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }
                  {
                    downloadIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-note-download text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }
                  {
                    bulbIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-lightbulb text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }
                  {
                    infoIcon == true ?
                      <Link href='' className='leading-none'><i className='redingtonHR-info text-[14px] xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  } */}
                  {
                    props.maximizeIcon == true ?
                      <Link href=''
                        className='leading-none'
                        onClick={() => {
                          onToggle();
                        }}
                      >
                        <i onClick={handleClick} className='kmp-plus text-[14px] xl:text-[0.94vw] align-top'></i></Link>
                      : null
                  }
                  {
                    tabSection == true ?
                      <div className="flex">
                          <button onClick={() => props.setTabActiveIndex(0)} className={`${props.tabActiveIndex == 0 ? 'bg-[#4BA5B7] text-[white]' : 'text-[#4B586E] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[4px] xl:py-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium rounded-lg`}>MTD</button>
                          <button onClick={() => props.setTabActiveIndex(1)} className={`${props.tabActiveIndex == 1 ? 'bg-[#4BA5B7] text-[white]' : 'text-[#3D434F] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.208vw] text-[12px] xl:text-[0.625vw] font-medium rounded-lg`}>YTD</button>
                      </div>
                      : null
                  }
                  {
                    tabSectiontow == true ?
                      <div className="flex">
                          <button onClick={() => props.setTabActiveIndex(0)} className={`${props.tabActiveIndex == 0 ? 'bg-[#4BA5B7] text-[white]' : 'text-[#4B586E] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[4px] xl:py-[0.208vw] text-[14px] xl:text-[0.729vw] font-medium rounded-lg`}>MTD</button>
                          <button onClick={() => props.setTabActiveIndex(1)} className={`${props.tabActiveIndex == 1 ? 'bg-[#4BA5B7] text-[white]' : 'text-[#3D434F] dark:text-[#D7DAE0]'} px-[12px] xl:px-[0.625vw] py-[8px] xl:py-[0.208vw] text-[14px] xl:text-[0.729vw] font-medium rounded-lg`}>YTD</button>
                      </div>
                      : null
                  }
                  {
                    FlagIcon == true ?
                      <div>
                        <div className="card flex">
                        <i className='alb-flag text-[16px] xl:text-[0.938vw]'></i>
                        </div>
                      </div>
                      : null
                  }                  
                  {
                    ExportIcon == true ?
                      <div>
                        <div className="card flex">
                          <button onClick={(e) => op.current.toggle(e)}>
                            <div className="cursor-pointer flex items-center leading-none">
                              <i className='alb-three-dots-square text-[16px] xl:text-[0.938vw] align-top text-[#9CA1AB]' title='Click here for multiple option'></i>
                            </div>
                          </button>
                          <OverlayPanel ref={op} className="dropdownList">
                            <div className='flex flex-col text-left gap-y-2 wrapperOption text-[14px] xl:text-[0.730vw] text-[#363A44] dark:text-[#B3B9C6]'>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200' href='' onClick={() => { handlePrintBots(); onExit(); }}>
                                <i className='pi pi-print '></i>
                                <span>Print to pdf</span>
                              </button>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <CSVLink {...csvReport}>Export to CSV</CSVLink>
                              </button>
                              <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <ExcelDownloader data={formatDownloadedData} />
                              </div>
                              <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <PdfDownloader
                                  title={formatFileName}
                                  isDetailedExport={isDetailedExport}
                                  data={formatDownloadedData}
                                  id={props.id}
                                /></div>
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                      : null
                  }
                  {
                    ExportIconTow == true ?
                      <div>
                        <div className="card flex">
                          <button onClick={(e) => op.current.toggle(e)}>
                            <div className="cursor-pointer flex items-center leading-none">
                              <i className='alb-three-dots-circle text-[18px] xl:text-[1.146vw] align-top text-[#4B586E]' title='Click here for multiple option'></i>
                            </div>
                          </button>
                          <OverlayPanel ref={op} className="chartoptiondropdown">
                            <div className='xl:space-y-[1.250vw] space-y-[22px] xl:p-[0.833vw] p-4'>
                              {/**col**/}
                              <div className='text-[#374151] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>Chart Options</div>
                              {/**col**/}
                              <div className='flex flex-col xl:gap-[0.417vw] gap-2'>
                              <label htmlFor="username" className='text-[#374151] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>Group by</label>
                              <Dropdown value={ChartOptions} onChange={(e) => setChartOptions(e.value)} options={chart} optionLabel="name" 
                placeholder="Groups" className="w-full custmdropdown" />
                              </div>
                              {/**col**/}
                              <div className='flex flex-col xl:gap-[0.417vw] gap-2'>
                              <label htmlFor="username" className='text-[#374151] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>View</label>
                              <Dropdown value={ChartOptions} onChange={(e) => setChartOptions(e.value)} options={chart} optionLabel="name" 
                placeholder="All" className="w-full custmdropdown" />
                              </div>
                              {/**col**/}
                              <div className='flex flex-col xl:gap-[0.417vw] gap-2'>
                              <label htmlFor="username" className='text-[#374151] xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5'>Compare Against</label>
                              <Dropdown value={ChartOptions} onChange={(e) => setChartOptions(e.value)} options={chart} optionLabel="name" 
                placeholder="Last Year" className="w-full custmdropdown" />
                              </div>
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                      : null
                  }
                </div>
              </div>
              <div className="">
                <div className='grid grid-cols-1 wrapper_icons center-content'>
                  <div ref={Bots}>
                    {props.data}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ReactFullscreen>
    </div>
  )
}