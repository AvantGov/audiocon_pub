// * DEPENDS.
import React from "react";

// * CSS 
import "../../CSS/Pages_services/Brands.css"

// * DATA 
import { brands } from "../../assets/data/brands.js";


const Brands = () => {
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    return (
        <div className="Brands">
            <div className="Brands__intro">
                <div className="intro__titleContainer" id="Brands_titleContainer">
                    <h1 className="titleContainer__title" id="Brands_title">Brands</h1>
                </div>
                <div className="intro__copyContainer" id="Brands_copyContainer">    
                    <h3 className="intro__subheader" id="Brands_subheader_1">Being partnered with a wide variety of prominent AV and automation companies allows us to carefully select products for each design, with quality and utility at front-of-mind.</h3>
                    <hr />
                    <p className="intro__subheader" id="Brands_subheader_2">Click any of the links below to learn more about our brand partners</p>
                </div>
            </div>
            <div className="Brands__brandList">
                {alpha.map((letter) => {
                    return(
                        <div id={`${letter}__container`} className="brandList__sortContainer">
                            <div className="sortContainer__nameContainer">
                                <p id={`${letter}_header`} className="sortContainer__header">{letter}</p>
                                <hr className="sortContainer__rule"/>
                            </div>
                            <div className="sortContainer__brands">
                                {brands.map((brand) => {
                                    if (brand.lable[0] === letter) {
                                        return <a className="brand__link" href={brand.url} key={brand.finalid} id={brand.finalid} target="_blank" rel="noopener noreferrer">{brand.lable}</a>
                                    } else {
                                        return null
                                    }
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Brands;
