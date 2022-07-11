// * DEPENDS.
import React, {useState} from 'react';
import PhotoCaro, {CaroItem} from './PhotoCaro';

// * CSS
import '../../CSS/Pages_home/HomePageGallery.css'

const HomePageGallery = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    //  ! please update with the current amount of photos in the reel!  
    const photoCount = 12;
    // ! 1-indexed count !

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= photoCount) {
            newIndex = photoCount - 1
        }
        setActiveIndex(newIndex);
    }

    return(
        <div className="HPGallery">
            <div className="HPGallery__copyContainer">
                <h2 id="HPGal_header" className="copyContainer__header">check out some of our latest work</h2>
                <h3 id="HPGal_subheader" className="copyContainer__subheader">We offer personalized consultation about design, installation, service, and support for residential, Pro AV, and commercial projects.</h3>
            </div>
            <div className="copyContainer__controller">
                <div id="control__HPGallery_left" className="controls__button" onClick={() => {
                    updateIndex(activeIndex - 1);
                }}> <span>&#171;</span>
                </div>

                <div className="Gallery__caroContainer">
                    <PhotoCaro activeIndex={activeIndex}> 
                        <CaroItem id='PhotoCaro_1' className='CaroItem'><div id="CaroItem_1" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_2' className='CaroItem'><div id="CaroItem_2" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_3' className='CaroItem'><div id="CaroItem_3" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_4' className='CaroItem'><div id="CaroItem_4" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_5' className='CaroItem'><div id="CaroItem_5" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_6' className='CaroItem'><div id="CaroItem_6" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_7' className='CaroItem'><div id="CaroItem_7" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_8' className='CaroItem'><div id="CaroItem_8" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_9' className='CaroItem'><div id="CaroItem_9" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_10' className='CaroItem'><div id="CaroItem_10" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_11' className='CaroItem'><div id="CaroItem_11" className="CaroFrame"></div></CaroItem>
                        <CaroItem id='PhotoCaro_12' className='CaroItem'><div id="CaroItem_12" className="CaroFrame"></div></CaroItem>
                    </PhotoCaro>
                </div>

                <div id="control__HPGallery_right" className="controls__button" onClick={() => {
                    updateIndex(activeIndex + 1);
                }}> <span>&#187;</span>
                </div>
            </div>
        </div>
    );
};

export default HomePageGallery;


// * in order to support the buttons being outside of the caro itself, i had to get a little hack-y with props 
// * essentially, this note just stands to say that you need to manually track (sorry) the number of photos in the photo caro.
// * you can do that with the photoCount variable in this file. Just count the number of children 
// * that the Caro itself has. If you can figure out how to make this more dynamic and NOT have the buttons in the caro themselves ... my hats off to you. 