// * DEPENDS. 
import React from 'react';

// * DATA 
import { employee_about } from "../../assets/data/employee_about.js"

// * CSS 
import "../../CSS/Pages_team/TeamList.css";

const TeamList = () => {
    var counter = 0

    return (
        <div className="TeamList">
            <div className="TeamList__employeeContainer">
                {employee_about.map((item => {
                    counter += 1
                    return (
                        <div key={item.key} className='employeeContainer__employee' id={`employee_${counter}`}>
                            <img src={item.img} id={item.key} className="employee__img" alt="employee" />
                    
                            <div className='employee__copyContainer'>
                                <h3 className="copyContainer__name"><span className="firstName">{item.firstName}</span><span className="lastName">{item.lastName}</span></h3>
                                <hr className="copyContainer__rule"/>

                                <div className="copyContainer__info">
                                    <p className="info__position">{item.title}</p>
                                    <p className="info__years">Team Member Since: {item.year}</p>
                                </div>
                            </div>
                        </div>
                    )
                }))}

            </div>
        </div>
    );
};

export default TeamList;