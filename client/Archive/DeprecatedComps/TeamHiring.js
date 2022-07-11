// DEPENDS. 
import React from 'react';

// CSS 
import "../../CSS/Pages_team/TeamHiring.css"


const TeamHiring = (props) => {

    return (
        <div className='TeamHiring'>
            <div className='TeamHiring__container'>
                <div className='container__copyContainer'>
                    <h1 id="hiring_title" className='copyContainer__title'>{props.props.title}</h1>
                    <p className='copyContainer__subheader'>click below to start an application:</p>
                </div>
                <div className='container__button'>
                    <p className="button__lable">{props.props.lable}</p>
                </div>
            </div>
        </div>
    );
};

export default TeamHiring;