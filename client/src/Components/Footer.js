// * DEPENDS.
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// * CSS
import '../CSS/Footer.css'

const Footer = () => {
    // handles hiding the comp when there is a gallery displayed
    const hide = useSelector(state => { return state.gallery.value})

    return(
        <div className="Footer" style={{display: hide ? "none" : "flex"}}>
            <div className="Footer__companyContainer">
                {/* <h3 className="companyContainer__header">Company</h3> */}
                <div id="madisonbuilders" className="companyContainer__affiliateIcon"></div>
                <div className="infoContainer__socialContainer">
                    <a className='social__link' href="https://www.facebook.com/audiocontractors/" target="_blank" rel="noopener noreferrer">
                        <div id="facebook" className="socialContainer__social"></div>
                    </a>
                    <a className='social__link' href="https://www.linkedin.com/company/audio-contractors-llc/" target="_blank" rel="noopener noreferrer">
                        <div id="instagram" className="socialContainer__social"></div>
                    </a>
                    <a className='social__link' href="https://www.bbb.org/us/wi/oregon/profile/electronic-equipment-dealers/audio-contractors-llc-0694-14038344" target="_blank" rel="noopener noreferrer">
                        <div id="BBB" className="socialContainer__social"></div>        
                    </a>
                </div>
            </div>
            <div className="Footer__infoContainer">
                <h3 className="infoContainer__header">Contact:</h3>
                <div className="infoContainer__contactContainer">
                    <div className="contactContainer__phone">
                        <p className="phone__number"><span className="phone__icon"> </span> <a href="tel:6088350556">608 - 835 - 0556</a></p>
                        <p className="phone__hours">We are in office 8a-4p Monday through Friday</p>
                    </div>
                    <div className="contactContainer__email">
                        <span className="email__icon"> </span>
                        <p className="email__address"><a href="mailto:info@audiocontractorsllc.com">info@audiocontractorsllc.com</a></p>
                    </div>
                </div>
                <div className="companyContainer__addressContainer">
                    <p id="streetAddress" className="addressContainer__address"><span className="map__icon"> </span> <a href="https://goo.gl/maps/9BRRkMkA3fwEeDy37" target="_blank" rel="noopener noreferrer"> 1015 North Main Street Suite F </a></p>
                    <p id="stateAddress" className="addressContainer__address">Oregon, WI 53575</p>
                </div>
            </div>
            <div className="Footer__siteMap">
                <p id="SM_title" className="siteMap__header">Site Map:</p>
                {/* services: resi, comm | our team | gallery: resi, comm | home | brands */}
                <p id="SM_homepage" className="siteMap__link"><Link to="/">Home</Link></p>
                <p id="SM_experts" className="siteMap__link"><Link to="/team">Our Team</Link></p>
                <p id="SM_careers" className="siteMap__link"><Link to='/apply'>Careers</Link></p>
                <p id="SM_services" className="siteMap__link"><Link to='/serviceslist'>Services</Link></p>
                    <p id="SM_services_resi" className="siteMap__sublink"><Link to='/residentialservices'>Residential Services</Link></p>
                    <p id="SM_services_comm" className="siteMap__sublink"><Link to='/commercialservices'>Commercial Services</Link></p>
                <p id="SM_gallery" className="siteMap__link"><Link to='/gallery'>Gallery</Link></p>
                    <p id="SM_gallery_resi" className="siteMap__sublink"><Link to='/gallery/residentialgallerylist'>Residential Gallery</Link></p>
                    <p id="SM_gallery_comm" className="siteMap__sublink"><Link to='/gallery/commercialgallerylist'>Commercial Gallery</Link></p>
                <p id="SM_brands" className="siteMap__link"><Link to='/brands'>Brands</Link></p>
            </div>            
        </div>
    );
};

export default Footer;
