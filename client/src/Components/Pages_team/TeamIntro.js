// DEPENDS.
import React from "react";

// CSS
import "../../CSS/Pages_team/TeamIntro.css";


const TeamIntro = () => {


    return (
        <div className="TeamIntro">
            <div className="TeamIntro__titleContainer">
                <h1 className="titleContainer__title">Our Team</h1>
                <h3 className="titleContainer__caption">We are passionate local leaders offering expertise and support in Audio-Visual integration</h3>
            </div>
            <div className="TeamIntro__copyContainer">
                <h3 id="team_subtitle" className="copyContainer__title">The <span className="color">Facts:</span></h3>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span> Audio Contractors is the most experienced AV Integration company in South Central Wisconsin.</p>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span>With 175+ years of combined experience, we bring passion, expertise, and desire to provide an entertainment experience second to none.</p>
                <p className="copyContainer__bulletpoint"><span className="bullet">&#8226;</span>We live by a very simple philosophy: <strong id="team_parEmph">treat our customers right and they will be our best advertising!</strong></p>
            </div>
        </div>
    );
};

export default TeamIntro;