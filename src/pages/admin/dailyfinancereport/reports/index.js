import Link from "next/link";
import { Dropdown } from "primereact/dropdown";
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { RadioButton } from "primereact/radiobutton";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import ChartDialog from "@/components/chartdialog";
import FilterComponent from "@/components/filtercomponent";
import Layout from "@/components/layoutAdmin/layoutdailyfinancereport/layout";
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

const ManageReports = () => {
  const [Budget, setBudget] = useState("");
  const [chartVisible, setChartVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const [rowClick, setRowClick] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [filters, setFilters] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [expandedRows, setExpandedRows] = useState(null);
  const cities = [
    { name: "Sales", code: "NY" },
    { name: "Rome", code: "RM" },
  ];
  const [selectedYear, setSelectedYear] = useState(null);
  const YearList = [
    { name: "Sales", code: "NY" },
    { name: "Rome", code: "RM" },
  ];
  // Data table
  const products = [
    {
      id: "1000",
      name: "Albatha Engineering",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: true,
      orders: [
        {
          id: "10-0",
          name: "AGM",
          first: "13.900.909",
          second: "13.900.909",
          third: "11.692.391",
          fourth: "22.431.421",
          fifth: "9.235.612",
          sixth: "26.606.879",
          seventh: "8.472.003",
          eighth: "8.472.003",
          ninth: "11.137.507",
          tenth: "16.504.457",
          eleventh: "74.076.719",
          twelth: "45.904.462",
          trend: false,
        },
        {
          id: "10-1",
          name: "BMW Albatha Finance",
          first: "13.900.909",
          second: "13.900.909",
          third: "11.692.391",
          fourth: "22.431.421",
          fifth: "9.235.612",
          sixth: "26.606.879",
          seventh: "8.472.003",
          eighth: "8.472.003",
          ninth: "11.137.507",
          tenth: "16.504.457",
          eleventh: "74.076.719",
          twelth: "45.904.462",
          trend: true,
        },
        {
          id: "10-2",
          name: "BMW Albatha Leasing",
          first: "13.900.909",
          second: "13.900.909",
          third: "11.692.391",
          fourth: "22.431.421",
          fifth: "9.235.612",
          sixth: "26.606.879",
          seventh: "8.472.003",
          eighth: "8.472.003",
          ninth: "11.137.507",
          tenth: "16.504.457",
          eleventh: "74.076.719",
          twelth: "45.904.462",
          trend: false,
        },
      ],
    },
    {
      id: "1001",
      name: "Albatha Automotive",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: false,
      orders: [
        {
          id: "10-0",
          name: "AGM",
          first: "13.900.909",
          second: "13.900.909",
          third: "11.692.391",
          fourth: "22.431.421",
          fifth: "9.235.612",
          sixth: "26.606.879",
          seventh: "8.472.003",
          eighth: "8.472.003",
          ninth: "11.137.507",
          tenth: "16.504.457",
          eleventh: "74.076.719",
          twelth: "45.904.462",
          trend: false,
        },
        {
          id: "10-1",
          name: "BMW Albatha Finance",
          first: "13.900.909",
          second: "13.900.909",
          third: "11.692.391",
          fourth: "22.431.421",
          fifth: "9.235.612",
          sixth: "26.606.879",
          seventh: "8.472.003",
          eighth: "8.472.003",
          ninth: "11.137.507",
          tenth: "16.504.457",
          eleventh: "74.076.719",
          twelth: "45.904.462",
          trend: true,
        },
        {
          id: "10-2",
          name: "BMW Albatha Leasing",
          first: "13.900.909",
          second: "13.900.909",
          third: "11.692.391",
          fourth: "22.431.421",
          fifth: "9.235.612",
          sixth: "26.606.879",
          seventh: "8.472.003",
          eighth: "8.472.003",
          ninth: "11.137.507",
          tenth: "16.504.457",
          eleventh: "74.076.719",
          twelth: "45.904.462",
          trend: false,
        },
      ],
    },
    {
      id: "1002",
      name: "Albatha Consumer",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: true,
    },
    {
      id: "1003",
      name: "Albatha Healthcare",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: true,
    },
    {
      id: "1004",
      name: "Albatha Home & Personal Care",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: true,
    },
    {
      id: "1005",
      name: "Albatha Home & Retail",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: true,
    },
    {
      id: "1006",
      name: "Albatha Real Estate",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: false,
    },
    {
      id: "1007",
      name: "Albatha Real Estate",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: false,
    },
    {
      id: "1008",
      name: "Albatha Real Estate",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "9.235.612",
      sixth: "26.606.879",
      seventh: "8.472.003",
      eighth: "8.472.003",
      ninth: "11.137.507",
      tenth: "16.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: false,
    },
    {
      id: "1009",
      name: "Albatha Real Estate",
      second: "13.900.909",
      third: "11.692.391",
      fourth: "22.431.421",
      fifth: "0",
      sixth: "26.606.879",
      seventh: "0",
      eighth: "8.472.003",
      ninth: "0",
      tenth: "16.504.457",
      eleventh: "0",
      twelth: "45.904.462",
      trend: false,
      total:"85.52.222",
    },
    {
      id: "1010",
      name: "Total",
      second: "85.900.909",
      third: "91.692.391",
      fourth: "22.431.421",
      fifth: "78.235.612",
      sixth: "26.606.879",
      seventh: "88.472.003",
      eighth: "78.472.003",
      ninth: "61.137.507",
      tenth: "56.504.457",
      eleventh: "74.076.719",
      twelth: "45.904.462",
      trend: true,
    },
  ];
  const TrendBody = (rowData) => {
    return (
      <div>
        {rowData.trend === true ? (
          <i
            className="alb-stock-up-fill bg-[#FFF] text-[#4BA5B7] text-[20px] xl:text-[1.042vw]"
            onClick={() => setChartVisible(true)}
          ></i>
        ) : (
          <i
            className="alb-stock-down-fill bg-[#FFF] text-[#F98080] text-[20px] xl:text-[1.042vw]"
            onClick={() => setChartVisible(true)}
          ></i>
        )}
      </div>
    );
  };
  const allowExpansion = (rowData) => {
    return rowData.name.length > 5;
  };
  const TextBody =(rowData)=>{
    return (
      <div className="text-[#F98080] font-semibold">{rowData.third}</div>
    )
  }
  const TextBodyFifth =(rowData)=>{
    return (
      <div className="text-[#F98080] font-semibold">{rowData.fifth}</div>
    )
  }
  const TextBodySeventh =(rowData)=>{
    return (
      <div className="text-[#F98080] font-semibold">{rowData.seventh}</div>
    )
  }
  const TextBodyEight =(rowData)=>{
    return (
      <div className="text-[#F98080] font-semibold">{rowData.eighth}</div>
    )
  }
  const TextBodyTwelth =(rowData)=>{
    return (
      <div className="text-[#F98080] font-semibold">{rowData.twelth}</div>
    )
  }
  const ExpanderThird=(data)=>{
    return (
      <div className="text-[#F98080]">{data.third}</div>
    )
  }
  const ExpanderFifth =(data)=>{
    return (
      <div className="text-[#F98080]">{data.fifth}</div>
    )
  }
  const ExpanderSeventh=(data)=>{
    return (
      <div className="text-[#F98080]">{data.seventh}</div>
    )
  }
  const rowExpansionTemplate = (data) => {
    return (
      <div style={{ width: "100%" }}>
        <DataTable value={data.orders} className="custTable ExpanderHeader font-normal expanderTable">
          <Column field="name" className="" align="right" style={{ minWidth: "22rem"}} ></Column>
          <Column field="second" align="center" style={{ minWidth: "12rem" }}></Column>
          <Column field="third" body={ExpanderThird} className="text-[#F98080]" align="center" style={{ minWidth: "11rem" }}></Column>
          <Column field="fourth" align="center" style={{ minWidth: "11rem" }}></Column>
          <Column field="fifth" body={ExpanderFifth} align="center" style={{ minWidth: "11rem" }}></Column>
          <Column field="sixth" align="center" style={{ minWidth: "12rem" }}></Column>
          <Column field="seventh" body={ExpanderSeventh} align="center" style={{ minWidth: "11rem" }}></Column>
          <Column field="eighth" align="center" style={{ minWidth: "11rem" }}></Column>
          <Column field="ninth" align="center" style={{ minWidth: "11rem" }}></Column>
          <Column field="tenth" align="center" style={{ minWidth: "11rem" }}></Column>
          <Column field="eleventh" align="center" style={{ minWidth: "10rem" }}></Column>
          <Column field="twelth" align="center" style={{ minWidth: "10rem" }}></Column>
          <Column
            field="trend"
            body={TrendBody}
            style={{ minWidth: "4rem",display: 'flex', justifyContent: 'center',alignItems: 'center'}}
          ></Column>
        </DataTable>
      </div>
    );
  };
  const footerGroup = (
    <ColumnGroup>
        <Row>
            <Column footer="Total" colSpan={2} className="font-semibold" footerStyle={{ textAlign: 'left' }} />
            <Column footer="83.252.462" colSpan={1} className="font-semibold" footerStyle={{minWidth:"10rem", textAlign: 'left' }}/>
            <Column footer="96.504.457" colSpan={1} className="font-semibold" footerStyle={{ textAlign: 'right' }}/>
            <Column footer="84.504.457" colSpan={1} className="font-semibold" footerStyle={{ textAlign: 'right' }}/>
            <Column footer="80.504.457" className="font-semibold" footerStyle={{ textAlign: 'right' }}/>
            <Column footer="74.504.457" className="font-semibold" footerStyle={{ textAlign: 'right' }}/>
            <Column footer="46.504.457" className="font-semibold" footerStyle={{ textAlign: 'right' }}/>
            <Column footer="66.504.457" className="font-semibold" footerStyle={{ textAlign: 'center' }}/>
            <Column footer="99.504.457" className="font-semibold" footerStyle={{ textAlign: 'center' }}/>
            <Column footer="72.504.457" className="font-semibold" footerStyle={{ textAlign: 'center' }}/>
            <Column footer="58.504.457" className="font-semibold" footerStyle={{ textAlign: 'center' }}/>
            <Column footer="47.504.457" className="font-semibold" footerStyle={{ textAlign: 'left' }}/>
        </Row>
    </ColumnGroup>
);

  return (
    <Layout pageTitle="Reports" pageName="Reports">
      <FilterComponent />
      <div className="ReportTab">
        <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
          <div className="py-[20px] xl:py-[1.042vw] bg-[#FFF] px-[16px] xl:px-[0.833vw] border rounded-t-lg">
            <div className=" flex justify-between rounded-lg items-center ">
              <div className="flex gap-[16px] xl:gap-[0.833vw] custInputText ">
                <TabList>
                  <div className="flex">
                    <Tab>
                      <div
                        className={`flex items-center text-[16px] xl:text-[0.833vw] xl:py-[0.625vw] py-[12px] xl:px-[1.042vw] px-[20px] border rounded-l-lg cursor-pointer
                  ${
                    activeTab === 0
                      ? "bg-[#4BA5B7] text-[#FFF] active border border-[#4BA5B7]"
                      : "bg-[#F5F6F7] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] text-[#424242]"
                  }`}
                      >
                        Country
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        className={`flex items-center text-[16px] xl:text-[0.833vw] xl:py-[0.625vw] py-[12px] xl:px-[1.042vw] px-[20px] border cursor-pointer
                  ${
                    activeTab === 1
                      ? "bg-[#4BA5B7] text-[#FFF] active border border-[#4BA5B7]"
                      : "bg-[#F5F6F7] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] text-[#424242]"
                  }`}
                      >
                        Group
                      </div>
                    </Tab>
                    <Tab>
                      <div
                        className={`flex items-center text-[16px] xl:text-[0.833vw] xl:py-[0.625vw] py-[12px] xl:px-[1.042vw] px-[20px] border rounded-r-lg cursor-pointer
                  ${
                    activeTab === 2
                      ? "bg-[#4BA5B7] text-[#FFF] active border border-[#4BA5B7]"
                      : "bg-[#F5F6F7] hover:bg-[#F0E9EA] dark:bg-[#374151] dark:text-[#AAA] text-[#424242]"
                  }`}
                      >
                        Company
                      </div>
                    </Tab>
                  </div>
                </TabList>
                <div>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Reports : Sales"
                  className="lg:w-[20vw]"
                  style={{
                    border: "1px solid #DDE1EA",
                    borderRadius: "8px",
                    width: "15.029vw",
                  }}
                />
                </div>
             <div>
             <Dropdown
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.value)}
                  options={YearList}
                  optionLabel="name"
                  placeholder="Compare Against : Last Year"
                  className="lg:w-[30vw]"
                  style={{
                    border: "1px solid #DDE1EA",
                    borderRadius: "8px",
                    width: "22.029vw",
                  }}
                />
             </div>
            
              </div>
              <div className="flex justify-between items-center xl:gap-[1.667vw] gap-[32px] ">
                <div className="flex items-center custom-radio xl:gap-[1.250vw] gap-[20px] px-[16px] xl:px-[0.833vw] py-[10px] xl:py-[0.521vw] border-x">
                  <div className="flex items-center xl:gap-[0.417vw] gap-2">
                    <RadioButton
                      inputId="Budgetyes"
                      name="header"
                      value="Value"
                      onChange={(e) => setBudget(e.value)}
                      checked={Budget === "Value"}
                    />
                    <label
                      htmlFor="Budgetyes"
                      className="text-[#4B586E] dark:text-[#FFF] xl:text-[0.729vw] font-medium xl:leading-[0.729vw] leading-[14px]"
                    >
                      Value
                    </label>
                  </div>
                </div>
                <Link href={"javascript:void(0)"}>
                  <div className="flex items-center bg-[#4F6484] py-[10px] xl:py-[0.521vw] px-[20px] xl:px-[1.042vw] gap-[8px] xl:gap-[0.417vw] rounded-lg">
                    <i className="alb-download-file text-[#FFF]"></i>
                    <div className="text-[16px] xl:text-[0.833vw] text-[#FFF]">
                      Export
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <TabPanel>
              <DataTable
                value={products}
                scrollable
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                rows={10}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                selectionMode={rowClick ? null : "checkbox"}
                selection={selectedProducts}
                filters={filters}
                className=" datatablePlusIcon custTable tableCust custCheckBox ReportTable"
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                rowExpansionTemplate={rowExpansionTemplate}
                dataKey="id"
                // footerColumnGroup={footerGroup}
              >
                <Column
                  field="name"
                  header="Group > Company"
                  style={{ minWidth: "15rem",fontWeight:"500"}}
                  headerClassName="centered"
                />
                <Column
                  expander={allowExpansion}
                  align="center"
                  style={{ minWidth: "1rem" }}
                ></Column>
                <Column
                  field="second"
                  header="01/22"
                  align="center"
                  style={{ minWidth: "11rem" }}
                ></Column>
                <Column
                  field="third"
                  header="01/23"
                  align="center"
                  style={{ minWidth: "11rem" }}
                  className="bg-[#FFF7F2] font-semibold"
                  body={TextBody}
                ></Column>
                <Column
                  field="fourth"
                  header="02/22"
                  align="center"
                  style={{ minWidth: "11rem" }}
                ></Column>
                <Column
                  field="fifth"
                  header="02/23"
                  body={TextBodyFifth}
                  align="center"
                  style={{ minWidth: "11rem" }}
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="sixth"
                  header="03/22"
                  className="tableFont"
                  align="center"
                  style={{ minWidth: "11rem" }}
                ></Column>
                <Column
                  field="seventh"
                  header="03/23"
                  style={{ minWidth: "11rem" }}
                  body={TextBodySeventh}
                  align="center"
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="eighth"
                  header="04/22"
                  style={{ minWidth: "10rem" }}
                  body={TextBodyEight}
                  align="center"
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="ninth"
                  header="MTD 04/22"
                  align="center"
                  style={{ minWidth: "11rem" }}
                ></Column>
                <Column
                  field="tenth"
                  header="MTD 04/23"
                  filter 
                  className="tableFont"
                  align="center"
                  style={{ minWidth: "11rem" }}
                ></Column>
                <Column
                  field="eleventh"
                  header="YTD 22"
                  align="center"
                  style={{ minWidth: "9rem" }}
                ></Column>
                <Column
                  field="twelth"
                  header="YTD 23"
                  style={{ minWidth: "8rem" }}
                  body={TextBodyTwelth}
                  align="center"
                  className="bg-[#FFF7F2] tableFont"
                ></Column>
                <Column
                  field="trend"
                  header="Trend"
                  align="right"
                  body={TrendBody}
                  style={{ minWidth: "4rem",display: 'flex', justifyContent: 'start',alignItems: 'center' }}
                ></Column>
              </DataTable>
            </TabPanel>
            <TabPanel>
              <DataTable
                value={products}
                scrollable
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                rows={10}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                selectionMode={rowClick ? null : "checkbox"}
                selection={selectedProducts}
                filters={filters}
                className=" datatablePlusIcon custTable tableCust custCheckBox ReportTable"
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data)}
                rowExpansionTemplate={rowExpansionTemplate}
                dataKey="id"
                // footerColumnGroup={footerGroup}
              >
                <Column
                  field="name"
                  header="Group > Company"
                  style={{ minWidth: "15rem",fontWeight:"500" }}
                  headerClassName="centered"

                />
                <Column
                  expander={allowExpansion}
                  style={{ minWidth: "1rem" }}
                  align="center"
                ></Column>
                <Column
                  field="second"
                  align="center"
                  header="01/22"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="third"
                  header="01/23"
                  align="center"
                  body={TextBody}
                  style={{ minWidth: "10rem" }}
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="fourth"
                  header="02/22"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="fifth"
                  header="02/23"
                  align="center"
                  body={TextBodyFifth}
                  style={{ minWidth: "10rem" }}
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="sixth"
                  header="03/22"
                  align="center"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="seventh"
                  header="03/23"
                  align="center"
                  style={{ minWidth: "10rem" }}
                  body={TextBodySeventh}
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="eighth"
                  align="center"
                  header="04/22"
                  style={{ minWidth: "12rem" }}
                  className="bg-[#FFF7F2] font-semibold"
                  body={TextBodyEight}
                ></Column>
                <Column
                  field="ninth"
                  filter 
                  header="MTD 04/22"
                  align="center"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="tenth"
                  header="MTD 04/23"
                  align="center"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="eleventh"
                  header="YTD 22"
                  align="center"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="twelth"
                  header="YTD 23"
                  body={TextBodyTwelth}
                  align="center"
                  style={{ minWidth: "10rem" }}
                  className="bg-[#FFF7F2] tableFont"
                ></Column>
                <Column
                  field="trend"
                  header="Trend"
                  body={TrendBody}
                  style={{ minWidth: "4rem",display: 'flex', justifyContent: 'start',alignItems: 'center' }}
                ></Column>
              </DataTable>
            </TabPanel>
            <TabPanel>
              <DataTable
                value={products}
                scrollable
                responsiveLayout="scroll"
                style={{ width: "100%" }}
                rows={10}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                selectionMode={rowClick ? null : "checkbox"}
                selection={selectedProducts}
                filters={filters}
                className=" datatablePlusIcon custTable tableCust custCheckBox ReportTable"
                dataKey="id"
                // footerColumnGroup={footerGroup}
              >
                <Column
                  field="name"
                  header="Group > Company"
                  style={{ minWidth: "17rem",fontWeight:"500" }}
                  headerClassName="centered"
                />
                <Column
                  field="second"
                  header="01/22"
                  align="center"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="third"
                  header="01/23"
                  align="center"
                  style={{ minWidth: "10rem" }}
                  className="bg-[#FFF7F2] font-semibold"
                  body={TextBody}
                ></Column>
                <Column
                  field="fourth"
                  header="02/22"
                  align="center"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="fifth"
                  header="02/23"
                  align="center"
                  style={{ minWidth: "10rem" }}
                  body={TextBodyFifth}
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="sixth"
                  header="03/22"
                  align="center"
                  style={{ minWidth: "10rem" }}
                ></Column>
                <Column
                  field="seventh"
                  header="03/23"
                  align="center"
                  style={{ minWidth: "10rem" }}
                  body={TextBodySeventh}
                  className="bg-[#FFF7F2] font-semibold"
                ></Column>
                <Column
                  field="eighth"
                  header="04/22"
                  align="center"
                  style={{ minWidth: "12rem" }}
                  className="bg-[#FFF7F2] font-semibold"
                  body={TextBodyEight}
                ></Column>
                <Column
                  field="ninth"
                  header="MTD 04/22"
                  filter 
                  style={{ minWidth: "10rem" }}
                  align="center"
                ></Column>
                <Column
                  field="tenth"
                  header="MTD 04/23"
                  className="tableFont"
                  style={{ minWidth: "10rem" }}
                  align="center"
                ></Column>
                <Column
                  field="eleventh"
                  header="YTD 22"
                  style={{ minWidth: "10rem" }}
                  align="center"
                ></Column>
                <Column
                  field="twelth"
                  header="YTD 23"
                  style={{ minWidth: "10rem" }}
                  className="bg-[#FFF7F2] tableFont"
                  body={TextBodyTwelth}
                  align="center"
                ></Column>
                <Column
                  field="trend"
                  header="Trend"
                  body={TrendBody}
                  style={{ minWidth: "4rem",display: 'flex', justifyContent: 'start',alignItems: 'center' }}
                ></Column>
              </DataTable>
            </TabPanel>
          </div>
          <ChartDialog
            visible={chartVisible}
            onHides={() => setChartVisible(false)}
            data={["Jan", "Feb", "Mar", "Apr"]}
            series1={[0, 8, 5, 18, 20, 10, 20, 32, 40, 48]}
            series2={[20, 30, 20, 25, 32, 15, 20, 28, 20, 32, 28]}
            grid={{
              right: 10,
              left: 22,
              bottom: 40,
              top: 20,
            }}
            name1={"2022"}
            name2={"2023"}
            legend={{
              show: true,
              bottom: "0%",
              left: "0%",
              color: "#8276B1",
              itemWidth: 10,
              itemHeight: 12,
            }}
            // title={{
            //   text: 'Trend Analysis'
            // }}
            maxvalue={40}
          />
        </Tabs>
      </div>
    </Layout>
  );
};

export default ManageReports;
