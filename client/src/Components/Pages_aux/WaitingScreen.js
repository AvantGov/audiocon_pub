// * DEPENDS. 
import React from 'react';

// * CSS 
import "../../CSS/Pages_aux/WaitingScreen.css";



const WaitingScreen = () => {    


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
                <p className='copyContainer__caption' id="caption_1">PLEASE WAIT</p>
            </div>
            
        </div>
    );
};

export default WaitingScreen;