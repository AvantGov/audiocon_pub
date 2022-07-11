// * DEPDENDS. 
import React from 'react';
import {Link} from 'react-router-dom';

// * CSS 
import "../../CSS/Pages_aux/NotFound.css";

const NotFound = () => {

    return(
        <div className='NotFound'>
            <div className='NotFound__imgContainer'>
                
            </div>
            <div className='NotFound__copyContainer'>
                <p className='copyContainer__content'>There is nothing here! <span>&#9785;</span></p>
                <Link to="/" className='copyContainer__link'>&#8617; Return to the Home Page </Link>
            </div>
        </div>
    );
};

export default NotFound;
