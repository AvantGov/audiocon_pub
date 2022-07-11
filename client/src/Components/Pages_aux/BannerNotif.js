// * DEPENDS.
import React from 'react';

// * CSS 
import "../../CSS/Pages_aux/BannerNotif.css";


export default BannerNotif = (props) => {

    return(
        <div className='MobileNotif'>
            <h1 className='BannerNotif__message'>{props}</h1>
        </div>
    );
};