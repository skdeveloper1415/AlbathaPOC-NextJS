import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import * as PropTypes from "prop-types";
import { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

function AddNew(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState(null);
    const [designation, setDesignation] = useState('');
    const [reportingManager, setReportingManager] = useState('');
    const [country, setCountry] = useState('');
    const [cluster, setCluster] = useState('');

    const City = [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ];


    return <Sidebar visible={props.visible} position="right" onHide={props.onHide} blockScroll={true}
        className="customesidebar2">
        <div className="w-full popup-bg px-[24px] xl:px-[1.250vw] grid grid-cols-1 align-middle">
            <div className="flex justify-between items-center">
                <div className="text-[#EEF8F4] text-[24px] xl:text-[1.250vw] font-medium leading-8 xl:leading-[1.667vw]">
                    Add Details
                </div>
                <div onClick={props.onHide} className="close-btn cursor-pointer"><i
                    className="redingon-portfolio-close-circle mr-1 text-[20px] xl:text-[1.042vw]"></i> <span>Close</span>
                </div>
            </div>
        </div>
        <div className="h-full overflow-auto">
            <div className="rounded mb-[240px] xl:mb-[12.5vw] bg-[#FFFFFF]  px-3 py-2 ">
                <div className="justify-content-center px-1 space-y-1">
                    <div className="space-y-1 py-1">
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">Application Name</div>
                        <div className="card flex justify-content-center custInput inputPadding">
                            <InputText value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Type here" className="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className="space-y-1 py-1">
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">
                            Email</div>
                        <div className="card flex justify-content-center custInput inputPadding">
                            <InputText value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Type here" className="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className="space-y-1 py-1">
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">
                            Phone No</div>
                        <div className="card flex justify-content-center custInput inputPadding">
                            <InputNumber inputId="withoutgrouping"
                                useGrouping={false}
                                value={phoneNo}
                                onChange={(e) => { setPhoneNo(e.value) }}
                                placeholder="Type here"
                                className="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className="space-y-1 py-1">
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">
                            Designation</div>
                        <div className="card flex justify-content-center custDropdown ">
                            <Dropdown 
                                value={designation}
                                onChange={(e) => {setDesignation(e.value)}} 
                                options={City}
                                optionLabel="name"
                                placeholder="Select"
                                className="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className="space-y-1 py-1">
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">
                            Reporting Manager</div>
                        <div className="card flex justify-content-center custDropdown ">
                            <Dropdown 
                                value={reportingManager}
                                onChange={(e) => {setReportingManager(e.value)}} 
                                options={City}
                                optionLabel="name"
                                placeholder="Select"
                                className="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className="space-y-1 py-1">
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">
                            Country</div>
                        <div className="card flex justify-content-center custDropdown ">
                            <Dropdown 
                                value={country}
                                onChange={(e) => {setCountry(e.value)}} 
                                options={City}
                                optionLabel="name"
                                placeholder="Select"
                                className="w-full md:w-14rem" />
                        </div>
                    </div>
                    <div className="space-y-1 py-1">
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">
                            Cluster</div>
                        <div className="card flex justify-content-center custDropdown ">
                            <Dropdown 
                                value={cluster}
                                onChange={(e) => {setCluster(e.value)}} 
                                options={City}
                                optionLabel="name"
                                placeholder="Select"
                                className="w-full md:w-14rem" />
                        </div>
                    </div>



                </div>

                <div className="absolute bottom-0 right-0 w-full">
                    <div className=" flex justify-end gap-3 bg-[#E5F3EC] px-[24px] xl:px-[1.250vw] py-[24px] xl:py-[1.250vw]">
                        <div className="cust-btn-white" onClick={props.onClick}><Button label="Cancel" /></div>
                        <div className="cust-btn-green" onClick={props.onClick}><Button label="Save" /></div>
                    </div>
                </div>
            </div>
        </div>
    </Sidebar>
}

AddNew.propTypes = {
    visible: PropTypes.bool,
    onHide: PropTypes.func,
    value: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.any,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default AddNew;