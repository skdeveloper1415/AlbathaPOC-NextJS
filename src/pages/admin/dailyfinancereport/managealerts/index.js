import FilterComponent from '@/components/filtercomponent'
import Layout from "@/components/layoutAdmin/layoutdailyfinancereport/layout";
import React from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import { useState } from 'react';
import { Tag } from "primereact/tag";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import { Paginator } from "primereact/paginator";
import Link from "next/link";
function Managealerts() {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');
    const [date, setDate] = useState(null);
    const [totalRecords, setTotalRecords] = useState(10)
    const [page, setPage] = useState(1);
    const [rows, setRows] = useState(10);
    const [first, setFirst] = useState(10);
    const products = [
        {
            alertid: "1000",
            year: "2023",
            month: "October",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "Low",
        },
        {
            alertid: "1001",
            year: "2023",
            month: "December",
            type: "Country",
            countrygroup: "Oman",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "Low",
        },
        {
            alertid: "1002",
            year: "2023",
            month: "May",
            type: "Country",
            countrygroup: "Qatar",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "Low",
        },
        {
            alertid: "1003",
            year: "2023",
            month: "October",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "Medium",
        },
        {
            alertid: "1004",
            year: "2023",
            month: "February",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "Medium",
        },
        {
            alertid: "1005",
            year: "2023",
            month: "March",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "Medium",
        },
        {
            alertid: "1006",
            year: "2023",
            month: "April",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "Medium",
        },
        {
            alertid: "1007",
            year: "2023",
            month: "April",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "10%",
            status: "High",
        },
        {
            alertid: "1008",
            year: "2023",
            month: "April",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "100",
            status: "High",
        },
        {
            alertid: "1009",
            year: "2023",
            month: "April",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "100",
            status: "High",
        },
        {
            alertid: "1010",
            year: "2023",
            month: "April",
            type: "Country",
            countrygroup: "UAE",
            metric: "Sales Variance",
            period: "MTD",
            condition: "Greater than ",
            unit: "Percentage",
            value: "100",
            status: "High",
        },

    ];

    const iconList = (rowData) => {
        return (
            <div className='flex items-center' >
                <div className='edit_icon'>
                    <i className="alb-doc-edit text-[#4B586E] text-[20px] xl:text-[1.042vw] mr-[16px] xl:mr-[0.833vw]"
                        onClick={() => setVisible(true)}></i>
                </div>
                <div className='dlt_icon'>
                    <i className="alb-trash  text-[#4B586E] text-[20px] xl:text-[1.042vw]"></i>
                </div>
            </div>
        );
    };
    const statusBodyTemplate = (rowData) => {
        return (
            <>
                <Tag
                    value={rowData.status}
                    severity={getSeverity(rowData.status)}
                    className="text-black"
                ></Tag>
            </>
        );
    };
    const getSeverity = (status) => {
        switch (status) {
            case "High":
                return "danger";

            case "Low":
                return "success";



            case "Medium":
                return "warning";

            case "renewal":
                return null;
        }
    };
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <>
            <Layout
                pageTitle="Manage Alerts"
                pageName="Manage Alerts"
            >
                <FilterComponent />
                <div className="py-[20px] xl:py-[1.042vw] bg-[#FFF] px-[16px] xl:px-[0.833vw] border rounded-t-lg">
                    <div className=" flex justify-between rounded-lg items-center ">
                        <div className='inputsearchbox'>    <span className="p-input-icon-right">
                            <i className="pi pi-search" />
                            <InputText placeholder="Search Alerts" className='text-[14px] xl:text-[0.729vw]' />
                        </span>

                        </div>
                        <div className=''>
                            <Button label="New Alert" icon="pi pi-plus" className='newalertbtn' onClick={() => setVisible(true)} />
                        </div>
                    </div>
                </div>
                <div >
                    <DataTable
                        value={products}
                        totalRecords={totalRecords}
                        scrollable
                        responsiveLayout="scroll"
                        style={{ width: "100%" }}
                        paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
                        currentPageReportTemplate={`Rows per page  {first}-{last} of ${totalRecords}`}
                        // rowsPerPageOptions={[5, 10, 25, 50]}
                        rows={rows}
                        paginator

                        className="   tableCust custCheckBox custTable1 tableCust"

                    >
                        <Column
                            field="alertid"
                            header="Alert ID"
                            style={{ minWidth: "5rem" }}
                        />
                        <Column
                            //   expander={allowExpansion}
                            header="Year"
                            field='year'
                            style={{ minWidth: "2rem" }}
                        ></Column>
                        <Column
                            field="month"
                            header="Month"
                            style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                            field="type"
                            header="Type"
                            style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                            field="countrygroup"
                            header="Country/Group/Company/22"
                            style={{ minWidth: "16rem" }}
                        ></Column>
                        <Column
                            field="metric"
                            header="Metric"
                            style={{ minWidth: "8rem" }}
                        ></Column>
                        <Column
                            field="period"
                            header="Period"
                            style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                            field="status"
                            header="Criticality"
                            body={statusBodyTemplate}
                            style={{ minWidth: "10rem" }}
                        ></Column>
                        <Column
                            field="condition"
                            header="Condition"
                            style={{ minWidth: "7rem" }}
                        ></Column>
                        <Column
                            field="unit"
                            header="Unit"
                            style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                            field="value"
                            header="Value"
                            style={{ minWidth: "5rem" }}
                        ></Column>
                        <Column
                            field="eleventh"
                            header="Action"
                            body={iconList}
                            style={{ minWidth: "6rem" }}
                            className="justify-center"
                        ></Column>

                    </DataTable>
            
                </div>
                <Sidebar visible={visible} blockScroll={true} style={{ borderRadius: "16px 0 0 16px" }} position="right" className='custmSidebar width576' onHide={() => setVisible(false)} >
                    <div className='p-[24px] xl:p-[1.250vw]'>
                        <div className='text-[24px] xl:text-[1.250vw] text-[#374151] font-semibold'>New Alert</div>
                        <div className='mt-[32px] xl:mt-[1.667vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Alert ID *</div>
                        <div className='mt-[8px] xl:mt-[0.417vw]'>
                            <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Insert Alert ID" className='newalertinp bg-[#F5F6F7] w-full rounded-[8px] placeholder:text-[#9CA1AB] placeholder:text-[0.729vw]' />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Year</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" placeholder="-select a year--" className=' w-full rounded-[8px] placeholder:text-[#9CA1AB] placeholder:text-[0.729px]' />
                            <i className='alb-calendar absolute right-[20px] top-[14px] text-[12px] xl:text-[0.866vw]'></i>
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Month</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown  relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Type</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Company" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Country/Group/Company</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Metric</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Period</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px]  xl:text-[0.729vw] font-medium text-[#374151]'>Criticality</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Condition</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='my-[16px] xl:my-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Unit</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='mt-[16px] xl:mt-[0.833vw] text-[14px] xl:text-[0.729vw] font-medium text-[#374151]'>Value</div>
                        <div className='mt-[8px] xl:mt-[0.417vw] customDropdown custmplaceholder relative'>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="--select--" className="w-full md:w-14rem placeholder:text-[#9CA1AB]" />
                        </div>

                        <div className='btnsection flex justify-end items-center  mt-[25px] gap-4 '>
                            <button className='border border-[#BECDE3]  py-[12px] px-[20px] xl:py-[0.325vw] xl:px-[0.832vw] text-[#4B586E] text-[16px] xl:text-[0.866vw] rounded-lg ' onClick={() => setVisible(false)} >
                            Cancel
                            </button>

                            <Link href="#" className='border bg-[#4BA5B7] text-[#fff]  border-[#4BA5B7] py-[12px] px-[20px] xl:py-[0.325vw] xl:px-[0.832vw] text-[16px] xl:text-[0.866vw] rounded-lg'>
                                Submit
                            </Link>
                        </div>

                    </div>



                </Sidebar>
            </Layout>
        </>
    )
}

export default Managealerts