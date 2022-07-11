// * DEPENDS.
import React from 'react';
import {Link} from "react-router-dom";

// * COMPS.
import GalleryBanner from './GalleryBanner';

// * DATA
import { galleries_resi } from '../../assets/data/galleries_resi';

// * CSS 
import "../../CSS/Pages_gallery/ResidentialGalleryList.css"

const ResidentialGalleryList = () => {
    // const dispatch = useDispatch()
    // console.log("current redux props in comp:",props)

    return(
        <div className='ResidentialGalleryList'>
            <GalleryBanner />
            {galleries_resi.map((item) => {
                return(
                    // onClick={() => {dispatch(showGallery())}}
                    <Link to={`/gallery/residentialgallerylist/${item.id}`} className="ResidentialGalleryList__link">
                        <div className='ResidentialGalleryList__galleryContainer'key={item.id} id={`gallerylist_${item.id}`}>
                            <h1 className='galleryContainer__title'>{item.title}</h1>
                            <p className='galleryContainer__icon'>&#8599;</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default ResidentialGalleryList;
