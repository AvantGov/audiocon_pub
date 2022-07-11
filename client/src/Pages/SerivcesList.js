// * DEPENDS.
import React from 'react';
import { Link } from 'react-router-dom';

// * CSS
import "../CSS/MainPages/ServicesList.css"

// * COMPS
import ServiceBanner from '../Components/Pages_services/ServiceBanner';

const ServicesList = () => {

    return (
        <div className="ServicesList">
            <ServiceBanner />
            <Link to="/CommercialServices" className="ServicesList__link" id="service_commercial">
                <div className="ServicesList__service">
                    <h1 className="service__lable">Commercial Services</h1>
                </div>
            </Link>
            <Link to="/ResidentialServices" className="ServicesList__link" id="service_residential">
                <div className="ServicesList__service">
                    <h1 className="service__lable">Residential Services</h1>
                </div>
            </Link>
            <Link to="/brands" className="ServicesList__link" id="service_brands">
                <div className="ServicesList__service">
                    <h1 className="service__lable">Our Brands</h1>
                </div>
            </Link>
        </div>
    );
};

export default ServicesList;
