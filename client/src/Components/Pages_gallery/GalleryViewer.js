// this will load the actual photo stream of images that will be displayed in the viewing space within the GalleryFrame comp.
// * DEPENDS.
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// * COMPS
import GalleryWaitingScreen from "./GalleryWaitingScreen";
import StartGal from "./StartGal";

// * CSS
import "../../CSS/Pages_gallery/GalleryViewer.css";

// * UTILs
import StickyView from "../../utils/scrolling/StickyView";
import ScrollContext from "../../utils/scrolling/ScrollContext";
import { getImgIds } from "../../utils/fetchers/getImgIds";
import { hideGallery } from "../../utils/features/gallerySlice";


const GalleryViewer = (props) => {
  // for the scrolling effect
  const [scrollingElement, setScrollingElement] = useState(null);
  const scrollingElRef = (ref) => {
    setScrollingElement(ref);
  };

  // for navigating the history object in order to go back (establishes history) 
  const navigate = useNavigate();

  // for getting the images on the page.
  const photo_arr = getImgIds(props.gallery_id);
  
  const constructURL = (id) => {
    return `https://imagedelivery.net/${process.env.REACT_APP_ACCOUNT_SID}/${id}/public`;
  };

  // handling a loading state for the images (to show loading screen)
  const [isLoading, setIsLoading] = useState(true);
  var count = useRef(0);

  // handles the image CSS styling 
  const imgStyle = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "center",
    display: isLoading ? "none" : "flex",
  };

  // handling hiding the nav and footers when the gallery is displayed
  // will need to bring in useEffect in order to handle switching the state at the app level when the comp mounts
  const dispatch = useDispatch()

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <div className="scrolling-view" ref={scrollingElRef} style={{overflow: isLoading ? "hidden" : "scroll"}}>
        <div className="scrolling-view__firstElm">
          <div
            className="firstElm__container"
            style={{ display: isLoading ? "flex" : "none" }}
          >
            <GalleryWaitingScreen />
          </div>
          <div
            className="firstElm__container"
            style={{ display: isLoading ? "none" : "flex" }}
          >
            <StartGal />
          </div>
        </div>

        {photo_arr.map((id) => {
          // handles state change when last img is loaded for loading screen.
            if (count.current === photo_arr.length - 1) {
              return (
                    <StickyView height={1800} key={id}>
                      {(proportion) => (
                        <img
                          className="imgContainer__img"
                          src={constructURL(id)}
                          style={imgStyle}
                          alt="Loading (link may appear broken)"
                          // for testing purposes:
                          // onLoad={lastLoad ? setTimeout(() => {setIsLoading(false)}, 5000) : null}
                          onLoad={() => {return setIsLoading(false)}}
                        />
                      )}
                    </StickyView>
                  );
                } else {
                  count.current += 1
                    return (
                        <StickyView height={1800} key={id}>
                          {(proportion) => (
                            <img
                              className="imgContainer__img"
                              src={constructURL(id)}
                              style={imgStyle}
                              alt="Loading (link appear broken)"
                              // for testing purposes:
                              // onLoad={lastLoad ? setTimeout(() => {setIsLoading(false)}, 5000) : null}
                            />
                          )}
                        </StickyView>
                      );
                }
        })}

        <StickyView height={200}>
          {(proportion) => (
            <div className="basic-sticky-content" id="resgal_end">
              {/* eslint-disable-next-line */}
                <div className="link__linkContainer" id="link_galleryClose" onClick={() => {return navigate(-1), dispatch(hideGallery())}}>
                  <h1 className="linkContainer__lable" id="lable_galleryClose">
                    Return to Galleries
                  </h1>
                </div>
            </div>
          )}
        </StickyView>
      </div>
    </ScrollContext.Provider>
  );
};

export default GalleryViewer;
