import FilterComponent from '@/components/filtercomponent'
import React, { useState } from 'react'
import { Dropdown } from "primereact/dropdown";
import Link from 'next/link';
import { DrillDownChart } from '@/components/charts/drilldown';
import Layout from '@/components/layoutAdmin/layoutdailyfinancereport/layout';


const DrilldownPage = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [selectedLevel1, setSelectedLevel1] = useState(null);
  const [selectedLevel2, setSelectedLevel2] = useState(null);
  const [selectedLevel3, setSelectedLevel3] = useState(null);

  const Levels = [
    { name: "Week", code: "RM" },
    { name: "Country", code: "LDN" },
    { name: "Group", code: "IST" },
    { name: "Company", code: "PRS" },
  ];

  const Metric = [
    { name: "Sales", code: "RM" },
    { name: "Inventory", code: "RM" },
    { name: "Cash Collections", code: "LDN" },
    { name: "Cash Position", code: "IST" },
    { name: "Sales - LP Var (%)", code: "PRS" },
    { name: "Inventory - LP Var (%)", code: "RS" },
    { name: "Cash Collection - LP Var (%)", code: "KRS" },
    { name: "Cash Position - LP Var (%)", code: "KRS" },
  ];

  return (
    <Layout
      pageTitle="Drilldown Analysis"
      pageName="Drilldown Analysis"
    >
      <FilterComponent />
      <div className=''>
        <div className='grid grid-cols-10 gap-[24px] xl:gap-[1.25vw]'>
          <div className="bg-white dark:bg-[#191A1E] xl:col-span-2 col-span-10 rounded-[8px] xl:rounded-[0.417vw] p-[16px] xl:p-[0.833vw] ">
            <div>
              <div className='text-[#24262D] text-[18px] xl:text-[0.938vw] font-bold mb-[24px] xl:mb-[1.25vw]'>
                Filters
              </div>
              <div className="customDropdown pb-[32px] xl:pb-[1.667vw] border-b border-b-[#E5E7EB]">
                <label
                  htmlFor="name"
                  className="text-[#24262D] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#fff] "
                >
                  Select Metrics
                </label>
                <Dropdown
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.value)}
                  options={Metric}
                  optionLabel="name"
                  placeholder="--select--"
                  className="w-full xl:mt-[0.417vw] mt-[8px]"
                />
              </div>
              <div className='mt-[24px] xl:mt-[1.25vw]'>
                <div className='text-[#4B586E] text-[14px] xl:text-[0.729vw] font-normal mb-[16px] xl:mb-[0.833vw]'>
                  Select Dimensions
                </div>
                <div className='space-y-[16px] xl:space-y-[0.833vw]'>
                  <div className="customDropdown">
                    <label
                      htmlFor="name"
                      className="text-[#24262D] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#fff] "
                    >
                      Level 1
                    </label>
                    <Dropdown
                      value={selectedLevel1}
                      onChange={(e) => setSelectedLevel1(e.value)}
                      options={Levels}
                      optionLabel="name"
                      placeholder="--select--"
                      className="w-full xl:mt-[0.417vw] mt-[8px]"
                    />
                  </div>
                  <div className="customDropdown ">
                    <label
                      htmlFor="name"
                      className="text-[#24262D] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#fff] "
                    >
                      Level 2
                    </label>
                    <Dropdown
                      value={selectedLevel2}
                      onChange={(e) => setSelectedLevel2(e.value)}
                      options={Levels}
                      optionLabel="name"
                      placeholder="--select--"
                      className="w-full xl:mt-[0.417vw] mt-[8px]"
                    />
                  </div>
                  <div className="customDropdown">
                    <label
                      htmlFor="name"
                      className="text-[#24262D] text-[14px] xl:text-[0.729vw] font-medium dark:text-[#fff] "
                    >
                      Level 3
                    </label>
                    <Dropdown
                      value={selectedLevel3}
                      onChange={(e) => setSelectedLevel3(e.value)}
                      options={Levels}
                      optionLabel="name"
                      placeholder="--select--"
                      className="w-full xl:mt-[0.417vw] mt-[8px]"
                    />
                  </div>
                </div>
                <div className='text-center flex justify-end mt-[16px] xl:mt-[0.833vw] w-full'>
                  <Link href={""} className=' bg-[#fff] border border-[#4BA5B7] hover:bg-[#F5F6F8] text-[14px] xl:text-[0.729vw] p-[8px] xl:p-[0.417vw] rounded-[4px] text-[#4BA5B7]'><i className="alb-plus pr-1"></i> Add Level</Link>
                </div>
              </div>
            </div >

          </div>
          <div className='bg-white dark:bg-[#191A1E] xl:col-span-8 col-span-10 rounded-[8px] xl:rounded-[0.417vw] p-[20px] xl:p-[1.042vw] cardshadow'>
            <div className='text-[#374151] text-[18px] xl:text-[0.938vw] font-medium mb-[16px] xl:mb-[0.833vw]'>
            Drill down Analysis
            </div>
            <div className='pt-[12px] xl:pt-[3.625vw]'>
              <DrillDownChart />
            </div>
            <div >
              <div className="drilldown-legend inline-block xl:px-[0.833vw] px-[16px] py-[10px] xl:py-[0.521vw] rounded-md  bg-[#F6F7F9] dark:bg-[#131316] relative top-[0px]">
                <h6 className="text-[#363A44] opacity-[0.7] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]">Choose Dimensions</h6>
                <div className="flex gap-[15px] xl:gap-[1vw] xl:mt-[0.535vw] mt-[10px] items-center">
                  <div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-normal leading-6 dark:text-[#4B5255]"> Metrics</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]">Sales</div>
                  </div>
                  <i className="pi pi-angle-right" style={{ color: '#4C525F99' }}></i>
                  <div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-normal leading-6 dark:text-[#363A44]"> Level 1</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]"> Week</div>
                  </div>
                  <i className="pi pi-angle-right" style={{ color: '#4C525F99' }}></i>
                  <div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-normal leading-6 dark:text-[#363A44]"> Level 2</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]"> Country</div>
                  </div>
                  <i className="pi pi-angle-right" style={{ color: '#4C525F99' }}></i>
                  <div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-normal leading-6 dark:text-[#363A44]"> Level 3</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]"> Group</div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>

  )
}

export default DrilldownPage