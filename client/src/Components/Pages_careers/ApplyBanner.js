// * DEPENDS.
import React from 'react';


// * CSS 
import "../../CSS/Pages_careers/ApplyBanner.css"


const ApplyBanner = () => {

    return(
        <div className='ApplyBanner'>
            <div className="ApplyBanner__titleContainer">
                <h1 className="titleContainer__title">Apply</h1>
                <h3 className="titleContainer__caption">Select a method of application to get started</h3>
            </div>
            <div className="ApplyBanner__copyContainer">
                <h3 className="copyContainer__title">Our <span className="color">Perks:</span></h3>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span> Available benefits include Health Insurance, Sign On Bonus, Retirement Planning, Paid Holiday + PTO, Cell Phone Reimbursement, and more.</p>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span> Learn about & work with products at the forefront of AV and automation technologies. Variety of paid training and vendor certifications opportunities available on the job.</p>
            </div>
        </div>
    );
};

export default ApplyBanner;