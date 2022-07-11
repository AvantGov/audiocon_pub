// * DEPENDS. 
import React from 'react';
import { Link } from 'react-router-dom';


// * CSS
import '../../CSS/Pages_home/CoServices.css';


const CoServices = () => {
    return (
        <div className="CoServices">
            <div className="CoServices__headerContainer">
                <h1 id="HP_serviceheader" className="headerContainer__header">SERVICES</h1>
                <p id="HP_servicesubheader" className="headerContainer__subheader">check out some of our award-winning products & services below</p>
            </div>
            <div className="CoServices__buttonContainer">
                <Link to="/ResidentialServices" className="buttonContainer__link">
                    <div id="residential" className="link__linkBox">
                        <p className="linkBox__label">residential</p>
                    </div>
                </Link>
                <Link to="/CommercialServices" className="buttonContainer__link">
                    <div id="commercial" className="link__linkBox">
                        <p className="linkBox__label">commercial</p>
                    </div>
                </Link>
                <Link to="/brands" className="buttonContainer__link">
                    <div id="brands" className="link__linkBox">
                        <p className="linkBox__label">our brands</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CoServices;
