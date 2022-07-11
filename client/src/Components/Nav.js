// * DEPENDS *
import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';


// * CSS *
import "../CSS/Nav.css"

// IMGs
import logo from "../assets/icons/audio-contractors-new-logo-with-llc-no-tag-line.svg"


const Nav = () => {
    // reads the statee from store
    const hide = useSelector(state => { return state.gallery.value })

    // handles scroll locking for the menu popup 
    const app = document.getElementById('root')
 
    const lockpage = () => {
        app.style.overflow = 'hidden'
        app.style.height = '100vh';
    }

    const unlockpage = () => {
        app.style.overflow = 'unset';
        app.style.height = '100%';
    }

    return(
        <div className="Nav" style={{display: hide ? "none" : "flex"}}>
            <div className="Nav__logoContainer"><Link id="Nav_homelink" to="/"><img className="Nav__logo" src={logo} alt="Navigate back to homepage (logo)"/></Link></div>
            
            <div className='Nav__icon'>
                <hr className="navIcon"></hr>
                <hr className="navIcon"></hr>
                <Popup
                    trigger={<div className="navIcon">Menu</div>}
                    modal
                    nested
                    closeOnEscape
                    closeOnDocumentClick
                    onOpen={() => {lockpage()}}
                    onClose={() => {unlockpage()}}
                >
                {close => (
                    <div className="modal mobileNav">                        
                        <div className="mobileNav__links">
                            <Link to="/" className="mobileNav__link" aria-label='navigation link to home page' onClick={() => { close()}}>Home</Link>
                            <Link to="/serviceslist" className="mobileNav__link" aria-label='navigation link to services page' onClick={() => { close()}}>Services</Link>
                            <Link to="/gallery" className="mobileNav__link" aria-label='navigation link to gallery page' onClick={() => {  close()}}>Galleries</Link>
                            <Link to="/apply" className="mobileNav__link" aria-label='navigation link to contact us page' onClick={() => { close()}}>Careers</Link>
                        </div>   
                        
                        <div className="mobileNav__actions">
                            <button
                                className="button"
                                onClick={() => {
                                unlockpage()
                                close();
                                }}
                            >
                                close menu
                            </button>
                        </div>
                    </div>
                )}  
                </Popup>
                <hr className="navIcon"></hr>
            </div>
            <div className="Nav__links">
                <Link to="/" className="navlink" aria-label='navigation link to home page'>Home</Link>
                <Link to="/serviceslist" className="navlink" aria-label='navigation link to services page'>Services</Link>
                <Link to="/gallery" className="navlink" aria-label='navigation link to gallery page'>Galleries</Link>
                <Link to="/apply" className="navlink" aria-label='navigation link to contact us page'>Careers</Link>
            </div>    
        </div>
    );
};

export default Nav;