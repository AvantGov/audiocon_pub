// * DEPENDS.
import React from 'react';

// * CSS 
import "../../CSS/Pages_aux/MobileNotif.css";


export default MobileNotif = (props) => {
    return(
        <div className='MobileNotif'>
            <h1 className='MobileNotif__message'>{props}</h1>
        </div>
    );
};
