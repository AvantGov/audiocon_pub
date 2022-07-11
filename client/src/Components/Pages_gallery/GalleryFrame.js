// this will render the components that are seen on the gallery section (hiding the main page components)
    // handles the state change for a gallery being shown 
    // handle the lazy loading of the gallery comps 
    // handles the suspense displaying of the gallery viewing spaces 

// * DEPENDS. 
import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from "react-redux";

// * COMPS
import WaitingScreen from '../Pages_aux/WaitingScreen';

// * CSS 
import "../../CSS/Pages_gallery/GalleryFrame.css"

// * UTILs
import { hideGallery, showGallery  } from "../../utils/features/gallerySlice";
// 'hidegallery' is also available from the store, just not implemented at this time. 


// * LAZY LOADED
const GalleryViewer = React.lazy(() => import("./GalleryViewer.js"))

const GalleryFrame = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(() => {
        // console.log("mount run")
        dispatch(showGallery())
        return () => {
            // console.log("cleanup run")
            dispatch(hideGallery())
        }
    },[dispatch])
    

    return(
        <div className='GalleryFrame'>
            <Suspense fallback={WaitingScreen}>
                <GalleryViewer gallery_id={id}/>
            </Suspense>
        </div>
    );
};

export default GalleryFrame;