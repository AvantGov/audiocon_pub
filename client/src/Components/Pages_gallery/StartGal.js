// * DEPENDS. 
import React from 'react';

// * CSS 
import '../../CSS/Pages_gallery/StartGal.css'

const StartGal = () => {
    return (
        <div className='StartGal'>
            <p className='StartGal__copy'>scroll up and down <br/> to navigate the gallery</p>
            <div className='StartGal__lowerContainer'>                
                <div className='guideContainer__instr' id="instr_mobile">
                    <div className='instr__icon' id="icon_mobile"></div>
                    <p className='instr__copy'>For best experience, rotate device to landscape view.</p>
                </div>
                <div className='guideContainer__instr'>
                    <div className='instr__icon' id="device_scroll"></div>
                    <div className='instr__icon' id="device_swipe"></div>
                </div>
            </div>
        </div>
    );
};

export default StartGal;