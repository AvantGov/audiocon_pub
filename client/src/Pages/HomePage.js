// * DEPENDS.
import React from 'react';


// * COMPS.
import Intro from '../Components/Pages_home/Intro';
import HomePageGallery from '../Components/Pages_home/HomePageGallery';
import CoServices from '../Components/Pages_home/CoServices';
import AboutUs from '../Components/Pages_home/AboutUs';
import Partners from '../Components/Pages_home/Partners';
import RSS from '../Components/Pages_home/RSS_2';
import TestimonialsPreview from '../Components/Pages_home/TestimonialsPreview';


// * CSS 
import "../CSS/MainPages/HomePage.css";

const HomePage = () => {


    return(
        <div className="HomePage">
            <Intro />
            <HomePageGallery />
            <AboutUs />
            <CoServices />
            <TestimonialsPreview />
            <Partners />
            <RSS />
        </div>
    );
};

export default HomePage;