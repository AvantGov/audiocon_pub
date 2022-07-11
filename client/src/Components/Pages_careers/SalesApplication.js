// * DEPENDS. 
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

// * DATA
import { brands } from "../../assets/data/brands.js";

// * CSS 
import "../../CSS/Pages_careers/SalesApplication.css";

const SalesApplication = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ isCertified, setIsCertified ] = useState(false)

    // used the check if the errors object is empty in order to show or hide the container at the bottom of the screen. 
    const isEmpty = (obj) => {
        if (Object.keys(obj).length === 0) {
            return false
        } else {
            return true
        }
    };

    // used to check the existence of a specified error, to apply element.style properties to inputs.
    const hasError = (obj, target) => {
        if (Object.keys(obj).includes(target)) {
            return true
        } else {
            return false
        }
    };

    // handling email submissions 
    let navigate = useNavigate();

    const formSubmit = (data) => {  
        emailjs.send(process.env.REACT_APP_EJSSID,process.env.REACT_APP_EJSTID,data,process.env.REACT_APP_EJSPK)
            .then((res) => {
                console.log("success", res)
                navigate("/confirmation")
            })
            .catch((err) => {
                console.log("failure", err)
                window.alert("there was a error emailing")
            })
        console.log(data)

    };

    return(
        <div className='SalesApplication'>
            {/* some of the modular naming system becomes broken here, classNames may not be reflective of P/C relationships */}
            <form id="form_salesapplication" className="SalesApplication__form" onSubmit={handleSubmit(formSubmit)}>
                <div className="salesapplication__subheaderContainer" id="container_piiheader">
                    <h1 className="subheaderContainer__header">Contact Information</h1>
                    <hr className='application_HR'/>
                </div>
                <div className="salesapplication__piiContainer">
                    <div className="piiContainer__inputContainer">
                        <lable id="lable_firstName" className='salesapplication__lable' data-lpignore="true">First Name</lable>
                        <input 
                            id="firstName"
                            name="firstName" 
                            className='salesapplication__input' 
                            type="text" 
                            style={{border: hasError(errors,"firstName") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                            {...register("firstName", { required: true, maxLength: 50, pattern: /^[A-Za-z]+$/i })} 
                        />
                    </div>
                    <div className="piiContainer__inputContainer">
                        <lable id="lable_lastName" className='salesapplication__lable'>Last Name</lable>
                        <input 
                            id="lastName"
                            name="lastName" 
                            className='salesapplication__input' 
                            type="text" 
                            style={{border: hasError(errors,"lastName") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                            {...register("lastName", { required: true, maxLength: 50, pattern: /^[A-Za-z]+$/i })} 
                        />
                    </div>
                    <div className="piiContainer__inputContainer">
                        <lable id="lable_phone" className='salesapplication__lable'>Contact Phone</lable>
                        <input 
                            id="phone"
                            name="phone" 
                            className='salesapplication__input' 
                            type="tel" 
                            style={{border: hasError(errors,"phone") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                            {...register("phone", {required: true, maxLength: 12, pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i })} 
                        />
                    </div>
                    <div className="piiContainer__inputContainer">
                        <lable id="lable_email" className='salesapplication__lable'>Contact Email</lable>
                        <input id="email" name="email" className='salesapplication__input' type="email" {...register("email", {required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i })} />
                        {/* browser handles error message */}
                    </div>
                </div>

                <div className="salesapplication__subheaderContainer" id="container_authheader">
                    <h1 className="subheaderContainer__header">Work Authorization</h1>
                    <hr className='application_HR'/>
                </div>
                <div className='salesapplication__authContainer'>
                    <div className='authContainer__inputContainer'>
                        <lable id="lable_ageCheck" className='salesapplication__lable'>Are you above the age of 18?</lable>
                        <input id="ageCheck" name="ageCheck" className='salesapplication__box' type="checkbox" {...register("ageCheck")} />
                    </div>
                    <div className='authContainer__inputContainer'>
                        <lable id="lable_workCheck" className='salesapplication__lable'>Are you authorized to work in the US?</lable>
                        <input id="workCheck" name="workCheck" className='salesapplication__box' type="checkbox" {...register("workCheck")} />
                    </div>
                    <div className='authContainer__inputContainer'>
                        <lable id="lable_driveCheck" className='salesapplication__lable'>Do you have a valid drivers license?</lable>
                        <input id="driveCheck" name="driveCheck" className='salesapplication__box' type="checkbox" {...register("driveCheck")} />
                    </div>
                </div>

                <div className="salesapplication__subheaderContainer" id="container_certheader">
                    <h1 className="subheaderContainer__header">Certifications & Knowledge</h1>
                    <hr className='application_HR'/>
                </div>
                <div className='salesapplication__certContainer'>
                    <div className='certContainer__inputContainer'>
                        <lable id='lable_certCheck' className='salesapplication__lable'>Do you have any professional certifications that relate to AV?</lable>
                        <input id="certCheck" className='salesapplication__box' type="checkbox" onClick={() => {setIsCertified(true)}} {...register("certCheck")} />
                    </div>
                    {isCertified ?  
                        <div className='salesapplication__listContainer'>
                            <p className='listContainer__instructions'>Please list 3 most recent & relevant certifications below</p>
                            <div className="listContainer__inputContainer">
                                <input id="certList1" name="certList1" type="text" {...register("certList1", {maxLength: 100, minLength: 1})} />
                            </div>
                            <div className="listContainer__inputContainer">
                                <input id="certList2" name="certList2" type="text" {...register("certList2", {maxLength: 100, minLength: 1})} />
                            </div>
                            <div className="listContainer__inputContainer">
                                <input id="certList3" name="certList3" type="text" {...register("certList3", {maxLength: 100, minLength: 1})} />
                            </div>
                        </div> 
                    : null}
                </div>

                <div className='salesapplication__brandsContainer'>
                    <p className='salesapplication__instruction'>Please select three brands that you are most familiar with in a professional or educational setting.</p>
                    <div className="salesapplication__selectContainer">
                    <select id="brandSelect_1" name="brandSelect_1" className='salesapplication__select' {...register("brandSelect_1", {required: true})}>
                        {brands.map((item) => {
                            return(
                                <option value={item.lable}>{item.lable}</option>
                            )
                        })}
                    </select>
                    <select id="brandSelect_2" name="brandSelect_2" className='salesapplication__select' {...register("brandSelect_2", {required: true})}>
                        {brands.map((item) => {
                            return(
                                <option value={item.lable}>{item.lable}</option>
                            )
                        })}
                    </select>
                    <select id="brandSelect_3" name="brandSelect_3" className='salesapplication__select' {...register("brandSelect_3", {required: true})}>
                        {brands.map((item) => {
                            return(
                                <option value={item.lable}>{item.lable}</option>
                            )
                        })}
                    </select>
                    </div>
                </div>

                <div className="salesapplication__subheaderContainer" id="container_JHheader">
                    <h1 className="subheaderContainer__header">Previous Employement</h1>
                    <hr className='application_HR'/>
                </div>
                <div className="salesapplication__jobhistoryContainer">
                    <div className='jobhistoryContainer__job'>
                        <div className="jobhistoryContainer__subheaderContainer">
                            <h1 className="subheaderContainer__header">Job 1</h1>
                            <hr className='application_HR'/>
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_title_1" className='salesapplication__lable'>Title</lable>
                            <input 
                                id="jobhistory_title_1"
                                name="jobhistory_title_1" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_title_1") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_title_1", {required: true, maxLength: 75 })} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_company_1" className='salesapplication__lable'>Company Name</lable>
                            <input 
                                id="jobhistory_company_1"
                                name="jobhistory_company_1" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_company_1") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_company_1", {required: true, maxLength: 75 })} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_startdate_1" className='salesapplication__lable'>Start Date</lable>
                            <input 
                                id="jobhistory_startdate_1"
                                name="jobhistory_SD_1" 
                                className='salesapplication__input' 
                                type="date" 
                                style={{border: hasError(errors,"jobhistory_SD_1") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}} 
                                {...register("jobhistory_SD_1", {required: true})} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_enddate_1" className='salesapplication__lable'>End Date</lable>
                            <input 
                                id="jobhistory_enddate_1"
                                name="jobhistory_ED_1" 
                                className='salesapplication__input' 
                                type="date" 
                                style={{border: hasError(errors,"jobhistory_ED_1") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}} 
                                {...register("jobhistory_ED_1")} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_curemployment_1" className='salesapplication__lable'>I am currently employed here</lable>
                            <input 
                                id="jobhistory_curemployment_1"
                                name="jobhistory_curemployment_1" 
                                className='salesapplication__input' 
                                type="checkbox" 
                                style={{border: hasError(errors,"jobhistory_curemployment_1") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}} 
                                {...register("jobhistory_curemployment_1")} 
                            />
                        </div>
                        <div className="job__inputContainer" id="job__textareaContainer">
                            <lable id="lable_jobhistory_desc_1" className='salesapplication__lable'>Please briefly describe the responsibilities during your time in this role.</lable>
                            <textarea 
                                id="jobhistory_desc_1" 
                                name="jobhistory_desc_1" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_desc_1") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}} 
                                {...register("jobhistory_desc_1", {required: true})} 
                            />
                        </div>
                    </div>
                    <div className='jobhistoryContainer__job'>
                        <div className="jobhistoryContainer__subheaderContainer">
                            <h1 className="subheaderContainer__header">Job 2</h1>
                            <hr className='application_HR'/>
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_title_2" className='salesapplication__lable'>Title</lable>
                            <input 
                                id="jobhistory_title_2"
                                name="jobhistory_title_2" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_title_2") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_title_2", { maxLength: 75 })} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_company_2" className='salesapplication__lable'>Company Name</lable>
                            <input 
                                id="jobhistory_company_2"
                                name="jobhistory_company_2" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_company_2") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_company_2", { maxLength: 75 })} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_startdate_2" className='salesapplication__lable'>Start Date</lable>
                            <input 
                                id="jobhistory_startdate_2"
                                name="jobhistory_SD_2" 
                                className='salesapplication__input' 
                                type="date" 
                                style={{border: hasError(errors,"jobhistory_SD_2") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_SD_2")} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_enddate_2" className='salesapplication__lable'>End Date</lable>
                            <input 
                                id="jobhistory_enddate_2"
                                name="jobhistory_ED_2" 
                                className='salesapplication__input' 
                                type="date" 
                                style={{border: hasError(errors,"jobhistory_ED_2") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_ED_2")} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_curemployment_2" className='salesapplication__lable'>I am currently employed here</lable>
                            <input 
                                id="jobhistory_curemployment_2"
                                name="jobhistory_curemployment_2" 
                                className='salesapplication__input' 
                                type="checkbox" 
                                style={{border: hasError(errors,"jobhistory_curemployment_2") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_curemployment_2")} 
                            />
                        </div>
                        <div className="job__inputContainer" id="job__textareaContainer">
                            <lable id="lable_jobhistory_desc_2" className='salesapplication__lable'>Please briefly describe the responsibilities during your time in this role.</lable>
                            <textarea 
                                id="jobhistory_desc_2"
                                name="jobhistory_desc_2" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_desc_2") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_desc_2")} 
                            />
                        </div>
                    </div>
                    <div className='jobhistoryContainer__job'>
                        <div className="jobhistoryContainer__subheaderContainer">
                            <h1 className="subheaderContainer__header">Job 3</h1>
                            <hr className='application_HR'/>
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_title_3" className='salesapplication__lable'>Title</lable>
                            <input 
                                id="jobhistory_title_3"
                                name="jobhistory_title_3"
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_title_3") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_title_3", { maxLength: 75 })} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_company_3" className='salesapplication__lable'>Company Name</lable>
                            <input 
                                id="jobhistory_company_3"
                                name="jobhistory_company_3" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_company_3") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_company_3", { maxLength: 75 })} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_startdate_3" className='salesapplication__lable'>Start Date</lable>
                            <input 
                                id="jobhistory_startdate_3"
                                name="jobhistory_SD_3" 
                                className='salesapplication__input' 
                                type="date" 
                                style={{border: hasError(errors,"jobhistory_SD_3") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_SD_3")} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_enddate_3" className='salesapplication__lable'>End Date</lable>
                            <input 
                                id="jobhistory_enddate_3"
                                name="jobhistory_ED_3" 
                                className='salesapplication__input' 
                                type="date" 
                                style={{border: hasError(errors,"jobhistory_ED_3") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_ED_3")} 
                            />
                        </div>
                        <div className="job__inputContainer">
                            <lable id="lable_jobhistory_curemployment_3" className='salesapplication__lable'>I am currently employed here</lable>
                            <input 
                                id="jobhistory_curemployment_3" 
                                name="jobhistory_curemployment_3"
                                className='salesapplication__input' 
                                type="checkbox" 
                                style={{border: hasError(errors,"jobhistory_curemployment_3") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_curemployment_3")} 
                            />
                        </div>
                        <div className="job__inputContainer" id="job__textareaContainer">
                            <lable id="lable_jobhistory_desc_3" className='salesapplication__lable'>Please briefly describe the responsibilities during your time in this role.</lable>
                            <textarea 
                                id="jobhistory_desc_3"
                                name="jobhistory_desc_3" 
                                className='salesapplication__input' 
                                type="text" 
                                style={{border: hasError(errors,"jobhistory_desc_3") ? "1.5px solid #F20000" : "1.5px solid #1E132A"}}
                                {...register("jobhistory_desc_3")} 
                            />
                        </div>
                    </div>
                </div>
                
                <div className='salesapplication__coverletterContainer'>
                    <lable id="lable_coverletter" className='salesapplication__lable'>In a few sentences, what makes you a good fit for this role?</lable>
                    <textarea id="salesapplication_coverletter" className='salesapplication__textarea' {...register("coverletter", {required: true})} />
                </div>    

                <div className='salesapplication__errors' style={{display: isEmpty(errors) ? "block" : "none"}}>
                <p className='errors__dialog'>Please resolve the following errors before submitting:</p>
                <ul className='errors__list'>
                    {errors.firstName && <li className='salesapplication__error'>&#8226; Please enter your legal first name</li>} 
                    {errors.lastName && <li className='salesapplication__error'>&#8226; Please enter your legal family name</li>} 
                    {errors.phone && <li id="phone" className='salesapplication__error'>&#8226; Please enter valid phone number</li>} 
                    {errors.ageCheck && <li id="ageCheck" className='salesapplication__error'>&#8226; Please verify you are atleast 18 years of age</li>} 
                    {errors.workCheck && <li id="workCheck" className='salesapplication__error'>&#8226; Please verify that you are authorized to work in the United States.</li>} 
                    {errors.certList1 && <li id="certList1" className="listContainer__error">&#8226; Please enter name of certification</li>} 
                    {errors.certList1 && <li id="certList2" className="listContainer__error">&#8226; Please enter name of certification</li>} 
                    {errors.certList1 && <li id="certList3" className="listContainer__error">&#8226; Please enter name of certification</li>} 
                    {errors.jobhistory_title_1 && <li id="jobhistory_title_1" className='salesapplication__error'>&#8226; You must enter at least one (1) previous position.</li>} 
                    {errors.jobhistory_company_1 && <li id="jobhistory_company_1" className='salesapplication__error'>&#8226; You must enter at least one (1) previous position.</li>} 
                    {errors.jobhistory_SD_1 && <li id="jobhistory_SD_1" className='salesapplication__error'>&#8226; You must enter at least one (1) previous position.</li>} 
                    {errors.jobhistory_desc_1 && <li id="jobhistory_desc_1" className='salesapplication__error'>&#8226; You must enter at least one (1) previous position.</li>} 
                    {errors.jobhistory_title_2 && <li id="jobhistory_title_2" className='salesapplication__error'>&#8226; Please enter a valid title (Job 2)</li>} 
                    {errors.jobhistory_company_2 && <li id="jobhistory_company_2" className='salesapplication__error'>&#8226; Please enter a valid employer name (Job 2)</li>} 
                    {errors.jobhistory_SD_2 && <li id="jobhistory_SD_2" className='salesapplication__error'>&#8226; Please select a valid start date. (Job 2)</li>} 
                    {errors.jobhistory_desc_2 && <li id="jobhistory_desc_2" className='salesapplication__error'>&#8226; Please describe your responsibilities while in this position. (Job 2)</li>} 
                    {errors.jobhistory_title_3 && <li id="jobhistory_title_3" className='salesapplication__error'>&#8226; Please enter a valid title (Job 3)</li>} 
                    {errors.jobhistory_company_3 && <li id="jobhistory_company_3" className='salesapplication__error'>&#8226; Please enter a valid employer name (Job 3)</li>} 
                    {errors.jobhistory_SD_3 && <li id="jobhistory_SD_3" className='salesapplication__error'>&#8226; Please select a start date. (Job 3)</li>} 
                    {errors.jobhistory_desc_3 && <li id="jobhistory_desc_3" className='salesapplication__error'>&#8226; Please describe your responsibilities while in this position. (Job 3)</li>} 
                </ul>
                </div>
                <input type="submit"/>
            </form>
        </div>
    ); 
};

export default SalesApplication;