// DEPENDS 
import React from "react";

// CSS 
import "../../CSS/Pages_aux/Plane.css"

const Plane = () => {

    return(
        <div className="PlaneContainer">
            <div className="frame">
                <div className="plane-container">
                    <svg 
                        version="1.1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        x="0px" 
                        y="0px"
                        width="1131.53px" 
                        height="379.304px" 
                        viewBox="0 0 1131.53 379.304" 
                        className="plane"
                    >
                        <polygon 
                            fill="#80BCD8" 
                            points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223"
                        />

                        <polygon 
                            fill="#0B72B6" 
                            points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
};

export default Plane;