// * DEPENDS. 
import React from 'react';
import {Link} from 'react-router-dom';

// * CSS 
import "../CSS/MainPages/Gallery.css";


// * COMPS
import GalleryBanner from '../Components/Pages_gallery/GalleryBanner'; 



const Gallery = () => {

    return(
        <div className='Gallery'>
            <GalleryBanner />
            <Link to="/gallery/commercialgallerylist" className="Gallery__link" id="gallery_commercial">
                <div className="link__galleryLink">
                    <h1 className="galleryLink__lable">Commercial Galleries</h1>
                </div>
            </Link>
            <Link to="/gallery/residentialgallerylist" className="Gallery__link" id="gallery_residential">
                <div className="link__galleryLink">
                    <h1 className="galleryLink__lable">Residential Galleries</h1>
                </div>
            </Link>
        </div>
    );
};

export default Gallery;