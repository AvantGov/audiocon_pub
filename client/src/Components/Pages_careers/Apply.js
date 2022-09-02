// * DEPENDS.
import React from "react";
import { Link } from "react-router-dom";

// * CSS 
import "../../CSS/Pages_careers/Apply.css";

// * COMPS.
import ApplyBanner from "./ApplyBanner";


const Apply = () => {

    return (
        <div className="Apply">
            <ApplyBanner />
            <a href="https://www.linkedin.com/company/audio-contractors-llc/jobs/" className="Apply__link" target="blank" rel="noreferrer noopener">
                <div className="link__button">
                    <p className="button__lable">Apply on LinkedIn</p>
                    <div id="linkedin" className="button__icon"></div>
                </div>
            </a>
            <a href="https://www.facebook.com/jobs/job-opening/775367437113305/?source=post_homepage_stream&__xts__[0]=68.ARB4-8zp_r-NeB3vDv3EuPzvwpxx2V1zF0o_tyrszDa1DkXcoTqMIK9NWeDX8B1dM4oYa0PgebcNM2QasQVyaQD7g7FBZCiAcqiM8kk_JlRTlBV0C7s4C32KKHrlqCDCJigzXs0Oa8gIZc6LJVlUX08_njF0l25nWwMvksPHB2oITUolotj_QW4wagSkU6uvt61cJhuSaCeUGbsycZJf_hiweuSim7UiZ_mRxqJ8Y67_bGbOnXcLq-KHm6RD8qjCq2kS19yuU3z0bTrq5tGu88_mjGHIWwPDoVygEZmRrXeehtzmXVntBSqp-MQJkopUk0qI2w" className="Apply__link" target="blank" rel="noreferrer noopener">
                <div className="link__button">
                    <p className="button__lable">Apply on Facebook</p>
                    <div id="facebook" className="button__icon"></div>
                </div>
            </a>
            <Link to="/apply/positions" className="Apply__link" target="blank" rel="noreferrer noopener">
                <div className="link__button">
                    <p className="button__lable">Apply on Our Website</p>
                    <div id="website" className="button__icon"></div>
                </div>
            </Link>
        </div>
    );
};


export default Apply;