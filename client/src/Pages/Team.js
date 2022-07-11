// * DEPENDS. 
import React from 'react';


// * COMPS. 
import TeamIntro from '../Components/Pages_team/TeamIntro.js';
import TeamList from '../Components/Pages_team/TeamList.js';

// * CSS 
import "../CSS/MainPages/Team.css";

const Team = () => {


    return (
        <div className="Team">
            <TeamIntro />
            <TeamList />
        </div>
    );
};

export default Team;