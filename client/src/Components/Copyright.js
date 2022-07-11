// * DEPENDS.
import React from 'react';
import { useSelector } from 'react-redux';

// * CSS 
import '../CSS/Copyright.css'


const Copyright = () => {
    // handles hiding the comp when there is a gallery displayed
    const hide = useSelector(state => { return state.gallery.value})

    return (
        <div className="Copyright" style={{display: hide ? "none" : "flex"}}>
            <div className="Copyright__logo"></div>
            <div className="Copyright__copyContainer">
                <p id="disclaim" className="Copyright__copy">Copyright 2022 Audio Contractors LLC.</p>
                <p id="claim" className="copyContainer__copy">Code & Design by <a href="https://avantgov.club" target="_blank" rel="noreferrer">AC</a></p>
            </div>
        </div>
    );
};

export default Copyright;