// * DEPENDS 
import React from 'react';

// * CSS
import '../../CSS/Pages_home/Intro.css';


const Intro = () => {

    return(
        <div className="Intro">
            <div className="Intro__header">
                <span className="header__copy">Welcome to Audio Contractors LLC.</span>    
            </div>
            <div className="Intro__imgContainer" aria-label='modern home theater set up'></div>            
            <div className="Intro__contentContainer" aria-label='company description'>
                <h3 className="contentContainer__subheader">Providing simply the best whole-home audio/visual integrations since 1997, <span id="companyName">Audio Contractors LLC</span> has embraced modern technology to expand the possibilities of your home & corporate projects. </h3>
                <div className="contentContainer__bodyContainer">
                    <p className='bodyContainer__copy'><span id="homebullet">&#9658;</span> Our approach to Residential, Commercial, & Pro AV consultation is personalized from start to finish. Our sales experts handle the design, installation, and ongoing service; while our technicians physically install and support your system.</p>
                    <p className='bodyContainer__copy'><span id="homebullet">&#9658;</span> We work with a constantly-growing list of vendors to offer products for end-to-end solutions that meet goals & budget alike. Distributed home or office audio, lighting control, surveillance systems, infrastructure prewire, networking, home theaters ... the list is just getting started.</p>
                    <p className='bodyContainer__copy'><span id="homebullet">&#9658;</span> Our team works tirelessly to make sure customers know their system starting day one, and beyond. We are commited to empowering customers to own their system through collaborative design and on-site orientation, in order to create a life-changing experience.</p>
                </div>
            </div>
        
        </div>
    );
};

export default Intro;