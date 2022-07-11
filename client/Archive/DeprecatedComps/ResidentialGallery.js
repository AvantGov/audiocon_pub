// * DEPENDS.
import React, {useState} from 'react';


// * UTILs
import StickyView from '../../src/utils/scrolling/StickyView';
import ScrollContext from "../../src/utils/scrolling/ScrollContext"

// * CSS
import "../../CSS/Pages_gallery/ResidentialGallery.css";

// * COMPS 
import WaitingScreen from '../../src/Components/Pages_aux/WaitingScreen';

const ResidentialGallery = (props) => {
    const [scrollingElement, setScrollingElement] = useState(null);
    
    const scrollingElRef = (ref) => {
        setScrollingElement(ref);
    };

    const imgIDArr = [
        "d342aae0-cbae-4311-6402-200045806e00",
        "18301edb-fbaf-482a-6770-30226cf2d800",
        "342b4d98-ab29-4ef2-6c17-e3ca37be4b00",
    ]
    
    const constructURL = (id) => {
        return `https://imagedelivery.net/${process.env.REACT_APP_ACCOUNT_SID}/${id}/public`
    }

    const constructImgStyle = (url) => {
        return {
            backgroundImage:`url(${url})`,
            height: "100%",
            width: "100%",
            backgroundSize: "cover"
        }
    }

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
    }

    // console.log(process.env)

    return(
            <ScrollContext.Provider value={{ scrollingElement }}>
                {/* <div class="progress-container">
                    <div class="progress-bar" id="myBar"></div>
                </div>   */}
                {wait(2000)}
                <div className="scrolling-view" ref={scrollingElRef}>
                    {/* {imgIDArr.map((id) => {
                        
                        return ( 
                            <StickyView height={2000} key={id}>
                                {(proportion) => (
                                    <div className='scrolling-view__imgContainer' style={constructImgStyle(constructURL(id))}></div>
                                )}    
                            </StickyView>
                        )
                    })} */}
                    {imgIDArr.map((id) => {
                        return ( 
                            <StickyView height={2000} key={id}>
                                {(proportion) => (
                                    <div className='scrolling-view__imgContainer' style={constructImgStyle(constructURL(id))}></div>
                                )}    
                            </StickyView>
                        )
                    })}


                    <StickyView height={200}>
                        {(proportion) => (
                            <div className="basic-sticky-content" id="resgal_end">
                                <h1>Return to gallery selection?</h1>
                            </div>
                        )}
                    </StickyView>
                </div>
            </ScrollContext.Provider>
    );
};

export default ResidentialGallery;