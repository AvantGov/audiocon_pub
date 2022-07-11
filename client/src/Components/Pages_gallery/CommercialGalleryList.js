// * DEPENDS.
import React from 'react';
import {Link} from "react-router-dom";

//* DATA
import { galleries_comm } from '../../assets/data/galleries_comm';

// * COMPS
import GalleryBanner from './GalleryBanner';


// * CSS 
import "../../CSS/Pages_gallery/CommercialGalleryList.css"

const CommercialGalleryList = () => {

    return(
        <div className='CommercialGalleryList'>
            <GalleryBanner />
            {galleries_comm.map((item) => {
                return(
                    <Link to={`/gallery/commercialgallerylist/${item.id}`} className="CommercialGalleryList__link" key={item.id}>
                        <div className='CommercialGalleryList__galleryContainer' id={`gallerylist_${item.id}`}>
                            <h1 className='galleryContainer__title'>{item.title}</h1>
                            <p className='galleryContainer__icon'>&#8599;</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default CommercialGalleryList;