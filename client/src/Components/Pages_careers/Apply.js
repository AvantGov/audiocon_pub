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
            <a href="https://www.indeed.com/" className="Apply__link" target="blank" rel="noreferrer noopener">
                <div className="link__button">
                    <p className="button__lable">Apply on Indeed</p>
                    <div id="indeed" className="button__icon"></div>
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