// * DEPENDS. 
import React from 'react';

// * CSS 
import "../../CSS/Pages_aux/WaitingScreen.css";



const GalleryWaitingScreen = () => {   
    // ? some code that supports switching out the caption on the loading screen but iut's not really needed ATM since the CDN has been loading so fast. 
    // const style_show = {
    //     display: "block"
    // }
    
    // const style_hide = {
    //     display: "none"
    // }

    // const [style1, setStyle1] = useState(style_show);
    // const [style2, setStyle2] = useState(style_hide);
    
    
    // useEffect(() => {
    //     setTimeout(() => { return setStyle1(style_hide), setStyle2(style_show)}, 7000)
    // },[])

    return(
        <div className='WaitingScreen'>
            <div className='WaitingScreen__iconContainer'>
                <div class="iconContainer__center">
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                    <div class="center__wave"></div>
                </div>
            </div>
            <div className='WaitingScreen__copyContainer'>
                {/* <p className='copyContainer__caption' id="caption_1" style={style1}>PLEASE WAIT</p>
                <p className='copyContainer__caption' id="caption_2" style={style2}>GALLERY LOADING</p> */}
                <p className='copyContainer__caption' id="caption_1">PLEASE WAIT</p>
            </div>
            
        </div>
    );
};

export default GalleryWaitingScreen;