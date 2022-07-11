// * DEPENDS. 
import React from 'react';

// * CSS 
import "../../CSS/Pages_home/AboutUsCaro.css";

export const CaptionItem = ({children, width}) => {

    return(
        <div className="CaptionItem" style={{width: width}}>
            {children}
        </div>
    );
};


const CaptionCaro = (props) => {
    // console.log("caption caro props >>",props)
    return (
        <div className="CaptionCaro">
            <div className="captionCaro__inner" style={{transform: `translateX(-${props.activeIndex * 100}%)`}}>
                {props.children.map((child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
        </div>
    );
};

export default CaptionCaro