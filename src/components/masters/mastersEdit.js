import { Sidebar } from "primereact/sidebar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import * as PropTypes from "prop-types";
import { useState } from "react";

function MastersEdit(props) {
    const [region, setRegion] = useState('');
 

    return <Sidebar visible={props.visible} position="right" onHide={props.onHide} blockScroll={true}
         className="customesidebar2">
        <div className="w-full popup-bg px-[24px] xl:px-[1.1250vw] grid grid-cols-1 align-middle">
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
                        <div className="text-[16px] xl:text-[0.833vw] text-[#344054] font-medium mb-[8px]">
                            Region</div>
                        <div className="card flex justify-content-center custInput">
                            <InputText 
                                value={region} 
                                onChange={(e) => { setRegion(e.target.value) }} 
                                placeholder="Type Here"
                                className="w-full md:w-14rem" 
                            />
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

MastersEdit.propTypes = {
    visible: PropTypes.bool,
    onHide: PropTypes.func,
    value: PropTypes.any,
    onChange: PropTypes.func,
    options: PropTypes.any,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default MastersEdit;