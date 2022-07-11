// * DEPENDS.
import React from 'react';



// * CSS
import "../../CSS/Pages_home/PhotoCaro.css"


export const CaroItem = ({children, width}) => {
    
    return(
        <div className="CaroItem" style={{width: width}}>
            {children}
        </div>
    );
};


const PhotoCaro = (props) => {
    // console.log(props)
    return (
        <div className="PhotoCaro">
            <div className="caro__inner" style={{ transform: `translateX(-${props.activeIndex * 100}%)`}}>
                {props.children.map((child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
        </div>
    );
};

export default PhotoCaro;

