// * DEPENDS.
import React from 'react';
import { Link } from 'react-router-dom';

// * DATA 
import { jobs } from "../../assets/data/jobs.js";


// * CSS 
import "../../CSS/Pages_careers/Positions.css";


const Positions = () => {
    return(
        <div className='Positions'>
            {jobs.map((item) => {
                return(
                    <div className='Positions__job'> 
                       <div className='job__positiontitleContainer'>
                           <h1 className='positiontitleContainer__title'>{item.title}</h1>
                           <p className='positiontitleContainer__subtitle'>{item.subtitle}</p>
                       </div>
                       <div className='job__jobinfoContainer'>
                           <h3 className='jobinfoContainer__title'>Description:</h3>
                           {item.description.map((bullet) => {
                               return(
                                   <p className='jobinfoContainer__bullet'><span className="bullet">&#8226;</span>{bullet}</p>
                               )
                           })}
                       </div>
                       <div className='job__requirementsContainer'>
                           <h3 className='requirementsContainer__title'>Requirements:</h3>
                           {item.requirements.map((bullet) => {
                               return(
                                   <p className='requirementsContainer__bullet'><span className="bullet">&#8226;</span>{bullet}</p>
                               )
                           })}
                       </div>
                        <div className='job__compensationContainer'>
                            <div className='compensationContainer__detailContainer'>
                                <div className='detailContainer__benefitsContainer'>
                                    <h3 className='benefitsContainer__title'>Benefits</h3>
                                    <div className='benefitsContainer__benefitsBox'>
                                        {item.compensation.benefits.map((bullet) => {   
                                            return(
                                                <p className='benefitsBox__bullet'><span className="bullet">&#8226;</span>{bullet}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to={`${item.id}`} className='job__link'>
                            <div id="button_Positions" className='link__button'>
                                <p className='button__lable' id="apply_lable">Apply Now</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Positions;