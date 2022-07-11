// * DEPENDS.
import React from 'react';


// * CSS 
import "../../CSS/Pages_gallery/GalleryBanner.css"



const GalleryBanner = () => {

    return(
        <div className='GalleryBanner'>
            <div className="GalleryBanner__titleContainer">
                <h1 className="titleContainer__title">Galleries</h1>
                <h3 className="titleContainer__caption">Select a service category below to see our work.</h3>
            </div>
            <div className="GalleryBanner__copyContainer">
                <h3 className="copyContainer__title">Our <span className="color">Work</span></h3>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span>speaks for itself</p>
            </div>
        </div>
    );
};

export default GalleryBanner;