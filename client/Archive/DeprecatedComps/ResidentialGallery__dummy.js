// * DEPENDS.
import React, {useState} from 'react';

// * UTILs
import StickyView from '../../src/utils/scrolling/StickyView';
import ScrollContext from "../../src/utils/scrolling/ScrollContext"

// * CSS
import "../../CSS/Pages_gallery/ResidentialGallery.css";

const ResidentialGallery = (props) => {
    const [scrollingElement, setScrollingElement] = useState(null);
    
    const scrollingElRef = (ref) => {
        setScrollingElement(ref);
    };

    // const scrollTrack = () => {
    //     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //     var scrolled = (winScroll / height) * 100;
    //     document.getElementById("myBar").style.width = scrolled + "%";
    //   }
      


    return(
        <ScrollContext.Provider value={{ scrollingElement }}>
            {/* <div class="progress-container">
                <div class="progress-bar" id="myBar"></div>
            </div>   */}
            <div className="scrolling-view" ref={scrollingElRef}>
                <StickyView height={1800}>
                    {(proportion) => (
                        <div className="basic-sticky-content" id="resgal_1">
                            <h6>Scroll to see more</h6>
                        </div>
                    )}
                </StickyView>
                <StickyView height={1800}>
                    {(proportion) => (
                        <div className="basic-sticky-content sticky-content-2" id="resgal_2">
                        </div>
                    )}
                </StickyView>
                <StickyView height={1800}>
                    {(proportion) => (
                        <div className="basic-sticky-content" id="resgal_3">
                        </div>
                    )}
                </StickyView>
                <StickyView height={1800}>
                    {(proportion) => (
                        <div className="basic-sticky-content" id="resgal_4">
                        </div>
                    )}
                </StickyView>
                <StickyView height={1800}>
                    {(proportion) => (
                        <div className="basic-sticky-content" id="resgal_5">
                        </div>
                    )}
                </StickyView>
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