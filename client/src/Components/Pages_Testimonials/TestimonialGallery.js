// this is going to be the container component for the testimonials section, it will handle doing the API call to google 
// then .map() the response, handing the data for each item to a child component (Testimonial.js)

// DEPENDS. 
import React from "react";
// import axios from 'axios';
// ! will need to add back whenever implementing api call 

// CSS 
import "../../CSS/Pages_Testimonials/TestimonialGallery.css";

const TestimonialGallery = () => {

    return( 
        <div className="TestimonialGallery">

        </div>
    )
};

export default TestimonialGallery;