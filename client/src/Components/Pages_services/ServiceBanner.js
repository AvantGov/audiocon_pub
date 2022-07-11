// * DEPENDS.
import React from 'react';


// * CSS 
import "../../CSS/Pages_services/ServiceBanner.css"



const ServiceBanner = () => {

    return(
        <div className='ServiceBanner'>
            <div className="ServiceBanner__titleContainer">
                <h1 className="titleContainer__title">Services</h1>
                <h3 className="titleContainer__caption">Select a service category to learn more.</h3>
            </div>
            <div className="ServiceBanner__copyContainer">
                <h3 className="copyContainer__title">Our <span className="color">Expertise</span></h3>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span>From first consultation, through design and installation we are here to support your plans and deliver extraordinary service in compliment to our high quality products.</p>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span>We carefully match products from our ever-growing list of vendors in order to offer end-to-end solutions that meet goals & budget alike. </p>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span>From building personal home theater getaways, to seamlessly looping in conference attendees from worlds away, our experts are equipped with skills that bring your visions to fruition.</p>
            </div>
        </div>
    );
};

export default ServiceBanner;